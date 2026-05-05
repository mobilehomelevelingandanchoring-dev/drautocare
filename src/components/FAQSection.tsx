"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

const defaultFaqs: FAQ[] = [
  {
    question: "What areas do you cover for mobile car valeting?",
    answer:
      "Dr. Autocare covers Stockport and the wider Greater Manchester area, including Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, and all surrounding postcodes. Contact us to confirm availability in your specific area.",
  },
  {
    question: "Do you need access to water or electricity at my location?",
    answer:
      "No — Dr. Autocare is completely self-contained. We carry our own water supply and power equipment, meaning we can valet your car on any driveway, car park, or suitable roadside location without any facilities from you.",
  },
  {
    question: "How long does mobile car valeting take?",
    answer:
      "A mini valet (exterior wash, interior vacuum and wipe) takes 1–2 hours. A standard full valet takes 2–4 hours. A full detail with paint correction can take 6–12 hours and may be spread over two days for heavily affected vehicles.",
  },
  {
    question: "What is the difference between valeting and detailing?",
    answer:
      "Valeting focuses on thoroughly cleaning the vehicle to a high standard. Detailing goes further — it involves paint decontamination, machine polishing to correct imperfections, and application of long-term protective coatings. Detailing achieves a show-quality finish.",
  },
  {
    question: "How much does mobile car valeting cost in Stockport?",
    answer:
      "Prices start from £40 for a mini valet. A full valet starts from £80–£120 depending on vehicle size. Paint correction and ceramic coating packages start from £180. Contact us for a personalised quote.",
  },
  {
    question: "Can you remove pet hair from car interiors?",
    answer:
      "Yes. Our interior deep clean service includes professional pet hair removal using specialist tools before hot water extraction of carpets and seats. Pet hair is one of the most common requests we receive — we are very experienced in dealing with it.",
  },
  {
    question: "Do you offer ceramic coating in Stockport?",
    answer:
      "Yes. Dr. Autocare applies professional-grade ceramic coatings to vehicles across Stockport and Greater Manchester. We recommend a paint correction stage before ceramic coating to ensure the coating enhances a flawless surface.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Dr. Autocare is fully insured for mobile valeting and detailing work, including public liability insurance. You can book with complete confidence.",
  },
];

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Dr. Autocare's mobile car valeting and detailing service.",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left group"
              >
                <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
