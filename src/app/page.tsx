import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import Reviews from "@/components/Reviews";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import CTABlock from "@/components/CTABlock";
import { faqSchema, localBusinessSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mobile Car Valeting Stockport | Dr. Autocare — Greater Manchester",
  description:
    "Dr. Autocare provides professional mobile car valeting, detailing, and paint correction across Stockport and Greater Manchester. We come to you — self-contained, no facilities needed. Book today.",
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

      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessSection />
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
