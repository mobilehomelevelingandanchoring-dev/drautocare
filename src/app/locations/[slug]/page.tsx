import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { locations, getLocationBySlug } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import { localBusinessSchema, faqSchema, breadcrumbSchema, BUSINESS } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${BUSINESS.url}/locations/${slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const locationFaqs = [
    {
      question: `Do you offer mobile car valeting in ${location.name}?`,
      answer: `Yes. Dr. Autocare provides mobile car valeting and detailing throughout ${location.name} and the surrounding areas. We cover the ${location.postcodePrefixes.join(", ")} postcode${location.postcodePrefixes.length > 1 ? "s" : ""}.`,
    },
    {
      question: `How quickly can you come to ${location.name}?`,
      answer: `We typically offer next-day and often same-day appointments in ${location.name}. Contact us and we will confirm the earliest available slot for you.`,
    },
    {
      question: `What mobile car services do you offer in ${location.name}?`,
      answer: `Dr. Autocare offers the full range of services in ${location.name} — mobile car valeting, car detailing, paint correction, scratch removal, interior deep cleaning, and exterior protection including ceramic coatings.`,
    },
    {
      question: `Do I need to provide water or electricity for the valet in ${location.name}?`,
      answer: `No. Dr. Autocare is completely self-contained and carries our own water supply and power equipment. We can work on any driveway, car park, or suitable street location in ${location.name} without any facilities from you.`,
    },
  ];

  const schemaData = {
    ...localBusinessSchema(),
    areaServed: [{ "@type": "City", name: location.name }],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.county,
      addressCountry: "GB",
    },
  };

  const faqMarkup = faqSchema(locationFaqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Locations", url: `${BUSINESS.url}/locations` },
    { name: location.name, url: `${BUSINESS.url}/locations/${slug}` },
  ]);
  const whatsappUrl = `https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20a%20quote%20in%20${encodeURIComponent(location.name)}.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-amber-400 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-slate-300">{location.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold">{location.county}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Mobile Car Valeting {location.name}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">{location.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {location.postcodePrefixes.map((pc) => (
                  <span key={pc} className="text-sm font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
                    {pc}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS.telephone}`}
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-base transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium mt-4 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </div>

            {/* Info card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-white mb-5">Why {location.name} Drivers Choose Dr. Autocare</h2>
              <ul className="space-y-3 mb-6">
                {[
                  `Fully mobile — we come to any location in ${location.name}`,
                  "Self-contained — no water or electricity required from you",
                  "Same-day and next-day appointments available",
                  "Professional-grade equipment and products",
                  "Fully insured and 5★ rated on Google",
                  "Fixed, transparent pricing — no surprises",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {location.nearbyAreas.length > 0 && (
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Also covering nearby</p>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area) => (
                      <span key={area} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">{area}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-dark">
            {location.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed mb-4 text-base">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Mobile Car Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4 transition-all"
              >
                <div>
                  <div className="font-semibold text-sm text-white group-hover:text-amber-400 transition-colors">
                    {service.name} in {location.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{service.price}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={locationFaqs}
        title={`Mobile Car Valeting ${location.name} — FAQ`}
        subtitle={`Common questions about Dr. Autocare's service in ${location.name} and the ${location.postcodePrefixes.join("/")} area.`}
      />

      <CTABlock
        title={`Book Mobile Car Valeting in ${location.name} Today`}
        subtitle={`Professional, self-contained mobile valeting and detailing in ${location.name}. We come to you — get a free quote now.`}
      />
    </>
  );
}
