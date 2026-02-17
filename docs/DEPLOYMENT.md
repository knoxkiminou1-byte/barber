# Vercel Deployment (Vite + React Router)

This project is configured for Vercel static deployment with SPA routing support.

## What is configured

- `vercel.json`
  - framework set to `vite`
  - build output set to `dist`
  - rewrite fallback to `/index.html` so `/services`, `/gallery`, `/team` refresh correctly
- `package.json`
  - `build` and `vercel-build` scripts
  - Node engine range compatible with current Vercel Node runtimes
- `vite.config.ts`
  - React plugin enabled (`@vitejs/plugin-react`)

## Deploy

1. Push this branch to GitHub.
2. In Vercel: **New Project** → import repository.
3. Leave defaults (Vercel detects `vercel.json`).
4. Deploy.

## Optional

If your Vercel project already exists, just trigger a redeploy after merging.
