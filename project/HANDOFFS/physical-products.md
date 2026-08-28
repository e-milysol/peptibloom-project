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

## Bloom Caps — latest Owner evidence reconciliation

Source: Issue #17 comment `5346269304`.

The latest Owner-provided functional/interface evidence is accepted as controlled PRE-G0 / G0-G2 input only. It does not pass a gate and does not authorize CAD or fabrication.

Functional interaction selected by Owner:

- Bloom Cap may cover/block the original green flip-off while installed;
- Bloom Cap is removed before vial access;
- the original flip-off/crimp closure remains intact and non-sacrificial;
- installation must not require dismantling the original green flip-off.

Owner constraints retained:

- manual removal without tools;
- intermediate retention: the Bloom Cap should not fall off loosely;
- must not damage, deform or pull the original aluminum closure;
- aluminum must not be assumed to be a safe retention surface without evidence.

Controlled observed interface evidence currently available:

- measured quantity: maximum external diameter of the closed green plastic flip-off, edge-to-edge through the center, excluding the aluminum below;
- Owner readings: `15.07 mm`, `15.06 mm`, `15.07 mm`;
- observed arithmetic mean: `15.0667 mm`, reportable at this phase as `15.07 mm` observed mean;
- observed range across those three readings: `0.01 mm`.

These observations are not a nominal standard, manufacturing tolerance, fit allowance, clearance, common-core proof or evidence of any unmeasured height, undercut, aluminum, neck, shoulder or open-cap geometry.

Current Bloom Caps gate interpretation remains fail-closed:

- baseline: `CLEAN_SHEET`;
- `G0`: NOT DECLARED PASSED;
- `G1`: NOT DECLARED PASSED;
- `G2`: NOT PASSED from the available diameter evidence alone;
- `common_core = HYPOTHESIS_ONLY`;
- `cad_authorized = false`;
- prototype fabrication is not authorized by this reconciliation.

The first clean-sheet candidate architecture — a removable cap enveloping only the green plastic flip-off — may be evaluated as a candidate only. If additional evidence is required, request only the next minimum physical measurement needed for a concrete architecture/gate decision and specify the measurement points, orientation and practical precision. Do not infer missing dimensions or tolerances.

Physical validation, if eventually achieved, remains independent from `READY_FOR_SALE`, publication, Legal/IP clearance and Commerce authorization.

## PB-XD timing

`PB-XD REQUIRED NOW: NO` for continued Physical Products reconciliation and domain-local documentation.

A `PB-XD-NNN` request is required before Commerce, Web, WORK 7, Operative Core or another domain depends on a material or automated Physical Products data contract, identifier mapping, synchronization mechanism or shared semantic interface.
