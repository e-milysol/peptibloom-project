# PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS QA v0.1

**STATUS: QA COMPLETE / REFERENCE-SHEET FREEZE NOT YET AUTHORIZED**

This record reviews the three current editorial-avatar reference sheets against the controlled expression/pose library and the frozen master identities.

## Source masters verified in the working session

The exact master binaries supplied by the Owner were re-verified against the frozen registry:

- Bloom master SHA-256: `9f4e850998f5f973a7bb623b461c77bf8e3e71f2690d21d12dd928baa1f8edc9`
- Eviden master SHA-256: `8e123182dca9f3d36fc1aa2649c37d028cfa6007bd9070bcd7b4257581e3ca18`

These hashes match `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md`.

## Current reference-sheet candidates

### Bloom-only sheet

- Intended role: character-specific visual index for Bloom Editorial Infantil.
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `4031b04c147a6b8dde372c92fc65063929d2cfdbf027891bfab2d422ce6fdd54`
- Status: `REFERENCE_CANDIDATE / NOT CANONICAL / DO NOT EXTRACT ASSETS`

### Eviden-only sheet

- Intended role: character-specific visual index for Eviden Editorial Infantil.
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `82f974900dcfeee724b888f56a23450067397dc709649f8e013034c77621fdca`
- Status: `REFERENCE_CANDIDATE / NOT CANONICAL / DO NOT EXTRACT ASSETS`

### Joint Bloom + Eviden sheet

- Intended role: pair overview/registry only.
- Dimensions: `1536 x 1024`
- Mode: `RGBA`
- Working-file SHA-256: `fe2a4261149678b980efdff853760bf45c55a4bef11e8f37faffbe32b1b485d2`
- Status: `REFERENCE_CANDIDATE / NOT CANONICAL / DO NOT EXTRACT ASSETS`

A later regenerated joint sheet was cancelled/incomplete and is explicitly excluded from this freeze path.

## QA result

### PASS

- Bloom and Eviden remain visually distinguishable and consistent with their intended editorial roles.
- The separate Bloom-only and Eviden-only sheets materially reduce wrong-character and wrong-variant selection risk.
- The joint sheet is useful as an overview but should never be treated as an extraction source.
- The sheets visibly include a `REFERENCE SHEET / DO NOT EXTRACT ASSETS FROM THIS IMAGE` boundary on the character-specific versions.
- Character-specific presentation, palettes and general identity cues are coherent enough for reference use.

### CHANGES REQUIRED BEFORE FREEZE

The generated labels/IDs shown inside the images are not reliable source-of-truth metadata. They currently diverge from the controlled library in several places and must not silently redefine it.

#### Bloom label mismatches

Examples include generated labels such as `Entusiasta`, `Empática`, `Seria / Rigurosa`, `Límite / Precaución`, and prop-based poses (`En laboratorio`, `Con libros`, `Sentada – Tablet`) that do not map one-to-one to the current canonical draft semantics of `BL-X01..08` / `BL-P01..08`.

#### Eviden label mismatches

Examples include generated labels such as `Curioso`, `Analítico / Lupa`, `Ponderando / Evaluación`, `Gap / Contradicción`, and prop-based poses (`Investigando`, `En pizarra`, `Con libros`, `Comparando`) that do not map one-to-one to the current draft semantics of `EV-X01..08` / `EV-P01..08`.

The previously discussed replacement of an overconfident `Seguro` concept with a bounded `Ponderando / Evaluación` concept is directionally consistent with Eviden's role, but that change has not yet been reconciled into the durable library table and therefore must not be inferred from the image alone.

## Freeze rule

Before any sheet receives `FROZEN_CANONICAL` status:

1. Reconcile the durable text library first.
2. Make every displayed ID/label on each final sheet match that durable library exactly.
3. Treat props as optional composition aids, not character identity, unless separately approved.
4. Preserve exact master identity; no sheet thumbnail becomes an independent source master.
5. Generate individual reusable PNG derivatives from the verified master, not by cropping a sheet.
6. Compute SHA-256 from final exported files only after visual/text corrections are complete.
7. Persist masters, final sheets and approved individual derivatives through a binary-capable Git workflow.

## Authority hierarchy

Until the freeze is complete:

1. frozen master registry + verified master binary hash;
2. durable expression/pose library text;
3. approved individual derivative asset + hash;
4. reference sheet;
5. exploratory/contact-sheet output.

A lower layer may not override a higher layer.

## Current disposition

- Master identities: `VERIFIED`.
- Expression/pose architecture: `PASS WITH RECONCILIATION REQUIRED`.
- Bloom-only sheet: `REFERENCE_CANDIDATE`.
- Eviden-only sheet: `REFERENCE_CANDIDATE`.
- Joint sheet: `REFERENCE_CANDIDATE`.
- Individual derivative library: `NOT YET FROZEN`.
- Binary persistence in repository: `PENDING`.
- Merge/publication: `NOT AUTHORIZED`.
