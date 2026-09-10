# 242 Consulting site

Single-page marketing site for Kirk Bouffard's fractional advisory practice. Premium, editorial, image-led. Register: luxury hotel group brand site, not a consultancy brochure.

## Stack
Next.js 15 App Router, TypeScript, Tailwind v4, next/image, next/font (Cormorant Garamond 300 display, Inter body). No component library. No CMS. No forms. Deploy on Vercel.

## Hard rules
- Never output an em dash or en dash in any file. Use period, comma, or "to". Lint for U+2014 and U+2013 before every commit.
- Sentence case for all headings. Uppercase only for 11px eyebrow labels.
- No AI-generated images for named venues. If a real photo is missing, remove the tile.
- No pure white. No cards, shadows, icons, gradients other than image overlays.
- All images from /public/images as WebP, under 350KB, 3:2 source min 2400px wide. Enforce with a script in /scripts/check-images.ts run in prebuild.
- No hotlinked assets.

## Palette
bg #121110, surface #1B1917, text #EDE6DA, secondary #9C948A, rule #2A2724, accent #B08D57. 3% CSS grain overlay on body.

## Type scale
h1 clamp(56px, 8vw, 128px) lh 1.02; h2 clamp(40px, 5vw, 72px) lh 1.05; h3 32px to 40px display; body Inter 16px/1.65; eyebrow 11px 0.18em accent.

## Layout
Max content 1320px. Section padding 140px desktop, 88px mobile. Fade-up on scroll 300ms 12px, parallax on hero max 6%, all disabled under prefers-reduced-motion.

## Page order and copy
Copy is canonical in /content/copy.ts. Do not paraphrase it. Sections:
1. Nav: "242 Consulting" wordmark left, mailto kirk@242consulting.com right. Nothing else.
2. Hero: full viewport, /images/hero.webp (or self-hosted /videos/hero.mp4 with poster, still on mobile). Eyebrow "Hospitality · Wellness". h1 "Operating leadership for places people choose." Sub "Fractional operator advisory for founders and owners. Hands-on, not at arm's length." Two text links: "For owners: retained advisory" to #owners, "For operators: 242 Circle" to #operators.
3. Two doors (#ways): eyebrow "Engagement", h2 "Two doors. Same operator." Left #owners: 242 Retained (weekly session, direct access, ops/commercial/design review, monthly priorities, on-site scoped separately; "Three clients at a time, no more."; "Retainer scoped on the intro call."; CTA mailto subject "242 Retained"). Right #operators: 242 Circle for AGMs, GMs, ops leads; tiers Circle $500/month (call every two weeks, WhatsApp 48h, recordings) and Circle Plus $1,000/month, 5 seats (weekly call, WhatsApp 24h, one 30-min 1:1 monthly, one document review monthly); "15 seats total. Waitlist when full."; CTA mailto subject "242 Circle".
4. Advisory (#advisory): h2 "The business behind the experience." Four lenses: Operations, Design intent, Experience, Network. One sentence each (see copy.ts). Closing line "Both tracks draw on the same four lenses."
5. Track record (#work): h2 "Built by operating." Intro line. Asymmetric photo grid, 5 tiles (Atlantis, Bahamas venue, CÉ LA VI, Savaya, Desa Kitsuné), captions place · role. Stats: 20+ years operating, $45M+ P&L responsibility, 50%+ operating margins held over five years. Optional testimonial block, omitted if empty.
6. Contact (#contact): full-bleed /images/contact.webp, 80% overlay. h2 "Building something people need to experience?" Sub "A 30 minute intro call. No pitch. We map the constraint and whether 242 is the right fit." Large mailto in display serif. Line: "Put Retained or Circle in the subject line." Then "Replies within 24 hours · Based in Bali, available globally · LinkedIn".
7. Footer: "242 Consulting · © 2026 · Hospitality and wellness operator advisory".

## Metadata
Title "242 Consulting | Operating leadership for hospitality and wellness". One description for all tags. Canonical https://www.242consulting.com. og-image.jpg 1200x630 generated via next/og from the hero still with the wordmark bottom-left. JSON-LD ProfessionalService, founder Person Kirk Bouffard, areaServed Worldwide. Theme-color #121110.

## Definition of done
next build passes. Lighthouse mobile: performance 90+, accessibility 100, LCP under 2.5s. No image over 350KB in output. og-image returns image/jpeg. All anchors resolve. Dash lint passes. Tested at 375, 768, 1440, 1920.

## Next.js version notes
@AGENTS.md
