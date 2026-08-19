import { MockCommerceProvider } from "../providers/mock/MockCommerceProvider.js";
import { syntheticProducts } from "../providers/mock/fixtures.js";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`ASSERTION_FAILED: ${message}`);
}

async function expectReject(
  action: () => Promise<unknown>,
  expectedMessage: string,
): Promise<void> {
  try {
    await action();
  } catch (error) {
    assert(error instanceof Error, "rejection must be an Error");
    assert(error.message === expectedMessage, `expected ${expectedMessage}, got ${error.message}`);
    return;
  }
  throw new Error(`ASSERTION_FAILED: expected rejection ${expectedMessage}`);
}

const context = { locale: "es" as const, currency: "EUR" as const };
const provider = new MockCommerceProvider(structuredClone(syntheticProducts));

const products = await provider.listProducts(context);
assert(products.every((product) => product.listingState === "VISIBLE"), "only visible products are listed");
assert((await provider.getProduct("mock-hidden-object", context)) === null, "hidden product is not retrievable");

let cart = await provider.createCart(context);
cart = await provider.addCartLine(cart.id, "mock-variant-alpha-1", 2, context);
assert(cart.lines.length === 1, "cart has one normalized line");
assert(cart.subtotal.amountMinor === 2400, "subtotal is computed from normalized price and quantity");

cart = await provider.updateCartLine(cart.id, cart.lines[0]!.id, 3, context);
assert(cart.subtotal.amountMinor === 3600, "update recalculates subtotal server-side");

await expectReject(
  () => provider.addCartLine(cart.id, "mock-variant-blocked-1", 1, context),
  "COMMERCIAL_ELIGIBILITY_BLOCKED",
);
await expectReject(
  () => provider.addCartLine(cart.id, "mock-variant-unknown-1", 1, context),
  "COMMERCIAL_ELIGIBILITY_UNKNOWN",
);
await expectReject(
  () => provider.addCartLine(cart.id, "mock-variant-oos-1", 1, context),
  "VARIANT_NOT_PURCHASABLE",
);
await expectReject(
  () => provider.addCartLine(cart.id, "mock-variant-alpha-1", 0, context),
  "INVALID_QUANTITY",
);

const checkout = await provider.getCheckoutAction(cart.id, context);
assert(
  checkout.kind === "UNAVAILABLE" && checkout.reason === "PHASE_1_MOCK_CHECKOUT_DISABLED",
  "phase 1 mock never creates real checkout",
);

cart = await provider.removeCartLine(cart.id, cart.lines[0]!.id, context);
const emptyCheckout = await provider.getCheckoutAction(cart.id, context);
assert(emptyCheckout.kind === "UNAVAILABLE" && emptyCheckout.reason === "EMPTY_CART", "empty cart fails closed");

console.log("mock-provider.test.ts PASS");
