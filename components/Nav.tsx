import Logotype from "@/components/Logotype";
import { nav } from "@/content/copy";
import { mailto } from "@/lib/assets";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-content flex items-center justify-between py-7 md:py-9">
        <a href="#top" aria-label={nav.wordmark} className="block w-[132px] md:w-[168px]">
          <Logotype className="block [&>svg]:block [&>svg]:w-full [&>svg]:h-auto" />
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
