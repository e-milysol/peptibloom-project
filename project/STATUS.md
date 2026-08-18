# PeptiBloom Status Board

Last coordination baseline: 2026-08-18.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0 complete; M1 architecture/launch plan, visual foundation, implementation and approved Home/Library visual enrichment complete | launch hardening/open launch decisions; multilingual routing implementation after default-locale decision; WEB M2 remains blocked |
| App Core / WORK 6 | Product Design v0.1 OWNER APPROVED; Technical Design / UX IA v0.1 OWNER APPROVED; MVP Architecture APPROVED for contract/wireflow phase | contracts, wireflows, model/API refinement and Security/Legal handoffs; production implementation remains blocked pending explicit authorization |
| Private Master / WORK 7 | Private Inventory / Procurement / Landed Cost domain assigned to `e-milysol/peptibloom-private-master`; intentionally separate from App Core | continue private-repo foundation and implementation under its own gates; only sanitized status crosses to the public Control Plane |
| Operative Core | v1 final migration contract and data-layer implementation complete | follow-on operational/API scope only after explicit authorization; PostgreSQL runtime smoke before deployment |
| Evidence | architecture/reconciliation in progress | approved public read contract before WEB M2 |
| Scientific Inventory | source/review workflow in progress | production-ready handoff to Evidence Layer |

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

The public web is deployed through Cloudflare Workers from `main`. The public web is approved as multilingual with minimum supported locales English (`en`), Spanish (`es`) and French (`fr`). PB-DEC-002 remains open, so primary/default locale, URL-prefix strategy and fallback behavior must not be inferred.

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

## Evidence / Scientific Inventory

WEB M2 and production compound pages remain BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

## Coordination

The files under `project/` are the durable coordination source of truth. Issue #13 is the live asynchronous mailbox for routine `WORK -> ORCHESTRATOR` / `ORCHESTRATOR -> WORK` coordination.
