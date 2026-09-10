import Reveal from "@/components/Reveal";
import { hero, site } from "@/content/copy";

export default function Hero() {
  return (
    <section className="hero-section">
      <Reveal className="hero-copy content-width">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.heading}</h1>
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-actions">
          <a
            className="button button-solid"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.cta}
          </a>
          <a className="text-link" href={hero.secondary.href}>
            {hero.secondary.label} <span aria-hidden="true">↘</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
