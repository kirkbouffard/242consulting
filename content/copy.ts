// Canonical copy for the 242 Consulting site.
// Components render these strings verbatim. Do not paraphrase them in JSX.

export const site = {
  name: "242 Consulting",
  email: "kirk@242consulting.com",
  url: "https://www.242consulting.com",
  calendly: "https://calendly.com/kirk-242consulting/30min",
  linkedin: "https://www.linkedin.com/in/kirk-bouffard-077a785",
  title: "242 Consulting | Operating leadership for hospitality and wellness",
  description:
    "Hands-on operating leadership for hospitality and wellness owners, and the people running their venues. Kirk Bouffard. Based in Bali, available globally.",
  founder: "Kirk Bouffard",
};

export const nav = {
  wordmark: site.name,
  links: [
    { label: "Owners", href: "#owners" },
    { label: "Operators", href: "#operators" },
    { label: "Venues", href: "#venues" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Book a Call",
};

export const hero = {
  eyebrow: "Hospitality · Wellness · Development",
  heading: "Turn ambitious venues into businesses that perform.",
  sub: "Hands-on operating leadership for the owners building hospitality, wellness and destination businesses, and the operators running them day to day.",
  cta: "Book a Call",
  secondary: { label: "View the work", href: "#venues" },
  // Right column. Renders when the file lands; until then the column carries
  // the stats alone rather than a reserved hole.
  portrait: { file: "hero.webp", alt: "Savaya Bali hospitality venue" },
};

// Marks render only where a normalized mark exists. Until then the strip
// carries the venue names, which needs nobody's trademark. The label is what
// makes these a record of roles rather than a client roster.
export const logoStrip = {
  eyebrow: "Selected experience",
  venues: [
    { name: "Atlantis Paradise Island", file: "atlantis-mono.png", url: "https://www.atlantisbahamas.com/" },
    { name: "CÉ LA VI", file: "celavi-mono.png", url: "https://celavi.com/" },
    { name: "Savaya Bali", file: "savaya-mono.png", url: "https://www.savaya.com/" },
    { name: "Desa Kitsuné", file: "kitsune-mono.png", url: "https://desakitsune.com/" },
  ],
};

// The fork the whole site turns on. Owners go to bespoke advisory; operators
// buy the Circle. Each card carries its own route and nothing else.
export const choice = {
  id: "choose",
  eyebrow: "Two ways to work together",
  heading: "Two doors.",
  cards: [
    {
      id: "owners",
      label: "For owners",
      title: "Retained",
      body: "Senior advisory for founders, owners and developers across operations, design, guest experience and development.",
      format: "Weekly leadership session. Direct access between sessions. Monthly priorities. On-site scoped separately.",
      cap: "Three retained clients at a time.",
      meta: "Bespoke scope, agreed in conversation.",
      cta: "Start a conversation",
      tone: "bespoke",
      href: "#owners",
      event: "door_owners_click",
    },
    {
      id: "operators",
      label: "For operators",
      title: "242 Circle",
      body: "Ongoing practical support for GMs, AGMs and senior hospitality operators.",
      format: "Group call every two weeks · WhatsApp access, members answered within 24 hours · Session recordings",
      cap: "15 seats total. Waitlist when full.",
      meta: "$499 per month",
      cta: "Join 242 Circle",
      tone: "membership",
      href: "#operators",
      event: "door_operators_click",
    },
  ],
};

export const advisory = {
  id: "owners",
  label: "For owners",
  eyebrow: "Retained",
  // 16:9 anchor above the heading. Omitted until the file exists.
  anchor: { file: "door-owners.webp", alt: "Retained advisory" },
  heading: "Senior advisory, scoped to the business.",
  intro:
    "Operations, design intent, guest experience and development. Scoped to the constraint that is actually holding the business back, not to a fixed menu.",
  entries: [
    {
      title: "Operations",
      body: "Reporting, cost structure, team, and the decisions that let a business run without its founder in every room.",
    },
    {
      title: "Design intent",
      body: "Plans and spaces reviewed for how guests, staff, and service actually move. Good design gets photographed. Great design also works.",
    },
    {
      title: "Experience",
      body: "The guest or member journey from arrival to return, including programming, community, and standards.",
    },
    {
      title: "Development",
      body: "Two decades of relationships across hospitality, wellness, and development, opened when they move your business forward.",
    },
  ],
  note: "Weekly leadership session. Direct access between sessions. Monthly priorities. On-site scoped separately.",
  // Renders only once the file exists in /public/images. Until then the column
  // stays typographic, the same way the venue tiles degrade.
  // Bespoke and conversation-led. No retainer pricing on the page by design.
  cta: { label: "Start a conversation", subject: "Retained advisory" },
  ctaNote: "Enquiries answered within 24 hours",
  crossLink: { text: "Have an AGM who should be in the room? See Circle.", href: "#operators" },
  faq: [
    {
      q: "How does it start?",
      a: "A 30-minute intro call, then a written scope within 48 hours. We start the following Monday.",
    },
    {
      q: "What does a typical week look like?",
      a: "One 60-minute session on your calendar. Between sessions, you message and get a reply within 24 hours.",
    },
    {
      q: "What if it isn't working?",
      a: "Month to month, 30 days notice either side. No exit fee.",
    },
  ],
};

export const circle = {
  id: "operators",
  label: "For operators",
  eyebrow: "242 Circle",
  anchor: { file: "door-operators.webp", alt: "242 Circle" },
  heading: "The room operators actually needed.",
  intro: "Ongoing practical support for GMs, AGMs and senior hospitality operators.",
  // Checkout is open. The CTA goes straight to Stripe with nothing in the way.
  buyNow: true,
  price: "$499",
  cadence: "per month",
  points: [
    "Real operating problems, worked through with people carrying the same floor",
    "Peer discussion with GMs, AGMs and senior operators",
    "Practical hospitality insight you can use on the next shift",
    "Direct access to experienced operators",
    "Ongoing development, not a one-off course",
  ],
  included: "Group call every two weeks · WhatsApp access, members answered within 24 hours · Session recordings",
  terms: "Cancel anytime. No contract.",
  // Buy now. This goes straight to Stripe, never to the contact form.
  checkoutUrl: "https://buy.stripe.com/28EbJ33zwgG1fxW1my5sA0a",
  cta: "Join 242 Circle",
  note: "15 seats total. Waitlist when full.",
  ctaNote: "Secure checkout via Stripe. Monthly, cancel anytime. Seats confirmed in order of payment.",
  termsLabel: "Terms",
  crossLink: { text: "Own the venue? See Retained.", href: "#owners" },
  faq: [
    {
      q: "Who is it for?",
      a: "AGMs, GMs and operations leads in hospitality and wellness who want senior counsel without it going through their boss.",
    },
    {
      q: "What happens on the call?",
      a: "You bring the situation, the group works it live. Recorded so you can return to it, and seen by nobody outside the room.",
    },
    {
      q: "How do I cancel?",
      a: "From your Stripe customer portal, any time. Access ends at the close of the paid month.",
    },
  ],
};

// Restored and moved under the Retained accordion. The slot and its styling
// stay; set showTestimonial true once the quote carries a named attribution.
// An anonymous quote on a page with no price is worth less than no quote.
export const testimonial = {
  showTestimonial: false,
  eyebrow: "What clients value",
  quote:
    "The difference was not another strategy deck. It was having someone who could see the operating reality and move the room.",
  credit: "Founder · Southeast Asia hospitality platform",
};

// Plain language Circle terms. Linked from the Circle block and the footer,
// kept out of search.
export const terms = {
  id: "terms",
  eyebrow: "242 Circle",
  heading: "Terms.",
  intro: "What you are agreeing to when you join. No small print anywhere else.",
  points: [
    {
      title: "Billing",
      body: "$499 per month, charged monthly through Stripe from the date you join.",
    },
    {
      title: "Cancelling",
      body: "Cancel yourself from the Stripe customer portal, any time. No notice period and no exit fee.",
    },
    {
      title: "When access ends",
      body: "At the close of the month you have paid for. Nothing is prorated and nothing is clawed back.",
    },
    {
      title: "Recordings",
      body: "Calls are recorded for members only and deleted after 30 days.",
    },
    {
      title: "Keeping the room closed",
      body: "Recordings and anything shared in the group stay in the group. No redistribution, inside your company or outside it.",
    },
  ],
  back: "Back to 242 Consulting",
};

// Fixed bottom bar under 768px, after the hero scrolls away.
export const sticky = {
  links: [
    { label: "Owners", href: "#owners", event: "sticky_owners_click" },
    { label: "Operators", href: "#operators", event: "sticky_operators_click" },
    { label: "Venues", href: "#venues", event: "sticky_venues_click" },
    { label: "Contact", href: "#contact", event: "sticky_contact_click" },
  ],
};

export const about = {
  id: "about",
  eyebrow: "About 242 Consulting",
  heading: "An operator in the room when it matters.",
  portrait: { file: "kirk.webp", alt: "Kirk Bouffard" },
  paragraphs: [
    "Kirk Bouffard turns ambitious hospitality and wellness concepts into operating businesses across the Bahamas, Singapore, Indonesia, and beyond.",
    "242 Consulting works with owners at the point where strategy needs to become standards, teams, reporting, and a guest experience people return for.",
  ],
  link: "Start a conversation",
};

export const work = {
  id: "venues",
  eyebrow: "Track record",
  heading: "Built by operating.",
  intro:
    "Two decades operating in difficult environments. The Bahamas and Bali run on the same constraints: thin supply, imported inputs, permits and weather on their own schedule.",
  // One flat list, one label. Every entry here was operated by Kirk, so there
  // is no distinction left to draw and no titles to list. The label is
  // "Operated" rather than "Venues operated" because the Nassau entry is an
  // events engagement, not a venue, and it is the only line on the page where
  // 242 Consulting delivered under its own name.
  label: "Operated",
  // Order is deliberate. The two entries carrying substance lead, the two that
  // are names alone sit together at the end, so the list does not alternate
  // between dense and bare rows.
  // Entries carry files, not tiles: assetExists decides which images render, so
  // a missing file degrades the entry to typographic without touching this data.
  entries: [
    {
      id: "savaya",
      entity: "Savaya Group · Bali",
      venues: "Savaya, Desa Kitsuné, Zumana",
      note: "Zumana: commissioning and opening, August 2026. 35,000 sq ft beachfront destination.",
      url: "https://www.savaya.com/",
      files: ["zumana.webp", "savaya.webp", "kitsune.webp"],
      featured: true,
    },
    {
      // Kirk's own entity delivered this, so the name sits in the entity slot
      // rather than reading as a job he held. The clients are never named: the
      // entry is about the operating environment.
      id: "242",
      entity: "242 Consulting · Nassau, Bahamas",
      note: "Large-format events, up to 3,000 guests, repeatedly. The constraint was never the show. It was crew, power, permits and weather converging on a fixed date that could not move.",
      url: "",
      files: ["bahamas-venue.webp"],
    },
    {
      // One engagement, not two tiles.
      id: "atlantis",
      entity: "Atlantis Paradise Island / Aura Nightclub · Bahamas",
      url: "https://www.atlantisbahamas.com/",
      files: ["atlantis.webp"],
    },
    {
      id: "celavi",
      entity: "CÉ LA VI · Singapore",
      url: "https://celavi.com/",
      files: ["celavi.webp"],
    },
  ],
  stats: [
    { value: "20+", label: "Years operating" },
    { value: "$45M+", label: "P&L responsibility" },
    { value: "3", label: "Markets" },
  ],
};

// Hidden confirmation page at /welcome. Not linked from the site, noindex.
export const welcome = {
  eyebrow: "242 Circle",
  heading: "You're in.",
  body: "Join the WhatsApp group below. The next call is [DATE]. Recordings and the question bank live in the group description.",
  link: "Join the WhatsApp group",
};

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Building something people need to experience?",
  sub: "A 30-minute intro call. No pitch. We map the constraint and whether 242 Consulting is the right fit.",
  cta: "Book a 30-minute intro call",
  meta: "Enquiries answered within 24 hours · Based in Bali, available globally · ",
  linkedinLabel: "LinkedIn",
};

export const footer = {
  line: "242 Consulting · © 2026 · Hospitality and wellness operator advisory",
  termsLabel: "Terms",
};
