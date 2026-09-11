import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { work } from "@/content/copy";
import { assetExists } from "@/lib/assets";

export default function Work() {
  const tiles = work.tiles.map((tile) => ({
    ...tile,
    hasImage: assetExists(`/images/${tile.file}`),
  }));

  return (
    <section id={work.id} className="section section-ivory">
      <div className="content-width">
        <Reveal className="work-intro">
          <p className="eyebrow">{work.eyebrow}</p>
          <h2>{work.heading}</h2>
          <p>{work.intro}</p>
        </Reveal>

        <div className="work-grid">
          {tiles.map((tile, index) => (
            <Reveal
              key={tile.file}
              className={`work-item work-${index + 1} ${tile.ratio} ${
                tile.hasImage ? "" : "no-image"
              }`}
            >
              {tile.hasImage ? (
                <>
                  <EditorialImage file={tile.file} alt={tile.place} />
                  <p>
                    <span>
                      <a
                        className="venue-link"
                        href={tile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tile.place}
                      </a>
                    </span>{" "}
                    <b>·</b> {tile.role}
                  </p>
                </>
              ) : (
                <>
                  <p className="venue-name">
                    <a
                      className="venue-link"
                      href={tile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tile.place}
                    </a>
                  </p>
                  <p>{tile.role}</p>
                </>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="stats">
          {work.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
