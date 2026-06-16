# Stack Overview

Rerunsset is a personal portfolio built with Next.js App Router and React. The app is mostly content-driven: data lives in `src/content`, reusable interface pieces live in `src/components`, and sections are assembled in `src/app/page.tsx`.

## Technologies

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- shadcn/ui and Radix primitives
- Framer Motion
- React Hook Form, Zod, `@hookform/resolvers`
- Lucide icons

## Boundaries

- `src/app`: routes, layout, global CSS, metadata.
- `src/components/ui`: shadcn-owned primitives.
- `src/components/atoms`: small reusable pieces.
- `src/components/molecules`: composed repeated design blocks.
- `src/components/organisms`: page sections.
- `src/content`: portfolio copy and structured content.
- `src/proxy.ts`: request boundary for lightweight request-aware behavior.
