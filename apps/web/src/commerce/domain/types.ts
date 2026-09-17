export type CurrencyCode = "EUR";
export type CommerceLocale = "en" | "es" | "fr";

export interface CommerceMoney {
  amountMinor: number;
  currency: CurrencyCode;
}

export type CommerceAvailability =
  | "IN_STOCK"
  | "LOW_STOCK"
  | "OUT_OF_STOCK"
  | "UNKNOWN";

export type CommerceListingState = "VISIBLE" | "HIDDEN" | "UNAVAILABLE";

/**
 * SPIKE_ONLY / PROPOSED.
 * Temporary vocabulary proving that purchase-path authorization remains
 * independent from listing visibility and operational availability.
 * This is not a canonical READY_FOR_SALE model.
 */
export type SpikeCommercialEligibility = "ELIGIBLE" | "BLOCKED" | "UNKNOWN";

export interface CommerceImage {
  src: string;
  alt: string;
}

export interface CommerceVariant {
  id: string;
  sku: string;
  title: string;
  attributes: Record<string, string>;
  price: CommerceMoney;
  availability: CommerceAvailability;
}

export interface CommerceProduct {
  id: string;
  slug: string;
  title: string;
  description: string;
  listingState: CommerceListingState;
  commercialEligibility: SpikeCommercialEligibility;
  variants: CommerceVariant[];
  images: CommerceImage[];
}

export interface CommerceCartLine {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  quantity: number;
  unitPrice: CommerceMoney;
  lineTotal: CommerceMoney;
}

export interface CommerceCart {
  id: string;
  lines: CommerceCartLine[];
  subtotal: CommerceMoney;
  currency: CurrencyCode;
}

export type CommerceCheckoutUnavailableReason =
  | "COMMERCIAL_ELIGIBILITY_BLOCKED"
  | "COMMERCIAL_ELIGIBILITY_UNKNOWN"
  | "PRODUCT_NOT_LISTABLE"
  | "VARIANT_NOT_PURCHASABLE"
  | "EMPTY_CART"
  | "PHASE_1_MOCK_CHECKOUT_DISABLED"
  | "INVALID_CART_STATE";

export type CommerceCheckoutAction =
  | { kind: "UNAVAILABLE"; reason: CommerceCheckoutUnavailableReason }
  | { kind: "REDIRECT"; url: string }
  | { kind: "PROVIDER_SESSION"; sessionId: string };

export interface CommerceContext {
  locale: CommerceLocale;
  currency: CurrencyCode;
}
