"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const DEFAULTS = {
  concretePricePerYard: 150,
  wasteFactor: 0.1,
  bagsPerYard80lb: 45,
  bagsPerYard60lb: 60,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function CurbCalculator() {
  const [totalLength, setTotalLength] = useState<string>("100");
  const [curbHeight, setCurbHeight] = useState<string>("6");
  const [curbWidth, setCurbWidth] = useState<string>("6");
  const [gutterWidth, setGutterWidth] = useState<string>("12");
  const [includeGutter, setIncludeGutter] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));
  const [includeWaste, setIncludeWaste] = useState(true);

  const results = useMemo(() => {
    const len = parseFloat(totalLength) || 0;
    const cH = (parseFloat(curbHeight) || 0) / 12; // inches to feet
    const cW = (parseFloat(curbWidth) || 0) / 12;  // inches to feet
    const gW = includeGutter ? (parseFloat(gutterWidth) || 0) / 12 : 0; // inches to feet
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;

    // Curb cross-section area (simplified rectangular curb)
    const curbCrossSection = cH * cW;

    // Gutter cross-section (typically 4" thick at standard gutter height)
    const gutterThickness = 4 / 12; // 4 inches standard gutter slab thickness
    const gutterCrossSection = gW * gutterThickness;

    const totalCrossSection = curbCrossSection + gutterCrossSection;
    const cubicFt = totalCrossSection * len;
    const cubicYards = cubicFt / 27;

    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;

    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);
    const bags60 = Math.ceil(totalYards * DEFAULTS.bagsPerYard60lb);

    const totalCost = totalYards * price;
    const costPerLinearFt = len > 0 ? totalCost / len : 0;

    // Form area: front face and top of curb
    const formArea = (cH + cW) * len;

    return {
      curbCrossSection: (curbCrossSection * 144).toFixed(1), // in square inches
      gutterCrossSection: includeGutter ? (gutterCrossSection * 144).toFixed(1) : "0",
      cubicFt: cubicFt.toFixed(1),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      bags60: bags60.toString(),
      totalCost: totalCost.toFixed(0),
      costPerLinearFt: costPerLinearFt.toFixed(2),
      formArea: formArea.toFixed(0),
    };
  }, [totalLength, curbHeight, curbWidth, gutterWidth, includeGutter, pricePerYard, includeWaste]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/curb" className="text-gray-900 font-medium">Curb &amp; Gutter Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Curb &amp; Gutter Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate concrete volume and cost for curbs and gutters. Supports standard curb-only and curb-and-gutter profiles. Outputs cubic yards, bags, cost per linear foot, and total cost.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Project Length</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Total Length (ft)</label>
              <input
                type="number" value={totalLength} onChange={(e) => setTotalLength(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                min="0" step="any"
              />
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">📏 Curb Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Curb Height (inches)</label>
                <select value={curbHeight} onChange={(e) => setCurbHeight(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="4">4&quot; — Low curb</option>
                  <option value="6">6&quot; — Standard residential</option>
                  <option value="8">8&quot; — High curb / commercial</option>
                  <option value="10">10&quot; — Heavy commercial</option>
                  <option value="12">12&quot; — Barrier / jersey</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Curb Width (inches)</label>
                <select value={curbWidth} onChange={(e) => setCurbWidth(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="4">4&quot;</option>
                  <option value="6">6&quot; — Standard</option>
                  <option value="8">8&quot;</option>
                  <option value="10">10&quot;</option>
                  <option value="12">12&quot;</option>
                </select>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🌊 Gutter (Optional)</h2>
            <label className="flex items-center gap-2 cursor-pointer mb-3">
              <input type="checkbox" checked={includeGutter} onChange={(e) => setIncludeGutter(e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm font-medium">Include gutter section</span>
            </label>

            {includeGutter && (
              <div>
                <label className="block text-sm font-medium mb-1">Gutter Width (inches)</label>
                <select value={gutterWidth} onChange={(e) => setGutterWidth(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="12">12&quot; — Standard residential</option>
                  <option value="18">18&quot; — Wider residential</option>
                  <option value="24">24&quot; — Commercial</option>
                  <option value="30">30&quot; — Wide commercial</option>
                </select>
                <p className="text-xs text-gray-400 mt-1">Gutter slab assumed 4&quot; thick</p>
              </div>
            )}

            <h2 className="font-bold text-lg border-b pb-2 pt-2">💰 Pricing</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Concrete Price (per CY)</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input type="number" value={pricePerYard} onChange={(e) => setPricePerYard(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0" step="any" />
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include 10% waste factor</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Curb Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Curb cross-section" value={`${results.curbCrossSection} sq in`} />
              {includeGutter && (
                <ResultRow label="Gutter cross-section" value={`${results.gutterCrossSection} sq in`} />
              )}

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Total Concrete" value={`${results.totalYards} yd³`} highlight />
                {includeWaste && (
                  <p className="text-xs text-gray-500 mt-1">
                    {results.cubicYards} yd³ + {results.wasteYards} yd³ waste (10%)
                  </p>
                )}
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="80 lb bags" value={results.bags80} />
                <ResultRow label="60 lb bags" value={results.bags60} />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Form Area (curb face)" value={`${results.formArea} SF`} />
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Material Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per linear foot" value={`$${results.costPerLinearFt}/LF`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Curb and gutter concrete typically uses 4000 PSI mix with air entrainment (4–6% air) in freeze-thaw climates. Use a curb machine for long runs — it&apos;s faster and more consistent than hand-forming.
              </p>
            </div>

            <div className="mt-4">
              <Link href="/templates" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Get the Pro Estimate Template — $49
              </Link>
              <p className="text-xs text-gray-500 text-center mt-2">Turn this into a professional bid sheet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reference Table */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4">📏 Standard Curb Profile Reference</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Profile</th>
                <th className="text-center px-4 py-3 font-semibold">Curb Height</th>
                <th className="text-center px-4 py-3 font-semibold">Curb Width</th>
                <th className="text-center px-4 py-3 font-semibold">Gutter Width</th>
                <th className="text-left px-4 py-3 font-semibold">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                { profile: "Mountable", ch: '4"', cw: '6"', gw: "None", use: "Residential driveways, private roads" },
                { profile: "Barrier (Type B)", ch: '6"', cw: '6"', gw: '12"', use: "Standard residential streets" },
                { profile: "Barrier (Type C)", ch: '6"', cw: '8"', gw: '18"', use: "Collector streets, subdivisions" },
                { profile: "High Barrier", ch: '8"', cw: '8"', gw: '24"', use: "Commercial, arterial roads" },
                { profile: "Integral C&G", ch: '6"', cw: '6"', gw: '24"', use: "Poured monolithically, most common" },
                { profile: "Valley Gutter", ch: '0"', cw: '0"', gw: '24"', use: "Cross-drainage, low-traffic areas" },
              ].map((row) => (
                <tr key={row.profile} className="border-t">
                  <td className="px-4 py-2 font-semibold">{row.profile}</td>
                  <td className="px-4 py-2 text-center font-mono">{row.ch}</td>
                  <td className="px-4 py-2 text-center font-mono">{row.cw}</td>
                  <td className="px-4 py-2 text-center font-mono">{row.gw}</td>
                  <td className="px-4 py-2 text-gray-600">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto mt-16 prose prose-gray">
        <h2>How to Calculate Concrete for Curbs and Gutters</h2>
        <p>
          Curb and gutter calculations differ from slab calculations because you&apos;re working with a linear profile rather than a flat area. The key is calculating the cross-sectional area of the curb profile, then multiplying by the total length.
        </p>

        <h3>The Curb Concrete Formula</h3>
        <p>
          <strong>Volume (CY) = Cross-Section Area (SF) × Length (ft) ÷ 27</strong>
        </p>
        <p>
          For a standard 6&quot; × 6&quot; curb, the cross-section area is 0.5 ft × 0.5 ft = 0.25 SF. For 100 linear feet: 0.25 × 100 ÷ 27 = 0.93 CY.
        </p>

        <h3>Adding the Gutter</h3>
        <p>
          A standard curb-and-gutter profile adds a 12–24&quot; wide gutter slab (typically 4&quot; thick) behind the curb. This significantly increases your concrete volume. A 100 LF curb-and-gutter section with a 12&quot; gutter adds about 0.37 CY — nearly 40% more concrete.
        </p>

        <h3>Curb Concrete Specifications</h3>
        <p>Municipal and DOT specs typically require:</p>
        <ul>
          <li><strong>Minimum 4000 PSI</strong> — higher strength for freeze-thaw durability</li>
          <li><strong>4–6% air entrainment</strong> — required in freeze-thaw climates for scaling resistance</li>
          <li><strong>Low water/cement ratio</strong> — 0.45 or less for durability</li>
          <li><strong>Fiber reinforcement</strong> — polypropylene fibers reduce cracking, often specified in lieu of rebar for small curbs</li>
        </ul>

        <h3>Curb Machine vs. Hand Forming</h3>
        <p>
          For jobs over 200 linear feet, a slip-form curb machine (curb and gutter machine) is almost always more cost-effective than hand-forming. The machine is faster, more consistent, and produces a better surface. For shorter runs or complex radius work, hand-forming with wood or steel forms is the standard approach.
        </p>

        <h3>Expansion Joints and Control Joints</h3>
        <p>
          Curbs require control joints every 10–15 feet (saw cut or tooled) and expansion joints every 50–100 feet. Budget for expansion joint filler material at $2–3 per linear foot at expansion joint locations.
        </p>

        <h3>Cost per Linear Foot — What to Expect</h3>
        <table>
          <thead>
            <tr><th>Project Type</th><th>Installed Cost Range</th></tr>
          </thead>
          <tbody>
            <tr><td>Curb only (6×6)</td><td>$15–$25/LF</td></tr>
            <tr><td>Curb &amp; Gutter (6×6 + 12&quot; gutter)</td><td>$20–$35/LF</td></tr>
            <tr><td>Curb &amp; Gutter (6×6 + 24&quot; gutter)</td><td>$25–$45/LF</td></tr>
            <tr><td>High barrier curb (8×8)</td><td>$30–$55/LF</td></tr>
          </tbody>
        </table>

        <h2>Need a Professional Estimate?</h2>
        <p>
          Use our <Link href="/templates">Pro Estimate Template</Link> to turn these calculations into a professional bid sheet for curb and flatwork projects.
        </p>
      </article>
    </div>
  );
}
