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
5. Read `HANDOFFS/orchestrator.md` for asynchronous instructions or pending review items.
6. Read unresolved items in `REQUESTS/open/` addressed to the workstream.
7. Verify the current repository branch/HEAD before implementation.
8. Do not infer missing canonical decisions.

## Required end-of-task protocol

1. Report files changed and validations performed.
2. Update the workstream handoff when project state materially changes.
3. Record approved canonical decisions in `DECISIONS.md`.
4. Record unresolved blockers in `BLOCKERS.md`.
5. Create a cross-domain request when another workstream must decide or provide something.
6. If Technical Direction/review is needed, add a concise `WORK -> ORCHESTRATOR` item to `HANDOFFS/orchestrator.md` referencing the request/PR/commit.
7. Move resolved requests from `REQUESTS/open/` to `REQUESTS/resolved/`.
8. Update `PROJECT_STATE.yaml` only for factual milestone/status changes.

## Asynchronous coordination

PeptiBloom workstreams should not depend on a human relaying messages between chats. `HANDOFFS/orchestrator.md` is the shared asynchronous mailbox between execution Work and Technical Direction.

- Work may continue autonomously inside already-approved scope.
- Missing decisions must be recorded through the control plane instead of guessed.
- The orchestrator periodically reviews GitHub/project state and leaves actionable `ORCHESTRATOR -> WORK` instructions.
- Escalate to `OWNER_REQUIRED` only when Product Owner authority is genuinely necessary.
- Do not merge, publish or perform irreversible actions when the applicable authority has not approved them.

## Authority model

- Technical Direction approves cross-domain canon and migration/launch gates.
- Domain workstreams may propose architecture inside their ownership boundary.
- No workstream may silently create canon for another domain.
- Evidence/scientific content is never invented to unblock frontend work.
- Public web content must not become the scientific source of truth.

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

- `operative-core`
- `evidence`
- `web`
- `scientific-inventory`
- `orchestrator` (coordination only; not an implementation domain)

The coordination layer should stay small, factual and reviewable. Do not turn it into a duplicate of the codebase or a dump of chat transcripts.
