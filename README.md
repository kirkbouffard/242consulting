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

## Manual steps, not enforced by code

**Cap the Circle payment link at 15 purchases.** The page advertises 15 seats and
checkout is open, so nothing in this repo stops a sixteenth person paying. Set the
limit on the Stripe side: Stripe Dashboard, Payment links, the 242 Circle link,
then set "Limit the number of payments" to 15. Until that is set, the seat cap on
the page is a claim the checkout will not honour.

Set the same limit again if the payment link is ever recreated. The link lives in
`content/copy.ts` as `circle.checkoutUrl`.

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

- `hero.webp`, `contact.webp` (full bleed backgrounds)
- `atlantis.webp`, `bahamas.webp`, `celavi.webp`, `savaya.webp`, `desa-kitsune.webp` (track record grid)

A venue tile is dropped from the grid when its file is absent. The hero and
contact sections fall back to flat surface color. No stand-in art is generated.

## Open graph

`/og-image.jpg` is generated at build time by `app/og-image.jpg/route.tsx`.
It composites the hero still with the mark bottom left, renders through
`next/og`, and converts to JPEG with sharp. It carries no live text, so no font
is loaded there.

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
