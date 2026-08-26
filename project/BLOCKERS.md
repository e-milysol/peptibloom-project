# PeptiBloom Blocker Registry

This file contains only dependencies that currently prevent defined work from proceeding. Unapproved choices that do not stop current work are tracked as open decisions in `PROJECT_STATE.yaml`.

## Active blockers

### Public Content Release 1 publication gate

Status: BLOCKED FOR PRODUCTION PUBLICATION

Branch-preview work is active, but Release 1 publication requires:
1. resolution and approval of `PB-XD-002` for the Evidence / Scientific Content / Web public handoff;
2. an Evidence-qualified Library pilot and evidence-supported Blog opportunity;
3. complete source-backed payloads with uncertainty, limitations, review date and references;
4. Legal, Scientific QA, Accessibility and Web review of the concrete release candidates;
5. explicit merge/publication authorization.

`PB-XD-001` in PR #32 covers only the internal Evidence -> Scientific Content contract and does not satisfy this public contract gate.

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

### Public Tools / Visual Planner production gate

Status: BLOCKED FOR PRODUCTION PUBLICATION

Neutral, privacy-minimal Web branch previews may proceed under the active public-tools priority. Production requires concrete Legal, Security, Accessibility and Web validation plus explicit merge/publication authorization. This priority does not reactivate App Core production, persistent health/wellness data, payments, external integrations or Analytics production.

### WORK 7 recovery and real-data-import gate

Status: REAL_DATA_IMPORT BLOCKED

Conditional authorization is not an immediate unlock. Before the first limited import, all of the following must be evidenced as passed:
1. independent external backup;
2. verifiable SHA-256 manifest;
3. successful isolated restore that never targets live;
4. restored-environment validation with no unresolved recovery blocker;
5. durable recovery-log evidence.

Failure of any gate keeps import blocked. Successful recovery authorizes only the bounded, reversible, auditable increment described in Issue #13 comment `5416698566`.

### Frozen Web Identity asset-ingestion gate

Status: ASSET_INPUT_REQUIRED

The decision is approved, but the exact Owner-approved light and dark sheets are not repository-controlled. They must be supplied and checksum-verified before ingestion. Regeneration from descriptions, screenshots or checksum text is prohibited.

## Cleared blockers

### WEB M1 visual foundation approval

Status: COMPLETE

Technical Direction approved the WEB M1 Visual Foundation on 2026-08-16. WEB M1 implementation is authorized within its approved scope. The approved M1 foundation does not create or finalize the global PeptiBloom Design System.

## Open decisions tracked elsewhere

The following are PROPOSED decisions in `PROJECT_STATE.yaml`, not current development blockers:

- PB-DEC-001 — technical protection for `main`;
- PB-DEC-002 — public launch primary language;
