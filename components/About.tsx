import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { about, site } from "@/content/copy";
import { assetExists, mailto } from "@/lib/assets";

// Sits immediately before the track record so the two read as one proof block:
// who this is, then what he has run. The portrait lives here rather than at the
// doors, because this is the section the portrait is about.
export default function About() {
  const hasPortrait = assetExists(`/images/${about.portrait.file}`);

  return (
    <section id={about.id} className="section section-ivory-3">
      <div className="content-width about-grid">
        {hasPortrait ? (
          <Reveal className="about-portrait">
            <EditorialImage
              file={about.portrait.file}
              alt={about.portrait.alt}
              shape="portrait"
              sizes="(max-width: 960px) 100vw, 360px"
            />
          </Reveal>
        ) : null}
        <Reveal className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.heading}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <a className="text-link" href={mailto()} aria-label={`${about.link}, ${site.email}`}>
            {about.link} <span aria-hidden="true">↘</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
