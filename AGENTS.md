<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project-specific rules

- This is Justin Sheen Guiriba's personal portfolio website. Keep the visual design minimalist and consistent with the existing neutral palette, borders, spacing, and typography.
- Do not reintroduce BoboBot navigation, floating UI, or the `/bobobot` feature unless explicitly requested.
- The home page GitHub contribution section uses `src/components/ui/GitHubContributions.tsx` and `GET /api/github-contributions`, which reads GitHub's official public contribution calendar. Private activity appears only when the user enables GitHub Profile → Contribution settings → Private contributions. Keep it responsive and never expose repository details or credentials.
- Run `npm run build` before committing website changes.
- The repository is connected to Vercel; pushes to `main` trigger deployment.
