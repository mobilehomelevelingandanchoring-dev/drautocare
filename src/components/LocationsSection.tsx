import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/lib/data/locations";

export default function LocationsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mobile Valeting Across Greater Manchester
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dr. Autocare covers Stockport and all surrounding areas. Select your location to find out more about our service in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group flex items-start gap-4 bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-amber-900/10"
            >
              <div className="w-10 h-10 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors text-sm mb-1">
                  Car Valeting {location.name}
                </h3>
                <p className="text-slate-500 text-xs truncate">{location.county}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {location.postcodePrefixes.slice(0, 3).map((pc) => (
                    <span key={pc} className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      {pc}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors font-medium"
          >
            View all areas we cover
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
