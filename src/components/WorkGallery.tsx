import Image from "next/image";
import Link from "next/link";

const GALLERY = [
  {
    src: "/foam-cannon-exterior-car-wash-mobile-valeting-stockport.webp",
    alt: "Dr. Autocare exterior mobile valet — car fully covered in professional foam cannon wash, Stockport",
  },
  {
    src: "/seat-leon-mobile-car-valeting-manchester.webp",
    alt: "Blue SEAT Leon gleaming after Dr. Autocare mobile car valeting in Manchester",
  },
  {
    src: "/range-rover-interior-deep-clean-stockport.webp",
    alt: "Range Rover interior deep clean by Dr. Autocare — spotless leather seats and dashboard, Stockport",
  },
  {
    src: "/mini-countryman-mobile-valet-stockport.webp",
    alt: "Dr. Autocare mobile valeting a Mini Countryman in Stockport — branded van visible in background",
  },
  {
    src: "/mazda-rx8-mobile-car-detailing-greater-manchester.webp",
    alt: "Blue Mazda RX-8 mobile car detailing by Dr. Autocare, Greater Manchester",
  },
  {
    src: "/ford-focus-st-mobile-valet-stockport.webp",
    alt: "Black Ford Focus ST polished to a mirror finish by Dr. Autocare mobile valeting, Stockport",
  },
  {
    src: "/nissan-juke-nismo-mobile-car-detailing-stockport.webp",
    alt: "White Nissan Juke Nismo with custom red wheels — detailed by Dr. Autocare, Stockport",
  },
  {
    src: "/nissan-juke-mobile-car-valet-stockport.webp",
    alt: "Black Nissan Juke with deep gloss finish after Dr. Autocare mobile car valet, Stockport",
  },
  {
    src: "/fleet-mobile-car-valeting-greater-manchester.webp",
    alt: "Dr. Autocare fleet mobile car valeting — multiple vehicles washed simultaneously, Greater Manchester",
  },
];

export default function WorkGallery() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Results, Real Vehicles
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every job — from a quick mini valet to a full paint correction — is treated with the same level of care and attention to detail.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map(({ src, alt }) => (
            <div
              key={src}
              className="group relative h-64 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-colors"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-105"
          >
            Book Your Valet
          </Link>
        </div>
      </div>
    </section>
  );
}
