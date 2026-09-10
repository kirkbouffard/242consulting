import Reveal from "@/components/Reveal";
import { advisory } from "@/content/copy";

export default function Advisory() {
  return (
    <section id={advisory.id} className="section section-dark">
      <div className="content-width advisory-grid">
        <Reveal className="section-heading">
          <p className="eyebrow">{advisory.eyebrow}</p>
          <h2>{advisory.heading}</h2>
        </Reveal>
        <Reveal className="advisory-list">
          {advisory.entries.map((entry) => (
            <article className="advisory-entry" key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))}
          <p className="advisory-note">{advisory.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
