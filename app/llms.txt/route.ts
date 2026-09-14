import { about, advisory, choice, circle, contact, site, work } from "@/content/copy";

// Plain text summary for language models. Generated from content/copy.ts so it
// cannot drift from the page. Facts and routes only: no pitch, no adjectives
// the page does not already carry.
export const dynamic = "force-static";

const body = `# ${site.name}

> ${site.description}

${about.paragraphs[0]}
${about.paragraphs[1]}

## Offers

Two, and nothing else is sold.

### Retained (for owners)
${advisory.intro}
Format: ${advisory.note}
Capacity: ${choice.cards[0].cap}
Price: none published. Scope is agreed in conversation.
Route: ${site.url}/#${advisory.id}

### 242 Circle (for operators)
${circle.intro}
Included: ${circle.included}
Price: ${circle.price} ${circle.cadence}. ${circle.terms}
Seats: ${circle.note}
Checkout: ${circle.checkoutUrl}
Terms: ${site.url}/terms
Route: ${site.url}/#${circle.id}

## Markets
Bahamas, Las Vegas, St Tropez, Singapore, Bali. Based in Bali, available globally.

## Operated
${work.entries
  .map((entry) => `- ${entry.entity}${entry.venues ? `: ${entry.venues}` : ""}`)
  .join("\n")}

## Contact
Email: ${site.email}
Intro call: ${site.calendly}
LinkedIn: ${site.linkedin}
Response time: within 24 hours.

## Notes
${contact.sub}
This site is one page. /terms carries the 242 Circle terms in full.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
