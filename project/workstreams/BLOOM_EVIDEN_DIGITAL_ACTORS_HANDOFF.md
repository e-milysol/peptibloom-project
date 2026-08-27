# PB-AV-001 — Bloom & Eviden Digital Actors — Durable Handoff

**Purpose:** cold-start README / handoff for continuing this workstream in a new chat or agent session without relying on conversation memory.  
**Workstream:** `PB-AV-001 — Bloom & Eviden Digital Actors`  
**Branch:** `feature/bloom-eviden-digital-actors`  
**Primary tracker:** `project/workstreams/BLOOM_EVIDEN_DIGITAL_ACTORS.md`  
**Status at handoff:** ACTIVE — foundation complete; canonical binary reconciliation in progress.  
**Owners:** Emi + ChatGPT.

---

## 1. Why this workstream exists

PeptiBloom is developing two recurring fictional digital characters, **Bloom** and **Eviden**, as durable audiovisual actors rather than one-off generated illustrations.

The original intent is to make scientific/editorial content less visually monotonous than long blocks of text and, over time, give PeptiBloom a recognizable pair of presenters that can appear consistently across:

- YouTube long-form videos;
- YouTube Shorts and other short-form video;
- articles and explainers;
- infographics and presentations;
- PeptiBloom Library/editorial content;
- social media;
- potentially future PeptiBloom web experiences.

The objective is **not** to generate a new approximate character for every asset. The objective is to build reproducible digital actors with controlled identity, expressions, poses, voices, behavior, animation, provenance and release gates.

A core motivation for freezing exact masters is to prevent character drift — informally, no recurring generation of “Bloom's cousin” or “Eviden's cousin.”

---

## 2. Creative concept

Bloom and Eviden are complementary rather than interchangeable.

### Bloom

Bloom is the communicator / educator / ambassador. Her job is to connect science with people through clarity, empathy and curiosity. She asks the questions a reader/viewer is likely to ask, introduces topics, makes complex material approachable and helps maintain narrative flow.

The currently approved Bloom visual sheet describes her as warm, curious, positive, approachable and inspiring. Her visual identity uses the PeptiBloom orchid-purple family and an orchid motif.

### Eviden

Eviden is the scientific advisor / analyst. His job is to analyze evidence rigorously, explain complex concepts clearly, distinguish evidence strength and uncertainty, and help ensure scientific statements remain accurate and responsible.

The currently approved Eviden visual sheet describes him as analytical, precise, calm, rigorous, honest and objective. His visual identity uses deep teal and molecular/scientific motifs.

### Duo dynamic

The intended editorial chemistry is approximately:

- Bloom asks, frames, connects and translates.
- Eviden analyzes, qualifies, explains and distinguishes what the evidence does and does not support.
- Bloom may ask “what does that actually mean?”
- Eviden may answer by separating established findings from uncertainty or ongoing research.

Neither character is an independent scientific authority. Their dialogue must remain downstream of approved Evidence / Scientific Content payloads.

---

## 3. Scope isolation

This is a deliberately separate branch/workstream. Do not mix unrelated project work into it.

PB-AV-001 owns:

- actor visual identity;
- controlled derivatives;
- expressions and poses;
- interaction/blocking rules;
- voice design and reproducibility;
- avatar/animation/lip-sync evaluation;
- scene/cinematography system;
- audiovisual script mechanics;
- production QA and actor drift prevention;
- provenance/version tracking for audiovisual assets.

PB-AV-001 does **not** independently authorize or change:

- Evidence conclusions;
- scientific claims;
- Scientific Content publication wording;
- Web publication;
- Legal/Privacy decisions;
- Product Catalog or packaging;
- Analytics;
- WORK 6;
- WORK 7;
- public release authority.

A finished or technically successful video is not automatically approved for publication.

---

## 4. Canonical visual authorities

The exact user-approved files are the visual authorities. Do not regenerate them from prose when the exact binary is available.

### Bloom canonical master

- Asset ID: `PB-EV-BLOOM-CHARACTER-MASTER-V1.0`
- Status: `CANONICAL_FROZEN`
- Exact approved binary supplied by Owner on 2026-08-27
- SHA-256: `5851308bcdb0525c33b3f77851615a1b5e6b0c1ab06b99d927646bc78d6b33b1`
- Dimensions: `1536 × 1024 px`
- Mode: `RGBA`
- Bytes: `2,942,176`
- Registry: `project/brand/evidence/actors/BLOOM_BINARY_V1.0.md`

The earlier Bloom hash `7ec8d8b7d408e2093ff973a17efe1b686dbfc6978a3319575715906d261a5b6c` was provisional and is **SUPERSEDED / NOT CANONICAL**.

### Eviden canonical master

- Asset ID: `PB-EV-EVIDEN-CHARACTER-MASTER-V1.0`
- Status: `CANONICAL_FROZEN`
- Exact approved binary supplied by Owner on 2026-08-27
- SHA-256: `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`
- Dimensions: `1536 × 1024 px`
- Mode: `RGBA`
- Bytes: `2,946,020`

The earlier Eviden hash `38189c4ed4c88f04c8bd67deeac6839a0f1d14fe682ccb7f1d67f92ce50599c3` was provisional and is **SUPERSEDED / NOT CANONICAL**.

### Frozen-master rule

For both characters:

`CHECKSUM_MISMATCH = NOT_CANONICAL`

Do not:

- redraw the canonical master and call it the same version;
- recolor it and call it the same version;
- regenerate it from a text description when the binary is available;
- silently overwrite it;
- materially change facial identity, body proportions, wardrobe identity or signature elements under the same version.

Material identity changes require a new explicit approved version. Controlled expressions, poses, rigs and animation derivatives must retain traceability to their canonical master.

---

## 5. What is contained in the approved character sheets

The approved sheets are richer than a single portrait and should be treated as source material for the future actor system.

### Bloom sheet includes

- front, 3/4, side and back turnaround views;
- fifteen labeled facial/expression references;
- multiple full-body presentation/education poses;
- interaction reference with Eviden;
- purple color palette and neutrals;
- typography references;
- orchid + DNA/molecular signature imagery;
- tablet, notebook, research vial, pen, orchid pin and ID badge references;
- voice/personality guidance;
- approved-use categories.

### Eviden sheet includes

- front, 3/4, side and back turnaround views;
- fifteen labeled facial/expression references;
- multiple scientific/presentation poses;
- interaction reference with Bloom;
- deep-teal color palette and neutrals;
- typography references;
- molecular signature imagery;
- tablet, lab notebook, research vial, pen, molecular pin and ID badge references;
- voice/personality guidance;
- approved-use categories.

These sheets are the starting visual truth, but dedicated downstream libraries may still be produced and individually versioned where needed for animation consistency.

---

## 6. Target end state

The workstream succeeds when Bloom and Eviden can be produced repeatedly as recognizable digital actors without depending on chat memory or free-form generation.

The desired production system is:

`approved evidence/content payload → audiovisual script → storyboard/scene plan → canonical actor configuration → voice → animation/lip-sync → edit/graphics → QA → approval → publication gate → release`

A future episode should be reproducible from its registry: character-master version, voice version, rig/tool version, script, evidence/content payload, scene assets, relevant generation/settings metadata and output checksums.

---

## 7. Sequential roadmap

The authoritative live status is in `BLOOM_EVIDEN_DIGITAL_ACTORS.md`. The intended sequence is:

1. `AV-00` Workstream foundation.
2. `AV-01` Canonical asset ingest and checksum verification.
3. `AV-02` Character identity bibles.
4. `AV-03` Turnaround masters.
5. `AV-04` Expression libraries.
6. `AV-05` Pose and gesture libraries.
7. `AV-06` Duo interaction bible.
8. `AV-07` Editorial role bible.
9. `AV-08` Voice specifications.
10. `AV-09` Voice candidates and licensing review.
11. `AV-10` Frozen voice masters.
12. `AV-11` Animation/lip-sync method evaluation.
13. `AV-12` Reusable actor rigs/profiles.
14. `AV-13` Scene and cinematography bible.
15. `AV-14` YouTube format bible.
16. `AV-15` Structured audiovisual script contract.
17. `AV-16` Evidence/content gate.
18. `AV-17` Controlled 30–60 second pilot script.
19. `AV-18` Pilot production.
20. `AV-19` QA and identity-drift test.
21. `AV-20` Rights/privacy/platform review.
22. `AV-21` Owner pilot approval.
23. `AV-22` Repeatable production pipeline v1.
24. `AV-23` Episode asset/provenance registry.
25. `AV-24` Specific public-release gate.
26. `AV-25` YouTube Release 1.
27. `AV-26` Post-release review and pipeline improvements.

Do not jump from character images directly to public YouTube production. The intermediate controls exist to make the system repeatable rather than lucky.

---

## 8. Scientific/editorial guardrails

Bloom and Eviden are presentation mechanisms, not evidence generators.

Non-negotiable rules:

1. Actors may communicate only an approved scientific/editorial payload for claims that require Evidence/Scientific Content authority.
2. They must not upgrade uncertainty through wording, facial expression, graphics, music, tone or editing.
3. “Investigated,” “associated,” “suggested,” “demonstrated,” and equivalent evidence-strength language must not be silently collapsed into stronger claims.
4. An avatar/video provider is never a source of scientific truth.
5. Bloom's accessibility role must not simplify away material uncertainty.
6. Eviden's scientific persona must not create the false impression that a claim has been independently validated merely because he says it.
7. Corrections must be versioned/recorded; frozen masters are not silently altered to solve downstream production mistakes.

---

## 9. Voice strategy

No final voice has yet been frozen.

Before selecting voices, define for each actor:

- apparent vocal age/range;
- language policy;
- Spanish/English accent policy;
- cadence;
- warmth/energy;
- pronunciation rules, especially scientific terminology;
- emotional range;
- prohibited delivery styles;
- reproducibility requirements;
- commercial-use rights and provider terms.

Do not clone or imitate an identifiable real person's voice without explicit rights/consent. Record provider, model/voice ID, settings, license/terms snapshot and version when a voice becomes canonical.

---

## 10. Animation/avatar strategy

No production platform is frozen yet. Earlier discussion considered the general class of tools represented by avatar/video and synthetic-voice platforms, but the project intentionally did **not** select or purchase a provider before establishing character masters.

Candidate methods must be evaluated against:

- facial/character identity consistency;
- ability to use the canonical character rather than generate cousins;
- body/gesture control;
- lip-sync quality;
- Spanish and English support;
- scientific-word pronunciation;
- scene control;
- resolution/export quality;
- reproducibility/versioning;
- commercial rights;
- cost at pilot and production scale;
- provider retention/privacy terms where relevant;
- ability to preserve a stable actor over time.

A technically impressive demo that cannot reliably reproduce Bloom/Eviden is not sufficient.

---

## 11. YouTube vision

The first objective is a controlled pilot, not immediate publication.

The intended long-form format should eventually allow:

- Bloom-led introductions and audience questions;
- Eviden-led evidence explanation;
- dialogue between them rather than uninterrupted talking heads;
- papers/references represented visually;
- molecule/diagram/timeline/chart inserts;
- clear on-screen citations where appropriate;
- subtitles/accessibility;
- lower thirds and branded scene language;
- uncertainty communicated explicitly;
- short segments reusable in Shorts/social content where rights and context allow.

The actors should be able to coexist with infographics and scientific visuals rather than occupy the entire frame continuously.

---

## 12. Current durable state at this handoff

Verified branch before this handoff was at commit `c44e9e7af7a77f63b394a0421ce20880fde49463`, whose message is `docs: reconcile Bloom canonical binary checksum`.

At that state:

- `AV-00 = DONE`.
- `AV-01 = IN_PROGRESS`.
- Bloom's exact approved binary metadata is reconciled in the tracker.
- Bloom has a durable registry file.
- Eviden's newly supplied exact binary has now been independently frozen in the active session with SHA-256 `5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd` and must be reconciled durably in the branch if that reconciliation is not already present when resuming.
- The exact PNG binaries themselves still need repository binary ingest before `AV-01 = DONE` unless a later commit has completed it.
- `AV-02` has not yet been started as a durable deliverable.

When resuming, **always inspect the branch and tracker first** because later commits may have advanced this state.

---

## 13. Exact cold-start procedure for a new chat/agent

On a fresh session:

1. Open repository `e-milysol/peptibloom-project`.
2. Inspect branch `feature/bloom-eviden-digital-actors`.
3. Read this handoff completely.
4. Read `project/workstreams/BLOOM_EVIDEN_DIGITAL_ACTORS.md` completely.
5. Inspect `project/brand/evidence/actors/` and any later asset registry paths.
6. Verify current branch HEAD rather than assuming the commit recorded here is still latest.
7. Verify canonical hashes before manipulating actor binaries.
8. Do not recreate a missing master from prose. Ask for/locate the exact frozen binary.
9. Continue from the earliest non-DONE sequential checkpoint unless an independent later task is explicitly authorized.
10. At session end, update the live tracker with statuses, outputs, blockers, decisions, versions/checksums and the exact next action.

The README is context; **the live tracker is the operational status authority**.

---

## 14. Immediate next actions at handoff

Unless later repository state shows they are already complete:

- reconcile Eviden's exact canonical SHA-256 (`5ccaf041f9dfeaa06994fdbbc16d907dedadfd841974da6d4226b62c929ab9cd`) into the tracker/registry and explicitly supersede the provisional Eviden hash;
- ingest the exact Bloom and Eviden PNG binaries into the approved repository asset paths and verify hashes;
- mark `AV-01 = DONE` only after both exact binaries are durably present and verified;
- begin `AV-02` with **Bloom Character Identity Bible first**, then Eviden;
- derive subsequent assets from the canonical masters rather than generating replacement identities.

---

## 15. Definition of continuity

A future chat should be able to answer all of the following from repository state alone:

- Who are Bloom and Eviden?
- Why do they exist?
- What are their editorial roles?
- Which exact files define their appearance?
- Which hashes are canonical and which were superseded?
- What may and may not change?
- Which stage of actor development is complete?
- What is blocked?
- What is the next action?
- Which evidence/publication gates apply?
- How does an episode get reproduced and audited?

If those answers require recovering an old chat, this workstream's durability contract has failed.
