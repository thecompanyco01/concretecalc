import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Bid Calculator Pro | ConcreteCalc",
  robots: "noindex",
};

export default function ThankYouBidCalculator() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">✅</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        Your Pro Bid Calculator is ready to use. Start generating professional bids right now.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">🧮 Your Pro Bid Calculator</h2>
        <p className="text-slate-600 text-sm mb-4">
          Your bid calculator includes company branding, customizable rates, material markup, 
          profit margin controls, and PDF export. Bookmark the link below — it&apos;s yours forever.
        </p>
        <Link
          href="/tools/bid-calculator-pro"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm"
        >
          Open Your Bid Calculator →
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Quick Start Guide</h2>
        <ol className="space-y-3 text-sm text-slate-600">
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span> Enter your company info (name, phone, email, license #)</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span> Enter client details and project dimensions</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span> Adjust your labor rates, material markup, and profit margin</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</span> Click &quot;Export as PDF&quot; to print or save your professional bid</li>
        </ol>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help?</p>
        <p>Email us at <a href="mailto:support@concretecalc.co" className="text-amber-600 underline">support@concretecalc.co</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
