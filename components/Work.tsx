import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { work } from "@/content/copy";
import { assetExists } from "@/lib/assets";

type Entry = {
  id: string;
  entity: string;
  venues?: string;
  note?: string;
  url: string;
  files: string[];
  featured?: boolean;
};

// The entity is a link only where there is a venue site to point at. The 242
// Consulting entry has none by design: its clients are not named.
function Entity({ entry }: { entry: Entry }) {
  if (!entry.url) return <>{entry.entity}</>;
  return (
    <a className="venue-link" href={entry.url} target="_blank" rel="noopener noreferrer">
      {entry.entity}
    </a>
  );
}

function WorkEntry({ entry }: { entry: Entry }) {
  // assetExists decides what renders. Drop a file in and the entry gains an
  // image with no edit here.
  const images = entry.files.filter((file) => assetExists(`/images/${file}`));
  const featured = entry.featured && images.length > 1;

  return (
    <Reveal className={`work-entry${featured ? " work-entry-featured" : ""}`}>
      {images.length ? (
        <div className={featured ? "work-media work-media-featured" : "work-media"}>
          <EditorialImage
            file={images[0]}
            alt={entry.entity}
            sizes={featured ? "(max-width: 760px) 100vw, 1160px" : "(max-width: 760px) 100vw, 760px"}
          />
          {images.length > 1 ? (
            <div className="work-media-row">
              {images.slice(1).map((file) => (
                <EditorialImage
                  key={file}
                  file={file}
                  alt={entry.entity}
                  sizes="(max-width: 760px) 50vw, 380px"
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="work-copy">
        <h3 className="work-entity">
          <Entity entry={entry} />
        </h3>
        {entry.venues ? <p className="work-venues">Venues: {entry.venues}</p> : null}
        {entry.note ? <p className="work-note">{entry.note}</p> : null}
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id={work.id} className="section section-ivory">
      <div className="content-width">
        <Reveal className="work-intro">
          <p className="eyebrow">{work.eyebrow}</p>
          <h2>{work.heading}</h2>
          <p>{work.intro}</p>
        </Reveal>

        <Reveal>
          <p className="work-label">{work.label}</p>
        </Reveal>

        {work.entries.map((entry) => (
          <WorkEntry entry={entry as Entry} key={entry.id} />
        ))}
      </div>
    </section>
  );
}
