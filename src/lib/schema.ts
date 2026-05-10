export const BUSINESS = {
  name: "Dr. Autocare",
  telephone: "+44 7375 759686",
  email: "info@drautocare.co.uk",
  url: "https://drautocare.co.uk",
  description:
    "Professional mobile car valeting and detailing service covering Stockport and Greater Manchester. We come to you.",
  address: {
    streetAddress: "Gail Avenue",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    postalCode: "SK4 2PY",
    addressCountry: "GB",
  },
  geo: {
    latitude: 53.4289,
    longitude: -2.1674,
  },
  openingHours: ["Mo-Su 00:00-23:59"],
  priceRange: "££",
  areaServed: [
    "Heaton Moor",
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
    "https://m.yelp.com/biz/dr-autocare-stockport-2",
    "https://www.yell.com/biz/dr-autocare-stockport-9205018/",
  ],
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveService"],
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
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
    knowsAbout: [
      "Mobile Car Valeting",
      "Car Detailing",
      "Paint Correction",
      "Ceramic Coating",
      "Interior Deep Cleaning",
      "Scratch Removal",
      "Paint Sealant Application",
      "Hot Water Extraction",
      "Machine Polishing",
      "Swirl Mark Removal",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Car Valeting & Detailing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mini Valet" }, price: "40", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Valet" }, price: "80", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Detailing" }, price: "120", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Correction" }, price: "180", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" }, price: "300", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Deep Clean" }, price: "80", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
      ],
    },
    slogan: "Professional mobile car valeting and detailing — we come to you.",
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1, maxValue: 5 },
    hasMap: "https://www.google.com/maps/place/Dr+Autocare",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: "15000",
    },
    containedInPlace: {
      "@type": "Place",
      name: "Heaton Moor",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stockport",
        postalCode: "SK4",
        addressRegion: "Greater Manchester",
        addressCountry: "GB",
      },
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

export function reviewSchema(reviews: { author: string; rating: number; text: string; date: string; service?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": reviews.map((review) => ({
      "@type": "Review",
      name: review.service ? `${review.author} — ${review.service}` : `${review.author} review of ${BUSINESS.name}`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.text,
      datePublished: review.date,
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${BUSINESS.url}/#business`,
        name: BUSINESS.name,
        telephone: BUSINESS.telephone,
        url: BUSINESS.url,
      },
    })),
  };
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    description: BUSINESS.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book Mobile Car Valeting with Dr. Autocare",
    description: "Book professional mobile car valeting or detailing in Stockport and Greater Manchester in 4 simple steps. We come to you — no facilities needed.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Get a Free Quote",
        text: "Call, WhatsApp, or use our online quote form at drautocare.co.uk/quote. Tell us your vehicle type, service needed, and location. We respond quickly and provide a fixed, transparent price — no hidden costs.",
        url: `${BUSINESS.url}/quote`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Choose a Date and Time",
        text: "Pick a slot that works for you. Dr. Autocare is available 24/7, every day of the week. Same-day and next-day appointments are often available across Stockport and Greater Manchester.",
        url: `${BUSINESS.url}/quote`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We Come to Your Location",
        text: "Our technician arrives fully equipped with water, power, and professional products. We work at your home, workplace, or any suitable location. You don't need to provide anything.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Inspect and Enjoy",
        text: "We walk you through the results before leaving. We don't leave until you're completely satisfied. Your vehicle will look transformed.",
      },
    ],
    supply: [
      { "@type": "HowToSupply", name: "Professional car cleaning products" },
      { "@type": "HowToSupply", name: "Hot water extraction machine" },
      { "@type": "HowToSupply", name: "Self-contained water supply and power" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Machine polisher" },
      { "@type": "HowToTool", name: "Steam cleaner" },
      { "@type": "HowToTool", name: "Pressure washer" },
    ],
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  url: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
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
