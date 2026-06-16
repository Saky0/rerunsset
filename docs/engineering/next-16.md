# Next.js 16 Notes

This project targets Next.js `16.2.7`.

## Runtime

Use Node `20.19.0` or newer. Next.js 16 requires Node `20.9.0+`, and the current ESLint toolchain requires a newer Node 20 patch release.

## Project Conventions

- Turbopack is the default for `next dev` and `next build`, so scripts do not pass `--turbopack`.
- Request interception lives in `src/proxy.ts`; `middleware.ts` is deprecated and should not be reintroduced.
- Cache Components are enabled in `next.config.ts`. Add `"use cache"` only to pages, components, or functions whose output is safe to cache.
- Typed routes are enabled to catch invalid internal route references at compile time.

## Proxy

The Proxy file currently applies lightweight response security headers. Keep future logic small and request-aware. If a rule can be expressed statically in `next.config.ts`, prefer that.
