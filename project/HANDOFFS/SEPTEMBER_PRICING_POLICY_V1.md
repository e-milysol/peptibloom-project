# PeptiBloom — September 2026 Pricing Policy v1

**Status:** OWNER APPROVED FOR CATALOG / PRICING MASTER DATA

**Effective from:** 2026-09-01

**Currency:** EUR

**Scope:** commercial pricing baseline and pricing policy for September 2026. This document does **not** authorize publication, sale, checkout, scientific claims, regulatory classification, or READY_FOR_SALE status.

## 1. Pricing policy

PeptiBloom pricing from September 2026 follows these rules:

1. **Minimum gross-margin target:** 75% where a verified replacement/landed cost is available.
2. **Target gross-margin band:** 80–85% for normal stocked references, subject to market sanity checks and product-family consistency.
3. **Replacement-cost discipline:** gifts, bonuses and compensation stock are not priced from zero acquisition cost. Public pricing uses a sustainable replacement-cost view.
4. **Presentation consistency:** each concentration/presentation is a separate SKU. Higher presentations should follow a coherent price ladder and normally improve value per mg/ml without forcing a fixed mathematical ratio.
5. **Commercial rounding:** normal September base prices use simple 5 EUR increments unless an explicitly approved exception exists.
6. **Base price and promotion are separate records.** A promotion never overwrites the base price.
7. **Historical prices are retained.** August and earlier prices become historical/superseded records; they are not deleted or silently rewritten.
8. **Private economics stay private.** Supplier identities, acquisition prices, fees, landed costs, margins and procurement evidence must never be exported through public catalog artefacts.
9. **Market benchmarks are advisory only.** Competitor or supplier tariff prices are not authoritative public PVP inputs.
10. **Pricing does not imply publication authorization.** A SKU may have an approved commercial price while remaining unpublished, unavailable for checkout, or legally/commercially gated.

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

## 3. Historical/promotion handling

- Previous August prices remain historical and must not be deleted.
- The prior Retatrutide 40 mg + BAC Water 10 ml launch offer is treated as a **promotion record**, not as the Retatrutide 40 mg base price.
- Any promotion active after 2026-09-01 must have explicit lifecycle state and must not silently change `BASE_PRICE`.
- Free-shipping policy is a separate commercial rule and is not embedded in SKU base pricing.

## 4. Required durable fields

The governed pricing system should represent, at minimum:

- `SKU`
- `BASE_PRICE`
- `CURRENCY`
- `EFFECTIVE_FROM`
- `EFFECTIVE_TO` or current-state marker
- `PRICE_POLICY_VERSION`
- `PRICE_STATUS` (`CURRENT`, `HISTORICAL`, `SUPERSEDED`)
- promotion linkage where applicable

Private Master may additionally own private cost/replacement economics, but those values do not belong in public Catalog/Pricing exports.

## 5. September transition rule

September is a clean pricing baseline. Existing historical records are preserved, while the values in section 2 become the owner-approved September base-price candidate for persistence in the Catalog/Pricing master and corresponding private SKU price records where the existing authority permits them.

No public PDF, public catalogue payload, checkout, sale authorization or publication flag is implied by this approval.
