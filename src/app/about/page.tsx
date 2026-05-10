import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, MapPin, Clock, CheckCircle } from "lucide-react";
import CTABlock from "@/components/CTABlock";
import { BUSINESS, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Dr. Autocare | Stockport's Trusted Mobile Car Valeting Specialist",
  description:
    "Dr. Autocare is a fully insured, 5★ rated mobile car valeting and detailing service based in Stockport. Over 500 vehicles treated. Studio-quality results at your door across Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/about` },
};

const values = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Every job is covered by comprehensive public liability insurance. Your vehicle is safe in our hands.",
  },
  {
    icon: Award,
    title: "Professional Grade",
    description: "We use the same equipment and products as professional detailing studios — machine polishers, hot water extractors, and premium chemicals.",
  },
  {
    icon: MapPin,
    title: "Truly Mobile",
    description: "We are completely self-contained — carrying our own water supply and power equipment. We can work anywhere in our service area.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description: "We respect your time. We arrive when we say we will, complete the job to the agreed standard, and keep you informed throughout.",
  },
];

export default function AboutPage() {
  const businessMarkup = localBusinessSchema();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessMarkup) }} />
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About</span>
          </nav>

          {/* Brand mark */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Dr. Autocare — Valeting & Detailing Services official logo"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">Dr. Autocare</p>
                <p className="text-amber-400 text-sm">Valeting & Detailing Services</p>
                <p className="text-slate-500 text-xs">Stockport, Greater Manchester</p>
              </div>
            </div>
          </div>

          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Stockport&apos;s Trusted Mobile Car Valeting Specialist
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Dr. Autocare was founded with a simple mission: to deliver professional, studio-quality car care at your door — without compromise. We are Stockport-based, Greater Manchester-focused, and obsessed with results.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-5">Our Story</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Dr. Autocare was born from a passion for cars and a frustration with the status quo. The founder — a trained detailing professional with years of experience — saw how inconsistent and impersonal traditional valet centres could be, and set out to create something better.
                </p>
                <p>
                  The idea was straightforward: bring professional detailing-studio standards directly to the customer&apos;s door. No queues, no uncertainty, no rushing. Just thorough, expert car care delivered with care and precision.
                </p>
                <p>
                  Starting in Stockport and expanding across Greater Manchester, Dr. Autocare has built a reputation on reliability, quality, and treating every vehicle — regardless of age, make, or value — with the same level of respect and attention.
                </p>
                <p>
                  Today, Dr. Autocare serves hundreds of clients across Stockport, Cheadle, Bramhall, Manchester, Altrincham, Wilmslow, and beyond — handling everything from weekly maintenance washes to full multi-stage paint corrections and ceramic coating applications.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Branded van photo */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800">
                <Image
                  src="/dr-autocare-van-seat-leon-mobile-valeting-stockport.webp"
                  alt="Dr. Autocare branded mobile valeting van alongside a freshly detailed blue SEAT Leon in Stockport"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-semibold text-amber-400 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Our Mobile Unit
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "6+", label: "Years Experience" },
                  { value: "500+", label: "Cars Treated" },
                  { value: "5.0★", label: "Google Rating" },
                  { value: "127", label: "5-Star Reviews" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">{value}</div>
                    <div className="text-sm text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Dr. Autocare isn&apos;t just another car wash. These are the principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Mobile Car Valeting (mini, full, executive)",
              "Car Detailing (decontamination, protection)",
              "Paint Correction (single and two-stage)",
              "Scratch and Swirl Mark Removal",
              "Interior Deep Clean (HWE, steam, leather)",
              "Ceramic Coating & Paint Sealant",
              "Carnauba Wax Application",
              "Engine Bay Cleaning",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
