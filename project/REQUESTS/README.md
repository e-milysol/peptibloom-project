# Cross-Domain Requests

Requests replace manual chat-to-chat relaying.

## Directory lifecycle

- `open/` — unresolved requests.
- `resolved/` — answered/closed requests retained for traceability.

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

## Rules

- One request should represent one coherent dependency.
- Do not use requests for ordinary within-domain implementation notes.
- Receiving domains may answer with a decision, contract reference or explicit HOLD.
- If Technical Direction approval is required, state it in the response and keep the request open until approved.
- On resolution, move the file to `resolved/` without destroying its history.
