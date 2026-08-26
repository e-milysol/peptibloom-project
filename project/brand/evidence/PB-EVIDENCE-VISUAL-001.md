# PB-EVIDENCE-VISUAL-001 — Evidence Character Bible + Visual System v1.0

**STATUS: FROZEN / CANONICAL VISUAL IDENTITY**

**IMPORTANT: BLOOM AND EVIDEN ALREADY EXIST AS THE TWO INITIAL OFFICIAL PEPTIBLOOM EVIDENCE CHARACTERS. DO NOT REGENERATE, REDESIGN, RENAME, RECAST, OR SUBSTITUTE THEM FROM TEXT DESCRIPTION ALONE.**

## Canonical pair

PeptiBloom Evidence starts with exactly two editorial characters:

- **Bloom** — official Evidence character, female presentation.
- **Eviden** — official Evidence character, male presentation.

They are peers and may appear individually or together. Neither represents a physician, clinician, real employee, or source of scientific truth. They communicate and explain material already validated through the Evidence workflow.

## Scientific-boundary rule

**BLOOM AND EVIDEN NEVER CREATE SCIENTIFIC TRUTH. THEY VISUALIZE AND EXPLAIN APPROVED EVIDENCE.**

They must not diagnose, prescribe, imply clinical authority, invent claims, overstate certainty, or convert uncertainty into recommendation.

## Frozen visual sources

Three visual source classes constitute the v1.0 identity:

1. **Bloom Character Sheet v1.0** — the separately approved Bloom reference sheet created in the PeptiBloom Evidence visual-design session.
2. **Eviden Character Sheet v1.0** — the separately approved Eviden reference sheet created in the same session.
3. **Bloom + Eviden Pair Reference v1.0** — the separately approved image showing both characters together and defining their shared visual language, scale, styling and interaction.

These exact approved visual files are required as repository asset inputs before binary checksums can be registered. Until those originals are committed, their status is `FROZEN_REFERENCE / ASSET_INPUT_REQUIRED`; this document must not be used as permission to recreate approximations.

## Character invariants

### Bloom

- Adult-young visual presentation; never childlike or infantilized.
- Scientific/editorial PeptiBloom styling.
- White PeptiBloom lab coat as canonical professional garment.
- Warm, approachable, competent expression language.
- May use Evidence-supporting props such as clipboard, tablet, document, chart, microscope or magnifier.
- Must remain visually consistent with the approved Bloom Character Sheet.

### Eviden

- Adult-young visual presentation; never childlike or infantilized.
- Short, slightly tousled brown hair.
- Warm brown eyes.
- Fair-to-warm skin tone.
- Natural full eyebrows; medium/light build.
- White long PeptiBloom lab coat; dark charcoal/black shirt; dark trousers; white shoes with restrained purple details.
- Canonical accessories: clipboard, magnifier, tablet, documents, microscope and charts.
- No jewelry, watches, flashy accessories, hats or elements outside the approved professional identity.
- Must remain visually consistent with the approved Eviden Character Sheet.

## Pair invariants

When Bloom and Eviden appear together:

- neither is visually subordinate to the other;
- both belong unmistakably to the same Evidence visual universe;
- body scale, rendering style, lighting and line/detail treatment must remain compatible;
- interaction should communicate collaboration, curiosity, explanation, review or scientific discussion;
- romantic, sexualized, infantilized or medical-authority framing is prohibited;
- one character may lead a scene when editorially useful, but both remain peer Evidence communicators.

## Allowed editorial functions

Approved uses include explanatory articles, evidence summaries, study literacy, diagrams, infographics, mechanisms, uncertainty callouts, comparisons, timelines, research-method explanations and Evidence navigation.

New images are `GENERATED_DRAFT` until visually reviewed. Approved new poses/scenes become `APPROVED_DERIVATIVE`. Only the source sheets and explicitly frozen masters are `CANONICAL`.

## Asset IDs reserved

| Asset ID | Meaning | State |
|---|---|---|
| PB-EV-BLOOM-SHEET-V1.0 | Bloom master character sheet | FROZEN_REFERENCE / ASSET_INPUT_REQUIRED |
| PB-EV-EVIDEN-SHEET-V1.0 | Eviden master character sheet | FROZEN_REFERENCE / ASSET_INPUT_REQUIRED |
| PB-EV-PAIR-SHEET-V1.0 | Bloom + Eviden master pair reference | FROZEN_REFERENCE / ASSET_INPUT_REQUIRED |
| PB-EV-BLOOM-FULL-V1.0 | Bloom transparent full-body master | RESERVED |
| PB-EV-EVIDEN-FULL-V1.0 | Eviden transparent full-body master | RESERVED |
| PB-EV-PAIR-FULL-V1.0 | Bloom + Eviden transparent pair master | RESERVED |

## Binary asset registry requirements

For every frozen binary master, record only after the exact approved file is available:

- asset ID;
- canonical repository path;
- filename;
- media type;
- pixel dimensions;
- transparency/background state;
- file byte size;
- SHA-256 checksum;
- approval date;
- source/reference lineage;
- status.

**Never invent a checksum. Never regenerate a missing master from this prose.**

## Proposed canonical paths

Exact approved originals should be persisted under:

`apps/web/public/brand/evidence/characters/bloom/`

`apps/web/public/brand/evidence/characters/eviden/`

`apps/web/public/brand/evidence/characters/pair/`

The machine-readable registry should live at:

`project/brand/evidence/PB-EVIDENCE-VISUAL-001-ASSETS.yaml`

## Change control

**THIS DOCUMENT FREEZES THE CHARACTER IDENTITIES. ANY MATERIAL CHANGE TO BLOOM, EVIDEN, THEIR MASTER SHEETS, OR THEIR SHARED VISUAL LANGUAGE REQUIRES A NEW EXPLICITLY APPROVED VERSION.**

A future v1.1/v2.0 may add poses, expressions or editorial modules without silently overwriting v1.0. Existing approved masters remain immutable historical references.
