import { NextResponse } from "next/server";

const contributionUrl = "https://github.com/users/Sheeeenn/contributions";

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

function attribute(tag: string, name: string) {
  return tag.match(new RegExp(`${name}="([^"]+)"`))?.[1];
}

function parseContributionPage(html: string) {
  const totalMatch = html.match(
    /([\d,]+)\s+contributions?\s+(?:in the last year|in \d{4})/i,
  );
  if (!totalMatch) {
    throw new Error("GitHub contribution total was not found");
  }

  const countsByCell = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip\b[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/gi,
  )) {
    const countMatch = match[2].match(/([\d,]+)\s+contributions?/i);
    countsByCell.set(
      match[1],
      countMatch ? Number(countMatch[1].replaceAll(",", "")) : 0,
    );
  }

  const contributions: Contribution[] = [];
  for (const match of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/gi)) {
    const tag = match[0];
    const date = attribute(tag, "data-date");
    const id = attribute(tag, "id");
    const level = Number(attribute(tag, "data-level"));
    if (!date || !id || level < 0 || level > 4) continue;

    contributions.push({
      date,
      count: countsByCell.get(id) ?? 0,
      level: level as Contribution["level"],
    });
  }

  if (contributions.length < 365) {
    throw new Error("GitHub contribution calendar was incomplete");
  }

  return {
    total: Number(totalMatch[1].replaceAll(",", "")),
    contributions,
    fetchedAt: new Date().toISOString(),
  };
}

export async function GET() {
  try {
    const response = await fetch(contributionUrl, {
      cache: "no-store",
      headers: {
        Accept: "text/html",
        "User-Agent": "sheen-personal-website",
      },
    });
    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const data = parseContributionPage(await response.text());
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Contribution fetch failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
