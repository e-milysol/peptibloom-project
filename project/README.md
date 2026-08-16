# PeptiBloom Project Control Plane

This directory is the shared coordination layer for PeptiBloom agents, chats and workstreams.

## Principle

GitHub is the implementation source of truth. This directory is the coordination source of truth for project state, approved decisions, blockers, handoffs and cross-domain requests.

Conversation history is context, not canon. A chat must not require another chat's transcript in order to continue project work.

## Required start-of-task protocol

1. Read `PROJECT_STATE.yaml`.
2. Read `CANON.md`.
3. Read `STATUS.md`.
4. Read the relevant file in `HANDOFFS/`.
5. Read unresolved items in `REQUESTS/open/` addressed to the workstream.
6. Verify the current repository branch/HEAD before implementation.
7. Do not infer missing canonical decisions.

## Required end-of-task protocol

1. Report files changed and validations performed.
2. Update the workstream handoff when project state materially changes.
3. Record approved canonical decisions in `DECISIONS.md`.
4. Record unresolved blockers in `BLOCKERS.md`.
5. Create a cross-domain request when another workstream must decide or provide something.
6. Move resolved requests from `REQUESTS/open/` to `REQUESTS/resolved/`.
7. Update `PROJECT_STATE.yaml` only for factual milestone/status changes.

## Authority model

- Technical Direction approves cross-domain canon and migration/launch gates.
- Domain workstreams may propose architecture inside their ownership boundary.
- No workstream may silently create canon for another domain.
- Evidence/scientific content is never invented to unblock frontend work.
- Public web content must not become the scientific source of truth.

## Request IDs

Use `PB-XD-NNN` for cross-domain requests. Never recycle an ID.

## Status vocabulary

- `PROPOSED`
- `APPROVED`
- `IN_PROGRESS`
- `BLOCKED`
- `COMPLETE`
- `SUPERSEDED`

## Current workstreams

- `operative-core`
- `evidence`
- `web`
- `scientific-inventory`

The coordination layer should stay small, factual and reviewable. Do not turn it into a duplicate of the codebase or a dump of chat transcripts.
