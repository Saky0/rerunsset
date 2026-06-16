# Next.js 16 Skill

Use this skill when upgrading, debugging, or adding framework-level behavior for the Next.js 16 app.

## Project Rules

- Use App Router patterns under `src/app`.
- Use `src/proxy.ts` for request interception; never add `middleware.ts`.
- Keep Proxy fast and deterministic. Use it for headers, redirects, rewrites, lightweight routing, or request-aware boundaries.
- Prefer `next.config.ts` redirects or headers for static rules that do not need request data.
- Treat request-time APIs as async: `cookies`, `headers`, `draftMode`, `params`, and `searchParams`.
- Prefer explicit caching with Cache Components and `"use cache"` only where the rendered output is safe to reuse.
- Keep Turbopack as the default by using plain `next dev` and `next build` scripts.

## Checks

- Run `npm run lint` after source changes.
- Run `npm run build` after framework, routing, dependency, or config changes.
- Use Node `20.19.0` or newer.
