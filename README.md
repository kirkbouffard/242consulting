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

## Before launch

- Add the photographs listed above.
- Fill in `role` for each tile in `content/copy.ts`, or leave blank to show place only.
- Set `site.linkedin` in `content/copy.ts` to render the LinkedIn link.
