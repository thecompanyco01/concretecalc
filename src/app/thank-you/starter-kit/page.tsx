import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Business Starter Kit | EstimateConcrete",
  robots: "noindex",
};

const estimateDownloads = [
  { name: "Driveway Estimate", file: "estimate-driveway-c7e4a1.xlsx" },
  { name: "Slab Estimate", file: "estimate-slab-d9b2e5.xlsx" },
  { name: "Patio Estimate", file: "estimate-patio-f3a6c8.xlsx" },
  { name: "Foundation Estimate", file: "estimate-foundation-b5d1e7.xlsx" },
  { name: "Stamped Concrete", file: "estimate-stamped-e2c9f4.xlsx" },
];

const bonusDownloads = [
  { name: "Pro Bid Calculator", file: "bid-calculator-pro-a8f3b2.xlsx", icon: "🧮" },
  { name: "Client Contract Template", file: "contract-template-a4d7b3.xlsx", icon: "📝" },
  { name: "SOP — Concrete Pour Checklist", file: "sop-concrete-pour-b8e3d6.xlsx", icon: "✅" },
  { name: "Pricing Matrix by Region", file: "pricing-matrix-c6f2a9.xlsx", icon: "💰" },
  { name: "Equipment Buying Guide", file: "equipment-checklist-d7a4e2.xlsx", icon: "🔧" },
  { name: "90-Day Marketing Plan", file: "marketing-plan-e9b5c3.xlsx", icon: "📣" },
];

export default function ThankYouStarterKit() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">🎉</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Welcome to the Business Starter Kit!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        You just made the best investment in your concrete business. Here&apos;s everything that&apos;s included — download it all below.
      </p>

      {/* Business Guide */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📚 Complete Business Guide</h2>
        <p className="text-slate-600 text-sm mb-4">
          6 comprehensive chapters covering everything from startup to scaling. Read it online:
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

      {/* Estimate Templates */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📄 5 Estimate Templates (Excel)</h2>
        <div className="space-y-2 mb-2">
          {estimateDownloads.map(t => (
            <div key={t.name} className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
              <span className="text-sm text-slate-700">{t.name}</span>
              <a href={`/downloads/${t.file}`} download className="text-amber-600 text-xs font-bold hover:underline">⬇️ Download</a>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus Tools */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-6 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">🎁 Bonus Tools & Templates (Excel)</h2>
        <div className="space-y-2 mb-2">
          {bonusDownloads.map(t => (
            <div key={t.name} className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
              <span className="text-sm text-slate-700">{t.icon} {t.name}</span>
              <a href={`/downloads/${t.file}`} download className="text-amber-600 text-xs font-bold hover:underline">⬇️ Download</a>
            </div>
          ))}
        </div>
      </div>

      {/* First Steps */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left text-sm">
        <h3 className="font-bold text-green-900 mb-2">💡 Recommended First Steps</h3>
        <ol className="space-y-2 text-green-800">
          <li><strong>1.</strong> Read Chapter 1 of the Business Guide</li>
          <li><strong>2.</strong> Download the Bid Calculator and enter your company info</li>
          <li><strong>3.</strong> Use the Driveway Estimate template for your first bid</li>
          <li><strong>4.</strong> Follow the 90-Day Marketing Plan to get your first leads</li>
        </ol>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help getting started?</p>
        <p>Email us at <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
