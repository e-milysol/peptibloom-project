# Operative Core Handoff

Owner: OPERATIVE workstream

## Current state

Operative Core v1 final migration contract: APPROVED.
Implementation: reported IN PROGRESS on `feat/operative-core-v1`; always verify current GitHub/local state before continuing.

## Canonical model set

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

## Critical rules

- FK deletion policies closed in the final contract use `PROTECT`.
- `StockUnit.available_quantity` is not persisted.
- Stock is derived from `Movement` history.
- Do not add a Batch uniqueness constraint until explicitly approved.
- Do not invent enums for `Reception.status` or `StockUnit.status` if they remain unspecified by the implementation contract being used.
- Do not add extra indexes without an approved decision.
- Do not create relationships to `apps/api/evidence/` without a cross-domain request and approval.

## Required completion evidence

Before proposing merge:
- Django system check;
- migrations generated/reviewed;
- migration plan reviewed;
- relevant tests;
- diff review;
- explicit report of any implementation choice not directly dictated by canon.
