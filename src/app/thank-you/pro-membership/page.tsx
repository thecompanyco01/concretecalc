import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Pro Membership | EstimateConcrete",
  robots: "noindex",
};

const allDownloads = [
  { name: "Pro Bid Calculator", file: "bid-calculator-pro-a8f3b2.xlsx", icon: "🧮" },
  { name: "Driveway Estimate Template", file: "estimate-driveway-c7e4a1.xlsx", icon: "📄" },
  { name: "Slab Estimate Template", file: "estimate-slab-d9b2e5.xlsx", icon: "📄" },
  { name: "Patio Estimate Template", file: "estimate-patio-f3a6c8.xlsx", icon: "📄" },
  { name: "Foundation Estimate Template", file: "estimate-foundation-b5d1e7.xlsx", icon: "📄" },
  { name: "Stamped Concrete Estimate", file: "estimate-stamped-e2c9f4.xlsx", icon: "📄" },
  { name: "Client Contract Template", file: "contract-template-a4d7b3.xlsx", icon: "📝" },
  { name: "SOP — Concrete Pour Checklist", file: "sop-concrete-pour-b8e3d6.xlsx", icon: "✅" },
  { name: "Pricing Matrix by Region", file: "pricing-matrix-c6f2a9.xlsx", icon: "💰" },
  { name: "Equipment Buying Guide", file: "equipment-checklist-d7a4e2.xlsx", icon: "🔧" },
  { name: "90-Day Marketing Plan", file: "marketing-plan-e9b5c3.xlsx", icon: "📣" },
];

export default function ThankYouProMembership() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">🏆</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Welcome to EstimateConcrete Pro!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        You now have access to every tool, template, and resource we offer — plus monthly pricing data updates.
      </p>

      {/* Downloads */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">⬇️ Download All Templates</h2>
        <p className="text-slate-600 text-sm mb-4">
          As a Pro member, you have access to every Excel template. Download them all:
        </p>
        <div className="space-y-2 mb-4">
          {allDownloads.map(t => (
            <div key={t.name} className="flex items-center justify-between bg-slate-50 rounded-lg p-2.5">
              <span className="text-sm text-slate-700">{t.icon} {t.name}</span>
              <a href={`/downloads/${t.file}`} download className="text-amber-600 text-xs font-bold hover:underline">⬇️ Download</a>
            </div>
          ))}
        </div>
      </div>

      {/* Online Tools */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">🌐 Online Tools</h2>
        <div className="space-y-3">
          <Link href="/tools/bid-calculator-pro" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">Interactive Bid Calculator</p>
              <p className="text-xs text-slate-500">Generate bids online and print as PDF</p>
            </div>
          </Link>
          <Link href="/tools/estimate-templates" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">Online Estimate Templates</p>
              <p className="text-xs text-slate-500">Preview and print estimates from your browser</p>
            </div>
          </Link>
          <Link href="/starter-kit" className="flex items-start gap-3 group">
            <span className="text-amber-500 text-lg">✓</span>
            <div>
              <p className="font-medium text-slate-900 group-hover:text-amber-600 transition">Business Starter Kit Guide</p>
              <p className="text-xs text-slate-500">Complete 6-chapter guide to starting a concrete business</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Monthly Updates */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 text-left text-sm">
        <h3 className="font-bold text-blue-900 mb-2">📊 Monthly Pricing Data Updates</h3>
        <p className="text-blue-800">
          As a Pro member, you&apos;ll receive monthly email updates with fresh regional concrete pricing data, 
          labor rate benchmarks, and material cost trends. This keeps your bids competitive and profitable.
          Watch your inbox for your first pricing update!
        </p>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Questions about your membership?</p>
        <p>Email us at <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
