# PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS QA v0.1

**STATUS: TAXONOMY RECONCILED / FINAL SHEET REGENERATION REQUIRED / FREEZE NOT YET AUTHORIZED**

This record reviews the three current editorial-avatar reference sheets against the controlled expression/pose library and frozen master identities.

## Source masters verified in the working session

- Bloom master SHA-256: `9f4e850998f5f973a7bb623b461c77bf8e3e71f2690d21d12dd928baa1f8edc9`
- Eviden master SHA-256: `8e123182dca9f3d36fc1aa2649c37d028cfa6007bd9070bcd7b4257581e3ca18`

These hashes match `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md`.

## Current reference-sheet candidates

### Bloom-only sheet
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `4031b04c147a6b8dde372c92fc65063929d2cfdbf027891bfab2d422ce6fdd54`
- Status: `REFERENCE_CANDIDATE / SUPERSEDED FOR FINAL FREEZE BY TAXONOMY RECONCILIATION`

### Eviden-only sheet
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `82f974900dcfeee724b888f56a23450067397dc709649f8e013034c77621fdca`
- Status: `REFERENCE_CANDIDATE / SUPERSEDED FOR FINAL FREEZE BY TAXONOMY RECONCILIATION`

### Joint Bloom + Eviden sheet
- Dimensions: `1536 x 1024`
- Mode: `RGBA`
- Working-file SHA-256: `fe2a4261149678b980efdff853760bf45c55a4bef11e8f37faffbe32b1b485d2`
- Status: `REFERENCE_CANDIDATE / SUPERSEDED FOR FINAL FREEZE BY TAXONOMY RECONCILIATION`

A later regenerated joint sheet was cancelled/incomplete and is excluded from the freeze path.

## QA result

### PASS
- Bloom and Eviden remain visually distinguishable and consistent with intended editorial roles.
- Separate character-specific sheets materially reduce wrong-character/wrong-variant selection risk.
- Joint sheet is useful as pair overview only.
- Character-specific sheets visibly state `REFERENCE SHEET / DO NOT EXTRACT ASSETS FROM THIS IMAGE`.
- Overall palettes and identity cues are suitable for final-sheet regeneration.

### TAXONOMY RECONCILIATION COMPLETE

The durable library is now the single source of truth for displayed IDs and labels. The following reconciliation was accepted into `PB-EVIDENCE-EDITORIAL-EXPRESSION-POSE-LIBRARY-v0.1.md`.

#### Bloom expressions
- `BL-X01` Neutra / Amable
- `BL-X02` Entusiasta
- `BL-X03` Curiosa / Pensativa
- `BL-X04` Explicativa
- `BL-X05` Empática
- `BL-X06` Pensativa
- `BL-X07` Seria / Rigurosa
- `BL-X08` Límite / Precaución

#### Bloom postures
- `BL-P01` De pie – Neutra
- `BL-P02` Explicando
- `BL-P03` Orientando
- `BL-P04` Caminando
- `BL-P05` Sentada – Tablet
- `BL-P06` En laboratorio
- `BL-P07` Con libros
- `BL-P08` Señalando límite

#### Eviden expressions
- `EV-X01` Neutro / Amable
- `EV-X02` Curioso
- `EV-X03` Analítico / Lupa
- `EV-X04` Escéptico
- `EV-X05` Aclarador / Explica
- `EV-X06` Pensativo
- `EV-X07` Ponderando / Evaluación
- `EV-X08` Gap / Contradicción

`Seguro` is explicitly superseded and is not part of the reconciled Eviden taxonomy.

#### Eviden postures
- `EV-P01` De pie – Neutra
- `EV-P02` Pensando
- `EV-P03` Analizando
- `EV-P04` Investigando
- `EV-P05` Explicando
- `EV-P06` En pizarra
- `EV-P07` Con libros
- `EV-P08` Comparando

## Prop/context rule

Prop-based labels describe composition context only. Tablet, microscope/lab context, books, lupa and board are optional visual aids; they do not become permanent accessories or character identity and may not imply scientific authority, medical instruction, Evidence approval or product endorsement.

## Remaining freeze work

Before any sheet receives `FROZEN_CANONICAL`:
1. regenerate Bloom-only sheet with exact reconciled labels/IDs;
2. regenerate Eviden-only sheet with exact reconciled labels/IDs;
3. regenerate or correct joint sheet using the same taxonomy;
4. visually confirm identity and text accuracy;
5. compute final SHA-256 values only after final export;
6. generate and QA individual reusable derivatives from verified masters, never by cropping sheets;
7. persist exact masters, final sheets and approved derivatives through binary-capable Git workflow;
8. verify committed binaries against recorded hashes.

## Authority hierarchy

1. frozen master registry + verified master binary hash;
2. reconciled durable expression/pose library;
3. approved individual derivative + hash;
4. final reference sheet;
5. exploratory/contact-sheet output.

A lower layer may not override a higher layer.

## Current disposition

- Master identities: `VERIFIED`.
- Expression/pose taxonomy: `RECONCILED / FREEZE CANDIDATE`.
- Existing Bloom-only sheet: `SUPERSEDED FOR FINAL FREEZE / REFERENCE ONLY`.
- Existing Eviden-only sheet: `SUPERSEDED FOR FINAL FREEZE / REFERENCE ONLY`.
- Existing joint sheet: `SUPERSEDED FOR FINAL FREEZE / REFERENCE ONLY`.
- Final sheets: `REGENERATION REQUIRED`.
- Individual derivative library: `NOT YET FROZEN`.
- Binary persistence in repository: `PENDING`.
- Merge/publication: `NOT AUTHORIZED`.
