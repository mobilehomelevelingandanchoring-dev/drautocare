import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import WorkGallery from "@/components/WorkGallery";
import Reviews from "@/components/Reviews";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import CTABlock from "@/components/CTABlock";
import { faqSchema, localBusinessSchema, howToSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Valeting Stockport SK4 | Dr. Autocare — Heaton Moor, Greater Manchester",
  description:
    "Dr. Autocare is based in Gail Avenue, Heaton Moor, Stockport SK4 2PY — professional mobile car valeting and detailing across Greater Manchester. 5★ rated, from £40, 24/7. Free quote today.",
  alternates: { canonical: BUSINESS.url },
};

const homepageFaqs = [
  {
    question: "Where is Dr. Autocare based?",
    answer:
      "Dr. Autocare is based in Gail Avenue, Stockport, SK4 2PY, Greater Manchester — right in the heart of Heaton Moor. As a fully mobile service, we travel to your home, workplace, or any convenient location across Stockport and Greater Manchester. Being locally based in SK4 means we can often offer same-day or next-day service for customers in the SK4 postcode and surrounding areas.",
  },
  {
    question: "Do you cover Heaton Moor and the SK4 postcode?",
    answer:
      "Yes — Heaton Moor is our home base. Dr. Autocare is located on Gail Avenue, SK4 2PY, so we have excellent availability for customers across SK4. We regularly serve Heaton Moor, Heaton Chapel, Edgeley, Reddish, Davenport, and all surrounding postcodes. Response times in SK4 are typically faster than anywhere else we cover.",
  },
  {
    question: "What is mobile car valeting and how does it work?",
    answer:
      "Mobile car valeting is a professional car cleaning service where a trained technician travels to your home, workplace, or any convenient location and cleans your vehicle on-site. Dr. Autocare brings all required equipment — including water, power, and professional products — so no facilities are needed from you.",
  },
  {
    question: "How much does Dr. Autocare's mobile valeting service cost?",
    answer:
      "Prices start from £40 for a mini valet. A full valet (interior and exterior) starts from £80–£120. Full detailing and paint correction packages start from £180. All prices vary by vehicle size and condition. Contact us for a personalised, fixed quote.",
  },
  {
    question: "Which areas in Greater Manchester do you cover?",
    answer:
      "Based in Heaton Moor (SK4 2PY), Dr. Autocare covers Stockport and the wider Greater Manchester area including Heaton Chapel, Edgeley, Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, and all surrounding postcodes (SK1–SK9, M14, M20, M21, M33, WA14). Contact us to confirm your specific postcode.",
  },
  {
    question: "Can you remove pet hair, stains, and odours from car interiors?",
    answer:
      "Yes. Our interior deep clean service addresses pet hair (using specialist removal tools before hot water extraction), stains (assessed individually — most common stains can be significantly reduced or removed), and odours (using professional odour eliminator treatments).",
  },
  {
    question: "What is the difference between car valeting and car detailing?",
    answer:
      "Valeting is a thorough clean of your vehicle. Detailing is a more intensive process that includes paint decontamination (clay bar, iron fallout removal), machine polishing to correct paint defects (swirl marks, scratches), and long-term protective coating application. Detailing achieves a show-quality finish.",
  },
  {
    question: "Do you offer ceramic coating in Stockport?",
    answer:
      "Yes. Dr. Autocare applies professional ceramic coatings across Stockport and Greater Manchester. Ceramic coatings bond chemically to your paintwork, providing hydrophobic properties, UV protection, and 2–5 years of durability. We recommend paint correction before coating for the best results.",
  },
];

export default function HomePage() {
  const faqMarkup = faqSchema(homepageFaqs);
  const businessMarkup = localBusinessSchema();
  const howToMarkup = howToSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToMarkup) }}
      />

      <Hero />

      {/* Speakable quick-facts block — optimised for AI overviews and featured snippets */}
      <section className="py-10 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
            <h2 className="speakable text-lg font-bold text-white mb-4">What is Dr. Autocare?</h2>
            <p className="speakable text-slate-300 leading-relaxed mb-5">
              <strong className="text-white">Dr. Autocare is a professional mobile car valeting and detailing service based in Gail Avenue, Heaton Moor, Stockport SK4 2PY, Greater Manchester.</strong> We travel to your home, workplace, or any convenient location and deliver expert-grade car cleaning, paint correction, and ceramic coating — fully self-contained, with no facilities needed from you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: "Based In", value: "Heaton Moor, SK4 2PY" },
                { label: "Starting Price", value: "From £40 (mini valet)" },
                { label: "Availability", value: "24/7, every day" },
                { label: "Google Rating", value: "5.0★ (127 reviews)" },
                { label: "Self-Contained", value: "Yes — own water & power" },
                { label: "Insured", value: "Yes — public liability" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-slate-950 rounded-xl px-4 py-3 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                  <div className="text-white font-semibold text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence — NAP + postcode grid for local SEO */}
      <section className="py-14 bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Locally Based</span>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                Your Local Valeter in<br />Heaton Moor, Stockport
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Dr. Autocare is based in <strong className="text-white">Gail Avenue, Stockport, SK4 2PY</strong> — in the heart of Heaton Moor. As a genuinely local business, we can respond faster, travel shorter distances, and offer same-day availability across the SK4 postcode and surrounding areas of Greater Manchester more reliably than any out-of-town operator.
              </p>
              <address className="not-italic bg-slate-950 border border-amber-500/20 rounded-xl p-5 text-sm text-slate-400 space-y-2 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-white font-bold">Dr. Autocare</span>
                </div>
                <p>Gail Avenue, Stockport, SK4 2PY</p>
                <p>Greater Manchester, England</p>
                <a href={`tel:${BUSINESS.telephone}`} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors pt-1">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {BUSINESS.telephone}
                </a>
              </address>
              <Link
                href="/locations/heaton-moor"
                className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-semibold"
              >
                <MapPin className="w-4 h-4" />
                Mobile valeting in Heaton Moor →
              </Link>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Postcodes & Areas We Cover</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { code: "SK4", area: "Heaton Moor" },
                  { code: "SK1", area: "Stockport" },
                  { code: "SK2", area: "Stockport" },
                  { code: "SK3", area: "Edgeley" },
                  { code: "SK6", area: "Romiley" },
                  { code: "SK7", area: "Bramhall" },
                  { code: "SK8", area: "Cheadle" },
                  { code: "M14", area: "Moss Side" },
                  { code: "M20", area: "Didsbury" },
                  { code: "M21", area: "Chorlton" },
                  { code: "M33", area: "Sale" },
                  { code: "WA14", area: "Altrincham" },
                  { code: "SK9", area: "Wilmslow" },
                ].map(({ code, area }) => (
                  <div key={code} className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs">
                    <span className="text-amber-400 font-bold font-mono">{code}</span>
                    <span className="text-slate-400 ml-1.5">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mb-5">Not listed? We travel widely — contact us to confirm your postcode.</p>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/locations" className="text-center bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-xl py-3 text-sm text-slate-300 hover:text-amber-400 transition-all font-medium">
                  All Service Areas
                </Link>
                <Link href="/quote" className="text-center bg-amber-500 hover:bg-amber-400 rounded-xl py-3 text-sm text-slate-950 font-bold transition-all">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <ServicesGrid />
      <ProcessSection />
      <WorkGallery />
      <Reviews />
      <CTABlock
        title="Get a Free Quote Today"
        subtitle="Mobile car valeting and detailing across Stockport and Greater Manchester. We come to you — no facilities needed."
        variant="amber"
      />
      <LocationsSection />
      <FAQSection faqs={homepageFaqs} />
      <BlogPreview />
      <CTABlock />
    </>
  );
}
