# Notebook Canvas Performance And Layout

## Goal

Restore the homepage notebook experience so the 3D canvas feels smooth, proportionate, and consistent across hero and about sections, while keeping dark shader-backed visuals, graceful fallbacks, mobile support, and SEO-friendly server-rendered page content.

## Specifications

- Keep text content, section copy, and current project data unchanged unless a layout fix requires markup structure.
- Use the same lazy canvas policy for hero and about notebooks: detect WebGL/reduced motion, observe proximity to the viewport, mount before the section becomes visible, and unmount when far away.
- Do not show the static notebook image immediately before swapping to canvas. If 3D is supported, show a subtle neutral loading surface until the canvas is ready. If 3D is not supported, show the image fallback from the start.
- Restore a dark shader/fallback background so the page never flashes or settles into a light gray background when shaders are unavailable.
- Keep notebook sizing bounded with responsive slot dimensions. The hero notebook may overflow visually on the right when it helps the composition, but it must not cover the text column or create horizontal scroll.
- Keep the about notebook inside the left visual column on desktop, large enough to read as intentional, but not crossing over the copy. On mobile, allow the same 3D path when supported and use the image only as the non-WebGL fallback.
- Use a simple CSS-only vertical drift in the wide two-column about layout, respecting reduced motion.
- Keep only canvas, observer, and animation coordination in client components. Preserve server-rendered content for indexing.

## Checklist

- [x] Unify notebook loading behavior for hero and about, replacing image-to-canvas swaps with canvas-first loading and image-only fallback behavior.
- [x] Restore the dark shader-backed background and strengthen the CSS fallback.
- [x] Rebalance hero notebook width, height, camera, model scale, and overflow bounds.
- [x] Rebalance about notebook sizing, camera, model scale, column containment, and CSS drift.
- [x] Review performance settings, including observer margins, DPR, unmount behavior, and reduced-motion behavior.
- [ ] Validate with lint/build and inspect desktop and mobile layouts on the running dev server.

## Review

Pending implementation.
