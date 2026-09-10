import { nav } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-content flex items-baseline justify-between py-7 md:py-9">
        <a
          href="#top"
          className="display text-[20px] tracking-[0.02em] md:text-[22px]"
        >
          {nav.wordmark}
        </a>
        <a
          href={mailto()}
          className="link-underline text-[13px] tracking-[0.04em] text-[var(--color-secondary)] md:text-[14px]"
        >
          {nav.emailLabel}
        </a>
      </div>
    </header>
  );
}
