import type {
  CommerceAvailability,
  CommerceCheckoutUnavailableReason,
  CommerceProduct,
  CommerceVariant,
} from "./types.js";

export function isOperationallyPurchasable(
  availability: CommerceAvailability,
): boolean {
  return availability === "IN_STOCK" || availability === "LOW_STOCK";
}

export function getPurchaseBlockReason(
  product: CommerceProduct,
  variant: CommerceVariant,
): CommerceCheckoutUnavailableReason | null {
  if (product.commercialEligibility === "BLOCKED") {
    return "COMMERCIAL_ELIGIBILITY_BLOCKED";
  }

  if (product.commercialEligibility === "UNKNOWN") {
    return "COMMERCIAL_ELIGIBILITY_UNKNOWN";
  }

  if (product.listingState !== "VISIBLE") {
    return "PRODUCT_NOT_LISTABLE";
  }

  if (!isOperationallyPurchasable(variant.availability)) {
    return "VARIANT_NOT_PURCHASABLE";
  }

  return null;
}
