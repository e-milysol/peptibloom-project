# PeptiBloom Status Board

Last coordination baseline: 2026-08-26 state reconciliation from Issue #13. Implementation baseline remains public `main` `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M1 complete; Public Content Release 1 and Public Tools branch-preview execution active under `OUTPUT-BEFORE-NEW-FOUNDATION`; Web Identity v1.0 approved/frozen but exact assets are `ASSET_INPUT_REQUIRED` | one real Library ficha + one evidence-based Blog article + reusable templates/IA preview; Visual Planner production-candidate preview; all production gates remain blocked |
| App Core / WORK 6 | Product Design v0.1 OWNER APPROVED; Technical Design / UX IA v0.1 OWNER APPROVED; MVP Architecture APPROVED for contract/wireflow phase | contracts, wireflows, model/API refinement and Security/Legal handoffs; production implementation remains blocked pending explicit authorization |
| Private Master / WORK 7 | Active and separate from App Core; backup/recovery increment authorized; real-data import conditionally authorized but still BLOCKED | external backup -> SHA-256 verification -> isolated restore -> restored-environment validation -> recovery log; only then one bounded import increment |
| Operative Core | v1 final migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization; PostgreSQL runtime smoke before deployment |
| Physical Products / Accessories | PB-DEC-501 domain authority approved; Clean-Sheet Physical Design Pipeline v0.1 Owner approved; Bambu Lab P1S + AMS recorded as current fabrication capability; legacy geometry recovery closed with no recovered authoritative geometry; Bloom Caps is the first controlled clean-sheet exercise and remains PRE-G0; CAD is not authorized | review and reduce the held Bloom Caps G0–G2 Owner Input & Measurement Pack, then collect only the functional input and physical measurements required for G0–G2 |
| Evidence | architecture/reconciliation in progress; internal Evidence -> Scientific Content semantics approved through `PB-XD-001` but pending durable PR #32 reconciliation; public contract remains unapproved | preserve the approved internal boundary without inventing schema; answer the separate PB-XD-002 public-content request; WEB M2 remains blocked |
| Scientific Inventory | source/review workflow in progress; recovered candidates recorded for reconciliation only | production-ready handoff to Evidence Layer |
| Scientific Content Production | editorial transformation only; no scientific assessment, approval or publication authority; internal `PB-XD-001` semantics approved but pending durable PR #32 reconciliation | receive sufficient Evidence-qualified input and answer PB-XD-002; publication remains blocked by existing Evidence/content gates |
| Growth / SEO / Distribution | operational ownership restored; Search Console state is recorded only as HISTORICAL OPERATIONAL OBSERVATION — 2026-08-18 | continue monitoring and establish current baselines from fresh source telemetry; do not infer current performance from historical observations |
| Analytics | Analytics v1 contract and 19-event registry restored; only ANALYTICS_CONTRACT_APPROVED is APPROVED; production instrumentation remains BLOCKED | WEB technical validation, Legal/Privacy review and Owner production authorization remain PENDING |

## Reconciled execution state

Active execution is limited to:
- WORK 7 / Private Master under its recovery-first checkpoint protocol;
- Public Content Release 1 minimum owners: Scientific Inventory, Evidence, Scientific Content, Brand/Visual Production, Web, Accessibility, Legal/Scientific QA and Growth as a downstream consumer;
- Public Tools minimum owners: Web, Research Tools/Utility Discovery and the existing Visual Planner / Routine Builder path, with App Core consulted only for contract consistency.

All unrelated workstreams remain `ARCHIVED / DEFERRED`. App Core production implementation is not reactivated. No payment, external integration, health/wellness-data, Analytics production, Web M2 publication or Physical Products fabrication authority is created.

The active operating rule is `OUTPUT-BEFORE-NEW-FOUNDATION`: concrete, safe branch-preview artifacts take priority over additional foundation/specification documents unless a named blocker requires one.

Directive sources reconciled:
- contracts #13-#15: Issue #13 comment `5391139927`;
- assisted-commerce contract #16: `5391213520`;
- Public Content Release 1 and output-first rule: `5400901534`, refined by `5400984546`;
- Public Tools / Visual Planner priority: `5401050814`;
- active/deferred reconciliation: `5402273570`;
- WORK 7 recovery increment and conditional import: `5413980562`, `5416698566`, routed by `5419310089`;
- frozen Web Identity v1.0 disposition: `5416421053`.

## Web

M0 was merged to `main` as commit `5fded280cb587a054b87583ec4ee3e381171b93a` at the original coordination baseline.

WEB M1 implementation was validated and merged to `main` as commit `a4f0609083b2bb81af4e43bdec6e906d4ff6ffa4`.

The approved Home/Scientific Library visual enrichment from PR #23 is merged in current `main` as commit `b0f4c45c1450541b812e2d96676683b9b2bab6df`.

M1 provides the public/editorial foundation for:
- `/`
- `/library/`
- `/methodology/`
- `/about/`
- `/calculator/`

The M1 visual direction remains `Editorial Evidence / Warm Scientific`, using the M1-local palette, Source Serif 4 + Source Sans 3, editorial rather than dashboard composition, decorative-only Evidence Halo geometry, explicit visual treatment of uncertainty, and an editorial Library rather than a product grid.

M1 intentionally excludes production compound pages, scientific mocks, ecommerce and Evidence API integration. Evidence taxonomy semantics remain out of scope.

PB-DEC-003 was Owner approved on 2026-08-18: `https://peptibloomproject.com` is the permanent production canonical domain and Cloudflare Workers is the approved production hosting. Web, SEO, sitemap, canonicals, metadata and other public references may treat that URL as the production origin. Any material future domain or hosting change requires a new Owner decision.

The public web is deployed through Cloudflare Workers from `main`. It is approved as multilingual with minimum supported locales English (`en`), Spanish (`es`) and French (`fr`). PB-DEC-002 remains open, so primary/default locale, URL-prefix strategy and fallback behavior must not be inferred.

## App Core / WORK 6

WORK 6 owns the authenticated PeptiBloom application / site app, distinct from the public Astro editorial web and distinct from the private operational master.

Approved state:
- Product Design v0.1: `OWNER APPROVED`;
- Technical Design / UX IA v0.1: `OWNER APPROVED`;
- MVP Architecture: `APPROVED FOR CONTRACT / WIREFLOW PHASE`;
- production implementation: `BLOCKED / NOT AUTHORIZED`;
- real health/wellness data: `BLOCKED`;
- payments/subscriptions: not authorized;
- external integrations: not authorized;
- Product Analytics expansion: `BLOCKED` pending its canonical gates.

The next authorized work is non-production contract/wireflow work: metric dictionary, recurrence/timezone contract, OpenAPI refinement, wireflows, Django model/constraint refinement, inventory reconciliation invariant, synthetic fixtures, Security threat-model handoff, Legal/Privacy data-inventory handoff and revised role-based effort planning.

Compound pages remain `FUTURE / EVIDENCE-GATED`; no placeholder scientific pages may be created.

## Private Master / WORK 7

WORK 7 owns the private Inventory / Procurement / Landed Cost application in the private repository `e-milysol/peptibloom-private-master`.

This domain is not the App Core Personal Inventory. The two domains must remain isolated; no shared database, storage, credentials, health identity, implicit synchronization or cross-domain foreign key is assumed.

The public repository may contain only sanitized coordination state for WORK 7. Private supplier, purchasing, logistics, document, cost and other restricted operational data stay in the private environment.

## Operative Core

Operative Core v1 data-layer implementation was validated and merged to `main` as commit `05aff5f7e558d2f29fecf7551f76045e7a397c55`.

Delivered canonical model set:
- Product and SKU;
- Supplier, Manufacturer, Reception, Batch, StockUnit and Movement;
- Document;
- initial migrations for products, inventory and documents;
- model tests covering the approved v1 rules.

No serializer/viewset/admin/QR or other follow-on operational surface is implied by completion of this v1 data-layer gate; such work requires a new authorized scope.

## Physical Products / Accessories

PB-DEC-501 remains the governing domain-authority decision. The Clean-Sheet Physical Design Pipeline v0.1 is Owner approved as the working physical-design control model, with Bambu Lab P1S and AMS multi-filament/multicolor capability recorded as current fabrication capability.

Legacy geometry recovery is complete with no recovered authoritative geometry. New physical design therefore proceeds from the clean-sheet baseline under the approved requirements, measurement, revision, prototype-build, test, failure and G0–G6 controls.

Bloom Caps is the first controlled clean-sheet design exercise. It remains `PRE-G0`: G0, G1 and G2 have not passed, the common-core architecture remains `HYPOTHESIS_ONLY`, and CAD is not authorized.

The next controlled step is to review and reduce the held Bloom Caps G0–G2 Owner Input & Measurement Pack, then collect only the Owner functional input and physical measurements required to assess G0–G2. Prototype fabrication has not started.

Existing PB-DEC-501 domain boundaries remain unchanged. WORK 7 / Private Master retains private operational authority, `READY_FOR_SALE` remains outside Physical Products, and `PB-XD REQUIRED NOW: NO`; a PB-XD becomes mandatory before another domain relies on a material/automated Physical Products data contract, identifier mapping, synchronization mechanism or shared semantic interface.

## Evidence / Scientific Inventory / Scientific Content Production

Scientific Content Production is represented as an editorial transformation stage only. The internal Evidence handoff semantics are approved through `PB-XD-001` and represented in draft PR #32, but their repository durability remains pending reconciliation. This does not approve Evidence schema, scientific assessment, scientific content, a public Evidence contract or publication authority.

Recovered Scientific Inventory candidate classifications are coordination-state reconciliation only and do not constitute Evidence intake, acceptance, approval or production readiness.

WEB M2 and production compound pages remain BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

Draft PR #32 represents the approved internal `PB-XD-001` Evidence -> Scientific Content semantics, but explicitly excludes Evidence -> Web and publication. `PB-XD-002` is therefore OPEN for the distinct Release 1 Evidence / Public Content contract. Opening the request does not approve its output or unblock publication.

## Growth / Analytics

Growth / SEO / Distribution operational ownership is restored. Search Console observations from `2026-08-18` are historical operational observations only and must not be presented as current impressions, clicks, queries, CTR, rankings, indexed/discovered counts, traffic or conversions.

Analytics v1 is restored as a previously approved domain contract. The contract gate is APPROVED, while WEB technical validation, Legal/Privacy review and Owner production authorization remain PENDING. Production instrumentation remains BLOCKED.

PB-DEC-002 remains open/proposed; no historical language/default-locale/URL-prefix policy is restored by this reconciliation.

## Open PR disposition and review order

This table is review sequencing only. Every PR remains open in its observed state; no merge, close or supersession is authorized.

| Order | PR | Observed state | Disposition | Review dependency / reason |
|---:|---:|---|---|---|
| 1 | #32 | OPEN / DRAFT | REVIEW FIRST; KEEP OPEN | Preserve approved `PB-XD-001`; reconcile overlapping core-state edits with this increment and keep Evidence -> Web excluded. |
| 2 | #42 | OPEN / DRAFT | REVIEW AFTER #32 | Scientific Inventory readiness is the first Release 1 candidate-selection input. |
| 3 | #41 | OPEN / DRAFT | REVIEW AFTER #32/#42 | Scientific Content must consume Evidence-qualified inputs under the internal contract and new PB-XD-002 gate. |
| 4 | #43 | OPEN / DRAFT | REVIEW GATE INPUT | Security authority/handoff is relevant to Public Tools and later App Core gates; no production authorization. |
| 5 | #48 | OPEN / DRAFT | REVIEW WORK 7 SANITIZED STATE | Reconcile only sanitized implementation status; preserve recovery-first and private-data boundaries. |
| 6 | #44 | OPEN / DRAFT | REVIEW ASSET CHAIN | Registry is the intended durability path for exact frozen Web Identity assets once supplied. |
| 7 | #51 | OPEN / DRAFT | REVIEW AFTER #44 | Visual Production foundation must consume, not duplicate, the asset registry and editable-master contract. |
| 8 | #39 | OPEN / DRAFT | REVIEW WITH #44/#51 | Brand/Visual handoff must preserve Web Identity versus Product Label separation. |
| 9 | #47 | OPEN / DRAFT | REVIEW RELEASE 1 INPUT | Opportunity discovery may inform Blog selection but community sources are not Evidence. |
| 10 | #49 | OPEN / DRAFT | REVIEW RELEASE 1 PREVIEW INPUT | Evaluate the ordered non-claim visual experiments under current identity and Evidence gates. |
| 11 | #45 | OPEN / DRAFT | REVIEW PUBLIC TOOLS CONTRACT | Product-design scope is input to the active Visual Planner production-candidate path, not App Core production authority. |
| 12 | #46 | OPEN / DRAFT | REVIEW PUBLIC TOOLS IMPLEMENTATION | Reconcile synthetic prototype into a neutral, privacy-minimal Web branch-preview path; no production publication. |
| 13 | #36 | OPEN / DRAFT | REVIEW OPERATING HANDOFF | Reconcile Web autonomy with Release 1/Public Tools priorities and PB-DEC-002 remaining open. |
| 14 | #33 | OPEN / DRAFT | REVIEW GATE HANDOFF | Legal handoff supports concrete Release 1/Public Tools review; it does not supply legal approval by itself. |
| 15 | #35 | OPEN / DRAFT | REVIEW DOWNSTREAM ONLY | Growth consumes real release candidates after scientific/publication gates; no claim inflation. |
| 16 | #34 | OPEN / DRAFT | REVIEW, KEEP PRODUCTION BLOCKED | Migration acceptance does not satisfy technical, Legal/Privacy or Owner production gates. |
| 17 | #38 | OPEN / DRAFT | DEFER / KEEP OPEN | Catalog/Pricing is outside the active execution set except for named dependencies. |
| 18 | #40 | OPEN / DRAFT | DEFER / KEEP OPEN | Packaging handoff is archived/deferred; review later against contract #13 and physical validation authority. |
| 19 | #50 | OPEN / DRAFT | DEFER / KEEP OPEN | Physical CX is archived/deferred; no packaging production or fabrication authority. |
| 20 | #37 | OPEN / DRAFT | DEFER / KEEP OPEN | Commerce handoff is archived/deferred; later review must consume contract #16 and Legal policy. |
| 21 | #31 | OPEN / READY, NO CHECKS/REVIEWS OBSERVED | DEFER / KEEP OPEN | Provider-neutral mock remains non-production; no Commerce/payment activation or merge authority. |

## Unresolved state conflicts

- Public `main` still carries the 2026-08-19 baseline while Issue #13 contains later approved directives; this reconciliation is not durable on GitHub until separately reviewed and merged.
- PR #32 carries `PB-XD-001` and overlaps core state files. It must be reconciled rather than independently merged without conflict review.
- Web Identity v1.0 is approved/frozen, but exact Owner-approved assets are absent from repository control and remain `ASSET_INPUT_REQUIRED`.
- WORK 7 conditional import authorization exists, but no passing recovery evidence or later `WORK 7 ATOMIC INCREMENT CHECKPOINT AVAILABLE` was verified; import remains blocked.
- PB-DEC-001 and PB-DEC-002 remain `OWNER_REQUIRED`; no later Issue #13 directive closes either decision.

## Coordination

The files under `project/` are the durable coordination source of truth. Issue #13 is the live asynchronous mailbox for routine `WORK -> ORCHESTRATOR` / `ORCHESTRATOR -> WORK` coordination.
