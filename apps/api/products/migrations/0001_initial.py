# Generated manually for Operative Core v1.

import uuid

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("code", models.CharField(max_length=64, unique=True)),
                ("name", models.CharField(max_length=255)),
                ("is_active", models.BooleanField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"ordering": ["code"]},
        ),
        migrations.CreateModel(
            name="SKU",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("code", models.CharField(max_length=64, unique=True)),
                ("nominal_quantity", models.DecimalField(decimal_places=3, max_digits=12)),
                ("unit", models.CharField(choices=[("MG", "mg"), ("MCG", "mcg"), ("ML", "ml"), ("UNIT", "unit")], max_length=8)),
                ("is_active", models.BooleanField()),
                ("product", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name="skus", to="products.product")),
            ],
            options={"ordering": ["code"]},
        ),
    ]
