"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, CheckCircle, Send } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

const serviceOptions = [
  "Mini Valet (exterior wash + interior vacuum)",
  "Full Valet (interior + exterior)",
  "Car Detailing (full decontamination + protection)",
  "Paint Correction (swirl/scratch removal)",
  "Interior Deep Clean (HWE + steam)",
  "Exterior Protection (ceramic/wax/sealant)",
  "Scratch Removal",
  "Other / Not Sure",
];

const vehicleOptions = [
  "Small (hatchback, city car)",
  "Medium (saloon, estate)",
  "Large (SUV, 4x4, MPV)",
  "Van / Campervan",
  "Sports / Prestige Car",
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const whatsappUrl = `https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20vehicle.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 pt-16">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Quote Request Sent!</h1>
          <p className="text-slate-400 mb-8">
            Thank you, {formData.name}. We will review your request and get back to you as soon as possible — usually within a few hours during business hours.
          </p>
          <div className="space-y-3">
            <a href={`tel:${BUSINESS.telephone}`} className="flex items-center justify-center gap-2 w-full bg-amber-500 text-slate-950 font-bold py-4 rounded-xl">
              <Phone className="w-4 h-4" />
              Call to Confirm Faster
            </a>
            <Link href="/" className="block text-slate-400 hover:text-amber-400 text-sm transition-colors">
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-28 pb-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Get a Quote</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Free Quote</span>
          <h1 className="text-4xl font-bold text-white mb-4">
            Get Your Free, No-Obligation Quote
          </h1>
          <p className="text-slate-400 text-lg">
            Fill in the form below and we will come back to you with a fixed, transparent price. No hidden costs — ever.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07700 000000"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Postcode *</label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="SK1 1AA"
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Size *</label>
                  <select
                    required
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="">Select vehicle size...</option>
                    {vehicleOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Service Required *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your vehicle, any specific concerns, preferred dates, etc."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl text-base transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Send Quote Request
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We respond quickly — available 24/7. For urgent requests, please call or WhatsApp.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Prefer to contact directly?</h3>
                <div className="space-y-3">
                  <a href={`tel:${BUSINESS.telephone}`} className="flex items-center gap-3 text-sm text-white hover:text-amber-400 transition-colors">
                    <Phone className="w-4 h-4 text-amber-400" />
                    {BUSINESS.telephone}
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white hover:text-green-400 transition-colors">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3">Pricing Guide</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Mini Valet", "From £40"],
                    ["Full Valet", "From £80"],
                    ["Car Detailing", "From £120"],
                    ["Paint Correction", "From £180"],
                    ["Ceramic Coating", "From £300"],
                    ["Interior Deep Clean", "From £80"],
                  ].map(([service, price]) => (
                    <li key={service} className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                      <span>{service}</span>
                      <span className="text-amber-400 font-semibold">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  * Final price depends on vehicle size and condition. All quotes are fixed and transparent.
                </p>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">
                <h3 className="text-amber-400 font-semibold mb-2">No Hidden Costs</h3>
                <p className="text-slate-400 text-sm">
                  We provide fixed, all-inclusive quotes before any work begins. What we quote is what you pay — no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
