import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Estimate Template Pack | ConcreteCalc",
  robots: "noindex",
};

export default function ThankYouEstimateTemplates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">✅</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        Your 5 professional estimate templates are ready. Start creating polished estimates today.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📄 Your Estimate Templates</h2>
        <p className="text-slate-600 text-sm mb-4">
          All 5 templates are interactive — select a template, customize the details, and print as PDF. 
          Bookmark this link for easy access.
        </p>
        <div className="space-y-3 mb-6">
          {[
            { name: "Driveway Estimate", desc: "Residential driveways with demo, gravel, finishing" },
            { name: "Slab Estimate", desc: "Garage floors, sheds, commercial slabs" },
            { name: "Patio Estimate", desc: "Residential patios with decorative options" },
            { name: "Foundation Estimate", desc: "Footings, walls, waterproofing" },
            { name: "Stamped Concrete", desc: "Decorative/stamped with color and sealer" },
          ].map(t => (
            <div key={t.name} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
              <span className="text-amber-500 font-bold">✓</span>
              <div>
                <p className="text-sm font-medium text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/tools/estimate-templates"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm"
        >
          Open Your Templates →
        </Link>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help?</p>
        <p>Email us at <a href="mailto:support@concretecalc.co" className="text-amber-600 underline">support@concretecalc.co</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
