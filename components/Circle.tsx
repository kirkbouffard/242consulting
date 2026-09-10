import Reveal from "@/components/Reveal";
import { circle } from "@/content/copy";

// The purchase. The primary action goes straight to Stripe: no contact form,
// no discovery call in the way.
export default function Circle() {
  return (
    <section id={circle.id} className="section section-tint">
      <div className="content-width offer-grid">
        <Reveal className="offer-heading">
          <p className="eyebrow">{circle.label}</p>
          <p className="offer-title">{circle.eyebrow}</p>
          <h2>{circle.heading}</h2>
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

          <div className="offer-cta">
            <a
              className="button button-solid"
              href={circle.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {circle.cta}
            </a>
            <p className="circle-cta-note">{circle.ctaNote}</p>
          </div>

          <p className="offer-note">{circle.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
