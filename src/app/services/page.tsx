import type { Metadata } from "next";
import Link from "next/link";
import { Car, Sparkles, Zap, Wrench, Layers, Shield, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import CTABlock from "@/components/CTABlock";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Valeting & Detailing Services Stockport | Dr. Autocare",
  description:
    "Browse all of Dr. Autocare's mobile car services — valeting, detailing, paint correction, scratch removal, interior cleaning, and exterior protection. Serving Stockport and Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/services` },
};

const iconMap: Record<string, React.ElementType> = {
  Car, Sparkles, Zap, Wrench, Layers, Shield,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
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

      <CTABlock />
    </>
  );
}
