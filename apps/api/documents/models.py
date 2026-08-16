import uuid

from django.db import models

from inventory.models import Batch, Reception


class Document(models.Model):
    class DocumentType(models.TextChoices):
        COA = "COA", "COA"
        INVOICE = "INVOICE", "Invoice"
        PHOTO = "PHOTO", "Photo"
        TECHNICAL = "TECHNICAL", "Technical"
        SHIPPING = "SHIPPING", "Shipping"
        REGULATORY = "REGULATORY", "Regulatory"
        OTHER = "OTHER", "Other"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reception = models.ForeignKey(
        Reception,
        on_delete=models.PROTECT,
        related_name="documents",
        null=True,
        blank=True,
    )
    batch = models.ForeignKey(
        Batch,
        on_delete=models.PROTECT,
        related_name="documents",
        null=True,
        blank=True,
    )
    document_type = models.CharField(max_length=16, choices=DocumentType.choices)
    file = models.FileField(upload_to="documents/")
    source = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField()

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"{self.document_type} {self.id}"
