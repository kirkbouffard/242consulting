import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { hero, site, work } from "@/content/copy";
import { assetExists } from "@/lib/assets";

// Deliberately not wrapped in Reveal. Starting the hero at opacity 0 blanked it
// until JS ran and took the h1 out of LCP candidacy, handing the measurement to
// a nav button.
export default function Hero() {
  const hasImage = assetExists(`/images/${hero.portrait.file}`);

  return (
    <section className="hero-section">
      <div className="content-width hero-grid">
        <div className="hero-copy">
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
        </div>

        <div className="hero-media">
          {hasImage ? (
            <EditorialImage
              file={hero.portrait.file}
              alt={hero.portrait.alt}
              priority
              sizes="(max-width: 960px) 100vw, 560px"
            />
          ) : null}
          <Reveal className="stats">
            {work.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
