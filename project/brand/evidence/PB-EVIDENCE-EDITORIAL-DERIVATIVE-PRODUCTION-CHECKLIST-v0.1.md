# PB-EVIDENCE-EDITORIAL-DERIVATIVE-PRODUCTION-CHECKLIST v0.1

**STATUS: DRAFT / CONTROLLED PRODUCTION CHECKLIST**

Use this checklist for every Bloom/Eviden editorial derivative before any freeze or binary persistence.

## 1. Source verification

- Confirm character source is the exact frozen master from `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md`.
- Recompute SHA-256 of the input master when transferred into a new workflow.
- `CHECKSUM MISMATCH = STOP`.
- Do not reconstruct a master from prose, a screenshot, a reference sheet or a contact sheet.

Verified working-session master hashes:

- Bloom: `9f4e850998f5f973a7bb623b461c77bf8e3e71f2690d21d12dd928baa1f8edc9`
- Eviden: `8e123182dca9f3d36fc1aa2649c37d028cfa6007bd9070bcd7b4257581e3ca18`

## 2. Derivative specification

Before generation/editing record:

- character ID;
- expression ID;
- pose ID;
- intended communication purpose;
- target acting intensity;
- production revision (`rNN`);
- any separately approved prop.

Do not improvise a new semantic state inside image generation.

## 3. Identity QA

PASS only if all remain materially consistent with the frozen master:

- facial identity;
- apparent age;
- facial proportions;
- hair identity/silhouette;
- wardrobe identity and color relationships;
- body proportions;
- rendering/material style;
- overall character recognition.

Reject cousin/lookalike outputs.

## 4. Expression/pose QA

- expression changes acting, not anatomy;
- pose is readable without exaggerated anatomy;
- intensity remains restrained (`L1–L2` default);
- no aggressive, flirtatious, heroic or sales-like acting;
- intended state is understandable without relying on a caption;
- no medical/scientific authority is implied by body language alone.

## 5. Prop QA

Props are optional composition aids, not identity, unless separately approved.

- no prop becomes visually dominant by accident;
- no prop silently changes role or scientific authority;
- microscopes, tablets, books, boards, vials, pointers, signs and similar objects remain composition-level unless explicitly canonized;
- removing a prop must not make the character cease to be recognizable.

## 6. Reference-sheet boundary

Reference sheets are indexes only.

**DO NOT EXTRACT ASSETS FROM A REFERENCE SHEET.**

- do not crop a thumbnail and reuse it as a derivative;
- do not treat generated on-image IDs/labels as authoritative metadata;
- do not use a sheet thumbnail as a future source master;
- use the durable library text plus approved individual PNGs.

See `PB-EVIDENCE-EDITORIAL-REFERENCE-SHEETS-QA-v0.1.md`.

## 7. Final-file QA

For every approved individual derivative:

- export final PNG;
- record dimensions and color mode;
- compute SHA-256 after final export;
- assign stable filename including character/expression/pose/revision;
- record source master hash;
- record QA disposition (`PASS`, `CHANGES_REQUIRED`, `REJECTED`);
- never reuse a hash after file modification.

Suggested pattern:

- `bloom_editorial_v1__BL-X03__BL-P02__r01.png`
- `eviden_editorial_v1__EV-X06__EV-P06__r01.png`

## 8. Freeze gate

A sheet/library release may be marked freeze candidate only when:

1. durable expression/pose semantics are reconciled;
2. displayed sheet IDs/labels exactly match the durable library;
3. required individual derivatives have passed identity QA;
4. final derivative hashes are recorded;
5. master/derivative binaries are ready for binary-capable Git persistence;
6. no unresolved generated-text mismatch remains.

`REFERENCE_CANDIDATE != FROZEN_CANONICAL`.

## 9. Repository persistence

When binary upload is performed:

- commit exact master binaries only if hashes match the frozen registry;
- commit final approved sheets and individual derivatives under controlled paths;
- verify repository blobs/files after commit;
- record committed file SHA-256 in the registry;
- keep PR draft/unmerged until explicit merge authority exists.

## 10. Publication boundary

Avatar/derivative freeze does not imply:

- scientific approval;
- Evidence approval;
- Legal approval;
- Web publication authorization;
- production deployment;
- commerce/READY_FOR_SALE status.
