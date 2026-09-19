export const COURSE_CONFIG = {
  brand: "MakeMeArtist × XNAIL Bar",
  name: "Professional Nail Artist & Entrepreneur Program",
  price: 60000,
  priceLabel: "₹60,000",
  durationDays: 50,
  durationHours: 200,
  phoneDisplay: "+91 99297 20831",
  phoneHref: "tel:+919929720831",
  whatsappHref: "https://wa.me/919929720831",
  canonicalUrl: "https://astartup.makemeartist.com/",
  opportunity:
    "Eligible participants may explore the XNAIL Bar business opportunity subject to eligibility, approvals and applicable commercial terms.",
  phases: [
    { number: "01", title: "Professional Nail Training", days: 30 },
    { number: "02", title: "Entrepreneurship Training", days: 10 },
    { number: "03", title: "Digital Marketing & Operations", days: 2 },
    { number: "04", title: "Practical + Portfolio + Launch", days: 8 },
  ],
} as const;

export const LEAD_STATUSES = [
  "NEW_LEAD",
  "CONTACTED",
  "COUNSELLING_SCHEDULED",
  "COUNSELLING_COMPLETED",
  "PAYMENT_PENDING",
  "PAYMENT_SUCCESSFUL",
  "ADMITTED",
  "LMS_ACTIVATED",
  "TRAINING_IN_PROGRESS",
  "COMPLETED",
  "CERTIFICATE_ISSUED",
  "POST_COURSE_FOLLOW_UP",
] as const;

export const formatStatus = (status: string) => status.replaceAll("_", " ");