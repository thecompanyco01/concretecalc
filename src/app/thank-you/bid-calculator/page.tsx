import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Bid Calculator Pro | EstimateConcrete",
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
        Your Pro Bid Calculator Excel spreadsheet is ready to download.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">🧮 Download Your Pro Bid Calculator</h2>
        <p className="text-slate-600 text-sm mb-4">
          Your bid calculator includes 3 sheets: the main Bid Calculator with auto-calculated formulas, 
          a Company Setup sheet for your branding, and a Rate Reference sheet with regional pricing data.
        </p>
        <a
          href="/downloads/bid-calculator-pro-a8f3b2.xlsx"
          download
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm mb-4"
        >
          ⬇️ Download Excel File (.xlsx)
        </a>
        <p className="text-xs text-slate-400">
          Bookmark this page — you can re-download anytime.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Quick Start Guide</h2>
        <ol className="space-y-3 text-sm text-slate-600">
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span> Open the Excel file and go to the &quot;Company Setup&quot; sheet — enter your company info</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span> Switch to the &quot;Bid Calculator&quot; sheet and enter project dimensions</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span> Adjust your labor rates, material markup, and profit margin (yellow cells are editable)</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</span> Print or save as PDF to give your client a professional bid</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">🌐 Online Calculator</h2>
        <p className="text-slate-600 text-sm mb-3">
          You also have access to our interactive online bid calculator:
        </p>
        <Link
          href="/tools/bid-calculator-pro"
          className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-6 rounded-lg transition text-sm"
        >
          Open Online Calculator →
        </Link>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help?</p>
        <p>Email us at <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
