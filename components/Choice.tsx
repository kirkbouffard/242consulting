import Reveal from "@/components/Reveal";
import { advisory, choice, circle } from "@/content/copy";
import { mailto } from "@/lib/assets";

// The fork. Two routes, side by side, so the visitor self-selects before
// reading either offer in full.
export default function Choice() {
  return (
    <section id={choice.id} className="section section-tint">
      <div className="content-width">
        <Reveal>
          <p className="eyebrow">{choice.eyebrow}</p>
        </Reveal>
        <div className="choice-grid">
          {choice.cards.map((card) => (
            <Reveal className={`choice-card choice-${card.tone}`} key={card.id}>
              <p className="choice-label">{card.label}</p>
              <h2>{card.title}</h2>
              <p className="choice-body">{card.body}</p>
              <p className="choice-meta">{card.meta}</p>
              {card.tone === "membership" ? (
                // Same label as the button in the Circle section, so it must do
                // the same thing: straight to checkout, never to a form.
                <a
                  className="button button-solid"
                  href={circle.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.cta}
                </a>
              ) : (
                <a className="button button-outline" href={mailto(advisory.cta.subject)}>
                  {card.cta}
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
