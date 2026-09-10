import Reveal from "@/components/Reveal";
import { advisory } from "@/content/copy";

export default function Advisory() {
  return (
    <section id={advisory.id} className="section scroll-mt-24 bg-[var(--color-surface)]">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{advisory.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[20ch]">{advisory.heading}</h2>
        </Reveal>

        <div className="mt-20 grid gap-x-16 gap-y-14 md:mt-28 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {advisory.lenses.map((lens, index) => (
            <Reveal key={lens.title} delay={index * 70}>
              <div className="rule pt-6">
                <h3 className="display text-[24px]">{lens.title}</h3>
                <p className="mt-4 text-[15px] text-[var(--color-secondary)]">{lens.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-20 text-[17px] md:mt-28">{advisory.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
