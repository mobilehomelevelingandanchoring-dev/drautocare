import { Phone, CalendarCheck, Car, Star } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Get a Quote",
    description:
      "Call, WhatsApp, or use our online form. Tell us your vehicle type, service required, and location. We'll give you a transparent, fixed quote — no surprises.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book Your Slot",
    description:
      "Choose a date and time that suits you — we are available 24/7, any day of the week. Same-day and next-day appointments are often available across Stockport and Manchester.",
  },
  {
    icon: Car,
    step: "03",
    title: "We Come To You",
    description:
      "Our team arrives fully equipped — water, power, professional products. We work on your driveway, at your workplace, or any suitable location. You don't need to provide anything.",
  },
  {
    icon: Star,
    step: "04",
    title: "Enjoy the Results",
    description:
      "Inspect the results with your technician. We don't leave until you're completely satisfied. Your vehicle will be transformed — ready to enjoy or return to the road.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple. Professional. Convenient.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Booking mobile car valeting with Dr. Autocare is straightforward. Here is what to expect from enquiry to spotless result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <div key={step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-gradient-to-r from-amber-500/40 to-amber-500/10 w-full" />
              )}

              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full text-slate-950 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
