import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-slate-400 text-sm">· 127 reviews on Google</span>
          </div>
          <p className="text-slate-400 max-w-xl mx-auto">
            Trusted by hundreds of drivers across Stockport, Manchester, and Greater Manchester for professional mobile car care.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col"
            >
              <Quote className="w-6 h-6 text-amber-500/40 mb-3 flex-shrink-0" />

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              <div>
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="font-semibold text-white text-sm">{review.author}</div>
                <div className="text-slate-500 text-xs">{review.location}</div>
                <div className="text-amber-500/60 text-xs mt-1">{review.service}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Dr+Autocare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Read all 127 reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
