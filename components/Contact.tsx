import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { contact, site } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Contact() {
  return (
    <section id={contact.id} className="section section-ivory-3 contact-section">
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
          <TrackedLink className="email-link" href={mailto()} event="cta_contact_email">
            {site.email}
          </TrackedLink>
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
