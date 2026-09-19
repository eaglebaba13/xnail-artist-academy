#!/usr/bin/env sh
set -eu
: "${DATABASE_URL:?DATABASE_URL is required}"
mkdir -p backups
pg_dump "$DATABASE_URL" --format=custom --file="backups/makemeartist-$(date +%F-%H%M).dump"
find backups -type f -mtime +14 -delete
