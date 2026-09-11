import { footer } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-row">
        <span>{footer.line}</span>
        <a href="/terms">{footer.termsLabel}</a>
      </div>
    </footer>
  );
}
