import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Membership — EstimateConcrete",
  description: "Get unlimited access to all EstimateConcrete pro tools, templates, guides, and monthly pricing data. $29/mo, cancel anytime.",
};

export default function Members() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
          Pro Membership
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          EstimateConcrete Pro
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Everything you need to run a profitable concrete business — all templates, tools, guides, and monthly pricing data in one membership.
        </p>
      </div>

      {/* What's Included */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">What&apos;s Included</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Pro Bid Calculator (Excel)</p>
                <p className="text-xs text-slate-500">Auto-calculated bids with company branding, rate reference, and print-ready layout</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">5 Estimate Templates (Excel)</p>
                <p className="text-xs text-slate-500">Driveway, slab, patio, foundation, stamped — with formulas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Business Starter Kit</p>
                <p className="text-xs text-slate-500">6-chapter guide to starting and growing a concrete business</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Client Contract Template</p>
                <p className="text-xs text-slate-500">Professional contract with scope, terms, and payment schedule</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">SOP — Concrete Pour Checklist</p>
                <p className="text-xs text-slate-500">Step-by-step checklist from pre-pour to cleanup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Pricing Matrix by Region</p>
                <p className="text-xs text-slate-500">Customizable pricing reference by project type and complexity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Equipment Buying Guide</p>
                <p className="text-xs text-slate-500">What to buy, when, and budget ranges</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-500 text-lg flex-shrink-0">✓</span>
              <div>
                <p className="font-medium text-slate-900">Monthly Pricing Updates</p>
                <p className="text-xs text-slate-500">Regional concrete pricing data delivered to your inbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl p-8 mb-8 text-center">
        <div className="text-4xl font-extrabold mb-2">$29<span className="text-lg font-normal text-blue-200">/mo</span></div>
        <p className="text-blue-200 mb-6 max-w-md mx-auto">
          Cancel anytime. All templates are yours to keep even if you cancel. 30-day money-back guarantee.
        </p>
        <a
          href="https://buy.stripe.com/00w4gA2N9b815HZbTZaMU02"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-900 font-bold py-3 px-10 rounded-lg hover:bg-blue-50 transition text-lg"
        >
          Subscribe Now →
        </a>
      </div>

      {/* Comparison */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
        <h2 className="text-lg font-bold text-slate-900 mb-4 text-center">Why Pro vs. Buying Individually?</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-bold text-slate-900">Bid Calculator</p>
            <p className="text-slate-500">$29 individually</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-bold text-slate-900">5 Estimate Templates</p>
            <p className="text-slate-500">$49 individually</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="font-bold text-slate-900">Business Starter Kit</p>
            <p className="text-slate-500">$297 individually</p>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-slate-600">
          <strong>Total value: $375</strong> — Pro members get everything for <strong>$29/mo</strong> plus monthly pricing updates.
        </p>
      </div>

      {/* Free Tools */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
        <h2 className="text-lg font-bold text-slate-900 mb-4">🔧 Free Calculators (Always Free)</h2>
        <div className="grid md:grid-cols-2 gap-2">
          <Link href="/calculators/slab" className="text-amber-600 hover:underline text-sm">→ Slab Calculator</Link>
          <Link href="/calculators/driveway" className="text-amber-600 hover:underline text-sm">→ Driveway Calculator</Link>
          <Link href="/calculators/patio" className="text-amber-600 hover:underline text-sm">→ Patio Calculator</Link>
          <Link href="/calculators/footing" className="text-amber-600 hover:underline text-sm">→ Footing Calculator</Link>
          <Link href="/calculators/stamped" className="text-amber-600 hover:underline text-sm">→ Stamped Concrete Calculator</Link>
          <Link href="/calculators/rebar" className="text-amber-600 hover:underline text-sm">→ Rebar Calculator</Link>
        </div>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500 text-center">
        <p>Questions? Email <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we respond within a few hours.</p>
      </div>
    </div>
  );
}
