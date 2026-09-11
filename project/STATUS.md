# PeptiBloom Status Board

Last coordination baseline: 2026-09-11.

Verified public `main` at this reconciliation: `2e4ac6615eb25ccef1e13cb7b95b2dc5235ca5f4`.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0/M1 complete and deployed on Cloudflare Workers at `https://peptibloomproject.com`; Research Basics traffic tranches #85 and #86 are merged; #87 and #88 are draft Web candidates only | review #87 non-commercial continuation and #88 visual modernization; WEB M2 remains blocked by Evidence public contract + production-ready scientific content |
| Research Basics / Public Content | Active public-content lane; tranche #85 added 12 articles and tranche #86 added 20 high-intent articles; CI runs `npm ci`, `npm run check`, `npm run build` | continue source-grounded fast/editorial lane and scientific/safety escalation by claim; no compound Evidence authority is created by this lane |
| App Core / WORK 6 | Product Design v0.1 and Technical Design / UX IA v0.1 approved; MVP Architecture approved for contract/wireflow phase | continue non-production contracts/wireflows; production implementation remains blocked pending explicit authorization |
| Private Master / WORK 7 | Private Inventory / Procurement / Landed Cost domain remains in `e-milysol/peptibloom-private-master`; intentionally separate from App Core/public repo | continue private operational implementation; only sanitized coordination facts cross to the public Control Plane |
| Operative Core | v1 migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization |
| Physical Products / Accessories | PB-DEC-501 remains governing authority; clean-sheet design pipeline approved; Bloom Caps remains PRE-G0 | collect/validate only required G0–G2 functional inputs and measurements before CAD/prototyping |
| Evidence | PR #60 is open/draft, contracts-only, and not merge-authorized; public-read contract remains proposed, not approved | review the three publication contracts and resolve governance/public-read authority before WEB M2 |
| Scientific Inventory | source/review workflow active; handoff to Evidence still in progress | production-ready Evidence handoff |
| Scientific Content Production | editorial transformation only; no independent scientific assessment, approval or publication authority | formalize required Evidence handoff and wait for production-ready qualified content |
| Public Catalog / Legal | `PB-XD-003` is open for public catalog/label legal review; public pricing/catalog publication is not authorized | legal/commercial review + applicable publication gates before any public catalog surface |
| Growth / SEO / Distribution | Organic traffic release active as of 2026-09-11 through merged Research Basics tranches | monitor fresh telemetry; do not infer conversions or current Search Console performance from stale snapshots |
| Analytics | Analytics v1 contract approved; Web technical validation, Legal/Privacy and Owner production authorization remain pending; production instrumentation blocked | keep event semantics out of Web PRs until Analytics change-control approves them |

## Web

The public Web remains on the approved `Editorial Evidence / Warm Scientific` foundation and production origin `https://peptibloomproject.com`, hosted on Cloudflare Workers.

The current public `main` now includes the Research Basics organic-traffic releases:
- PR #85 — 12 Research Basics articles, merged as `878a7214df03a67f6c64b4273641d0ce5bcf8676`;
- PR #86 — 20 additional high-intent Research Basics articles, merged as `2e4ac6615eb25ccef1e13cb7b95b2dc5235ca5f4`.

The Research Basics release workflow validates the Web with `npm ci`, `npm run check` and `npm run build`.

Two later Web candidates are intentionally **not** part of `main` yet:
- PR #87 — non-commercial `/peptibloom/` continuation path; draft/open, no WhatsApp/email conversion surface, no Analytics event semantics, no merge authorization;
- PR #88 — visual modernization for Home, Library and one representative Research Basics article; draft/open, QA passed, presentation-only assets, no scientific/governance expansion, no merge authorization.

WEB M2 remains blocked. Research Basics publication does not satisfy compound-page Evidence requirements and must not be treated as an Evidence contract substitute.

Multilingual public Web remains approved for at least `en`, `es` and `fr`. PB-DEC-002 is still open/proposed, so primary/default locale, prefix strategy and fallback behavior remain unresolved. Existing Spanish Research Basics content does not itself resolve that decision.

## Evidence / Scientific Inventory / Scientific Content Production

PR #60 (`Evidence: publication contracts foundation v1`) is currently open/draft and mergeable, but **not merge-authorized**. Its current diff is contracts-only:
- `EVIDENCE_TO_SCIENTIFIC_CONTENT_V1.md`;
- `SCIENTIFIC_CONTENT_TO_PUBLICATION_V1.md`;
- `EVIDENCE_TO_WEB_PUBLIC_READ_V1.md`.

Earlier Retatrutide pilot/editorial/Web work was separated from #60 and preserved as non-authoritative WIP. Historical comments asserting broader Retatrutide approval must not be used as current publication authority.

Therefore:
- Evidence public-read contract = `PROPOSED / NOT APPROVED`;
- Scientific Content remains editorial transformation only;
- production compound pages remain blocked;
- WEB M2 remains blocked by the existing two dependencies: approved Evidence public contract + production-ready scientific content.

## Research Basics / Public Content

Research Basics is now an active public-content lane rather than a backlog-only concept.

The approved routing remains claim-by-claim:
- stable definitions, technical literacy, document/COA literacy, arithmetic/metrology, nomenclature/history and authoritative directory/checklist content may use the fast editorial lane;
- clinical efficacy/safety, microbiological/sterility conclusions, formulation stability, biomedical outcomes, administration/protocol guidance and other high-stakes scientific claims require escalation.

Reddit/forums may be used to discover recurring questions and wording, not as factual scientific authority unless clearly identified as anecdotal experience.

This lane does **not** authorize compound-specific dosing, reconstitution choice, administration protocols, medical guidance or commercial endorsement.

## Public Catalog / Pricing / Legal

`PB-XD-003` is open for public catalog/label legal review.

PR #71 has been explicitly sanitized as `[SANITIZED / DO NOT MERGE]` and retained only as a historical September pricing reconciliation record. Its concrete pricing baseline must not be treated as public catalog publication authority or live public source of truth.

Public pricing, availability, publication, sale/checkout and scientific claims remain separate states. A price does not imply stock, legal clearance, publication authority or READY_FOR_SALE state.

Operational pricing/procurement truth remains in the private commercial/master-data lane.

## Growth / SEO / Distribution

Organic-traffic publication work is active through the Research Basics releases merged on 2026-09-11.

The current Control Plane records **no asserted live Search Console performance metrics**. Fresh telemetry may be observed operationally, but stale historical snapshots must not be promoted to current truth.

SEO/public-content work must preserve the science/commercial boundary: educational content may lead readers deeper into the PeptiBloom project, but scientific pages must not act as product endorsements.

## Analytics

Analytics v1 remains an approved domain contract, but production instrumentation is blocked until all required gates are satisfied:
- `ANALYTICS_CONTRACT_APPROVED` — APPROVED;
- `WEB_TECHNICAL_VALIDATION_APPROVED` — PENDING;
- `LEGAL_PRIVACY_REVIEW_APPROVED` — PENDING;
- `OWNER_PRODUCTION_AUTHORIZATION` — PENDING.

Web PRs must not introduce new analytics event semantics outside this change-control path.

## App Core / WORK 6

WORK 6 remains distinct from the public Astro Web and the private operational master.

Approved state is unchanged:
- Product Design v0.1 — OWNER APPROVED;
- Technical Design / UX IA v0.1 — OWNER APPROVED;
- MVP Architecture — APPROVED for contract/wireflow phase;
- production implementation — BLOCKED / NOT AUTHORIZED;
- real health/wellness data — BLOCKED;
- payments/subscriptions and external integrations — not authorized.

## Private Master / WORK 7

WORK 7 remains the private Inventory / Procurement / Landed Cost application in `e-milysol/peptibloom-private-master`.

The public repository contains only sanitized coordination state. Supplier identities, acquisition prices, fees, landed costs, margins, logistics and other restricted operational data remain private.

## Operative Core

Operative Core v1 data-layer implementation remains complete. No serializer/viewset/admin/QR or follow-on operational surface is implied without a new authorized scope.

## Physical Products / Accessories

PB-DEC-501 remains the governing authority. The clean-sheet physical-design model and Bambu Lab P1S + AMS fabrication capability remain the current baseline.

Bloom Caps remains `PRE-G0`; CAD is not authorized and the common-core architecture remains hypothesis-only until the required functional inputs and measurements pass the relevant gates.

## Repository / Coordination

The files under `project/` remain the durable coordination source of truth. Issue #13 remains the live asynchronous coordination mailbox.

PB-DEC-001 is now **OWNER APPROVED** as repository policy. `main` is required to use PR-based changes, prohibit force-pushes and deletion, and require successful repository QA before merge where applicable. Effective technical enforcement is **not yet verified** because the connected GitHub integration does not expose repository-administration writes; GitHub settings must still be configured/verified before branch protection can be marked technically complete.

PB-DEC-002 remains open/proposed. No default-language decision is inferred from current published content.
