FROM oven/bun:1-alpine AS base
WORKDIR /app

RUN apk add --no-cache wget

# ---------- deps ----------
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---------- builder ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG SANITY_STUDIO_PROJECT_ID
ARG SANITY_STUDIO_DATASET
ENV SANITY_STUDIO_PROJECT_ID=${SANITY_STUDIO_PROJECT_ID}
ENV SANITY_STUDIO_DATASET=${SANITY_STUDIO_DATASET}

ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# ---------- runner ----------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget -q --spider http://localhost:3000/ || exit 1

CMD ["bun", "run", "start"]