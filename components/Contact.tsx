import Reveal from "@/components/Reveal";
import { contact, site } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Contact() {
  return (
    <section id={contact.id} className="section contact-section">
      <Reveal className="content-width contact-copy">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.heading}</h2>
        <p>{contact.sub}</p>
        <div className="contact-actions">
          <a
            className="button button-solid"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.cta}
          </a>
          <a className="email-link" href={mailto()}>
            {site.email}
          </a>
        </div>
        <small>
          {contact.meta}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedinLabel}
          </a>
        </small>
      </Reveal>
    </section>
  );
}
