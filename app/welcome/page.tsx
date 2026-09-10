import type { Metadata } from "next";

import { welcome } from "@/content/copy";

// Hidden confirmation page. Nothing on the site links here, and it is kept out
// of search. The invite lives in WHATSAPP_INVITE_URL, read at build time.
export const metadata: Metadata = {
  title: "242 Circle",
  robots: { index: false, follow: false },
};

export default function WelcomePage() {
  const invite = process.env.WHATSAPP_INVITE_URL;

  return (
    <main className="welcome-page">
      <div className="welcome-copy">
        <p className="eyebrow">{welcome.eyebrow}</p>
        <h2>{welcome.heading}</h2>
        <p>{welcome.body}</p>
        {invite ? (
          <a className="text-link" href={invite} target="_blank" rel="noopener noreferrer">
            {welcome.link} <span aria-hidden="true">↘</span>
          </a>
        ) : (
          <p className="welcome-pending">{welcome.link}</p>
        )}
      </div>
    </main>
  );
}
