# Generated manually for Operative Core v1.

import uuid

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("inventory", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Document",
            fields=[
                ("id", models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ("document_type", models.CharField(choices=[("COA", "COA"), ("INVOICE", "Invoice"), ("PHOTO", "Photo"), ("TECHNICAL", "Technical"), ("SHIPPING", "Shipping"), ("REGULATORY", "Regulatory"), ("OTHER", "Other")], max_length=16)),
                ("file", models.FileField(upload_to="documents/")),
                ("source", models.TextField(blank=True, null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("verified", models.BooleanField()),
                ("batch", models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name="documents", to="inventory.batch")),
                ("reception", models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name="documents", to="inventory.reception")),
            ],
            options={"ordering": ["created_at"]},
        ),
    ]
