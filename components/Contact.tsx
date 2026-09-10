import EditorialImage from "@/components/EditorialImage";
import Reveal from "@/components/Reveal";
import { contact, site } from "@/content/copy";
import { assetExists, mailto } from "@/lib/assets";

export default function Contact() {
  const hasImage = assetExists(contact.image);

  return (
    <section id={contact.id} className="contact-section">
      {hasImage ? (
        <div className="contact-media">
          <EditorialImage file="contact.webp" alt={contact.alt} sizes="100vw" />
        </div>
      ) : null}
      <div className="contact-overlay" />
      <Reveal className="contact-copy">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.heading}</h2>
        <p>{contact.sub}</p>
        <div className="contact-actions">
          <a
            className="button button-brass"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.cta}
          </a>
          <a className="email-link contact-email" href={mailto()}>
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
