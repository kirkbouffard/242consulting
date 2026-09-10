// Canonical copy for the 242 Consulting site.
// Components render these strings verbatim. Do not paraphrase them in JSX.

export const site = {
  name: "242 Consulting",
  email: "kirk@242consulting.com",
  url: "https://www.242consulting.com",
  title: "242 Consulting | Operating leadership for hospitality and wellness",
  description:
    "Fractional operator advisory for hospitality and wellness founders and owners. Retained advisory and the 242 Circle, led by Kirk Bouffard.",
  founder: "Kirk Bouffard",
  // Set to the full profile URL to render the LinkedIn link in the contact line.
  linkedin: "",
};

export const nav = {
  wordmark: site.name,
  emailLabel: site.email,
};

export const hero = {
  eyebrow: "Hospitality · Wellness",
  heading: "Operating leadership for places people choose.",
  sub: "Fractional operator advisory for founders and owners. Hands-on, not at arm's length.",
  links: [
    { label: "For owners: retained advisory", href: "#owners" },
    { label: "For operators: 242 Circle", href: "#operators" },
  ],
  image: "/images/hero.webp",
  video: "/videos/hero.mp4",
  alt: "",
};

export const ways = {
  eyebrow: "Engagement",
  heading: "Two doors. Same operator.",
  owners: {
    id: "owners",
    eyebrow: "For owners",
    title: "242 Retained",
    lead: "A standing seat at the table for founders and owners building the thing themselves.",
    points: [
      "Weekly working session",
      "Direct access between sessions",
      "Operations, commercial, and design review",
      "Monthly priorities set and tracked",
      "On-site work scoped separately",
    ],
    notes: ["Three clients at a time, no more.", "Retainer scoped on the intro call."],
    cta: { label: "Enquire about 242 Retained", subject: "242 Retained" },
  },
  operators: {
    id: "operators",
    eyebrow: "For operators",
    title: "242 Circle",
    lead: "A small room for AGMs, GMs, and ops leads carrying the floor every day.",
    tiers: [
      {
        name: "Circle",
        price: "$500",
        cadence: "per month",
        seats: "",
        points: [
          "Group call every two weeks",
          "WhatsApp access, 48 hour response",
          "Session recordings",
        ],
      },
      {
        name: "Circle Plus",
        price: "$1,000",
        cadence: "per month",
        seats: "5 seats",
        points: [
          "Weekly group call",
          "WhatsApp access, 24 hour response",
          "One 30 minute 1:1 each month",
          "One document review each month",
        ],
      },
    ],
    notes: ["15 seats total. Waitlist when full."],
    cta: { label: "Enquire about 242 Circle", subject: "242 Circle" },
  },
};

export const advisory = {
  id: "advisory",
  eyebrow: "Advisory",
  heading: "The business behind the experience.",
  lenses: [
    {
      title: "Operations",
      body: "Systems, staffing, and standards that hold when the founder is not in the room.",
    },
    {
      title: "Design intent",
      body: "Design decisions read through service flow, cost to operate, and how guests actually move.",
    },
    {
      title: "Experience",
      body: "The sequence a guest travels, from arrival to the reason they come back.",
    },
    {
      title: "Network",
      body: "Operators, chefs, and partners built over twenty years across three regions.",
    },
  ],
  closing: "Both tracks draw on the same four lenses.",
};

// Roles are left blank until confirmed. A tile renders its place alone when role is "".
// A photograph joins a row only when the file exists in /public/images.
// url points at the venue's own site so a reader can verify the record for
// themselves. Leave it "" and the name renders as plain text.
export const work = {
  id: "work",
  eyebrow: "Track record",
  heading: "Built by operating.",
  intro:
    "Two decades inside the rooms, running resorts, restaurants, and beach clubs at scale.",
  tiles: [
    {
      place: "Atlantis",
      role: "",
      url: "https://www.atlantisbahamas.com/",
      image: "/images/atlantis.webp",
      span: "wide",
    },
    {
      place: "Aura Nightclub, Atlantis Bahamas",
      role: "",
      url: "https://www.atlantisbahamas.com/things-to-do/entertainment/aura-nightclub",
      image: "/images/aura.webp",
      span: "tall",
    },
    {
      place: "CÉ LA VI",
      role: "",
      url: "https://celavi.com/",
      image: "/images/celavi.webp",
      span: "regular",
    },
    {
      place: "Savaya",
      role: "Head of Operations across the group's venue portfolio. Opened Zumana, Kuta, August 2026.",
      url: "https://www.savaya.com/",
      image: "/images/savaya.webp",
      span: "regular",
    },
    {
      place: "Zumana, Sunset Bay Kuta",
      role: "Savaya Group. Commissioning and opening, August 2026. 35,000 sq ft beachfront destination.",
      url: "https://zumanabali.com/",
      image: "/images/zumana.webp",
      span: "wide",
    },
    {
      place: "Desa Kitsuné",
      role: "",
      url: "https://desakitsune.com/",
      image: "/images/desa-kitsune.webp",
      span: "wide",
    },
  ],
  stats: [
    { value: "20+", label: "years operating" },
    { value: "$45M+", label: "P&L responsibility" },
    { value: "50%+", label: "operating margins held over five years" },
  ],
  // Leave empty to omit the testimonial block entirely.
  testimonials: [] as { quote: string; attribution: string }[],
};

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Building something people need to experience?",
  sub: "A 30 minute intro call. No pitch. We map the constraint and whether 242 is the right fit.",
  subjectLine: "Put Retained or Circle in the subject line.",
  meta: ["Replies within 24 hours", "Based in Bali, available globally"],
  linkedinLabel: "LinkedIn",
  image: "/images/contact.webp",
  alt: "",
};

export const footer = {
  line: "242 Consulting · © 2026 · Hospitality and wellness operator advisory",
};
