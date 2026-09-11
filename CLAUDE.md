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
- Rendered images live in /public/images as WebP, under 350KB, 3:2. Source photography sits alongside them and is ignored by the gate. Enforced by /scripts/check-images.ts in prebuild.
- The founder portrait and the door anchors are the exceptions to 3:2. Portrait is 4:5, anchors 16:9.
- The founder portrait is the one exception to 3:2. It is cropped 4:5 and graded warm by the portraits map in /scripts/prepare-images.mjs, so a neutral studio grey sits in the ivory palette rather than fighting it. Drop the untouched headshot at /public/images/kirk-source.jpg; the build crops, grades and generates its blur. It is outside the check-images gate by design.
- No hotlinked assets.

## Palette
Warm ivory ground, not the former dark ink. ivory #f7f3eb, ivory-2 #efe9dd (tinted sections),
espresso #2a211b (ink), espresso-2 #574a3f (muted body), rule #e0d7c7.
Bronze is split by job: #9c7c4f for rules, borders and hovers, #7a5e32 for small text. The 11px
uppercase eyebrows fail contrast on ivory at the lighter bronze, so text always takes the darker one.
No grain overlay.

## Type scale
h1 clamp(42px, 6vw, 88px) lh 1.02; section h2 clamp(30px, 3.6vw, 52px) lh 1.08; offer title
clamp(30px, 3.4vw, 46px); circle price clamp(48px, 6vw, 72px); advisory h3 24px; stats 46px;
body Inter 16px/1.65; eyebrow 11px 0.2em bronze-ink.

## Layout and motion
Max content 1160px. Section padding 112px desktop, 80px mobile, separated by 1px rules with
alternating ivory and ivory-2 grounds. Fixed ivory nav 76px, scroll-margin-top 88px on sections.
Hero and contact are sized to their content, not 100svh. Offer sections are a 5fr 7fr grid that
collapses to one column under 960px. Fade-up on scroll 350ms 10px at threshold 0.12, disabled under
prefers-reduced-motion. Rounded corners: 4px images and cards, 999px pills.

## Two offers
The page turns on one decision and carries nothing that blurs it. Owners get bespoke advisory sold
in conversation. Operators buy the Circle outright.

The two offers are called the doors. Owners: label "For owners", title "Retained", anchored at
#owners. No price anywhere. Only action is a mailto, "Start a conversation".
Operators: label "For operators", title "242 Circle", anchored at #operators. The monthly price leads
the column and every "Join 242 Circle" button goes straight to the Stripe link. Never to the contact
form, never behind a discovery call. The chooser card and the Circle section share that label, so
they share the destination.

Each door carries, in order: an optional 16:9 anchor image, heading, list, accordion, CTA with its
note, then a cross link to the other door. The Retained door also carries the testimonial, directly
under its accordion.

Do not add process sections, service grids or a third offer.

## Page order and copy
Copy is canonical in /content/copy.ts. Do not paraphrase it. Sections:
1. Nav: vector logotype left, Owners / Operators / Venues / Contact, "Book a Call" pill to Calendly.
2. Hero: eyebrow, h1, sub, "Book a Call" pill and "View the work".
3. Two doors (#choose): h2 with the founder portrait to its left on desktop and above it on mobile,
   then two cards, owners then operators. The operators card is the one that can be bought, so it
   carries the bronze border and the solid button.
4. Retained (#owners): four entries (Operations, Design intent, Experience, Development), closing
   note, accordion, testimonial, mailto, cross link to #operators.
5. 242 Circle (#operators): price, five focus points, what is included, "Cancel anytime. No
   contract.", accordion, Stripe button, cross link to #owners.
6. Venues (#venues): 12 column grid, six tiles, each name linking to the venue's own site.
   Stats: 20+ years, $45M+ P&L, 5 markets.
7. Contact (#contact): Calendly pill and mailto, LinkedIn.
8. Footer.

## Accordion and sticky bar
One accordion per door, after the list and before the CTA. The trigger is a real button inside an h4,
so Enter, Space and tab order come from the platform. aria-expanded and aria-controls are set, one
panel open at a time, no chevron. Serif question 20px, Inter answer 15px secondary, 1px rules.

Under 768px a 52px bar is fixed to the bottom: #121110 at 94 percent with blur, 1px top rule, Inter
14px bone, "Owners" and "Operators" centred either side of a vertical rule. It appears once the hero
leaves the viewport and hides again while contact is in view, where both routes are already on
screen. It is the one place the old dark palette still appears, as deliberate contrast against ivory.

## Analytics
Vercel Analytics. track() fires door_owners_click, door_operators_click, cta_retained_email,
cta_circle_email, cta_contact_email, sticky_owners_click, sticky_operators_click. Clicks are wired
through components/TrackedLink.tsx so the offer sections stay server rendered. Note cta_circle_email
is the name for the Circle purchase button, which goes to Stripe rather than to email.

## Metadata
Title "242 Consulting | Operating leadership for hospitality and wellness". One description for all
tags. Canonical https://www.242consulting.com/. og-image.jpg 1200x630 generated by
app/og-image.jpg/route.tsx from the hero still with the mark bottom left. JSON-LD ProfessionalService,
founder Person Kirk Bouffard, areaServed Worldwide. Theme-color #f7f3eb.

## The mark
app/_brand/logotype.svg and app/icon.svg are generated by scripts/generate-marks.mjs from Cormorant
Garamond outlines converted to paths. The mark does not depend on a webfont loading. Regenerate by
hand when it changes; it is not part of the build.

## Definition of done
next build passes. Lighthouse mobile: performance 90+, accessibility 100, LCP under 2.5s. No image
over 350KB in output. og-image returns image/jpeg. All anchors resolve. Dash lint passes.
Tested at 375, 768, 1440, 1920.

## Next.js version notes
@AGENTS.md
