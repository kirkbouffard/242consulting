import Logotype from "@/components/Logotype";
import { nav, site } from "@/content/copy";

export default function Nav() {
  return (
    <header className="site-nav">
      <a href="#top" className="nav-mark" aria-label={`${nav.wordmark} home`}>
        <Logotype />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {nav.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={site.calendly} target="_blank" rel="noopener noreferrer">
        {nav.cta}
      </a>
    </header>
  );
}
