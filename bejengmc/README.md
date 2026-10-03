# BEJENGMC
Minecraft network website (Next.js + Prisma + PostgreSQL + Redis) with the BejengWebBridge plugin (Leaf 1.21.11, Java 21).

## Status
- [x] Phase 0: project structure, full Prisma schema, Docker Compose, .env.example
- [ ] Phase 1: design system, homepage, navigation
- [ ] Phase 2: auth + backend APIs
- [ ] Phase 3: user + admin dashboards
- [ ] Phase 4: store, Stripe/PayPal webhooks, reward delivery
- [ ] Phase 5: voting, reports, rules, news, staff
- [ ] Phase 6: BejengWebBridge plugin
- [ ] Phase 7-8: integration tests, security audit, deployment docs

## Key design decisions
- Minecraft ownership is verified in-game (`/link <code>`), never trusted from the client.
- Orders become PAID only from verified payment webhooks (idempotent via Payment.eventId).
- RewardDelivery.idempotencyKey prevents duplicate rewards; failed deliveries retry with backoff.
- Votes are credited only from Votifier/vote callbacks, not link clicks.
- Secrets (bot token, RCON) are encrypted at rest and never sent to the browser.

## Setup
cp .env.example .env   # fill in secrets
docker compose up -d db redis
npx prisma migrate dev
