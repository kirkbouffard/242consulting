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
    "Fractional operator advisory for founders and owners building hospitality and wellness businesses. Kirk Bouffard. Three retained clients at a time. Based in Bali, available globally.",
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
  sub: "Hands-on operating leadership for founders and owners building hospitality, wellness, and destination businesses. Clearer decisions, stronger teams, better guest experiences.",
  cta: "Book a Call",
  secondary: { label: "View the work", href: "#venues" },
  image: "/images/hero.webp",
  poster: "/images/hero-poster.jpg",
  video: "/videos/hero.mp4",
  alt: "Savaya Bali hospitality venue",
};

// The fork the whole site turns on. Owners go to bespoke advisory; operators
// buy the Circle. Each card carries its own route and nothing else.
export const choice = {
  id: "choose",
  eyebrow: "Two ways to work together",
  heading: "Two doors.",
  portrait: { file: "kirk.webp", alt: "Kirk Bouffard", caption: "Kirk Bouffard" },
  cards: [
    {
      id: "owners",
      label: "For owners",
      title: "Retained",
      body: "Senior advisory for founders, owners and developers across operations, design, guest experience and development.",
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
    "Senior advisory for founders, owners and developers across operations, design, guest experience and development.",
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
      body: "Twenty years of relationships across hospitality, wellness, and development, opened when they move your business forward.",
    },
  ],
  note: "Weekly leadership session. Direct access between sessions. Monthly priorities. On-site scoped separately.",
  // Renders only once the file exists in /public/images. Until then the column
  // stays typographic, the same way the venue tiles degrade.
  // Bespoke and conversation-led. No retainer pricing on the page by design.
  cta: { label: "Start a conversation", subject: "Retained advisory" },
  ctaNote: "Replies within 24 hours",
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
  price: "$499",
  cadence: "per month",
  points: [
    "Real operating problems, worked through with people carrying the same floor",
    "Peer discussion with GMs, AGMs and senior operators",
    "Practical hospitality insight you can use on the next shift",
    "Direct access to experienced operators",
    "Ongoing development, not a one-off course",
  ],
  included: "Group call every two weeks · WhatsApp access, 48 hour response · Session recordings",
  terms: "Cancel anytime. No contract.",
  // Buy now. This goes straight to Stripe, never to the contact form.
  checkoutUrl: "https://buy.stripe.com/28EbJ33zwgG1fxW1my5sA0a",
  cta: "Join 242 Circle",
  note: "15 seats total. Waitlist when full.",
  ctaNote: "Replies within 24 hours · Payments via Stripe",
  crossLink: { text: "Own the venue? See Retained.", href: "#owners" },
  faq: [
    {
      q: "Who is it for?",
      a: "AGMs, GMs and operations leads in hospitality and wellness who want senior counsel without it going through their boss.",
    },
    {
      q: "What happens on the call?",
      a: "You bring the situation, we work it live. Recorded, so you can go back to it.",
    },
    {
      q: "How do I cancel?",
      a: "From your Stripe customer portal, any time. Access ends at the close of the paid month.",
    },
  ],
};

// Restored and moved under the Retained accordion. Leave quote empty to omit.
export const testimonial = {
  eyebrow: "What clients value",
  quote:
    "The difference was not another strategy deck. It was having someone who could see the operating reality and move the room.",
  credit: "Founder · Southeast Asia hospitality platform",
};

// Fixed bottom bar under 768px, after the hero scrolls away.
export const sticky = {
  links: [
    { label: "Owners", href: "#owners", event: "sticky_owners_click" },
    { label: "Operators", href: "#operators", event: "sticky_operators_click" },
  ],
};

export const work = {
  id: "venues",
  eyebrow: "Track record",
  heading: "Built by operating.",
  intro:
    "More than two decades opening, operating, and developing hospitality and wellness businesses across five markets.",
  tiles: [
    {
      file: "atlantis.webp",
      place: "Atlantis Paradise Island, Bahamas",
      role: "Resort operations and hospitality foundations",
      url: "https://www.atlantisbahamas.com/",
      ratio: "wide",
    },
    {
      file: "aura.webp",
      place: "Aura Nightclub, Atlantis Bahamas",
      role: "General management and operating leadership",
      url: "https://www.atlantisbahamas.com/things-to-do/entertainment/aura-nightclub",
      ratio: "portrait",
    },
    {
      file: "celavi.webp",
      place: "CÉ LA VI, Singapore",
      role: "Venue development and guest experience",
      url: "https://celavi.com/",
      ratio: "portrait",
    },
    {
      file: "savaya.webp",
      place: "Savaya Group, Bali",
      role: "Head of Operations across a clifftop venue portfolio",
      url: "https://www.savaya.com/",
      ratio: "portrait",
    },
    {
      file: "kitsune.webp",
      place: "Desa Kitsuné, Bali",
      role: "Lifestyle destination and hospitality development",
      url: "https://desakitsune.com/",
      ratio: "portrait",
    },
    {
      file: "zumana.webp",
      place: "Zumana, Sunset Bay Kuta",
      role: "Savaya Group. Commissioning and opening, August 2026. 35,000 sq ft beachfront destination.",
      url: "https://zumanabali.com/",
      ratio: "wide",
    },
  ],
  stats: [
    { value: "20+", label: "Years operating" },
    { value: "$45M+", label: "P&L responsibility" },
    { value: "5", label: "Markets shaped across hospitality, wellness, and development" },
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
  sub: "A 30 minute intro call. No pitch. We map the constraint and whether 242 Consulting is the right fit.",
  cta: "Book a 30 min intro call",
  meta: "Replies within 24 hours · Based in Bali, available globally · ",
  linkedinLabel: "LinkedIn",
  image: "/images/contact.webp",
  alt: "Savaya Bali cliffside venue architecture",
};

export const footer = {
  line: "242 Consulting · © 2026 · Hospitality and wellness operator advisory",
};
