import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Estimate Template Pack | EstimateConcrete",
  robots: "noindex",
};

const downloads = [
  { name: "Driveway Estimate", file: "estimate-driveway-c7e4a1.xlsx", desc: "Residential driveways with demo, gravel, finishing" },
  { name: "Slab Estimate", file: "estimate-slab-d9b2e5.xlsx", desc: "Garage floors, sheds, commercial slabs" },
  { name: "Patio Estimate", file: "estimate-patio-f3a6c8.xlsx", desc: "Residential patios with decorative options" },
  { name: "Foundation Estimate", file: "estimate-foundation-b5d1e7.xlsx", desc: "Footings, walls, waterproofing" },
  { name: "Stamped Concrete", file: "estimate-stamped-e2c9f4.xlsx", desc: "Decorative/stamped with color and sealer" },
];

export default function ThankYouEstimateTemplates() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">✅</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        Your 5 professional estimate templates are ready to download. Each is a fully formatted Excel spreadsheet with formulas.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📄 Download Your Estimate Templates</h2>
        <p className="text-slate-600 text-sm mb-4">
          Each template includes materials, labor, and equipment sections with auto-calculated totals, 
          overhead, profit margin, and a grand total. Yellow cells are editable — customize quantities and rates for each project.
        </p>
        <div className="space-y-3 mb-4">
          {downloads.map(t => (
            <div key={t.name} className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-amber-500 font-bold">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.desc}</p>
                </div>
              </div>
              <a
                href={`/downloads/${t.file}`}
                download
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-1.5 px-4 rounded-lg transition text-xs flex-shrink-0"
              >
                ⬇️ Download
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Bookmark this page — you can re-download anytime.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">🌐 Online Preview</h2>
        <p className="text-slate-600 text-sm mb-3">
          You can also preview and print estimates using our interactive online tool:
        </p>
        <Link
          href="/tools/estimate-templates"
          className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-6 rounded-lg transition text-sm"
        >
          Open Online Templates →
        </Link>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help?</p>
        <p>Email us at <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
