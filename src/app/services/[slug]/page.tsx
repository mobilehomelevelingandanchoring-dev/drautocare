import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Clock, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import { serviceSchema, faqSchema, BUSINESS } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: { canonical: `${BUSINESS.url}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const svcSchema = serviceSchema({
    name: service.name,
    description: service.description,
    price: service.price,
    url: `${BUSINESS.url}/services/${service.slug}`,
  });
  const faqMarkup = faqSchema(service.faqs);
  const whatsappUrl = `https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20a%20quote%20for%20${encodeURIComponent(service.name)}.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-300">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                {service.price} · {service.duration}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {service.name} in Stockport & Greater Manchester
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">{service.tagline}</p>

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

            {/* Features card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-white mb-5">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-slate-400">Typical duration: <span className="text-white font-medium">{service.duration}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-dark">
            {service.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed mb-4 text-base">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={service.faqs}
        title={`${service.name} — FAQ`}
        subtitle={`Common questions about Dr. Autocare's ${service.name.toLowerCase()} service.`}
      />

      {/* Internal links — other services */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4 transition-all"
                >
                  <div>
                    <div className="font-semibold text-sm text-white group-hover:text-amber-400 transition-colors">{s.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.price}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Location links */}
      <section className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6">{service.name} Near You</h2>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-sm text-slate-400 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all"
              >
                {service.shortName} in {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
