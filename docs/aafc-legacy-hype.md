# SOLÉ BARBER LOUNGE — AAFC 2026 Legacy & Hype Blueprint

## 1) Design tokens + typography mapping
- `--coconut-white: #F7F4EF`
- `--warm-sand: #E9E1D6`
- `--palm-charcoal: #121212`
- `--champagne-gold: #C5A059`
- `--ocean-teal: #00D4C7`
- `--sunset-coral: #FF4D2E`
- `--radius-xl: 24px`
- `--gap-tight: 16px`
- Display: Playfair Display (`--font-playfair`)
- Body: Plus Jakarta Sans (`--font-jakarta`)

## 2) IA + section map
- Home / The Authority: Loader → Hero → Trust Strip → Bento Widgets → Before/After → Reviews → Location/Hours → FAQ + Final CTA
- Services / The Architect: Tier cards → De-risk cards → SOLÉ process → Tool strip + CTA
- Gallery / The Legacy: Timeline → Filters + Lookbook → Metrics + CTA
- Team/Contact / The Human: Team cards → Conversational form → Trust near submit → Final CTA + shooting guide

## 3) Run instructions
```bash
npm install
npm run dev
npm run build
```

## 4) Performance notes
- Uses `next/font` and `next/image`-ready configuration with AVIF/WebP output.
- Animation fallbacks for reduced motion.
- Lenis + GSAP kept lightweight and scoped to sections.
- Placeholder media paths are ready for optimized real assets (AVIF/WebP images + compressed MP4 loops).
