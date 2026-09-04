# PB-LABEL-GEOMETRY-v1

STATUS: OWNER-APPROVED VISUAL / CONTENT-SLOT CONTRACT
FROZEN: 2026-09-04
OWNER: Packaging / Labels + Brand / Visual
RELATED: Issue #19; PB-XD-003; `project/PACKAGING_MASTER_ASSET_FREEZE_V1.md`

## Purpose

Freeze the reusable PeptiBloom label/card geometry and field nomenclature derived from the Owner-supplied approved Neuro / Selank reference artwork reviewed on 2026-09-04.

This contract freezes **where information belongs, what each slot is called, and what is fixed versus variable**. It does **not** independently approve scientific claims, regulatory language, publication, sale, READY_FOR_SALE, product availability, dosing, reconstitution, administration, storage claims, purity claims, LOT/EXP semantics or QR destinations.

## Physical / export contract

The working physical geometry remains:
- ARTBOARD: 44 × 24 mm;
- CUT: 40 × 20 mm;
- SAFE: 36 × 16 mm;
- production density: 600 ppi;
- rounded-corner label/card silhouette following the approved Neuro reference;
- family colour and artwork are themed; core geometry is family-neutral.

## Approved Neuro reference — exact visible text

The Owner-supplied Neuro reference displays the following visible content:

- `NEURO SERIES` — family ribbon and side tab;
- `RESEARCH USE ONLY` — upper status/use statement;
- `PeptiBloom®` — brand name;
- `SCIENCE · PURITY · BLOOM` — brand tagline;
- `SELANK` — product name;
- `NEUROPEPTIDE RESEARCH REFERENCE` — product descriptor;
- `10 mg` — presentation;
- `HIGH PURITY RESEARCH` — lower information-rail statement;
- `LABORATORY USE ONLY` — lower information-rail statement;
- `STORE COLD 2–8°C` — lower information-rail storage statement;
- `PEPTIBLOOMPROJECT.COM` — website;
- `LOT: PB-NEU-001-00001` — lot example;
- `EXP: MM/YYYY` — expiry/date placeholder.

These strings are frozen as **reference values for slot naming and visual QA only**. They are not promoted here as globally approved legal/scientific claims.

## Frozen label zones

The approved label geometry is divided into the following zones:

1. `FAMILY_RIBBON_TOPLEFT`
   - angled family panel in the upper-left area;
   - displays `FAMILY_NAME`.

2. `FAMILY_ARTWORK_HERO`
   - family master artwork occupying the left/central visual field;
   - consumes the applicable frozen family master from `PB-MASTER-ASSET-KIT-v1`;
   - artwork must remain subordinate to product name and brand.

3. `TOP_USE_STATUS`
   - icon + short status/use statement near the upper centre/right;
   - data slot: `USE_STATEMENT_TOP`.

4. `BRAND_BLOCK`
   - canonical PeptiBloom logo/wordmark only;
   - tagline directly beneath;
   - data slots: `BRAND_NAME`, `BRAND_TAGLINE`;
   - final production artwork must use `apps/web/public/brand/logo.png` or an approved derivative, never an AI-rendered approximation.

5. `PRODUCT_IDENTITY_BLOCK`
   - dominant product/display name;
   - optional neutral/scientific descriptor below;
   - data slots: `PRODUCT_NAME`, `PRODUCT_DESCRIPTOR`.

6. `PRESENTATION_BLOCK`
   - framed quantity/presentation field;
   - data slot: `PRESENTATION`.

7. `FAMILY_SIDE_TAB`
   - vertical family tab at right;
   - includes `FAMILY_ICON` and repeated `FAMILY_NAME`;
   - family colour theme follows the applicable frozen family system.

8. `BOTTOM_INFO_RAIL`
   - segmented icon/text information rail;
   - potential slots:
     - `RESEARCH_STATEMENT`;
     - `USE_STATEMENT_BOTTOM`;
     - `STORAGE_STATEMENT`;
     - `WEBSITE`;
     - `QR_CODE`.

9. `BATCH_FOOTER`
   - white/light footer strip;
   - slots: `LOT_CODE`, `EXP_DATE`;
   - label prefixes `LOT:` and `EXP:` are geometry/content labels, while actual values remain variable and gated.

## Frozen content-token names

### Fixed global brand tokens

- `BRAND_NAME`
  - reference: `PeptiBloom®`;
  - source of truth: Brand.

- `BRAND_TAGLINE`
  - reference: `SCIENCE · PURITY · BLOOM`;
  - source of truth: Brand.

- `WEBSITE`
  - reference: `PEPTIBLOOMPROJECT.COM`;
  - source of truth: Web/Brand;
  - public destination must exist and be approved before production use.

### Family tokens

- `FAMILY_ID`
- `FAMILY_NAME`
- `FAMILY_ICON`
- `FAMILY_PRIMARY_COLOR`
- `FAMILY_MASTER_ARTWORK`

Working family IDs for this geometry contract:
- `RESEARCH_SERIES`;
- `LAB_ESSENTIALS`;
- `BLENDS_SERIES`;
- `NEURO_SERIES`;
- `METABOLIC_SERIES`.

### Catalog/product tokens

- `PRODUCT_NAME`
  - reference: `SELANK`;
  - source of truth: Catalog/Product.

- `PRODUCT_DESCRIPTOR`
  - reference: `NEUROPEPTIDE RESEARCH REFERENCE`;
  - optional;
  - source of truth: Evidence/approved Scientific Content where scientifically descriptive, otherwise neutral Catalog wording;
  - must not be inferred from family artwork.

- `PRESENTATION`
  - reference: `10 mg`;
  - source of truth: Catalog/Product;
  - must match the exact product/presentation variant.

### Controlled/gated statement tokens

- `USE_STATEMENT_TOP`
  - reference: `RESEARCH USE ONLY`;
  - gate: Legal/Regulatory.

- `RESEARCH_STATEMENT`
  - reference: `HIGH PURITY RESEARCH`;
  - gate: Evidence/Quality + Legal as applicable;
  - disabled by default until the exact wording is substantiated and approved.

- `USE_STATEMENT_BOTTOM`
  - reference: `LABORATORY USE ONLY`;
  - gate: Legal/Regulatory.

- `STORAGE_STATEMENT`
  - reference: `STORE COLD 2–8°C`;
  - gate: exact material/form stability evidence + applicable Quality/Legal review;
  - must not be inherited globally from the template.

### Batch / variable tokens

- `LOT_CODE`
  - reference example: `PB-NEU-001-00001`;
  - source of truth: operational batch/lot system;
  - no semantic pattern is promoted by this geometry contract beyond the existence of the slot.

- `EXP_DATE`
  - reference placeholder: `MM/YYYY`;
  - source of truth: approved quality/expiry process;
  - no expiry duration is implied by the template.

- `QR_CODE`
  - source of truth: Web/approved destination registry;
  - must not be decorative or dead;
  - disabled by default until destination approval.

## Icon slots

The Neuro reference contains the following icon roles:

- `ICON_TOP_USE_STATUS` — flask/use-status icon;
- `ICON_RESEARCH_STATEMENT` — shield/check icon;
- `ICON_USE_STATEMENT_BOTTOM` — laboratory flask icon;
- `ICON_STORAGE` — snowflake/cold icon;
- `ICON_WEBSITE` — globe icon;
- `FAMILY_ICON` — family-specific icon;
- `QR_CODE` — machine-readable destination graphic.

The icon role is frozen; exact icon artwork must come from the approved Brand/Packaging icon set and remain consistent across families.

## Fixed vs variable architecture

### FIXED ACROSS ALL PRODUCT LABELS

- physical geometry;
- rounded silhouette;
- zone positions and hierarchy;
- canonical PeptiBloom brand block;
- tagline position;
- product-name prominence;
- presentation-box position;
- bottom-rail structure;
- batch-footer structure;
- family-ribbon and side-tab positions;
- token names defined in this contract.

### VARIABLE BY FAMILY

- `FAMILY_ID`;
- `FAMILY_NAME`;
- family colour theme;
- `FAMILY_ICON`;
- `FAMILY_MASTER_ARTWORK`.

### VARIABLE BY PRODUCT/PRESENTATION

- `PRODUCT_NAME`;
- `PRODUCT_DESCRIPTOR` where approved;
- `PRESENTATION`.

### VARIABLE BY BATCH/OPERATION

- `LOT_CODE`;
- `EXP_DATE`;
- `QR_CODE` destination/value where applicable.

### CONDITIONAL / OFF BY DEFAULT

Until specifically approved by the owning domain:
- `USE_STATEMENT_TOP`;
- `RESEARCH_STATEMENT`;
- `USE_STATEMENT_BOTTOM`;
- `STORAGE_STATEMENT`;
- `QR_CODE`;
- any scientific descriptor that goes beyond neutral product identity;
- any LOT/EXP semantics not supported by operations/quality.

## Typography / hierarchy freeze

The following hierarchy is frozen from the approved Neuro reference:

1. `PRODUCT_NAME` — largest functional text after the PeptiBloom wordmark;
2. PeptiBloom brand block — dominant but not competing with the product name;
3. `FAMILY_NAME` — strong, repeated in top-left ribbon and right side tab;
4. `PRODUCT_DESCRIPTOR` — secondary uppercase descriptor;
5. `PRESENTATION` — boxed, high-contrast numeric/unit field;
6. bottom-rail statements — compact uppercase informational text;
7. batch footer — highly legible operational text.

Exact font files/point sizes are not promoted by this document unless separately stored in the Brand system. The Neuro artwork is the visual QA reference for relative scale, spacing, tracking and rhythm.

## Five-family pilot requirement

Before product-scale generation, produce exactly one review pilot for each family using this geometry:

- `RESEARCH_SERIES`;
- `LAB_ESSENTIALS`;
- `BLENDS_SERIES`;
- `NEURO_SERIES`;
- `METABOLIC_SERIES`.

Pilots are for Brand/Packaging visual QA. Use neutral/frozen product identity data or clearly marked placeholders where Catalog/Legal/Evidence truth is not yet approved. A pilot does not authorize publication or sale.

## Production guardrails

- `PB-LABEL-GEOMETRY-v1 != LEGAL APPROVAL`;
- `PB-LABEL-GEOMETRY-v1 != SCIENTIFIC APPROVAL`;
- `PB-LABEL-GEOMETRY-v1 != PUBLICATION APPROVAL`;
- `PB-LABEL-GEOMETRY-v1 != READY_FOR_SALE`;
- family colour is visual taxonomy, not evidence level or therapeutic indication;
- artwork must never be presented as the chemical structure of the named product unless separately verified and explicitly approved;
- do not add dosing, reconstitution, route, administration, cycle or human-use instructions to this label system;
- do not treat `RUO` / `Laboratory Use Only` as automatic legal clearance.

## Freeze decision

`PB-LABEL-GEOMETRY-v1` is now the controlling Packaging/Brand geometry and slot-naming contract for PeptiBloom family-coded label/card generation, subject to the explicit Legal/Evidence/Catalog/Web gates above.
