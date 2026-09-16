# Evidence -> Scientific Content Contract v1

Status: PROPOSED FOR OWNER / EVIDENCE REVIEW

## Purpose

Define the minimum internal handoff required before Scientific Content Production may transform Evidence-qualified material into publication-oriented copy.

This contract does not define the Evidence persistence schema and does not authorize publication.

## Governing principles

- Evidence remains the scientific source of truth.
- Scientific Content Production may transform wording and structure, but may not strengthen, invent, infer or silently fill scientific claims.
- Missing, contradictory or insufficient Evidence input must remain visible and be routed back to Evidence.
- Provenance must remain inspectable from the final publication representation.
- Known, unknown, theoretical, contradictory and anecdotal material must remain distinguishable.

## Required handoff unit

The handoff unit is a reviewed scientific claim package. This is a publication contract concept, not a declaration of a database model.

Each package must provide, at minimum:

1. `claim_id` — stable internal reference for the reviewed claim.
2. `claim_text` — Evidence-approved scientific meaning, written narrowly enough to be supported by the cited evidence.
3. `claim_scope` — population/context/condition/route or other scope constraints required to interpret the claim correctly.
4. `evidence_level` — Evidence-approved level/category, with no Web or editorial reinterpretation.
5. `evidence_status` — supported / limited / conflicting / theoretical / anecdotal / insufficient, or the formally approved Evidence vocabulary once frozen.
6. `source_set` — references supporting, limiting or contradicting the claim.
7. `source_locator` — exact locator where feasible: PMID/DOI/registry/patent plus page, section, table, figure, supplementary item or other precise location when applicable.
8. `study_context` — study type, species/population, sample size where material, intervention/exposure and comparator where applicable.
9. `result_summary` — Evidence-reviewed result relevant to this claim.
10. `limitations` — material limitations required to avoid overstatement.
11. `contradictions` — known conflicting findings relevant to the claim.
12. `uncertainty_note` — what remains uncertain or cannot be concluded.
13. `anecdotal_flag` — explicit indication when information comes from experience reports rather than controlled evidence.
14. `assessment_date` — date of the Evidence assessment used for publication.
15. `review_state` — must explicitly indicate that the package is eligible for editorial transformation.
16. `reviewer_reference` — auditable Evidence sign-off reference; identity/role representation is implementation-dependent.

## Source requirements

Where available and relevant, Evidence should prefer:

- peer-reviewed primary literature;
- clinical-trial registries and results;
- regulatory/public assessment documents;
- patents for formulation/history/mechanistic context when relevant;
- manufacturer technical documentation only as a source category that remains distinguishable from independent evidence;
- anecdotal/community sources only when explicitly labeled as anecdotal and never used to upgrade scientific certainty.

Scientific Content Production must preserve source category distinctions.

## Editorially permitted transformations

Scientific Content Production may:

- rewrite for clarity and readability without changing scientific meaning;
- organize approved claim packages into sections;
- shorten repetitive language while preserving limitations;
- create plain-language explanations directly traceable to approved claims;
- format references and provenance for the publication surface;
- create visual-summary copy when the same evidence status and uncertainty survive the transformation.

## Prohibited transformations

Scientific Content Production may not:

- create a new scientific claim from contextual inference;
- combine two qualified claims into a stronger third claim without Evidence review;
- promote preclinical evidence to human efficacy;
- treat mechanism or biological plausibility as demonstrated clinical benefit;
- convert absence of identified evidence into proof of absence;
- remove material contradictions or limitations for readability;
- convert anecdotal reports into scientific evidence;
- infer dosing, reconstitution, safety, stability, pharmacokinetics or interactions when Evidence has not approved the relevant claim;
- replace an outdated Evidence assessment with newer external information without routing that information back through Evidence.

## Completeness gate

A section may enter Scientific Content Production only when its intended publication statements can be fully traced to eligible claim packages.

If the source material is insufficient, the permitted outputs are:

- omit the unsupported statement;
- mark the topic as evidence gap / not established when Evidence explicitly supports that representation;
- route a review request back to Evidence.

Editorial generation must not fill the gap.

## Scientific-content states

Suggested coordination states:

`INPUT_PENDING -> READY_FOR_EDITORIAL -> EDITORIAL_DRAFT -> SCIENTIFIC_RECHECK_REQUIRED -> EDITORIAL_READY`

These states do not authorize publication and do not redefine Evidence workflow states.

## Change control

Any material scientific change after `READY_FOR_EDITORIAL` requires revalidation against the referenced Evidence packages. If a source is corrected, retracted, superseded or materially reinterpreted, affected content must return to Evidence review.

## Acceptance criteria

This contract is ready for approval when Evidence confirms that:

- the handoff preserves scientific provenance and uncertainty;
- no field requires Web/UI convenience to dictate Evidence schema;
- the minimum information is sufficient for safe editorial transformation;
- editorial permissions and prohibitions are scientifically acceptable;
- the proposed states do not conflict with existing Evidence workflow semantics.
