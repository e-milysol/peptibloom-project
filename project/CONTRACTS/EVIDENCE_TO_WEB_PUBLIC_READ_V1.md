# Evidence -> WEB Public Read Contract v1

Status: PROPOSED FOR EVIDENCE / WEB / OWNER REVIEW

## Purpose

Define the minimum production-safe scientific representation that WEB may consume for public PeptiBloom scientific content without exposing or dictating the internal Evidence schema.

This contract is intentionally representation-oriented. It does not prescribe database entities, API endpoint names, persistence models or frontend component taxonomy.

## Governing boundary

Evidence remains the scientific source of truth.
Scientific Content Production remains the approved editorial transformation stage.
WEB remains a rendering/consumption surface.

WEB may consume only a publication-approved representation tied to a specific scientific-content revision. It must not query raw discovery material and decide scientific meaning itself.

## Eligibility gate

A scientific publication package is eligible for WEB consumption only when all of the following are true:

1. Evidence-qualified source/claim input exists.
2. Scientific Content editorial transformation is complete.
3. Scientific recheck has passed.
4. Editorial review has passed.
5. Publication authority has approved the exact revision.
6. The package declares itself `APPROVED_FOR_PUBLICATION`.
7. Required provenance and evidence-cutoff metadata are present.

For the pilot, Owner approval remains required until a permanent publication-authority RACI is frozen.

## Public representation minimum

Each publishable scientific item must expose, at minimum, the following production-safe concepts.

### Publication identity

- stable public scientific-content identifier;
- exact approved revision identifier;
- content type;
- canonical scientific subject/compound identity;
- publication state;
- evidence cutoff/review date;
- first publication date when applicable;
- latest scientifically reviewed revision date when applicable.

### Localized editorial representation

For each approved locale representation:

- locale code;
- approved title;
- approved summary/deck;
- approved section structure and copy;
- approved FAQ/visual-summary copy where present;
- translation revision/sign-off reference where applicable.

Localized versions must share one scientific identity/revision lineage. Translation may not create a scientifically independent record or strengthen/weaken certainty.

### Evidence/uncertainty representation

The public package must carry enough information to render the approved scientific meaning without WEB inventing semantics, including:

- approved evidence-status label/text for each material claim or section where required;
- approved uncertainty/limitation text;
- supported-versus-unresolved distinctions;
- explicit anecdotal labeling when anecdotal material is intentionally included;
- contradiction/gap representation where material;
- source-class qualification where a result is sponsor-reported, registry-only, mechanistic/preclinical or otherwise not equivalent to peer-reviewed human evidence.

WEB must render these values as supplied. It may not derive a stronger evidence category from study phase, sample size, journal, source count or UI heuristics.

### Claim provenance

For material scientific claims, the public representation must retain traceability to approved claim references sufficient for audit/review.

The public surface does not need to expose internal Evidence implementation identifiers directly if a production-safe stable public provenance reference is supplied.

### References

Each publication package must provide the approved reference set with, where applicable:

- authors;
- title;
- journal/source;
- year/volume/pages;
- DOI;
- PMID/PMCID;
- clinical-trial registry identifier;
- regulatory/official-source identity;
- source class/qualifier when scientifically material.

WEB may format references visually but may not replace them with unreviewed sources.

### Safety/instruction boundary

The package must explicitly indicate whether sections involving dosing, route, frequency, reconstitution, stability, storage, interactions or monitoring are:

- approved evidence-based descriptive content;
- investigational trial-regimen description only;
- unresolved/not established;
- blocked from instructional wording.

WEB must not transform descriptive trial data into an instruction, calculator default, callout, protocol card or actionable regimen.

## Web-permitted transformations

WEB may:

- render approved structure and copy;
- apply responsive layout and progressive disclosure;
- format references/provenance;
- generate navigation, table of contents and semantic anchors from approved headings;
- render approved evidence/uncertainty labels using a future approved visual mapping;
- expose evidence cutoff and update metadata;
- present localized equivalents that have separately passed translation/editorial review;
- generate SEO metadata from approved publication metadata without strengthening scientific claims.

## Web-prohibited transformations

WEB may not:

- create scientific claims from raw data or missing fields;
- summarize unapproved sources;
- infer evidence level from source count or study phase;
- omit a material limitation to fit a component;
- convert a trial dose into a recommended dose;
- generate reconstitution/storage instructions from vendor data;
- label investigational content as approved treatment;
- merge anecdotal and peer-reviewed evidence into a single certainty signal;
- display sponsor topline figures as though they were peer-reviewed primary evidence;
- create independent scientific meaning per locale;
- publish a revision other than the exact approved revision.

## Missing-field behavior

Missing scientific data is not permission for WEB to fill the field.

When an approved public representation explicitly encodes an evidence gap, WEB may render the approved gap wording.

When a required scientific field is absent unexpectedly, the publication package is invalid for production and must return to the upstream workflow.

## Revision and freshness behavior

A published item must retain its evidence cutoff date.

New external evidence does not silently update the live page. It creates a review trigger. Any material change to scientific meaning, numbers, references, evidence status, safety interpretation, dosing/reconstitution statements or PeptiBloom conclusion requires a new scientifically reviewed content revision before WEB publication.

If the active approved revision enters `REVIEW_REQUIRED`, WEB must follow the future approved correction/withdrawal policy rather than generating a replacement itself.

## Retatrutide pilot mapping

PB-SCI-PILOT-001 may use this contract only after the draft completes scientific recheck and publication approval.

The current Retatrutide draft contains examples of all critical states the public contract must preserve:

- supported human efficacy claims;
- limited mechanistic/PK claims;
- sponsor-reported phase 3 obesity data requiring source qualification;
- unresolved head-to-head efficacy claims;
- unresolved cardiovascular/renal outcomes;
- blocked reconstitution/storage instructions;
- investigational/unapproved regulatory status;
- explicit evidence cutoff;
- evidence-based PeptiBloom interpretation without self-use protocol.

## WEB M2 gate effect

Approval of this contract would satisfy the `approved Evidence public contract` portion of the WEB M2 gate only.

It does not by itself make a compound page production-ready. A specific scientific-content revision must also complete the publication workflow and be `APPROVED_FOR_PUBLICATION`.

## Acceptance criteria

Evidence, WEB and Owner must confirm that:

- the contract exposes enough public scientific meaning for WEB to render content safely;
- internal Evidence schema remains implementation-independent;
- no missing value can be silently inferred by WEB;
- provenance and evidence cutoff remain inspectable;
- localization cannot create divergent scientific claims;
- trial-regimen descriptions cannot become public instructions through presentation;
- the exact approved content revision is the only publishable revision;
- the Retatrutide pilot can pass end to end without an ad-hoc scientific page or invented frontend data model.
