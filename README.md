# Akshaykeerthi Portfolio

A cinematic, deployable portfolio for `akshaykeerthi-portfolio.vercel.app`.

## Stack

- Next.js App Router
- React 19 + TypeScript
- Tailwind CSS
- GSAP ScrollTrigger + Lenis
- Canvas frame-sequence hero
- AdSense-ready script, ad unit, and `/ads.txt`
- SEO routes: `robots.ts`, `sitemap.ts`, page metadata
- Trust routes: privacy policy, terms, editorial policy
- Structured data and dynamic OpenGraph image

## Local Development

```bash
npm run generate:sequence
npm run check:launch
npm run dev
```

Open `http://localhost:3000`.

## Production Setup

1. Set `NEXT_PUBLIC_SITE_URL` to the live free Vercel domain for now.
2. Set `NEXT_PUBLIC_ADSENSE_ENABLED=true` only after AdSense is approved.
3. Set `NEXT_PUBLIC_ADSENSE_CLIENT`, `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE`, and `ADSENSE_PUBLISHER_ID`.
4. Replace the placeholder articles and project details with final original content before requesting AdSense review.
5. Deploy to Vercel with `npm run build`.
6. Run `npm run check:launch` before production deploys.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full Vercel handoff.
See [DOMAIN_OPTIONS.md](./DOMAIN_OPTIONS.md) for the current domain recommendation.

## Launch Checklist

- Replace all placeholder copy in `src/lib/site.ts` with final biography, project evidence, and links.
- Replace the generated SVG frames with final optimized WebP or AVIF frames.
- Set `NEXT_PUBLIC_SITE_URL` to the production Vercel domain.
- Add `RESEND_API_KEY` when you want contact form submissions to send email.
- Keep AdSense disabled until the site has original content and Google approves it.
- Link the project from this folder, not the parent Expo folder.

## Media Pipeline

The current hero frames are generated SVG placeholders:

```bash
npm run generate:sequence
```

Later, replace `public/sequences/akshay/frame-0000.svg` with optimized WebP or AVIF frames generated from a final video, and update `FrameSequenceCanvas` props if the extension changes.
