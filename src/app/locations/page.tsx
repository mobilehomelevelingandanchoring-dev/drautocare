import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";
import CTABlock from "@/components/CTABlock";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Valeting Areas — Stockport & Greater Manchester | Dr. Autocare",
  description:
    "Dr. Autocare provides mobile car valeting and detailing across Stockport and Greater Manchester. Find your local area and book today.",
  alternates: { canonical: `${BUSINESS.url}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Service Areas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Mobile Car Valeting Across Greater Manchester
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dr. Autocare serves Stockport and the wider Greater Manchester and Cheshire area. Select your location below to learn more about our service in your area.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-amber-900/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white group-hover:text-amber-400 transition-colors text-lg leading-tight">
                      Car Valeting {location.name}
                    </h2>
                    <p className="text-slate-500 text-sm">{location.county}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{location.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {location.postcodePrefixes.map((pc) => (
                    <span key={pc} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">
                      {pc}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm font-semibold text-amber-400 group-hover:gap-2 transition-all">
                  View service area
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
