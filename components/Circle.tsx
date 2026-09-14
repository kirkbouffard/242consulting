import Accordion from "@/components/Accordion";
import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { circle } from "@/content/copy";
import { assetExists } from "@/lib/assets";

// The purchase. The primary action goes straight to Stripe: no contact form,
// no discovery call in the way.
export default function Circle() {
  const hasAnchor = assetExists(`/images/${circle.anchor.file}`);

  return (
    <section id={circle.id} className="section section-ivory-2">
      <div className="content-width offer-grid">
        <Reveal className="offer-heading">
          {hasAnchor ? (
            <div className="door-anchor">
              <EditorialImage
                file={circle.anchor.file}
                alt={circle.anchor.alt}
                sizes="(max-width: 960px) 100vw, 40vw"
              />
            </div>
          ) : null}
          <p className="eyebrow">{circle.label}</p>
          <h2 className="offer-title">{circle.eyebrow}</h2>
          <p className="offer-lede">{circle.heading}</p>
          <p className="offer-intro">{circle.intro}</p>
        </Reveal>

        <Reveal className="offer-body">
          <div className="circle-price">
            <strong>{circle.price}</strong>
            <span>{circle.cadence}</span>
          </div>

          <ul className="circle-points">
            {circle.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="circle-included">{circle.included}</p>
          <p className="circle-terms">{circle.terms}</p>

          <Accordion items={circle.faq} />

          <p className="offer-note circle-seats-note">{circle.note}</p>

          <div className="offer-cta offer-cta-stacked">
            <TrackedLink
              className="button button-solid"
              href={circle.checkoutUrl}
              event="cta_circle_email"
              external
            >
              {circle.cta}
            </TrackedLink>
            <p className="cta-note">
              {circle.ctaNote}{" "}
              <a className="terms-link" href="/terms">
                {circle.termsLabel}
              </a>
            </p>
          </div>
          <p className="cross-link">
            <a href={circle.crossLink.href}>{circle.crossLink.text}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
