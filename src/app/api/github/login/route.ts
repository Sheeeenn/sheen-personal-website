import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";

const clientId =
  process.env.GITHUB_OAUTH_CLIENT_ID ?? "Ov23livQdICu660MuctF";

export async function GET(request: Request) {
  const state = randomBytes(32).toString("hex");
  const redirectUri = new URL("/api/github/callback", request.url).toString();
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");

  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo read:user read:org");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("github_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  return response;
}
