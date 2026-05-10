import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cookie Policy | Dr. Autocare — Mobile Car Valeting Stockport",
  description:
    "Dr. Autocare's Cookie Policy. Information about the cookies used on drautocare.co.uk and how to manage your preferences.",
  alternates: { canonical: `${BUSINESS.url}/cookie-policy` },
  robots: { index: true, follow: true },
};

const lastUpdated = "9 May 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <section className="pt-28 pb-10 bg-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Cookie Policy</span>
          </nav>
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <article className="py-14 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10 text-slate-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the website to remember information about your visit — such as your preferences — to make subsequent visits easier and the site more useful to you.
            </p>
            <p className="mt-3">
              Cookies cannot harm your device and do not contain personal information such as your name or payment details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p>
              The Dr. Autocare website (<strong className="text-white">drautocare.co.uk</strong>) is a static, pre-rendered site. We aim to minimise cookie usage. The cookies we use fall into the following categories:
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

            <div className="space-y-5">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">Strictly Necessary Cookies</h3>
                <p className="text-xs text-amber-400 mb-3">Always active — cannot be disabled</p>
                <p>These cookies are essential for the website to function correctly. They do not collect any information that could be used for marketing. No consent is required for these cookies under UK GDPR.</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Cookie</th>
                        <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Purpose</th>
                        <th className="text-left py-2 text-slate-300 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 pr-4 text-slate-300 font-mono">__next</td>
                        <td className="py-2 pr-4">Next.js session management</td>
                        <td className="py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">Analytics Cookies</h3>
                <p className="text-xs text-slate-500 mb-3">Require consent</p>
                <p>We may use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience. Analytics cookies collect anonymous, aggregated data — they cannot identify you personally.</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Cookie</th>
                        <th className="text-left py-2 pr-4 text-slate-300 font-semibold">Provider</th>
                        <th className="text-left py-2 text-slate-300 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 pr-4 text-slate-300 font-mono">_ga</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 pr-4 text-slate-300 font-mono">_ga_*</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
            <p>
              When you click links to third-party platforms from our website — such as Google Maps, WhatsApp, Facebook, Instagram, Yelp, or Yell — those platforms may set their own cookies on your device. We have no control over these cookies. Please refer to the privacy policies of the respective platforms for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. How to Manage Cookies</h2>
            <p className="mb-3">You can control and manage cookies in several ways:</p>

            <h3 className="font-semibold text-white mb-2">Browser Settings</h3>
            <p className="mb-3">Most browsers allow you to refuse cookies or delete existing cookies via their settings menu. Disabling cookies may affect the functionality of some websites.</p>

            <ul className="list-disc list-inside space-y-1 ml-2 mb-5">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Chrome cookie settings</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Firefox cookie settings</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Safari cookie settings</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Edge cookie settings</a></li>
            </ul>

            <h3 className="font-semibold text-white mb-2">Opt Out of Google Analytics</h3>
            <p>You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. More Information</h2>
            <p>
              For more information about cookies and your rights, visit the <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">ICO website on cookies</a>.
            </p>
            <p className="mt-3">
              For questions about this Cookie Policy, contact us at <a href={`mailto:${BUSINESS.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">{BUSINESS.email}</a>.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </article>
    </>
  );
}
