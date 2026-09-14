import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { choice } from "@/content/copy";

// The fork. Two routes, side by side, so the visitor self-selects before
// reading either door in full. Nothing else belongs in this section: the
// founder portrait sits in #about, where the copy is about him.
export default function Choice() {
  return (
    <section id={choice.id} className="section section-ivory-2">
      <div className="content-width">
        <Reveal className="doors-head">
          <p className="eyebrow">{choice.eyebrow}</p>
          <h2>{choice.heading}</h2>
        </Reveal>

        <div className="choice-grid">
          {choice.cards.map((card) => (
            <Reveal className={`choice-card choice-${card.tone}`} key={card.id}>
              <p className="choice-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p className="choice-body">{card.body}</p>
              <p className="choice-format">{card.format}</p>
              <p className="choice-cap">{card.cap}</p>
              <p className="choice-meta">{card.meta}</p>
              <TrackedLink
                className={
                  card.tone === "membership" ? "button button-solid" : "button button-outline"
                }
                href={card.href}
                event={card.event}
              >
                {card.cta}
              </TrackedLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
