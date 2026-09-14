import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import TrackedLink from "@/components/TrackedLink";
import { advisory } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Advisory() {
  return (
    <section id={advisory.id} className="section section-ivory-3">
      <div className="content-width offer-grid">
        <Reveal className="offer-heading">
          <p className="eyebrow">{advisory.label}</p>
          <h2 className="offer-title">{advisory.eyebrow}</h2>
          <p className="offer-lede">{advisory.heading}</p>
          <p className="offer-intro">{advisory.intro}</p>
        </Reveal>

        <Reveal className="offer-body">
          {advisory.entries.map((entry) => (
            <article className="advisory-entry" key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))}
          <p className="offer-note">
            <span>{advisory.note}</span>
          </p>

          <Accordion items={advisory.faq} />
          <Testimonial />

          <div className="offer-cta">
            <TrackedLink
              className="button button-outline"
              href={mailto(advisory.cta.subject)}
              event="cta_retained_email"
            >
              {advisory.cta.label}
            </TrackedLink>
            <p className="cta-note">{advisory.ctaNote}</p>
          </div>
          <p className="cross-link">
            <a href={advisory.crossLink.href}>{advisory.crossLink.text}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
