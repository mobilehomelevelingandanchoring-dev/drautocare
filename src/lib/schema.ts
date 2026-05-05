export const BUSINESS = {
  name: "Dr. Autocare",
  telephone: "+447700900000",
  email: "info@drautocare.co.uk",
  url: "https://www.drautocare.co.uk",
  description:
    "Professional mobile car valeting and detailing service covering Stockport and Greater Manchester. We come to you.",
  address: {
    streetAddress: "Stockport",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    postalCode: "SK1",
    addressCountry: "GB",
  },
  geo: {
    latitude: 53.4083,
    longitude: -2.1494,
  },
  openingHours: ["Mo-Sa 08:00-18:00"],
  priceRange: "££",
  areaServed: [
    "Stockport",
    "Manchester",
    "Cheadle",
    "Bramhall",
    "Hazel Grove",
    "Didsbury",
    "Sale",
    "Altrincham",
    "Wilmslow",
  ],
  sameAs: [
    "https://www.facebook.com/drautocare",
    "https://www.instagram.com/drautocare",
    "https://www.google.com/maps/place/Dr+Autocare",
  ],
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoBodyShop"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    description: BUSINESS.description,
    image: `${BUSINESS.url}/images/dr-autocare-og.jpg`,
    logo: `${BUSINESS.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: BUSINESS.priceRange,
    areaServed: BUSINESS.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: BUSINESS.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^0-9]/g, ""),
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    url: service.url,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(reviews: { author: string; rating: number; text: string; date: string }[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
  }));
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${BUSINESS.url}/images/logo.png`,
      },
    },
    url: post.url,
    mainEntityOfPage: post.url,
  };
}
