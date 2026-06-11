# Deployment Guide

This project must be deployed from:

```bash
/Users/akshaykeerthi/Downloads/kaka-dawg-eagle/akshaykeerthi-portfolio
```

Do not deploy the parent `kaka-dawg-eagle` folder; that is a separate Expo app.

## Local Preflight

```bash
npm ci
npm run generate:sequence
npm run check:launch
npm run lint
npm run build
```

## Vercel Dashboard Path

1. Create a new Vercel project.
2. If importing a Git repository, set the root directory to `akshaykeerthi-portfolio`.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Install command: `npm ci`.
6. Use the free Vercel domain first. Add a custom domain later when ready.

## Required Environment Variables

Set these in Vercel Project Settings:

```bash
NEXT_PUBLIC_SITE_URL=https://akshaykeerthi-portfolio.vercel.app
NEXT_PUBLIC_ADSENSE_ENABLED=false
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-0000000000000000
NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=0000000000
ADSENSE_PUBLISHER_ID=pub-0000000000000000
CONTACT_TO_EMAIL=hello@akshaykeerthi-portfolio.vercel.app
CONTACT_FROM_EMAIL=Portfolio <hello@akshaykeerthi-portfolio.vercel.app>
RESEND_API_KEY=
```

Keep `NEXT_PUBLIC_ADSENSE_ENABLED=false` until the domain has final content and AdSense approval.

## CLI Path

Only run these commands from this project folder:

```bash
vercel link
vercel env pull .env.local --yes
vercel --prod
```

After the production URL is live:

```bash
NEXT_PUBLIC_SITE_URL=https://akshaykeerthi-portfolio.vercel.app npm run verify:live
```

## AdSense Readiness

Before applying for AdSense:

- Replace placeholder articles and project summaries with original personal content.
- A custom domain is recommended before AdSense review, but the free Vercel domain is fine for the temporary live version.
- Confirm `/privacy-policy`, `/terms`, `/editorial-policy`, `/contact`, `/sitemap.xml`, `/robots.txt`, and `/ads.txt` are live.
- Keep ads away from the cinematic hero.
- Do not enable ad slots until the publisher ID and slot IDs are real.
- Add `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` before relying on the contact form in production.
