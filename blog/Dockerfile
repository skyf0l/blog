FROM oven/bun:latest AS builder

WORKDIR /app

# Install deps
COPY package.json bun.lock ./
RUN bun install

# Build
COPY . .
RUN bun run build

FROM node:24-alpine AS runner

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/build .

# Run the app
WORKDIR /app
EXPOSE 3000
CMD ["node", "index.js"]
