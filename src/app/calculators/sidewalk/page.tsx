"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const DEFAULTS = {
  concretePricePerYard: 150,
  laborPerSqFt: 6,
  wasteFactor: 0.1,
  bagsPerYard80lb: 45,
  gradingPerLinFt: 3,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function SidewalkCalculator() {
  const [length, setLength] = useState<string>("50");
  const [width, setWidth] = useState<string>("4");
  const [thickness, setThickness] = useState<string>("4");
  const [includeWaste, setIncludeWaste] = useState(true);
  const [includeGrading, setIncludeGrading] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));
  const [laborPerSqFt, setLaborPerSqFt] = useState<string>(String(DEFAULTS.laborPerSqFt));

  const results = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const t = (parseFloat(thickness) || 0) / 12;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const labor = parseFloat(laborPerSqFt) || DEFAULTS.laborPerSqFt;

    const sqFt = l * w;
    const cubicFt = sqFt * t;
    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;
    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);

    const materialCost = totalYards * price;
    const laborCost = sqFt * labor;
    const gradingCost = includeGrading ? l * DEFAULTS.gradingPerLinFt : 0;
    const totalCost = materialCost + laborCost + gradingCost;

    const costPerLinFt = l > 0 ? totalCost / l : 0;

    return {
      sqFt: sqFt.toFixed(0),
      linearFt: l.toFixed(0),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      gradingCost: gradingCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
      costPerLinFt: costPerLinFt.toFixed(2),
    };
  }, [length, width, thickness, includeWaste, includeGrading, pricePerYard, laborPerSqFt]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/sidewalk" className="text-gray-900 font-medium">Sidewalk Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Sidewalk Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate cubic yards, material cost, and linear foot pricing for concrete sidewalk projects. Includes waste factor, labor, and grading estimates.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Sidewalk Dimensions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Length (ft)</label>
                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Width (ft)</label>
                <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                <p className="text-xs text-gray-400 mt-1">Standard: 4 ft residential, 5 ft ADA</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thickness (in)</label>
                <input type="number" value={thickness} onChange={(e) => setThickness(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">💰 Pricing</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Concrete Price (per cubic yard)</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input type="number" value={pricePerYard} onChange={(e) => setPricePerYard(e.target.value)} className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Labor Cost (per sq ft)</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                  <input type="number" value={laborPerSqFt} onChange={(e) => setLaborPerSqFt(e.target.value)} className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">⚙️ Options</h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeGrading} onChange={(e) => setIncludeGrading(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include grading &amp; prep ($3/linear ft)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include 10% waste factor (recommended)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Sidewalk Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Total Length" value={`${results.linearFt} linear ft`} />
              <ResultRow label="Total Area" value={`${results.sqFt} sq ft`} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} highlight />
                {includeWaste && <p className="text-xs text-gray-500 mt-1">Includes {results.wasteYards} yd³ waste</p>}
              </div>
              <ResultRow label="80 lb bags" value={results.bags80} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label="Labor Cost" value={`$${Number(results.laborCost).toLocaleString()}`} />
                {includeGrading && <ResultRow label="Grading & Prep" value={`$${Number(results.gradingCost).toLocaleString()}`} />}
              </div>
              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} />
                <ResultRow label="Cost per linear ft" value={`$${results.costPerLinFt}`} highlight />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Place control joints every 4-5 feet on sidewalks. The joint spacing in feet should not exceed 2-3 times the slab thickness in inches. For a 4&quot; sidewalk, joints every 8-12 feet max.
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
        <h2>Concrete Sidewalk Cost Guide 2026</h2>
        <p>
          A concrete sidewalk costs between <strong>$6-$12 per square foot</strong> or <strong>$25-$50 per linear foot</strong> for a standard 4-foot-wide walkway. The total cost for a typical 50-foot residential sidewalk runs <strong>$1,200-$2,500</strong> installed.
        </p>

        <h3>Sidewalk Cost by the Numbers</h3>
        <table>
          <thead>
            <tr><th>Sidewalk Length</th><th>4 ft Wide</th><th>5 ft Wide (ADA)</th></tr>
          </thead>
          <tbody>
            <tr><td>25 linear ft</td><td>$600-$1,200</td><td>$750-$1,500</td></tr>
            <tr><td>50 linear ft</td><td>$1,200-$2,400</td><td>$1,500-$3,000</td></tr>
            <tr><td>100 linear ft</td><td>$2,400-$4,800</td><td>$3,000-$6,000</td></tr>
            <tr><td>200 linear ft</td><td>$4,800-$9,600</td><td>$6,000-$12,000</td></tr>
          </tbody>
        </table>

        <h3>Standard Sidewalk Dimensions</h3>
        <p>Building codes and best practices dictate these standard sidewalk dimensions:</p>
        <ul>
          <li><strong>Width — Residential:</strong> 4 feet is standard. Allows two people to walk side by side.</li>
          <li><strong>Width — ADA compliant:</strong> 5 feet minimum for wheelchair accessibility. Required for public sidewalks.</li>
          <li><strong>Thickness:</strong> 4 inches is standard. Use 5-6&quot; where vehicles may cross.</li>
          <li><strong>Slope:</strong> 2% cross-slope for drainage (¼&quot; per foot).</li>
        </ul>

        <h3>Sidewalk Construction Process</h3>
        <p>A typical concrete sidewalk installation follows these steps:</p>
        <ol>
          <li><strong>Layout and excavation:</strong> Mark the path, excavate 6-8 inches deep</li>
          <li><strong>Grading and compaction:</strong> Level the subgrade, compact with a plate compactor</li>
          <li><strong>Base material:</strong> 2-4 inches of gravel base, compacted</li>
          <li><strong>Forming:</strong> Set 2x4 or 2x6 forms along both edges, staked every 3-4 feet</li>
          <li><strong>Pour and finish:</strong> Pour concrete, screed, bull float, then broom finish</li>
          <li><strong>Control joints:</strong> Cut or tool joints every 4-5 feet</li>
          <li><strong>Cure:</strong> Keep moist for 7 days minimum</li>
        </ol>

        <h3>Control Joints for Sidewalks</h3>
        <p>
          Control joints (also called contraction joints) are essential for preventing random cracking. The rule of thumb: <strong>joint spacing in feet should equal 2-3 times the slab thickness in inches</strong>. For a 4&quot; thick sidewalk, place joints every 8-12 feet. Most contractors cut joints every 4-5 feet for a clean, professional look.
        </p>

        <h3>ADA Compliance Requirements</h3>
        <p>
          If you&apos;re building public sidewalks or walkways for commercial properties, ADA compliance is mandatory. Key requirements include:
        </p>
        <ul>
          <li>Minimum 5-foot width (60 inches)</li>
          <li>Maximum 2% cross-slope</li>
          <li>Maximum 5% running slope (or it becomes a ramp)</li>
          <li>Detectable warning surfaces at curb ramps</li>
          <li>Smooth, non-slip surface finish</li>
        </ul>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
