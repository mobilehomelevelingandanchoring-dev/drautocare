import Link from "next/link";
import { Phone, MessageCircle, Star, MapPin, Shield, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

export default function Hero() {
  const whatsappNumber = BUSINESS.telephone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20a%20quote.`;

  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-amber-400 text-xs font-semibold">5.0 · 127 Reviews on Google</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mobile Car Valeting{" "}
              <span className="text-amber-400">Stockport</span>{" "}
              & Greater Manchester
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Professional car valeting, detailing, and paint correction delivered to your door. Dr. Autocare is fully self-contained — we bring our own water and power, so we can work anywhere.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Shield, text: "Fully Insured" },
                { icon: MapPin, text: "All SK & M Postcodes" },
                { icon: Clock, text: "Same-Day Available" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Icon className="w-4 h-4 text-amber-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 shadow-lg shadow-amber-900/30"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${BUSINESS.telephone}`}
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-base transition-all"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.telephone}
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium mt-4 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Or message us on WhatsApp
            </a>
          </div>

          {/* Right — Stats card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-2xl scale-105" />
            <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "5★", label: "Average Rating", sub: "127 Google reviews" },
                  { value: "500+", label: "Cars Detailed", sub: "in Greater Manchester" },
                  { value: "100%", label: "Self-Contained", sub: "we supply water & power" },
                  { value: "6+", label: "Years Experience", sub: "professional detailing" },
                ].map(({ value, label, sub }) => (
                  <div key={label} className="text-center p-4 bg-slate-800 rounded-2xl">
                    <div className="text-3xl font-bold text-amber-400 mb-1">{value}</div>
                    <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                    <div className="text-xs text-slate-500">{sub}</div>
                  </div>
                ))}
              </div>

              {/* Service list */}
              <div className="space-y-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">Services offered</p>
                {[
                  "Mobile Car Valeting",
                  "Car Detailing",
                  "Paint Correction",
                  "Scratch Removal",
                  "Interior Deep Clean",
                  "Ceramic Coating",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
