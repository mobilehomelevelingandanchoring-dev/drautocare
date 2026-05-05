import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="text-center max-w-md">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">404</p>
        <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-slate-400 mb-8">
          Sorry, we couldn&apos;t find that page. It may have moved or been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all"
          >
            Go home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-slate-600 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
