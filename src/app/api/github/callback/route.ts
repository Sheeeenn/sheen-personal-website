import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

const clientId =
  process.env.GITHUB_OAUTH_CLIENT_ID ?? "Ov23livQdICu660MuctF";
const repository = process.env.GITHUB_REPOSITORY ?? "Sheeeenn/sheen-personal-website";
const contributionFile = "public/github-contributions.json";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type GraphQLResponse = {
  data?: {
    viewer?: {
      login: string;
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{ contributionDays: ContributionDay[] }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

function levelForCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function safeStateMatch(expected: string | undefined, received: string | null) {
  if (!expected || !received) return false;
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(received);
  return (
    expectedBuffer.length === receivedBuffer.length &&
    timingSafeEqual(expectedBuffer, receivedBuffer)
  );
}

async function exchangeCode(code: string, redirectUri: string) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) throw new Error("GitHub token exchange failed");
  const result = (await response.json()) as { access_token?: string; error?: string };
  if (!result.access_token) throw new Error(result.error ?? "GitHub token was not returned");
  return result.access_token;
}

async function getContributions(accessToken: string) {
  const to = new Date();
  const from = new Date(to);
  from.setUTCDate(from.getUTCDate() - 365);
  const query = `
    query ContributionCalendar($from: DateTime!, $to: DateTime!) {
      viewer {
        login
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "User-Agent": "sheen-personal-website",
    },
    body: JSON.stringify({
      query,
      variables: { from: from.toISOString(), to: to.toISOString() },
    }),
  });

  if (!response.ok) throw new Error("GitHub contribution request failed");
  const result = (await response.json()) as GraphQLResponse;
  if (result.errors?.length) throw new Error(result.errors[0].message);

  const viewer = result.data?.viewer;
  if (!viewer) throw new Error("GitHub did not return the authorized user");
  if (viewer.login.toLowerCase() !== "sheeeenn") {
    throw new Error("The authorized GitHub account is not Sheeeenn");
  }

  const calendar = viewer.contributionsCollection.contributionCalendar;
  return {
    total: calendar.totalContributions,
    contributions: calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelForCount(day.contributionCount),
      })),
    ),
    syncedAt: new Date().toISOString(),
  };
}

async function publishContributions(accessToken: string, content: object) {
  const fileUrl = `https://api.github.com/repos/${repository}/contents/${contributionFile}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    "User-Agent": "sheen-personal-website",
  };
  const existingResponse = await fetch(fileUrl, { headers });
  let sha: string | undefined;
  if (existingResponse.ok) {
    const existing = (await existingResponse.json()) as { sha?: string };
    sha = existing.sha;
  } else if (existingResponse.status !== 404) {
    throw new Error("Could not inspect the contribution data file");
  }

  const body = {
    message: "chore: sync GitHub contribution history",
    content: Buffer.from(JSON.stringify(content, null, 2) + "\n").toString("base64"),
    ...(sha ? { sha } : {}),
  };
  const response = await fetch(fileUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Could not publish contribution history");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  const expectedState = request.headers.get("cookie")?.match(/(?:^|; )github_oauth_state=([^;]+)/)?.[1];

  if (!safeStateMatch(expectedState, state) || !code) {
    return new NextResponse("Invalid GitHub authorization request", { status: 400 });
  }
  if (!process.env.GITHUB_OAUTH_CLIENT_SECRET) {
    return new NextResponse("GITHUB_OAUTH_CLIENT_SECRET is not configured", { status: 500 });
  }

  try {
    const redirectUri = new URL("/api/github/callback", request.url).toString();
    const accessToken = await exchangeCode(code, redirectUri);
    const contributions = await getContributions(accessToken);
    await publishContributions(accessToken, contributions);
    const response = NextResponse.redirect(new URL("/?github=updated", request.url));
    response.cookies.delete("github_oauth_state");
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "GitHub authorization failed";
    return new NextResponse(message, { status: 500 });
  }
}
