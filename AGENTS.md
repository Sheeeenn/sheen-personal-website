<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project-specific rules

- This is Justin Sheen Guiriba's personal portfolio website. Keep the visual design minimalist and consistent with the existing neutral palette, borders, spacing, and typography.
- Do not reintroduce BoboBot navigation, floating UI, or the `/bobobot` feature unless explicitly requested.

- Run `npm run build` before committing website changes.
- The repository is connected to Vercel; pushes to `main` trigger deployment.
