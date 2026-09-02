# PeptiBloom — September 2026 Pricing Policy v1

**Status:** OWNER APPROVED FOR CATALOG / PRICING MASTER DATA

**Effective from:** 2026-09-01

**Currency:** EUR

**Scope:** commercial pricing baseline and pricing policy for September 2026. This document does **not** authorize publication, sale, checkout, scientific claims, regulatory classification, or READY_FOR_SALE status.

## 1. Pricing policy

PeptiBloom pricing from September 2026 follows these rules:

1. **Minimum gross-margin target:** 75% where a verified replacement/landed cost is available.
2. **Target gross-margin band:** 80–85% for normal stocked references, subject to market sanity checks and product-family consistency.
3. **Replacement-cost discipline:** gifts, bonuses, compensation stock and unusually promotional acquisitions are not used as a zero/abnormally-low anchor for public pricing. Public pricing uses a sustainable replacement-cost view.
4. **Presentation consistency:** each concentration/presentation is a separate SKU. Higher presentations should follow a coherent price ladder and normally improve value per mg/ml without forcing a fixed mathematical ratio.
5. **Commercial rounding:** normal September base prices use simple 5 EUR increments unless an explicitly approved exception exists.
6. **Base price and promotion are separate records.** A promotion never overwrites the base price.
7. **Historical prices are retained.** August and earlier prices remain historical/superseded evidence; they are not deleted or silently rewritten.
8. **Private economics stay private.** Supplier identities, acquisition prices, fees, landed costs, margins, funding details and procurement evidence must never be exported through public catalog artefacts.
9. **Market benchmarks are advisory only.** Competitor or supplier tariff prices are not authoritative public PVP inputs.
10. **Pricing does not imply publication authorization.** A SKU may have an approved commercial price while remaining unpublished, unavailable for checkout, incoming/not-yet-received, or legally/commercially gated.

## 2. September 2026 base-price baseline

| Product | Presentation | Base price EUR |
| --- | --- | ---: |
| Retatrutide | 10 mg | 65 |
| Retatrutide | 40 mg | 160 |
| Tirzepatide | 10 mg | 80 |
| Tesamorelin | 5 mg | 40 |
| Tesamorelin | 10 mg | 70 |
| Ipamorelin | 5 mg | 35 |
| KPV | 10 mg | 35 |
| SS-31 | 10 mg | 45 |
| MOTS-c | 10 mg | 40 |
| 5-Amino-1MQ | 50 mg | 50 |
| NAD+ | 1000 mg | 80 |
| GHK-Cu | 50 mg | 20 |
| GHK-Cu | 100 mg | 30 |
| Glutathione | 1200 mg | 35 |
| Glutathione | 1500 mg | 40 |
| BPC-157 | 10 mg | 45 |
| SNAP-8 | 10 mg | 25 |
| CJC-1295 without DAC | 2 mg | 35 |
| Cerebrolysin | 60 mg | 40 |
| LIPO-C / Fat Blaster | 10 ml | 50 |
| Lemon Bottle | 10 ml | 35 |
| Hair / Nails Blend | 10 ml | 45 |
| BAC Water | 3 ml | 10 |
| BAC Water | 10 ml | 15 |
| Selank | 10 mg | 35 |
| Semax | 10 mg | 35 |
| FOXO1-DRI | 10 mg | 45 |
| AHK-Cu | 100 mg | 35 |
| Epithalon | 10 mg | 30 |

## 3. Commercial-state separation for the September catalogue

Pricing and commercial/public state are independent dimensions.

For catalogue/master-data handling, a priced SKU must also carry a separate availability/publication state. At minimum distinguish:

- `AVAILABLE` — physically received/accepted stock may be represented as available, subject to all other commercial/legal gates.
- `INCOMING` / `ON_ORDER` — purchased/expected but not physically received; **must not** be counted as available inventory.
- `OUT_OF_STOCK` — known catalogue reference with no currently available physical stock.
- `NOT_CURRENTLY_LISTED` / `UNPUBLISHED` — internal/priced identity not currently exposed publicly.

The five September additions **Selank 10 mg, Semax 10 mg, FOXO1-DRI 10 mg, AHK-Cu 100 mg and Epithalon 10 mg** have owner-approved base prices for September planning, but their price approval alone does not make them `AVAILABLE` or authorize public publication. Their actual state must be sourced from the operational inventory/publication gates rather than inferred from this pricing document.

## 4. Historical/promotion handling

- Previous August prices remain historical evidence and must not be deleted.
- September 2026 is the first durable baseline persisted in the current private SKU price-history model; earlier prices must not be backfilled with invented validity dates or provenance.
- The prior Retatrutide 40 mg + BAC Water 10 ml launch offer is treated as a **promotion record**, not as the Retatrutide 40 mg base price.
- Any promotion active after 2026-09-01 must have explicit lifecycle state and must not silently change `BASE_PRICE`.
- Free-shipping policy is a separate commercial rule and is not embedded in SKU base pricing.

## 5. Required durable fields

The governed pricing/catalogue system should represent, at minimum:

- `SKU`
- `BASE_PRICE`
- `CURRENCY`
- `EFFECTIVE_FROM`
- `EFFECTIVE_TO` or current-state marker
- `PRICE_POLICY_VERSION`
- `PRICE_STATUS` (`CURRENT`, `HISTORICAL`, `SUPERSEDED`)
- separate availability/inventory state
- separate publication/listing state
- promotion linkage where applicable

Private Master may additionally own private cost/replacement/procurement economics, but those values do not belong in public Catalog/Pricing exports.

## 6. September transition rule

September is a clean pricing baseline. The 29 values in section 2 are the owner-approved September base prices for Catalog/Pricing master data.

Private operational persistence has been completed for the September baseline under the current private price-history mechanism; public artefacts must consume only sanitized commercial fields and must not expose private procurement/funding/cost data.

No public PDF, public catalogue payload, checkout, sale authorization, scientific claim, availability flag or publication flag is implied by this pricing approval.