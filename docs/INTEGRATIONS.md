# Integration setup

## Meta
Set the public `VITE_META_PIXEL_ID` to enable browser PageView, ViewContent and Lead events. Keep `META_ACCESS_TOKEN` and `META_DATASET_ID` server-only. Before enabling Conversions API, implement consent handling and send the same `meta_event_id` used by the browser for deduplication. Map later milestones to CompleteRegistration, InitiateCheckout and Purchase only when those actions actually occur.

## WhatsApp
The public CTA already opens `https://wa.me/919929720831` and requires no credentials. For automated WhatsApp Business messages, provide a server-only access token and phone-number ID, verify incoming webhook signatures on a `/api/public/` route, obtain template approval, and record delivery status. Never place the token in browser code.

## SuperProfile
Keep this landing page for sales and conversion. Store only the external course/user identifiers and sync state; do not copy course lessons into this database. Activate a student only after a successful payment/admission transition, using a server-only API key and an idempotent request. Webhook callbacks must verify the provider signature.
