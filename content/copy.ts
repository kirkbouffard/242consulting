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
    { label: "Owners", href: "#advisory" },
    { label: "Operators", href: "#circle" },
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
  cards: [
    {
      id: "owners",
      label: "For owners",
      title: "Fractional Advisory",
      body: "Senior advisory for founders, owners and developers across operations, design, guest experience and development.",
      meta: "Bespoke scope, agreed in conversation.",
      cta: "Start a conversation",
      tone: "bespoke",
    },
    {
      id: "operators",
      label: "For operators",
      title: "242 Circle",
      body: "Ongoing practical support for GMs, AGMs and senior hospitality operators.",
      meta: "$499 per month",
      cta: "Join 242 Circle",
      tone: "membership",
    },
  ],
};

export const advisory = {
  id: "advisory",
  label: "For owners",
  eyebrow: "Fractional Advisory",
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
  portrait: { file: "kirk.webp", alt: "Kirk Bouffard", caption: "Kirk Bouffard, founder" },
  // Bespoke and conversation-led. No retainer pricing on the page by design.
  cta: { label: "Start a conversation", subject: "Fractional advisory" },
};

export const circle = {
  id: "circle",
  label: "For operators",
  eyebrow: "242 Circle",
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
  // Buy now. This goes straight to Stripe, never to the contact form.
  checkoutUrl: "https://buy.stripe.com/28EbJ33zwgG1fxW1my5sA0a",
  cta: "Join 242 Circle",
  note: "15 seats total. Waitlist when full.",
  ctaNote: "Monthly, cancel anytime. Seats confirmed by email.",
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
