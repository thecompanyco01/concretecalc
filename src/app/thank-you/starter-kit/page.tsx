import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Business Starter Kit | ConcreteCalc",
  robots: "noindex",
};

export default function ThankYouStarterKit() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">🎉</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Welcome to the Business Starter Kit!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        You just made the best investment in your concrete business. Here&apos;s everything that&apos;s included.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📚 Complete Business Guide</h2>
        <p className="text-slate-600 text-sm mb-4">
          6 comprehensive chapters covering everything from startup to scaling. Read it cover to cover or jump to the chapter you need most.
        </p>
        <div className="space-y-2 mb-6 text-sm text-slate-600">
          <p>🏗️ Chapter 1: How to Start a Concrete Business</p>
          <p>📋 Chapter 2: Getting Licensed &amp; Insured</p>
          <p>💰 Chapter 3: Pricing &amp; Estimating Guide</p>
          <p>📣 Chapter 4: Marketing Your Concrete Business</p>
          <p>👷 Chapter 5: Managing Crews &amp; Projects</p>
          <p>📈 Chapter 6: Growing from Solo to a Team</p>
        </div>
        <Link
          href="/starter-kit"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm"
        >
          Read Your Business Guide →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link href="/tools/bid-calculator-pro" className="bg-white rounded-xl border border-slate-200 p-6 text-left hover:border-amber-400 transition">
          <h3 className="font-bold text-slate-900 text-sm">🧮 Pro Bid Calculator</h3>
          <p className="text-xs text-slate-500 mt-1">Generate branded bids with custom margins</p>
        </Link>
        <Link href="/tools/estimate-templates" className="bg-white rounded-xl border border-slate-200 p-6 text-left hover:border-amber-400 transition">
          <h3 className="font-bold text-slate-900 text-sm">📄 5 Estimate Templates</h3>
          <p className="text-xs text-slate-500 mt-1">Print-ready estimates for every project type</p>
        </Link>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left text-sm">
        <h3 className="font-bold text-green-900 mb-2">💡 Recommended First Steps</h3>
        <ol className="space-y-2 text-green-800">
          <li><strong>1.</strong> Read Chapter 1 of the Business Guide</li>
          <li><strong>2.</strong> Set up your company info in the Bid Calculator</li>
          <li><strong>3.</strong> Print out the Driveway Estimate template for your first bid</li>
          <li><strong>4.</strong> Follow the marketing playbook in Chapter 4 to get your first leads</li>
        </ol>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help getting started?</p>
        <p>Email us at <a href="mailto:support@concretecalc.co" className="text-amber-600 underline">support@concretecalc.co</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
