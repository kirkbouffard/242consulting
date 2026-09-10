import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="rule">
      <div className="container-content py-10 text-[13px] tracking-[0.02em] text-[var(--color-secondary)]">
        {footer.line}
      </div>
    </footer>
  );
}
