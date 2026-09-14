// JSON-LD graph for the single page. Every value here is rendered somewhere on
// the page: nothing is written for crawlers that a reader cannot also see, and
// nothing is paraphrased. Sources are the copy constants, so the markup cannot
// drift from what ships.
import { about, advisory, circle, site } from "./copy";

const ORG = `${site.url}/#organization`;
const PERSON = `${site.url}/#kirk-bouffard`;
const RETAINED = `${site.url}/#retained`;
const CIRCLE = `${site.url}/#circle`;

// The markets the page actually names, in #about and the track record intro.
// "Worldwide" stays because the contact block says available globally, but it
// no longer stands alone.
const areaServed = [
  { "@type": "Country", name: "Bahamas" },
  { "@type": "City", name: "Las Vegas" },
  { "@type": "City", name: "St Tropez", alternateName: "Saint-Tropez" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "AdministrativeArea", name: "Bali" },
  "Worldwide",
];

const question = (item: { q: string; a: string }) => ({
  "@type": "Question",
  name: item.q,
  acceptedAnswer: { "@type": "Answer", text: item.a },
});

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG,
      name: site.name,
      url: `${site.url}/`,
      description: site.description,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      areaServed,
      founder: { "@id": PERSON },
      sameAs: [site.linkedin],
    },
    {
      "@type": "Person",
      "@id": PERSON,
      name: site.founder,
      jobTitle: "Founder",
      description: about.paragraphs[0],
      url: `${site.url}/#about`,
      worksFor: { "@id": ORG },
      sameAs: [site.linkedin],
    },
    {
      "@type": "Service",
      "@id": RETAINED,
      name: advisory.eyebrow,
      description: advisory.intro,
      url: `${site.url}/#${advisory.id}`,
      provider: { "@id": ORG },
      areaServed,
      audience: {
        "@type": "Audience",
        audienceType: "Founders, owners and developers",
      },
    },
    {
      "@type": "Service",
      "@id": CIRCLE,
      name: circle.eyebrow,
      description: circle.intro,
      url: `${site.url}/#${circle.id}`,
      provider: { "@id": ORG },
      areaServed,
      audience: {
        "@type": "Audience",
        audienceType: "GMs, AGMs and senior hospitality operators",
      },
      termsOfService: `${site.url}/terms`,
      offers: {
        "@type": "Offer",
        name: circle.eyebrow,
        url: circle.checkoutUrl,
        price: "499",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "Subscription",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "499",
          priceCurrency: "USD",
          billingDuration: 1,
          billingIncrement: 1,
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "MON",
          },
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      url: `${site.url}/`,
      mainEntity: [...advisory.faq, ...circle.faq].map(question),
    },
  ],
};
