import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Autocare — Mobile Car Valeting Stockport",
  description:
    "Dr. Autocare's Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.",
  alternates: { canonical: `${BUSINESS.url}/privacy` },
  robots: { index: true, follow: true },
};

const lastUpdated = "9 May 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-10 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Privacy Policy</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-14 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 text-slate-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Who We Are</h2>
            <p>
              Dr. Autocare is a professional mobile car valeting and detailing business operating across Stockport and Greater Manchester.
            </p>
            <address className="not-italic mt-3 bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-300">
              <strong className="text-white block mb-1">Data Controller</strong>
              Dr. Autocare<br />
              Gail Avenue, Stockport<br />
              SK4 2PY, Greater Manchester<br />
              Email: <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a><br />
              Tel: <a href={`tel:${BUSINESS.telephone}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.telephone}</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-3">When you contact us, request a quote, or book a service, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Identity data:</strong> your name</li>
              <li><strong className="text-white">Contact data:</strong> phone number, email address, postcode</li>
              <li><strong className="text-white">Vehicle data:</strong> vehicle type, make, model, and condition notes relevant to your service</li>
              <li><strong className="text-white">Communications data:</strong> messages sent via WhatsApp, email, or our quote form</li>
              <li><strong className="text-white">Transaction data:</strong> details of services provided and payments received</li>
            </ul>
            <p className="mt-3">We do not collect sensitive personal data (e.g. health information or financial account details beyond payment confirmation).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use your personal data only for legitimate business purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide you with a quote and carry out the requested service</li>
              <li>To confirm bookings and communicate appointment details</li>
              <li>To respond to your enquiries and provide customer support</li>
              <li>To issue invoices and process payments</li>
              <li>To contact you if there is a problem with your booking or service</li>
            </ul>
            <p className="mt-3">We will only contact you for marketing purposes (e.g. service reminders) if you have explicitly opted in. You may withdraw consent at any time by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Legal Basis for Processing (UK GDPR)</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Contract performance:</strong> processing necessary to provide the service you have requested or booked</li>
              <li><strong className="text-white">Legitimate interests:</strong> responding to enquiries, maintaining business records, improving our service</li>
              <li><strong className="text-white">Legal obligation:</strong> retaining financial records as required by HMRC</li>
              <li><strong className="text-white">Consent:</strong> where you have opted into marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="mb-3">We retain personal data only for as long as necessary:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Customer service records:</strong> 2 years from the date of your last service or enquiry</li>
              <li><strong className="text-white">Financial and transaction records:</strong> 7 years as required by HMRC</li>
              <li><strong className="text-white">Marketing consent records:</strong> until consent is withdrawn</li>
            </ul>
            <p className="mt-3">After these periods, data is securely deleted or anonymised.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Sharing Your Information</h2>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Payment processing providers (solely to process your payment)</li>
              <li>IT service providers who support our business systems (under strict data processing agreements)</li>
              <li>Law enforcement or regulatory bodies where required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Your Rights Under UK GDPR</h2>
            <p className="mb-3">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Right of access:</strong> request a copy of the data we hold about you</li>
              <li><strong className="text-white">Right to rectification:</strong> ask us to correct inaccurate data</li>
              <li><strong className="text-white">Right to erasure:</strong> request deletion of your data (subject to legal obligations)</li>
              <li><strong className="text-white">Right to data portability:</strong> receive your data in a structured, machine-readable format</li>
              <li><strong className="text-white">Right to object:</strong> object to processing based on legitimate interests</li>
              <li><strong className="text-white">Right to restrict processing:</strong> request that we limit how we use your data</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a>. We will respond within one month.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Cookies</h2>
            <p>Our website may use cookies to improve your experience. Please see our <Link href="/cookie-policy" className="text-amber-400 hover:text-amber-300 transition-colors">Cookie Policy</Link> for full details.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Security</h2>
            <p>We take appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, or destruction. Data shared via WhatsApp or email is subject to the security measures of those platforms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Right to Complain</h2>
            <p>If you are unhappy with how we have handled your personal data, you have the right to complain to the <strong className="text-white">Information Commissioner's Office (ICO)</strong>:</p>
            <div className="mt-3 bg-slate-900 border border-slate-800 rounded-xl p-5">
              <p>ICO helpline: 0303 123 1113</p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">ico.org.uk</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The current version is always available at <Link href="/privacy" className="text-amber-400 hover:text-amber-300 transition-colors">drautocare.co.uk/privacy</Link>. The date at the top of this page reflects the most recent update.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12. Contact Us</h2>
            <p>For any questions about this Privacy Policy or your personal data, contact us:</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a>
              <a href={`tel:${BUSINESS.telephone}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.telephone}</a>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </article>
    </>
  );
}
