"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Complexity = "basic" | "medium" | "premium";

const COMPLEXITY_DATA: Record<Complexity, { label: string; laborPerSqFt: number; materialPerSqFt: number; description: string }> = {
  basic: { label: "Basic Pattern", laborPerSqFt: 10, materialPerSqFt: 3, description: "Single pattern, one color — ashlar slate, brick" },
  medium: { label: "Medium Pattern", laborPerSqFt: 14, materialPerSqFt: 4.5, description: "Multiple colors, borders, or two patterns" },
  premium: { label: "Premium Pattern", laborPerSqFt: 20, materialPerSqFt: 6, description: "Hand-carved, multi-color, custom designs" },
};

const DEFAULTS = {
  concretePricePerYard: 150,
  sealerPerSqFt: 0.75,
  colorPerSqFt: 0.50,
  wasteFactor: 0.1,
  thicknessInches: 4,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function StampedEstimateConcreteulator() {
  const [area, setArea] = useState<string>("400");
  const [complexity, setComplexity] = useState<Complexity>("medium");
  const [colors, setColors] = useState<string>("2");
  const [includeSealer, setIncludeSealer] = useState(true);
  const [includeWaste, setIncludeWaste] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));

  const results = useMemo(() => {
    const sqFt = parseFloat(area) || 0;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const numColors = parseInt(colors) || 1;
    const comp = COMPLEXITY_DATA[complexity];

    const thicknessFt = DEFAULTS.thicknessInches / 12;
    const cubicFt = sqFt * thicknessFt;
    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;

    const concreteCost = totalYards * price;
    const stampMaterialCost = sqFt * comp.materialPerSqFt;
    const colorCost = sqFt * DEFAULTS.colorPerSqFt * numColors;
    const sealerCost = includeSealer ? sqFt * DEFAULTS.sealerPerSqFt : 0;
    const materialCost = concreteCost + stampMaterialCost + colorCost + sealerCost;

    const laborCost = sqFt * comp.laborPerSqFt;
    const totalCost = materialCost + laborCost;

    return {
      sqFt: sqFt.toFixed(0),
      totalYards: totalYards.toFixed(2),
      concreteCost: concreteCost.toFixed(0),
      stampMaterialCost: stampMaterialCost.toFixed(0),
      colorCost: colorCost.toFixed(0),
      sealerCost: sealerCost.toFixed(0),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      laborPerSqFt: comp.laborPerSqFt.toFixed(2),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
    };
  }, [area, complexity, colors, includeSealer, includeWaste, pricePerYard]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/stamped" className="text-gray-900 font-medium">Stamped Concrete Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Stamped Concrete Cost Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate the total cost of stamped concrete including pattern complexity, colors, sealer, and labor. Get accurate cost per square foot for your stamped concrete project.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Project Size</h2>
            <div className="max-w-xs">
              <label className="block text-sm font-medium mb-1">Total Area (sq ft)</label>
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🎨 Pattern Complexity</h2>
            <div className="grid gap-3">
              {(Object.entries(COMPLEXITY_DATA) as [Complexity, typeof COMPLEXITY_DATA[Complexity]][]).map(([key, data]) => (
                <button key={key} onClick={() => setComplexity(key)} className={`p-4 rounded-lg border-2 text-left transition ${complexity === key ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{data.label}</span>
                    <span className="text-sm font-mono text-orange-700">${data.laborPerSqFt}/sqft labor</span>
                  </div>
                  <span className="block text-xs text-gray-500 mt-1">{data.description}</span>
                </button>
              ))}
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🖌️ Colors &amp; Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Number of Colors</label>
                <select value={colors} onChange={(e) => setColors(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="1">1 color ($0.50/sqft)</option>
                  <option value="2">2 colors ($1.00/sqft)</option>
                  <option value="3">3 colors ($1.50/sqft)</option>
                  <option value="4">4+ colors ($2.00/sqft)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeSealer} onChange={(e) => setIncludeSealer(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include sealer ($0.75/sq ft — highly recommended)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include 10% waste factor</span>
              </label>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">💰 Concrete Pricing</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Concrete Price (per cubic yard)</label>
              <div className="relative max-w-xs">
                <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                <input type="number" value={pricePerYard} onChange={(e) => setPricePerYard(e.target.value)} className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Stamped Concrete Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Project Area" value={`${results.sqFt} sq ft`} />
              <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} />

              <div className="border-t border-orange-200 pt-3">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Material Breakdown</p>
                <ResultRow label="Concrete" value={`$${Number(results.concreteCost).toLocaleString()}`} />
                <ResultRow label="Stamp Materials" value={`$${Number(results.stampMaterialCost).toLocaleString()}`} />
                <ResultRow label={`Color (${colors} color${parseInt(colors) > 1 ? "s" : ""})`} value={`$${Number(results.colorCost).toLocaleString()}`} />
                {includeSealer && <ResultRow label="Sealer" value={`$${Number(results.sealerCost).toLocaleString()}`} />}
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Total Materials" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label={`Labor (${COMPLEXITY_DATA[complexity].label})`} value={`$${Number(results.laborCost).toLocaleString()}`} />
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} highlight />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Stamped concrete MUST be sealed within 24-48 hours of curing. Unsealed stamped concrete fades, stains, and deteriorates rapidly. Always include sealer in your bid — it&apos;s not optional.
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
        <h2>Stamped Concrete Cost Per Square Foot in 2026</h2>
        <p>
          Stamped concrete costs between <strong>$12-$28 per square foot</strong> installed, making it one of the most popular decorative concrete options. It costs significantly more than basic broom-finished concrete ($6-$10/sqft) but far less than natural stone ($25-$50/sqft) while achieving a similar look.
        </p>

        <h3>Stamped Concrete Cost by Pattern Complexity</h3>
        <p>The pattern complexity is the biggest cost driver in stamped concrete work:</p>
        <table>
          <thead>
            <tr><th>Complexity</th><th>Cost/sqft</th><th>Examples</th></tr>
          </thead>
          <tbody>
            <tr><td>Basic</td><td>$12-$16</td><td>Ashlar slate, running bond brick, wood plank</td></tr>
            <tr><td>Medium</td><td>$16-$22</td><td>Two-color patterns, borders, cobblestone</td></tr>
            <tr><td>Premium</td><td>$22-$28+</td><td>Hand-carved stone, multi-color custom, logos</td></tr>
          </tbody>
        </table>

        <h3>What Affects Stamped Concrete Cost?</h3>
        <p>Several factors beyond pattern complexity affect your total cost:</p>
        <ul>
          <li><strong>Number of colors:</strong> Each additional color adds $0.50-$1.00 per square foot. Two colors is standard; three or more is premium.</li>
          <li><strong>Project size:</strong> Larger projects have a lower per-square-foot cost due to economies of scale. Jobs under 200 sqft often carry a minimum charge.</li>
          <li><strong>Access and complexity:</strong> Tight spaces, stairs, curves, and multiple levels increase labor significantly.</li>
          <li><strong>Geographic location:</strong> Labor rates vary by region — expect 20-30% higher costs in major metro areas.</li>
          <li><strong>Sealer type:</strong> Solvent-based sealers cost more but last longer than water-based options.</li>
        </ul>

        <h3>Popular Stamped Concrete Patterns</h3>
        <p>The most requested patterns in residential stamped concrete work include:</p>
        <ul>
          <li><strong>Ashlar slate:</strong> The most popular pattern. Mimics natural slate with irregular rectangular shapes.</li>
          <li><strong>Herringbone brick:</strong> Classic brick pattern, great for driveways and walkways.</li>
          <li><strong>Cobblestone:</strong> Old-world European look, excellent for driveways and patios.</li>
          <li><strong>Wood plank:</strong> Mimics wood deck boards — increasingly popular for patios.</li>
          <li><strong>Flagstone:</strong> Natural, random stone look. Works well in garden and pool areas.</li>
        </ul>

        <h3>Stamped Concrete vs. Natural Stone vs. Pavers</h3>
        <table>
          <thead>
            <tr><th>Material</th><th>Cost/sqft</th><th>Lifespan</th><th>Maintenance</th></tr>
          </thead>
          <tbody>
            <tr><td>Stamped concrete</td><td>$12-$28</td><td>25+ years</td><td>Reseal every 2-3 years</td></tr>
            <tr><td>Pavers</td><td>$15-$30</td><td>25+ years</td><td>Re-sand joints, weed control</td></tr>
            <tr><td>Natural stone</td><td>$25-$50</td><td>50+ years</td><td>Minimal</td></tr>
          </tbody>
        </table>

        <h3>Sealing Stamped Concrete</h3>
        <p>
          Sealing is essential for stamped concrete. Without sealer, the color fades, the surface stains easily, and freeze-thaw cycles can cause spalling. Plan to seal initially and then reseal every 2-3 years at a cost of <strong>$0.50-$1.00 per square foot</strong> for resealing.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
