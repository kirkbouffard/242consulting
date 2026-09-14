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
  // Same mechanism as the canonical: without this the route inherits the
  // layout's og:url, which names the homepage.
  openGraph: { url: `${site.url}/terms` },
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
