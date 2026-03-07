import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Pro Membership | ConcreteCalc",
  robots: "noindex",
};

export default function ThankYouProMembership() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">🏆</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Welcome to ConcreteCalc Pro!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        You now have unlimited access to all ConcreteCalc professional tools. Your membership is active.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">What&apos;s Included</h2>
        <div className="space-y-4">
          <Link href="/tools/bid-calculator-pro" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">Pro Bid Calculator</p>
              <p className="text-xs text-slate-500">Company branding, custom rates, PDF export</p>
            </div>
          </Link>
          <Link href="/tools/estimate-templates" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">5 Estimate Templates</p>
              <p className="text-xs text-slate-500">Driveway, slab, patio, foundation, stamped</p>
            </div>
          </Link>
          <Link href="/starter-kit" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">Business Starter Kit</p>
              <p className="text-xs text-slate-500">Complete 6-chapter guide to starting a concrete business</p>
            </div>
          </Link>
          <div className="flex items-start gap-3">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900">Monthly Pricing Updates</p>
              <p className="text-xs text-slate-500">Regional concrete pricing data — coming soon</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900">Priority Support</p>
              <p className="text-xs text-slate-500">Direct email support for all your questions</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/members"
        className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm mb-8"
      >
        Go to Your Member Dashboard →
      </Link>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Questions about your membership?</p>
        <p>Email us at <a href="mailto:support@concretecalc.co" className="text-amber-600 underline">support@concretecalc.co</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
