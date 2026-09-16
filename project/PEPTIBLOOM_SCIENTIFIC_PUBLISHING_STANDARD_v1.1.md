# PeptiBloom Scientific Publishing Standard v1.1

**Canonical operational standard**

**Status:** APPROVED / FROZEN

**Owner approval date:** 2026-09-16

**Supersedes:** PeptiBloom Standard Editorial Articles v1.0

**Mode:** documentation, governance and editorial architecture

**Source:** PeptiBloom Standard Editorial Articles v1.0, patched against approved PeptiBloom evidence, visual, lifecycle and locale decisions

**Version date:** 2026-09-16

## 1. Purpose and philosophy

This standard is the production contract for future PeptiBloom Scientific Library articles. It preserves the v1.0 evidence-first, non-commercial approach and defines how research becomes traceable article content, scientific visuals and a reviewable publication package.

Every article must make it possible to understand:

1. what the subject is;
2. what the data show;
3. what interpretation is reasonable;
4. what cannot be inferred;
5. what remains unknown or disputed; and
6. what evidence could change the current conclusion.

The standard does not exist to sell, exaggerate benefits, create expectations or advise use. Design must orient reading, expose uncertainty and preserve verification. A generated image is never a source.

### 1.1 Governing principles

- Evidence, transparency and traceability are observable behaviours throughout the article.
- Scientific uncertainty is visible, specific and proportional.
- Studied exposure is not transformed into a recommendation.
- Anecdotal experience remains structurally separate from scientific evidence.
- Formulation, route, model, population and analytical context travel with the claim they qualify.
- Progressive disclosure allows a short article when only a small number of modules is justified.
- **One image = one cognitive function.** Images exist because they improve understanding, not because a layout requires decoration.
- The generated image is never a source and cannot substantiate its own content.

## 2. Canonical architecture

The publishing standard occupies a defined layer and does not replace adjacent canonical systems.

```text
SCIENTIFIC EVIDENCE MODEL
claims + studies + sources + uncertainty
                ↓
SCIENTIFIC PUBLISHING STANDARD
canonical modules + three reading layers + production contract
                ↓
EVIDENCE VISUAL SYSTEM
approved scientific visual components + Bloom/Eviden eligibility
                ↓
WEB DESIGN SYSTEM
layout + typography + responsive behaviour + implementation tokens
                ↓
ARTICLE RENDERER
approved locale + eligible modules + approved components
                ↓
PUBLICATION GATE
approved lifecycle + explicit publication authorization
```

### 2.1 Boundaries

The Scientific Publishing Standard defines information architecture, semantic hierarchy, readability, progressive disclosure, traceability, accessibility and the cognitive role of visuals.

The Web Design System defines exact widths, font sizes, spacing tokens, breakpoints, component geometry and CSS implementation. Changes to those tokens do not require a scientific-standard version change unless they alter meaning, accessibility or the publishing contract.

Current v1.0 numerical suggestions — such as a 1200 px container, 680–760 px reading column, 18 px body text and 8 px spacing rhythm — remain **non-canonical implementation guidance**, not scientific requirements.

## 3. Three-layer reading model

The three layers remain independent from the number of rendered modules.

### 3.1 Orientation

Target: 30–60 seconds. It identifies the subject, current evidence, principal limitation, major precaution and current PeptiBloom conclusion.

Typical components:

- title and precise standfirst;
- essential message in no more than three short sentences;
- identity quick facts;
- conditional regulatory status, when eligible;
- what the article does not permit the reader to conclude;
- short evidence snapshot; and
- navigation to rendered modules.

### 3.2 Comprehension

Target: approximately 5–8 minutes for a typical article. It explains the scientifically justified modules, such as identity, mechanism, evidence, pharmacology, stability or safety.

Each section begins with its conclusion, then provides the evidence and limitations. Short informative sections, clear headings and appropriate visuals make the article scannable without flattening scientific nuance.

### 3.3 Verification

This layer contains the study representation, search method, claim traceability, unresolved questions, references, version history and public provenance required to verify the article.

## 4. Canonical article modules

The following 17 modules are the canonical knowledge map inherited from v1.0. They are **not 17 mandatory visible sections**.

| ID | Canonical module | Primary purpose | Typical reading layer |
|---|---|---|---|
| M01 | Orientation and hero | Identify subject, essential message and limits | Orientation |
| M02 | In 60 seconds | Give a compact evidence-aware overview | Orientation |
| M03 | Scientific identity | Names, structure, properties, family and history | Comprehension |
| M04 | Mechanism of action | Explain demonstrated and proposed relationships | Comprehension |
| M05 | Scientific evidence | Represent the evidence map, studies and synthesis | Comprehension / Verification |
| M06 | Pharmacology, kinetics and bioavailability | Preserve species, formulation, route and parameter context | Comprehension |
| M07 | Formulation, stability and storage | Distinguish material, product, condition and analytical support | Comprehension |
| M08 | Preparation or reconstitution | Describe technical preparation only when justified and authorized | Comprehension |
| M09 | Studied regimens | Represent studied exposure without recommending use | Comprehension / Verification |
| M10 | Safety | Separate observed events, signals, unknowns and risk domains | Comprehension |
| M11 | Combinations and interactions | Distinguish directly studied, plausible, anecdotal and unknown combinations | Comprehension |
| M12 | Community experience | Describe optional anecdotal material with explicit bias controls | Comprehension |
| M13 | Controversies and open questions | Make disagreement and evidence gaps inspectable | Comprehension / Verification |
| M14 | PeptiBloom conclusion | State the synthesis currently permitted by the evidence | Orientation / Comprehension |
| M15 | Frequently asked questions | Resolve real recurring uncertainties without promotional framing | Comprehension |
| M16 | Common errors | Explain error, consequence and verification method | Comprehension |
| M17 | Methods, references and revision history | Preserve reproducibility and provenance | Verification |

Metadata, claim records, search records, QA records and lifecycle data are governance objects, not additional public article sections.

## 5. Module applicability and rendering

Every canonical module receives one internal rendering state for each article and locale.

| State | Meaning | Public rendering rule |
|---|---|---|
| `APPLICABLE_WITH_EVIDENCE` | The module is relevant and supported sufficiently for an article section | Render normally with claims, sources and appropriate qualifications |
| `APPLICABLE_LIMITED_EVIDENCE` | The module is relevant but support is preliminary, indirect, sparse or otherwise restricted | Render with visible uncertainty and explicit limitations |
| `NO_ESTABLISHED_EVIDENCE` | The module concerns a relevant question for which evidence is not established | Render only when the absence is scientifically or editorially informative; never imply evidence of absence |
| `NOT_APPLICABLE` | The module does not apply to the subject or scope | Record internally; do not render filler |
| `INTERNAL_ONLY` | The object contains governance, provenance or operational material | Never render automatically on the public article |

### 5.1 Renderer rules

- Never create a visible filler section merely to satisfy the template.
- Shorter articles are correct when fewer modules are scientifically justified.
- The renderer selects only modules approved for the requested locale and current lifecycle state.
- An omitted module does not imply a negative scientific finding.
- `NO_ESTABLISHED_EVIDENCE` must explain the question, search boundary and interpretation limit when rendered.
- Internal metadata remains available for audit even when its module is not visible.

### 5.2 Conditional regulatory status

Regulatory status is a conditional component, not a universal quick fact.

```text
RegulatoryStatus
  jurisdiction
  status
  as_of
  source
  scope
```

Render only when it is relevant, verified, explicitly jurisdictional, dated and supported by an authoritative source appropriate to the claim. Never generalize one jurisdiction globally or present an undated statement as timeless.

## 6. EvidenceDefinition

Evidence is multidimensional. The underlying model must not collapse source domain, confidence and evidence state into one coloured scale.

### 6.1 Evidence basis or source domain

At minimum:

- `HUMAN_INTERVENTIONAL`
- `HUMAN_OBSERVATIONAL`
- `ANIMAL`
- `IN_VITRO`
- `TECHNICAL_ANALYTICAL`
- `REGULATORY`
- `ANECDOTAL`

Additional canonical values may be reused from the Scientific Evidence Model; duplicate vocabularies must not be invented.

### 6.2 Confidence or strength

At minimum:

- `HIGH`
- `MODERATE`
- `LOW`
- `VERY_LOW`
- `NOT_EVALUABLE`

Confidence is assigned to a defined claim in a defined context. It is not a permanent property of a compound.

### 6.3 Evidence state

At minimum:

- `CONSISTENT`
- `LIMITED`
- `CONTRADICTORY`
- `NOT_ESTABLISHED`

`CONTRADICTORY` does not automatically mean weak evidence: high-quality studies can disagree. `ANECDOTAL` is a source domain, not a synonym for low confidence. `NOT_ESTABLISHED` does not prove absence.

### 6.4 Non-equivalences

The article and UI must preserve these rules:

- **EVIDENCE STRENGTH ≠ SAFETY**
- **EVIDENCE QUANTITY ≠ EVIDENCE QUALITY**
- **BIOLOGICAL PLAUSIBILITY ≠ CLINICAL EFFECT**
- **ABSENCE OF EVIDENCE ≠ EVIDENCE OF ABSENCE**

The public interface may translate the dimensions into plain-language labels, but its stored data and scientific review must preserve all dimensions.

## 7. Claim model and traceability

Every material scientific assertion must resolve to approved source records. Trivial connective prose does not require a claim row.

### 7.1 Material claim

A **material claim** is an assertion whose truth or qualification could alter scientific interpretation, safety understanding, regulatory meaning, preparation accuracy, evidence classification or the current PeptiBloom conclusion. It includes quantitative results, causal or mechanistic relationships, identity and composition, stability conditions, observed safety signals, regulatory status and statements about what evidence establishes or fails to establish.

Headings, transitions, navigation text and purely stylistic summaries need not create independent claim records unless they introduce scientific meaning.

### 7.2 Claim record

```text
Claim
  claim_id
  article_id
  module_id
  claim_text
  claim_type
  evidence_basis[]
  confidence
  evidence_state
  source_ids[]
  context
  limitations[]
  locale
  review_status
```

- Claim identity is stable across rendering changes.
- Locale-specific wording must have explicit review status and preserve scientific meaning.
- A translated claim is not approved merely because its source-language claim is approved.
- Figures reference `claim_id` values; they do not create parallel untraceable facts.
- Every displayed number must retain unit, denominator or comparator where material to interpretation.

### 7.3 Claim matrix

| Claim ID | Module | Material assertion | Type | Basis | Confidence | State | Sources | Context | Limitations | Locale | Review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `[C-###]` | `[M##]` | `[claim]` | `[type]` | `[domain]` | `[value]` | `[value]` | `[IDs]` | `[scope]` | `[limits]` | `[locale]` | `[status]` |

## 8. Study representation

The included-study table remains mandatory when primary studies materially support the article, but its columns are conditional by study design.

### 8.1 Core study record

At minimum, as applicable:

- source identifier;
- design;
- population, species or analytical model;
- intervention or exposure;
- formulation and route;
- objective and outcomes;
- main result;
- limitations; and
- applicability to the claim.

Sample size, comparator, confidence interval, p-value and related fields must be included when available and material to interpretation. They must not be forced where scientifically inapplicable, nor omitted merely to simplify the visual layout.

Use explicit missingness where useful:

- `NOT_APPLICABLE`
- `NOT_REPORTED`
- `NOT_FOUND`
- `NOT_VERIFIED`

### 8.2 Article synthesis

For each major evidence question, distinguish:

1. what the data show;
2. what interpretation is reasonable;
3. what cannot be inferred; and
4. what evidence could change the conclusion.

Do not use publication count as a proxy for quality.

## 9. Scientific visual system

PB-EVIDENCE-VISUAL-002, or its approved canonical successor, remains the Evidence Visual System. This standard governs when evidence and claims are ready to be expressed; it does not replace the visual component contract.

Approved component families include Article Hero, Evidence Snapshot, Mechanism Visual, Study Decoder, Comparison Module, Uncertainty or Limitations, Data Module and Takeaway, subject to their canonical eligibility rules.

### 9.1 Bloom and Eviden eligibility

- Bloom supports explanation and context.
- Eviden supports analysis and methodology.
- Both may support contrast, uncertainty or synthesis.
- Characters are optional and appear only when they improve comprehension.
- No module requires a character.
- Frozen assets and established role boundaries remain authoritative.

### 9.2 Visual integrity rules

- One image has one cognitive function.
- Explanation must not masquerade as evidence.
- Demonstrated and proposed relationships must be visually distinguishable.
- Uncertainty receives explicit treatment rather than decorative ambiguity.
- Charts and tables preserve units, denominators, axes, sample context and uncertainty when applicable.
- Styling must not invent evidence strength.
- No image is inserted merely to fill space.
- Generated visuals never become evidence for their own claims.

### 9.3 Figure intent record

Before generation or design, record:

- `asset_id`, `article_id`, `figure_id` and intended locale;
- question the figure answers;
- cognitive function and eligible visual component;
- approved `source_claim_ids[]` and references;
- allowed and forbidden inferences;
- representation type and accessibility plan;
- proposed caption and functional alt text; and
- required review roles.

## 10. Image provenance

Every scientific visual has public figure metadata and a separate internal provenance record.

### 10.1 Public figure metadata

Publish only the fields required for understanding and verification, such as figure identifier where useful, caption, functional alt text, public source references and an appropriate statement when the visual is an illustration or explanatory model.

### 10.2 Internal provenance record

```text
ScientificVisualProvenance
  asset_id
  article_id
  figure_id
  version
  locale
  generation_method
  tool_or_model
  generated_at
  source_claim_ids[]
  source_references[]
  allowed_inferences[]
  forbidden_inferences[]
  scientific_review_status
  editorial_review_status
  accessibility_review_status
  alt_text
  caption
  aspect_ratio
  responsive_variants[]
  source_asset
  content_hash
```

`source_asset` is required when the figure derives from another asset. A stable integrity identifier such as a cryptographic content hash should be recorded where practical.

All factual visual content must resolve to approved claims and sources. The visual cannot approve, strengthen or independently restate a claim.

## 11. Writing rules

1. State the conclusion before the detailed explanation.
2. Use one main idea per section and informative headings that preview the answer.
3. Define necessary technical terms in context without replacing precise terminology.
4. Keep paragraphs short enough for scanning, but do not fragment connected reasoning.
5. Use numbers with units, denominator, period, uncertainty and comparator when material.
6. Distinguish association, mechanism, causality and hypothesis.
7. Avoid false precision; round according to source precision.
8. Do not use promotional, absolute, alarmist or fear-based language.
9. Make disagreement and unknowns explicit.
10. Use visuals only when they reduce cognitive load or expose a relationship more clearly than prose.

### 11.1 Opening pattern

The opening should identify the subject, research interest, decisive limitation and evidence scope. It must not imply established benefit merely because a mechanism is plausible.

### 11.2 PeptiBloom conclusion

The visible canonical module is **Conclusión PeptiBloom**, with the preferred subtitle **Qué conclusión permite actualmente la evidencia**.

It is not:

- a clinical recommendation;
- a treatment recommendation;
- a recommendation to purchase; or
- an instruction to use a compound.

It is an editorial and scientific synthesis proportional to available evidence. Its reasoning remains:

1. quality and relevance of evidence;
2. biological coherence without replacing human outcomes;
3. formulation and stability;
4. safety signals and unknowns;
5. technical feasibility and error risk; and
6. real-context applicability.

Record the current conclusion, confidence in that conclusion, greatest limitation and next evidence capable of changing it. Do not use wording reasonably interpretable as PeptiBloom advising human use.

## 12. Safety, preparation and studied-regimen safeguards

### 12.1 Preparation or reconstitution

Preparation content is technical, contextual and evidence-based. It does not automatically become instruction for human administration.

When applicable and authorized, bind preparation information to material identity and purity, intended analytical or experimental purpose, solvent or buffer, target concentration, compatibility, pH, adsorption, filtration, quality controls, storage condition, supported use period, source and uncertainty.

Every calculation must show values, units, formula, substitution, conversions, result and justified rounding, followed by independent mathematical or unit verification.

### 12.2 Studied regimens

Use **Studied regimens** rather than **Protocol** unless describing a formal registered protocol.

Every studied regimen record binds:

- population or species;
- formulation;
- route;
- dose or concentration;
- frequency;
- duration;
- objective or outcome;
- source; and
- uncertainty.

Never transform study exposure into a recommended regimen.

### 12.3 Safety

Absence of observed events in small or short studies is not evidence of safety. Where applicable, separate:

- compound risk;
- formulation risk;
- product-quality risk; and
- measurement or preparation error risk.

Represent observed adverse events with severity, frequency, reversibility, population, exposure and follow-up. Distinguish known interaction from plausible interaction and formal contraindication from an unstudied population.

### 12.4 Community experience

The optional community module remains structurally separate and uses `ANECDOTAL` as its evidence basis. It records platform or source, date range, selection method where applicable, known biases and uncertainty about identity, product, exposure and co-interventions.

Informal counts must not become population prevalence. Anecdotal material cannot upgrade scientific confidence.

## 13. Accessibility

The article and its renderer must remain compatible with WCAG 2.2 principles.

- Scientific meaning never depends only on colour, position, shape or animation.
- Informative figures have functional alt text.
- Decorative visuals are marked appropriately and do not duplicate scientific meaning.
- Essential scientific text remains selectable text whenever practical.
- Headings and relationships are semantic, not merely visual.
- Tables identify headers and remain usable on narrow screens or have an equivalent accessible representation.
- Normal text contrast meets the applicable accessibility target.
- The interface tolerates text and spacing adjustment without loss of content or function.
- Links use descriptive labels and interactive focus remains perceivable.

Alt text communicates the function and relevant scientific relationship, not every decorative detail. Caption and alt text may complement each other but must not create contradictory claims.

## 14. Localization

The identity and data layers are language-independent. Every public scientific content object has explicit locale and locale-specific review status.

### 14.1 Approved public-web policy

- Spanish (`es`) is the primary and default locale and uses unprefixed routes.
- English (`en`) uses `/en/`.
- French (`fr`) uses `/fr/`.
- Silent cross-locale fallback is prohibited.

### 14.2 Publication rules

- An article, claim wording, caption, alt text, metadata or figure is rendered for a locale only when approved content exists for that locale.
- Approval in one locale does not approve another locale.
- No placeholder translation or silent substitution is permitted.
- Translation must preserve scientific meaning, uncertainty, units, qualifications and evidence state.
- Locale eligibility is evaluated before article rendering and publication authorization.

This standard creates no translations and changes no routing infrastructure.

## 15. Production workflow

### Step 1 — Define scope

Record canonical subject identity, audience, locale, research questions, exclusions and search cut-off. Stop when identity, formulation or jurisdictional scope is materially ambiguous.

### Step 2 — Search and register evidence

Prioritize appropriate reviews and guidelines, primary studies, trial registries, regulatory agencies, technical standards, patents or manufacturer documentation for the exact product, and community material only for the separate anecdotal module.

Record databases, sites, dates, queries, inclusion and exclusion criteria, treatment of preprints or commercial sources and search limitations.

### Step 3 — Build claims and studies

Create the material claim matrix and included-study records. Resolve each claim to source identifiers before article drafting.

### Step 4 — Assign module states

Set one rendering state for each canonical module. Do not create filler for `NOT_APPLICABLE` or `INTERNAL_ONLY` modules.

### Step 5 — Draft Orientation

Write the essential message, limits, evidence snapshot and current PeptiBloom conclusion. Failure to state these precisely means the article is not ready to expand.

### Step 6 — Draft Comprehension and Verification

Render only justified modules. Preserve evidence dimensions, context, limitations and missingness semantics.

### Step 7 — Produce visuals

Choose eligible PB-EVIDENCE-VISUAL-002 components, create figure intent and provenance records, generate or design the asset, and verify every factual element against approved claims.

### Step 8 — Verify calculations

Independently verify units, conversions, formulas, substitutions, precision and dimensional plausibility whenever quantitative preparation or dosage-related information appears.

### Step 9 — Independent reviews

Complete scientific, mathematical or unit, editorial and accessibility review. Scientific review actively tests extrapolation, causal overreach, avoidable secondary sourcing, omitted negative results, conflicts of interest, false precision and compound/formulation/product confusion.

### Step 10 — Build the publication package

Assemble all required content, metadata, provenance, QA and lifecycle records. Passing content QA does not publish the article.

## 16. Review and publication lifecycle

The canonical lifecycle is:

```text
DRAFT
  → EVIDENCE_REVIEWED
  → CONTENT_APPROVED
  → WEB_READY
  → explicit publication authorization
```

- `DRAFT`: content remains provisional.
- `EVIDENCE_REVIEWED`: evidence, claims, studies and uncertainty have passed independent scientific review.
- `CONTENT_APPROVED`: the article, figures and applicable QA records are approved for the specified locale.
- `WEB_READY`: the approved content package is technically renderable and has passed web, accessibility and responsive checks.
- Publication requires a separate explicit authorization recorded by the applicable owner or governance role.

**WEB_READY does not mean automatically published.** No agent may publish solely because content QA or web QA passes.

`UPDATE_REQUIRED` is a review condition, not a shortcut around the lifecycle. It can block rendering or publication, return an article to an earlier state, and must record reason, scope, date and responsible review role.

## 17. Acceptance checklist

### Canon and architecture

- [ ] The three reading layers are preserved independently of module count.
- [ ] Every canonical module has one internal rendering state.
- [ ] No visible filler was generated for non-applicable modules.
- [ ] PB-EVIDENCE-VISUAL-002 eligibility rules were reused rather than duplicated or replaced.
- [ ] Exact web tokens remain outside scientific canon.

### Evidence and traceability

- [ ] Every material scientific assertion has a claim record and approved sources.
- [ ] Evidence basis, confidence and evidence state remain separate.
- [ ] Contradictory evidence was not automatically classified as weak.
- [ ] Anecdotal evidence remains structurally separate.
- [ ] Absence of evidence was not represented as evidence of absence.
- [ ] Figures reference approved claim IDs.

### Scientific content

- [ ] Names, chemical form, formula, mass and sequence are not conflated.
- [ ] Human, animal, in-vitro, analytical and regulatory contexts are distinguished.
- [ ] Results, null findings, contradictions and limitations are represented proportionally.
- [ ] Biological plausibility was not substituted for clinical effect.
- [ ] Regulatory statements are relevant, jurisdictional, dated, scoped and sourced.
- [ ] Study fields use explicit applicability or missingness when useful.

### Preparation, regimens and safety

- [ ] Preparation content remains technical and does not become automatic human-use instruction.
- [ ] Studied regimens bind population/species, formulation, route, exposure, frequency, duration, objective, source and uncertainty.
- [ ] No studied regimen became a recommended regimen.
- [ ] Small or short studies were not used to claim safety from non-observation.
- [ ] Compound, formulation, product-quality and measurement/preparation risks are separated where applicable.
- [ ] All material calculations passed independent mathematical and unit QA.

### Writing, visuals and accessibility

- [ ] The visible module is named Conclusión PeptiBloom.
- [ ] It cannot reasonably be read as clinical, treatment, purchase or use advice.
- [ ] One image serves one cognitive function.
- [ ] Each factual visual element resolves to approved claims and sources.
- [ ] Public metadata and internal provenance are complete.
- [ ] Meaning does not depend only on colour, position, shape or animation.
- [ ] Informative figures have functional alt text; decorative figures are marked appropriately.
- [ ] Essential scientific text remains selectable where practical.

### Locale and lifecycle

- [ ] The rendered locale has approved article, claim, caption, alt-text and metadata content.
- [ ] No silent cross-locale fallback or placeholder translation occurs.
- [ ] The route follows Spanish unprefixed, English `/en/`, French `/fr/` policy.
- [ ] Lifecycle evidence supports the recorded state.
- [ ] `WEB_READY` was not treated as publication authorization.
- [ ] Explicit publication authorization exists before publication.

## 18. Minimum delivery package

An agent must deliver the following as one coherent production package:

1. article content;
2. article and module metadata, including module rendering states;
3. material claim matrix;
4. included-study table;
5. search register;
6. figure intent records;
7. approved figure assets and responsive variants when applicable;
8. image provenance records;
9. scientific QA record;
10. mathematical and unit QA when applicable;
11. editorial and accessibility QA;
12. explicit unverified-data list;
13. version history; and
14. publication-state record.

No agent may return only prose or only graphics as a complete article package.

## 19. Gremlin execution contract

> Use PeptiBloom Scientific Publishing Standard v1.1 as the production contract for **[SUBJECT]**. Produce a review-ready package, not an automatically publishable page. Preserve the three reading layers while assigning one rendering state to every canonical module; render only modules scientifically justified for the requested locale. Build the material claim matrix and included-study records before drafting. Keep evidence basis, confidence and evidence state separate. Keep anecdotal material structurally separate. Never turn preparation into automatic human-use instruction or studied exposure into a recommended regimen. Use PB-EVIDENCE-VISUAL-002 components only when eligible, with one image per cognitive function, approved claim references and complete provenance. Generate no scientific fact from an image. Complete independent scientific, mathematical or unit, editorial and accessibility QA. Respect locale approval and prohibit silent fallback. Stop after delivering the minimum package in section 18. Do not publish, modify the website, create translations, change canon or expand scope.

## 20. Methodological references

### 20.1 External evidence and guidance

These sources support general communication, understandability, structure and accessibility practices. They do not independently mandate PeptiBloom-specific module names, lifecycle states or governance architecture.

1. Centers for Disease Control and Prevention. **The CDC Clear Communication Index**. https://www.cdc.gov/ccindex/index.html
2. CDC. **Description and Examples of Index Items — Main Message and Call to Action**. https://www.cdc.gov/ccindex/tool/description-examples-parta.html
3. World Wide Web Consortium, WAI. **Web Content Accessibility Guidelines 2.2 Quick Reference**. https://www.w3.org/WAI/WCAG22/quickref/
4. W3C WAI. **Content Structure**. https://www.w3.org/WAI/tutorials/page-structure/content/
5. W3C WAI. **Understanding SC 1.4.5 Images of Text**. https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html
6. W3C WAI. **Understanding SC 1.4.12 Text Spacing**. https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
7. Agency for Healthcare Research and Quality. **Patient Education Materials Assessment Tool**. https://www.ahrq.gov/health-literacy/patient-education/pemat.html
8. Ghisi GLM et al. **Evaluating Readability, Understandability, and Actionability of Online Printable Patient Education Materials for Cholesterol Management: A Systematic Review.** *Journal of the American Heart Association*. 2024;13:e033676. PMCID: PMC11262522. https://pmc.ncbi.nlm.nih.gov/articles/PMC11262522/
9. Elliott J et al. **Readability of online health information pertaining to migraine and headache in the UK.** *British Journal of Pain*. 2023. PMCID: PMC10088424. https://pmc.ncbi.nlm.nih.gov/articles/PMC10088424/

### 20.2 PeptiBloom editorial decisions

The following are PeptiBloom architectural decisions rather than requirements imposed by the external sources above:

- the 17-module canonical knowledge map and rendering states;
- the three-layer article architecture;
- the multidimensional EvidenceDefinition contract;
- the material claim and visual-provenance models;
- the Conclusión PeptiBloom module;
- PB-EVIDENCE-VISUAL-002 alignment and Bloom/Eviden eligibility;
- the production package and lifecycle;
- the approved locale and no-fallback policy; and
- the separation between scientific publishing rules and Web Design System tokens.

## 21. Change log v1.0 to v1.1

This section summarizes the patch. The companion changelog provides the full trace.

- Reclassified the 17 blocks as canonical knowledge modules rather than mandatory visible sections.
- Added five explicit module rendering states and removed visible filler requirements.
- Replaced the single apparent evidence scale with separate basis, confidence and state dimensions.
- Renamed Recomendación PeptiBloom to Conclusión PeptiBloom and strengthened non-advisory boundaries.
- Made regulatory status conditional, scoped, dated and jurisdiction-specific.
- Moved exact pixel and spacing values out of scientific canon into non-canonical implementation guidance.
- Extended figure intent with public metadata and internal provenance records.
- Placed the standard above or alongside PB-EVIDENCE-VISUAL-002 without replacing it.
- Aligned lifecycle to `DRAFT → EVIDENCE_REVIEWED → CONTENT_APPROVED → WEB_READY → explicit publication authorization`.
- Added locale-aware approval, Spanish unprefixed default, `/en/`, `/fr/` and prohibition of silent fallback.
- Strengthened material-claim traceability and figure-to-claim resolution.
- Made study-table fields conditional and added explicit missingness semantics.
- Strengthened preparation, studied-regimen, safety and community-experience guardrails.
- Formalized the 14-item minimum production package.

---

**Freeze record:** OWNER APPROVED / FROZEN on 2026-09-16. This version supersedes PeptiBloom Standard Editorial Articles v1.0 as the current operational scientific publishing standard. Historical v1.0 remains provenance. This approval does not itself authorize publication of any article.
