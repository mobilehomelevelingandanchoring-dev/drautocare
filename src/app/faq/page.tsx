import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import { faqSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Valeting FAQ — Stockport & Manchester | Dr. Autocare",
  description:
    "Answers to the most common questions about Dr. Autocare's mobile car valeting and detailing service in Stockport and Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/faq` },
};

const allFaqs = [
  {
    question: "What is mobile car valeting?",
    answer:
      "Mobile car valeting is a professional cleaning service where a trained technician travels to your home, workplace, or any convenient location and cleans your vehicle on-site. All required equipment — water, power, products — is brought by the technician.",
  },
  {
    question: "How much does mobile car valeting cost?",
    answer:
      "Dr. Autocare's prices start from £40 for a mini valet. A full interior and exterior valet starts from £80. Full detailing packages start from £120. Paint correction starts from £180. All prices depend on vehicle size and condition — contact us for a fixed quote.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover Stockport and the wider Greater Manchester area, including Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, Salford, and all surrounding postcodes. Contact us to confirm we serve your specific postcode.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer:
      "No. Dr. Autocare is completely self-contained. We carry our own water supply and power equipment, so we can work on any driveway, car park, or roadside location without needing facilities from you.",
  },
  {
    question: "How long does a mobile valet take?",
    answer:
      "A mini valet takes 1–2 hours. A full valet takes 2–4 hours. A full detail takes 4–8 hours. Paint correction can take 6–12+ hours and may be split over two days. We provide accurate time estimates at the time of booking.",
  },
  {
    question: "What is car detailing?",
    answer:
      "Car detailing is a more intensive process than valeting. It includes multi-stage paint decontamination (clay bar, iron fallout removal), machine polishing to correct paint defects (swirl marks, scratches), and long-term protective coating application. The result is a near show-quality finish.",
  },
  {
    question: "What is paint correction?",
    answer:
      "Paint correction is the process of removing surface defects — swirl marks, water spots, bird dropping etching, light scratches — from a vehicle's clear coat using machine polishers and abrasive compounds. Dr. Autocare measures paint thickness before any polishing to ensure safe treatment.",
  },
  {
    question: "What is ceramic coating and how long does it last?",
    answer:
      "A ceramic coating is a liquid polymer that chemically bonds to your vehicle's clear coat, creating a long-term protective layer with hydrophobic (water-repelling) properties. Professional-grade ceramic coatings applied by Dr. Autocare last 2–5 years depending on the product and maintenance.",
  },
  {
    question: "Can you remove pet hair from car interiors?",
    answer:
      "Yes. Pet hair removal is included in our interior deep clean service. We use specialist rubber tools to extract pet hair from carpets and fabric seats before applying hot water extraction for a deep, thorough clean.",
  },
  {
    question: "Can you remove car scratches?",
    answer:
      "Scratches within the clear coat can be fully removed by machine polishing. Scratches that have penetrated through to the base coat or primer can be significantly improved using colour-matched touch-up techniques. Dr. Autocare assesses each scratch and advises on the best solution before proceeding.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Dr. Autocare is fully insured for mobile valeting and detailing work, including public liability insurance. You can book with complete confidence.",
  },
  {
    question: "How do I book?",
    answer:
      "You can book by calling us directly, sending a WhatsApp message, or completing our online quote form. We will confirm your booking and provide a fixed price before any work begins.",
  },
];

export default function FAQPage() {
  const faqMarkup = faqSchema(allFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMarkup) }} />

      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">FAQ</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-400">
            Everything you need to know about Dr. Autocare&apos;s mobile car valeting and detailing service in Stockport and Greater Manchester.
          </p>
        </div>
      </section>

      <FAQSection faqs={allFaqs} title="" subtitle="" />

      <CTABlock />
    </>
  );
}
