import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCall from "@/components/StickyCall";
import { localBusinessSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "Dr. Autocare | Mobile Car Valeting Stockport",
    template: "%s | Dr. Autocare",
  },
  description:
    "Professional mobile car valeting, detailing, and paint correction across Stockport and Greater Manchester. We come to you — fully self-contained.",
  metadataBase: new URL(BUSINESS.url),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
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
