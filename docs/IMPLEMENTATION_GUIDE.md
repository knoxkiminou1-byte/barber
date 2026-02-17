# SOLÉ BARBER LOUNGE — Vite Delivery

## Design tokens
- Coconut White `#F7F4EF`
- Warm Sand `#E9E1D6`
- Palm Charcoal `#121212`
- Champagne Gold `#C5A059`
- Ocean Teal `#00D4C7`
- Sunset Coral `#FF4D2E`

Typography:
- Display: Playfair Display
- Body: Plus Jakarta Sans

## IA + section map
- Home / Authority: Loader, Hero, Marquee, Trust Strip, Bento Widgets, Before/After, Reviews, Location, FAQ, Footer CTA
- Services / Architect: Tiers, Service Cards, De-risking, SOLÉ System, Add-ons, Tool Strip + CTA
- Gallery / Legacy: Timeline, Filters, 18 lookbook cards, metrics overlays, CTA
- Team / Human: Barber cards, conversational form, trust signal, shooting guide

## Run
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Performance notes
- Route-level code split via React Router + Vite build chunks.
- `loading="lazy"` on gallery media.
- Placeholder media paths are production-safe and replaceable.
- Reduced-motion fallbacks for motion-sensitive users.


## Vercel
- Configured for Vercel static deployment with SPA rewrites in `vercel.json`.
- Output directory: `dist`.
- Build command: `npm run build`.
