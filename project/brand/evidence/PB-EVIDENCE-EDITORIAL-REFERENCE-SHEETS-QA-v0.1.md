# PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS QA v0.1

**STATUS: TAXONOMY RECONCILED / FINAL CROSS-QA COMPLETE / METADATA CORRECTED / SHEET FREEZE CANDIDATE**

This record reviews the current Bloom-only, Eviden-only and joint Bloom+Eviden reference-sheet candidates against the reconciled expression/pose library and frozen master identities.

## Source masters verified in the working session

- Bloom Asset ID: `PB-BLOOM-EDITORIAL-v1.0`
- Bloom master SHA-256: `9f4e850998f5f973a7bb623b461c77bf8e3e71f2690d21d12dd928baa1f8edc9`
- Eviden Asset ID: `PB-EVIDEN-EDITORIAL-v1.0`
- Eviden master SHA-256: `8e123182dca9f3d36fc1aa2649c37d028cfa6007bd9070bcd7b4257581e3ca18`

These values match `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md` and remain authoritative.

## Reconciled taxonomy

The durable source of truth is `PB-EVIDENCE-EDITORIAL-EXPRESSION-POSE-LIBRARY-v0.1.md`.

### Bloom expressions
- `BL-X01` Neutra / Amable
- `BL-X02` Entusiasta
- `BL-X03` Curiosa / Pensativa
- `BL-X04` Explicativa
- `BL-X05` Empática
- `BL-X06` Pensativa
- `BL-X07` Seria / Rigurosa
- `BL-X08` Límite / Precaución

### Bloom postures
- `BL-P01` De pie – Neutra
- `BL-P02` Explicando
- `BL-P03` Orientando
- `BL-P04` Caminando
- `BL-P05` Sentada – Tablet
- `BL-P06` En laboratorio
- `BL-P07` Con libros
- `BL-P08` Señalando límite

### Eviden expressions
- `EV-X01` Neutro / Amable
- `EV-X02` Curioso
- `EV-X03` Analítico / Lupa
- `EV-X04` Escéptico
- `EV-X05` Aclarador / Explica
- `EV-X06` Pensativo
- `EV-X07` Ponderando / Evaluación
- `EV-X08` Gap / Contradicción

`Seguro` is superseded and excluded.

### Eviden postures
- `EV-P01` De pie – Neutra
- `EV-P02` Pensando
- `EV-P03` Analizando
- `EV-P04` Investigando
- `EV-P05` Explicando
- `EV-P06` En pizarra
- `EV-P07` Con libros
- `EV-P08` Comparando

## Corrected final-sheet candidates

The prior generated metadata was corrected deterministically without regenerating character artwork. Wrong generated master IDs and generated hash strings were replaced with the authoritative registry values.

### Bloom-only corrected candidate
- Filename: `PB-BLOOM-EDITORIAL-REFERENCE-SHEET-v1.0-corrected.png`
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Corrected-file SHA-256: `711fd358832d441358d4da44f69a242f1e929e07d609d7c0b7f073d1b8a46b5e`
- Taxonomy labels/IDs: `PASS`
- Authoritative master ID displayed: `PASS`
- Authoritative master SHA-256 displayed: `PASS`
- `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Status: `SHEET_FREEZE_CANDIDATE`

### Eviden-only corrected candidate
- Filename: `PB-EVIDEN-EDITORIAL-REFERENCE-SHEET-v1.0-corrected.png`
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Corrected-file SHA-256: `78f518cd21a179a2c391487d1329d0072107f01f8aabed49e43adb9c0e44503b`
- Taxonomy labels/IDs: `PASS`
- `EV-X07 = Ponderando / Evaluación`: `PASS`
- `EV-X08 = Gap / Contradicción`: `PASS`
- Authoritative master ID displayed: `PASS`
- Authoritative master SHA-256 displayed: `PASS`
- `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Status: `SHEET_FREEZE_CANDIDATE`

### Joint Bloom + Eviden corrected candidate
- Filename: `PB-BLOOM-EVIDEN-EDITORIAL-PAIR-REFERENCE-SHEET-v1.0-corrected.png`
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Corrected-file SHA-256: `b83bee8fe45e611411833362cd0d068dd5c431e3844271612151b5a96fe965c1`
- Bloom/Eviden expression and posture lookup tables: `PASS`
- Authoritative Bloom master ID/SHA-256 displayed: `PASS`
- Authoritative Eviden master ID/SHA-256 displayed: `PASS`
- `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Pair-overview purpose: `PASS`
- Status: `SHEET_FREEZE_CANDIDATE`

## Cross-QA findings

### PASS

- All three corrected sheets use the reconciled `BL-X01..08`, `BL-P01..08`, `EV-X01..08` and `EV-P01..08` lookup labels consistently.
- Bloom and Eviden remain visually distinguishable and coherent with their respective editorial roles.
- The three-sheet architecture is sound: two character-specific sheets plus one pair overview.
- Reference sheets remain indexes only and are not reusable-asset extraction sources.
- Props such as tablet, microscope/lab context, books, lupa and board remain composition context only and do not become character identity or scientific authority.
- Wrong generated master IDs are no longer present in the corrected metadata blocks.
- Wrong generated master hashes are no longer present in the corrected metadata blocks.

## Prop/context rule

Prop-based labels describe composition context only. Tablet, microscope/lab context, books, lupa and board are optional visual aids; they do not become permanent accessories or character identity and may not imply scientific authority, medical instruction, Evidence approval or product endorsement.

## Remaining freeze work

Before the complete derivative system becomes `FROZEN_CANONICAL`:
1. generate and QA individual reusable derivatives from verified masters, never by cropping sheets;
2. persist exact masters, corrected final sheets and approved derivatives through a binary-capable Git workflow;
3. verify committed binaries against the recorded hashes;
4. only after those checks may the durable registry be promoted from sheet-level freeze candidate to complete frozen derivative library.

The three corrected reference sheets themselves have no remaining taxonomy/metadata blocker and are valid `SHEET_FREEZE_CANDIDATE` artifacts pending binary persistence verification.

## Authority hierarchy

1. frozen master registry + verified master binary hash;
2. reconciled durable expression/pose library;
3. approved individual derivative + hash;
4. corrected reference sheet + hash;
5. exploratory/contact-sheet output.

A lower layer may not override a higher layer.

## Current disposition

- Master identities: `VERIFIED`.
- Expression/pose taxonomy: `RECONCILED / PASS`.
- Bloom-only corrected sheet: `SHEET_FREEZE_CANDIDATE`.
- Eviden-only corrected sheet: `SHEET_FREEZE_CANDIDATE`.
- Joint corrected sheet: `SHEET_FREEZE_CANDIDATE`.
- Sheet metadata blockers: `RESOLVED`.
- Individual derivative library: `NOT YET FROZEN`.
- Binary persistence in repository: `PENDING`.
- Complete derivative-library freeze: `BLOCKED BY DERIVATIVE QA + BINARY PERSISTENCE`.
- Merge/publication: `NOT AUTHORIZED`.
