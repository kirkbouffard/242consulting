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
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Venues", href: "#venues" },
    { label: "Process", href: "#process" },
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

// Logos render only where a normalized mark exists in /public/images/logos.
// Where it does not, the strip falls back to the venue name as a link.
export const logoStrip = {
  eyebrow: "Selected experience",
  venues: [
    { name: "Atlantis Paradise Island", file: "atlantis-mono.png", url: "https://www.atlantisbahamas.com/" },
    { name: "CÉ LA VI", file: "celavi-mono.png", url: "https://celavi.com/" },
    { name: "Savaya Bali", file: "savaya-mono.png", url: "https://www.savaya.com/" },
    { name: "Desa Kitsuné", file: "kitsune-mono.png", url: "https://desakitsune.com/" },
  ],
};

export const advisory = {
  id: "services",
  eyebrow: "Advisory",
  heading: "The business behind the experience.",
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
      title: "Network",
      body: "Twenty years of relationships across hospitality, wellness, and development, opened when they move your business forward.",
    },
  ],
  note: "Weekly leadership session. Direct access between sessions. Monthly priorities. On-site scoped separately.",
};

export const about = {
  id: "about",
  eyebrow: "About 242 Consulting",
  heading: "An operator in the room when it matters.",
  paragraphs: [
    "Kirk Bouffard has spent more than two decades turning ambitious hospitality and wellness concepts into operating businesses across the Bahamas, Singapore, Indonesia, and beyond.",
    "242 Consulting works with owners at the point where strategy needs to become standards, teams, reporting, and a guest experience people return for.",
  ],
  link: "Start a conversation",
};

export const process = {
  id: "process",
  eyebrow: "Process",
  heading: "Clarity first. Momentum next.",
  intro: "A focused operating rhythm that turns the biggest constraint into the next right decision.",
  steps: [
    {
      number: "01",
      title: "Diagnose",
      body: "A direct read on the business, the guest journey, and the constraint holding growth back.",
    },
    {
      number: "02",
      title: "Prioritise",
      body: "A short list of decisions, owners, and measures that the team can act on immediately.",
    },
    {
      number: "03",
      title: "Embed",
      body: "Weekly leadership, practical standards, and accountability that stays useful after the engagement.",
    },
  ],
};

// A tile shows its photograph when the file exists in /public/images, and falls
// back to a typographic entry when it does not. url points at the venue's own
// site so a reader can verify the record.
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

// The operator side of the practice. Advisory covers owners; the Circle covers
// the AGMs, GMs and ops leads carrying the floor.
export const circle = {
  id: "circle",
  eyebrow: "For operators",
  heading: "242 Circle.",
  intro: "A small room for AGMs, GMs, and ops leads carrying the floor every day.",
  // Set false to run the Circle as a single tier. Circle Plus then drops out of
  // the section entirely.
  showCirclePlus: true,
  tiers: [
    {
      id: "circle",
      name: "Circle",
      price: "$499",
      cadence: "per month",
      seats: "",
      checkoutUrl: "https://buy.stripe.com/28EbJ33zwgG1fxW1my5sA0a",
      points: [
        "Group call every two weeks",
        "WhatsApp access, 48 hour response",
        "Session recordings",
      ],
    },
    {
      id: "circle-plus",
      name: "Circle Plus",
      price: "$999",
      cadence: "per month",
      seats: "5 seats",
      // No payment link yet. Falls back to the mailto enquiry.
      checkoutUrl: "",
      points: [
        "Weekly group call",
        "WhatsApp access, 24 hour response",
        "One 30 minute 1:1 each month",
        "One document review each month",
      ],
    },
  ],
  note: "15 seats total. Waitlist when full.",
  cta: { label: "Request a seat", subject: "242 Circle" },
  ctaNote: "Seats confirmed by email. Monthly, cancel anytime.",
};

// Hidden confirmation page at /welcome. Not linked from the site, noindex.
export const welcome = {
  eyebrow: "242 Circle",
  heading: "You're in.",
  body: "Join the WhatsApp group below. The next call is [DATE]. Recordings and the question bank live in the group description.",
  link: "Join the WhatsApp group",
};

// Leave quote empty to omit the testimonial section entirely.
export const testimonial = {
  eyebrow: "What clients value",
  quote:
    "The difference was not another strategy deck. It was having someone who could see the operating reality and move the room.",
  credit: "Founder · Southeast Asia hospitality platform",
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
