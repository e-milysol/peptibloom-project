# Operative Core Handoff

Owner: OPERATIVE workstream

## Current state

Operative Core v1 final migration contract: APPROVED.
Operative Core v1 data-layer implementation: COMPLETE and merged to `main` as `05aff5f7e558d2f29fecf7551f76045e7a397c55`.

## Delivered canonical model set

Products:
- Product
- SKU

Inventory:
- Supplier
- Manufacturer
- Reception
- Batch
- StockUnit
- Movement

Documents:
- Document

Initial migrations and model tests for these domains are included in the merged v1 data-layer implementation.

## Critical rules retained

- FK deletion policies closed in the final contract use `PROTECT`.
- `StockUnit.available_quantity` is not persisted.
- Stock is derived from `Movement` history.
- No Batch uniqueness constraint was added.
- No enum/choices were invented for `Reception.status` or `StockUnit.status`.
- No extra indexes were added.
- No relationships to `apps/api/evidence/` were created.

## Validation evidence

Before merge:
- `python manage.py check` passed with 0 issues;
- `python manage.py makemigrations --check --dry-run` passed with no changes detected;
- `python manage.py migrate --plan` passed with products -> inventory -> documents dependency order;
- `python manage.py test products inventory documents` passed 7/7 tests;
- `git diff --check` passed;
- all three `0001_initial` migrations matched current model state;
- full diff stayed inside `apps/api/products/`, `apps/api/inventory/` and `apps/api/documents/`.

The validation runtime had no PostgreSQL service. Database-dependent checks therefore used an untracked temporary SQLite in-memory settings override. No project configuration was changed. PostgreSQL runtime smoke remains a pre-deployment hardening item, not a reason to infer new schema decisions.

## Implementation-local choices

The merged v1 implementation uses local Django choices for `max_length`, `DecimalField(12,3)`, `upload_to="documents/"`, `related_name`, `Meta.ordering` and `__str__`. These were reviewed as adequate for v1 and are not promoted to cross-domain/global canon merely by existing in code.

## Next gate

No follow-on operational/API surface is automatically authorized by completion of the v1 data-layer gate.

Before starting serializers, viewsets, admin flows, QR behavior, additional constraints/indexes, or any relationship to Evidence:
1. re-read the current Control Plane and open requests;
2. verify the repository state;
3. obtain explicit scope authorization where required;
4. use `PB-XD-NNN` for cross-domain dependencies.
