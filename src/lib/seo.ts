import type { Metadata } from "next";
import { BUSINESS } from "./schema";

export const BASE_URL = BUSINESS.url;

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/dr-autocare-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — Mobile Car Valeting Stockport`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/images/dr-autocare-og.jpg`],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}
