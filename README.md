# TradersAlgoPro Live

Clean Next.js base with feature flags, Prisma, and Render Postgres.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm start` – run production server
- `npm run lint` – lint

## Env
Set `DATABASE_URL` in your hosting platform (Render) to the External Database URL from your Postgres instance.

## Health
GET `/api/health` → `{ ok: true, ts: <number> }`

