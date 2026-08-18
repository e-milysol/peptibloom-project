# Analytics Measurement Contract v1

Status: `APPROVED` — restoration of previously approved Analytics domain contract.

This artifact does not create a new Owner decision and does not authorize production instrumentation.

## Production gates

- `ANALYTICS_CONTRACT_APPROVED = APPROVED`
- `WEB_TECHNICAL_VALIDATION_APPROVED = PENDING`
- `LEGAL_PRIVACY_REVIEW_APPROVED = PENDING`
- `OWNER_PRODUCTION_AUTHORIZATION = PENDING`
- `PRODUCTION_INSTRUMENTATION = BLOCKED`

All required production gates must be satisfied before production instrumentation may be enabled.

## Event authority

The authoritative Analytics v1 event registry is `project/analytics/analytics-events-v1.json`.

Canonical calculator reset event: `reset`.

`calculator_reset` is non-canonical and is not an alias.

Retired terminology records replacement history only. Retired names must not be accepted, emitted, normalized, or treated as production aliases.

## Calculator abandon semantics

`calculator_abandon = best-effort / inferred within page session`

`calculator_abandon` represents an inferred page-session behavior only. It must never be represented as an individual fact or as definitive evidence of user intent.

## Privacy and data boundary

Product Analytics must not receive or persist:

- health or wellness values;
- inventory content;
- routine content;
- notes;
- persistent user identifiers.

Analytics instrumentation must remain privacy-safe and limited to the approved event contract. This restoration does not expand the categories of data that may be collected.

## Retention and persistence

- `25 months = NOT APPROVED`
- `13 months = PROPOSED / LEGAL REVIEW`
- `pb_analytics_daily_v1 = DO NOT CREATE`
- counts `<5` must be suppressed or grouped before any future aggregate persistence.

No aggregate persistence artifact or table is authorized by this contract restoration.

## Activation boundary

No production Analytics instrumentation may be enabled by this restoration. Web technical validation, Legal/Privacy review, and Owner production authorization remain pending gates.
