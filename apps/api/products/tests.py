from decimal import Decimal

from django.test import TestCase

from products.models import Product, SKU


class ProductModelTests(TestCase):
    def test_product_and_sku_can_be_created(self):
        product = Product.objects.create(
            code="PB-GHK",
            name="GHK-Cu",
            is_active=True,
        )

        sku = SKU.objects.create(
            product=product,
            code="PB-GHK-100MG",
            nominal_quantity=Decimal("100.000"),
            unit=SKU.Unit.MG,
            is_active=True,
        )

        self.assertEqual(str(product), "PB-GHK")
        self.assertEqual(str(sku), "PB-GHK-100MG")
        self.assertEqual(sku.product, product)

    def test_unit_enum_is_limited_to_operative_core_v1_values(self):
        self.assertEqual(
            [choice[0] for choice in SKU.Unit.choices],
            ["MG", "MCG", "ML", "UNIT"],
        )
