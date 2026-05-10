import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/schema";

const serviceLinks = [
  { label: "Mobile Car Valeting", href: "/services/mobile-car-valeting" },
  { label: "Car Detailing", href: "/services/car-detailing" },
  { label: "Paint Correction", href: "/services/paint-correction" },
  { label: "Scratch Removal", href: "/services/scratch-removal" },
  { label: "Interior Cleaning", href: "/services/interior-cleaning" },
  { label: "Exterior Protection", href: "/services/exterior-protection" },
];

const locationLinks = [
  { label: "Car Valeting Stockport", href: "/locations/stockport" },
  { label: "Car Valeting Manchester", href: "/locations/manchester" },
  { label: "Car Valeting Cheadle", href: "/locations/cheadle" },
  { label: "Car Valeting Bramhall", href: "/locations/bramhall" },
  { label: "Car Valeting Altrincham", href: "/locations/altrincham" },
  { label: "Car Valeting Wilmslow", href: "/locations/wilmslow" },
];

const companyLinks = [
  { label: "About Dr. Autocare", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-slate-700">
                <Image
                  src="/logo.webp"
                  alt="Dr. Autocare logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-lg">Dr. Autocare</span>
                <span className="block text-amber-400 text-xs font-medium">Mobile Valeting</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Professional mobile car valeting and detailing across Stockport and Greater Manchester. We come to you — fully self-contained.
            </p>
            <div className="space-y-2">
              <a href={`tel:${BUSINESS.telephone}`} className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                {BUSINESS.telephone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Stockport, Greater Manchester</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Mon–Sat: 8am – 6pm</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/drautocare" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group" aria-label="Facebook">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/drautocare" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group" aria-label="Instagram">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
              <a href="https://m.yelp.com/biz/dr-autocare-stockport-2" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group" aria-label="Yelp">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.817 9.817 0 0 1 2.364 3.48 1.073 1.073 0 0 1-.694 1.231zm-5.764 3.17l4.499 2.353c.824.43.772 1.62-.085 1.978a9.764 9.764 0 0 1-4.093.755 1.073 1.073 0 0 1-1.024-1.131l.2-5.115c.038-.985 1.254-1.39 1.903-.52l.6.68zm-6.42 3.04l3.141-4.003c.603-.768 1.838-.39 1.9.575l.336 5.113a1.073 1.073 0 0 1-.96 1.148 9.808 9.808 0 0 1-4.12-.606c-.86-.327-.955-1.51-.148-1.98l-.149.753zm-3.85-5.886c.432-.883 1.613-.883 2.04 0l2.119 4.336c.407.83-.328 1.73-1.228 1.49l-4.863-1.356a1.073 1.073 0 0 1-.728-1.367 9.786 9.786 0 0 1 2.66-3.103zm-.87-1.407a1.073 1.073 0 0 1-.082-1.398 9.804 9.804 0 0 1 3.09-2.677c.823-.461 1.73.2 1.669 1.14l-.338 5.113c-.065.984-1.31 1.355-1.894.562L4.252 11.51z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Areas We Cover</h3>
            <ul className="space-y-2.5">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-amber-400 text-sm font-semibold mb-1">Ready to book?</p>
              <p className="text-slate-400 text-xs mb-3">Get a free, no-obligation quote today.</p>
              <Link
                href="/quote"
                className="block text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm py-2 rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Autocare. All rights reserved. Mobile Car Valeting Stockport.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
