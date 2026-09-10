import Image from "next/image";

import Reveal from "@/components/Reveal";
import { work } from "@/content/copy";
import { assetExists } from "@/lib/assets";

export default function Work() {
  // The record is typographic first. A photograph joins a row only when a real
  // one exists; there are no stand-ins and no borrowed marks.
  const rows = work.tiles.map((tile) => ({ ...tile, hasImage: assetExists(tile.image) }));

  return (
    <section id={work.id} className="section scroll-mt-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{work.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[16ch] text-balance">{work.heading}</h2>
          <p className="mt-8 max-w-[52ch] text-[17px] text-pretty text-[var(--color-secondary)]">
            {work.intro}
          </p>
        </Reveal>

        <ol className="mt-20 md:mt-28">
          {rows.map((row, index) => (
            <Reveal
              key={row.place}
              as="li"
              delay={Math.min(index, 4) * 60}
              className="rule py-10 md:py-14"
            >
                {row.hasImage ? (
                  <div className="relative mb-10 aspect-[3/2] w-full overflow-hidden bg-[var(--color-surface)] md:mb-12 md:w-[72%]">
                    <Image
                      src={row.image}
                      alt={row.place}
                      fill
                      sizes="(min-width: 768px) 72vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="grid gap-y-5 md:grid-cols-12 md:items-baseline md:gap-x-8">
                  <span className="eyebrow md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[clamp(30px,4vw,54px)] leading-[1.06] md:col-span-6">
                    {row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-venue"
                      >
                        {row.place}
                      </a>
                    ) : (
                      row.place
                    )}
                  </h3>
                  {row.role ? (
                    <p className="max-w-[42ch] text-[15px] text-pretty text-[var(--color-secondary)] md:col-span-5">
                      {row.role}
                    </p>
                  ) : null}
                </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <dl className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-16">
            {work.stats.map((stat) => (
              <div key={stat.label} className="rule pt-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display figures-oldstyle block text-[52px] leading-none md:text-[72px]">
                    {stat.value}
                  </span>
                  <span className="mt-5 block max-w-[22ch] text-[14px] text-[var(--color-secondary)]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {work.testimonials.length > 0 ? (
          <Reveal>
            <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-2">
              {work.testimonials.map((item) => (
                <blockquote key={item.attribution} className="rule pt-8">
                  <p className="display text-[24px] leading-[1.35] md:text-[28px]">{item.quote}</p>
                  <footer className="mt-6 text-[13px] text-[var(--color-secondary)]">
                    {item.attribution}
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
