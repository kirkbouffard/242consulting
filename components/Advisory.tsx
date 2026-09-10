import Reveal from "@/components/Reveal";
import { advisory } from "@/content/copy";

export default function Advisory() {
  return (
    <section id={advisory.id} className="section scroll-mt-24 bg-[var(--color-surface)]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{advisory.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[20ch] text-balance">{advisory.heading}</h2>
        </Reveal>

        {/* Indented off the section rail so the page does not read as one column. */}
        <div className="mt-20 md:mt-28 md:grid md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            {advisory.lenses.map((lens, index) => (
              <Reveal key={lens.title} delay={index * 60}>
                <div className="rule grid gap-y-4 py-8 md:grid-cols-9 md:gap-x-8 md:py-10">
                  <div className="flex items-baseline gap-4 md:col-span-4">
                    <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="display text-[26px] md:text-[30px]">{lens.title}</h3>
                  </div>
                  <p className="max-w-[44ch] text-[15px] text-pretty text-[var(--color-secondary)] md:col-span-5">
                    {lens.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="display mt-20 max-w-[24ch] text-[clamp(22px,2.4vw,32px)] leading-[1.3] md:mt-28">
            {advisory.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
