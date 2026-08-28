# PB-EVIDENCE-EDITORIAL-EXPRESSION-POSE-LIBRARY v0.1

**STATUS: DRAFT / DERIVED FROM FROZEN MASTERS / NOT YET VISUALLY VALIDATED**

This library defines the first controlled expression and pose set for the frozen PeptiBloom Evidence editorial avatars recorded in `PB-EVIDENCE-EDITORIAL-AVATARS-v1.0.md`.

It does **not** redefine either character. It defines permitted derivative acting states that must preserve the exact frozen master identity when visual assets are produced.

## Source masters

### Bloom Editorial

- Asset ID: `PB-BLOOM-EDITORIAL-v1.0`
- Role: Explain · Orient · Connect
- Canonical master identity remains frozen by the registry filename, dimensions and SHA-256.

### Eviden Editorial

- Asset ID: `PB-EVIDEN-EDITORIAL-v1.0`
- Role: Question · Analyze · Clarify
- Canonical master identity remains frozen by the registry filename, dimensions and SHA-256.

## Identity locks for every derivative

Every expression/pose derivative must preserve:

- same character identity and apparent age;
- same facial structure and proportions;
- same hair identity and silhouette unless motion naturally displaces it;
- same wardrobe identity, garment design and color relationships;
- same body proportions and visual style;
- same overall rendering language and material treatment;
- no added logos, accessories, scientific symbols, props or UI unless separately authorized;
- no recasting, beautification, age shift, body reshaping or style drift;
- no uncontrolled "lookalike" or cousin generation.

A derivative that changes identity rather than acting state is rejected.

## Acting intensity scale

Use a restrained editorial scale rather than cartoon exaggeration:

- `L1` — neutral/subtle: suitable for persistent UI, cards and calm explanatory surfaces.
- `L2` — clear/editorial: readable at medium size without becoming theatrical.
- `L3` — emphatic: reserved for hero/feature moments; still compatible with the canonical character.

Default target for this library: `L1–L2`.

## Bloom expression set

Bloom communicates warmth, explanation, orientation and connection. Expressions should read as approachable and confident, never promotional or medically authoritative.

| ID | Expression | Intent | Intensity |
| --- | --- | --- | --- |
| `BL-X01` | Neutral attentive | listening / presence / default | L1 |
| `BL-X02` | Warm small smile | welcome / reassurance / connection | L1 |
| `BL-X03` | Open explanatory | introducing or explaining an idea | L2 |
| `BL-X04` | Encouraging | gentle positive reinforcement | L2 |
| `BL-X05` | Curious attentive | inviting exploration without judgment | L1–L2 |
| `BL-X06` | Thoughtful | considering context or uncertainty | L1 |
| `BL-X07` | Concerned but calm | acknowledging limitation, caveat or friction | L1–L2 |
| `BL-X08` | Clear emphasis | highlighting one important point | L2 |

## Bloom pose/gesture set

| ID | Pose / gesture | Intended use |
| --- | --- | --- |
| `BL-P01` | Neutral three-quarter standing, relaxed arms | canonical/default editorial presence |
| `BL-P02` | Open-hand explanation, one hand slightly forward | explain a concept or section |
| `BL-P03` | Two-hand framing gesture, compact | connect two related ideas |
| `BL-P04` | Side presentation gesture with open palm | orient toward adjacent text/card/diagram |
| `BL-P05` | Hands lightly together at midline | calm listening / transition / reassurance |
| `BL-P06` | One hand near chin, restrained thinking posture | uncertainty / reflection / methodology context |
| `BL-P07` | Slight forward engagement, hands relaxed | welcome / call attention without sales energy |
| `BL-P08` | Small stop/caution gesture, palm low and non-alarmist | limitation / boundary / do-not-overinterpret |

## Eviden expression set

Eviden communicates inquiry, analysis and clarification. Expressions should read as rigorous and perceptive, never hostile, smug or theatrically skeptical.

| ID | Expression | Intent | Intensity |
| --- | --- | --- | --- |
| `EV-X01` | Neutral analytical | default review state | L1 |
| `EV-X02` | Focused | close reading / analysis | L1–L2 |
| `EV-X03` | Curious question | request clarification / investigate | L2 |
| `EV-X04` | Skeptical but neutral | challenge unsupported inference without ridicule | L1–L2 |
| `EV-X05` | Thoughtful | weighing competing evidence | L1 |
| `EV-X06` | Clarifying | resolving ambiguity / distinction | L2 |
| `EV-X07` | Concerned analytical | flag evidence gap or contradiction | L1–L2 |
| `EV-X08` | Satisfied resolution | conclusion reached / ambiguity resolved | L1 |

## Eviden pose/gesture set

| ID | Pose / gesture | Intended use |
| --- | --- | --- |
| `EV-P01` | Neutral three-quarter standing, composed arms | canonical/default analytical presence |
| `EV-P02` | One-hand question gesture, palm slightly upward | ask / challenge / request evidence |
| `EV-P03` | Small pinching/precision gesture | distinguish a narrow technical point |
| `EV-P04` | Open palm toward adjacent evidence block | cite / point to source or comparison |
| `EV-P05` | One hand near chin, analytical thinking posture | evaluate uncertainty / contradiction |
| `EV-P06` | Two-hand comparison gesture | compare A vs B / separate contexts |
| `EV-P07` | Low caution gesture, controlled | flag unsupported claim / limitation |
| `EV-P08` | Compact conclusion gesture, hands settled | clarify / close analytical loop |

## First controlled production matrix

The first visual-production round should be deliberately small. Do not generate the full Cartesian product of expressions and poses.

### Bloom Round 1

1. `BL-X01 + BL-P01` — neutral/default.
2. `BL-X03 + BL-P02` — explain.
3. `BL-X02 + BL-P04` — orient/present.
4. `BL-X06 + BL-P06` — thoughtful.
5. `BL-X07 + BL-P08` — limitation/caution.

### Eviden Round 1

1. `EV-X01 + EV-P01` — neutral/default.
2. `EV-X03 + EV-P02` — question.
3. `EV-X02 + EV-P03` — analyze precisely.
4. `EV-X05 + EV-P05` — weigh evidence.
5. `EV-X06 + EV-P06` — clarify/compare.
6. `EV-X07 + EV-P07` — flag gap/contradiction.

## Validation criteria for each generated derivative

A candidate passes visual review only if all are true:

1. Character is immediately recognizable as the same frozen master.
2. Face identity is preserved; expression changes muscles, not facial anatomy.
3. Hair, wardrobe, proportions and rendering style remain materially consistent.
4. Pose reads clearly without exaggerated anatomy or theatrical gesturing.
5. Intended communication state is understandable without text.
6. No accidental scientific authority, clinical instruction or evidence-status symbolism is introduced.
7. No extra prop or accessory becomes part of the character canon by accident.
8. Background/composition changes do not alter character identity.

## Rejection triggers

Reject and regenerate if any of the following occurs:

- face drift or different-person appearance;
- age drift;
- hairstyle redesign rather than natural pose motion;
- wardrobe redesign/recoloring;
- altered body proportions;
- caricatured emotion;
- aggressive, flirtatious, sales-like or heroic posing inconsistent with editorial roles;
- new jewelry/accessories/props becoming visually dominant;
- scientific or medical symbolism that implies authority not granted by Evidence;
- output that resembles a new character rather than a derivative acting state.

## Binary-production gate

The exact canonical Bloom and Eviden PNG masters are not present in this branch as repository binaries at the time this document is created; the registry freezes them by filename, dimensions and SHA-256.

Therefore visual derivative generation must wait until an exact master binary is available to the image-editing workflow and can be verified against the frozen registry. Do **not** regenerate a master from prose in order to create poses.

Once the master binaries are available and verified, produce Round 1 one character at a time, review identity fidelity, then expand only after the first round passes.

## Versioning

Generated visual assets should use stable derivative identifiers tied to the source master and library IDs. Suggested naming pattern:

- `bloom_editorial_v1__BL-X03__BL-P02__r01.png`
- `eviden_editorial_v1__EV-X06__EV-P06__r01.png`

`rNN` is a production revision, not a new canonical character version.

Approval of an individual derivative does not automatically approve all combinations in this library.
