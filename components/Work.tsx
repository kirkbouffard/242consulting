import Image from "next/image";

import Reveal from "@/components/Reveal";
import { work } from "@/content/copy";
import { assetExists } from "@/lib/assets";

const spanClasses: Record<string, string> = {
  wide: "md:col-span-7 aspect-[3/2]",
  tall: "md:col-span-5 aspect-[4/5]",
  regular: "md:col-span-5 aspect-[3/2]",
};

export default function Work() {
  // A venue tile is dropped whenever its photograph is missing. No stand-ins.
  const tiles = work.tiles.filter((tile) => assetExists(tile.image));

  return (
    <section id={work.id} className="section scroll-mt-24">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{work.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[16ch]">{work.heading}</h2>
          <p className="mt-8 max-w-[52ch] text-[17px] text-[var(--color-secondary)]">
            {work.intro}
          </p>
        </Reveal>

        {tiles.length > 0 ? (
          <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 md:mt-28 md:grid-cols-12">
            {tiles.map((tile, index) => (
              <Reveal
                key={tile.place}
                className={`col-span-1 self-start ${spanClasses[tile.span] ?? spanClasses.regular} ${
                  index % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <figure className="h-full">
                  <div className="relative h-full w-full overflow-hidden bg-[var(--color-surface)]">
                    <Image
                      src={tile.image}
                      alt={tile.place}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-[13px] tracking-[0.02em] text-[var(--color-secondary)]">
                    {tile.role ? `${tile.place} · ${tile.role}` : tile.place}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal>
          <dl className="mt-24 grid gap-10 md:mt-32 md:grid-cols-3 md:gap-12">
            {work.stats.map((stat) => (
              <div key={stat.label} className="rule pt-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display block text-[48px] leading-none md:text-[64px]">
                    {stat.value}
                  </span>
                  <span className="mt-4 block text-[14px] text-[var(--color-secondary)]">
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
                  <p className="display text-[24px] leading-[1.35] md:text-[28px]">
                    {item.quote}
                  </p>
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
