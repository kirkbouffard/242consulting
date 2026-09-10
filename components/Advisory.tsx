import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { advisory } from "@/content/copy";
import { assetExists, mailto } from "@/lib/assets";

export default function Advisory() {
  const hasPortrait = assetExists(`/images/${advisory.portrait.file}`);

  return (
    <section id={advisory.id} className="section">
      <div className="content-width offer-grid">
        <Reveal className="offer-heading">
          <p className="eyebrow">{advisory.label}</p>
          <p className="offer-title">{advisory.eyebrow}</p>
          <h2>{advisory.heading}</h2>
          <p className="offer-intro">{advisory.intro}</p>
          {hasPortrait ? (
            <figure className="advisory-portrait">
              <EditorialImage
                file={advisory.portrait.file}
                alt={advisory.portrait.alt}
                sizes="(max-width: 960px) 60vw, 30vw"
              />
              <figcaption>{advisory.portrait.caption}</figcaption>
            </figure>
          ) : null}
        </Reveal>

        <Reveal className="offer-body">
          {advisory.entries.map((entry) => (
            <article className="advisory-entry" key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))}
          <p className="offer-note">{advisory.note}</p>
          <div className="offer-cta">
            <a className="button button-outline" href={mailto(advisory.cta.subject)}>
              {advisory.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
