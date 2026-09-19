# REST API

All bodies are JSON unless noted. Admin endpoints require `Authorization: Bearer <session token>` and independently verify the administrator role.

- `GET /api/health` — readiness response.
- `POST /api/leads` — accepts the public application fields plus UTM, click IDs, landing page, referrer and `meta_event_id`. Returns `201 { ok, id }`; a repeat phone submission within 24 hours returns `200 { ok, duplicate: true }`.
- `GET /api/admin/leads` — filters: `search`, `status`, `source`, `city`. Returns up to 500 newest leads and campaign attribution.
- `PATCH /api/admin/leads/:id` — accepts `status` and/or `notes`; status changes create history records.
- `GET /api/admin/dashboard` — KPI totals, conversion rate and source-wise lead counts.

Public lead submissions are server-validated and rate-limited. Errors intentionally avoid database details.
