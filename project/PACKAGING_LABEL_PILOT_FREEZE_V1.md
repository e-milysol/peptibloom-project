# PeptiBloom Packaging Label Pilot Freeze v1

STATUS: OWNER-APPROVED VISUAL PILOT / NOT LEGAL CLEARANCE / NOT PRODUCTION-APPROVED ARTWORK
FROZEN: 2026-09-04
OWNER: Packaging / Labels + Brand / Visual
RELATED: Issue #19; PB-XD-003; PB-MASTER-ASSET-KIT-v1; PB-LABEL-GEOMETRY-v1

## Purpose

Freeze the first family-level label pilot produced from the PeptiBloom master-card system after Owner visual approval.

This freeze controls the **visual treatment and compositional direction** of the Metabolic Series pilot. It does **not** convert any displayed scientific, quality, storage, regulatory, lot/expiry or commercial wording into an approved factual claim.

## Frozen pilot

Family: `METABOLIC_SERIES`
Reference product used for pilot rendering: `TIRZEPATIDE`
Reference presentation used for pilot rendering: `10 mg`

Reviewed raster artifact:
- working filename: `a_clean_high_end_pharmaceutical_biotech_product_l.png`
- dimensions: `1774 x 887 px`
- color mode: `RGBA`
- SHA-256: `00786036745a9ae40514c99e1234e3f6f7e47ad5ce7615f3315717a7380a1f08`
- freeze state: `FROZEN FAMILY PILOT REFERENCE`

The binary is identified by exact hash so the reviewed image can be re-identified even before durable binary ingestion into the repository asset tree.

## Visual treatment frozen from Owner approval

The Owner explicitly approved the revised Metabolic pilot in which the family molecular artwork remains visually continuous **through / over the lower family-color information band** rather than being hard-clipped at the top edge of that band.

The approved effect is:
- the lower information band may become locally translucent / optically integrated where the family molecule crosses it;
- the molecule may remain visible across the band with controlled opacity and depth;
- information icons and text must remain legible and visually dominant enough to function;
- the transition must read as one continuous scientific artwork layer rather than as two unrelated panels;
- the effect is a family-master visual behavior, not permission to obscure mandatory copy or machine-readable elements.

This integrated-band treatment is now the preferred pilot direction to test on the remaining family variants.

## Geometry and content-slot behavior

The pilot continues to follow the family-card architecture previously established from the Neuro reference:
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

The Metabolic pilot additionally freezes the **artwork-over-band / locally translucent-band** behavior described above as an allowed visual treatment.

## Family visual direction

Metabolic Series continues to use the frozen Golden Amber master system and the normalized Metabolic orchid / DNA / molecule assets from `PB-MASTER-ASSET-KIT-v1`.

The pilot is a template-direction artifact. The rendered flower, molecule, DNA, iconography and brand mark must still be reconciled against the canonical frozen binary assets / canonical PeptiBloom logo when a deterministic editable production master is built. The AI/rendered pilot itself is not the canonical logo source or scientific artwork authority.

## Displayed wording — reference-only until owning gates approve

The approved visual pilot contains reference values including:
- `METABOLIC SERIES`;
- `RESEARCH USE ONLY`;
- `PeptiBloom®`;
- `SCIENCE · PURITY · BLOOM`;
- `TIRZEPATIDE`;
- `METABOLIC PEPTIDE RESEARCH REFERENCE`;
- `10 mg`;
- `HIGH PURITY RESEARCH`;
- `LABORATORY USE ONLY`;
- `STORE COLD 2–8°C`;
- `PEPTIBLOOMPROJECT.COM`;
- `LOT: PB-MET-001-00001`;
- `EXP: MM/YYYY`.

These strings are preserved as **pilot/reference content only**. They must not be interpreted as global approved label claims or operational truth.

In particular, purity wording, storage wording, RUO/laboratory-use wording, scientific descriptors, QR destination, LOT semantics and EXP semantics remain subject to PB-XD-003 and the applicable Legal/Regulatory, Evidence, Catalog, Quality/Operations, Brand and Web gates.

## What is frozen vs not frozen

### Frozen
- overall visual direction of the Metabolic family pilot;
- Golden Amber family treatment;
- composition hierarchy;
- family artwork integration;
- lower-band transparency / molecule-crossing treatment;
- use of the pilot as the benchmark for the next four family pilots.

### Not frozen as production authority
- AI-rendered PeptiBloom logo geometry;
- exact icon drawings unless sourced from approved master assets;
- QR content;
- scientific/quality/storage/regulatory claims;
- product availability or public catalog status;
- LOT / EXP operational values;
- typography as a font-file specification unless reconciled against Brand canon;
- print readiness / bleed / cut validation of this flattened raster.

## Next gate

Generate the remaining four family pilots using the same geometry and the newly approved integrated-band behavior:
- `NEURO_SERIES`;
- `RESEARCH_SERIES`;
- `BLENDS_SERIES`;
- `LAB_ESSENTIALS`.

Then perform a five-family side-by-side Brand / Packaging QA before promoting any deterministic editable card master to production-ready artwork.

## Guardrail

`OWNER VISUAL APPROVAL != LEGAL APPROVAL != SCIENTIFIC APPROVAL != PRINT APPROVAL != PUBLICATION APPROVAL != READY_FOR_SALE`.
