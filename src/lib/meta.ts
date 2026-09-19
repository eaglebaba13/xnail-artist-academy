export type MetaEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "CompleteRegistration"
  | "InitiateCheckout"
  | "Purchase";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMeta(event: MetaEvent, eventId?: string) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, {}, eventId ? { eventID: eventId } : undefined);
}

export function initializeMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;
  const pixelId = import.meta.env["VITE_META_PIXEL_ID"];
  if (!pixelId) return;
  const queue = (...args: unknown[]) => {
    (queue as typeof queue & { callMethod?: (...values: unknown[]) => void }).callMethod?.(...args);
    ((queue as typeof queue & { queue?: unknown[][] }).queue ??= []).push(args);
  };
  window.fbq = queue;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  window.fbq("init", pixelId);
}