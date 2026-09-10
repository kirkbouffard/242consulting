import Reveal from "@/components/Reveal";
import { ways } from "@/content/copy";
import { mailto } from "@/lib/assets";

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3 text-[15px] text-[var(--color-secondary)]">
      {items.map((item) => (
        <li key={item} className="rule pt-3 first:border-t-0 first:pt-0">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Ways() {
  const { owners, operators } = ways;

  return (
    <section id="ways" className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">{ways.eyebrow}</p>
          <h2 className="display t-h2 mt-6 max-w-[18ch]">{ways.heading}</h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div id={owners.id} className="rule scroll-mt-24 pt-8">
              <p className="eyebrow">{owners.eyebrow}</p>
              <h3 className="display t-h3 mt-5">{owners.title}</h3>
              <p className="mt-5 max-w-[40ch] text-[var(--color-secondary)]">{owners.lead}</p>
              <PointList items={owners.points} />
              <div className="mt-10 space-y-2 text-[15px]">
                {owners.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <a
                href={mailto(owners.cta.subject)}
                className="link-underline mt-10 inline-block text-[14px] tracking-[0.04em] text-[var(--color-accent)]"
              >
                {owners.cta.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div id={operators.id} className="rule scroll-mt-24 pt-8">
              <p className="eyebrow">{operators.eyebrow}</p>
              <h3 className="display t-h3 mt-5">{operators.title}</h3>
              <p className="mt-5 max-w-[40ch] text-[var(--color-secondary)]">{operators.lead}</p>

              <div className="mt-8 space-y-10">
                {operators.tiers.map((tier) => (
                  <div key={tier.name} className="rule pt-6">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h4 className="display text-[24px]">{tier.name}</h4>
                      <p className="text-[15px]">
                        {tier.price}{" "}
                        <span className="text-[var(--color-secondary)]">{tier.cadence}</span>
                      </p>
                      {tier.seats ? (
                        <p className="text-[13px] text-[var(--color-secondary)]">{tier.seats}</p>
                      ) : null}
                    </div>
                    <ul className="mt-4 space-y-2 text-[15px] text-[var(--color-secondary)]">
                      {tier.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-2 text-[15px]">
                {operators.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <a
                href={mailto(operators.cta.subject)}
                className="link-underline mt-10 inline-block text-[14px] tracking-[0.04em] text-[var(--color-accent)]"
              >
                {operators.cta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
