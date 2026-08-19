# PeptiBloom Status Board

Last coordination baseline: 2026-08-19.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0 complete; M1 architecture/launch plan, visual foundation, implementation and approved Home/Library visual enrichment complete | launch hardening; multilingual routing implementation after default-locale decision; WEB M2 remains blocked |
| App Core / WORK 6 | Product Design v0.1 OWNER APPROVED; Technical Design / UX IA v0.1 OWNER APPROVED; MVP Architecture APPROVED for contract/wireflow phase | contracts, wireflows, model/API refinement and Security/Legal handoffs; production implementation remains blocked pending explicit authorization |
| Private Master / WORK 7 | Private Inventory / Procurement / Landed Cost domain assigned to `e-milysol/peptibloom-private-master`; intentionally separate from App Core | continue private-repo foundation and implementation under its own gates; only sanitized status crosses to the public Control Plane |
| Operative Core | v1 final migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization; PostgreSQL runtime smoke before deployment |
| Physical Products / Accessories | PB-DEC-501 domain authority approved; Clean-Sheet Physical Design Pipeline v0.1 Owner approved; Bambu Lab P1S + AMS recorded as current fabrication capability; legacy geometry recovery closed with no recovered authoritative geometry; Bloom Caps is the first controlled clean-sheet exercise and remains PRE-G0; CAD is not authorized | review and reduce the held Bloom Caps G0–G2 Owner Input & Measurement Pack, then collect only the functional input and physical measurements required for G0–G2 |
| Evidence | architecture/reconciliation in progress; internal Evidence -> Scientific Content contract is PROPOSED / PARTIAL / PENDING FORMALIZATION | formalize internal representation without inventing schema; approved public read contract still required before WEB M2 |
| Scientific Inventory | source/review workflow in progress; recovered candidates recorded for reconciliation only | production-ready handoff to Evidence Layer |
| Scientific Content Production | editorial transformation stage represented for coordination only; no scientific assessment, approval or publication authority; internal Evidence contract is PROPOSED / PARTIAL / PENDING FORMALIZATION | formalize the internal contract and receive sufficient Evidence-qualified input; publication remains blocked by existing Evidence/content gates |
| Growth / SEO / Distribution | operational ownership restored; Search Console state is recorded only as HISTORICAL OPERATIONAL OBSERVATION — 2026-08-18 | continue monitoring and establish current baselines from fresh source telemetry; do not infer current performance from historical observations |
| Analytics | Analytics v1 contract and 19-event registry restored; only ANALYTICS_CONTRACT_APPROVED is APPROVED; production instrumentation remains BLOCKED | WEB technical validation, Legal/Privacy review and Owner production authorization remain PENDING |

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

Scientific Content Production is represented as an editorial transformation stage only. Its internal Evidence handoff remains `PROPOSED / PARTIAL / PENDING FORMALIZATION`; this does not approve Evidence schema, scientific assessment, scientific content or publication authority.

Recovered Scientific Inventory candidate classifications are coordination-state reconciliation only and do not constitute Evidence intake, acceptance, approval or production readiness.

WEB M2 and production compound pages remain BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

## Growth / Analytics

Growth / SEO / Distribution operational ownership is restored. Search Console observations from `2026-08-18` are historical operational observations only and must not be presented as current impressions, clicks, queries, CTR, rankings, indexed/discovered counts, traffic or conversions.

Analytics v1 is restored as a previously approved domain contract. The contract gate is APPROVED, while WEB technical validation, Legal/Privacy review and Owner production authorization remain PENDING. Production instrumentation remains BLOCKED.

PB-DEC-002 remains open/proposed; no historical language/default-locale/URL-prefix policy is restored by this reconciliation.

## Coordination

The files under `project/` are the durable coordination source of truth. Issue #13 is the live asynchronous mailbox for routine `WORK -> ORCHESTRATOR` / `ORCHESTRATOR -> WORK` coordination.
