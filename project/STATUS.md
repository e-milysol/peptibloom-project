# PeptiBloom Status Board

Last coordination baseline: 2026-08-16.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0 complete; M1 architecture/launch plan approved; visual foundation approved; implementation authorized | implement WEB M1 on a feature branch, validate and review |
| Operative Core | v1 final migration contract approved; implementation started on feature branch | models + migrations + validation + review |
| Evidence | architecture/reconciliation in progress | approved public read contract before WEB M2 |
| Scientific Inventory | source/review workflow in progress | production-ready handoff to Evidence Layer |

## Web

M0 was merged to `main` as commit `5fded280cb587a054b87583ec4ee3e381171b93a` at the original coordination baseline.

The M1 architecture and launch plan are APPROVED. The M1 Visual Foundation is APPROVED as an M1 implementation foundation, not as the complete/global PeptiBloom Design System. WEB M1 implementation is authorized within `apps/web/` after normal repository and branch verification.

M1 planned public architecture:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

M1 intentionally excludes compound pages, scientific mocks, ecommerce and Evidence API integration.

The approved M1 visual direction is `Editorial Evidence / Warm Scientific`, using the M1-local palette, Source Serif 4 + Source Sans 3, editorial rather than dashboard composition, decorative-only Evidence Halo geometry, explicit visual treatment of uncertainty, and an editorial Library rather than a product grid. Evidence taxonomy semantics remain out of scope.

## Operative Core

Final migration contract includes Product, SKU, Supplier, Manufacturer, Reception, Batch, StockUnit, Movement and Document, subject to the approved contract. Implementation work was reported as started on `feat/operative-core-v1`; repository state must be re-read before acting on it.

## Evidence / Scientific Inventory

WEB M2 is BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

## Coordination

The files under `project/` supersede manual cross-chat copy/paste for shared project state after this protocol is merged.
