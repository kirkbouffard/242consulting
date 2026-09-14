# 242 Consulting

Single page marketing site for Kirk Bouffard's fractional advisory practice.
Next.js App Router, TypeScript, Tailwind v4, no component library, no CMS, no forms.

Project rules live in `CLAUDE.md`. Read that first.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Runs both gates, then `next build` |
| `npm run check:images` | Image gate: WebP, under 350KB, 3:2, min 2400px wide |
| `npm run check:dashes` | Fails on any em dash or en dash in source |
| `npm run lint` | ESLint |

`prebuild` runs both gates, so `next build` cannot ship a bad asset.

## The Circle seat cap is deliberately not enforced

The page says 15 seats. The Stripe payment link has no purchase limit, so a
sixteenth person can pay. That is a decision, not an oversight: the cap is there
to set the size of the room, and it is easier to take an extra member than to
turn away a sale over a number.

To close it later: Stripe Dashboard, Payment links, the 242 Circle link, then
"Limit the number of payments". Set it again if the link is ever recreated. The
link lives in `content/copy.ts` as `circle.checkoutUrl`.

Worth revisiting once paid members approach 15, since "15 seats total. Waitlist
when full." stops being true at that point.

## The mark

`app/_brand/logotype.svg` is the logotype: Cormorant Garamond outlines converted
to paths and optically spaced, so the mark holds its shape whether or not the
webfont loads. `components/Logotype.tsx` inlines it in the page and the open
graph route rasterizes the same file. It is the only place the mark is defined.

## Copy

All copy is canonical in `content/copy.ts`. Components render those strings
verbatim. Edit copy there, never in JSX.

## Images

Drop WebP files in `public/images`. Expected names:

- `hero.webp` (hero right column, above the stats)
- `atlantis.webp`, `bahamas-venue.webp`, `celavi.webp`, `savaya.webp`, `kitsune.webp`,
  `zumana.webp` (track record entries)

An entry renders typographically when its file is absent, and the hero column
carries the stats alone. No stand-in art is generated. The contact section
takes no image by design: heading, line, CTA, email, nothing else.

## Open graph

`app/opengraph-image.tsx` generates the card at build time through `next/og`,
1200x630 PNG, served at `/opengraph-image`. Next's file convention emits
`og:image` and `twitter:image` from it, so neither is hand written in
`app/layout.tsx` and there is only one place to change the card.

It is ivory ground, the espresso wordmark read off `app/_brand/logotype.svg`,
and `hero.heading` in Cormorant Garamond beneath it. Both colours are the
palette's own hex values and the type is the page's own face, so the card
cannot drift from the site the way the old static jpeg did.

Satori takes ttf, otf or woff, not the woff2 `next/font` serves, so the card
carries `app/_brand/cormorant-300.ttf`: the variable original instanced at
weight 300 and subset to latin, 29KB. Regenerate it only if the display face
changes.

## Deploying

The site is a standalone Next.js app. Vercel auto-detects it, so there is no
vercel.json.

1. Create the project on Vercel from this repository. Framework preset is
   Next.js, build command `npm run build`, output is the default.
   `prebuild` runs the image pipeline and both gates before every build.
2. Set `WHATSAPP_INVITE_URL` in project environment variables. See `.env.example`.
   It is read at build time, so changing it later needs a redeploy.
3. Check the preview URL before moving any domain. Confirm the venue links, the
   Stripe checkout, and `/welcome`.
4. Add `www.242consulting.com`, and redirect the apex to it. `metadataBase`,
   the canonical tag and the JSON-LD already point at the www host, so nothing
   in the code changes when the domain lands.
5. Point the Stripe payment link's success URL at `/welcome`.

Vercel Analytics starts reporting once deployed. Off Vercel its beacon 404s,
which is the one console error in local builds.

Images run through Next image optimization. The upstream spec disabled it
because assets are pre-processed; if you would rather serve them as-is, set
`images.unoptimized: true` in `next.config.ts` and drop the `qualities` entry.

## Before launch

- Add the photographs listed above.
- Fill in `role` for each tile in `content/copy.ts`, or leave blank to show place only.
- Set `site.linkedin` in `content/copy.ts` to render the LinkedIn link.
