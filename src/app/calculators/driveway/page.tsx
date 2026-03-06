"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const DEFAULTS = {
  concretePricePerYard: 150,
  laborBroom: 6,
  laborStamped: 14,
  laborExposed: 10,
  removalPerSqFt: 3.5,
  wasteFactor: 0.1,
  bagsPerYard80lb: 45,
  gradingPerSqFt: 1.5,
};

type FinishType = "broom" | "stamped" | "exposed";

function getLaborRate(finish: FinishType) {
  if (finish === "stamped") return DEFAULTS.laborStamped;
  if (finish === "exposed") return DEFAULTS.laborExposed;
  return DEFAULTS.laborBroom;
}

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function DrivewayCalculator() {
  const [length, setLength] = useState<string>("40");
  const [width, setWidth] = useState<string>("12");
  const [thickness, setThickness] = useState<string>("5");
  const [finishType, setFinishType] = useState<FinishType>("broom");
  const [removeOld, setRemoveOld] = useState(false);
  const [includeWaste, setIncludeWaste] = useState(true);
  const [includeGrading, setIncludeGrading] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));

  const results = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const t = (parseFloat(thickness) || 0) / 12;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;

    const sqFt = l * w;
    const cubicFt = sqFt * t;
    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;
    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);

    const materialCost = totalYards * price;
    const laborRate = getLaborRate(finishType);
    const laborCost = sqFt * laborRate;
    const removalCost = removeOld ? sqFt * DEFAULTS.removalPerSqFt : 0;
    const gradingCost = includeGrading ? sqFt * DEFAULTS.gradingPerSqFt : 0;
    const totalCost = materialCost + laborCost + removalCost + gradingCost;

    return {
      sqFt: sqFt.toFixed(0),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      removalCost: removalCost.toFixed(0),
      gradingCost: gradingCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
    };
  }, [length, width, thickness, finishType, removeOld, includeWaste, includeGrading, pricePerYard]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/driveway" className="text-gray-900 font-medium">Driveway Cost Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Driveway Cost Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate the total cost of a concrete driveway including material, labor, finishing, and old driveway removal. Built for contractors who need accurate bid numbers.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Driveway Dimensions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Length (ft)</label>
                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Width (ft)</label>
                <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thickness (in)</label>
                <input type="number" value={thickness} onChange={(e) => setThickness(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🎨 Finish Type</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {([["broom", "Broom Finish", "$6/sqft labor"], ["stamped", "Stamped", "$14/sqft labor"], ["exposed", "Exposed Aggregate", "$10/sqft labor"]] as const).map(([val, label, sub]) => (
                <button key={val} onClick={() => setFinishType(val)} className={`p-3 rounded-lg border-2 text-left transition ${finishType === val ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <span className="block font-semibold text-sm">{label}</span>
                  <span className="block text-xs text-gray-500">{sub}</span>
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

            <h2 className="font-bold text-lg border-b pb-2 pt-2">⚙️ Options</h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={removeOld} onChange={(e) => setRemoveOld(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Remove old driveway ($3.50/sq ft)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeGrading} onChange={(e) => setIncludeGrading(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include grading &amp; site prep ($1.50/sq ft)</span>
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
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Driveway Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Driveway Area" value={`${results.sqFt} sq ft`} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} highlight />
                {includeWaste && <p className="text-xs text-gray-500 mt-1">Includes {results.wasteYards} yd³ waste ({results.cubicYards} yd³ base + 10%)</p>}
              </div>
              <ResultRow label="80 lb bags (if bagging)" value={results.bags80} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label={`Labor (${finishType} finish)`} value={`$${Number(results.laborCost).toLocaleString()}`} />
                {includeGrading && <ResultRow label="Grading & Prep" value={`$${Number(results.gradingCost).toLocaleString()}`} />}
                {removeOld && <ResultRow label="Old Driveway Removal" value={`$${Number(results.removalCost).toLocaleString()}`} />}
              </div>
              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Driveways should be at least 5&quot; thick for passenger vehicles and 6-8&quot; for heavy trucks. Skimping on thickness leads to cracking within 2-3 years — the most common callback in driveway work.
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
        <h2>How Much Does a Concrete Driveway Cost in 2026?</h2>
        <p>
          A concrete driveway typically costs between <strong>$8-$18 per square foot</strong> installed, with most homeowners paying <strong>$3,000-$10,000</strong> for a standard two-car driveway. The total cost depends on the size, thickness, finish type, and whether the old driveway needs to be removed.
        </p>

        <h3>Concrete Driveway Cost Breakdown</h3>
        <p>
          Understanding where your money goes helps you bid accurately and explain costs to clients. Here&apos;s how a typical driveway project breaks down:
        </p>
        <table>
          <thead>
            <tr><th>Component</th><th>Cost Range</th><th>% of Total</th></tr>
          </thead>
          <tbody>
            <tr><td>Concrete material</td><td>$125-175/yard</td><td>25-35%</td></tr>
            <tr><td>Labor (pour &amp; finish)</td><td>$4-14/sq ft</td><td>35-50%</td></tr>
            <tr><td>Grading &amp; site prep</td><td>$1-3/sq ft</td><td>10-15%</td></tr>
            <tr><td>Old driveway removal</td><td>$2-6/sq ft</td><td>10-20%</td></tr>
            <tr><td>Forming &amp; rebar</td><td>$1-2/sq ft</td><td>5-10%</td></tr>
          </tbody>
        </table>

        <h3>Driveway Thickness Recommendations</h3>
        <p>
          The thickness of your driveway is the single most important factor in its longevity. Here are industry-standard recommendations:
        </p>
        <ul>
          <li><strong>4 inches:</strong> Minimum code requirement. Adequate only for light passenger vehicles on stable soil.</li>
          <li><strong>5 inches:</strong> Recommended standard for residential driveways. Handles SUVs, trucks, and occasional delivery vehicles.</li>
          <li><strong>6 inches:</strong> Best for heavy use — RVs, boats on trailers, or commercial vehicles. Worth the extra $1-2/sqft.</li>
          <li><strong>8 inches:</strong> Commercial grade. Required for heavy trucks and equipment.</li>
        </ul>

        <h3>Concrete Driveway Finish Types</h3>
        <p>
          The finish you choose affects both the appearance and the cost of the driveway:
        </p>
        <ul>
          <li><strong>Broom finish ($6/sqft labor):</strong> The standard textured finish. Provides good traction and is the most affordable option. Most residential driveways use this.</li>
          <li><strong>Exposed aggregate ($10/sqft labor):</strong> The top layer of cement is washed away to reveal the stones underneath. Creates a natural, decorative look with excellent traction.</li>
          <li><strong>Stamped concrete ($14/sqft labor):</strong> Patterns are pressed into wet concrete to mimic brick, stone, or tile. Most expensive but creates a high-end look.</li>
        </ul>

        <h3>Should You Remove the Old Driveway?</h3>
        <p>
          You cannot pour new concrete over an old driveway in most cases. The old surface needs to be removed and the subgrade properly compacted. Removal typically costs <strong>$2-6 per square foot</strong> depending on the thickness and whether rebar is present. Budget $3.50/sqft as a national average.
        </p>
        <p>
          Removal includes breaking up the old concrete, hauling it away (usually 1-2 dumpster loads), and disposing of the debris. Some contractors offer a discount if the old concrete can be recycled as road base.
        </p>

        <h3>How Long Does a Concrete Driveway Last?</h3>
        <p>
          A properly installed concrete driveway lasts <strong>25-50 years</strong> with minimal maintenance. Key factors that affect longevity include proper subgrade compaction, adequate thickness, control joints every 10-12 feet, and sealing every 2-3 years.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
