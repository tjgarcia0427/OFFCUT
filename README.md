# OFFCUT

Commission platform for independent streetwear designers. Buyers brief a piece, designers pitch, one designer makes it, escrow handles the money.

Live: https://joinoffcut.com

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript + Tailwind v4
- Supabase (Postgres, server-side via service role)
- Resend (transactional email)
- React Hook Form + Zod

## Run locally

```bash
cp .env.example .env.local   # fill in real values
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. Required for production:

| Var | What |
| --- | --- |
| `SUPABASE_URL` | From Supabase → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Same place. Server-only, keep secret. |
| `RESEND_API_KEY` | From resend.com → API Keys |
| `ADMIN_EMAIL` | Where submission notifications get sent |
| `RESEND_FROM` | Sender. Default `OFFCUT <onboarding@resend.dev>` works until joinoffcut.com is verified in Resend. |
| `ADMIN_PASSWORD` | Password for HTTP Basic Auth on `/admin`. Username is `admin`. |
| `NEXT_PUBLIC_SITE_URL` | `https://joinoffcut.com` in prod. |

## Database

Schema lives in `supabase/migrations/0001_init.sql`. On a fresh Supabase project, open the SQL editor and paste the contents — it's idempotent (uses `IF NOT EXISTS`).

Two tables: `briefs` and `applications`. Both have RLS enabled with no policies — only the service role (server-side) can read/write them.

## Admin

`/admin` is HTTP Basic Auth gated. Username `admin`, password from `ADMIN_PASSWORD`. Lists the most recent 100 briefs and applications.

## Deploy

Auto-deploys to Vercel on push to `main`. Domain `joinoffcut.com` lives at Cloudflare DNS pointing at Vercel.
