# ---------- base ----------
FROM node:22-alpine AS base
WORKDIR /app

# ---------- deps ----------
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# ---------- builder ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG SANITY_STUDIO_PROJECT_ID
ARG SANITY_STUDIO_DATASET
ENV SANITY_STUDIO_PROJECT_ID=${SANITY_STUDIO_PROJECT_ID}
ENV SANITY_STUDIO_DATASET=${SANITY_STUDIO_DATASET}
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---------- runner ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000
ENV NODE_OPTIONS="--max-old-space-size=1024"

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "fetch('http://127.0.0').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
