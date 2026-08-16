import uuid

from django.db import models


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["code"]

    def __str__(self):
        return self.code


class SKU(models.Model):
    class Unit(models.TextChoices):
        MG = "MG", "mg"
        MCG = "MCG", "mcg"
        ML = "ML", "ml"
        UNIT = "UNIT", "unit"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.PROTECT, related_name="skus")
    code = models.CharField(max_length=64, unique=True)
    nominal_quantity = models.DecimalField(max_digits=12, decimal_places=3)
    unit = models.CharField(max_length=8, choices=Unit.choices)
    is_active = models.BooleanField()

    class Meta:
        ordering = ["code"]

    def __str__(self):
        return self.code
