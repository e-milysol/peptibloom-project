# Physical CX / Fulfillment Handoff

Owner: PHYSICAL CX / FULFILLMENT operational workstream

Status: PHASE 1 CURRENT-STATE RECONCILIATION

Date: 2026-08-21

Verified base: `main` `7a2f32bd65a33cb6de480e5421bbc02488a1c21f`

## PURPOSE

Design a coherent, economical, testable and scalable physical fulfillment system from order-ready through recipient opening and inspection.

Target experience: careful, clean, coherent, restrained, trustworthy, recognizably PeptiBloom, materially appropriate, economical, not overpackaged, and scalable.

Premium does not mean excessive packaging.

## DOMAIN BOUNDARY

Physical CX / Fulfillment owns fulfillment-system design: pack architecture, pick/verify/pack sequence, protection strategy, unboxing sequence, packing SOP/checks, fulfillment test planning, packaging-cost model structure, error-proofing requirements, and sanitized cross-domain fulfillment requirements.

It does not own scientific truth/Evidence, product pricing, supplier procurement, inventory accounting, Web/Commerce implementation, canonical Brand identity, label artwork authority, Legal decisions, or Physical Products geometry.

Authority anchors:

- Brand master remains `apps/web/public/brand/logo.png`; do not regenerate it.
- Physical Products / Accessories remains authoritative for physical identity/design/specification/validation under PB-DEC-501/PB-DEC-502.
- WORK 7 / Private Master remains authoritative for private supplier/procurement/inventory/logistics/landed-cost truth.
- Packaging / Labels remains authoritative for packaging/label application and print lifecycle; current Packaging handoff is on draft PR #40 and is not merged canon.
- `DESIGN_SPECIFICATION != PRINT_TEST != PRODUCTION_APPROVED_ARTWORK`.
- `COLD PACK != VALIDATED COLD CHAIN`.
- Fulfillment does not establish `READY_FOR_SALE`.

## A. CURRENT-STATE FULFILLMENT MAP v0.1

Classification vocabulary for this phase: VERIFIED / PROPOSED / LEGACY / UNKNOWN / BLOCKED.

| Element | State | Current evidence / interpretation | Fulfillment consequence |
|---|---|---|---|
| Canonical PeptiBloom master logo | VERIFIED | `apps/web/public/brand/logo.png` is OFFICIAL / MASTER / DO NOT REGENERATE in current canon | May be consumed only as approved Brand input; placement/application still requires applicable Brand/Packaging lifecycle |
| Physical Products authority | VERIFIED | PB-DEC-501 / PB-DEC-502; clean-sheet pipeline G0-G6 | Fulfillment consumes validated physical envelopes/limitations; does not invent geometry |
| Fabrication capability | VERIFIED | Bambu Lab P1S + AMS, multicolor optional | Capability exists, but no fulfillment accessory is thereby approved or validated |
| Legacy authoritative geometry | VERIFIED absent | Recovery closed with zero recovered authoritative geometry | Historical dimensions/mechanisms cannot be used as fulfillment fit truth |
| Bloom Caps | PROPOSED / BLOCKED for pack finalization | Current Control Plane records PRE-G0; CAD unauthorized | Can be represented only as future bundle dependency; no package dimensions may be frozen around it |
| Vial Vault / other accessories | UNKNOWN for current fulfillment spec | Physical family is referenced in project context, but no current validated shipping envelope/spec was found in the reviewed Control Plane | Request sanitized validated dimensions, mass, fragility and packaging limitations from Physical Products when available |
| Product/vial containers | UNKNOWN | No current public fulfillment-level container BOM, validated dimensions, mass, fragility/leakage constraints or shipment presentation was found | S/M dimensions and protection cannot be frozen |
| Supplier boxes / inbound packaging | UNKNOWN / PRIVATE DEPENDENCY | Supplier/logistics truth belongs to WORK 7; public Control Plane must remain sanitized | Need only sanitized reuse suitability, dimensions/material class where permitted; do not copy supplier identity/cost |
| Product labels | PROPOSED / RECONCILIATION | Packaging Issue #19 and draft PR #40 preserve fixed-vs-variable architecture as candidate; no production artwork authorized | Packing SOP can require correct approved label later, but cannot specify current artwork/content as final |
| Thank You Round Label `PB-VA-002` | PROPOSED | Draft PR #44 records real export provenance; status DESIGN_CANDIDATE / ARTIFACT_REVIEW_PENDING; NOT_PRINT_TESTED | Candidate for one intentional unboxing moment only; not production-approved |
| PB Floral DNA Mark `PB-VA-001` | PROPOSED | Draft PR #44: Brand decorative derivative candidate, not primary logo, not APPROVED_DERIVATIVE | Do not use as canonical logo or production mark yet |
| Protective materials | UNKNOWN | No approved fulfillment BOM found | Must be selected by physical test, right-sizing, damage risk and disposal considerations |
| Thermal materials / cold-chain configuration | BLOCKED for guarantee; UNKNOWN for design | No authoritative product-specific storage requirement or validated shipper/test record found | `COLD-CHAIN GUARANTEE = NOT ESTABLISHED`; study/test may proceed once storage requirements arrive from authority |
| Shipping cartons / mailers | UNKNOWN | No approved dimensions/material/BOM found | Evaluate configurations first; do not invent dimensions |
| Inserts / customer documentation | UNKNOWN | No approved fulfillment insert set found | Information hierarchy can be designed, content must come from owning domains |
| Packing documentation / SOP | UNKNOWN -> IN DEVELOPMENT | No current durable fulfillment SOP found | Phase 1 will establish draft process/checklist without inventing regulatory controls |
| Fulfillment printers/equipment | PARTIAL VERIFIED | Bambu Lab P1S + AMS verified for fabrication; historical NIIMBOT observations remain unverified implementation evidence in Packaging | Do not assume NIIMBOT model/media/color capability as current fulfillment equipment until verified |
| Packaging costs | UNKNOWN / PRIVATE DEPENDENCY | Actual procurement/landed-cost truth belongs to WORK 7 / financial-inventory authority | Cost model fields may be defined; actual values remain UNKNOWN until supplied through proper interface |
| Shipping provider/service assumptions | UNKNOWN | No approved shipping configuration/provider found in reviewed canon | Do not optimize dimensions around a specific carrier/service yet |
| Marketplace/Commerce fulfillment promise | BLOCKED / OUTSIDE AUTHORITY | Commerce production/provider/shipping selection is unresolved; READY_FOR_SALE remains fail-closed | Fulfillment design remains non-production and provider-neutral |

## CUSTOMER JOURNEY v0.1

`ORDER READY -> PICK -> VERIFY -> PACK -> PROTECT -> BRAND -> DOCUMENT -> CLOSE -> FINAL CHECK -> DISPATCH -> DELIVERY -> OPENING -> PRODUCT INSPECTION -> DISPOSAL / REUSE`

Current control logic:

| Stage | Fulfillment action | Required input | Primary failure | Customer-visible consequence | Candidate control |
|---|---|---|---|---|---|
| ORDER READY | accept only fulfillment-eligible order instruction | order ID, approved product identity, quantity, presentation, storage class | order enters pack flow without sufficient eligibility/data | wrong/unshippable order | fail-closed readiness fields from upstream |
| PICK | retrieve staged items | product/SKU mapping, quantity, lot/batch where applicable | wrong item/quantity/lot | incorrect contents | pick list + staged bins |
| VERIFY | verify identity/condition | authoritative product/label/lot facts | mismatch or damaged item passes | trust/safety failure | two-point identity/condition check |
| PACK | select configuration and arrange contents | pack-config ID, physical envelope, bundle rules | improvised/oversized pack | inconsistent experience/cost | small standardized config set |
| PROTECT | immobilize and isolate fragile items | fragility, leak, crush, thermal constraints | movement/impact/condensation | breakage, scuff, leakage | fit/void-fill rule + test evidence |
| BRAND | add only approved intentional brand touchpoint | approved Brand/Packaging asset | clutter or unapproved artwork | cheap/confusing impression | one-primary-moment rule |
| DOCUMENT | include permitted information | approved customer-facing docs | missing/wrong/private material | confusion/privacy breach | document allow-list by config/order |
| CLOSE | seal package | closure method | opening/tamper/closure failure | damaged/open parcel | closure SOP + visual check |
| FINAL CHECK | reconcile packed parcel | expected contents/weight/config | latent omission/mix-up | incorrect shipment | checklist + weight sanity + optional photo-before-close |
| DISPATCH | hand off to approved service | address/service/handling requirements | wrong service/handling | delay/temperature/damage | dispatch rule from Commerce/operations |
| DELIVERY | carrier transit | validated pack performance | drop/compression/weather exposure | damaged outer/inner pack | physical test program + incident logging |
| OPENING | deliberate reveal | opening architecture | difficult/messy/excessive opening | frustration/waste | simple opening sequence, restrained materials |
| PRODUCT INSPECTION | customer sees products intact and legible | validated protection/presentation | hidden damage/label rub | loss of trust | reveal arrangement + visible condition |
| DISPOSAL / REUSE | make material fate understandable | substantiated material facts | confusing mixed waste | unnecessary waste/friction | minimize material types; instructions only when substantiated |

## FIRST PACK-CONFIGURATION HYPOTHESIS

These are configuration hypotheses, not approved specifications.

### S / MINI — PROPOSED

Intended hypothesis: one small/simple ambient shipment whose validated physical envelope permits a compact parcel.

Design intent: smallest right-sized protective outer package; minimal void fill; one deliberate customer-facing brand moment; no decorative layer that does not protect, inform or materially improve opening.

Dimensions, mass limits, protection construction and material specification: UNKNOWN pending actual product envelope and tests.

### M / STANDARD — PROPOSED

Intended hypothesis: multi-item ambient shipment or a mixed order that exceeds S/MINI while remaining within a repeatable standard arrangement.

Design intent: compartment/retention strategy that prevents item-to-item impact; consistent reveal order; modular paper-based separation preferred for study where performance allows.

Dimensions, maximum contents and material specification: UNKNOWN pending order-pattern and physical-envelope evidence.

### COLD — BLOCKED FOR OPERATIONAL USE / STUDY ALLOWED

Separate validation problem. No guarantee exists.

Requires authoritative product storage/temperature requirements, transit-duration assumptions, seasonal ambient cases, coolant/insulation design, condensation and freeze-risk assessment, and bench/real-shipment temperature evidence before operational use.

### BUNDLE — PROPOSED

Intended hypothesis: accessory + compatible other item(s), only after Physical Products supplies validated accessory envelope/fragility/limitations.

Must test whether an accessory can safely serve a protective function rather than adding a second redundant package. This is a question for evidence/testing, not an assumption.

### LARGE — NOT JUSTIFIED YET

Do not create a LARGE standard until real catalog/order patterns demonstrate a need.

## UNBOXING ARCHITECTURE HYPOTHESIS

`OUTER SHIPPING LAYER -> CLEAN OPEN -> ONE INTENTIONAL THANK-YOU / BRAND MOMENT -> REQUIRED/PERMITTED INFORMATION -> PROTECTED PRODUCT REVEAL -> ACCESSORY REVEAL IF PRESENT -> PRODUCT ACCESS`

Principles:

- protection and correctness precede decorative theater;
- one strong brand moment is preferred over repeated logos;
- customer-facing documentation must not expose private provenance/procurement information;
- no dead/decorative QR;
- no unapproved scientific/regulatory/authenticity semantics;
- reduce material count and avoid oversized packages;
- favor easy manual opening without compromising transit integrity.

`PB-VA-002` is a candidate for the intentional thank-you moment, but remains NOT_PRINT_TESTED and not production-approved.

## BENCHMARK PATTERNS — 2026-08-21 RESEARCH

Adjacent DTC/beauty and parcel-packaging sources consistently support several patterns worth testing rather than copying:

1. E-commerce packaging should prioritize transit protection and right-sizing over retail shelf theater.
2. Fragile/multi-item orders benefit from positive retention or compartmentalization that prevents item-to-item movement.
3. Interior/unboxing branding can create a premium moment without covering the external shipper in decoration.
4. Paper/corrugated/molded-pulp retention is worth evaluating where it can meet protection requirements and reduce mixed-material waste.
5. Pack time and material count should be treated as design variables, not afterthoughts.
6. Real transport testing is required before treating a beautiful configuration as operationally valid.
7. Temperature-sensitive parcel design requires a separate validated thermal architecture; coolant presence alone is not proof of cold-chain performance.

These are external benchmark observations, not PeptiBloom canon or supplier selection.

## INITIAL TEST MATRIX

No test result is asserted here.

| Test | Initial method hypothesis | Pass criterion status |
|---|---|---|
| DIMENSIONAL FIT | pack real intended contents in candidate retention system; inspect clearance/compression/movement | TO DEFINE from physical requirements |
| SHAKE / MOVEMENT | controlled multi-axis manual movement before opening | TO DEFINE; objective movement/damage threshold required |
| DROP | staged parcel drops at defined orientations/heights | TO DEFINE before test; no informal success may be called validated |
| COMPRESSION | controlled top/side load proxy | TO DEFINE |
| LABEL RUB | repeated contact against actual adjacent materials | TO DEFINE with Packaging |
| LABEL MOISTURE | controlled moisture/condensation exposure | TO DEFINE with Packaging/material authority |
| CONDENSATION / LEAK | thermal/moisture bench scenario where applicable | BLOCKED until product/storage constraints known |
| TEMPERATURE / FREEZE RISK | instrumented shipper bench and later real-shipment study | BLOCKED until authoritative temperature range exists |
| PACKING TIME | timed repeated assembly by defined SOP | TO DEFINE after configuration prototype exists |
| CUSTOMER OPENING | observed opening without coaching; note friction, damage and waste | TO DEFINE after safe prototype exists |

All future records must distinguish DESIGN ASSUMPTION / SYNTHETIC TEST / BENCH TEST / REAL SHIPMENT TEST / CUSTOMER FEEDBACK / VALIDATED RESULT.

## PACKAGING / FULFILLMENT COST MODEL STRUCTURE

Define, but do not fabricate values:

`OUTER PACKAGE + PROTECTION + THERMAL MATERIALS + LABELS/STICKERS + INSERTS + PRINTING + SEALING + CONSUMABLES + ACCESSORY PACKAGING + ESTIMATED PACKING LABOR = PACKAGING / FULFILLMENT COST PER ORDER`

Additional fields for later analysis: pack configuration, packaging weight, storage footprint, assembly time, cost per shipped item, packaging cost as % of order value, avoidable packaging cost, and incremental premium-presentation cost.

Actual cost values remain UNKNOWN until supplied by the authoritative financial/WORK 7 interface.

## CROSS-DOMAIN INFORMATION REQUIREMENTS

### FULFILLMENT -> WORK 7 / PRIVATE MASTER

Sanitized facts required; do not expose supplier identity, private prices, tracking, invoices, payment data or private records:

- fulfillment-facing product/SKU/order identity mapping when approved;
- quantity and lot/batch verification fields required for pick/pack;
- storage/handling classification sourced from the proper authority;
- sanitized item mass and inbound/supplier-packaging reuse suitability where operationally available;
- actual packaging-component cost inputs through an approved private interface;
- shipping-service/dispatch facts once operationally selected.

### FULFILLMENT -> PACKAGING / LABELS

- current approved label/artwork state per application;
- print-tested vs production-approved distinction;
- physical label dimensions/substrate/adhesive/finish once validated;
- disposition of `PB-VA-002` for fulfillment use after artifact/print review;
- customer-facing insert/label information hierarchy and approved QR purpose if any;
- label rub/moisture test requirements and acceptance criteria.

### FULFILLMENT -> BRAND / VISUAL

- approved asset/derivative set usable for physical fulfillment;
- rules for restrained physical brand application;
- status of `PB-VA-001` and any future approved derivative relevant to fulfillment;
- photography coordination after real pack configurations are validated.

### FULFILLMENT -> PHYSICAL PRODUCTS / HARDWARE

For each physical item/accessory intended to ship:

- stable physical identity/variant reference suitable for sanitized coordination;
- validated external envelope and mass;
- fragile/no-load/no-contact surfaces;
- orientation constraints;
- abrasion/impact sensitivity;
- whether any accessory can safely act as protective packaging, supported by test evidence;
- current validation state and limitations.

No geometry change is requested.

### FUTURE DEPENDENCIES

Evidence/Legal must supply any product-specific storage requirement, permitted customer-facing scientific/QC information, mandatory legal documentation or public Lot Passport semantics. Fulfillment will not invent these.

## FAILURE / RISK REGISTER — INITIAL

| Risk | Current state | Control direction |
|---|---|---|
| improvised pack per order | OPEN | standardize smallest viable config set |
| wrong item/quantity/lot | OPEN | pick/verify checklist + staged workflow |
| item movement/breakage | UNKNOWN performance | retention + physical testing |
| packaging too large/heavy | OPEN | right-size after envelope/order evidence |
| brand clutter | OPEN | one-primary-moment rule |
| unapproved Thank You label used as production artwork | CONTROLLED BY STATUS | keep PB-VA-002 candidate-only until print/artwork approval |
| private WORK 7 data exposed in inserts/QR | PROHIBITED | explicit public/private provenance separation |
| cold pack mistaken for validated cold chain | PROHIBITED | separate COLD validation gate |
| accessory dimensions assumed from legacy renders | PROHIBITED | consume current Physical Products evidence only |
| sustainability claim without substantiation | PROHIBITED | describe material/disposal facts only when evidenced |

## NEXT REVERSIBLE INCREMENT

1. Receive sanitized cross-domain factual inputs through existing coordination paths.
2. Build a requirements-only S/M prototype specification without dimensions until actual shippable envelopes are available.
3. Draft the packing SOP/checklist around fail-closed identity/condition/document/configuration checks.
4. Define objective pass criteria for the first ambient bench-test set once actual contents and candidate materials exist.
5. Keep COLD separate and blocked for operational use until authoritative storage requirements and thermal validation inputs exist.
6. Do not create LARGE unless order-pattern evidence justifies it.

## OWNER_REQUIRED

`OWNER_REQUIRED = NO`

No genuine Owner tradeoff is required for the current reconciliation, benchmarking, requirements gathering, SOP drafting or reversible prototype/test design. Missing cross-domain facts should be retrieved/routed, not escalated to Owner.

## CURRENT BLOCKERS

No blocker prevents useful Phase 1 work.

Specific production-ready pack specifications remain blocked by missing authoritative physical envelopes, approved artwork/label states, operational order/shipping facts, actual cost inputs and — for COLD — authoritative storage requirements plus thermal validation.

These are cross-domain dependencies, not a reason to stop current non-production work.
