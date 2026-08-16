from decimal import Decimal

from django.test import TestCase

from documents.models import Document
from inventory.models import Batch, Manufacturer, Reception, Supplier
from products.models import Product, SKU


class DocumentModelTests(TestCase):
    def setUp(self):
        product = Product.objects.create(
            code="PB-GHK",
            name="GHK-Cu",
            is_active=True,
        )
        SKU.objects.create(
            product=product,
            code="PB-GHK-100MG",
            nominal_quantity=Decimal("100.000"),
            unit=SKU.Unit.MG,
            is_active=True,
        )
        supplier = Supplier.objects.create(
            supplier_code="SUP-001",
            name="Supplier 001",
            status=Supplier.Status.ACTIVE,
        )
        manufacturer = Manufacturer.objects.create(
            manufacturer_code="MFG-001",
            name="Manufacturer 001",
            is_active=True,
        )
        self.reception = Reception.objects.create(
            supplier=supplier,
            receipt_code="PBR-20260816-001",
            received_at="2026-08-16T00:00:00Z",
            status="RECEIVED",
        )
        self.batch = Batch.objects.create(
            reception=self.reception,
            manufacturer=manufacturer,
            manufacturer_lot="MFG-LOT-001",
            verification_status=Batch.VerificationStatus.UNVERIFIED,
        )

    def test_document_can_link_to_reception_and_batch(self):
        document = Document.objects.create(
            reception=self.reception,
            batch=self.batch,
            document_type=Document.DocumentType.COA,
            file="documents/coa.pdf",
            verified=False,
        )

        self.assertEqual(document.reception, self.reception)
        self.assertEqual(document.batch, self.batch)

    def test_document_can_exist_without_operational_link_v1(self):
        document = Document.objects.create(
            document_type=Document.DocumentType.OTHER,
            file="documents/other.pdf",
            verified=False,
        )

        self.assertIsNone(document.reception)
        self.assertIsNone(document.batch)
