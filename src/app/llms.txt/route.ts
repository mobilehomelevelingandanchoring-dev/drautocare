import { BUSINESS } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { locations } from "@/lib/data/locations";

export const dynamic = "force-static";

export function GET() {
  const content = `# ${BUSINESS.name}

> ${BUSINESS.description} Available 24/7, every day of the year. Fully insured. 5.0★ rated on Google (127 reviews). Prices start from £40.

## Services

${services.map((s) => `- [${s.name}](${BUSINESS.url}/services/${s.slug}): ${s.description} ${s.price}. Duration: ${s.duration}.`).join("\n")}

## Key Pages

- [Homepage](${BUSINESS.url}): Overview of all services, how mobile valeting works, pricing guide, and customer reviews.
- [FAQ](${BUSINESS.url}/faq): 35 answered questions covering pricing, booking, process, individual services, aftercare, and trust signals.
- [About](${BUSINESS.url}/about): Business background, credentials, 6+ years experience, 500+ vehicles treated, 5.0★ rating.
- [Get a Free Quote](${BUSINESS.url}/quote): No-obligation quote form. Name, phone, vehicle size, and service required. Fixed pricing — no hidden costs.
- [Contact](${BUSINESS.url}/contact): Phone (+44 7375 759686), WhatsApp, and email. Available 24/7.
- [All Services](${BUSINESS.url}/services): Complete list of valeting, detailing, and protection services.
- [Service Areas](${BUSINESS.url}/locations): All covered locations across Greater Manchester.

## Service Areas

${locations.map((l) => `- [${l.name}](${BUSINESS.url}/locations/${l.slug}): ${l.description}`).join("\n")}

## Blog & Guides

${blogPosts.map((p) => `- [${p.title}](${BUSINESS.url}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Business Information

- **Name:** ${BUSINESS.name}
- **Type:** Mobile car valeting and detailing (automotive service)
- **Location:** ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion}, UK (${BUSINESS.address.postalCode})
- **Telephone:** ${BUSINESS.telephone}
- **Email:** ${BUSINESS.email}
- **Website:** ${BUSINESS.url}
- **Service area:** ${BUSINESS.areaServed.join(", ")} and surrounding areas
- **Hours:** Open 24/7, every day of the year
- **Insured:** Yes — public liability insurance
- **Self-contained:** Yes — own water supply and power equipment, no facilities needed from customer
- **Google rating:** 5.0★ (127 verified reviews)
- **Price range:** £40 (mini valet) – £500+ (full detail with ceramic coating)

## Pricing Summary

| Service | Starting Price |
|---|---|
| Mini Valet | £40 |
| Full Valet | £80 |
| Car Detailing | £120 |
| Paint Correction | £180 |
| Ceramic Coating | £300 |
| Interior Deep Clean | £80 |
| Scratch Removal | £60 |

All prices are fixed and agreed before work begins. Final price depends on vehicle size and condition.

## What Makes Dr. Autocare Different

- Fully mobile — we come to the customer's location (home, workplace, or any suitable site)
- Self-contained — we carry our own water supply and power equipment
- Professional-grade equipment: machine polishers, hot water extractors, steam cleaners, pressure washers
- Transparent fixed pricing — what we quote is what the customer pays
- Available 24/7 including weekends and bank holidays
- Fully insured with public liability cover
- 5.0★ rated across 127 Google reviews
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
