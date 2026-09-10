import Reveal from "@/components/Reveal";
import { circle } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Circle() {
  const tiers = circle.tiers.filter(
    (tier) => tier.id !== "circle-plus" || circle.showCirclePlus,
  );

  return (
    <section id={circle.id} className="section section-surface">
      <div className="content-width advisory-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">{circle.eyebrow}</p>
          <h2>{circle.heading}</h2>
          <p className="circle-intro">{circle.intro}</p>
        </Reveal>

        <Reveal>
          <div className="circle-tiers">
            {tiers.map((tier) => (
              <div className="circle-tier" key={tier.name}>
                <div className="circle-tier-head">
                  <h3>{tier.name}</h3>
                  <p className="circle-price">
                    {tier.price} <span>{tier.cadence}</span>
                  </p>
                  {tier.seats ? <p className="circle-seats">{tier.seats}</p> : null}
                </div>
                <ul>
                  {tier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="advisory-note">{circle.note}</p>

          <div className="circle-cta">
            <a className="button button-brass" href={mailto(circle.cta.subject)}>
              {circle.cta.label}
            </a>
            <p className="circle-cta-note">{circle.ctaNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
