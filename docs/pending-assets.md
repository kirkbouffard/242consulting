# Pending assets

Eleven photographs and marks exist on production at www.242consulting.com but have never been
committed to this repository or to `kirkbouffard/test`, on any branch. The site is built to degrade
without them: every slot falls back to a typographic entry, so the branch is complete and shippable
as it stands. It is not finished.

Do not try to fetch them from a Claude Code sandbox. The egress proxy denies
`242consulting.com`, `www.242consulting.com` and `*.vercel.app` with a 403 at the CONNECT stage.
That is organization network policy, it applies on both sandboxes, and there is no route around it.
The Vercel MCP tool can reach the host and confirm a file exists, but it returns response bodies
decoded as UTF-8, which replaces every non-ASCII byte with U+FFFD and destroys the image. Kirk
uploads these by hand.

## What to place where

Seven photographs into `public/images/`:

| file | bytes |
| --- | --- |
| `hero.webp` | 294,258 |
| `atlantis.webp` | 209,338 |
| `bahamas-venue.webp` | 114,496 |
| `celavi.webp` | 132,218 |
| `savaya.webp` | 294,258 |
| `kitsune.webp` | 200,134 |
| `contact.webp` | 75,890 |

Four marks into `public/images/logos/`:

| file | bytes |
| --- | --- |
| `atlantis-mono.png` | 22,819 |
| `celavi-mono.png` | 9,197 |
| `savaya-mono.png` | 102,875 |
| `kitsune-mono.png` | 18,047 |

All eleven return HTTP 200 on production and all eleven are under the 350KB gate in
`scripts/check-images.ts`.

## Check hero.webp against savaya.webp before shipping

Both are recorded at exactly 294,258 bytes and both are captioned Savaya on production. That is
almost certainly one file under two names. If they turn out to be identical, the hero and the
featured track record entry will carry the same photograph two screens apart, which reads as a
mistake rather than as a motif.

```
cmp public/images/hero.webp public/images/savaya.webp && echo "IDENTICAL, ask Kirk for a second frame"
```

Raise it with Kirk rather than shipping it.

## What each one does on arrival

`hero.webp` fills the hero's right column above the stats. It is the only image on the page that
carries `priority`, so it is the LCP candidate: check LCP stays under 2.5s once it lands.

The four mono marks restore the logo strip below the hero, under the label "Selected experience".
The strip is all or nothing by design, in `components/LogoStrip.tsx`: it renders marks only when
every one of them exists, and otherwise carries the venue names as type. Three of four leaves the
names in place.

The venue photographs attach by filename through `assetExists` in `lib/assets.ts`. Nothing needs
wiring. `components/Work.tsx` reads `files` off each entry in `content/copy.ts`, filters to the
ones that exist on disk, and gives the entry its images. The Savaya entry lists three files and
takes the larger featured treatment only once more than one of them is present.

`contact.webp` is referenced by `content/copy.ts` but no component renders it today. Decide whether
the contact section wants art before adding it, rather than adding it because the file arrived.

## Pipeline

Drop the rendered `.webp` files in directly. `scripts/prepare-images.mjs` leaves a target alone when
its source image is absent, keeps it, and generates the blur placeholder from it into
`image-blur-data.json`. It does not need matching `-source.jpg` files.

The source map in that script was corrected in `de3cfbc`: it still listed `aura.webp`, renamed to
`bahamas-venue.webp` two commits earlier, so the Nassau tile would have shipped without a blur
placeholder while every other tile had one.

After placing the files, `npm run build` runs the gate. It fails on anything over 350KB and warns on
anything under 2400px wide or off 3:2.
