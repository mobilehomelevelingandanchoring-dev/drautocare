"use client";

import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

export default function StickyCall() {
  const whatsappNumber = BUSINESS.telephone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20vehicle.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-green-900/40 transition-all hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm hidden sm:block">WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href={`tel:${BUSINESS.telephone}`}
        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-4 py-3 rounded-full shadow-lg shadow-amber-900/40 transition-all hover:scale-105"
        aria-label="Call Dr. Autocare"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm hidden sm:block">Call Now</span>
      </a>
    </div>
  );
}
