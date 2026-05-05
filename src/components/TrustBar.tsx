import { Shield, Award, Clock, MapPin, ThumbsUp, Star } from "lucide-react";

const trustPoints = [
  { icon: Star, label: "5.0 Google Rating", sub: "127 verified reviews" },
  { icon: Shield, label: "Fully Insured", sub: "Public liability covered" },
  { icon: Award, label: "Professional Grade", sub: "Studio-quality equipment" },
  { icon: Clock, label: "Same-Day Available", sub: "Mon–Sat 8am–6pm" },
  { icon: MapPin, label: "We Come To You", sub: "All SK & M postcodes" },
  { icon: ThumbsUp, label: "100% Satisfaction", sub: "Guaranteed results" },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-2">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-sm font-semibold text-white">{label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
