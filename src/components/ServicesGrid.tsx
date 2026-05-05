import Link from "next/link";
import { Car, Sparkles, Zap, Wrench, Layers, Shield, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Sparkles,
  Zap,
  Wrench,
  Layers,
  Shield,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Mobile Car Care Services
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From a quick mini valet to a full multi-stage paint correction with ceramic coating — we deliver show-car results at your door across Stockport and Greater Manchester.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Price + duration */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-amber-400 font-semibold">{service.price}</span>
                  <span className="text-slate-500">{service.duration}</span>
                </div>

                {/* Features preview */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1 text-sm font-semibold text-amber-400 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-amber-400 font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
