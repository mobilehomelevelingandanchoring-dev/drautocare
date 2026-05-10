import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dr. Autocare — Mobile Car Valeting Stockport",
  description:
    "Dr. Autocare's Terms & Conditions. Booking, pricing, cancellation, liability, and satisfaction guarantee terms for our mobile car valeting and detailing service.",
  alternates: { canonical: `${BUSINESS.url}/terms` },
  robots: { index: true, follow: true },
};

const lastUpdated = "9 May 2026";

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-10 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Terms & Conditions</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-14 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 text-slate-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. About These Terms</h2>
            <p>
              These Terms and Conditions govern the provision of mobile car valeting, detailing, and related services by Dr. Autocare ("we", "us", "our") to customers ("you", "the client"). By requesting a quote or confirming a booking, you agree to these terms.
            </p>
            <address className="not-italic mt-4 bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-300">
              <strong className="text-white block mb-1">Dr. Autocare</strong>
              Gail Avenue, Stockport, SK4 2PY, Greater Manchester<br />
              Email: <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a><br />
              Tel: <a href={`tel:${BUSINESS.telephone}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.telephone}</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Booking and Confirmation</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>A booking is confirmed when we provide written or verbal confirmation of your appointment date, time, and agreed price.</li>
              <li>Quotes provided via phone, WhatsApp, email, or our online form are valid for 14 days and are based on the information provided by the client.</li>
              <li>Final pricing is confirmed at the time of booking. If the vehicle's condition differs significantly from what was described, we reserve the right to revise the quote before commencing work.</li>
              <li>We require accurate information about the vehicle type, condition, and location to provide an accurate quote. Inaccurate information may result in a revised price.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>All prices quoted are fixed and all-inclusive unless otherwise stated. There are no hidden charges.</li>
              <li>Payment is due upon completion of the service unless an alternative arrangement has been agreed in writing.</li>
              <li>We accept payment by bank transfer, cash, or other methods agreed at the time of booking.</li>
              <li>For detailing packages exceeding £200, we may request a deposit of up to 25% to secure the booking slot.</li>
              <li>Deposits are non-refundable if the client cancels with fewer than 24 hours&apos; notice (see Cancellation Policy).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Cancellation and Rescheduling</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Client cancellation with 24+ hours&apos; notice:</strong> free of charge. Any deposit paid will be transferred to a rescheduled appointment.</li>
              <li><strong className="text-white">Client cancellation with fewer than 24 hours&apos; notice:</strong> a cancellation fee of up to 25% of the agreed service price may apply. Deposits are forfeited.</li>
              <li><strong className="text-white">No-show:</strong> if we attend the agreed location and the vehicle is not accessible, a call-out fee of £30 applies.</li>
              <li><strong className="text-white">Our cancellations:</strong> we reserve the right to cancel or reschedule appointments due to adverse weather conditions, equipment failure, or other unforeseen circumstances. In such cases, no charge will be made and we will offer the earliest available alternative appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Our Obligations</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>We will arrive at the agreed location at the confirmed time (within a 30-minute window).</li>
              <li>We will carry out the agreed service to a professional standard using appropriate equipment and products.</li>
              <li>We will handle your vehicle and property with care throughout the service.</li>
              <li>We will notify you promptly if we identify any pre-existing damage before commencing work.</li>
              <li>We are fully insured with public liability insurance. Details are available upon request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Client Obligations</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>The vehicle must be accessible and in a location where we can work safely (e.g. driveway, car park, or suitable roadside location).</li>
              <li>Personal belongings, valuables, and items that may obstruct the cleaning process should be removed from the vehicle prior to our arrival.</li>
              <li>You must inform us of any known damage, fragile components, or special requirements before we begin work.</li>
              <li>You must ensure that our team can work safely and without obstruction at the agreed location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Liability</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Dr. Autocare is fully insured with public liability insurance covering damage caused by our negligence during the provision of services.</li>
              <li>We are not responsible for pre-existing damage to the vehicle or its components.</li>
              <li>We will document and report any pre-existing damage observed before commencing work.</li>
              <li>We are not liable for loss or damage to personal items left in the vehicle.</li>
              <li>Our liability for any claim is limited to the value of the service provided.</li>
              <li>We are not liable for any indirect or consequential losses arising from the provision of our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Satisfaction Guarantee</h2>
            <p className="mb-3">
              We stand behind the quality of our work. If you are not completely satisfied with the result, please raise your concern with your technician before they leave. We will address the issue on the spot where reasonably possible.
            </p>
            <p className="mb-3">
              If a concern cannot be resolved during the appointment, please contact us within <strong className="text-white">48 hours</strong> of service completion. We will arrange a complimentary re-visit to address any legitimate shortfall in the work carried out.
            </p>
            <p>
              Our satisfaction guarantee does not cover pre-existing damage, permanent stains or defects clearly communicated as unresolvable prior to work commencing, or issues resulting from client-caused damage after service completion. See our full <Link href="/guarantee" className="text-amber-400 hover:text-amber-300 transition-colors">Guarantee Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Paint Correction and Detailing — Additional Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Paint correction results depend on the thickness of the vehicle&apos;s clear coat and the depth of defects present. Results are not guaranteed to achieve 100% defect removal.</li>
              <li>We measure paint thickness before commencing any polishing and will communicate safe correction levels in advance.</li>
              <li>Ceramic coating longevity is dependent on proper aftercare. We provide aftercare instructions at the time of application.</li>
              <li>Stain removal results depend on the nature, age, and depth of the stain. We will advise on expected results before commencing interior cleaning.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Intellectual Property</h2>
            <p>All content on the Dr. Autocare website — including text, images, logos, and design — is the property of Dr. Autocare and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. The current version is always published at <Link href="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">drautocare.co.uk/terms</Link>. Continued use of our services following any update constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">13. Contact</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a>
              <a href={`tel:${BUSINESS.telephone}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.telephone}</a>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
            <Link href="/guarantee" className="hover:text-amber-400 transition-colors">Our Guarantee</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </article>
    </>
  );
}
