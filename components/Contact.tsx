import Image from "next/image";

import Reveal from "@/components/Reveal";
import { contact, site } from "@/content/copy";
import { assetExists, mailto } from "@/lib/assets";

export default function Contact() {
  const hasImage = assetExists(contact.image);

  return (
    <section
      id={contact.id}
      className="section relative scroll-mt-24 overflow-hidden bg-[var(--color-surface)]"
    >
      {hasImage ? (
        <>
          <Image
            src={contact.image}
            alt={contact.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(18,17,16,0.8)]" />
        </>
      ) : null}

      <div className="container-content relative">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[18ch]">{contact.heading}</h2>
          <p className="mt-8 max-w-[48ch] text-[17px] text-[var(--color-secondary)]">
            {contact.sub}
          </p>

          <a
            href={mailto()}
            className="link-underline display mt-14 inline-block text-[clamp(28px,5vw,64px)] leading-[1.1]"
          >
            {site.email}
          </a>

          <p className="mt-10 text-[15px]">{contact.subjectLine}</p>

          <p className="mt-4 text-[13px] tracking-[0.02em] text-[var(--color-secondary)]">
            {contact.meta.join(" · ")}
            {site.linkedin ? (
              <>
                {" · "}
                <a
                  href={site.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-underline"
                >
                  {contact.linkedinLabel}
                </a>
              </>
            ) : null}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
