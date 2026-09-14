import Reveal from "@/components/Reveal";
import { about, site } from "@/content/copy";
import { mailto } from "@/lib/assets";

// Sits immediately before the track record so the two read as one proof block:
// who this is, then what he has run.
export default function About() {
  return (
    <section id={about.id} className="section section-ivory-3">
      <div className="content-width about-grid">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.heading}</h2>
        </Reveal>
        <Reveal className="about-copy">
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
