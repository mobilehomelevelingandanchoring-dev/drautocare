"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Mobile Car Valeting", href: "/services/mobile-car-valeting" },
      { label: "Car Detailing", href: "/services/car-detailing" },
      { label: "Paint Correction", href: "/services/paint-correction" },
      { label: "Scratch Removal", href: "/services/scratch-removal" },
      { label: "Interior Cleaning", href: "/services/interior-cleaning" },
      { label: "Exterior Protection", href: "/services/exterior-protection" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Stockport", href: "/locations/stockport" },
      { label: "Manchester", href: "/locations/manchester" },
      { label: "Cheadle", href: "/locations/cheadle" },
      { label: "Bramhall", href: "/locations/bramhall" },
      { label: "Altrincham", href: "/locations/altrincham" },
      { label: "Wilmslow", href: "/locations/wilmslow" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center font-bold text-slate-950 text-sm group-hover:bg-amber-400 transition-colors">
              DR
            </div>
            <div className="leading-none">
              <span className="block text-white font-bold text-lg tracking-tight">Dr. Autocare</span>
              <span className="block text-amber-400 text-xs font-medium">Mobile Valeting</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && (
                  <div
                    className="absolute top-full left-0 w-56 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors border-b border-slate-800 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.telephone}`}
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
            <Link
              href="/quote"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-300 hover:text-amber-400 transition-colors p-2"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-white hover:text-amber-400 transition-colors border-b border-slate-800"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 mb-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS.telephone}`}
                className="flex items-center justify-center gap-2 bg-slate-800 text-white font-semibold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Now
              </a>
              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-amber-500 text-slate-950 font-semibold py-3 rounded-lg text-sm"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
