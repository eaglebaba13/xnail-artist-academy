import { z } from "zod";

const safeText = (label: string, max: number) =>
  z.string().trim().min(1, `${label} is required`).max(max, `${label} is too long`);

const optionalTracking = z.string().trim().max(500).optional().default("");

export const leadSchema = z.object({
  full_name: safeText("Full name", 100),
  mobile: z.string().trim().regex(/^(?:\+?91)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  whatsapp_number: z.string().trim().regex(/^(?:\+?91)?[6-9]\d{9}$/, "Enter a valid WhatsApp number"),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email").max(255)]),
  city: safeText("City", 100),
  profession: safeText("Current profession", 120),
  experience: safeText("Experience", 500),
  career_interest: safeText("Career interest", 120),
  source: safeText("Source", 120),
  utm_source: optionalTracking,
  utm_medium: optionalTracking,
  utm_campaign: optionalTracking,
  utm_content: optionalTracking,
  utm_term: optionalTracking,
  fbclid: optionalTracking,
  gclid: optionalTracking,
  landing_page: optionalTracking,
  referrer: optionalTracking,
  meta_event_id: z.string().uuid().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export function normalizeIndianPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}