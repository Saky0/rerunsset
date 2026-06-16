# Rerunsset

Rerunsset is Davi Mattos' personal portfolio site. It presents his profile, services, selected projects, resume, and contact paths through a content-driven Next.js application.

## Stack

- Next.js 16 App Router with React 19 and TypeScript.
- Tailwind CSS 4 and shadcn/ui for interface primitives.
- Framer Motion for purposeful interaction and transitions.
- React Hook Form, Zod, and `@hookform/resolvers` for forms.
- `src/proxy.ts` is the single request boundary; do not add `middleware.ts`.

## Standards

- Write all docs and Markdown in English.
- Keep `AGENTS.md` brief. Put reusable agent behavior in `.agents/skills/<skill-name>/SKILL.md`.
- Put longer project documentation in `docs/<group>/<doc-name>.md`.
- Put feature tasks in `.codex/features/<feature>/TASK.md` with goal, specifications, checklist, and review.
- Prefer composed components when a design element repeats.
- Use Tailwind tokens, shadcn conventions, accessible interactions, and fluid responsive layouts.
- Keep content in `src/content` and component behavior in `src/components`.
- Use shaders/WebGL only when they support the portfolio experience and degrade gracefully.

## Agent References

- Use `.agents/skills/task-generation/SKILL.md` for feature task planning and reviews.
- Use `.agents/skills/live-docs/SKILL.md` for source-level notes and broader documentation placement.
- Use `.agents/skills/frontend-ui-engineering/SKILL.md` and `.agents/skills/impeccable/SKILL.md` for polished UI work.
- Use `.agents/skills/threejs-animation/SKILL.md` for Three.js animation and canvas behavior.

## Commands

- `npm run dev` starts the Next.js development server.
- `npm run build` verifies the production build.
- `npm run lint` runs ESLint.

Use Node `20.19.0` or newer for the local toolchain.
