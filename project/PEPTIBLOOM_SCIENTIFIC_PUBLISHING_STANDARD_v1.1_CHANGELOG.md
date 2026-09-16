# PeptiBloom Scientific Publishing Standard v1.1 Changelog

**From:** PeptiBloom Standard Editorial Articles v1.0

**To:** PeptiBloom Scientific Publishing Standard v1.1

**Status:** APPROVED / FROZEN

**Owner approval date:** 2026-09-16

**Date:** 2026-09-16

## Scope

v1.1 is a governed patch of v1.0. It preserves the evidence-first philosophy, three reading layers, progressive disclosure, claim and study artefacts, search register, independent reviews, formulation and stability context, visual intent, accessibility and publication gate.

No scientific article content, translations, website implementation, routing, analytics, commerce, SEO, Pinterest assets or HALO-003 work changed.

## Substantive changes

| Area | v1.0 | v1.1 patch | Reason |
|---|---|---|---|
| Article anatomy | 17 blocks could be read as mandatory visible sections | 17 canonical knowledge modules with five rendering states | Prevent filler and permit scientifically justified short articles |
| Module states | Applicability rules were ambiguous | Added `APPLICABLE_WITH_EVIDENCE`, `APPLICABLE_LIMITED_EVIDENCE`, `NO_ESTABLISHED_EVIDENCE`, `NOT_APPLICABLE`, `INTERNAL_ONLY` | Separate knowledge coverage from public rendering |
| Evidence model | Solid, limited, anecdotal, contradictory and not established appeared on one scale | Separated evidence basis, confidence and evidence state | Preserve scientific meaning and existing evidence canon |
| Evidence interpretation | Non-equivalences were implicit | Added strength ≠ safety, quantity ≠ quality, plausibility ≠ clinical effect and absence ≠ evidence of absence | Prevent systematic overclaiming |
| PeptiBloom synthesis | Visible module named Recomendación PeptiBloom | Renamed Conclusión PeptiBloom with subtitle Qué conclusión permite actualmente la evidencia | Remove advice-like interpretation |
| Conclusion boundaries | Described as non-opinion | Explicitly excludes clinical, treatment, purchase and use recommendations | Strengthen non-commercial and safety boundaries |
| Regulatory status | Universal quick fact | Conditional `RegulatoryStatus` with jurisdiction, status, as-of, source and scope | Prevent global or timeless generalization |
| Design values | Pixel widths, typography and spacing mixed with editorial canon | Moved to non-canonical implementation guidance under Web Design System separation | Decouple scientific versioning from CSS changes |
| Evidence Visual System | Visual types were defined within the standard | Explicitly aligned with PB-EVIDENCE-VISUAL-002 or successor | Preserve existing canonical visual engine |
| Bloom/Eviden | Visual role was not fully architectural | Reaffirmed Bloom explanation/context, Eviden analysis/methodology and optional use | Avoid mandatory character decoration |
| Image intent | Intent sheet and factual QA | Added public metadata and full internal provenance model | Make generated and derivative visuals auditable |
| Figure claims | Visual facts cited generally | Figures must reference approved `claim_id` values | Eliminate parallel untraceable assertions |
| Claim matrix | Core fields present | Added module, multidimensional evidence, locale and review status; defined material claim | Improve traceability without cataloguing trivial prose |
| Study table | Fixed-looking columns | Columns conditional by design; added `NOT_APPLICABLE`, `NOT_REPORTED`, `NOT_FOUND`, `NOT_VERIFIED` | Represent heterogeneous evidence accurately |
| Preparation | Technical/non-human-use caution | Bound content to material, purpose, conditions, controls, source and independent math/unit QA | Prevent technical content becoming administration instruction |
| Regimens | Preferred Regímenes estudiados | Added mandatory population/species, formulation, route, exposure, frequency, duration, objective, source and uncertainty binding | Prevent study exposure becoming recommendation |
| Safety | Small samples cautioned | Explicit risk domains for compound, formulation, product quality and preparation/measurement | Prevent false safety inference |
| Community experience | Optional and anecdotal | Added platform, date range, selection method, bias and identity/product uncertainty contract | Preserve structural separation |
| Accessibility | Strong WCAG-oriented rules | Added shape, position and animation; decorative-visual handling; locale-aware alt text approval | Close non-colour accessibility gaps |
| Locale | Language metadata present | Spanish default unprefixed; English `/en/`; French `/fr/`; no silent fallback; per-locale approval | Apply owner-approved multilingual policy |
| Lifecycle | Spanish editorial labels | Aligned with `DRAFT → EVIDENCE_REVIEWED → CONTENT_APPROVED → WEB_READY → explicit publication authorization` | Avoid parallel workflow and automatic publication |
| Update condition | ACTUALIZACIÓN REQUERIDA appeared as a state | `UPDATE_REQUIRED` is a governed review condition compatible with lifecycle rollback/blocking | Avoid competing lifecycle |
| Delivery | Nine-item minimum output | Formalized 14-item production package | Include metadata, provenance, distinct QA and publication record |
| References | Methodological list | Separated external guidance from PeptiBloom editorial decisions | Avoid misattributing internal architecture to CDC/WCAG/AHRQ |

## Preserved without substantive change

- evidence-first and non-commercial philosophy;
- Orientation → Comprehension → Verification;
- early main message and progressive disclosure;
- visible uncertainty;
- short, informative sections;
- claim matrix, study table and search register;
- independent scientific and mathematical/unit verification;
- four-part evidence synthesis;
- no conversion of studied regimens into recommendations;
- separation of anecdotal experience;
- formulation and stability context;
- figure intent and factual visual QA;
- accessibility and publication gate;
- one image equals one cognitive function; and
- the generated image is never a source.

## Governance notes

- v1.1 was OWNER APPROVED / FROZEN on 2026-09-16.
- v1.1 supersedes PeptiBloom Standard Editorial Articles v1.0 as the current operational scientific publishing standard.
- Historical v1.0 remains provenance and must not be destructively removed.
- The approved locale policy is Spanish unprefixed by default, English at `/en/`, French at `/fr/`, no silent cross-locale fallback, and publication only when reviewed content exists for the locale.
