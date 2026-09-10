import { logoStrip } from "@/content/copy";
import { assetExists } from "@/lib/assets";

export default function LogoStrip() {
  // Marks render only where a normalized logo file is present. Until then the
  // strip carries the venue names, which needs nobody's trademark.
  const withMarks = logoStrip.venues.filter((venue) =>
    assetExists(`/images/logos/${venue.file}`),
  );
  const showMarks = withMarks.length === logoStrip.venues.length;

  return (
    <section className="logo-strip" aria-label="Selected venue experience">
      <p className="eyebrow">{logoStrip.eyebrow}</p>
      {showMarks ? (
        <div className="logo-row">
          {logoStrip.venues.map((venue) => (
            <a key={venue.name} href={venue.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/logos/${venue.file}`} alt={venue.name} />
            </a>
          ))}
        </div>
      ) : (
        <div className="logo-fallback">
          {logoStrip.venues.map((venue) => (
            <a key={venue.name} href={venue.url} target="_blank" rel="noopener noreferrer">
              {venue.name}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
