# PeptiBloom Packaging Label Pilot Freeze v1

STATUS: OWNER-APPROVED VISUAL PILOTS / NOT LEGAL CLEARANCE / NOT PRODUCTION-APPROVED ARTWORK
FROZEN: 2026-09-04
OWNER: Packaging / Labels + Brand / Visual
RELATED: Issue #19; PB-XD-003; PB-MASTER-ASSET-KIT-v1; PB-LABEL-GEOMETRY-v1

## Purpose

Freeze family-level label pilots produced from the PeptiBloom master-card system after Owner visual approval.

This freeze controls **visual treatment and compositional direction**. It does **not** convert any displayed scientific, quality, storage, regulatory, lot/expiry or commercial wording into an approved factual claim.

## Frozen pilot — Metabolic Series

Family: `METABOLIC_SERIES`
Reference product used for pilot rendering: `TIRZEPATIDE`
Reference presentation used for pilot rendering: `10 mg`

Reviewed raster artifact:
- working filename: `a_clean_high_end_pharmaceutical_biotech_product_l.png`
- dimensions: `1774 x 887 px`
- color mode: `RGBA`
- SHA-256: `00786036745a9ae40514c99e1234e3f6f7e47ad5ce7615f3315717a7380a1f08`
- freeze state: `FROZEN FAMILY PILOT REFERENCE`

The Owner explicitly approved the revised Metabolic pilot in which the family molecular artwork remains visually continuous **through / over the lower family-color information band** rather than being hard-clipped at the top edge of that band.

## Frozen pilot — Lab Essentials

Family: `LAB_ESSENTIALS`
Reference product used for pilot rendering: `BACTERIOSTATIC WATER`
Reference presentation used for pilot rendering: `10 mL`

Reviewed raster artifact:
- working filename: `a_clean_high_end_pharmaceutical_biotech_product_l.png`
- dimensions: `1774 x 887 px`
- color mode: `RGBA`
- SHA-256: `bc4130b4d5e7282efb75bda08e8ff90d31b976f393f875b5f8f2a073c4e6e47c`
- freeze state: `FROZEN FAMILY PILOT REFERENCE`

The Owner explicitly approved the Lab Essentials pilot after applying the same integrated-band behavior used in the peptide-family pilots:
- the molecular artwork crosses visually into / over the lower dark-teal information band;
- the band may become locally translucent where the artwork crosses it;
- the molecule remains visible with controlled depth while icons and text remain legible;
- the effect must read as continuous artwork, not as a hard cut at the band boundary.

The approved Lab Essentials pilot also establishes an important family-specific content behavior:
- presentation units may be `mL` rather than `mg`;
- storage wording is **product-specific**, not inherited from peptide-family defaults;
- `STORE COLD 2–8°C` is therefore **not a global Label Geometry constant** and must not be automatically applied to Lab Essentials.

The rendered pilot currently shows `STORE AT ROOM TEMPERATURE / AVOID DIRECT SUNLIGHT`. This wording is preserved as **reference-only pilot content** pending the applicable product-specific Quality/Legal/Catalog verification. The visual approval does not independently establish the technical storage condition as canon.

## Visual treatment frozen from Owner approval

Across approved pilots, the allowed integrated-band treatment is:
- the lower information band may become locally translucent / optically integrated where the family molecule crosses it;
- the molecule may remain visible across the band with controlled opacity and depth;
- information icons and text must remain legible and visually dominant enough to function;
- the transition must read as one continuous scientific artwork layer rather than as two unrelated panels;
- the effect is a family-master visual behavior, not permission to obscure mandatory copy or machine-readable elements.

## Geometry and content-slot behavior

Approved pilots continue to follow the family-card architecture previously established from the Neuro reference:
1. family corner / ribbon zone;
2. family hero artwork zone;
3. PeptiBloom brand zone;
4. upper status/use zone;
5. product name zone;
6. optional descriptor zone;
7. presentation zone;
8. lower information rail;
9. right-side family ribbon/tab;
10. website / QR zone;
11. LOT / EXP footer.

## Family visual direction

- Metabolic Series uses the frozen Golden Amber master system and normalized Metabolic assets from `PB-MASTER-ASSET-KIT-v1`.
- Lab Essentials uses the frozen Bloom Teal master system and normalized Lab Essentials assets from `PB-MASTER-ASSET-KIT-v1`.

The pilots are template-direction artifacts. Rendered flowers, molecules, DNA, iconography and brand marks must still be reconciled against canonical frozen binary assets / canonical PeptiBloom logo when a deterministic editable production master is built. AI/rendered pilots are not canonical logo sources or scientific artwork authority.

## Displayed wording — reference-only until owning gates approve

Reference strings displayed across pilots may include family name, `RESEARCH USE ONLY` / `LABORATORY USE ONLY`, PeptiBloom branding, product identity, descriptor, presentation, purity wording, storage wording, website, QR, LOT and EXP.

These strings are preserved as **pilot/reference content only**. They must not be interpreted as global approved label claims or operational truth.

In particular, purity wording, storage wording, RUO/laboratory-use wording, scientific descriptors, QR destination, LOT semantics and EXP semantics remain subject to PB-XD-003 and the applicable Legal/Regulatory, Evidence, Catalog, Quality/Operations, Brand and Web gates.

## What is frozen vs not frozen

### Frozen
- overall visual direction of each Owner-approved family pilot;
- family color treatment;
- composition hierarchy;
- family artwork integration;
- lower-band transparency / molecule-crossing treatment;
- family-specific presentation-unit behavior (`mg` or `mL` as supplied by approved product truth);
- use of approved pilots as benchmarks for remaining family variants.

### Not frozen as production authority
- AI-rendered PeptiBloom logo geometry;
- exact icon drawings unless sourced from approved master assets;
- QR content;
- scientific/quality/storage/regulatory claims;
- product availability or public catalog status;
- LOT / EXP operational values;
- typography as a font-file specification unless reconciled against Brand canon;
- print readiness / bleed / cut validation of flattened rasters.

## Next gate

Complete the remaining family pilots and then perform a five-family side-by-side Brand / Packaging QA before promoting any deterministic editable card master to production-ready artwork.

## Guardrail

`OWNER VISUAL APPROVAL != LEGAL APPROVAL != SCIENTIFIC APPROVAL != PRINT APPROVAL != PUBLICATION APPROVAL != READY_FOR_SALE`.
