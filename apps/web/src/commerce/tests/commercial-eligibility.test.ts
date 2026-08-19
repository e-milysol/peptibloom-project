import type { CommerceProduct } from "../domain/types.js";
import { MockCommerceProvider } from "../providers/mock/MockCommerceProvider.js";
import { syntheticProducts } from "../providers/mock/fixtures.js";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`ASSERTION_FAILED: ${message}`);
}

const context = { locale: "en" as const, currency: "EUR" as const };

function cloneFixtures(): CommerceProduct[] {
  return structuredClone(syntheticProducts);
}

{
  const fixtures = cloneFixtures();
  const provider = new MockCommerceProvider(fixtures);
  const cart = await provider.createCart(context);
  await provider.addCartLine(cart.id, "mock-variant-alpha-1", 1, context);

  const product = fixtures.find((item) => item.id === "mock-product-alpha")!;
  product.commercialEligibility = "BLOCKED";

  const checkout = await provider.getCheckoutAction(cart.id, context);
  assert(
    checkout.kind === "UNAVAILABLE" && checkout.reason === "COMMERCIAL_ELIGIBILITY_BLOCKED",
    "checkout revalidates eligibility and blocks stale cart",
  );
}

{
  const fixtures = cloneFixtures();
  const provider = new MockCommerceProvider(fixtures);
  const cart = await provider.createCart(context);
  await provider.addCartLine(cart.id, "mock-variant-alpha-1", 1, context);

  const variant = fixtures[0]!.variants.find((item) => item.id === "mock-variant-alpha-1")!;
  variant.availability = "OUT_OF_STOCK";

  const checkout = await provider.getCheckoutAction(cart.id, context);
  assert(
    checkout.kind === "UNAVAILABLE" && checkout.reason === "VARIANT_NOT_PURCHASABLE",
    "checkout revalidates availability and blocks stale cart",
  );
}

{
  const fixtures = cloneFixtures();
  const provider = new MockCommerceProvider(fixtures);
  const cart = await provider.createCart(context);
  await provider.addCartLine(cart.id, "mock-variant-alpha-1", 1, context);

  const product = fixtures.find((item) => item.id === "mock-product-alpha")!;
  product.commercialEligibility = "UNKNOWN";

  const checkout = await provider.getCheckoutAction(cart.id, context);
  assert(
    checkout.kind === "UNAVAILABLE" && checkout.reason === "COMMERCIAL_ELIGIBILITY_UNKNOWN",
    "unknown commercial eligibility fails closed",
  );
}

console.log("commercial-eligibility.test.ts PASS");
