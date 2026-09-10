import HeroMedia from "@/components/HeroMedia";
import { hero } from "@/content/copy";
import { assetExists } from "@/lib/assets";

export default function Hero() {
  const hasImage = assetExists(hero.image);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--color-surface)] pb-16 pt-32 md:pb-24"
    >
      {hasImage ? <HeroMedia src={hero.image} alt={hero.alt} /> : null}

      <div className="container-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="display t-h1 mt-6 max-w-[16ch]">{hero.heading}</h1>
        <p className="mt-8 max-w-[46ch] text-[17px] text-[var(--color-secondary)] md:text-[19px]">
          {hero.sub}
        </p>
        <nav
          aria-label="Engagement tracks"
          className="mt-12 flex flex-col gap-4 text-[14px] tracking-[0.02em] sm:flex-row sm:gap-10"
        >
          {hero.links.map((link) => (
            <a key={link.href} href={link.href} className="link-underline w-fit">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
