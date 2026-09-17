# WEB EXPERIENCE / VISUAL INTELLIGENCE — BASELINE v0.1

Status: `PROPOSED / VISUAL INTELLIGENCE REVIEW AVAILABLE`
Prepared: 2026-08-21
Scope: research and recommendations only; no production implementation

## Governance verified

- Current reviewed `main`: `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`.
- Public Web: Astro + strict TypeScript; production origin `https://peptibloomproject.com`; Cloudflare Workers.
- WEB M1 implementation and Home/Library visual enrichment are complete. WEB M2 remains `BLOCKED` by the Evidence public-read contract and production-ready scientific content.
- M1 visual direction remains `Editorial Evidence / Warm Scientific`; this is not the global design system.
- Canonical logo remains `apps/web/public/brand/logo.png` — `OFFICIAL / MASTER / DO NOT REGENERATE`.
- Permanent semantic rule: `VISUAL COLOR != SCIENTIFIC EVIDENCE GRADE`.
- PB-DEC-002 remains open; this work does not infer a primary/default locale or URL policy.
- Current `project/REQUESTS/open/` contains no active request beyond `.gitkeep`.

## 1. Current PeptiBloom visual state

The current site is not visually broken or primitive. It already has a coherent editorial system: serif/sans typography, restrained warm palette, editorial surfaces, Evidence Halo geometry, dossier/ledger metaphors, clear whitespace and deliberate text hierarchy. Home and Library are the strongest visual surfaces.

The gap is narrower and more specific than “there are no images”: PeptiBloom currently relies almost entirely on typography, CSS geometry and UI-like editorial surfaces. It has very little *representational visual material* — photography, authored illustration, diagrams, scientific figures, document/object imagery or data-driven graphics. As a result, multiple sections ask text and bordered surfaces to perform every job: atmosphere, explanation, trust, pacing and memorability.

Diagnosis: **SUPPORTED WITH QUALIFICATION**. PeptiBloom does not need generic image volume. It needs a small number of high-intent visual moments with distinct jobs.

## 2. Benchmark set

### A — Science / biotech / research

- Arc Institute — `https://arcinstitute.org/` and `/research`. Pattern: research is made browseable through strong feature imagery tied to real publications; visual material is attached to actual research objects rather than generic “science” atmosphere.
- Recursion — `https://www.recursion.com/` and `/platform`. Pattern: real lab/cell imagery, system diagrams and process storytelling alternate with large editorial statements. Complex technology becomes a visual journey rather than a wall of copy.

### B — Health-tech / longevity / data

- Levels — `https://www.levelshealth.com/`. Pattern: product UI imagery, human/lifestyle photography, data visualization and trust/privacy language are interleaved; each visual mode has a different role.
- Oura — `https://ouraring.com/how-it-works`. Pattern: a chronological “day in the life” turns a complex product into an easy visual sequence; imagery survives mobile because each moment has one focal idea.

### C — Premium digital products

- Stripe — `https://stripe.com/`. Pattern: product visuals, real-world brand photography and graphic systems create frequent visual resets. Case-study imagery is recognizable as Stripe even when the logo is absent because composition and brand geometry are repeated consistently.

### D — Editorial / knowledge products

- Quanta Magazine — `https://www.quantamagazine.org/`. Pattern: commissioned illustration, photography, diagrams, video and infographics make difficult science inviting without turning illustration itself into proof. Strong art direction creates memorable article identities.
- Works in Progress — `https://worksinprogress.co/`. Pattern: magazine-like hierarchy, issue/feature rhythm and strong editorial packaging create exploration beyond the first article.

### E — Peptide / research market

- Bachem — `https://www.bachem.com/`. Pattern: abundant service imagery, facility/people context and technical resource thumbnails create corporate scale and navigation cues, but the site also demonstrates how repeated service tiles can become visually generic.
- CPC Scientific — `https://cpcscientific.com/`. Pattern: scientist photography, service categories, event/news imagery and white-paper thumbnails create density and proof-of-activity, but repeated cards and conventional lab imagery reduce distinctiveness.
- GenScript peptide services — `https://www.genscript.com/peptide.html`. Pattern: high information density, icon/service blocks and promotional proof points; useful category reference but a poor target for PeptiBloom’s calmer editorial identity.

Competitor/category conclusion: direct peptide-market sites are useful for understanding expectations, not as the visual north star. PeptiBloom should avoid their common combination of dense service grids, generic laboratory imagery and commercial proof-point saturation.

## 3. Cross-site patterns

1. **One dominant visual idea per major section.** Strong sites do not simply add pictures; they assign a visual job: explain, demonstrate, humanize, prove activity, create atmosphere or invite exploration.
2. **Rhythm comes from changing media, not just changing background color.** Text → image/diagram → text → object/UI → editorial card is more memorable than text → card → text → card.
3. **Visual systems repeat.** A recognizable crop style, illustration grammar, diagram geometry or object-photography treatment matters more than a large heterogeneous image library.
4. **Technical subjects benefit from progressive visual explanation.** Processes are easier to understand as sequences, annotated diagrams or interactive reveals than as long prose.
5. **Trust visuals are concrete.** Real documents, real interfaces, real research figures, real people/places where appropriate, and explicit provenance outperform fake authority aesthetics.
6. **Mobile favors focal simplicity.** Visual richness survives small screens when diagrams can collapse linearly, images have a clear subject, and desktop compositions do not depend on tiny labels.
7. **Editorial imagery can create curiosity without making a scientific claim.** This is especially important for PeptiBloom while Evidence-gated compound content remains unavailable.

## 4. What successful sites do with imagery

They use imagery in at least four distinct roles:

- **Atmosphere / identity:** editorial photography, macro/material photography, abstract brand art.
- **Explanation:** diagrams, annotated process graphics, infographics, product UI demonstrations.
- **Evidence/provenance context:** source-document imagery, real research figures when licensed/allowed, citations and publication context.
- **Navigation/discovery:** article art, feature thumbnails and visual collections that give destinations a recognizable identity.

PeptiBloom is currently strongest in abstract identity and structured text, but weak in explanation, provenance context and visual discovery.

## 5. PeptiBloom Visual Gap Map

| Surface | What exists now | Visual job | Disposition | Recommended visual type | Priority | Mobile | Dependency |
|---|---|---|---|---|---|---|---|
| Home hero | Strong typography + editorial card + Evidence Halo | Establish memorable identity immediately | `NEEDS HERO VISUAL` | Custom abstract/editorial PeptiBloom artwork derived from approved visual language; optionally restrained macro/document texture | P1 | Single focal composition; no tiny labels | Brand review; no scientific semantics |
| Home Purpose | Three text principles | Explain Evidence/Transparency/Traceability | `KEEP MOSTLY TEXTUAL` | Optional minimal icon/line motif only | P3 | Keep compact | Brand |
| Home Library feature | Dossier/path surface | Make “research library” tangible and invite exploration | `NEEDS EDITORIAL IMAGE` | Research-document macro still life / source-page abstraction / archival editorial composition | P1 | Crop around one object | Brand + licensing; no fake study |
| Home Calculator feature | Unit chips + boundary card | Show the tool before click | `NEEDS PRODUCT/UI VISUAL` | Real calculator UI crop / responsive device-neutral interface vignette | P2 | Use native UI crop, not device mockup dependency | Web |
| Home Methodology | Four numbered text steps | Explain process | `NEEDS INFOGRAPHIC` | Source → Review → Interpretation → Traceability process diagram | P1 | Stack vertically | Evidence review of semantics; Web |
| Home Uncertainty | Paired panels | Make support vs uncertainty memorable without grading by color | `NEEDS VISUAL BREAK` | Paired editorial composition / open-vs-resolved structural motif | P2 | Two stacked panels with non-color distinction | Brand + Evidence semantic check |
| Home Transparency | Text band | Close with ownership/identity | `NO IMAGE NEEDED` | Preserve calm ending; optional subtle brand motif | P3 | Keep light | Brand |
| Library hero | Editorial “cover” + halo | Give the Library a recognizable publication identity | `NEEDS EDITORIAL ART SYSTEM` | Reusable issue/article-header visual system, not compound imagery yet | P1 | Crop-safe system | Brand |
| Library principles | Four cards | Clarify reading model | `KEEP TEXTUAL` | Minimal typographic/line system | P3 | Current pattern works | None beyond Brand |
| Library publication state | Ledger | Explain why empty content is credible | `NEEDS VISUAL INFORMATION` | Publication-gate/process graphic; optionally source-document object imagery | P2 | Linear flow | Evidence + Scientific Content boundaries |
| Library research tools | Unit chips + CTA | Demonstrate utility | `NEEDS PRODUCT/UI VISUAL` | Calculator screenshot/crop | P2 | Small single UI frame | Web |
| Methodology hero | Typography only | Signal this is a serious explainer, not policy boilerplate | `NEEDS EDITORIAL VISUAL` | Abstract provenance/source-path illustration with no claim semantics | P2 | Shallow hero art | Brand |
| Methodology article | Long prose sections | Reduce wall-of-text and teach the method | `NEEDS SCIENTIFIC/PROCESS DIAGRAMS` | 1–2 process/provenance diagrams and source anatomy explainer | P1 | Vertical progressive disclosure | Evidence owns scientific semantics |
| About hero | Typography only | Human warmth + identity | `NEEDS HUMAN/OBJECT CONTEXT` | Original PeptiBloom working-environment / research-desk photography or controlled object still life, avoiding fake lab | P2 | Portrait/4:5 alternative crop | Brand; privacy/licensing |
| About ownership/boundaries | Editorial panels | Explain structural separation | `KEEP MOSTLY TEXTUAL` | Optional boundary diagram | P3 | Stack | Cross-domain semantics |
| Calculator hero | Typography | Orient user quickly | `NO DECORATIVE IMAGE NEEDED` | Keep focused | P3 | Avoid pushing form down | Web |
| Calculator form/results | Functional UI + syringe visualization | Perform calculation clearly | `KEEP FUNCTIONAL` | Existing UI visualization is the visual content | P1 preserve | Core mobile usability | Web |
| Calculator explanatory/formula areas | Text/math | Teach arithmetic and limits | `NEEDS EXPLAINER GRAPHIC` | Simple unit-flow / formula anatomy graphic using neutral example-independent structure | P2 | Linear | Web; no values captured by Analytics |
| Site-wide navigation/discovery | Mostly text links | Encourage continued exploration | `NEEDS VISUAL DISCOVERY SYSTEM` | Editorial feature thumbnails/headers once real content exists | P2 now / P1 when content grows | 1:1 or 4:3 crop-safe | Brand + Evidence/publication eligibility |

## 6. Image / visual taxonomy

Recommended practical PeptiBloom taxonomy:

1. **Brand Atmosphere** — abstract brand art, textures, botanical/DNA-adjacent motifs that carry no scientific semantics.
2. **Editorial Object Photography** — documents, notebooks, printed research material, tools and controlled desk/studio compositions.
3. **Human Context Photography** — real people/work environments only where truthful and useful; never staged medical authority.
4. **Product/UI Demonstration** — real PeptiBloom interface crops, calculator states and future tools.
5. **Process / Provenance Diagram** — workflow, source-to-interpretation, review path, boundary diagrams.
6. **Scientific Explanatory Illustration** — mechanism/molecular/biological visuals; Evidence-gated.
7. **Data Visualization** — charts/tables/figures generated from approved data; Evidence/Analytics semantics as applicable.
8. **Editorial Feature Art** — commissioned/custom art that gives articles or collections a memorable identity without serving as evidence.
9. **Microvisual System** — icons, markers, dividers, small diagrams and microanimation for orientation/progressive disclosure.
10. **Interactive Explainer** — user-controlled step-through or layered explanation where interaction materially improves comprehension.

## 7. Top 5 visual interventions

1. **Create a signature Home hero artwork system.** Highest identity impact and no need for scientific claims if kept abstract/editorial. It should be recognizably PeptiBloom without relying on the logo.
2. **Turn Methodology into a visual explainer.** Add one canonical process graphic and one provenance/source anatomy graphic. This improves comprehension and trust rather than merely decoration.
3. **Introduce editorial object/document photography.** A small original shoot can support Home, Library, About and social/OG surfaces while avoiding generic scientist stock.
4. **Use real PeptiBloom UI as imagery.** Calculator interface crops provide authentic, low-risk visual proof of utility and break text rhythm.
5. **Build a reusable editorial feature-art/header system.** Prepare the Library for future Evidence-approved content with consistent crop, typography, motif and provenance rules without fabricating compound content today.

## 8. Quick wins

- Add carefully composed calculator UI crops to Home/Library tool promotions.
- Create one static Home methodology/process graphic from already approved public editorial semantics.
- Use the approved Evidence Halo more intentionally as a recurring background/section-transition motif, while keeping it decorative only.
- Establish image aspect ratios, crop rules, alt-text rules and mobile art-direction requirements before adding a library of assets.
- Add a small number of visual pauses rather than a picture to every section.

## 9. Medium investments

- Original controlled “PeptiBloom research desk / source material” photography session.
- Custom vector illustration family for methodology/provenance concepts.
- Library editorial-art templates for future features.
- Motion prototype for restrained progressive disclosure of methodology/provenance, with reduced-motion support.
- A lightweight internal visual-asset production checklist tied to the Brand Asset Registry once that registry is canonical.

## 10. Signature opportunities

- **The PeptiBloom Source Atlas:** a distinctive visual grammar for showing source → claim → uncertainty → provenance once Evidence supplies approved semantics.
- **Document-as-object identity:** macro paper, marginalia, source locators, archival marks and restrained botanical/DNA forms could create a recognizable “research desk/editorial archive” aesthetic without pretending to be a laboratory.
- **Interactive uncertainty/provenance explainers:** long-term, approved Evidence data could be explored spatially or progressively while keeping contradictions and gaps visible.
- **Commissioned scientific/editorial art:** for major Library features, use art as an invitation to read; evidence remains in the cited content, not in the illustration.

## 11. PeptiBloom visual anti-patterns

Avoid:

- generic scientist-with-pipette stock photography;
- glowing DNA helices, neon molecules or random molecular backgrounds;
- staged “doctor authority” imagery unrelated to actual PeptiBloom operations;
- decorative lab glassware used as a trust signal;
- AI-generated scientific mechanisms or molecular structures presented as factual;
- supplement/e-commerce bottle glamour shots on scientific-library surfaces;
- excessive gradients/glows that move the brand toward generic longevity/supplement aesthetics;
- card-grid saturation and repeated identical service tiles;
- tiny dashboard screenshots that become illegible on mobile;
- animation that makes scientific relationships appear causal;
- decorative colors that look like Evidence grades;
- stock imagery inserted merely to reduce whitespace;
- photography whose subject cannot be truthfully explained in alt text/caption;
- copyrighted competitor images copied into PeptiBloom assets.

## 12. First 3 experiments

### Experiment A — Home hero: “Living Research Archive”

Create 2–3 non-production visual concepts combining approved PeptiBloom palette/motifs with editorial paper/source geometry and restrained botanical/DNA-adjacent form. No molecules, mechanisms or evidence grading. Test desktop and 390px mobile crops.

Success question: does the page become more memorable and premium without looking like biotech marketing or wellness ecommerce?

Routing: Brand concept → Web preview.

### Experiment B — Methodology: “Source to Interpretation”

Build a static, accessible process diagram for Source → Review → Interpretation → Traceability using only currently approved public editorial semantics. Add a second small “what remains attached to a statement” provenance anatomy concept only after Evidence confirms wording.

Success question: can a first-time visitor explain the PeptiBloom method faster after viewing the graphic than after reading prose alone?

Routing: Evidence semantic review → Brand visual treatment → Web preview.

### Experiment C — Authentic utility: calculator visual vignette

Use a real PeptiBloom calculator UI crop as the visual in Home/Library research-tool promotion. No invented result values are necessary; use neutral/empty UI or a controlled synthetic demonstration if Web determines it is safe.

Success question: does authentic product imagery increase perceived usefulness and exploration without turning the page into a SaaS landing page?

Routing: Web preview; Analytics production instrumentation remains separately gated.

## 13. Brand / Evidence / Web dependencies

### Brand / Visual

- Owns visual identity, art direction, photography/illustration language and approval of new visual primitives.
- Canonical logo remains untouched.
- Existing draft Brand Asset Registry work (PR #44) is relevant but not current `main` canon; do not silently promote candidate assets.
- New signature primitives should be registered only through the Brand-owned process.

### Evidence / Scientific Content

For any scientific diagram:

- `VISUAL NEED`: state what the reader must understand.
- `SCIENTIFIC CLAIMS REQUIRED`: enumerate every mechanism/relationship/quantity the graphic would imply.
- `EVIDENCE DEPENDENCY`: require Evidence-approved semantics/content before production.

Current safe visual work is limited to editorial/process concepts already supported by canon. Compound mechanisms, efficacy, dose relationships, clinical outcomes, safety and pharmacokinetics remain blocked unless Evidence supplies approved truth.

### Web

- Owns implementation, responsive behavior, accessibility, performance, image optimization and deployment.
- No production implementation is authorized by this research artifact.
- WEB M2 remains blocked.
- Visual additions must remain localization-ready for en/es/fr and must not infer PB-DEC-002.

## 14. Image sourcing strategy

| Source | Uniqueness | Cost | Scale | Licensing | Scientific risk | Recommendation |
|---|---|---:|---|---|---|---|
| Original photography | High | Medium | Medium | Clear if commissioned/owned | Low if truthful | Strong priority for editorial object/human context |
| Controlled product/object photography | High | Medium | High reuse | Clear | Low | Strong priority |
| Custom vector/editorial illustration | High | Medium | High | Clear | Low–medium | Strong priority; Evidence review if scientific |
| 3D rendering | High | Medium–high | High | Clear if original | Medium | Use selectively for real objects/abstract brand, not invented science |
| Licensed photography | Medium | Low–medium | High | Requires disciplined rights tracking | Low–medium | Use only when subject is specific and non-generic |
| Public-domain scientific imagery | Medium | Low | Medium | Verify each source/status | High semantic risk | Use only with provenance + Evidence review |
| AI-assisted/generated imagery | Medium–high | Low–medium | High | Tool/usage terms must be checked | High for scientific content | Suitable for abstract/editorial concepting; not factual scientific evidence |
| Data-driven diagrams | High | Medium | High | Based on owned/approved data | High semantic responsibility | Best long-term explanatory layer after Evidence approval |

## 15. Owner Required

`OWNER_REQUIRED = NONE` for this baseline research and the three proposed non-production experiments.

Owner review becomes appropriate when a mature Brand concept preview exists or when choosing a material long-term signature visual direction. Scientific diagrams do not route to Owner as a substitute for Evidence approval.

## 16. Next action

1. Route this baseline for normal review through the draft PR and Issue #13.
2. Brand / Visual: review the visual-language and sourcing recommendations against current Brand work, including draft PRs #39/#44 without treating them as canon.
3. Evidence: review only Experiment B semantics and define the safe boundary for future scientific explanatory visuals.
4. Web: prepare non-production preview requirements for Experiments A–C after Brand/Evidence feedback; do not deploy production changes automatically.
5. After review, select one experiment for a real inspectable concept preview.

## Research notes / benchmark provenance

External benchmark observations were made against current public sites on 2026-08-21. Links are retained for analysis only. No competitor imagery is stored in this repository.
