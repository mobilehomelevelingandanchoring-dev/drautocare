import type { Metadata } from "next";
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
  title: "Mobile Car Valeting Stockport | Dr. Autocare — We Come To You",
  description:
    "Looking for mobile car valeting in Stockport or Manchester? Dr. Autocare brings professional valeting, detailing & paint correction to your door. Self-contained, 5★ rated, available 24/7. Get a free quote today.",
  alternates: { canonical: BUSINESS.url },
};

const homepageFaqs = [
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
      "Dr. Autocare covers Stockport and the wider Greater Manchester area including Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, and all surrounding postcodes. Contact us to confirm we cover your specific postcode.",
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
              <strong className="text-white">Dr. Autocare is a professional mobile car valeting and detailing service based in Stockport, Greater Manchester.</strong> We travel to your home, workplace, or any convenient location and deliver expert-grade car cleaning, paint correction, and ceramic coating — fully self-contained, with no facilities needed from you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: "Service Area", value: "Stockport & Greater Manchester" },
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
