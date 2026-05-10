import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Dr. Autocare | Mobile Car Valeting Stockport",
  description:
    "Get in touch with Dr. Autocare for mobile car valeting and detailing in Stockport and Greater Manchester. Call, WhatsApp, or email — we respond quickly.",
  alternates: { canonical: `${BUSINESS.url}/contact` },
};

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: BUSINESS.telephone,
    href: `tel:${BUSINESS.telephone}`,
    description: "Available 24/7. We aim to answer all calls.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message Us",
    href: `https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20in%20touch.`,
    description: "Send photos of your vehicle for a quicker quote.",
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    description: "We respond to all emails within 24 hours.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Stockport, Greater Manchester",
    href: null,
    description: "We cover all SK and M postcodes and surrounding areas.",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "24/7 — Every Day",
    href: null,
    description: "We are available around the clock, 7 days a week.",
  },
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20in%20touch.`;

  return (
    <>
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Contact</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get In Touch</h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Ready to book or have a question? We are happy to help. Call, WhatsApp, or email — we respond promptly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact methods */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Details</h2>
              {contactMethods.map(({ icon: Icon, label, value, href, description }) => (
                <div key={label} className="flex gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-white hover:text-amber-400 transition-colors block">
                        {value}
                      </a>
                    ) : (
                      <div className="font-semibold text-white">{value}</div>
                    )}
                    <div className="text-xs text-slate-400 mt-1">{description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <a
                  href={`tel:${BUSINESS.telephone}`}
                  className="flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-5 rounded-xl text-base transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-5 rounded-xl text-base transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message on WhatsApp
                </a>

                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-3 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-5 rounded-xl text-base transition-all"
                >
                  Get a Free Quote Online
                </Link>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center justify-center gap-3 w-full border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold py-4 rounded-xl text-base transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Send an Email
                </a>
              </div>

              <div className="mt-8 p-5 bg-slate-900 border border-slate-800 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Service Area</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We serve Stockport, Manchester, Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, and all surrounding areas across Greater Manchester and Cheshire.
                </p>
                <Link href="/locations" className="text-amber-400 hover:text-amber-300 text-sm font-medium mt-3 block">
                  View all service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
