# Cross-Domain Requests

Requests replace manual chat-to-chat relaying.

## Directory lifecycle

- `open/` — unresolved requests.
- `resolved/` — answered/closed requests retained for traceability.

Request lifecycle values `OPEN` and `RESOLVED` are local to `REQUESTS/`; they are not project approval states.

## File naming

`PB-XD-NNN-short-subject.md`

Example: `PB-XD-014-evidence-public-contract.md`

## Required template

```md
# PB-XD-NNN — Short title

FROM: WEB
TO: EVIDENCE
TYPE: CROSS-DOMAIN
STATUS: OPEN
CREATED: YYYY-MM-DD

## Need
What the requesting domain needs.

## Why
Why the dependency exists.

## Question / decision required
The smallest precise decision needed.

## Constraints
What must not be assumed or changed.

## Response
Filled by the receiving domain when resolved.

## Resolution
STATUS: RESOLVED
DECISION/OUTPUT: ...
RESOLVED: YYYY-MM-DD
```

## Durable identifier traceability

Current historical mapping:
- `PB-XD-001` — Evidence -> Scientific Content contract.
- `PB-XD-002` — Release 1 Evidence / Public Content contract.
- `PB-XD-003` — Public catalog label Legal/Regulatory review.

The catalog-label request was historically normalized from a collided `PB-XD-001` identifier to `PB-XD-003` because `PB-XD-001` and `PB-XD-002` were already assigned. This note restores identifier traceability only; it does not reconstruct missing request bodies, change lifecycle state, or create approval/shared canon.

## Rules

- `PB-XD request ≠ approval ≠ shared canon`.
- Creating, answering or resolving a request does not by itself approve its output, make it shared canon or authorize changes to another domain's canon.
- Decisions affecting shared or cross-domain canon require explicit Technical Direction approval and must then be recorded in `CANON.md` or `DECISIONS.md`.
- One request should represent one coherent dependency.
- Do not use requests for ordinary within-domain implementation notes.
- Receiving domains may answer with a proposed decision, contract reference or explicit HOLD.
- If Technical Direction approval is required, state it in the response and keep the request open until approved.
- On resolution, move the file to `resolved/` without destroying its history.
