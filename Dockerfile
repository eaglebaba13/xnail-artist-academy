FROM oven/bun:1.2 AS dependencies
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
FROM dependencies AS build
COPY . .
RUN bun run build
FROM oven/bun:1.2-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production PORT=3000
COPY --from=build /app/.output ./.output
USER bun
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
