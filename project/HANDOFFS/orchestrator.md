# Orchestrator Handoff

Owner: Technical Direction / asynchronous project coordinator

## Purpose

This file defines the durable coordination protocol between PeptiBloom Work execution and Technical Direction.

GitHub/project remains the coordination source of truth. Chat transcripts are context, not canon.

Routine asynchronous messages do **not** live in this file. Issue #13 (`PeptiBloom Async Orchestrator Queue`) is the live mailbox for `WORK -> ORCHESTRATOR` and `ORCHESTRATOR -> WORK` coordination.

## Protocol

### WORK -> ORCHESTRATOR

Work may continue independently inside an already-approved scope. When Work needs review, a cross-domain decision, a canon clarification, merge authorization, or discovers a blocker:

1. Update the relevant workstream file in `project/HANDOFFS/` when durable factual state changed.
2. Create an item in `project/REQUESTS/open/` when a cross-domain decision or dependency is required.
3. Record a true blocking condition in `project/BLOCKERS.md` when appropriate.
4. Add a concise `WORK -> ORCHESTRATOR` comment to Issue #13 containing the request ID, PR/branch/commit when applicable, what was verified, and exactly what decision is needed.
5. Do not invent the missing decision and do not merge changes that require approval.

### ORCHESTRATOR -> WORK

The asynchronous coordinator reviews current GitHub state plus `PROJECT_STATE.yaml`, `CANON.md`, `STATUS.md`, `BLOCKERS.md`, open requests, relevant handoffs and new Issue #13 comments.

For each pending Work request, the coordinator may:

- approve a next step already supported by canon;
- request corrections or additional validation;
- resolve a request when sufficient evidence exists;
- create a cross-domain request when another workstream must decide;
- escalate to `OWNER_REQUIRED` only when the decision genuinely requires the Product Owner.

Actionable routine instructions are posted to Issue #13. Durable project facts are recorded in the relevant control-plane file when they materially change project state.

## Work ownership currently relevant to coordination

- WORK 6 → `app-core` → authenticated PeptiBloom site/app.
- WORK 7 → `private-master` → private Inventory / Procurement / Landed Cost application in `e-milysol/peptibloom-private-master`.

WORK 6 and WORK 7 are separate domains. The private repository assignment for WORK 7 must never be inferred as the implementation location for WORK 6.

## Safety / authority rules

- No agent may silently create canon for another domain.
- No merge to `main` when a request explicitly requires Product Owner or Technical Direction approval.
- Scientific claims, doses, protocols or evidence must never be invented to unblock implementation.
- Canonical brand identity must use the approved master logo and documented derivatives only.
- Restricted WORK 7 operational data must not be copied into the public Control Plane; communicate only sanitized status.
- Health/wellness data from App Core must not be exposed through coordination messages or Product Analytics.
- Destructive, irreversible, account-level, financial, legal or externally publishing actions require the authority defined by project canon or explicit owner approval.
- If uncertain whether an action is authorized, leave a request rather than guessing.

## OWNER_REQUIRED

Owner-required items are tracked through Issue #13 and the relevant request/blocker state rather than duplicated here.

## Last protocol update

- Async coordination protocol activated: 2026-08-17.
- Issue #13 established as live mailbox: 2026-08-17.
- WORK 6 / WORK 7 ownership separation recorded: 2026-08-18.
- Public repository: `e-milysol/peptibloom-project`.
