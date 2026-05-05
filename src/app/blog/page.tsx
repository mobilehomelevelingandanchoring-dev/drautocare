import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import CTABlock from "@/components/CTABlock";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Car Care Blog — Valeting & Detailing Tips | Dr. Autocare Stockport",
  description:
    "Expert car care advice from Dr. Autocare. Tips on valeting, detailing, paint correction, ceramic coating, and keeping your car looking its best in Greater Manchester.",
  alternates: { canonical: `${BUSINESS.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Blog</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Car Care Advice
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Mobile Car Valeting & Detailing Blog
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Expert advice on car care, valeting, paint protection, and detailing from Dr. Autocare — Stockport&apos;s trusted mobile car care specialist.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid md:grid-cols-3 gap-6 bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-amber-900/10"
              >
                {/* Image placeholder */}
                <div className="h-48 md:h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-r border-slate-800 min-h-[160px]">
                  <div className="text-slate-700 text-5xl font-bold">
                    {post.category.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:gap-2.5 transition-all">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
