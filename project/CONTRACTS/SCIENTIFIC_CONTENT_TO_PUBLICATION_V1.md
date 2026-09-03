# Scientific Content -> Publication Contract v1

Status: PROPOSED FOR OWNER / EVIDENCE / WEB REVIEW

## Purpose

Define the minimum publication gate between editorially prepared scientific content and the public PeptiBloom web.

This contract does not authorize WEB M2 by itself. Compound publication still requires the separate approved Evidence -> WEB public read contract and production-ready scientific content.

## Publication principle

No scientific article or compound page becomes public merely because copy exists.

Publication requires a traceable chain:

`Evidence-qualified input -> Editorial transformation -> Scientific recheck -> Editorial approval -> Publication authorization -> Web publication`

## Proposed publication states

1. `DRAFT`
   - editorial work in progress;
   - not production eligible.

2. `SCIENTIFIC_REVIEW`
   - all scientific statements are checked against Evidence-qualified input;
   - unsupported strengthening, omitted limitations and provenance gaps are corrected.

3. `EDITORIAL_REVIEW`
   - structure, clarity, accessibility, language, references and visual-summary consistency are reviewed;
   - editorial review cannot alter scientific meaning without returning to scientific review.

4. `APPROVED_FOR_PUBLICATION`
   - scientific and editorial gates have passed;
   - required owner/publication authority has approved release;
   - Evidence/Web contract prerequisites applicable to the content type are satisfied.

5. `PUBLISHED`
   - exact approved revision is live on the public site.

6. `REVIEW_REQUIRED`
   - publication remains visible or is withdrawn according to future policy, but its scientific basis requires reassessment because of new evidence, correction, retraction, material error or scope change.

7. `RETIRED`
   - no longer current publication content;
   - historical provenance and supersession relationship remain traceable.

## Required publication package

Before `APPROVED_FOR_PUBLICATION`, the content package must include:

- stable content identifier;
- revision identifier;
- title and intended content type;
- intended locale;
- scientific-content source references/claim references;
- complete reference list;
- evidence/uncertainty representation used in the article;
- scientific-review sign-off reference;
- editorial-review sign-off reference;
- publication-authority sign-off reference;
- review date / evidence cutoff date;
- disclosure of anecdotal material if present;
- conflict/limitation representation where material;
- structured metadata required by Web without altering scientific meaning;
- explicit statement of whether the content is eligible for WEB M1 editorial publication or requires WEB M2 Evidence integration.

## Scientific review gate

Scientific review must verify at minimum:

- every factual scientific statement is supported by eligible Evidence input;
- human, animal, in vitro and mechanistic evidence are not conflated;
- association, mechanism and causation are distinguished;
- limitations and contradictions are not materially suppressed;
- dosing/reconstitution/frequency/stability/safety/interactions are included only when specifically supported and approved for that representation;
- anecdotal material is clearly labeled;
- numerical values, units and conversions are correct;
- citations resolve to the intended source and support the associated statement.

## Editorial review gate

Editorial review must verify at minimum:

- no editorial rewrite changes certainty or scope;
- headings accurately describe the supported content;
- summaries and infographics do not overstate the long-form text;
- warnings/uncertainty remain visible and understandable;
- terminology is internally consistent;
- localization preserves scientific meaning;
- reference formatting is complete and usable.

## Publication authority

Automation cannot grant `APPROVED_FOR_PUBLICATION` or `PUBLISHED`.

A human publication authority must approve release. Until a permanent role/RACI is frozen, Owner approval is required for the pilot publication.

## Web boundary

Web may:

- render approved content;
- transform presentation/layout without changing meaning;
- expose provenance and references;
- apply approved localization and metadata structures.

Web may not:

- invent missing scientific fields;
- change evidence status or uncertainty;
- create scientific summaries from unapproved source material;
- publish a revision different from the approved content revision;
- bypass Evidence gating with manually authored compound data.

## Revisions after publication

Minor typography/layout corrections that do not change meaning may use a technical revision path.

Any change to scientific meaning, certainty, numerical content, conclusion, recommendation, safety information, dose/reconstitution information, evidence level or references requires scientific re-review and a new approved content revision.

## Emergency correction principle

A demonstrable factual or safety-critical error must not remain public solely because normal editorial workflow is incomplete. A future operational policy must define correction/withdrawal mechanics, but the scientific error must be escalated immediately and the affected revision marked `REVIEW_REQUIRED`.

## Acceptance criteria

This contract is ready for approval when Evidence, Scientific Content and Web agree that:

- publication authority is explicit;
- no stage can silently bypass Evidence;
- revision provenance is preserved;
- Web consumes only approved publication representations;
- localization and visual summaries cannot increase scientific certainty;
- the workflow is sufficient to operate the first pilot article end to end.
