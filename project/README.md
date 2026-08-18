# PeptiBloom Project Control Plane

This directory is the shared coordination layer for PeptiBloom agents, chats and workstreams.

## Principle

GitHub is the implementation source of truth. This directory is the durable coordination source of truth for project state, approved decisions, blockers, handoffs and cross-domain requests.

Conversation history is context, not canon. A chat must not require another chat's transcript in order to continue project work.

Issue #13 (`PeptiBloom Async Orchestrator Queue`) is the live asynchronous mailbox for routine coordination. `project/HANDOFFS/orchestrator.md` is durable protocol/documentation, not the routine message log.

## Required start-of-task protocol

1. Verify the current repository branch/HEAD and relevant PR state.
2. Read `PROJECT_STATE.yaml`.
3. Read `CANON.md`.
4. Read `STATUS.md`.
5. Read the relevant file in `HANDOFFS/`.
6. Read unresolved items in `REQUESTS/open/` addressed to the workstream.
7. Read `BLOCKERS.md`.
8. Read all new Issue #13 comments since the last processed coordination message.
9. Process applicable `ORCHESTRATOR -> WORK` instructions before discretionary work.
10. Do not infer missing canonical decisions.

## Required end-of-task protocol

1. Report files changed and validations performed.
2. Update the workstream handoff when project state materially changes.
3. Record approved canonical decisions in `DECISIONS.md`.
4. Record unresolved blockers in `BLOCKERS.md`.
5. Create a cross-domain request when another workstream must decide or provide something.
6. If Technical Direction/review is needed, add a concise `WORK -> ORCHESTRATOR` comment to Issue #13 referencing the request/PR/commit.
7. Move resolved requests from `REQUESTS/open/` to `REQUESTS/resolved/`.
8. Update `PROJECT_STATE.yaml` only for factual milestone/status changes.

## Asynchronous coordination

PeptiBloom workstreams should not depend on a human relaying messages between chats.

- Work may continue autonomously inside already-approved scope.
- Missing decisions must be recorded through the Control Plane instead of guessed.
- Issue #13 carries routine `WORK -> ORCHESTRATOR` and `ORCHESTRATOR -> WORK` messages.
- Durable domain facts belong in the relevant `project/HANDOFFS/` file.
- Escalate to `OWNER_REQUIRED` only when Product Owner authority is genuinely necessary.
- Do not merge, publish or perform irreversible actions when the applicable authority has not approved them.

## Authority model

- Technical Direction approves cross-domain canon and migration/launch gates.
- Domain workstreams may propose architecture inside their ownership boundary.
- No workstream may silently create canon for another domain.
- Evidence/scientific content is never invented to unblock frontend work.
- Public web content must not become the scientific source of truth.
- Private operational data must not be copied into the public repository merely for coordination convenience.

## Request IDs

Use `PB-XD-NNN` for cross-domain requests. Never recycle an ID.

## Status vocabulary

Use only these values for project, milestone and decision state:

- `PROPOSED` — submitted or identified, but not approved.
- `APPROVED` — explicitly approved by the responsible authority.
- `IN_PROGRESS` — approved work is actively being executed.
- `BLOCKED` — cannot proceed until a named dependency or approval is resolved.
- `COMPLETE` — finished and validated for its defined scope.
- `SUPERSEDED` — replaced by a later recorded state or decision.

Cross-domain request lifecycle uses `OPEN` and `RESOLVED` only inside `REQUESTS/`; those values do not describe project, milestone or decision approval.

## Current workstreams

- `web` — public Astro editorial web.
- `app-core` — WORK 6; authenticated PeptiBloom site/app.
- `private-master` — WORK 7; private Inventory / Procurement / Landed Cost application in `e-milysol/peptibloom-private-master`.
- `operative-core`.
- `evidence`.
- `scientific-inventory`.
- `orchestrator` — coordination only; not an implementation domain.

The coordination layer should stay small, factual and reviewable. Do not turn it into a duplicate of the codebase or a dump of chat transcripts.
