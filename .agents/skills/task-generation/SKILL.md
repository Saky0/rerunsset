---
name: task-generation
description: Create and maintain implementation task files for feature work. Use when Codex needs to plan, scope, track, or review a concrete project task in `.codex/features/<feature>/TASK.md`, including code work, documentation work, acceptance criteria, checklists, and post-implementation review notes.
---

# Task Generation

Use this skill to turn a feature request or implementation plan into a durable task file.

## Workflow

1. Create or update `.codex/features/<feature>/TASK.md`.
2. Use a lowercase hyphen-case feature folder name.
3. Keep the task specific enough to implement without re-reading the full conversation.
4. Include code and documentation expectations when they are part of the work.
5. Update the checklist as work progresses.
6. Fill the review section after implementation or leave it as a clear pending review.

## Required Structure

Every `TASK.md` must include:

```md
# <Feature Task Name>

## Goal

## Specifications

## Checklist

## Review
```

## Section Rules

- `Goal`: State the user-visible outcome in one short paragraph.
- `Specifications`: Capture constraints, files or systems likely involved, UX/performance requirements, and non-goals.
- `Checklist`: Use actionable checkbox items. Prefer 4-8 items for normal tasks.
- `Review`: Record final status, validation commands, changed files, risks, and follow-up notes after the task is implemented.

## Conventions

- Write all task documentation in English.
- Reference source files with relative paths.
- Keep tasks scoped to one feature or fix.
- Link broader docs under `docs/<group>/<doc-name>.md` when a task creates architecture, process, or design documentation.
- Prefer `live-docs` when the task changes how code or component documentation should be maintained.
