# PB-PRICE-LIST-RENDERER v1.0

Status: RENDERER FOUNDATION / SAMPLE QA

Supported compositions: AVAILABLE, ON_DEMAND, COMBINED.
Promo block is optional.

All product names, prices, dates, statuses, legal copy and promo text are programmatic data.
Evidence-dependent claims must be supplied only when approved by the application workflow.
AI-generated icon/UI sheets are reference-only and are not used as production masters.
Bloom/Eviden frozen assets are untouched.

The bundled sample uses synthetic placeholder products and prices and is NOT an operational catalogue.

Usage:
python renderer/render_price_list.py --input sample-data/sample_price_list.json --output outputs/combined.pdf --composition COMBINED
