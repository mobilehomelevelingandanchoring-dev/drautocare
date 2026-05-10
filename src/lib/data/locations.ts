export interface Location {
  slug: string;
  name: string;
  county: string;
  description: string;
  longDescription: string;
  nearbyAreas: string[];
  postcodePrefixes: string[];
  metaTitle: string;
  metaDescription: string;
  landmarks: string[];
}

export const locations: Location[] = [
  {
    slug: "stockport",
    name: "Stockport",
    county: "Greater Manchester",
    description:
      "Dr. Autocare's home base. We provide mobile car valeting, detailing, and paint correction throughout Stockport — from Edgeley to Bramhall.",
    longDescription: `Stockport is Dr. Autocare's primary service area. Whether you live in Edgeley, Heaton Moor, Bramhall, or Hazel Grove, our mobile valet team can reach you quickly and efficiently.

We are fully familiar with Stockport's road network and parking conditions — from residential streets in Davenport to business parks near Cheadle Royal. Our self-contained setup means we can work anywhere across Stockport's SK postcodes without needing access to your water supply or electricity.

Dr. Autocare serves hundreds of vehicles across Stockport each year, building a reputation for reliability, quality, and exceptional customer service. We are available Monday to Saturday and can often accommodate same-day bookings for standard valeting services.`,
    nearbyAreas: ["Cheadle", "Bramhall", "Hazel Grove", "Heaton Moor", "Edgeley", "Davenport"],
    postcodePrefixes: ["SK1", "SK2", "SK3", "SK4", "SK5", "SK6", "SK7"],
    metaTitle: "Mobile Car Valeting Stockport | From £40 — Dr. Autocare",
    metaDescription:
      "Dr. Autocare provides mobile car valeting in Stockport from £40. Covering all SK postcodes — mini valet, full detail, paint correction, ceramic coating. Self-contained, 24/7, 5★ rated.",
    landmarks: ["Stockport Market Place", "Edgeley Park", "Cheadle Royal Business Park", "Woodbank Park"],
  },
  {
    slug: "manchester",
    name: "Manchester",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing across Manchester city and the surrounding boroughs. Dr. Autocare serves South Manchester, Didsbury, Chorlton, and more.",
    longDescription: `Dr. Autocare provides mobile car valeting and detailing across Greater Manchester, including South Manchester's most popular residential areas. Our service covers Didsbury, Chorlton, Withington, Fallowfield, Whalley Range, and the city centre itself.

Manchester's busy urban environment means cars accumulate road film, bird droppings, and traffic grime quickly. Our regular maintenance valet packages are popular with Manchester city drivers who want to keep their vehicle looking its best without visiting a valet centre.

We also serve the business community — offering fleet valeting arrangements for companies based in Manchester with multiple vehicles requiring regular care.`,
    nearbyAreas: ["Didsbury", "Chorlton", "Withington", "Fallowfield", "Hulme", "Salford"],
    postcodePrefixes: ["M1", "M2", "M3", "M14", "M16", "M20", "M21"],
    metaTitle: "Mobile Car Valeting Manchester | From £40 — Dr. Autocare",
    metaDescription:
      "Professional mobile car valeting in Manchester from £40. Dr. Autocare serves South Manchester, Didsbury, Chorlton, and city centre — self-contained, available 24/7. Book today.",
    landmarks: ["Manchester Piccadilly", "MediaCityUK", "Old Trafford", "Didsbury Village"],
  },
  {
    slug: "cheadle",
    name: "Cheadle",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing in Cheadle and Cheadle Hulme. Dr. Autocare serves the SK8 postcode area with professional results.",
    longDescription: `Cheadle and Cheadle Hulme are among Dr. Autocare's busiest service areas — and for good reason. The affluent residential areas of Cheadle Hulme in particular generate strong demand for high-quality car care, including full detailing packages and ceramic coating applications.

We cover all parts of Cheadle, from the village centre and Cheadle Royal Business Park to Cheadle Hulme's residential streets and Gatley. Our mobile team is familiar with the area and can typically accommodate bookings within 24–48 hours.

Popular services in Cheadle include our full valet package, paint correction with ceramic coating, and regular maintenance wash programmes for those who want their vehicle maintained year-round.`,
    nearbyAreas: ["Stockport", "Bramhall", "Gatley", "Heald Green", "Wythenshawe"],
    postcodePrefixes: ["SK8"],
    metaTitle: "Mobile Car Valeting Cheadle & Cheadle Hulme | From £40 — Dr. Autocare",
    metaDescription:
      "Dr. Autocare's mobile car valeting in Cheadle and Cheadle Hulme starts from £40. Serving SK8 — full valet, detail, ceramic coating. Same-day bookings often available.",
    landmarks: ["Cheadle Royal Business Park", "Cheadle Hulme Station", "Bruntwood Park"],
  },
  {
    slug: "bramhall",
    name: "Bramhall",
    county: "Greater Manchester",
    description:
      "Expert mobile car valeting and detailing in Bramhall, SK7. Dr. Autocare delivers show-standard results to your driveway.",
    longDescription: `Bramhall is one of Stockport's most sought-after residential areas, and Dr. Autocare is proud to be the area's trusted mobile car care specialist. We serve Bramhall village, Bramhall Park, and all surrounding roads across the SK7 postcode.

Our clients in Bramhall frequently book full detailing and ceramic coating packages — reflecting the quality of vehicles owned in the area and the expectation for outstanding results. We have treated everything from family SUVs to prestige sports cars and luxury saloons in Bramhall.

Dr. Autocare also offers maintenance wash programmes popular with Bramhall residents — monthly or fortnightly visits to keep vehicles in top condition between full details.`,
    nearbyAreas: ["Stockport", "Cheadle Hulme", "Hazel Grove", "Poynton"],
    postcodePrefixes: ["SK7"],
    metaTitle: "Mobile Car Valeting Bramhall SK7 | From £40 — Dr. Autocare",
    metaDescription:
      "Premium mobile car valeting in Bramhall, SK7 from £40. Dr. Autocare delivers full valet, detailing, and ceramic coating to your driveway. Same-day availability — call today.",
    landmarks: ["Bramhall Park", "Bramhall Village", "Bramhall Station"],
  },
  {
    slug: "hazel-grove",
    name: "Hazel Grove",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing in Hazel Grove, Stockport. Dr. Autocare covers SK7 with professional on-site cleaning services.",
    longDescription: `Hazel Grove, situated on the A6 corridor south of Stockport town centre, is a busy residential and commercial area well-served by Dr. Autocare's mobile valeting team. We cover all streets in Hazel Grove including those bordering Poynton, Bredbury, and Marple.

Our mobile service is ideal for Hazel Grove residents who value convenience — we arrive at your home or workplace and complete the work while you get on with your day. No need to drop your car off or arrange alternative transport.

Services in demand in Hazel Grove include our mini valet and full interior clean packages, particularly popular with families and commuters whose vehicles see heavy daily use.`,
    nearbyAreas: ["Stockport", "Bramhall", "Bredbury", "Marple", "Poynton"],
    postcodePrefixes: ["SK7"],
    metaTitle: "Mobile Car Valeting Hazel Grove | From £40 — Dr. Autocare Stockport",
    metaDescription:
      "Mobile car valeting in Hazel Grove, Stockport from £40. Dr. Autocare serves SK7 — mini valet to full detail at your home or workplace. Self-contained, available 24/7.",
    landmarks: ["Hazel Grove A6", "Torkington Park"],
  },
  {
    slug: "didsbury",
    name: "Didsbury",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing in Didsbury, South Manchester. Dr. Autocare serves M20 with premium car care services.",
    longDescription: `Didsbury is one of South Manchester's most desirable neighbourhoods, and Dr. Autocare is proud to serve its residents with premium mobile car care. We cover West Didsbury, East Didsbury, and the surrounding M20 postcode area.

Our Didsbury clients include professionals, families, and business owners who expect excellence — and that's exactly what we deliver. Popular services include our full valet and detail packages, paint correction, and long-duration ceramic coatings for prestige and executive vehicles.

Booking is simple: call, WhatsApp, or use our online form, and we will confirm a convenient time to arrive. Most Didsbury bookings can be completed within 48 hours.`,
    nearbyAreas: ["Withington", "Chorlton", "East Didsbury", "Burnage", "Cheadle"],
    postcodePrefixes: ["M20"],
    metaTitle: "Mobile Car Valeting Didsbury | From £40 — Dr. Autocare South Manchester",
    metaDescription:
      "Expert mobile car valeting in Didsbury, M20 from £40. Dr. Autocare delivers premium valeting, detailing, and ceramic coating to your door — 24/7, 5★ rated. Book online.",
    landmarks: ["Didsbury Village", "Fletcher Moss Park", "Didsbury Station"],
  },
  {
    slug: "sale",
    name: "Sale",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing in Sale, Trafford. Dr. Autocare covers M33 with professional, reliable car care.",
    longDescription: `Sale, in the Metropolitan Borough of Trafford, is fully covered by Dr. Autocare's mobile valeting team. We serve Sale Town Centre, Brooklands, Ashton-on-Mersey, and all residential areas within the M33 postcode.

Sale's well-connected road network — including easy access to the M60 — makes it a convenient location for our mobile team to reach quickly. We typically offer next-day or same-day bookings for standard valeting services in the Sale area.

Our most popular services in Sale include our standard full valet and interior deep clean — particularly popular with families whose cars see intensive daily use with children and pets.`,
    nearbyAreas: ["Altrincham", "Stretford", "Wythenshawe", "Urmston"],
    postcodePrefixes: ["M33"],
    metaTitle: "Mobile Car Valeting Sale Trafford | From £40 — Dr. Autocare M33",
    metaDescription:
      "Mobile car valeting in Sale, Trafford from £40. Dr. Autocare covers M33 — full valet, interior clean, ceramic coating. Same-day bookings often available. Call or book online.",
    landmarks: ["Sale Waterpark", "Brooklands Metrolink", "Trafford Centre nearby"],
  },
  {
    slug: "altrincham",
    name: "Altrincham",
    county: "Greater Manchester",
    description:
      "Mobile car valeting and detailing in Altrincham and surrounding WA14/WA15 area. Dr. Autocare brings professional car care to your door.",
    longDescription: `Altrincham is a vibrant market town in the south of Greater Manchester, and Dr. Autocare is delighted to serve its residents and businesses with professional mobile car valeting and detailing.

We cover Altrincham town centre, Hale, Hale Barns, Bowdon, and the WA14/WA15 postcode area. Altrincham's high density of prestige and executive vehicles makes it one of our busiest areas for paint correction and ceramic coating applications.

Our mobile team arrives fully equipped — no need for you to provide water or electricity. We work on driveways, in garages, on-street, or in business car parks across Altrincham.`,
    nearbyAreas: ["Sale", "Hale", "Bowdon", "Timperley", "Knutsford"],
    postcodePrefixes: ["WA14", "WA15"],
    metaTitle: "Mobile Car Valeting Altrincham & Hale | From £40 — Dr. Autocare",
    metaDescription:
      "Expert mobile car valeting in Altrincham, Hale, and Bowdon (WA14/WA15) from £40. Dr. Autocare — full valet to ceramic coating at your location. 5★ rated, available 24/7.",
    landmarks: ["Altrincham Market", "Hale Village", "Altrincham Retail Park"],
  },
  {
    slug: "wilmslow",
    name: "Wilmslow",
    county: "Cheshire East",
    description:
      "Mobile car valeting and detailing in Wilmslow and surrounding Cheshire areas. Dr. Autocare serves SK9 with the highest standards of car care.",
    longDescription: `Wilmslow is the jewel of Cheshire East — a town synonymous with quality, prestige, and high standards. Dr. Autocare is proud to match those standards with a premium mobile car valeting and detailing service that comes directly to you.

We cover all areas of Wilmslow including Wilmslow town centre, Alderley Edge, Handforth, and the surrounding SK9 postcode. Our Wilmslow clients are discerning — they expect perfection and that is what we consistently deliver.

Common requests in Wilmslow include full detailing packages, two-stage paint corrections, and our premium ceramic coating programmes — applied to a broad range of vehicles from sports cars to luxury SUVs and executive saloons.`,
    nearbyAreas: ["Alderley Edge", "Handforth", "Macclesfield", "Knutsford", "Bramhall"],
    postcodePrefixes: ["SK9"],
    metaTitle: "Mobile Car Valeting Wilmslow & Alderley Edge | From £40 — Dr. Autocare",
    metaDescription:
      "Premium mobile car valeting in Wilmslow and Alderley Edge (SK9) from £40. Dr. Autocare delivers show-standard results at your door — paint correction, ceramic coating, full detail.",
    landmarks: ["Wilmslow Town Centre", "Alderley Edge Village", "Handforth Dean Retail Park"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
