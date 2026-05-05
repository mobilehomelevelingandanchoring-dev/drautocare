import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import { localBusinessSchema, websiteSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "Dr. Autocare | Mobile Car Valeting Stockport",
    template: "%s | Dr. Autocare",
  },
  description:
    "Professional mobile car valeting, detailing, and paint correction across Stockport and Greater Manchester. We come to you — fully self-contained.",
  metadataBase: new URL(BUSINESS.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Dr. Autocare",
    title: "Dr. Autocare | Mobile Car Valeting Stockport",
    description:
      "Professional mobile car valeting, detailing, and paint correction across Stockport and Greater Manchester.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Autocare | Mobile Car Valeting Stockport",
    description:
      "Professional mobile car valeting and detailing. We come to you across Stockport and Greater Manchester.",
  },
  alternates: {
    canonical: BUSINESS.url,
    languages: {
      "en-GB": BUSINESS.url,
      "x-default": BUSINESS.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = localBusinessSchema();
  const siteSchema = websiteSchema();

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="bg-slate-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCall />
      </body>
    </html>
  );
}
