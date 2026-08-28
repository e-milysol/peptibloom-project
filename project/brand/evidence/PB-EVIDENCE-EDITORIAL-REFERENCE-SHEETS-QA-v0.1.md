# PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS QA v0.1

**STATUS: TAXONOMY RECONCILED / FINAL CROSS-QA COMPLETE / METADATA CORRECTION REQUIRED / FREEZE NOT YET AUTHORIZED**

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

## Final-sheet candidates reviewed

### Bloom-only regenerated candidate
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `81deb74821df68973893246473c3bc7d2d08c3805b05909fa27929294220d451`
- Taxonomy labels/IDs: `PASS`
- Character-specific `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Freeze status: `BLOCKED BY METADATA`

### Eviden-only regenerated candidate
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `3667daa50f394afd830c1db4b170f1b6494ef602b332f902c2f860a7692aaf11`
- Taxonomy labels/IDs: `PASS`
- `EV-X07 = Ponderando / Evaluación`: `PASS`
- `EV-X08 = Gap / Contradicción`: `PASS`
- Character-specific `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Freeze status: `BLOCKED BY METADATA`

### Joint Bloom + Eviden regenerated candidate
- Dimensions: `1024 x 1536`
- Mode: `RGB`
- Working-file SHA-256: `5fa9fe7a33887c0e39130a9dfb545dc95bda6abd1fd15628c72bf5303d56a2ec`
- Bloom/Eviden expression and posture lookup tables: `PASS`
- `DO NOT EXTRACT ASSETS` boundary: `PASS`
- Pair-overview purpose: `PASS`
- Freeze status: `BLOCKED BY METADATA`

## Cross-QA findings

### PASS

- All three regenerated sheets use the reconciled `BL-X01..08`, `BL-P01..08`, `EV-X01..08` and `EV-P01..08` lookup labels consistently.
- Bloom and Eviden remain visually distinguishable and coherent with their respective editorial roles.
- The three-sheet architecture is sound: two character-specific sheets plus one pair overview.
- Reference sheets remain indexes only and are not reusable-asset extraction sources.
- Props such as tablet, microscope/lab context, books, lupa and board remain composition context only and do not become character identity or scientific authority.

### BLOCKERS BEFORE FREEZE

The regenerated sheets contain generated metadata text that does **not** match the authoritative frozen registry and therefore cannot be frozen as-is.

1. **Wrong displayed master IDs.** The images use generated IDs such as `BL-MASTER-CHILD-v1.0` and `EV-MASTER-CHILD-v1.0`. These must be replaced with the authoritative Asset IDs `PB-BLOOM-EDITORIAL-v1.0` and `PB-EVIDEN-EDITORIAL-v1.0`.
2. **Wrong displayed SHA-256 values.** The hashes printed inside the images are generated text and do not match the verified master hashes above. Final sheets must display the exact verified SHA-256 values or omit hashes from the image and leave them only in the durable manifest.
3. **Joint-sheet reference-sheet filenames are not yet durable artifacts.** Generated labels such as `PB-BLOOM-EDITORIAL-REFERENCE-SHEET-v1.0` / `PB-EVIDEN-EDITORIAL-REFERENCE-SHEET-v1.0` must not be treated as authoritative until exact binary filenames are selected and persisted.
4. **Joint role summaries are descriptive, not canonical identifiers.** They must not replace the durable role semantics: Bloom = Explain / Orient / Connect; Eviden = Question / Analyze / Clarify.

These are metadata/governance blockers, not a failure of the reconciled expression/pose taxonomy.

## Prop/context rule

Prop-based labels describe composition context only. Tablet, microscope/lab context, books, lupa and board are optional visual aids; they do not become permanent accessories or character identity and may not imply scientific authority, medical instruction, Evidence approval or product endorsement.

## Remaining freeze work

Before any sheet receives `FROZEN_CANONICAL`:
1. correct the three sheets so displayed master IDs exactly match the frozen registry;
2. correct or remove on-image SHA-256 text so no generated hash conflicts with the verified registry;
3. keep all displayed taxonomy IDs/labels exactly as reconciled;
4. re-run visual/text QA on the corrected exports;
5. compute new final SHA-256 values from the corrected PNG files;
6. generate and QA individual reusable derivatives from verified masters, never by cropping sheets;
7. persist exact masters, corrected final sheets and approved derivatives through a binary-capable Git workflow;
8. verify committed binaries against the recorded hashes.

## Authority hierarchy

1. frozen master registry + verified master binary hash;
2. reconciled durable expression/pose library;
3. approved individual derivative + hash;
4. final corrected reference sheet;
5. exploratory/contact-sheet output.

A lower layer may not override a higher layer.

## Current disposition

- Master identities: `VERIFIED`.
- Expression/pose taxonomy: `RECONCILED / PASS`.
- Bloom-only regenerated sheet: `VISUAL/TAXONOMY PASS / METADATA CORRECTION REQUIRED`.
- Eviden-only regenerated sheet: `VISUAL/TAXONOMY PASS / METADATA CORRECTION REQUIRED`.
- Joint regenerated sheet: `VISUAL/TAXONOMY PASS / METADATA CORRECTION REQUIRED`.
- Final-sheet freeze: `BLOCKED`.
- Individual derivative library: `NOT YET FROZEN`.
- Binary persistence in repository: `PENDING`.
- Merge/publication: `NOT AUTHORIZED`.
