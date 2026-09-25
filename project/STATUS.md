# PeptiBloom Status Board

Last coordination baseline: 2026-09-25.

Verified public `main` at this reconciliation: `0bb9c44a9876d8ad8dd1cef01b727f5753cdddc5`.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0/M1 complete on canonical `main`; the generic fail-closed WEB M2 Platform Foundation is Owner-authorized as a narrow parallel exception and is proposed in open/unmerged PR #100 at `8345f3b1626194151f40befdde78445fb7b4b6b2` | finish bounded review of #100; compound scientific publication remains blocked by approved Evidence, production-ready Scientific Content and explicit publication authorization |
| Research Basics / Public Content | Active public-content lane; tranche #85 added 12 articles and tranche #86 added 20 high-intent articles; CI runs `npm ci`, `npm run check`, `npm run build` | continue source-grounded fast/editorial lane and scientific/safety escalation by claim; no compound Evidence authority is created by this lane |
| App Core / WORK 6 | Product Design v0.1 and Technical Design / UX IA v0.1 approved; MVP Architecture approved for contract/wireflow phase | continue non-production contracts/wireflows; production implementation remains blocked pending explicit authorization |
| Private Master / WORK 7 | MVP technical implementation was reported complete; its implementation commit is integrated into current private `main`, and the current synthetic suite was independently re-run successfully; operational readiness is not established by those facts alone | real private-data import remains `BLOCKED` until the recovery/import gate is objectively verified passed |
| Operative Core | v1 migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization |
| Physical Products / Accessories | PB-DEC-501 remains governing authority; clean-sheet design pipeline approved; Bloom Caps remains PRE-G0 | collect/validate only required G0–G2 functional inputs and measurements before CAD/prototyping |
| Evidence | PR #60 is open/draft/unmerged at `a0501c9669c7eac591ae04ce577ff6ddaf6e387c`; its generic contracts-only cleanup is complete but remains proposed, not approved or canonical `main` | review the cleaned contracts through the normal gate; no merge or publication is authorized |
| Scientific Inventory | source/review workflow active; handoff to Evidence still in progress | production-ready Evidence handoff |
| Scientific Content Production | editorial transformation only; no independent scientific assessment, approval or publication authority | formalize required Evidence handoff and wait for production-ready qualified content |
| Public Catalog / Legal | `PB-XD-003` is open for public catalog/label legal review; public pricing/catalog publication is not authorized | legal/commercial review + applicable publication gates before any public catalog surface |
| Growth / SEO / Distribution | Organic traffic release active as of 2026-09-11 through merged Research Basics tranches | monitor fresh telemetry; do not infer conversions or current Search Console performance from stale snapshots |
| Analytics | Analytics v1 contract approved; Web technical validation, Legal/Privacy and Owner production authorization remain pending; production instrumentation blocked | keep event semantics out of Web PRs until Analytics change-control approves them |

## Web

The public Web remains on the approved `Editorial Evidence / Warm Scientific` foundation and production origin `https://peptibloomproject.com`, hosted on Cloudflare Workers.

The current public `main` includes:
- PR #96 — safe multilingual Web foundation, merged as `1642727aee414f6bc4b767f9ecc4a9c61e9cddb3`;
- PR #97 — HALO-002 Research Basics scientific graph, merged as `d33e323bd8508def2e70c11bde2c81e94da9e79c`;
- PR #98 — PeptiBloom Scientific Publishing Standard v1.1 freeze record, merged as `0bb9c44a9876d8ad8dd1cef01b727f5753cdddc5`;
- PR #85 — 12 Research Basics articles, merged as `878a7214df03a67f6c64b4273641d0ce5bcf8676`;
- PR #86 — 20 additional high-intent Research Basics articles, merged as `2e4ac6615eb25ccef1e13cb7b95b2dc5235ca5f4`;
- PR #89 — Control Plane reconciliation, later corrected by this decision-history follow-up;
- PR #88 — visual modernization for Home, Library and one representative Research Basics article, merged as `b12ec1a0f26f6d0ccea8b5a75963ef789fc53142`.

The Research Basics release workflow validates the Web with `npm ci`, `npm run check` and `npm run build`.

PR #87 remains a draft candidate for a non-commercial `/peptibloom/` continuation path. It does not add WhatsApp/email conversion, public product catalogue/pricing, Analytics event semantics or scientific endorsement.

On 2026-09-22 the Owner authorized a narrow parallel execution exception for the generic WEB M2 Platform Foundation only (`AUTHORIZE WEB M2 PLATFORM FOUNDATION — NO SCIENTIFIC CONTENT / NO PUBLICATION`, Issue #13 comment `5779763439`). WORK 7 remains active, and other archived/deferred foundations remain deferred unless separately reactivated.

PR #100 proposes that generic fail-closed platform foundation at HEAD `8345f3b1626194151f40befdde78445fb7b4b6b2`. It is `OPEN / UNMERGED`, has been validated and accepted for continued review, and is not canonical `main` state. Its preview deployment is review evidence only, not production publication. No merge or publication is authorized.

The authorization and PR #100 do not unblock compound scientific publication. Approved Evidence representation, approved locale-specific Scientific Content with provenance, the applicable review state and explicit publication authorization remain required. Research Basics publication does not satisfy those compound-page requirements and must not be treated as an Evidence contract substitute.

PB-DEC-002 was Owner approved on 2026-08-28. The public locale policy is now canonical:
- Spanish (`es`) is the primary/default locale and uses unprefixed routes;
- English uses `/en/`;
- French uses `/fr/`;
- localized URLs must not silently serve another language when localized content is unavailable.

This locale decision authorizes localization-ready implementation within existing gates; it does not itself authorize unrelated publication, scientific claims, Analytics, Commerce or other gated production activation.

## Evidence / Scientific Inventory / Scientific Content Production

PR #60 (`Evidence: publication contracts foundation v1`) is currently open/draft/unmerged and mergeable at `a0501c9669c7eac591ae04ce577ff6ddaf6e387c`, but **not merge-authorized**. Its bounded cleanup is complete and its current diff is generic contracts-only:
- `EVIDENCE_TO_SCIENTIFIC_CONTENT_V1.md`;
- `SCIENTIFIC_CONTENT_TO_PUBLICATION_V1.md`;
- `EVIDENCE_TO_WEB_PUBLIC_READ_V1.md`.

The cleanup removed compound/pilot-specific contamination without creating approval or reactivating broader Evidence implementation. Historical comments asserting broader compound or pilot approval must not be used as current publication authority.

Therefore:
- Evidence public-read contract = `PROPOSED / NOT APPROVED`;
- Scientific Content remains editorial transformation only;
- production compound pages remain blocked;
- the generic WEB M2 Platform Foundation may proceed only inside the September 22 fail-closed authorization;
- compound publication remains blocked by approved Evidence, production-ready Scientific Content and explicit publication authorization.

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

WORK 7 remains the active private Inventory / Procurement / Landed Cost workstream in `e-milysol/peptibloom-private-master`. The September 22 WEB M2 Platform Foundation authorization is a narrow parallel execution exception; it does not displace WORK 7 or reactivate any other archived/deferred foundation.

Sanitized implementation and recovery/import disposition:
- work was reported as Private Master MVP implementation `COMPLETE`;
- the implementation commit exists and its ancestry into current private `main` was independently verified;
- the current private `main` migrations and eight-test synthetic suite were independently re-run successfully on 2026-09-25;
- these facts verify repository integration and the current synthetic baseline, not full operational-foundation readiness or the state of any external operational environment;
- real private-data import: `BLOCKED`;
- the recovery/import gate requires an independent external backup, SHA-256 integrity verification, a successful isolated restore test, and a validation/recovery log;
- no accessible authoritative evidence reviewed for this reconciliation proves that the full gate has passed.

The public repository contains only sanitized coordination state. Restricted operational data remain private.

## Operative Core

Operative Core v1 data-layer implementation remains complete. No serializer/viewset/admin/QR or follow-on operational surface is implied without a new authorized scope.

## Physical Products / Accessories

PB-DEC-501 remains the governing authority. The clean-sheet physical-design model and Bambu Lab P1S + AMS fabrication capability remain the current baseline.

Bloom Caps remains `PRE-G0`; CAD is not authorized and the common-core architecture remains hypothesis-only until the required functional inputs and measurements pass the relevant gates.

## Cross-domain request traceability

The durable identifier map is:
- `PB-XD-001` — Evidence -> Scientific Content contract;
- `PB-XD-002` — Release 1 Evidence / Public Content contract;
- `PB-XD-003` — Public catalog label Legal/Regulatory review.

The catalog-label request briefly collided with `PB-XD-001` historically and was normalized to `PB-XD-003`; this changes identifier traceability only and creates no approval or publication authority.

## Repository / Coordination

The files under `project/` remain the durable coordination source of truth. Issue #13 remains the live asynchronous coordination mailbox.

PB-DEC-001 was **OWNER APPROVED on 2026-09-03** as repository policy. `main` is required to use PR-based changes, prohibit force-pushes and deletion, and require successful repository QA before merge where applicable. Technical enforcement was subsequently verified in GitHub: ruleset `Protect main` is active, requires PRs and `web-qa`, requires branches to be up to date, blocks force-pushes/deletion and has no bypass.

PB-DEC-002 was **OWNER APPROVED on 2026-08-28** and is no longer an open decision. The approved locale/URL/fallback policy is recorded above and in `DECISIONS.md` / `CANON.md`.
