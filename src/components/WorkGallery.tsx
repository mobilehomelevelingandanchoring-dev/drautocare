import Image from "next/image";
import Link from "next/link";

const GALLERY = [
  {
    src: "/317b6718-9a8f-40ad-bf2b-e803dbfc9de6_image_jpeg.webp",
    alt: "Dr. Autocare exterior mobile valet — car fully covered in professional foam cannon wash",
  },
  {
    src: "/7451ca6c-71fb-49d5-a631-7537d67c0acf_image_jpeg.webp",
    alt: "Blue SEAT Leon after Dr. Autocare mobile car valeting in Stockport — gleaming paintwork",
  },
  {
    src: "/dcf3e60f-e5a1-4110-b6b3-ba74b36679ba_image_jpeg.webp",
    alt: "Range Rover interior deep clean by Dr. Autocare — spotless leather seats and dashboard",
  },
  {
    src: "/87eec900-cff2-412a-8575-c06778041bb7_image_jpeg.webp",
    alt: "Dr. Autocare mobile valeting a Mini Countryman — branded van visible in background",
  },
  {
    src: "/b932bf82-b4b9-4609-aa93-1302194b9835_image_jpeg.webp",
    alt: "Blue Mazda RX-8 detailed by Dr. Autocare — Dr. Autocare van alongside",
  },
  {
    src: "/1909aa21-dcdd-4719-a7c3-3fd88439164b_image_jpeg.webp",
    alt: "Black Ford Focus ST — polished to a mirror finish by Dr. Autocare in Greater Manchester",
  },
  {
    src: "/6982a872-e4f5-412e-b475-12639eae61d1_image_jpeg.webp",
    alt: "White Nissan Juke Nismo with custom red wheels — cleaned and detailed by Dr. Autocare",
  },
  {
    src: "/e4ef2174-9fe4-47bc-93bb-aeb27375cd63_image_jpeg.webp",
    alt: "Black Nissan Juke — deep gloss finish after Dr. Autocare mobile car valeting",
  },
  {
    src: "/d7f0374c-89f1-4770-b517-84b5573548eb_image_jpeg.webp",
    alt: "Dr. Autocare fleet valeting — multiple vehicles being washed simultaneously in Greater Manchester",
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
