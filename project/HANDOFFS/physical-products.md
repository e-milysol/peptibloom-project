# Physical Products / Accessories Handoff

Owner: PHYSICAL PRODUCTS / ACCESSORIES domain

Canonical authority: `PB-DEC-501` — APPROVED

Canonical operating model:
`project/PHYSICAL_DESIGN_PIPELINE.md` — Clean-Sheet Physical Design Pipeline v0.1, Owner approved under the authority of PB-DEC-501; approval recorded by PB-DEC-502.

## Purpose

Physical Products / Accessories is the durable source of truth for the physical product itself: its identity, design provenance, controlled physical references, intended specification, documented IP/license evidence, prototype and validation state, and sanitized product-truth handoffs.

This domain does not own operational inventory, procurement, commercial lifecycle, scientific evidence, publication, payments or legal/regulatory approval.

## Durable product truth

Physical Products / Accessories owns:

- physical product identity;
- stable physical product and variant identity;
- source/design provenance;
- controlled references to geometry and source files;
- design revision and state;
- intended physical material/specification;
- factual documented IP/license evidence;
- factual evidence of commercial-use permission;
- prototype state;
- physical validation state;
- objective validation criteria and evidence;
- manufacturing/printability validation facts;
- physical intended use and limitations;
- sanitized product-truth handoffs to dependent domains.

## Orthogonal readiness

At minimum, keep these states distinct:

- `DESIGN_STATE`;
- `LICENSE_IP_STATE`;
- `PHYSICAL_VALIDATION_STATE`.

Passing physical validation does not imply legal clearance, publication authorization, commercial readiness or authorization to sell.

`READY_FOR_SALE` is outside Physical Products / Accessories. This domain may provide factual eligibility inputs only. Commercial lifecycle authority and any `READY_FOR_SALE` determination must remain outside this domain and subject to the applicable commercial, Legal, regulatory, territory, pricing, payment-provider and Owner gates.

## Operative Core boundary

This authority does not replace, reassign or redefine the existing Operative Core `Product`, `SKU` or inventory models.

A Physical Products stable product or variant identifier is not implicitly identical to Operative Core `Product.id`, SKU identity, a storefront identifier or any identifier owned by another domain.

Any material mapping, synchronization, automated dependency or shared semantic interface between Physical Products and Operative Core requires an explicit cross-domain contract before another domain relies on it.

## Private Master / WORK 7 boundary

WORK 7 / Private Master remains authoritative for private supplier, procurement, inventory, landed-cost, logistics and related private operational truth.

The public Control Plane must not expose:

- private supplier identities or contacts;
- procurement prices;
- landed cost;
- shipment or tracking data;
- payment information;
- invoices;
- margins;
- private operational records or documents.

Only sanitized product-truth or coordination state may enter the public repository.

## IP / license boundary

Physical Products may record factual documentary evidence concerning IP/license status and commercial-use permission.

It does not perform legal interpretation or grant legal clearance. Legal review remains required where applicable.

## Other exclusions

Physical Products / Accessories does not own or authorize:

- storefront or sales-funnel implementation;
- pricing presentation;
- cart or checkout;
- payments or payment-provider authorization;
- scientific claims or Evidence assessment;
- Web implementation or publication execution;
- legal or regulatory approval;
- `READY_FOR_SALE`.

This handoff does not create additional Commerce canon.

## Bloom Caps — latest controlled Owner evidence

The latest Owner evidence recorded in the Hardware / Physical Products queue is accepted here as controlled interface/functional evidence only. It does not by itself pass G0, G1 or G2 and does not authorize CAD or fabrication.

### Functional interaction

Owner-selected interaction: **B**.

- Bloom Cap may cover/block the original green plastic flip-off while installed.
- Bloom Cap is removed before vial access.
- The original flip-off/crimp closure remains intact and non-sacrificial.
- Removal must be manual and tool-free.
- Retention should be intermediate: the cap should not fall off loosely.
- The design must not damage, deform or pull the original aluminum closure.
- Aluminum must not be assumed to be a safe retention surface without evidence.
- The original green flip-off must not be dismantled for Bloom Cap installation.

### Controlled observed interface measurement

Measured quantity: maximum external diameter of the **green plastic flip-off cap while closed**, edge-to-edge through the center, excluding the aluminum closure below.

Owner readings with digital caliper:
- 15.07 mm
- 15.06 mm
- 15.07 mm

Observed arithmetic mean: `(15.07 + 15.06 + 15.07) / 3 = 15.0667 mm`, reportable for this evidence record as **15.07 mm observed mean**.

Observed range: **0.01 mm**.

This is one observed interface dimension only. It is **not** a manufacturing tolerance, nominal standard, fit allowance, design dimension or evidence of a common core. No unmeasured height, undercut, aluminum, neck, shoulder, open-cap geometry, clearance or interference value may be inferred from it.

### Current Bloom Caps gate state

- `G0`: NOT DECLARED PASSED
- `G1`: NOT DECLARED PASSED
- `G2`: NOT PASSED from this diameter alone
- `common_core`: HYPOTHESIS_ONLY
- `cad_authorized`: false

The next Physical Products step, if pursued, is to identify only the next minimum controlled functional/interface evidence required by the clean-sheet pipeline before dependent geometry may advance. This section creates no Legal/IP, publication, Commerce or `READY_FOR_SALE` implication.

Source coordination record: Issue #17, Owner-evidence reconciliation comment `5346269304`.

## PB-XD timing

`PB-XD REQUIRED NOW: NO` for continued Physical Products reconciliation and domain-local documentation.

A `PB-XD-NNN` request is required before Commerce, Web, WORK 7, Operative Core or another domain depends on a material or automated Physical Products data contract, identifier mapping, synchronization mechanism or shared semantic interface.
