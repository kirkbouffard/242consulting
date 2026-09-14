import type { Metadata } from "next";
import Link from "next/link";

import { site, terms } from "@/content/copy";

// Linked from the Circle block and the footer, and indexed. This is not
// boilerplate: cancel any time, no notice period, no exit fee is exactly what a
// hesitant buyer searches for before paying. It is in the sitemap.
export const metadata: Metadata = {
  title: "242 Circle terms",
  // Its own canonical. Without this the route inherits the layout's, which
  // points at the homepage, and an indexed page whose canonical names a
  // different URL is a page that does not get indexed.
  alternates: { canonical: `${site.url}/terms` },
  // Declaring openGraph here REPLACES the layout's rather than merging into it,
  // so every field the card needs has to be restated. The image is the one that
  // cannot be: it comes from the opengraph-image file convention, which only
  // attaches to its own segment. app/terms/opengraph-image.tsx re-exports the
  // homepage card for exactly that reason.
  openGraph: {
    type: "website",
    url: `${site.url}/terms`,
    siteName: site.name,
    title: "242 Circle terms",
    description: site.description,
  },
};

export default function TermsPage() {
  return (
    <main className="terms-page">
      <div className="terms-copy">
        <p className="eyebrow">{terms.eyebrow}</p>
        <h1>{terms.heading}</h1>
        <p className="terms-intro">{terms.intro}</p>

        <dl className="terms-list">
          {terms.points.map((point) => (
            <div className="terms-item" key={point.title}>
              <dt>{point.title}</dt>
              <dd>{point.body}</dd>
            </div>
          ))}
        </dl>

        <Link className="text-link" href="/">
          {terms.back}
        </Link>
      </div>
    </main>
  );
}
