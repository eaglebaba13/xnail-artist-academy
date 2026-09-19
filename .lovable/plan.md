# MakeMeArtist × XNAIL Course Sales Platform

## Goal
Build a production-ready, mobile-first course sales and lead-management platform for the Professional Nail Artist & Entrepreneur Program, using only claims approved in the supplied documents.

## Product structure
- Public conversion page at `/` with the complete approved sales journey, application form, WhatsApp and call actions, restrained animation, and a sticky mobile `₹60,000 | APPLY NOW` action.
- Secure admin sign-in at `/admin/login` and protected admin workspace at `/admin`.
- CRM views for leads, status history, notes, campaign attribution, filters, search, details, KPIs, and CSV export.
- Admin-managed FAQs, testimonials, course details, site settings, contact details, duration, investment, and campaign settings.
- Genuine testimonials only; the public testimonial section stays hidden until approved entries exist.

## Visual direction
- Premium beauty editorial design: bright neutral surfaces, black typography, magenta/pink accents, strong image-led sections, crisp compact cards, and generous whitespace.
- Use both supplied brand marks, including a padded square favicon derived from the uploaded logo.
- Generate a cohesive set of original luxury nail photographs for the public page rather than using placeholders or invented student imagery.
- Mobile-first layouts at 360px and 390px, expanding cleanly to tablet and desktop.
- Accessible labels, keyboard navigation, visible focus states, reduced-motion support, responsive imagery, and lazy loading below the first screen.

## Public page content
- Implement all 14 requested sections and the sticky mobile action using the exact approved positioning and curriculum.
- Centralize duration, hours, phase lengths, price, phone/WhatsApp, course name, and opportunity disclaimer in typed defaults; database settings override them in production.
- Use the approved XNAIL opportunity disclaimer verbatim.
- Certification and business-guidance wording retains the required asterisks and confirmation note.
- FAQ answers will stay within supplied claims and avoid guarantees.
- Application fields match the brief and capture all campaign/referrer values.
- Successful submission shows the exact thank-you message plus WhatsApp and call actions.

## Application and lead handling
- Validate every field in the browser and again on the server with shared schemas.
- Normalize Indian phone numbers, trim text, bound input lengths, and reject malformed campaign fields.
- Add rate limiting and duplicate protection based on normalized phone/email plus a controlled time window.
- Save the application, lead, initial status history, and campaign attribution atomically.
- Fire `Lead` only after a successful stored submission; use a shared event ID for browser/server deduplication.

## Backend and API
Use TanStack Start as a single Node-deployed application: React pages and the REST API remain separate modules but ship in one secure service behind Nginx.

Endpoints:
- `GET /api/health`
- `POST /api/leads`
- `POST /api/admin/login`
- `POST /api/admin/logout`
- `GET /api/admin/session`
- `GET /api/admin/leads`
- `PATCH /api/admin/leads/:id`
- `GET /api/admin/dashboard`
- Admin CRUD endpoints for FAQs, testimonials, courses/modules, and site/campaign settings
- `GET /api/admin/leads/export.csv`

API behavior:
- Zod validation, explicit response shapes, safe errors, request-size limits, CORS allowlist, security headers, and audit logging.
- Admin endpoints verify the server session and admin role independently of page protection.
- Health check reports application readiness without exposing secrets or database details.

## Authentication and authorization
- Store credentials in `users`, display data in `profiles`, and roles in a separate `user_roles` table.
- Passwords use a modern password hash; sessions use secure, HTTP-only, same-site cookies with server-side expiry/revocation.
- A one-time VPS setup command creates the first administrator from prompted values; no production admin is seeded.
- Login attempts are rate-limited and return non-enumerating errors.
- Every protected page and API endpoint checks authorization on the server.

## PostgreSQL and Prisma data model
Implement Prisma migrations for:
- `users`, `profiles`, `user_roles`, `sessions`
- `leads`, `lead_status_history`, `campaign_tracking`, `applications`
- `courses`, `course_modules`, `students`, `payments`
- `testimonials`, `faqs`, `site_settings`

Key rules:
- Use enums for lead status, admin roles, approval state, payment state, and integration state.
- Index status, created date, city, source, campaign, normalized phone/email, and external IDs.
- Keep course delivery content referenced from the course record; do not duplicate LMS content.
- Store future SuperProfile identifiers and sync state on students/enrolments without calling SuperProfile yet.
- Do not add fake production records. Only approved FAQ/course defaults and settings are inserted by migration/bootstrap.

## Admin workspace
- Dashboard: total leads, new, contacted, counselling scheduled/completed, payment pending, paid students, conversion rate, and campaign-wise leads.
- Leads table: paginated search and filters for status, source, campaign, date, and city.
- Lead detail: application answers, contact details, UTM/referrer data, notes, status timeline, and controlled status updates.
- Content/settings views: course duration/price/contact, FAQs, testimonials with approval state, course modules, and campaign configuration.
- CSV export obeys active filters and protects spreadsheet cells from formula injection.

## Meta Ads architecture
- Add optional Meta Pixel support through a public Pixel ID only when configured.
- Support `PageView`, `ViewContent`, `Lead`, `CompleteRegistration`, `InitiateCheckout`, and `Purchase` through a typed tracking layer.
- Add server-only Conversions API delivery with event-ID deduplication, hashed customer data where permitted, consent-aware dispatch, and durable event/outcome records.
- Never expose the Meta access token. Integration remains disabled until production credentials and consent requirements are confirmed.

## WhatsApp and SuperProfile readiness
- Public WhatsApp links use `https://wa.me/919929720831`; no secret is needed for the CTA.
- Define server-only integration adapters and sync identifiers for later WhatsApp Business messaging and SuperProfile activation.
- Do not claim messaging delivery or LMS activation before credentials, provider mappings, and webhooks are configured.
- Document the later WhatsApp webhook/inbox requirement and SuperProfile field mapping.

## SEO and site metadata
- Add unique home/admin metadata, canonical `https://astartup.makemeartist.com/`, Open Graph, Twitter/X metadata, and Course/Organization/FAQ schema markup using approved facts.
- Add `robots.txt` and a sitemap for public pages only; exclude admin and API surfaces.
- Use the generated local social image only if an absolute production asset URL is available; otherwise rely on text metadata and hosting preview generation.

## VPS deployment
- Configure the app for a Node server runtime compatible with Prisma.
- Add a multi-stage `Dockerfile`, `docker-compose.yml`, Nginx reverse-proxy configuration, PostgreSQL volume, health checks, migration command, and non-root runtime user.
- Provide `.env.example` with names and safe descriptions only; ensure `.env` variants are ignored.
- Nginx terminates HTTPS, forwards trusted proxy headers, limits request bodies, and applies static-asset caching.
- Production startup runs committed migrations before serving; database backups use scheduled `pg_dump`, retention, encrypted off-server copies, and restore testing.

## Documentation delivered in the repository
- Architecture and local setup
- Environment variable reference
- Database migration and rollback process
- API reference with request/response examples
- One-time admin setup
- Meta Pixel/Conversions API setup
- WhatsApp integration steps
- SuperProfile integration boundary
- VPS deployment, production build, HTTPS, monitoring, backup, and restore instructions

## Verification
- Add focused tests for validation, duplicate handling, auth/session protection, lead transitions, KPI calculations, and CSV safety.
- Verify the public flow and protected admin flow in a browser.
- Verify desktop plus 360px and 390px layouts, form errors, successful submission, WhatsApp/call actions, admin filters, status changes, and export.
- Verify REST status codes, CORS, rate limiting, health check, migration integrity, metadata, sitemap, robots rules, and that no secret enters the client bundle.

## Delivery boundary
- Build the complete codebase and deployment package without publishing it.
- Meta, WhatsApp Business API, payment gateway, and SuperProfile remain integration-ready but inactive until their credentials/account mappings are supplied.
