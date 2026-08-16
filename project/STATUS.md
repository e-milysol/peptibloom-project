# PeptiBloom Status Board

Last coordination baseline: 2026-08-16.

| Workstream | Current state | Next gate |
|---|---|---|
| Web | M0 complete; M1 architecture/launch plan approved; visual foundation proposed | Technical Direction approval of the visual foundation before implementation |
| Operative Core | v1 final migration contract approved; implementation started on feature branch | models + migrations + validation + review |
| Evidence | architecture/reconciliation in progress | approved public read contract before WEB M2 |
| Scientific Inventory | source/review workflow in progress | production-ready handoff to Evidence Layer |

## Web

M0 was merged to `main` as commit `5fded280cb587a054b87583ec4ee3e381171b93a` at the coordination baseline.

The M1 architecture and launch plan are APPROVED. The M1 visual foundation is PROPOSED and implementation remains pending Technical Direction approval.

M1 planned public architecture:
- `/`
- `/library/`
- `/methodology/`
- `/about/`

M1 intentionally excludes compound pages, scientific mocks, ecommerce and Evidence API integration.

## Operative Core

Final migration contract includes Product, SKU, Supplier, Manufacturer, Reception, Batch, StockUnit, Movement and Document, subject to the approved contract. Implementation work was reported as started on `feat/operative-core-v1`; repository state must be re-read before acting on it.

## Evidence / Scientific Inventory

WEB M2 is BLOCKED until the Evidence public contract is approved and production-ready scientific content exists.

## Coordination

The files under `project/` supersede manual cross-chat copy/paste for shared project state after this protocol is merged.
