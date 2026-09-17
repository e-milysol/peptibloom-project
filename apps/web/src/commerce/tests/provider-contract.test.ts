import type { CommerceCheckoutAction } from "../domain/types.js";
import type { CommerceProvider } from "../domain/provider.js";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`ASSERTION_FAILED: ${message}`);
}

const redirect: CommerceCheckoutAction = {
  kind: "REDIRECT",
  url: "https://example.invalid/checkout",
};
const session: CommerceCheckoutAction = {
  kind: "PROVIDER_SESSION",
  sessionId: "synthetic-session",
};

const contractShape: Pick<CommerceProvider, "getCheckoutAction"> | null = null;
void contractShape;

assert(redirect.kind === "REDIRECT", "redirect checkout action remains provider-neutral");
assert(session.kind === "PROVIDER_SESSION", "provider session action remains provider-neutral");

console.log("provider-contract.test.ts PASS");
