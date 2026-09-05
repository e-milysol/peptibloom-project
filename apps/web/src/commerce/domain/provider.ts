import type {
  CommerceCart,
  CommerceCheckoutAction,
  CommerceContext,
  CommerceProduct,
} from "./types.js";

export interface CommerceProvider {
  listProducts(context: CommerceContext): Promise<CommerceProduct[]>;
  getProduct(slug: string, context: CommerceContext): Promise<CommerceProduct | null>;
  createCart(context: CommerceContext): Promise<CommerceCart>;
  getCart(cartId: string, context: CommerceContext): Promise<CommerceCart | null>;
  addCartLine(
    cartId: string,
    variantId: string,
    quantity: number,
    context: CommerceContext,
  ): Promise<CommerceCart>;
  updateCartLine(
    cartId: string,
    lineId: string,
    quantity: number,
    context: CommerceContext,
  ): Promise<CommerceCart>;
  removeCartLine(
    cartId: string,
    lineId: string,
    context: CommerceContext,
  ): Promise<CommerceCart>;
  getCheckoutAction(
    cartId: string,
    context: CommerceContext,
  ): Promise<CommerceCheckoutAction>;
}
