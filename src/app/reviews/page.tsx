import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight, ExternalLink } from "lucide-react";
import CTABlock from "@/components/CTABlock";
import { reviews } from "@/lib/data/reviews";
import { reviewSchema, BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | Dr. Autocare — 5★ Mobile Car Valeting Stockport",
  description:
    "Read genuine customer reviews for Dr. Autocare's mobile car valeting and detailing service across Stockport and Greater Manchester. 5.0★ rated across 127 Google reviews.",
  alternates: { canonical: `${BUSINESS.url}/reviews` },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

const platforms = [
  {
    name: "Google",
    rating: "5.0★",
    count: "127 reviews",
    href: "https://www.google.com/maps/place/Dr+Autocare",
    description: "Our primary review platform. Read all verified Google reviews.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Yelp",
    rating: "5.0★",
    count: "Verified listing",
    href: "https://m.yelp.com/biz/dr-autocare-stockport-2",
    description: "Find Dr. Autocare on Yelp.",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    name: "Yell",
    rating: "Listed",
    count: "Verified business",
    href: "https://www.yell.com/biz/dr-autocare-stockport-9205018/",
    description: "Find Dr. Autocare on Yell.com.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

export default function ReviewsPage() {
  const reviewMarkup = reviewSchema(
    reviews.map((r) => ({ author: r.author, rating: r.rating, text: r.text, date: r.date }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewMarkup) }} />

      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Reviews</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            What Our Customers Say
          </h1>

          {/* Aggregate rating display */}
          <div className="inline-flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl px-7 py-5 mb-6">
            <div>
              <div className="text-5xl font-bold text-amber-400 leading-none">5.0</div>
              <div className="flex mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-left border-l border-slate-700 pl-4">
              <div className="text-white font-semibold">127 verified reviews</div>
              <div className="text-slate-400 text-sm">on Google</div>
              <div className="text-slate-500 text-xs mt-1">Stockport & Greater Manchester</div>
            </div>
          </div>

          <p className="text-slate-400 max-w-xl mx-auto">
            Trusted by hundreds of drivers across Stockport, Manchester, and Greater Manchester for professional, reliable mobile car care.
          </p>
        </div>
      </section>

      {/* Review platforms */}
      <section className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-white mb-6 text-center">Find Us On</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-3 bg-slate-950 border ${p.bg} rounded-xl p-5 hover:scale-105 transition-all group`}
              >
                <div>
                  <div className={`font-bold text-lg ${p.color}`}>{p.name}</div>
                  <div className="text-white font-semibold text-sm">{p.rating} · {p.count}</div>
                  <div className="text-slate-500 text-xs mt-1">{p.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">Featured Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review) => (
              <div key={review.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col">
                <Quote className="w-6 h-6 text-amber-500/40 mb-3 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="font-semibold text-white text-sm">{review.author}</div>
                  <div className="text-slate-500 text-xs">{review.location}</div>
                  <div className="text-amber-500/70 text-xs mt-1">{review.service}</div>
                  <div className="text-slate-600 text-xs mt-0.5">
                    {new Date(review.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Dr+Autocare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Read all 127 reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Had a Great Experience?</h2>
          <p className="text-slate-400 mb-8">
            Your review helps other drivers in Stockport and Greater Manchester find a valeting service they can trust. It takes just 60 seconds on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/Dr+Autocare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Leave a Google Review
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Book Your Service
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <Link href="/guarantee" className="hover:text-amber-400 transition-colors">Our satisfaction guarantee</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">About Dr. Autocare</Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Our services</Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
