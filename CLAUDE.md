# 242 Consulting site

Single page marketing site for Kirk Bouffard's fractional advisory practice. Premium, editorial,
image-led. Register: luxury hotel group brand site, not a consultancy brochure.

This file tracks the live site at www.242consulting.com. Where the two disagree, the live site wins.

## Stack
Next.js 16 App Router, TypeScript, Tailwind v4, next/image, next/font (Cormorant Garamond 300 and
400 display, Inter body). No component library. No CMS. No forms. Vercel Analytics. Deploy on Vercel.

## Hard rules
- Never output an em dash or en dash in any file. Use period, comma, or "to". Lint for U+2014 and U+2013 before every commit.
- Sentence case for all headings. Uppercase only for 11px eyebrow labels and pill buttons.
- No AI-generated images for named venues. If a real photo is missing, the tile falls back to a typographic entry.
- Venue logos render only where a normalized mark exists and the working relationship is verifiable. Until then the strip carries venue names.
- Rendered images live in /public/images as WebP, under 350KB. No required ratio: nothing crops
  them any more, so the gate no longer demands 3:2. It wants WebP, under 350KB, and enough pixels
  for DPR 2 at the size the frame actually renders: 2400px wide for a landscape frame at the full
  1160 column, 1120px for an upright one, which .frame-upright caps at 560. Source photography sits
  alongside the rendered files and is ignored by the gate. Enforced by /scripts/check-images.ts in
  prebuild.
- Photographs render uncropped at their own ratio. That is the default and it applies to the hero
  image and every track record entry. EditorialImage takes no shape for them: it reads the
  dimensions scripts/prepare-images.mjs records in image-blur-data.json and passes them to
  next/image as explicit width and height, so CLS stays 0 with no CSS aspect-ratio and the box
  sizes to the photograph. There is no max-width: the container is narrower than any rendered
  asset, so a cap never engaged.
  An upright frame is capped at 560 by .frame-upright, which EditorialImage applies from the
  recorded dimensions: at the full 1160 column a portrait photograph is a 1500px tall block and a
  2x upscale.
  Pass a shape ONLY where a crop is genuinely wanted AND the source ratio is known. One caller
  qualifies: the founder portrait, shape="portrait", because 4:5 is a hard rule for that slot and
  prepare-images renders kirk.webp at exactly 1000x1250, so the box holds the slot and crops
  nothing. Everything in the sources map is rendered 2400x1600, so any shape over one of those
  files is a crop by accident.
- The founder portrait is the one cropped slot on the page, 4:5. It takes the same treatment as the
  venue tiles, which is none. Crop only.
  Drop the untouched headshot at /public/images/kirk-source.jpg; the build crops it and generates its
  blur. Both sit outside the check-images gate by design.
- No hotlinked assets.

## Palette
Warm ivory ground, not the former dark ink. ivory #f7f3eb, ivory-2 #efe9dd, ivory-3 #ede6d8,
espresso #2a211b (ink), espresso-2 #574a3f (muted body), rule #b9a888.
One rule colour across all three grounds. The former rule-deep is gone: #b9a888 is already darker
than it was, so a second "deeper" token would have inverted its own purpose.

Sections alternate: hero and #venues on ivory, #choose and #operators on ivory-2, #owners and
#contact on ivory-3. Footer is espresso with ivory text. The nav takes the same espresso at 96
percent once the page scrolls, driven by a data-scrolled flag that ScrollState sets on the root, so
Nav can stay a server component and keep reading the logotype off disk.

Two doors cards sit on ivory-3, one step darker than their ivory-2 section, 1px rule border, no
shadow. The buyable side is now marked by its solid button and the price, not by a bronze border.

Every text pair clears 4.5:1, the tightest being bronze-ink on ivory-3 at 4.87:1. The section rules
do NOT clear 3:1 and are not meant to: they are decorative dividers, not UI boundaries. #b9a888
lands at 2.10:1 on ivory and 1.87:1 on ivory-3. Reaching 3:1 would need roughly #9c8767, dark enough
to band the page.
Bronze is split by job: #9c7c4f for rules, borders and hovers, #7a5e32 for small text. The 11px
uppercase eyebrows fail contrast on ivory at the lighter bronze, so text always takes the darker one.
No grain overlay.

## Type scale
h1 clamp(46px, 6vw, 88px) lh 1.02; section h2 clamp(30px, 3.6vw, 52px) lh 1.08; offer title
clamp(30px, 3.4vw, 46px); circle price clamp(48px, 6vw, 72px); advisory h3 24px;
stats 46px, which is the ceiling: "$45M+" fills the middle cell's 118px at that size;
body Inter 16px/1.65; eyebrow 11px 0.2em bronze-ink.
Headings take text-wrap: balance, body copy takes text-wrap: pretty off the body element.
Cormorant Garamond renders OLDSTYLE figures by default, which is why the stats read 20+ with the 2
at x-height and $45M+ with the 4 and 5 descending. That is the intended register. The lnum feature
is in the served font if lining figures are ever wanted: font-variant-numeric: lining-nums.

## Layout and motion
Max content 1160px, inline gutter 24px at every width. Section padding 112px desktop, 80px mobile,
separated by 1px rules with the three alternating grounds set out under Palette. Fixed ivory nav
76px, espresso once scrolled, scroll-margin-top 88px on sections.
Hero and contact are sized to their content, not 100svh. Offer sections are a 5fr 7fr grid that
collapses to one column under 960px. Rounded corners: 4px images and cards, 999px pills.

Motion. The observer still fires on .reveal at threshold 0.12, but the block is only the trigger:
its direct children are what move, each one 70ms behind the last, so a section assembles rather
than switching on. The index is a --reveal-i custom property set by :nth-child and multiplied once,
not a rule per element, and it stops growing after the seventh child.
Body copy travels 10px over 350ms ease-out. Display type, h1 and h2 inside a reveal, travels 18px
over 640ms on cubic-bezier(0.16, 1, 0.3, 1), so a heading is still settling when the copy under it
has arrived. The h1 lives in the hero, which is not a reveal, so nothing matches that half of the
rule today; it is there for any h1 that later sits inside one.
Rules draw rather than fade. Section top borders and the .advisory-entry hairlines are ::before
elements at scaleX(0) with a left origin, 700ms on cubic-bezier(0.22, 1, 0.36, 1). The border stays
in the box as transparent so the geometry is unchanged, and a section takes its cue from the first
.reveal inside it going visible, via :has().
Underlines draw left to right on hover rather than fading a border-color: a linear-gradient sized
0 to 100% over 260ms, box-decoration-break: clone so a link that wraps is underlined on both lines.
Applies to .venue-link, .email-link and .cross-link. Resting borders are untouched.
prefers-reduced-motion: reduce resolves all of it to the finished state and sets every transition
to none. Anything added here goes in that block too.

## Two offers
The page turns on one decision and carries nothing that blurs it. Owners get bespoke advisory sold
in conversation. Operators buy the Circle outright.

The two offers are called the doors. Owners: label "For owners", title "Retained", anchored at
#owners. No price anywhere. Only action is a mailto, "Start a conversation".
Operators: label "For operators", title "242 Circle", anchored at #operators. circle.buyNow is true:
the monthly price leads the column and every "Join 242 Circle" button goes straight to the Stripe
link in a new tab. Never to the contact form, never behind a discovery call. The seat cap sits above
the CTA, the checkout note and Terms link below it. The chooser card and the Circle section share
that label, so they share the destination.

Each door carries, in order: heading, list, accordion, CTA with its note, then a cross link to the
other door. The Retained door also carries the testimonial, directly under its accordion.

The doors take no image. There used to be a 16:9 anchor slot above each heading, .door-anchor,
waiting on door-owners.webp and door-operators.webp. Those files were never in prepare-images, never
in the image gate and never in docs/pending-assets.md, so nothing was coming and nothing could have
validated them if it had. The slot, the CSS and the copy entries are deleted. Do not re-add a frame
for files that are not on their way: if the doors ever want art, add the asset to the pipeline and
the gate first, then the slot.

Do not add process sections, service grids or a third offer.

## Page order and copy
Copy is canonical in /content/copy.ts. Do not paraphrase it. Sections:
1. Nav: vector logotype left, Owners / Operators / Venues / Contact, "Book a Call" pill to Calendly.
   The logo strip that used to sit between the hero and the doors is unmounted while the four mono
   marks are missing. Component and CSS stay in the tree. See docs/pending-assets.md.
2. Hero: two columns. Left is eyebrow, h1, one-sentence sub, "Book a Call" pill and "View the
   work". Right is hero.webp above the three stats: 20+ years operating, $45M+ P&L responsibility,
   5 markets. The stat labels stay to one line. The number tracks the markets the page actually
   names: #about lists the Bahamas, Las Vegas, St Tropez, Singapore and Bali, and the track record
   intro sorts the same five into the ones that set the standard and the ones where it had to be
   built. Move the number only when that list moves.
   The hero is not wrapped in Reveal: it is the LCP and must not fade in.
3. Two doors (#choose): eyebrow, h2, then two cards, owners then operators, at the normal section
   start across the full content width. The operators card is the one that can be bought, so it
   carries the solid button and the price. Nothing else goes in this section. Its one job is making
   a reader pick a door, so no portrait, no image, no third element.
4. Retained (#owners): four entries (Operations, Design intent, Experience, Development), closing
   note, accordion, testimonial slot (off by default, see below), mailto, cross link to #operators.
5. 242 Circle (#operators): price, five focus points, what is included, "Cancel anytime. No
   contract.", accordion, Stripe button, cross link to #owners.
6. Track record (#venues): eyebrow, heading, intro, then one flat list under a single label,
   "OPERATED", set in the eyebrow treatment but in espresso-2 rather than bronze so it reads as a
   label on the list and not as a second section opening. Four entries in a fixed order: Savaya
   Group (featured, larger image treatment), 242 Consulting Nassau, Atlantis / Aura, CE LA VI. No
   groups and no per-entry role or title lines: every entry was operated by Kirk, so there is
   nothing to distinguish. The two entries carrying a supporting line lead; the two that are names
   alone sit together at the end. Every entry keeps the same padding whether or not it carries a
   line or an image. The label is "Operated", never "Venues operated": the Nassau entry is an
   events engagement, not a venue, and it is the only entry where 242 Consulting delivered under
   its own name. Entity names link to the venue's own site where one exists; the 242 Consulting
   entry has no link by design, because its clients are not named. The stats live in the hero.
   #about sits immediately above it, so the two read as one proof block: who this is, then what he
   has run. #about is the founder portrait in the left column, 4:5, with eyebrow, h2, both
   paragraphs and the mailto sharing its top edge in the right. No figcaption: his name opens the
   first paragraph. Mobile stacks the portrait first. Neither section repeats the other's duration
   claim; "Two decades" belongs to the track record intro only.
7. Contact (#contact): Calendly pill and mailto, LinkedIn.
8. Footer: line plus a Terms link.

/terms is a noindex route carrying the Circle terms in plain language. Linked from the Circle block
and the footer.

The testimonial is gated behind testimonial.showTestimonial, default false. The slot and styling
stay. Turn it on when the quote carries a named attribution: anonymous praise on a page with no
price does less than nothing.

The page says 15 seats and the Stripe link is deliberately uncapped, so the cap is a statement of
intent rather than something the checkout enforces. Do not "fix" this in code. See README.md for how
to close it on the Stripe side once members approach 15.

## Accordion and sticky bar
One accordion per door, after the list and before the CTA. The trigger is a real button inside an h3,
one level under the section h2, so the heading order has no gap and Enter, Space and tab order come
from the platform. aria-expanded and aria-controls are set, one panel open at a time, no chevron. Serif question 20px, Inter answer 15px secondary, 1px rules.

Under 768px a 52px bar is fixed to the bottom: espresso at 96 percent with blur, 1px top rule, Inter
14px ivory, "Owners", "Operators", "Venues" and "Contact" separated by vertical rules. The mobile nav
drops its links entirely, so the bar is the only in-page navigation under 768px and has to carry all
four. main takes 52px of bottom padding at that width so the bar never covers content. It appears
once the hero leaves the viewport and hides again while contact is in view, where the routes are
already on screen. It shares its treatment with the scrolled nav and the footer, so the dark
surfaces on the page read as one family rather than three accidents.

## Analytics
Vercel Analytics. track() fires door_owners_click, door_operators_click, cta_retained_email,
cta_circle_email, cta_contact_email, sticky_owners_click, sticky_operators_click,
sticky_venues_click, sticky_contact_click. Clicks are wired through components/TrackedLink.tsx so
the offer sections stay server rendered. Note cta_circle_email
is the name for the Circle purchase button, which goes to Stripe rather than to email.

## Metadata
Title "242 Consulting | Operating leadership for hospitality and wellness". One description for all
tags. Canonical https://www.242consulting.com/, and og:url is the same string: the site answers on
both the apex and www, and www is the one it claims.
The card is generated, not shipped: app/opengraph-image.tsx, 1200x630 PNG at /opengraph-image, ivory
ground, espresso wordmark off app/_brand/logotype.svg, hero.heading in Cormorant beneath it,
optically centred. Next's file convention emits og:image and twitter:image from it, so neither is
written by hand in layout.tsx. Satori will not read woff2, so the card carries its own
app/_brand/cormorant-300.ttf, the variable face instanced at 300 and subset to latin.
JSON-LD ProfessionalService,
founder Person Kirk Bouffard, areaServed Worldwide. Theme-color #f7f3eb.

## The mark
app/_brand/logotype.svg and app/icon.svg are generated by scripts/generate-marks.mjs from Cormorant
Garamond outlines converted to paths. The mark does not depend on a webfont loading. Regenerate by
hand when it changes; it is not part of the build.

## Definition of done
next build passes. Lighthouse mobile: performance 90+, accessibility 100, LCP under 2.5s. No image
over 350KB in output. /opengraph-image returns image/png at 1200x630. All anchors resolve.
Dash lint passes.
Tested at 375, 768, 1440, 1920.

## Next.js version notes
@AGENTS.md
