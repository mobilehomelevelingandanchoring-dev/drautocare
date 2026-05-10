import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABlock from "@/components/CTABlock";
import FAQSection from "@/components/FAQSection";
import { faqSchema, BUSINESS } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Mobile Car Valeting FAQ — All Your Questions Answered | Dr. Autocare Stockport",
  description:
    "Wondering how mobile car valeting works, how much it costs, or which areas Dr. Autocare covers? Find clear, honest answers to every question about our service in Stockport and Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/faq` },
};

const faqsAbout = [
  {
    question: "What is Dr. Autocare?",
    answer:
      "Dr. Autocare is a professional mobile car valeting and detailing business based in Stockport, serving Greater Manchester. We bring studio-quality car care directly to your home, workplace, or any convenient location — fully equipped, self-contained, and available 24/7.",
  },
  {
    question: "What is mobile car valeting?",
    answer:
      "Mobile car valeting is a professional cleaning service where a trained technician travels to your location and cleans your vehicle on-site. Dr. Autocare carries all equipment — water, power, and premium products — so nothing is needed from you. It's the most convenient way to get your car professionally cleaned.",
  },
  {
    question: "Is Dr. Autocare a mobile service, or do I need to visit a garage?",
    answer:
      "Dr. Autocare is 100% mobile. We come to you — at your home, at work, or any suitable location. You never need to drop your car off anywhere. We handle everything on-site, at a time that suits you.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Stockport and the wider Greater Manchester area, including Cheadle, Bramhall, Hazel Grove, Didsbury, Sale, Altrincham, Wilmslow, Salford, and all surrounding SK and M postcodes. Contact us to confirm we can reach your specific postcode.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Yes. Dr. Autocare holds full public liability insurance for all mobile valeting and detailing work. You can book with complete confidence — your vehicle is in safe hands.",
  },
];

const faqsPricing = [
  {
    question: "How much does mobile car valeting cost?",
    answer:
      "A mini valet (exterior wash + interior vacuum) starts from £40. A full valet (interior and exterior) starts from £80. Car detailing starts from £120. Paint correction starts from £180. Ceramic coating starts from £300. All prices vary by vehicle size and condition. Every quote is fixed — what we say is what you pay.",
  },
  {
    question: "Are your prices fixed, or can they change?",
    answer:
      "All Dr. Autocare prices are fixed and agreed before any work begins. We assess your vehicle and provide a firm, all-inclusive quote — no hidden extras or surprises. If anything changes during the job, we discuss it with you first.",
  },
  {
    question: "Do you charge more for larger vehicles?",
    answer:
      "Yes — vehicle size is one of the main factors that affects pricing. We split vehicles into small (hatchbacks, city cars), medium (saloons, estates), large (SUVs, 4x4s, MPVs), and vans. We'll confirm the price for your specific vehicle when you enquire.",
  },
  {
    question: "Do you offer a free quote?",
    answer:
      "Yes, absolutely. Call us, send a WhatsApp, or complete our online quote form and we'll give you a free, no-obligation, fixed quote. You can also send photos of your vehicle via WhatsApp for a more accurate estimate before we arrive.",
  },
  {
    question: "Is mobile car valeting worth the money?",
    answer:
      "For most people, yes — especially when you factor in the time saved and the convenience of having us come to you. A regular valet also protects your vehicle's condition and resale value. Many of our clients say the results exceed what they expected from a 'mobile' service.",
  },
];

const faqsBooking = [
  {
    question: "How do I book with Dr. Autocare?",
    answer:
      "You can book by calling us directly on +44 7375 759686, sending a WhatsApp message, or completing the online quote form at drautocare.co.uk/quote. We'll confirm your booking and provide a fixed price before any work starts.",
  },
  {
    question: "Do you offer same-day or next-day appointments?",
    answer:
      "Yes — same-day and next-day appointments are often available, subject to schedule. We recommend contacting us as early as possible on the day if you need urgent valeting. WhatsApp is the fastest way to reach us.",
  },
  {
    question: "Are you available at weekends and bank holidays?",
    answer:
      "Yes. Dr. Autocare is available 24/7, every day of the year — including Sundays and bank holidays. We understand that weekdays don't always work for people, so we fit around your schedule.",
  },
  {
    question: "Do I need to be present while you work on my car?",
    answer:
      "Not necessarily. For exterior work, you simply need to leave the vehicle accessible. For interior cleaning, we may need to contact you briefly. Many clients leave the car and return to find it transformed — we just need a way to hand back keys when we're done.",
  },
  {
    question: "What happens if it rains on my booking day?",
    answer:
      "Light rain is generally not a problem for interior cleaning jobs. For exterior work and detailing, we'll assess conditions on the day and discuss rescheduling if needed. We'll always contact you in advance rather than arriving in unsuitable conditions.",
  },
];

const faqsProcess = [
  {
    question: "Do you need water or electricity at my location?",
    answer:
      "No. Dr. Autocare is completely self-contained. We carry our own water supply and power equipment, so we can work on any driveway, car park, or roadside location. You don't need to provide anything.",
  },
  {
    question: "How long does a mobile valet take?",
    answer:
      "A mini valet takes 1–2 hours. A full valet takes 2–4 hours. An interior deep clean takes 2–5 hours. A full car detail takes 4–8 hours. Paint correction can take 6–12+ hours and may be spread over two days. We give you an accurate time estimate when you book.",
  },
  {
    question: "Where can you valet my car?",
    answer:
      "We can work on your home driveway, at your workplace car park, in a public car park, or on the roadside — anywhere with enough space to work safely around the vehicle. If you're unsure whether your location is suitable, just ask us.",
  },
  {
    question: "What professional equipment do you bring?",
    answer:
      "We bring a pressure washer, foam cannon, hot water extraction machine, steam cleaner, machine polisher, wet and dry vacuums, dual-action and rotary polishers, professional chemical range, clay bars, microfibre towels, and our own water supply and generator where needed.",
  },
  {
    question: "Do I need to prepare my car before you arrive?",
    answer:
      "Just make sure the car is accessible and remove any valuable items from the interior. For interior cleaning, removing personal belongings from seats and footwells helps us reach every surface. That's all — we handle everything else.",
  },
];

const faqsServices = [
  {
    question: "What is the difference between car valeting and car detailing?",
    answer:
      "Valeting is a thorough clean — wash, vacuum, wipe-down, and polish. Detailing goes further: it involves multi-stage paint decontamination (clay bar, iron fallout), machine polishing to remove paint defects (swirl marks, scratches), and protective coating application. Detailing achieves a near show-quality finish that lasts significantly longer.",
  },
  {
    question: "What is paint correction and do I need it?",
    answer:
      "Paint correction is machine polishing to remove defects from your clear coat — swirl marks, water spots, bird dropping etching, and light scratches. You likely need it if your paint looks dull or spidery in sunlight. Dr. Autocare measures paint thickness before polishing to ensure a safe, effective result.",
  },
  {
    question: "What is ceramic coating and is it worth it?",
    answer:
      "A ceramic coating is a liquid polymer that chemically bonds to your clear coat, providing 2–5 years of protection. It creates a hydrophobic surface that repels water and dirt, enhances gloss, and resists light scratches and UV damage. For anyone who wants long-term protection without constant waxing, it's excellent value.",
  },
  {
    question: "Can you remove pet hair from car interiors?",
    answer:
      "Yes. Pet hair removal is one of our most requested services. We use specialist rubber extraction tools to lift hair from carpet fibres and fabric seats before hot water extracting the interior. Even heavily hair-coated interiors come out remarkably clean.",
  },
  {
    question: "Can you remove scratches from my car without respraying?",
    answer:
      "Scratches in the clear coat layer can be fully removed by machine polishing — no respray needed. Scratches into the base coat can be significantly improved using colour-matched touch-up and professional finishing. To test: run your fingernail across the scratch — if it doesn't catch, polishing will very likely remove it.",
  },
  {
    question: "Can you remove stains from car seats?",
    answer:
      "Most stains — coffee, food, mud, ink, and general soiling — can be significantly reduced or completely removed using professional agitation and hot water extraction. Results depend on stain type and age. We always assess stains before starting and will tell you honestly what we can achieve.",
  },
  {
    question: "Do you clean leather car seats?",
    answer:
      "Yes. We use pH-balanced leather cleaners appropriate for your specific leather type (perforated, pigmented, aniline), followed by a conditioning treatment to keep leather supple and prevent cracking. Leather conditioning is included in our full valet and interior deep clean services.",
  },
  {
    question: "What is hot water extraction (HWE) in car interior cleaning?",
    answer:
      "Hot water extraction injects hot water and cleaning solution into carpet fibres or fabric seats under pressure, then immediately extracts it using a powerful vacuum. It removes embedded dirt, bacteria, allergens, and stains far more effectively than vacuuming alone — the industry standard for deep interior cleaning.",
  },
  {
    question: "Do you offer ceramic coating in Stockport?",
    answer:
      "Yes. Dr. Autocare applies professional-grade ceramic coatings across Stockport and Greater Manchester. We recommend a paint correction stage before coating to ensure the ceramic bonds to flawless paint. We also offer alloy wheel coatings and glass coatings.",
  },
  {
    question: "Do you remove bad odours from car interiors?",
    answer:
      "Yes. We use professional odour eliminator treatments that neutralise odour-causing bacteria rather than masking them. Common odour causes we deal with include cigarette smoke, pet smells, food, and damp. Particularly severe cases may require ozone treatment — ask us about this when you enquire.",
  },
];

const faqsAftercare = [
  {
    question: "How long do the results of a valet last?",
    answer:
      "A basic valet stays fresh for 2–6 weeks depending on use and weather conditions. A full valet with wax protection lasts 1–3 months. A ceramic coating lasts 2–5 years. We recommend regular maintenance washes between full valets to preserve the results.",
  },
  {
    question: "How often should I get my car valeted?",
    answer:
      "For daily drivers, a mini valet every 4–6 weeks and a full valet every 3–6 months is a good routine. This keeps your vehicle hygienic, maintains its appearance, and helps protect its resale value. Cars with ceramic coatings need less frequent full valets.",
  },
  {
    question: "How should I maintain my car after a ceramic coating?",
    answer:
      "Avoid washing for 7 days after application to allow full curing. After that, use pH-neutral car shampoos and rinse thoroughly. Avoid automatic car washes — they cause swirl marks that will degrade the coating. A quick detail spray after each wash will keep it looking its best.",
  },
  {
    question: "How long before I can use my car after interior deep cleaning?",
    answer:
      "After hot water extraction, carpets and seats typically need 2–4 hours to dry in warm conditions, or 6–8 hours in cold weather. We recommend leaving windows slightly open to aid airflow. Your technician will give you an estimate specific to your vehicle and conditions.",
  },
];

const faqsTrust = [
  {
    question: "Why should I choose Dr. Autocare over a petrol station car wash?",
    answer:
      "Petrol station car washes use harsh rotating brushes that create swirl marks in your paintwork over time. Dr. Autocare uses the two-bucket contact wash method, safe pH-neutral products, and professional microfibre materials that protect your paint. The results are dramatically better and safer for your vehicle's finish.",
  },
  {
    question: "Are your results guaranteed?",
    answer:
      "Yes. We don't leave a job until you're satisfied with the results. We walk through the work with you before packing up, and if something isn't right, we address it on the spot. Our 5.0★ Google rating across 127 reviews reflects our commitment to getting it right every time.",
  },
  {
    question: "Do you use professional-grade products?",
    answer:
      "Yes. We use products from leading professional automotive brands — including pH-neutral shampoos, iron fallout removers, clay bars, machine polishing compounds, and ceramic coating systems used by professional detailers. These are not consumer-grade products available in supermarkets.",
  },
];

const allFaqs = [
  ...faqsAbout,
  ...faqsPricing,
  ...faqsBooking,
  ...faqsProcess,
  ...faqsServices,
  ...faqsAftercare,
  ...faqsTrust,
];

const categories = [
  { title: "About Dr. Autocare & Mobile Valeting", faqs: faqsAbout },
  { title: "Pricing & Quotes", faqs: faqsPricing },
  { title: "Booking & Scheduling", faqs: faqsBooking },
  { title: "Our Process & What to Expect", faqs: faqsProcess },
  { title: "Our Services Explained", faqs: faqsServices },
  { title: "Results & Aftercare", faqs: faqsAftercare },
  { title: "Quality & Trust", faqs: faqsTrust },
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
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about Dr. Autocare&apos;s mobile car valeting and detailing service in Stockport and Greater Manchester. Can&apos;t find your answer? <a href="tel:+447375759686" className="text-amber-400 hover:text-amber-300 transition-colors">Call us directly</a>.
          </p>
        </div>
      </section>

      {/* Quick answer box — featured snippet target */}
      <section className="py-10 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
            <h2 className="text-amber-400 font-semibold text-lg mb-3">Quick Answer</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Dr. Autocare is a fully mobile car valeting and detailing service based in Stockport, covering Greater Manchester.</strong> We come to your home or workplace, bring all our own equipment, and deliver professional results. Prices start from £40. We are available 24/7, fully insured, and rated 5.0★ on Google.
            </p>
          </div>
        </div>
      </section>

      {/* Categorised FAQ sections */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          {categories.map((category, i) => (
            <div key={category.title}>
              {i > 0 && <div className="h-px bg-slate-800 my-8" />}
              <h2 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h2>
              <FAQSection faqs={category.faqs} bare />
            </div>
          ))}
        </div>
      </section>

      {/* Explore services — internal link hub */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-white mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group flex items-center justify-between gap-3 bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4 transition-all"
              >
                <div>
                  <div className="font-semibold text-sm text-white group-hover:text-amber-400 transition-colors">{svc.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{svc.price}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-white mb-4">Service Areas</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-sm text-slate-400 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-all"
              >
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/quote" className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1">
              Contact us <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/blog" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1">
              Car care guides <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
