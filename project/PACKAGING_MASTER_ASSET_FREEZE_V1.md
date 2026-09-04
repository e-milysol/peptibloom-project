# PeptiBloom Packaging Master Asset Freeze v1

STATUS: OWNER-APPROVED VISUAL SPECIFICATION / NOT LEGAL CLEARANCE / NOT PRODUCTION-APPROVED ARTWORK
FROZEN: 2026-09-04
OWNER: Packaging / Labels + Brand / Visual
RELATED: Issue #19; PB-XD-003

## Purpose

Freeze the reusable visual master system for PeptiBloom family-coded catalog/label cards from the Owner-supplied artwork set reviewed on 2026-09-04.

This freeze controls visual identity, family artwork roles, palette sources and card composition. It does **not** authorize public publication, sale, READY_FOR_SALE, medicinal/human-use positioning, scientific claims, purity claims, storage claims, expiry semantics, dosing/reconstitution/administration instructions or any element still gated by PB-XD-003 / Evidence / Catalog / Web.

## Family system frozen for the master-card workflow

The five working family identifiers for card generation are:

- `RESEARCH_SERIES` — purple / pearl-purple visual system;
- `LAB_ESSENTIALS` — Bloom Teal;
- `BLENDS_SERIES` — terracotta/coral visual system;
- `NEURO_SERIES` — Bloom Sapphire;
- `METABOLIC_SERIES` — golden amber visual system.

These identifiers are frozen here as packaging/visual family IDs for the master-card workflow. They do not imply scientific evidence level, therapeutic indication or human benefit.

## Canonical logo rule

All final card masters must use the repository canonical logo `apps/web/public/brand/logo.png` or an approved derivative documented in `project/BRAND_GUIDE.md`. AI-rendered or screenshot-derived PeptiBloom logos are reference-only and must not become production brand assets.

## Frozen source artifacts — Owner supplied, 2026-09-04

The binary files are identified here by exact SHA-256 so the reviewed visual can be re-identified even before durable binary ingestion.

| Source filename | Role | Family | Size | SHA-256 | Freeze state |
|---|---|---|---:|---|---|
| `molecula_lab_research(2).png` | standalone decorative molecule | LAB_ESSENTIALS | 1536x1024 | `70e4a5b115b780eb462607b0609be6a30c57c1b0eb0aec55319e3997ff2b0593` | FROZEN REFERENCE |
| `orchid_metabolic_serie(3).png` | orchid + DNA + molecule specification/reference sheet | METABOLIC_SERIES | 1536x1024 | `a4927268fd34d73fb20f39b2f7c6aa2463a4096b29611a92f1b137b791356bf1` | FROZEN REFERENCE |
| `molecula_metabolic_series(1).png` | molecular specification/reference sheet | METABOLIC_SERIES | 1536x1024 | `19db0743395d8c7cfffd43a9bfb1f3575ce026b65d7802b3d04d07e4e392e18e` | FROZEN REFERENCE |
| `molecula_neuro_science(1).png` | molecular + DNA palette/reference artwork | NEURO_SERIES | 1536x1024 | `0bdec770ce6270f04a5547d621ab1f6db673341827b40dffb2e3042e78bec7dc` | FROZEN REFERENCE |
| `orchid_neuro_series(1).png` | orchid + DNA + molecule reference artwork | NEURO_SERIES | 1536x1024 | `c7e85f5c79fb48b07ea8c125309a1f93df16719993941ce01f19e258d6a7b08f` | FROZEN REFERENCE |
| `molecula_blend_serie(1).png` | molecular palette/reference artwork | BLENDS_SERIES | 1536x1024 | `72c73759a1dfba030c6b962e5dc62c45ffeb881035081f93dac6eb6f8daffc7a` | FROZEN REFERENCE |
| `orchid_blend_series(2).png` | orchid + DNA + molecule reference artwork | BLENDS_SERIES | 1536x1024 | `5069f72d3a46b5b01bfdef1ed57f7032b91a1ab43eb9cbc749f0ded8f574c4fe` | FROZEN REFERENCE |
| `amolecular_lab_search_pantone(3).png` | purple/pearl molecular palette/reference artwork | RESEARCH_SERIES | 1536x1024 | `39f525cbf17e0d3344419839db7b86d4320bf9b16a44725aaf4e3a2ac0497a78` | FROZEN REFERENCE; PALETTE VALUES NEED CLEAN SPEC SHEET |
| `molecular_research_series(3).png` | standalone purple/pearl molecule | RESEARCH_SERIES | 2048x682 | `dc37e3e8dde0ba8a9de564bd6372478a098379247568dc333d4b750f792b8e2e` | FROZEN REFERENCE |
| `molecular_lab_search_artwork(2).png` | full molecular color specification guide | LAB_ESSENTIALS | 1536x1024 | `07518b5c560dd1b1b827c765f3b2ba9bb684044c42ec4426dab26ae0108d0e02` | FROZEN SPEC REFERENCE |
| `orchid_artwork(2).png` | full orchid + DNA + molecule color specification guide | LAB_ESSENTIALS | 1536x1024 | `fd2eb52f12bbb574bf07ab89e75b1b67e3d66af9b335b231f2897609d02e32ff` | FROZEN SPEC REFERENCE |
| `orchid_lab_research(3).png` | standalone orchid + DNA + molecule | LAB_ESSENTIALS | 1536x1024 | `bb89e8c49b4921073193b8c612e6aa383f12ceddbf4c2cd699f254050690c79c` | FROZEN REFERENCE |
| `botanical_drop_illustration(2).png` | botanical-drop color specification guide | LAB_ESSENTIALS | 1536x1024 | `1e75b981b8e413b3a27d56ec257045b95d76422982139e01609068a45df9d2dd` | FROZEN OPTIONAL SECONDARY MOTIF |
| `gota_planta_lab_research(2).png` | standalone botanical drop | LAB_ESSENTIALS | 1349x1166 | `9943ad9209510f52c0e313948c3e6084163c5660a3a214193d5e2b07ddb252be` | FROZEN OPTIONAL SECONDARY MOTIF |

## Palette values frozen where unambiguous in supplied specification artwork

### LAB_ESSENTIALS — Bloom Teal
Primary family accent: Pantone 3308 C / `#004C45`.

Approved tonal guide from supplied spec:
- Deep Teal `#004C45`;
- Teal Medium `#187D7A`;
- Aqua Glass `#52B9BD`;
- Ice Aqua `#A8DADD`;
- Crystal Highlight `#E5F4F3`;
- Ivory Highlight `#F7F4ED`;
- Stem Light `#BFE8E6`;
- Water/Molecule Light `#D8F0F0` / the exact file-specific value shown by the supplied guide must be preserved when exporting from the master.

### METABOLIC_SERIES — Golden Amber
Primary family accent: Pantone 7409 C / `#F2B705`.
Supporting reference values visible in supplied guide:
- Pantone 1235 C / `#FFD76A`;
- Pantone 1205 C / `#FFE9A6`;
- Pantone 1255 C / `#E0A500`.

### NEURO_SERIES — Bloom Sapphire
Primary family accent: Pantone 7687 C / `#1F4E79`.
Supporting reference values:
- Pantone 2716 C / `#D6E4FF`;
- Pantone 7547 C / `#24324A`;
- Pantone 7499 C / `#F7F4ED`.

### BLENDS_SERIES — Terracotta / Coral
The supplied artwork is the controlling visual reference. The visible palette includes:
- Pantone 7524 C / `#C4664A`;
- Pantone 7577 C / `#E58F73`;
- Pantone 487 C / `#F3B89E`;
- Pantone 475 C / `#FAD9C6`;
- Pantone 7408 C / `#F6C000` accent.

Note: earlier chat shorthand used a nearby terracotta value. This freeze uses the value printed in the Owner-supplied master artwork (`#C4664A`) until/unless a later controlled Brand decision supersedes it.

### RESEARCH_SERIES — Purple / Pearl
The visual direction and the two supplied molecular artworks are frozen. **Exact numeric palette values are not promoted from the small embedded labels in the current source image.** A clean Research Series color-specification sheet must be generated and approved before its numeric palette becomes production authority.

## Master card composition — frozen from the approved blue sample as layout reference

The blue Neuro example is frozen as the **composition reference**, not as production-approved text.

Reusable zones:
1. family ribbon / family identity zone;
2. PeptiBloom canonical logo zone;
3. upper regulatory/status badge zone;
4. product/display name zone;
5. optional neutral descriptor zone;
6. presentation/quantity zone;
7. family artwork/orchid composition zone;
8. bottom icon/information rail;
9. right-side vertical family tab;
10. QR/domain zone;
11. LOT / EXP footer zone.

The geometry, hierarchy and visual rhythm may be reused across all five families. Text contained in the blue sample is **not globally frozen**.

## Conditional/off-by-default fields

Until PB-XD-003 and the corresponding owning domain approve them, the following master-card fields must exist only as disabled/conditional slots:

- `RESEARCH USE ONLY`;
- `LABORATORY USE ONLY`;
- `HIGH PURITY`, `HIGH PURITY RESEARCH` or equivalent;
- storage/cold-chain wording such as `2–8 °C`;
- scientific family descriptors or mechanism/benefit descriptors;
- LOT semantics;
- EXP / expiry semantics;
- QR destination;
- public CTA such as `Request information`;
- cross-link to Scientific Library.

Product name, presentation and public visibility must consume approved Catalog truth; scientific descriptors must consume Evidence-approved truth.

## Asset roles per family

For a complete reusable family kit, each family should ultimately have:

A. `FAMILY_COLOR_SPEC` — clean palette/spec sheet;
B. `FAMILY_ORCHID_MASTER` — orchid + DNA + molecule, transparent PNG;
C. `FAMILY_MOLECULE_MASTER` — molecule and/or DNA secondary decoration, transparent PNG;
D. optional `FAMILY_SECONDARY_MOTIF` where justified;
E. `FAMILY_CARD_MASTER` — editable card/template using canonical logo and conditional data slots;
F. `FAMILY_CARD_PREVIEW` — flattened PNG for review only.

## Current completeness and generation gaps

### LAB_ESSENTIALS
AVAILABLE: color-spec molecule; color-spec orchid; standalone orchid; standalone molecule; optional botanical-drop spec + standalone.
MISSING: final editable family card master + flattened review preview using the frozen card composition.

### METABOLIC_SERIES
AVAILABLE: orchid/reference sheet; molecular/reference sheet.
MISSING: standalone transparent orchid + DNA + molecule master; standalone transparent molecule/DNA master if the current reference-sheet exports cannot be cleanly separated; final editable family card master + preview.

### NEURO_SERIES
AVAILABLE: molecular/DNA palette artwork; orchid + DNA + molecule artwork; blue card composition example from the working set.
MISSING: clean color-spec sheet matching the Lab/Metabolic documentation standard; isolated production-ready transparent masters if the supplied files include embedded palette/reference text; final editable family card master rebuilt with the canonical repository logo (the blue sample is composition reference only) + preview.

### BLENDS_SERIES
AVAILABLE: molecular palette/reference artwork; orchid + DNA + molecule artwork.
MISSING: clean color-spec sheet matching the documentation standard; isolated production-ready transparent orchid master; isolated transparent molecule master where needed; final editable family card master + preview.

### RESEARCH_SERIES
AVAILABLE: purple/pearl molecule artwork + standalone molecule.
MISSING: clean authoritative Research Series color-spec sheet; orchid + DNA + molecule master; standalone transparent orchid master; optional clean secondary molecule/DNA arrangement; final editable family card master + preview.

## Minimum generation batch before product-by-product labels

Do **not** generate every product label yet. First complete these family-level masters:

1. Research Series color-spec sheet;
2. Research Series orchid + DNA + molecule transparent master;
3. Metabolic Series isolated transparent orchid master;
4. Metabolic Series isolated transparent molecule/DNA master if needed;
5. Neuro Series clean spec sheet + isolated transparent production masters where needed;
6. Blends Series clean spec sheet + isolated transparent production masters;
7. five editable `FAMILY_CARD_MASTER` templates rebuilt with canonical logo and conditional fields;
8. five flattened family-card review previews, one per family.

After those eight deliverables pass Brand/Packaging review, product-level cards can be generated from Catalog data without redesigning the family identity each time.

## Guardrail

`VISUAL FREEZE != LEGAL APPROVAL != SCIENTIFIC APPROVAL != PUBLICATION APPROVAL != READY_FOR_SALE`.
