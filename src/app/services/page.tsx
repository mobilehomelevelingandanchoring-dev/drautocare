import type { Metadata } from "next";
import Link from "next/link";
import { Car, Sparkles, Zap, Wrench, Layers, Shield, ArrowRight, MapPin, HelpCircle, FileText } from "lucide-react";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import CTABlock from "@/components/CTABlock";
import { BUSINESS, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Services Stockport | Valeting, Detailing & More — Dr. Autocare",
  description:
    "Browse all Dr. Autocare mobile services — valeting from £40, detailing from £120, paint correction, ceramic coating, interior cleaning, and scratch removal. Stockport & Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

const iconMap: Record<string, React.ElementType> = {
  Car, Sparkles, Zap, Wrench, Layers, Shield,
};

export default function ServicesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Services</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Professional Mobile Car Valeting & Detailing Services
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dr. Autocare provides a complete range of mobile car care services across Stockport and Greater Manchester. From a quick mini valet to a full show-car detail — we come to you, fully equipped.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Car;
              return (
                <div key={service.slug} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-amber-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">{service.name}</h2>
                        <p className="text-amber-400 text-sm font-medium">{service.price} · {service.duration}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                    >
                      Learn More & Book
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore further — locations, FAQ, blog */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Locations */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-amber-400" />
                <h2 className="font-bold text-white">Service Areas</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <Link key={loc.slug} href={`/locations/${loc.slug}`} className="text-sm text-slate-400 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-all">
                    {loc.name}
                  </Link>
                ))}
              </div>
              <Link href="/locations" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors mt-3">
                View all areas <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Help links */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <h2 className="font-bold text-white">Need Help Choosing?</h2>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/faq", label: "Frequently asked questions" },
                  { href: "/quote", label: "Get a free quote" },
                  { href: "/contact", label: "Call or WhatsApp us" },
                  { href: "/about", label: "About Dr. Autocare" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-amber-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-amber-400" />
                <h2 className="font-bold text-white">Car Care Guides</h2>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/blog/how-often-should-you-valet-your-car", label: "How often should you valet?" },
                  { href: "/blog/ceramic-coating-vs-wax-which-is-better", label: "Ceramic coating vs wax" },
                  { href: "/blog/what-is-paint-correction", label: "What is paint correction?" },
                  { href: "/blog/mobile-car-valeting-benefits", label: "Benefits of mobile valeting" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-amber-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/blog" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors mt-3">
                All articles <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
