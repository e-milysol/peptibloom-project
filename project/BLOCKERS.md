# PeptiBloom Blocker Registry

This file contains only dependencies that currently prevent defined work from proceeding. Unapproved choices that do not stop current work are tracked as open decisions in `PROJECT_STATE.yaml`.

## Active blockers

### WEB M2 Evidence gate

Status: BLOCKED

Compound Index/Detail backed by scientific data requires:
1. approved Evidence public read contract;
2. production-ready scientific content.

Frontend must not bypass this gate with invented data or manual scientific pages.

### App Core production implementation gate — WORK 6

Status: BLOCKED

The contract/wireflow phase is approved, but production implementation is not authorized.

Production implementation requires explicit Owner production authorization before it may begin.

Real health/wellness data additionally requires:
1. Legal/Privacy approval;
2. Security approval;
3. Owner production authorization.

Synthetic fixtures, contracts, wireflows, model/constraint refinement, OpenAPI work, recurrence/timezone design, threat modelling and privacy/data-inventory handoffs may continue inside the approved non-production scope.

### App Core Product Analytics expansion gate — WORK 6

Status: BLOCKED

Product Analytics expansion may not enter production until all canonical gates are satisfied:
1. `ANALYTICS_CONTRACT_APPROVED`;
2. `WEB_TECHNICAL_VALIDATION_APPROVED`;
3. `LEGAL_PRIVACY_REVIEW_APPROVED`;
4. `OWNER_PRODUCTION_AUTHORIZATION`.

No health/wellness values, inventory content, routine content, notes or persistent user identifiers may be sent to Product Analytics.

## Cleared blockers

### WEB M1 visual foundation approval

Status: COMPLETE

Technical Direction approved the WEB M1 Visual Foundation on 2026-08-16. WEB M1 implementation is authorized within its approved scope. The approved M1 foundation does not create or finalize the global PeptiBloom Design System.

## Open decisions tracked elsewhere

The following are PROPOSED decisions in `PROJECT_STATE.yaml`, not current development blockers:

- PB-DEC-001 — technical protection for `main`;
- PB-DEC-002 — public launch primary language;
- PB-DEC-003 — production domain and hosting.
