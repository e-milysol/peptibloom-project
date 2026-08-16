from decimal import Decimal

from django.test import TestCase

from inventory.models import Batch, Manufacturer, Movement, Reception, StockUnit, Supplier
from products.models import Product, SKU


class InventoryModelTests(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            code="PB-GHK",
            name="GHK-Cu",
            is_active=True,
        )
        self.sku = SKU.objects.create(
            product=self.product,
            code="PB-GHK-100MG",
            nominal_quantity=Decimal("100.000"),
            unit=SKU.Unit.MG,
            is_active=True,
        )
        self.supplier = Supplier.objects.create(
            supplier_code="SUP-001",
            name="Supplier 001",
            status=Supplier.Status.ACTIVE,
        )
        self.manufacturer = Manufacturer.objects.create(
            manufacturer_code="MFG-001",
            name="Manufacturer 001",
            is_active=True,
        )
        self.reception = Reception.objects.create(
            supplier=self.supplier,
            receipt_code="PBR-20260816-001",
            received_at="2026-08-16T00:00:00Z",
            status="RECEIVED",
        )
        self.batch = Batch.objects.create(
            reception=self.reception,
            manufacturer=self.manufacturer,
            manufacturer_lot="MFG-LOT-001",
            verification_status=Batch.VerificationStatus.UNVERIFIED,
        )

    def test_stock_unit_does_not_persist_available_quantity(self):
        field_names = [field.name for field in StockUnit._meta.fields]

        self.assertNotIn("available_quantity", field_names)

    def test_movement_records_quantity_against_stock_unit(self):
        stock_unit = StockUnit.objects.create(
            sku=self.sku,
            batch=self.batch,
            status="AVAILABLE",
        )
        movement = Movement.objects.create(
            stock_unit=stock_unit,
            movement_type=Movement.MovementType.RECEIVED,
            quantity=Decimal("1.000"),
        )

        self.assertEqual(movement.stock_unit, stock_unit)
        self.assertEqual(movement.quantity, Decimal("1.000"))

    def test_no_batch_unique_constraint_is_defined(self):
        constraint_names = [constraint.name for constraint in Batch._meta.constraints]

        self.assertEqual(constraint_names, [])
