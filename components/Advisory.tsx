import Accordion from "@/components/Accordion";
import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import TrackedLink from "@/components/TrackedLink";
import { advisory } from "@/content/copy";
import { assetExists, mailto } from "@/lib/assets";

export default function Advisory() {
  const hasAnchor = assetExists(`/images/${advisory.anchor.file}`);

  return (
    <section id={advisory.id} className="section">
      <div className="content-width offer-grid">
        <Reveal className="offer-heading">
          {hasAnchor ? (
            <div className="door-anchor">
              <EditorialImage
                file={advisory.anchor.file}
                alt={advisory.anchor.alt}
                sizes="(max-width: 960px) 100vw, 40vw"
              />
            </div>
          ) : null}
          <p className="eyebrow">{advisory.label}</p>
          <p className="offer-title">{advisory.eyebrow}</p>
          <h2>{advisory.heading}</h2>
          <p className="offer-intro">{advisory.intro}</p>
        </Reveal>

        <Reveal className="offer-body">
          {advisory.entries.map((entry) => (
            <article className="advisory-entry" key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))}
          <p className="offer-note">{advisory.note}</p>

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
