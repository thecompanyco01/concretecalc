"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Shape = "rectangle" | "circle" | "lshape";
type Finish = "broom" | "stamped" | "colored" | "exposed";

const FINISH_DATA: Record<Finish, { label: string; laborPerSqFt: number; materialAdd: number }> = {
  broom: { label: "Broom Finish", laborPerSqFt: 6, materialAdd: 0 },
  stamped: { label: "Stamped Concrete", laborPerSqFt: 14, materialAdd: 2 },
  colored: { label: "Colored Concrete", laborPerSqFt: 8, materialAdd: 1.5 },
  exposed: { label: "Exposed Aggregate", laborPerSqFt: 10, materialAdd: 1 },
};

const DEFAULTS = {
  concretePricePerYard: 150,
  wasteFactor: 0.1,
  bagsPerYard80lb: 45,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function PatioCalculator() {
  const [length, setLength] = useState<string>("16");
  const [width, setWidth] = useState<string>("12");
  const [thickness, setThickness] = useState<string>("4");
  const [shape, setShape] = useState<Shape>("rectangle");
  const [finish, setFinish] = useState<Finish>("broom");
  const [includeWaste, setIncludeWaste] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));

  // L-shape dimensions
  const [leg2Length, setLeg2Length] = useState<string>("8");
  const [leg2Width, setLeg2Width] = useState<string>("6");

  const results = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const t = (parseFloat(thickness) || 0) / 12;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const l2l = parseFloat(leg2Length) || 0;
    const l2w = parseFloat(leg2Width) || 0;

    let sqFt = 0;
    if (shape === "rectangle") {
      sqFt = l * w;
    } else if (shape === "circle") {
      const radius = l / 2; // length = diameter
      sqFt = Math.PI * radius * radius;
    } else if (shape === "lshape") {
      sqFt = (l * w) + (l2l * l2w);
    }

    const cubicFt = sqFt * t;
    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;
    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);

    const finishInfo = FINISH_DATA[finish];
    const materialCost = totalYards * price + sqFt * finishInfo.materialAdd;
    const laborCost = sqFt * finishInfo.laborPerSqFt;
    const totalCost = materialCost + laborCost;

    // Cost comparison
    const costs = Object.entries(FINISH_DATA).map(([key, data]) => ({
      key,
      label: data.label,
      total: (totalYards * price + sqFt * data.materialAdd + sqFt * data.laborPerSqFt).toFixed(0),
    }));

    return {
      sqFt: sqFt.toFixed(0),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
      costs,
    };
  }, [length, width, thickness, shape, finish, includeWaste, pricePerYard, leg2Length, leg2Width]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/patio" className="text-gray-900 font-medium">Patio Cost Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Patio Cost Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate total patio costs with options for stamped, colored, exposed aggregate, and broom-finished surfaces. Supports rectangle, circle, and L-shaped layouts.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Patio Shape</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {([["rectangle", "Rectangle", "L × W"], ["circle", "Circle", "Diameter"], ["lshape", "L-Shape", "Two sections"]] as const).map(([val, label, sub]) => (
                <button key={val} onClick={() => setShape(val)} className={`p-3 rounded-lg border-2 text-left transition ${shape === val ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <span className="block font-semibold text-sm">{label}</span>
                  <span className="block text-xs text-gray-500">{sub}</span>
                </button>
              ))}
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">📏 Dimensions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">{shape === "circle" ? "Diameter (ft)" : "Length (ft)"}</label>
                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              {shape !== "circle" && (
                <div>
                  <label className="block text-sm font-medium mb-1">Width (ft)</label>
                  <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Thickness (in)</label>
                <input type="number" value={thickness} onChange={(e) => setThickness(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            {shape === "lshape" && (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-3">Second Section (L-Shape Extension)</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Extension Length (ft)</label>
                    <input type="number" value={leg2Length} onChange={(e) => setLeg2Length(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Extension Width (ft)</label>
                    <input type="number" value={leg2Width} onChange={(e) => setLeg2Width(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                  </div>
                </div>
              </div>
            )}

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🎨 Finish Type</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(Object.entries(FINISH_DATA) as [Finish, typeof FINISH_DATA[Finish]][]).map(([key, data]) => (
                <button key={key} onClick={() => setFinish(key)} className={`p-3 rounded-lg border-2 text-left transition ${finish === key ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <span className="block font-semibold text-sm">{data.label}</span>
                  <span className="block text-xs text-gray-500">${data.laborPerSqFt}/sqft labor</span>
                </button>
              ))}
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">💰 Pricing</h2>
            <div>
              <label className="block text-sm font-medium mb-1">Concrete Price (per cubic yard)</label>
              <div className="relative max-w-xs">
                <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                <input type="number" value={pricePerYard} onChange={(e) => setPricePerYard(e.target.value)} className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include 10% waste factor (recommended)</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Patio Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Patio Area" value={`${results.sqFt} sq ft`} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} highlight />
                {includeWaste && <p className="text-xs text-gray-500 mt-1">Includes {results.wasteYards} yd³ waste</p>}
              </div>
              <ResultRow label="80 lb bags" value={results.bags80} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label={`Labor (${FINISH_DATA[finish].label})`} value={`$${Number(results.laborCost).toLocaleString()}`} />
              </div>
              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <p className="text-sm font-semibold text-orange-800 mb-2">Cost by Finish Type:</p>
                {results.costs.map((c) => (
                  <div key={c.key} className="flex justify-between text-sm py-0.5">
                    <span className={c.key === finish ? "font-semibold" : "text-gray-600"}>{c.label}</span>
                    <span className={`font-mono ${c.key === finish ? "font-bold text-orange-700" : ""}`}>${Number(c.total).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                For patios, 4&quot; is the standard thickness. Go to 6&quot; if you plan to put a hot tub or heavy furniture on it. The extra cost is minimal compared to cracking repairs.
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
        <h2>How Much Does a Concrete Patio Cost in 2026?</h2>
        <p>
          A concrete patio costs between <strong>$6-$25 per square foot</strong> depending on the finish type, with most homeowners paying <strong>$1,500-$5,000</strong> for a standard-sized patio. The biggest cost variable is the finish — a basic broom finish costs roughly half of what stamped concrete runs.
        </p>

        <h3>Patio Cost by Finish Type</h3>
        <p>The finish you choose has the biggest impact on your total patio cost:</p>
        <table>
          <thead>
            <tr><th>Finish Type</th><th>Cost/sq ft</th><th>Best For</th></tr>
          </thead>
          <tbody>
            <tr><td>Broom finish</td><td>$6-$10</td><td>Budget-friendly, good traction</td></tr>
            <tr><td>Colored concrete</td><td>$8-$16</td><td>Aesthetic upgrade, matches house</td></tr>
            <tr><td>Exposed aggregate</td><td>$10-$18</td><td>Natural look, excellent durability</td></tr>
            <tr><td>Stamped concrete</td><td>$12-$25</td><td>Mimics stone/brick, highest curb appeal</td></tr>
          </tbody>
        </table>

        <h3>Best Concrete Thickness for Patios</h3>
        <p>
          The standard concrete patio is <strong>4 inches thick</strong>. This is adequate for foot traffic, outdoor furniture, and most residential uses. However, consider going thicker in these situations:
        </p>
        <ul>
          <li><strong>Hot tubs or spas:</strong> Use 6&quot; minimum — a filled hot tub can weigh 3,000-6,000 lbs</li>
          <li><strong>Outdoor kitchens:</strong> 5-6&quot; under heavy built-in equipment</li>
          <li><strong>Vehicle access:</strong> If any vehicles will cross the patio, use 5-6&quot;</li>
          <li><strong>Poor soil conditions:</strong> Increase thickness on clay or expansive soils</li>
        </ul>

        <h3>Patio Shape Options</h3>
        <p>
          While rectangular patios are the most common and cost-effective, other shapes can create more interesting outdoor living spaces:
        </p>
        <ul>
          <li><strong>Rectangle:</strong> Most common, easiest to form, lowest labor cost</li>
          <li><strong>Circle:</strong> Creates a cozy gathering space, requires curved forming (adds 10-20% labor)</li>
          <li><strong>L-Shape:</strong> Wraps around house corners, creates separate zones for dining and lounging</li>
          <li><strong>Free-form:</strong> Custom curves (not calculated here — requires on-site measurement)</li>
        </ul>

        <h3>Concrete Patio vs. Pavers</h3>
        <p>
          Clients often ask whether concrete or pavers are better for a patio. Poured concrete is typically <strong>30-40% less expensive</strong> than pavers and requires less maintenance. Pavers offer easier repair of individual sections but are more prone to weed growth and shifting over time. For most residential patios, concrete provides the best value.
        </p>

        <h3>Patio Maintenance Tips</h3>
        <p>
          Advise your clients to seal their concrete patio every 2-3 years to prevent staining and extend its life. A properly sealed and maintained concrete patio can last <strong>25-30 years</strong>. Stamped and colored concrete especially benefits from regular sealing to maintain its appearance.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
