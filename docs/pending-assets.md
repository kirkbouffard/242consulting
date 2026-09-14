# Pending assets

Ten photographs and marks exist on production at www.242consulting.com but have never been
committed to this repository or to `kirkbouffard/test`, on any branch. The site is built to degrade
without them: every slot falls back to a typographic entry, so the branch is complete and shippable
as it stands. It is not finished.

Every status code and byte count below is measured, not reported. Each file was confirmed with a
HEAD request against production; the sizes are the `content-length` those requests returned. Treat
them as fact and do not re-probe.

Do not try to fetch the files themselves from a Claude Code sandbox. The egress proxy denies
`242consulting.com`, `www.242consulting.com` and `*.vercel.app` with a 403 at the CONNECT stage.
That is organization network policy, it applies on both sandboxes, and there is no route around it.
The Vercel MCP tool can reach the host and confirm a file exists, but it returns response bodies
decoded as UTF-8, which replaces every non-ASCII byte with U+FFFD and destroys the image. Kirk
uploads these by hand.

## What to place where

Six photographs into `public/images/`:

| file | bytes |
| --- | --- |
| `hero.webp` | 294,258 |
| `atlantis.webp` | 209,338 |
| `bahamas-venue.webp` | 114,496 |
| `celavi.webp` | 132,218 |
| `savaya.webp` | 294,258 |
| `kitsune.webp` | 200,134 |

Four marks into `public/images/logos/`:

| file | bytes |
| --- | --- |
| `atlantis-mono.png` | 22,819 |
| `celavi-mono.png` | 9,197 |
| `savaya-mono.png` | 102,875 |
| `kitsune-mono.png` | 18,047 |

All ten return HTTP 200 and all ten are under the 350KB gate in `scripts/check-images.ts`.

`contact.webp` is on production too, at 75,890 bytes, and is deliberately not on this list. The
contact section is heading, line, CTA, email, and takes no art. Its reference was removed from
`content/copy.ts` and from the image gate. Do not add it back because the file exists.

## Check hero.webp against savaya.webp before shipping

Both are recorded at exactly 294,258 bytes and both are captioned Savaya on production. That is
almost certainly one file under two names. If they turn out to be identical, the hero and the
featured track record entry will carry the same photograph two screens apart, which reads as a
mistake rather than as a motif.

```
cmp public/images/hero.webp public/images/savaya.webp && echo "IDENTICAL, ask Kirk for a second frame"
```

Raise it with Kirk rather than shipping it.

## What the page does without them

The site shipped to production without any of these. Two things were changed to make that read as a
choice rather than as a page waiting on assets, and both change back when the files land.

**The logo strip is unmounted.** With no marks it rendered as a labelled empty band, and its
typographic fallback would have repeated the same four venue names the track record lists 3,000px
further down. `components/LogoStrip.tsx` and its CSS are still in the tree, untouched and unused.
Restoring it is two lines in `app/page.tsx`: the import, and `<LogoStrip />` between `<Hero />` and
`<Choice />`. Do that when all four `-mono.png` files exist, not before: the strip is all or nothing
by design and three of four falls back to names.

**The hero stats were scaled up** from 38px to 46px to carry the right column alone. 46px is the
ceiling at the current layout, not a preference. The middle cell has 118px of clear width and
"$45M+" measures 159px at 64px, so anything past 47px runs the number through the divider and into
"3". When `hero.webp` lands it takes the top of that column and the numbers go back down.

## What each one does on arrival

`hero.webp` fills the hero's right column above the stats. It is the only image on the page that
carries `priority`, so it is the LCP candidate: check LCP stays under 2.5s once it lands.

The four mono marks restore the logo strip below the hero, under the label "Selected experience".

The venue photographs attach by filename through `assetExists` in `lib/assets.ts`. Nothing needs
wiring. `components/Work.tsx` reads `files` off each entry in `content/copy.ts`, filters to the
ones that exist on disk, and gives the entry its images. The Savaya entry lists three files and
takes the larger featured treatment only once more than one of them is present.

## Pipeline

Drop the rendered `.webp` files in directly. `scripts/prepare-images.mjs` leaves a target alone when
its source image is absent, keeps it, and generates the blur placeholder from it into
`image-blur-data.json`. It does not need matching `-source.jpg` files.

The source map in that script was corrected in `de3cfbc`: it still listed `aura.webp`, renamed to
`bahamas-venue.webp` two commits earlier, so the Nassau tile would have shipped without a blur
placeholder while every other tile had one.

After placing the files, `npm run build` runs the gate. It fails on anything over 350KB and warns on
anything under 2400px wide or off 3:2.
