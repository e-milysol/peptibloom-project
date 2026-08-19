# PeptiBloom Clean-Sheet Physical Design Pipeline v0.1

Status: OWNER APPROVED WORKING MODEL

Authority context:

- `PB-DEC-501` establishes Physical Products / Accessories as the independent canonical domain for physical product identity, design/provenance/specification, prototype and physical/manufacturing validation truth, and sanitized product-truth handoffs.
- `PB-DEC-502` records Owner approval of this Physical Design Pipeline v0.1 and the current fabrication capability.
- This document defines the detailed operating model beneath that authority. It does not reassign authority owned by Operative Core, WORK 7 / Private Master, Legal/IP, Evidence, Web, Commerce or other domains.

## 1. Purpose and scope

This pipeline controls how a PeptiBloom physical-product concept progresses from intake to physically validated design truth.

The controlled progression is:

idea
→ product intake
→ product requirements
→ stable design identity
→ target-object/interface measurement
→ design brief
→ editable design source
→ printable export
→ fabrication/build record
→ physical prototype
→ measurement
→ fit/function testing
→ failure/learning or revision
→ physical validation

Core controls:

1. Requirements precede controlled geometry.
2. Interface-dependent geometry requires measured interface evidence before dependent CAD.
3. CAD, renders, printable exports and filenames do not become design truth merely because they exist.
4. A physical print is not physical validation merely because fabrication succeeded.
5. Fit/function claims require physical testing against the applicable real target interface.
6. Revisions, builds, tests and failures remain traceable.
7. Failed revisions are preserved rather than destructively overwritten.
8. Unknown values remain `UNKNOWN`.
9. Historical material may inform requirements or concepts but does not automatically become current geometry, dimensional or validation truth.
10. Physical design and validation gates do not imply `READY_FOR_SALE`, publication authorization, Commerce authorization, Legal/IP clearance, procurement authorization or payment authorization.

## 2. Clean-sheet baseline

The current Physical Products geometry baseline is:

`CLEAN_SHEET`

Legacy geometry recovery is complete.

No recoverable geometry artifact was found that may serve as current PeptiBloom design authority.

This does not mean:

- historical geometry was never reported;
- historical concepts do not exist;
- legacy renders do not exist;
- recovered functional, visual, provenance or license knowledge does not exist.

Recovered legacy material remains reconciliation evidence only and must retain its applicable classification.

Historical dimensions, tolerances, mechanisms and geometry are not current design truth unless independently evidenced and accepted through the current control model.

## 3. Identity model

The physical-design control model distinguishes the following primary identities.

### PRODUCT_ID

Identifies the enduring physical product concept or family.

It answers:

> What physical product is this?

A `PRODUCT_ID` may persist across multiple designs, revisions and prototype builds.

It is not implicitly an Operative Core Product ID, SKU, Commerce ID, storefront ID or WORK 7 identifier.

### DESIGN_ID

Identifies one controlled physical design architecture or design solution belonging to a product.

It answers:

> Which design architecture is being developed?

A product may have multiple `DESIGN_ID` values when genuinely different architectures are explored.

A `DESIGN_ID` is not a revision number.

### REVISION_ID

Identifies an immutable controlled revision of a `DESIGN_ID`.

It answers:

> Which exact controlled iteration of this design is this?

Geometry-affecting changes require a new revision.

A revision that has produced controlled prototype evidence must not be destructively replaced.

### PROTOTYPE_BUILD_ID

Identifies one real fabrication attempt from one controlled revision.

It answers:

> Which physical build are these observations about?

Multiple prototype builds may use the same revision.

A build is evidence about a revision; it is not itself a design revision.

### VALIDATION_RECORD_ID

Identifies a controlled validation conclusion derived from defined requirements, tests and physical evidence.

It answers:

> What validation decision was reached, against which requirements and using which physical evidence?

A validation record must remain traceable to the applicable product, design, revision, prototype build or builds, requirements, tests and evidence.

### Supporting identities

The model also supports independently addressable identities for:

- requirements;
- target objects;
- measurements;
- tests;
- failures;
- evidence.

The exact permanent identifier syntax remains unapproved.

The candidate pattern `PB-<ENTITY>-<SEQUENCE>` remains `PROPOSED`.

No permanent identifier may be assigned by inference from this document alone.

## 4. Product intake

Controlled design work begins with a product intake record.

Minimum intake fields are:

- `PRODUCT_NAME`
- `PRODUCT_FAMILY`
- `DESIGN_ORIGIN`
- `FUNCTIONAL_PROBLEM`
- `INTENDED_PHYSICAL_USE`
- `TARGET_OBJECT`, where applicable
- `USER_INTERACTION`
- `ENVIRONMENT`
- `KNOWN_CONSTRAINTS`
- `KNOWN_LIMITATIONS`
- `OUT_OF_SCOPE`

Recommended `DESIGN_ORIGIN` vocabulary:

- `PEPTIBLOOM_CLEAN_SHEET`
- `EXTERNAL_FUNCTIONAL_INSPIRATION`
- `LEGACY_CONCEPT_RECOVERED`

`EXTERNAL_FUNCTIONAL_INSPIRATION` records inspiration for a functional problem or use case only. It does not authorize reuse of third-party geometry.

`LEGACY_CONCEPT_RECOVERED` may preserve a recovered concept but does not establish current geometry, mechanism, dimensions, tolerances, material specification, manufacturability or validation.

## 5. Requirements model

Every controlled requirement belongs to a primary requirement class:

- `FUNCTIONAL_REQUIREMENTS`
- `INTERFACE_REQUIREMENTS`
- `DIMENSIONAL_REQUIREMENTS`
- `MATERIAL_REQUIREMENTS`
- `MANUFACTURING_REQUIREMENTS`
- `ERGONOMIC_REQUIREMENTS`
- `BRAND_REQUIREMENTS`
- `SAFETY_CONSTRAINTS`
- `VALIDATION_REQUIREMENTS`

A requirement record should contain:

- requirement identity;
- requirement type;
- description;
- source;
- status;
- measurement/test method;
- acceptance criterion.

Recommended requirement status vocabulary:

- `DRAFT`
- `NEEDS_EVIDENCE`
- `ACCEPTED`
- `REJECTED`
- `SUPERSEDED`

Only accepted requirements may govern a design released for controlled prototype work.

Acceptance criteria must be observable or measurable.

Terms such as "fits well", "strong", "premium", "safe", "comfortable", "perfect size", "secure" or "durable" are not sufficient standalone acceptance criteria.

Where a meaningful acceptance criterion cannot yet be defined, the requirement remains `DRAFT` or `NEEDS_EVIDENCE`.

## 6. Target-object and interface measurement model

Geometry that depends on a real target object requires controlled interface evidence.

A measurement record should contain:

- target-object identity;
- object description sufficient to identify the physical specimen or type;
- measurement date;
- measurement tool;
- named measurements;
- measurement uncertainty or practical precision;
- photo references where useful;
- notes concerning variability, deformation, taper, ambiguous datums or inaccessible dimensions.

Measurement precision must not be overstated beyond the practical capability of the tool, specimen and method.

Interface evidence may be classified as:

### REFERENCE_ONLY

Examples include marketplace dimensions, listings, manufacturer marketing renders, unsourced diagrams, legacy conversations and visual estimates.

Reference-only information may identify what should be measured but does not become verified interface geometry.

### OWNER_MEASURED

Measured from a real target object using a documented practical method suitable for the design decision.

### INDEPENDENTLY_REPEATED

Repeated measurement of a feature and/or multiple physical specimens where variation matters.

### VALIDATED_INTERFACE_EVIDENCE

Measurement evidence shown sufficient through applicable physical prototype fit/function testing.

Measurement of a dimension does not by itself prove that a selected clearance, tolerance, mechanism or interface design works.

## 7. Design-state machine

The controlled `DESIGN_STATE` vocabulary is:

1. `REQUIREMENTS_DRAFT`
2. `REQUIREMENTS_READY`
3. `INTERFACE_EVIDENCE_REQUIRED`
4. `INTERFACES_MEASURED`
5. `CAD_IN_PROGRESS`
6. `CAD_REVIEW`
7. `DESIGN_READY_FOR_PROTOTYPE`
8. `PRINTABLE_PROTOTYPE`
9. `PHYSICAL_TESTING`
10. `REVISION_REQUIRED`
11. `DESIGN_VALIDATED`
12. `DESIGN_HALTED`

`READY_FOR_SALE` is intentionally excluded.

Key transition controls:

- `REQUIREMENTS_DRAFT` → `REQUIREMENTS_READY`: intake and governing requirements are sufficiently defined and accepted.
- `REQUIREMENTS_READY` → `INTERFACE_EVIDENCE_REQUIRED`: required when unresolved real-world interface evidence blocks dependent design.
- `INTERFACE_EVIDENCE_REQUIRED` → `INTERFACES_MEASURED`: controlled target-object measurements are sufficient for the intended design step.
- `INTERFACES_MEASURED` → `CAD_IN_PROGRESS`: interface records are linked to applicable requirements and CAD has been separately authorized.
- `CAD_IN_PROGRESS` → `CAD_REVIEW`: an editable source and controlled revision exist.
- `CAD_REVIEW` → `DESIGN_READY_FOR_PROTOTYPE`: no known blocking contradiction prevents a useful prototype.
- `DESIGN_READY_FOR_PROTOTYPE` → `PRINTABLE_PROTOTYPE`: controlled printable export and source/export traceability exist.
- `PRINTABLE_PROTOTYPE` → `PHYSICAL_TESTING`: a real physical build has been evidenced.
- `PHYSICAL_TESTING` → `REVISION_REQUIRED`: evidence requires a design change.
- `REVISION_REQUIRED` → `CAD_IN_PROGRESS`: a new revision is created with parent lineage and change reason.
- `PHYSICAL_TESTING` → `DESIGN_VALIDATED`: all applicable blocking validation requirements pass with linked evidence.
- Any active state may move to `DESIGN_HALTED` through a controlling decision.

## 8. Geometry and file authority

The preferred authority hierarchy is:

### Level 1 — Editable / parametric design source

Primary geometry design truth where feasible.

Examples may include native CAD, parameter-driven source or another controlled editable representation.

It should be revision-controlled, attributable, fingerprinted where practical and reproducible where practical.

### Level 2 — Neutral editable / interchange source

A neutral format such as STEP may be a controlled derivative of the canonical editable source.

Where it is the best available meaningful editable representation, that limitation must be recorded.

A neutral interchange file must not automatically be described as parametric.

### Level 3 — Printable export

Examples include STL and mesh-based 3MF.

These are controlled fabrication derivatives.

A printable mesh may be checked, fingerprinted and tied to a revision, but it is not automatically editable design truth.

### Level 4 — Slicer project

A slicer-native project is build-specific fabrication configuration.

It may contain placement, supports, printer settings, filament profiles, material/color assignments and AMS configuration.

It is not primary geometry authority merely because it contains geometry.

### Level 5 — Machine output

GCODE or equivalent machine instructions are build artifacts.

Machine output is never primary design truth.

### Geometry metadata

Fabrication-intended revisions should preserve, where applicable:

- product/design/revision linkage;
- editable-source reference;
- printable-export reference;
- source fingerprint/checksum;
- export fingerprint/checksum;
- generation/export date;
- author/origin;
- parent revision;
- generation/export method where relevant.

Filenames are convenience identifiers, not revision authority.

Terms such as `final`, `latest`, `new`, `fixed` or similar uncontrolled filename labels do not establish revision status.

## 9. Revision and lineage

Every controlled design revision should record:

- design identity;
- revision identity;
- parent revision;
- change reason;
- requirements changed;
- whether geometry changed;
- change summary;
- expected effect;
- status;
- date;
- linked evidence.

Suggested revision statuses include:

- `DRAFT`
- `REVIEW`
- `RELEASED_FOR_PROTOTYPE`
- `TESTED_PASS`
- `TESTED_FAIL`
- `SUPERSEDED`
- `HALTED`

Once a revision has produced a controlled prototype build, its source artifacts and geometry must not be destructively replaced.

Corrections create a new revision.

Failed revisions remain part of the evidence lineage.

## 10. Prototype-build records

Every real fabrication attempt should have a distinct prototype-build record.

The record should support:

- prototype-build identity;
- product/design/revision linkage;
- printable-file reference;
- slicer-project reference;
- printer;
- nozzle;
- material;
- filament profile;
- layer height;
- supports;
- infill;
- build date;
- print time;
- material consumption;
- build result;
- photo references;
- defects;
- notes.

Suggested build-result vocabulary:

- `SUCCESSFUL_BUILD`
- `PARTIAL_BUILD`
- `PRINT_FAILURE`
- `ABORTED`
- `UNKNOWN`

Unknown values remain `UNKNOWN`.

Historical or assumed print settings must not be inserted merely to complete a record.

## 11. Current fabrication capability

Current Physical Products fabrication capability is:

- Bambu Lab P1S
- AMS multi-filament / multicolor capability

This is classified as `CURRENT_FABRICATION_CAPABILITY`.

The pipeline may use this capability where useful for:

- multicolor parts;
- color-coded variants;
- multi-part assemblies;
- separation of decorative/color elements from the functional core;
- AMS filament assignments;
- per-slot material/color records.

Multicolor is optional.

P1S/AMS capability does not itself create a product requirement or select a material.

## 12. AMS and multicolor metadata

Future prototype-build records support:

- `AMS_USED`
- `AMS_SLOT_MAPPING`
- `FILAMENT_PER_SLOT`
- `COLOR_PER_SLOT`
- `MATERIAL_PER_SLOT`
- `FILAMENT_CHANGE_COUNT`, where available
- `PURGE/WASTE`, where available
- `MULTICOLOR_PRINT_TIME_IMPACT`, where available

`AMS_USED` may use:

- `YES`
- `NO`
- `UNKNOWN`

For builds where AMS metadata does not apply, fields may be recorded as `NOT_APPLICABLE`.

Filament, color and material are distinct concepts.

A different color must not conceal a materially different polymer or filament specification.

Where purge/waste or multicolor print-time impact is recorded, the source or method should be identifiable where meaningful.

Unavailable values remain `UNKNOWN`.

## 13. Color-role model

Color does not automatically create a new `PRODUCT_ID`.

Approved color-role vocabulary is:

- `DECORATIVE_VARIANT`
- `IDENTIFICATION_VARIANT`
- `BRAND_VARIANT`
- `FUNCTIONAL_VISUAL_CODING`

The relationship between color and product/design/variant identity must be explicitly defined rather than inferred.

Where practical, functional interface geometry should remain separable from decorative, brand and color elements.

A decorative/color change does not require functional revalidation when no controlled physical property is affected.

If decoration changes mass, leverage, interference, retention, ergonomics, assembly behavior or target-object operation, affected requirements must be retested.

## 14. Multi-part assembly control

One physical product design may contain multiple printable or fabricated components.

A multi-part product does not automatically require multiple `PRODUCT_ID` values.

Components should remain traceable to the applicable design, revision, assembly definition and fabrication artifacts.

Where components can change independently, component-level revision traceability should be supported rather than silently replacing a component within an unchanged assembly.

Assembly records should identify, where applicable:

- required components;
- quantity;
- component relationship/orientation;
- assembly method;
- component-specific material requirements;
- component-specific color role.

## 15. Test and physical-validation model

The approved physical-validation vocabulary is:

- `NOT_EVIDENCED`
- `PRINT_EVIDENCED`
- `FIT_TEST_EVIDENCED`
- `VALIDATION_INCOMPLETE`
- `VALIDATION_PASSED`
- `VALIDATION_FAILED`

### NOT_EVIDENCED

Default before evidence of real fabrication exists.

CAD, renders and slicer previews do not move a design beyond this state.

### PRINT_EVIDENCED

Requires evidence of an actual fabricated object traceable to a known controlled revision and prototype-build record.

A render is insufficient.

### FIT_TEST_EVIDENCED

Requires `PRINT_EVIDENCED` plus an actual target object, physical prototype, physical interface/fit test, linked test record and observed result.

A prototype merely photographed next to the target object is insufficient.

### VALIDATION_INCOMPLETE

Used where physical testing has begun but one or more required acceptance criteria remain untested, unresolved or inconclusive.

### VALIDATION_PASSED

Requires defined validation requirements, objective acceptance criteria, applicable prototype builds, completed required tests, observed evidence, passing blocking requirements and no unresolved blocking failure.

A visually successful prototype or photograph is insufficient.

### VALIDATION_FAILED

Requires evidence that one or more blocking validation acceptance criteria failed.

The failure remains linked to its test, build, revision, requirement and follow-up.

### Test records

A controlled test should record:

- test identity;
- prototype-build linkage;
- requirement linkage;
- test type;
- test method;
- measurement tool where applicable;
- expected result;
- observed result;
- `PASS`, `FAIL` or `INCONCLUSIVE`;
- photo/measurement evidence where applicable;
- failure mode where applicable;
- follow-up.

Suggested test categories include:

- `DIMENSIONAL`
- `FIT`
- `RETENTION`
- `ASSEMBLY`
- `ERGONOMIC`
- `MATERIAL`
- `FUNCTION`
- `PRINT_QUALITY`
- `OTHER`

## 16. Failure and learning model

Approved failure categories include:

- `PRINT_FAILURE`
- `DIMENSIONAL_FAILURE`
- `FIT_FAILURE`
- `RETENTION_FAILURE`
- `ASSEMBLY_FAILURE`
- `ERGONOMIC_FAILURE`
- `MATERIAL_FAILURE`
- `OTHER`

A failure record should preserve:

- failure identity;
- failure type;
- prototype-build linkage;
- revision linkage;
- related test;
- related requirement;
- observed failure;
- evidence;
- likely cause, which may remain `UNKNOWN`;
- design implication;
- required follow-up;
- follow-up revision when created.

Observation and causal hypothesis must remain distinguishable.

Failures are permanent evidence records and must not be removed merely because a later revision succeeds.

## 17. Pipeline gates G0–G6

### G0 — INTAKE COMPLETE

Exit requires the applicable minimum product-intake fields to be complete and unknowns explicitly recorded.

Passing G0 permits requirements work.

It does not authorize CAD.

### G1 — REQUIREMENTS READY

Exit requires:

- requirement set established;
- applicable requirement classes considered;
- blocking requirements identified;
- governing requirements accepted;
- objective acceptance criteria defined;
- validation method defined or explicitly pending;
- physical-interface dependencies identified.

Where blocking interface evidence is missing, proceed to G2 work before dependent CAD.

### G2 — INTERFACES MEASURED

Required where design depends on a real physical interface.

Exit requires sufficient controlled target-object evidence, including applicable specimen identity, relevant measurements, measurement method, practical precision, supporting context/evidence and documented uncertainty/variation.

Marketplace dimensions and renders alone cannot satisfy G2.

### G3 — DESIGN READY FOR PROTOTYPE

Requires G1 and, where applicable, G2.

CAD/design work must also have been separately authorized.

Exit requires:

- controlled design identity;
- controlled revision;
- editable source where feasible;
- review against applicable accepted requirements;
- controlled printable export;
- source/export traceability;
- revision lineage;
- known unresolved risks recorded;
- no known blocker preventing a useful physical prototype.

G3 is not physical validation.

### G4 — PRINT EVIDENCED

Exit requires:

- actual physical fabrication attempt;
- prototype-build record;
- fabricated result evidenced;
- traceability to the controlled revision;
- build result recorded;
- defects documented where present.

Successful printing does not establish fit or function.

### G5 — FIT/FUNCTION EVIDENCED

Exit requires applicable physical fit/function tests using the real target object, linked test records, expected and observed results, pass/fail/inconclusive outcomes and explicit failure capture.

G5 does not by itself establish complete physical validation.

### G6 — PHYSICAL VALIDATION COMPLETE

Exit requires:

- validation requirements defined;
- blocking validation tests completed;
- each applicable acceptance criterion evidenced;
- results traceable to specific prototype builds and revisions;
- unresolved failures classified;
- final validation outcome assigned.

Completed outcomes are:

- `VALIDATION_PASSED`
- `VALIDATION_FAILED`

If evidence remains incomplete, the state remains `VALIDATION_INCOMPLETE` and G6 has not passed.

No G0–G6 gate implies `READY_FOR_SALE`, publication authorization, Commerce authorization, Legal/IP clearance, procurement authorization or payment authorization.

## 18. Storage and version-control direction

The approved storage architecture is direction only.

Future storage should logically separate:

1. human-readable controlled records;
2. editable design source;
3. generated fabrication artifacts;
4. large binary build/design files;
5. physical evidence;
6. private operational information.

A candidate logical structure is:

```text
physical-products/
  products/
    <product>/
      requirements/
      measurements/
      designs/
        <design>/
          revisions/
            <revision>/
              source/
              exports/
              metadata/
      builds/
      tests/
      failures/
      validation/
```

This is not an approved permanent GitHub directory structure.

No approval currently exists to:

- create Git LFS;
- mandate CAD software;
- create external CAD infrastructure;
- publish large binary geometry;
- create permanent product/design directory structures.

Storage implementation requires a later controlled decision.

## 19. Private/public boundary

The public Control Plane may hold sanitized physical-product truth appropriate to the domain, including:

- physical product/design identity;
- revision lineage;
- functional requirements;
- accepted interface evidence;
- material specification where required for reproducibility;
- geometry/source metadata;
- fabrication-artifact metadata;
- non-sensitive build settings required to interpret evidence;
- validation state;
- test-result summaries;
- non-sensitive provenance;
- design-origin classification.

Private operational truth remains outside the public Physical Products Control Plane, including:

- private supplier identities and contacts;
- procurement quotations and prices;
- landed cost;
- invoices;
- payments;
- shipment/tracking information;
- margins;
- private WORK 7 operational records.

A functional material specification needed to reproduce a validated design may be Physical Products truth.

The private supplier from which it was purchased is not.

## 20. PB-XD boundary

Continued domain-local Physical Products design, reconciliation, requirements, measurement, prototype and validation work does not itself require PB-XD.

`PB-XD REQUIRED NOW: NO`

A `PB-XD-NNN` becomes required before Commerce, Web, WORK 7, Operative Core or another domain relies on a material or automated Physical Products:

- data contract;
- identifier mapping;
- synchronization mechanism;
- shared semantic interface.

Physical Products identities remain distinct from Operative Core Product IDs, SKUs, Commerce IDs, storefront IDs and WORK 7 identifiers unless a future explicit cross-domain contract establishes a mapping.

## 21. Bloom Caps initial controlled exercise

Bloom Caps is the first approved controlled clean-sheet design exercise under this pipeline.

Recovered historical variant concepts are:

- ID
- Flower
- Heart
- AM
- PM
- Day

Historical geometry does not survive as current design authority.

The shared/common-core architecture remains:

`HYPOTHESIS_ONLY`

Current gate state:

- G0: `NOT PASSED`
- G1: `NOT PASSED`
- G2: `NOT PASSED`
- current gate: `PRE_G0`
- CAD authorized: `false`

No common-core geometry is assumed.

The previously prepared `BLOOM CAPS — G0/G1 OWNER INPUT & MEASUREMENT PACK` remains:

- `DRAFT_PREPARED`
- `HOLD`

It is not Owner input, measurement evidence, accepted requirements, gate evidence or CAD authorization.

The next controlled step is to review and reduce that held pack to the minimum Owner functional input and physical measurements actually required to assess G0–G2.

Measurements must not be requested and CAD must not begin until separately authorized.
