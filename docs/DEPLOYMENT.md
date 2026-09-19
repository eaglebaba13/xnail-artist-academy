# Production deployment

## Architecture
Internet → Nginx → TanStack Start application → Lovable Cloud PostgreSQL/Auth/Storage.
The application and REST API ship as one Node-compatible server image. Course delivery remains in SuperProfile when enabled.

## Environment
Copy `.env.example` to `.env` on the VPS and provide the values through a protected deployment environment. Never commit `.env`. Browser variables are publishable; service, Meta, WhatsApp and SuperProfile values stay server-only.

## Deploy
1. Point `astartup.makemeartist.com` DNS to the VPS.
2. Install Docker Engine and Compose.
3. Put TLS certificates in `deploy/certs`, or replace the Nginx TLS layer with Certbot/Caddy.
4. Run `docker compose build` then `docker compose up -d`.
5. Confirm `GET /api/health` returns `status: ok`.

## Database migrations
Migration SQL is committed under `drizzle/migrations`. Apply each migration once through the managed database migration workflow before starting the new release. Never use schema push in production. Keep a migration log and test rollback/restore in staging.

## First administrator
Create the first user in Lovable Cloud, then insert that user's ID into `profiles` and `user_roles` with role `admin` through an audited one-time migration. Public registration is disabled. Later administrators must be granted through the same controlled process.

## Backup and restore
Schedule `deploy/backup.sh` daily only for a directly reachable PostgreSQL deployment. Retain at least 14 daily backups, encrypt and copy them off-server, and test `pg_restore --clean --if-exists --dbname <restore-url> <file>` quarterly. For Lovable Cloud, use its managed backup controls instead of exposing database credentials to the VPS.

## Monitoring
Monitor container health, `/api/health`, 5xx response rate, failed lead submissions, disk usage and certificate expiry. Keep logs free of contact details and credentials.
