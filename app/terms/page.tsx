import type { Metadata } from "next";

import { terms } from "@/content/copy";

// Linked from the Circle block and the footer, kept out of search.
export const metadata: Metadata = {
  title: "242 Circle terms",
  robots: { index: false, follow: false },
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

        <a className="text-link" href="/">
          {terms.back}
        </a>
      </div>
    </main>
  );
}
