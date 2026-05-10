import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import CTABlock from "@/components/CTABlock";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "100% Satisfaction Guarantee | Dr. Autocare — Mobile Car Valeting Stockport",
  description:
    "Dr. Autocare guarantees your satisfaction on every job. If you're not completely happy with the results, we come back and fix it — no questions asked. Fully insured, 5★ rated.",
  alternates: { canonical: `${BUSINESS.url}/guarantee` },
};

const covered = [
  "Quality of the cleaning result — interior and exterior",
  "Completeness of the agreed service (all included items delivered)",
  "Paint correction and polishing outcomes within communicated limits",
  "Interior deep clean results including stain treatment",
  "Ceramic coating application quality and coverage",
  "Scratch removal and touch-up finish quality",
  "Professionalism and conduct of our technicians",
];

const notCovered = [
  "Pre-existing damage to paint, bodywork, trim, or interior surfaces",
  "Stains or defects communicated as unresolvable before work began",
  "Damage caused by the client after the service is complete",
  "Deterioration of results due to failure to follow aftercare advice",
  "Unrealistic expectations not aligned with the service description or pre-job assessment",
];

export default function GuaranteePage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Our Guarantee</span>
          </nav>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Promise</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                100% Satisfaction Guaranteed
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                We don&apos;t leave until you&apos;re happy. And if anything isn&apos;t right after we&apos;ve gone, we come back and fix it — no arguments, no charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main guarantee statement */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to You</h2>
            <p className="text-slate-300 leading-relaxed text-base">
              Every Dr. Autocare job is backed by a straightforward satisfaction guarantee. Before we pack up and leave, we walk you around the vehicle and invite you to inspect every part of the work. If something isn&apos;t right, we address it there and then.
            </p>
            <p className="text-slate-300 leading-relaxed text-base mt-4">
              If a concern comes to light after we&apos;ve left, contact us within <strong className="text-white">48 hours</strong> and we will arrange a complimentary return visit to make it right. We stand behind our work completely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What's covered */}
            <div>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                What Is Covered
              </h2>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's not covered */}
            <div>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-slate-500" />
                What Is Not Covered
              </h2>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <XCircle className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How to Raise a Concern</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Inspect on the Day",
                desc: "Before we leave, inspect the work with your technician. Raise any concern immediately — we will address it on the spot.",
              },
              {
                step: "02",
                title: "Contact Us Within 48 Hours",
                desc: "If you notice something after we've left, contact us within 48 hours by phone, WhatsApp, or email. Send photos if helpful.",
              },
              {
                step: "03",
                title: "We Return and Fix It",
                desc: "We will arrange a complimentary return visit at your earliest convenience to resolve the issue — no charge, no debate.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-950 font-bold text-sm">
                  {step}
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.telephone}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS.telephone.replace(/[^0-9]/g, "")}?text=Hi%20Dr.%20Autocare%2C%20I%27d%20like%20to%20raise%20a%20concern%20about%20my%20recent%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Insurance + trust */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why You Can Trust Dr. Autocare</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "5.0★", label: "Google Rating" },
              { stat: "127", label: "5-Star Reviews" },
              { stat: "500+", label: "Cars Treated" },
              { stat: "100%", label: "Insured" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">{stat}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8 max-w-xl mx-auto">
            Dr. Autocare holds full public liability insurance for all mobile valeting and detailing work. Insurance certificates are available upon request.
          </p>
          <div className="text-center mt-6 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/reviews" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              Read customer reviews <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/about" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              About Dr. Autocare <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/terms" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
              Full terms & conditions <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <CTABlock
        title="Book With Complete Confidence"
        subtitle="Every Dr. Autocare service is backed by our satisfaction guarantee. Get a free quote and experience the difference."
      />
    </>
  );
}
