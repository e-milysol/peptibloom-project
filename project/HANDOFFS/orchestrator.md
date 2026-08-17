# Orchestrator Handoff

Owner: Technical Direction / asynchronous project coordinator

## Purpose

This file is the asynchronous coordination mailbox between PeptiBloom Work execution and Technical Direction. It exists so work can continue without requiring synchronous chat handoffs or the Product Owner to be online.

GitHub/project remains the coordination source of truth. Chat transcripts are context, not canon.

## Protocol

### WORK -> ORCHESTRATOR

Work may continue independently inside an already-approved scope. When Work needs review, a cross-domain decision, a canon clarification, merge authorization, or discovers a blocker:

1. Update the relevant workstream file in `project/HANDOFFS/` with factual progress.
2. Create an item in `project/REQUESTS/open/` when a decision or dependency is required.
3. Record a true blocking condition in `project/BLOCKERS.md` when appropriate.
4. Add a concise entry under `WORK -> ORCHESTRATOR` below containing the request ID, PR/branch/commit when applicable, what was verified, and exactly what decision is needed.
5. Do not invent the missing decision and do not merge changes that require approval.

### ORCHESTRATOR -> WORK

The asynchronous coordinator periodically reviews `PROJECT_STATE.yaml`, `CANON.md`, `STATUS.md`, `BLOCKERS.md`, open requests, handoffs and current GitHub PR state.

For each pending Work request, the coordinator may:

- approve a next step already supported by canon;
- request corrections or additional validation;
- resolve a request when sufficient evidence exists;
- create a cross-domain request when another workstream must decide;
- escalate to `OWNER_REQUIRED` only when the decision genuinely requires the Product Owner.

The coordinator records actionable instructions under `ORCHESTRATOR -> WORK` and, when appropriate, in the relevant request/handoff file so the next Work execution can continue without chat relay.

## Safety / authority rules

- No agent may silently create canon for another domain.
- No merge to `main` when a request explicitly requires Product Owner or Technical Direction approval.
- Scientific claims, doses, protocols or evidence must never be invented to unblock implementation.
- Canonical brand identity must use the approved master logo and documented derivatives only.
- Destructive, irreversible, account-level, financial, legal or externally publishing actions require the authority defined by project canon or explicit owner approval.
- If uncertain whether an action is authorized, leave a request rather than guessing.

## WORK -> ORCHESTRATOR

No pending items recorded yet.

## ORCHESTRATOR -> WORK

- On every execution, read this file after the standard start-of-task control-plane files.
- Process any actionable instruction here before selecting new discretionary work.
- Keep requests concise and reference GitHub artifacts instead of copying large diffs into this file.

## OWNER_REQUIRED

None.

## Last coordination setup

- Async coordination protocol activated: 2026-08-17.
- Repository: `e-milysol/peptibloom-project`.
