# Kainat Naz İrfan — Portfolio

Personal portfolio for academic writing and English ↔ Urdu translation services.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Inter (sans) + Cormorant Garamond (serif) via `next/font/google`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

All copy lives in [src/lib/site.ts](src/lib/site.ts) — name, bio, services, email, and Fiverr links. Update there and every page reflects the change.

Pages:
- [src/app/page.tsx](src/app/page.tsx) — Home
- [src/app/about/page.tsx](src/app/about/page.tsx) — About
- [src/app/services/page.tsx](src/app/services/page.tsx) — Services
- [src/app/contact/page.tsx](src/app/contact/page.tsx) — Contact

Theme colors and fonts: [src/app/globals.css](src/app/globals.css)

## Deploy

The fastest path is Vercel:

1. Push this folder to a new GitHub repo
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Accept the defaults — Vercel auto-detects Next.js

Custom domain (e.g. `kainatnaz.com`) can be added under Vercel project settings.

## Build

```bash
npm run build
npm start
```
