import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "amber";
}

export default function CTABlock({
  title = "Ready for a Showroom-Fresh Vehicle?",
  subtitle = "Get a free, no-obligation quote for mobile car valeting or detailing anywhere in Stockport and Greater Manchester.",
  variant = "dark",
}: CTABlockProps) {
  const whatsappNumber = BUSINESS.telephone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20a%20quote.`;

  const isDark = variant === "dark";

  return (
    <section className={`py-20 px-4 ${isDark ? "bg-slate-900" : "bg-amber-500"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-950"}`}>
          {title}
        </h2>
        <p className={`text-lg mb-10 max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-800"}`}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 ${
              isDark
                ? "bg-amber-500 hover:bg-amber-400 text-slate-950"
                : "bg-slate-950 hover:bg-slate-800 text-white"
            }`}
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${BUSINESS.telephone}`}
            className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 border ${
              isDark
                ? "border-slate-600 text-white hover:border-amber-500 hover:text-amber-400"
                : "border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:scale-105 bg-green-500 hover:bg-green-400 text-white"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <p className={`mt-6 text-sm ${isDark ? "text-slate-500" : "text-slate-700"}`}>
          Serving Stockport, Manchester, Cheadle, Bramhall, Altrincham, Wilmslow & surrounding areas · Mon–Sat 8am–6pm
        </p>
      </div>
    </section>
  );
}
