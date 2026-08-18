# Analytics Handoff

Owner: ANALYTICS workstream

## Classification

`RESTORATION OF PREVIOUSLY APPROVED DOMAIN CONTRACT`

This handoff restores previously approved Analytics domain state. It is not a new Product Owner approval and does not authorize production instrumentation.

## Current gate state

- `ANALYTICS_CONTRACT_APPROVED = APPROVED`
- `WEB_TECHNICAL_VALIDATION_APPROVED = PENDING`
- `LEGAL_PRIVACY_REVIEW_APPROVED = PENDING`
- `OWNER_PRODUCTION_AUTHORIZATION = PENDING`
- `PRODUCTION_INSTRUMENTATION = BLOCKED`

Only the Analytics contract gate is approved. Production instrumentation remains blocked until all remaining gates are satisfied.

## Authoritative artifacts

- Measurement contract: `project/analytics/ANALYTICS_MEASUREMENT_CONTRACT_v1.md`
- Machine-readable registry: `project/analytics/analytics-events-v1.json`

The artifacts above carry the restored Analytics v1 contract semantics and event registry. This handoff summarizes state and must not redefine them.

## Boundaries

- Canonical calculator reset event is `reset`.
- `calculator_reset` is non-canonical and must not be introduced as an alias.
- Retired terminology is replacement history only, never accepted production aliases.
- `calculator_abandon` is `best-effort / inferred within page session` and must never be represented as an individual fact.
- Privacy/data prohibitions and retention/persistence constraints in the restored contract remain binding within the Analytics domain.
- No production Analytics activation is authorized by this restoration.
