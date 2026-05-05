# Dr. Autocare — Mobile Car Valeting Stockport

Production website for **Dr. Autocare**, a professional mobile car valeting and detailing service covering Stockport and Greater Manchester.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Deployed on **Vercel**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services` | All services listing |
| `/services/[slug]` | 6 individual service pages |
| `/locations` | Areas covered |
| `/locations/[slug]` | 9 location landing pages |
| `/blog` | Blog listing |
| `/blog/[slug]` | 4 blog posts |
| `/about` | About page |
| `/faq` | FAQ page |
| `/contact` | Contact page |
| `/quote` | Quote form |
| `/sitemap.xml` | Programmatic sitemap |
| `/robots.txt` | Robots directive |

## Development

```bash
npm install --include=dev
npm run dev
```

> **Note:** Before running `npm run build` locally, unset `__NEXT_PRIVATE_STANDALONE_CONFIG` if it was left by a previous failed build:
> ```bash
> unset __NEXT_PRIVATE_STANDALONE_CONFIG && npm run build
> ```

## Deployment

Deployed automatically via Vercel on push to `main`. No environment variables required — all configuration is in `src/lib/schema.ts`.

## Configuration

Update business details in [`src/lib/schema.ts`](src/lib/schema.ts):

```ts
export const BUSINESS = {
  name: "Dr. Autocare",
  telephone: "+447700900000",   // ← update with real number
  email: "info@drautocare.co.uk",
  url: "https://www.drautocare.co.uk",
  // ...
};
```

## SEO

- Schema.org JSON-LD: LocalBusiness, Service, FAQPage, Article, BreadcrumbList
- Programmatic sitemap at `/sitemap.xml`
- Static pages pre-rendered at build time (SSG)
- Topical authority structure: services ↔ locations ↔ blog interlinked
