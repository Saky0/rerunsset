---
name: live-docs
description: Maintain project documentation close to the code without bloating source files. Use when Codex adds, updates, audits, or reorganizes component-level notes, inline comments, feature docs, architecture docs, or Markdown guidance across source files, `.agents`, `.codex/features`, and `docs`.
---

# Live Docs

Use this skill to keep documentation useful, short, and discoverable.

## Documentation Placement

- Put short component-level notes in the source file only when they explain non-obvious intent, constraints, accessibility behavior, animation timing, or integration boundaries.
- Put broader documentation in `docs/<group>/<doc-name>.md`.
- Put feature task plans and implementation reviews in `.codex/features/<feature>/TASK.md`.
- Put reusable agent behavior in `.agents/skills/<skill-name>/SKILL.md`.
- Keep `AGENTS.md` brief and link to deeper docs or skills instead of duplicating them.

## Source Comments

- Prefer self-explanatory code over comments.
- Add comments before complex blocks, not after obvious lines.
- Keep comments current when code changes.
- Remove stale comments rather than explaining around them.

## Markdown Rules

- Write docs and Markdown in English.
- Keep docs actionable: context, decision, usage, validation, and ownership.
- Avoid long prose in component files; move explanations to `docs` when they exceed a short note.
- Cross-reference task files and docs when a change has both implementation and documentation impact.
