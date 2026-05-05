import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Car Care Advice
            </span>
            <h2 className="text-3xl font-bold text-white">From Our Blog</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors font-medium flex-shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-amber-900/10"
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-800">
                <div className="text-slate-700 text-4xl font-bold">
                  {post.category.slice(0, 2).toUpperCase()}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-bold text-white text-sm leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-1 text-xs font-semibold text-amber-400 mt-4 group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
