import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Membership — ConcreteCalc",
  description: "Access all ConcreteCalc pro tools, templates, and guides with your monthly membership.",
};

export default function Members() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
          Pro Member
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          Welcome to ConcreteCalc Pro
        </h1>
        <p className="text-slate-500 text-lg">
          You have access to everything. Here&apos;s what&apos;s included with your membership.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link href="/tools/bid-calculator-pro" className="bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-400 hover:shadow-md transition group">
          <div className="text-2xl mb-3">🧮</div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition">Pro Bid Calculator</h3>
          <p className="text-sm text-slate-500 mt-2">Generate professional, branded bids in minutes. Export to PDF. Customize labor rates, material markup, and profit margins.</p>
          <p className="text-amber-600 text-sm font-medium mt-3">Open Calculator →</p>
        </Link>

        <Link href="/tools/estimate-templates" className="bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-400 hover:shadow-md transition group">
          <div className="text-2xl mb-3">📄</div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition">5 Estimate Templates</h3>
          <p className="text-sm text-slate-500 mt-2">Professional estimate templates for driveways, slabs, patios, foundations, and stamped concrete. Print as PDF.</p>
          <p className="text-amber-600 text-sm font-medium mt-3">View Templates →</p>
        </Link>

        <Link href="/starter-kit" className="bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-400 hover:shadow-md transition group">
          <div className="text-2xl mb-3">📚</div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition">Business Starter Kit</h3>
          <p className="text-sm text-slate-500 mt-2">Complete 6-chapter guide to starting and growing a concrete business. Licensing, pricing, marketing, hiring — everything.</p>
          <p className="text-amber-600 text-sm font-medium mt-3">Read Guide →</p>
        </Link>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="text-2xl mb-3">📊</div>
          <h3 className="font-bold text-slate-900 text-lg">Monthly Pricing Updates</h3>
          <p className="text-sm text-slate-500 mt-2">Regional concrete pricing data updated monthly so your bids stay competitive and profitable.</p>
          <p className="text-slate-400 text-sm font-medium mt-3">Coming soon</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">🔧 All Free Calculators</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/calculators/slab" className="text-amber-600 hover:underline">Slab Calculator</Link></li>
            <li><Link href="/calculators/driveway" className="text-amber-600 hover:underline">Driveway Calculator</Link></li>
            <li><Link href="/calculators/patio" className="text-amber-600 hover:underline">Patio Calculator</Link></li>
            <li><Link href="/calculators/footing" className="text-amber-600 hover:underline">Footing Calculator</Link></li>
            <li><Link href="/calculators/stamped" className="text-amber-600 hover:underline">Stamped Concrete Calculator</Link></li>
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">💬 Priority Support</h3>
          <p className="text-sm text-slate-500 mb-3">As a Pro member, you get priority responses to any questions about your tools or concrete business.</p>
          <a href="mailto:support@concretecalc.co" className="text-amber-600 text-sm font-medium hover:underline">
            support@concretecalc.co →
          </a>
        </div>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-center text-sm text-slate-500">
        <p>Your membership renews monthly. Need help? Email <a href="mailto:support@concretecalc.co" className="text-amber-600 underline">support@concretecalc.co</a></p>
      </div>
    </div>
  );
}
