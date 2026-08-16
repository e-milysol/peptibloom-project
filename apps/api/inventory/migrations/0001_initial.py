# Generated manually for Operative Core v1.

import uuid

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Manufacturer",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("manufacturer_code", models.CharField(max_length=64, unique=True)),
                ("name", models.CharField(max_length=255)),
                ("country", models.CharField(blank=True, max_length=128, null=True)),
                ("website", models.URLField(blank=True, null=True)),
                ("is_active", models.BooleanField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"ordering": ["manufacturer_code"]},
        ),
        migrations.CreateModel(
            name="Supplier",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("supplier_code", models.CharField(max_length=64, unique=True)),
                ("name", models.CharField(max_length=255)),
                ("country", models.CharField(blank=True, max_length=128, null=True)),
                ("website", models.URLField(blank=True, null=True)),
                ("email", models.EmailField(blank=True, max_length=254, null=True)),
                ("status", models.CharField(choices=[("ACTIVE", "Active"), ("REVIEW", "Review"), ("SUSPENDED", "Suspended"), ("RETIRED", "Retired")], max_length=16)),
                ("notes", models.TextField(blank=True, null=True)),
            ],
            options={"ordering": ["supplier_code"]},
        ),
        migrations.CreateModel(
            name="Reception",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("receipt_code", models.CharField(max_length=64, unique=True)),
                ("received_at", models.DateTimeField()),
                ("status", models.CharField(max_length=40)),
                ("notes", models.TextField(blank=True, null=True)),
                ("supplier", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="receptions", to="inventory.supplier")),
            ],
            options={"ordering": ["receipt_code"]},
        ),
        migrations.CreateModel(
            name="Batch",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("manufacturer_lot", models.CharField(max_length=128)),
                ("verification_status", models.CharField(choices=[("VERIFIED", "Verified"), ("PARTIAL", "Partial"), ("UNVERIFIED", "Unverified")], max_length=16)),
                ("manufacturer", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="batches", to="inventory.manufacturer")),
                ("reception", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="batches", to="inventory.reception")),
            ],
            options={"ordering": ["manufacturer_lot"]},
        ),
        migrations.CreateModel(
            name="StockUnit",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("location", models.CharField(blank=True, max_length=255, null=True)),
                ("status", models.CharField(max_length=40)),
                ("batch", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="stock_units", to="inventory.batch")),
                ("sku", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="stock_units", to="products.sku")),
            ],
            options={"ordering": ["id"]},
        ),
        migrations.CreateModel(
            name="Movement",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("movement_type", models.CharField(choices=[("RECEIVED", "Received"), ("AVAILABLE", "Available"), ("RESERVED", "Reserved"), ("DISPATCHED", "Dispatched"), ("INTERNAL_USE", "Internal use"), ("SAMPLE", "Sample"), ("DAMAGED", "Damaged"), ("LOST", "Lost"), ("DISPOSED", "Disposed"), ("CORRECTION", "Correction")], max_length=16)),
                ("quantity", models.DecimalField(decimal_places=3, max_digits=12)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("reason", models.TextField(blank=True, null=True)),
                ("stock_unit", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="movements", to="inventory.stockunit")),
            ],
            options={"ordering": ["created_at"]},
        ),
    ]
