import uuid

from django.db import models

from products.models import SKU


class Supplier(models.Model):
    class Status(models.TextChoices):
        ACTIVE = "ACTIVE", "Active"
        REVIEW = "REVIEW", "Review"
        SUSPENDED = "SUSPENDED", "Suspended"
        RETIRED = "RETIRED", "Retired"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    supplier_code = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=128, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    status = models.CharField(max_length=16, choices=Status.choices)
    notes = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ["supplier_code"]

    def __str__(self):
        return self.supplier_code


class Manufacturer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    manufacturer_code = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=128, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    is_active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["manufacturer_code"]

    def __str__(self):
        return self.manufacturer_code


class Reception(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    supplier = models.ForeignKey(Supplier, on_delete=models.PROTECT, related_name="receptions")
    receipt_code = models.CharField(max_length=64, unique=True)
    received_at = models.DateTimeField()
    status = models.CharField(max_length=40)
    notes = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ["receipt_code"]

    def __str__(self):
        return self.receipt_code


class Batch(models.Model):
    class VerificationStatus(models.TextChoices):
        VERIFIED = "VERIFIED", "Verified"
        PARTIAL = "PARTIAL", "Partial"
        UNVERIFIED = "UNVERIFIED", "Unverified"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reception = models.ForeignKey(Reception, on_delete=models.PROTECT, related_name="batches")
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.PROTECT, related_name="batches")
    manufacturer_lot = models.CharField(max_length=128)
    verification_status = models.CharField(max_length=16, choices=VerificationStatus.choices)

    class Meta:
        ordering = ["manufacturer_lot"]

    def __str__(self):
        return self.manufacturer_lot


class StockUnit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sku = models.ForeignKey(SKU, on_delete=models.PROTECT, related_name="stock_units")
    batch = models.ForeignKey(Batch, on_delete=models.PROTECT, related_name="stock_units")
    location = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=40)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return str(self.id)


class Movement(models.Model):
    class MovementType(models.TextChoices):
        RECEIVED = "RECEIVED", "Received"
        AVAILABLE = "AVAILABLE", "Available"
        RESERVED = "RESERVED", "Reserved"
        DISPATCHED = "DISPATCHED", "Dispatched"
        INTERNAL_USE = "INTERNAL_USE", "Internal use"
        SAMPLE = "SAMPLE", "Sample"
        DAMAGED = "DAMAGED", "Damaged"
        LOST = "LOST", "Lost"
        DISPOSED = "DISPOSED", "Disposed"
        CORRECTION = "CORRECTION", "Correction"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    stock_unit = models.ForeignKey(StockUnit, on_delete=models.PROTECT, related_name="movements")
    movement_type = models.CharField(max_length=16, choices=MovementType.choices)
    quantity = models.DecimalField(max_digits=12, decimal_places=3)
    created_at = models.DateTimeField(auto_now_add=True)
    reason = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.movement_type} {self.quantity}"
