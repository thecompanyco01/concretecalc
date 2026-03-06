"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type RebarSize = "#3" | "#4" | "#5" | "#6";

const REBAR_DATA: Record<RebarSize, { label: string; diameter: string; weightPerFt: number; pricePerFt: number }> = {
  "#3": { label: "#3 (⅜\")", diameter: "0.375\"", weightPerFt: 0.376, pricePerFt: 0.75 },
  "#4": { label: "#4 (½\")", diameter: "0.500\"", weightPerFt: 0.668, pricePerFt: 1.25 },
  "#5": { label: "#5 (⅝\")", diameter: "0.625\"", weightPerFt: 1.043, pricePerFt: 1.75 },
  "#6": { label: "#6 (¾\")", diameter: "0.750\"", weightPerFt: 1.502, pricePerFt: 2.50 },
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function RebarCalculator() {
  const [slabLength, setSlabLength] = useState<string>("20");
  const [slabWidth, setSlabWidth] = useState<string>("20");
  const [rebarSize, setRebarSize] = useState<RebarSize>("#4");
  const [spacing, setSpacing] = useState<string>("18");
  const [standardBarLength, setStandardBarLength] = useState<string>("20");
  const [overlapInches, setOverlapInches] = useState<string>("24");
  const [includeChairs, setIncludeChairs] = useState(true);
  const [wastePercent, setWastePercent] = useState<string>("10");

  const results = useMemo(() => {
    const l = parseFloat(slabLength) || 0;
    const w = parseFloat(slabWidth) || 0;
    const spacingFt = (parseFloat(spacing) || 18) / 12;
    const barLen = parseFloat(standardBarLength) || 20;
    const overlap = (parseFloat(overlapInches) || 24) / 12;
    const waste = (parseFloat(wastePercent) || 0) / 100;
    const rebar = REBAR_DATA[rebarSize];

    // Bars running along the length (spaced across the width)
    const lengthBars = w > 0 ? Math.ceil(w / spacingFt) + 1 : 0;
    // Bars running along the width (spaced across the length)
    const widthBars = l > 0 ? Math.ceil(l / spacingFt) + 1 : 0;

    const totalLinearFtLength = lengthBars * l;
    const totalLinearFtWidth = widthBars * w;
    const baseLinearFt = totalLinearFtLength + totalLinearFtWidth;
    const wasteLinearFt = baseLinearFt * waste;
    const totalLinearFt = baseLinearFt + wasteLinearFt;

    // Number of standard bars needed (accounting for overlaps)
    const effectiveBarLength = barLen - overlap;
    const barsForLength = lengthBars * (l > barLen ? Math.ceil(l / effectiveBarLength) : 1);
    const barsForWidth = widthBars * (w > barLen ? Math.ceil(w / effectiveBarLength) : 1);
    const baseBars = barsForLength + barsForWidth;
    const totalBars = Math.ceil(baseBars * (1 + waste));

    const totalWeight = totalLinearFt * rebar.weightPerFt;
    const rebarCost = totalLinearFt * rebar.pricePerFt;

    // Rebar chairs (1 per 3-4 sq ft of rebar grid)
    const sqFt = l * w;
    const chairCount = includeChairs ? Math.ceil(sqFt / 4) : 0;
    const chairCost = chairCount * 0.35;

    const totalCost = rebarCost + chairCost;

    return {
      sqFt: sqFt.toFixed(0),
      lengthBars: lengthBars.toString(),
      widthBars: widthBars.toString(),
      baseLinearFt: baseLinearFt.toFixed(0),
      totalLinearFt: totalLinearFt.toFixed(0),
      totalBars: totalBars.toString(),
      totalWeight: totalWeight.toFixed(0),
      totalWeightTons: (totalWeight / 2000).toFixed(2),
      rebarCost: rebarCost.toFixed(0),
      chairCount: chairCount.toString(),
      chairCost: chairCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
    };
  }, [slabLength, slabWidth, rebarSize, spacing, standardBarLength, overlapInches, includeChairs, wastePercent]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/rebar" className="text-gray-900 font-medium">Rebar Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Rebar Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate total linear feet, number of bars, weight, and cost for rebar reinforcement in concrete slabs. Supports #3 through #6 rebar with adjustable spacing.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Slab Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Slab Length (ft)</label>
                <input type="number" value={slabLength} onChange={(e) => setSlabLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slab Width (ft)</label>
                <input type="number" value={slabWidth} onChange={(e) => setSlabWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🔩 Rebar Specs</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(Object.entries(REBAR_DATA) as [RebarSize, typeof REBAR_DATA[RebarSize]][]).map(([key, data]) => (
                <button key={key} onClick={() => setRebarSize(key)} className={`p-3 rounded-lg border-2 text-left transition ${rebarSize === key ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <span className="block font-semibold text-sm">{data.label}</span>
                  <span className="block text-xs text-gray-500">{data.weightPerFt} lb/ft — ${data.pricePerFt}/ft</span>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Spacing (inches OC)</label>
                <select value={spacing} onChange={(e) => setSpacing(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="12">12&quot; OC</option>
                  <option value="16">16&quot; OC</option>
                  <option value="18">18&quot; OC (standard)</option>
                  <option value="24">24&quot; OC</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Standard Bar Length (ft)</label>
                <select value={standardBarLength} onChange={(e) => setStandardBarLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="10">10 ft</option>
                  <option value="20">20 ft (standard)</option>
                  <option value="30">30 ft</option>
                  <option value="40">40 ft</option>
                  <option value="60">60 ft</option>
                </select>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">⚙️ Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Overlap Length (inches)</label>
                <input type="number" value={overlapInches} onChange={(e) => setOverlapInches(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                <p className="text-xs text-gray-400 mt-1">Standard: 24&quot; (30× bar diameter)</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Waste Factor (%)</label>
                <input type="number" value={wastePercent} onChange={(e) => setWastePercent(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" max="25" step="1" />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeChairs} onChange={(e) => setIncludeChairs(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include rebar chairs ($0.35 each, 1 per 4 sq ft)</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Rebar Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Slab Area" value={`${results.sqFt} sq ft`} />
              <ResultRow label="Bars along length" value={results.lengthBars} />
              <ResultRow label="Bars along width" value={results.widthBars} />

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Total Linear Feet" value={`${results.totalLinearFt} ft`} highlight />
                <ResultRow label="Standard Bars Needed" value={results.totalBars} highlight />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Total Weight" value={`${Number(results.totalWeight).toLocaleString()} lbs`} />
                <ResultRow label="Weight (tons)" value={`${results.totalWeightTons} tons`} />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Rebar Cost" value={`$${Number(results.rebarCost).toLocaleString()}`} />
                {includeChairs && (
                  <ResultRow label={`Chairs (${results.chairCount})`} value={`$${Number(results.chairCost).toLocaleString()}`} />
                )}
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Rebar Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Rebar should be positioned at 1/3 the slab thickness from the bottom. For a 4&quot; slab, that means rebar sits about 1.3&quot; from the bottom — use 1.5&quot; chairs. Rebar on the ground does nothing.
              </p>
            </div>

            <div className="mt-4">
              <Link href="/templates" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Get the Pro Estimate Template — $49
              </Link>
              <p className="text-xs text-gray-500 text-center mt-2">Turn this calculator into a professional bid sheet</p>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto mt-16 prose prose-gray">
        <h2>How to Calculate Rebar for Concrete Slabs</h2>
        <p>
          Rebar (reinforcing bar) provides tensile strength that concrete alone lacks. Calculating rebar correctly ensures structural integrity while avoiding waste. The standard approach for slabs is a grid pattern at a specified spacing (on center, or &quot;OC&quot;).
        </p>

        <h3>The Rebar Calculation Formula</h3>
        <p>
          For a grid pattern, count the bars in each direction:
        </p>
        <ul>
          <li><strong>Bars along length</strong> = (Width ÷ Spacing) + 1</li>
          <li><strong>Bars along width</strong> = (Length ÷ Spacing) + 1</li>
          <li><strong>Total linear feet</strong> = (Bars along length × Length) + (Bars along width × Width)</li>
        </ul>

        <h3>Rebar Sizes and Specifications</h3>
        <table>
          <thead>
            <tr><th>Size</th><th>Diameter</th><th>Weight/ft</th><th>Price/ft</th><th>Common Use</th></tr>
          </thead>
          <tbody>
            <tr><td>#3</td><td>⅜&quot;</td><td>0.376 lb</td><td>$0.75</td><td>Sidewalks, patios, light slabs</td></tr>
            <tr><td>#4</td><td>½&quot;</td><td>0.668 lb</td><td>$1.25</td><td>Residential slabs, driveways (most common)</td></tr>
            <tr><td>#5</td><td>⅝&quot;</td><td>1.043 lb</td><td>$1.75</td><td>Heavy-duty slabs, foundations</td></tr>
            <tr><td>#6</td><td>¾&quot;</td><td>1.502 lb</td><td>$2.50</td><td>Commercial, structural</td></tr>
          </tbody>
        </table>

        <h3>Rebar Spacing Guidelines</h3>
        <p>The spacing between rebar bars depends on the slab application and load requirements:</p>
        <ul>
          <li><strong>12&quot; OC:</strong> Heavy-duty — commercial slabs, heavy vehicle traffic</li>
          <li><strong>16&quot; OC:</strong> Medium-duty — residential driveways, garage floors</li>
          <li><strong>18&quot; OC:</strong> Standard — most residential slabs and patios</li>
          <li><strong>24&quot; OC:</strong> Light-duty — sidewalks, light-use slabs</li>
        </ul>

        <h3>Rebar Overlap (Lap Splice) Requirements</h3>
        <p>
          When rebar bars need to be connected, they must overlap. The minimum overlap is typically <strong>30 times the bar diameter</strong> (ACI 318). For #4 rebar (½&quot; diameter), that&apos;s 15 inches minimum, but most contractors use 24&quot; as a standard for residential work. Always check your local building code for specific requirements.
        </p>

        <h3>Rebar Chairs and Placement</h3>
        <p>
          Rebar must be elevated off the subgrade to be effective. Use rebar chairs (plastic or metal supports) placed every 3-4 square feet. The rebar should sit at approximately <strong>1/3 of the slab thickness from the bottom</strong>. For a 4&quot; slab, use 1.5&quot; chairs. Rebar lying on the ground provides essentially zero structural benefit.
        </p>

        <h3>Wire Mesh vs. Rebar</h3>
        <p>
          For light-duty slabs (patios, sidewalks), welded wire mesh (WWF 6×6 W1.4×W1.4) is an alternative to rebar. It&apos;s cheaper and faster to install but provides less strength. For driveways, garage floors, and any structural slab, rebar is the professional choice.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
