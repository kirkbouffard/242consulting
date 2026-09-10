import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { site } from "@/content/copy";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "website",
    url: `${site.url}/`,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d100e",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: `${site.url}/`,
  description: site.description,
  image: `${site.url}/og-image.jpg`,
  email: site.email,
  areaServed: "Worldwide",
  founder: {
    "@type": "Person",
    name: site.founder,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
