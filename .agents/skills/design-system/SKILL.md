# Design System Skill

Use this skill when changing the visual language, interaction model, or repeated interface patterns.

## Guidance

- Build real portfolio surfaces, not marketing placeholders.
- Prefer composed components for repeated cards, rows, project previews, badges, controls, and section shells.
- Use Tailwind CSS 4 utilities and existing shadcn/ui primitives before introducing new abstractions.
- Keep cards at modest radii and avoid nesting cards inside cards.
- Use Framer Motion for transitions that clarify state or movement; avoid ornamental motion.
- Use shader or WebGL accents sparingly, with reduced-motion and low-power fallbacks.
- Keep layouts fluid across mobile and desktop without viewport-scaled typography.
- Verify text wrapping, touch targets, and image framing before considering the UI complete.

## Component Placement

- `src/components/ui`: shadcn primitives.
- `src/components/atoms`: smallest reusable project components.
- `src/components/molecules`: composed repeated design blocks.
- `src/components/organisms`: full page sections.
- `src/content`: editable site copy and project data.
