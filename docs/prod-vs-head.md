# Production versus repo HEAD

Production: www.242consulting.com, captured 14 Sep 2026.
Repo HEAD: `9e7ef8d` on `claude/copy-test-to-242z-e0utdu`.

Production's tree does not exist in this repository. Proven below, not assumed.

## Production cannot be built from this repo

Three markers in the served HTML have never appeared in any commit on any branch:

| Marker in production | Occurrences in git history |
| --- | --- |
| `bahamas-venue.webp` | 0 |
| alt text "Entertainment venue, Bahamas" | 0 |
| text wordmark in `.nav-mark` | 0 since `301f81e` replaced it with the drawn SVG |

Two more disqualify every candidate commit:

- Production carries no Zumana tile. The repo has carried one since `a4a36bd`, the third commit
  in the project.
- Production's venue names are plain `<span>`. The repo has linked them to the venues' own sites
  since `37492c9`.

The repo did the copying, not the other way round. `9fbae9f` says so in its own message: it adopted
the live site's structure, then `9221d1b` renamed the Bahamas tile to Aura Nightclub. Production
still says "Entertainment venue, Bahamas", so production predates a change that only ever happened
in this repo.

Conclusion: no commit, branch or tag here produces what is live. There is nothing to tag as a
baseline.

## Present in production, absent from HEAD

### Third-party proof

- **Logo strip.** `.logo-strip`, eyebrow "Selected experience", four venue marks:
  `atlantis-mono.png`, `celavi-mono.png`, `savaya-mono.png`, `kitsune-mono.png`. Rendered as
  images, preloaded in `<head>`. This is the only borrowed-credibility element on either tree.
- **Testimonial, visible.** Same quote and credit as `content/copy.ts`, rendered. At HEAD the
  markup exists but `showTestimonial: false` holds it back.

### Sections

- **`#about`.** Eyebrow "About 242 Consulting", h2 "An operator in the room when it matters.",
  two paragraphs of biography covering the Bahamas, Singapore and Indonesia, then a mailto.
  This is the only place on either tree that answers why this person.
- **`#process`.** Eyebrow "Process", h2 "Clarity first. Momentum next.", three numbered cards:
  01 Diagnose, 02 Prioritise, 03 Embed.
- **Venue tiles with photographs.** Five of them, all loading real images.

### Assets

`/videos/hero.mp4`, `/images/hero-poster.jpg`, `/images/contact.webp`,
`/images/atlantis.webp`, `/images/bahamas-venue.webp`, `/images/celavi.webp`,
`/images/savaya.webp`, `/images/kitsune.webp`,
`/images/logos/atlantis-mono.png`, `/images/logos/celavi-mono.png`,
`/images/logos/savaya-mono.png`, `/images/logos/kitsune-mono.png`.

HEAD's `public/images` holds three files: `zumana.webp`, `kirk.webp`, `kirk-source.jpg`.

### Other

Autoplaying hero video with a still poster. Full bleed contact photograph under an overlay.
Nav reading About / Services / Venues / Process / Contact. Dark sage palette.

## Present at HEAD, absent from production

- Two doors chooser at `#choose`, with the founder portrait.
- The offers as products: Retained at `#owners`, 242 Circle at `#operators`, `$499` shown,
  live Stripe checkout, seat cap, cross links between the two.
- Six accordion questions across the two doors.
- `/terms`, noindex.
- Mobile sticky bar, and the nav taking a dark treatment on scroll.
- Zumana tile and its photograph, the only dated forward-looking claim on either tree.
- Drawn SVG logotype rather than a text wordmark.
- Vercel Analytics `track()` on seven events.
- Ivory palette across three grounds.

## What shipping HEAD to production would remove

Everything in the first section above. Named plainly:

1. The logo strip, which is the site's only third-party proof.
2. `#about`, the biography.
3. `#process`.
4. Five venue photographs, replaced by five imageless tiles.
5. The hero video and the contact photograph.
6. The testimonial, which is visible in production and gated off here.

It would add the two offers, the price, working checkout, the portrait and the terms page.
