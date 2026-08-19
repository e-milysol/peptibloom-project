import { getPurchaseBlockReason } from "../../domain/eligibility.js";
import type { CommerceProvider } from "../../domain/provider.js";
import type {
  CommerceCart,
  CommerceCartLine,
  CommerceCheckoutAction,
  CommerceContext,
  CommerceProduct,
  CommerceVariant,
} from "../../domain/types.js";

interface ResolvedVariant {
  product: CommerceProduct;
  variant: CommerceVariant;
}

export class MockCommerceProvider implements CommerceProvider {
  private readonly carts = new Map<string, CommerceCart>();

  constructor(private readonly fixtures: CommerceProduct[]) {}

  async listProducts(context: CommerceContext): Promise<CommerceProduct[]> {
    assertContext(context);
    return this.fixtures.filter((product) => product.listingState === "VISIBLE");
  }

  async getProduct(
    slug: string,
    context: CommerceContext,
  ): Promise<CommerceProduct | null> {
    assertContext(context);
    const product = this.fixtures.find((candidate) => candidate.slug === slug);
    return product?.listingState === "VISIBLE" ? product : null;
  }

  async createCart(context: CommerceContext): Promise<CommerceCart> {
    assertContext(context);
    const cart: CommerceCart = {
      id: crypto.randomUUID(),
      lines: [],
      subtotal: eur(0),
      currency: "EUR",
    };
    this.carts.set(cart.id, cart);
    return cart;
  }

  async getCart(
    cartId: string,
    context: CommerceContext,
  ): Promise<CommerceCart | null> {
    assertContext(context);
    return this.carts.get(cartId) ?? null;
  }

  async addCartLine(
    cartId: string,
    variantId: string,
    quantity: number,
    context: CommerceContext,
  ): Promise<CommerceCart> {
    assertContext(context);
    assertPositiveInteger(quantity);

    const cart = requireCart(this.carts, cartId);
    const { product, variant } = requireVariant(this.fixtures, variantId);
    assertPurchasable(product, variant);

    const existing = cart.lines.find((line) => line.variantId === variant.id);
    const nextLines = existing
      ? cart.lines.map((line) =>
          line.id === existing.id
            ? makeLine(product, variant, line.quantity + quantity, line.id)
            : line,
        )
      : [...cart.lines, makeLine(product, variant, quantity)];

    return this.persist(cart.id, nextLines);
  }

  async updateCartLine(
    cartId: string,
    lineId: string,
    quantity: number,
    context: CommerceContext,
  ): Promise<CommerceCart> {
    assertContext(context);
    assertPositiveInteger(quantity);

    const cart = requireCart(this.carts, cartId);
    const line = requireLine(cart, lineId);
    const { product, variant } = requireVariant(this.fixtures, line.variantId);
    assertPurchasable(product, variant);

    const nextLines = cart.lines.map((candidate) =>
      candidate.id === lineId
        ? makeLine(product, variant, quantity, lineId)
        : candidate,
    );

    return this.persist(cart.id, nextLines);
  }

  async removeCartLine(
    cartId: string,
    lineId: string,
    context: CommerceContext,
  ): Promise<CommerceCart> {
    assertContext(context);
    const cart = requireCart(this.carts, cartId);
    requireLine(cart, lineId);
    return this.persist(
      cart.id,
      cart.lines.filter((line) => line.id !== lineId),
    );
  }

  async getCheckoutAction(
    cartId: string,
    context: CommerceContext,
  ): Promise<CommerceCheckoutAction> {
    assertContext(context);
    const cart = this.carts.get(cartId);

    if (!cart) {
      return { kind: "UNAVAILABLE", reason: "INVALID_CART_STATE" };
    }

    if (cart.lines.length === 0) {
      return { kind: "UNAVAILABLE", reason: "EMPTY_CART" };
    }

    for (const line of cart.lines) {
      const resolved = resolveVariant(this.fixtures, line.variantId);
      if (!resolved) {
        return { kind: "UNAVAILABLE", reason: "INVALID_CART_STATE" };
      }

      const reason = getPurchaseBlockReason(resolved.product, resolved.variant);
      if (reason) {
        return { kind: "UNAVAILABLE", reason };
      }
    }

    return { kind: "UNAVAILABLE", reason: "PHASE_1_MOCK_CHECKOUT_DISABLED" };
  }

  private persist(cartId: string, lines: CommerceCartLine[]): CommerceCart {
    const subtotalMinor = lines.reduce(
      (sum, line) => sum + line.lineTotal.amountMinor,
      0,
    );
    const cart: CommerceCart = {
      id: cartId,
      lines,
      subtotal: eur(subtotalMinor),
      currency: "EUR",
    };
    this.carts.set(cartId, cart);
    return cart;
  }
}

function assertContext(context: CommerceContext): void {
  if (context.currency !== "EUR" || !["en", "es", "fr"].includes(context.locale)) {
    throw new Error("INVALID_COMMERCE_CONTEXT");
  }
}

function assertPositiveInteger(quantity: number): void {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("INVALID_QUANTITY");
  }
}

function assertPurchasable(
  product: CommerceProduct,
  variant: CommerceVariant,
): void {
  const reason = getPurchaseBlockReason(product, variant);
  if (reason) {
    throw new Error(reason);
  }
}

function requireCart(
  carts: Map<string, CommerceCart>,
  cartId: string,
): CommerceCart {
  const cart = carts.get(cartId);
  if (!cart) throw new Error("INVALID_CART_STATE");
  return cart;
}

function requireLine(cart: CommerceCart, lineId: string): CommerceCartLine {
  const line = cart.lines.find((candidate) => candidate.id === lineId);
  if (!line) throw new Error("INVALID_CART_STATE");
  return line;
}

function resolveVariant(
  products: CommerceProduct[],
  variantId: string,
): ResolvedVariant | null {
  for (const product of products) {
    const variant = product.variants.find((candidate) => candidate.id === variantId);
    if (variant) return { product, variant };
  }
  return null;
}

function requireVariant(
  products: CommerceProduct[],
  variantId: string,
): ResolvedVariant {
  const resolved = resolveVariant(products, variantId);
  if (!resolved) throw new Error("UNKNOWN_VARIANT");
  return resolved;
}

function makeLine(
  product: CommerceProduct,
  variant: CommerceVariant,
  quantity: number,
  id: string = crypto.randomUUID(),
): CommerceCartLine {
  return {
    id,
    productId: product.id,
    variantId: variant.id,
    title: `${product.title} — ${variant.title}`,
    quantity,
    unitPrice: variant.price,
    lineTotal: eur(variant.price.amountMinor * quantity),
  };
}

function eur(amountMinor: number) {
  return { amountMinor, currency: "EUR" as const };
}
