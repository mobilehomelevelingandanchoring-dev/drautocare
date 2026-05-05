import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import CTABlock from "@/components/CTABlock";
import { articleSchema, breadcrumbSchema, BUSINESS } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    alternates: { canonical: `${BUSINESS.url}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const schema = articleSchema({
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    url: `${BUSINESS.url}/blog/${post.slug}`,
  });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
    { name: post.title, url: `${BUSINESS.url}/blog/${post.slug}` },
  ]);

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="pt-28 pb-12 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
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

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">{post.title}</h1>
          <p className="text-lg text-slate-400 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <article className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-dark">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 first:mt-0">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("**") && block.includes(":**")) {
                return (
                  <p key={i} className="text-slate-300 leading-relaxed mb-3">
                    <strong className="text-white">{block.split(":**")[0].replace("**", "")}:</strong>
                    {block.split(":**")[1]}
                  </p>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-slate-400 text-sm">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-slate-400 leading-relaxed mb-4 text-base">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-slate-950">
              DR
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Dr. Autocare</div>
              <div className="text-slate-500 text-xs">Professional Mobile Car Valeting &amp; Detailing, Stockport</div>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 transition-all"
                >
                  <div className="text-xs text-slate-500 mb-2">{related.category} · {related.readTime}</div>
                  <h3 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-amber-400 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABlock />
    </>
  );
}
