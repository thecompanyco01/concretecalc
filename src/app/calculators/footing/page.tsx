"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type FootingType = "continuous" | "pier";

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

export default function FootingCalculator() {
  const [footingType, setFootingType] = useState<FootingType>("continuous");
  const [includeWaste, setIncludeWaste] = useState(true);
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));

  // Continuous footing inputs
  const [contWidth, setContWidth] = useState<string>("18");
  const [contDepth, setContDepth] = useState<string>("12");
  const [contLength, setContLength] = useState<string>("100");

  // Pier footing inputs
  const [pierDiameter, setPierDiameter] = useState<string>("12");
  const [pierDepth, setPierDepth] = useState<string>("36");
  const [pierCount, setPierCount] = useState<string>("8");

  const results = useMemo(() => {
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    let cubicFt = 0;

    if (footingType === "continuous") {
      const w = (parseFloat(contWidth) || 0) / 12; // inches to feet
      const d = (parseFloat(contDepth) || 0) / 12;
      const l = parseFloat(contLength) || 0;
      cubicFt = w * d * l;
    } else {
      const diameter = (parseFloat(pierDiameter) || 0) / 12; // inches to feet
      const depth = (parseFloat(pierDepth) || 0) / 12;
      const count = parseInt(pierCount) || 0;
      const radius = diameter / 2;
      cubicFt = Math.PI * radius * radius * depth * count;
    }

    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;
    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);
    const bags60 = Math.ceil(totalYards * DEFAULTS.bagsPerYard60lb);
    const materialCost = totalYards * price;

    return {
      cubicFt: cubicFt.toFixed(1),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      bags60: bags60.toString(),
      materialCost: materialCost.toFixed(0),
    };
  }, [footingType, contWidth, contDepth, contLength, pierDiameter, pierDepth, pierCount, includeWaste, pricePerYard]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/footing" className="text-gray-900 font-medium">Footing Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Footing Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate concrete needed for continuous footings and pier footings. Get cubic yards, bag count, and material cost.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">🏗️ Footing Type</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <button onClick={() => setFootingType("continuous")} className={`p-4 rounded-lg border-2 text-left transition ${footingType === "continuous" ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                <span className="block font-semibold">Continuous Footing</span>
                <span className="block text-xs text-gray-500 mt-1">Runs along the entire wall — width × depth × length</span>
              </button>
              <button onClick={() => setFootingType("pier")} className={`p-4 rounded-lg border-2 text-left transition ${footingType === "pier" ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                <span className="block font-semibold">Pier Footing</span>
                <span className="block text-xs text-gray-500 mt-1">Round columns — diameter × depth × count</span>
              </button>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">📏 Dimensions</h2>

            {footingType === "continuous" ? (
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Width (inches)</label>
                  <input type="number" value={contWidth} onChange={(e) => setContWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Depth (inches)</label>
                  <input type="number" value={contDepth} onChange={(e) => setContDepth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Total Length (feet)</label>
                  <input type="number" value={contLength} onChange={(e) => setContLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Diameter (inches)</label>
                  <input type="number" value={pierDiameter} onChange={(e) => setPierDiameter(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Depth (inches)</label>
                  <input type="number" value={pierDepth} onChange={(e) => setPierDepth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Number of Piers</label>
                  <input type="number" value={pierCount} onChange={(e) => setPierCount(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="1" step="1" />
                </div>
              </div>
            )}

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
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Footing Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Footing Type" value={footingType === "continuous" ? "Continuous" : `${pierCount} Piers`} />
              <ResultRow label="Volume" value={`${results.cubicFt} cu ft`} />
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} highlight />
                {includeWaste && <p className="text-xs text-gray-500 mt-1">Includes {results.wasteYards} yd³ waste ({results.cubicYards} yd³ base + 10%)</p>}
              </div>
              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="80 lb bags" value={results.bags80} />
                <ResultRow label="60 lb bags" value={results.bags60} />
              </div>
              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} highlight />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Always check your local frost line depth before setting footing depth. Footings must extend below the frost line to prevent heaving. In northern states, this can be 36-48 inches deep.
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
        <h2>How to Calculate Concrete for Footings</h2>
        <p>
          Footings are the foundation of any structure, transferring the building&apos;s load to the ground. Getting the concrete volume right is critical — you can&apos;t add concrete to a footing after it&apos;s poured without compromising structural integrity.
        </p>

        <h3>Continuous Footing Formula</h3>
        <p>
          <strong>Cubic Yards = (Width in. × Depth in. × Length ft) ÷ (12 × 12 × 27)</strong>
        </p>
        <p>
          Continuous footings run along the length of a wall, spreading the load evenly. They&apos;re the most common footing type for residential construction. A typical residential continuous footing is 16-24 inches wide and 8-12 inches deep.
        </p>

        <h3>Pier Footing Formula (Round)</h3>
        <p>
          <strong>Cubic Yards = π × (Diameter/2)² × Depth × Number of Piers ÷ 27</strong>
        </p>
        <p>
          Pier footings (also called column footings) are round holes filled with concrete. They&apos;re used for deck posts, fence posts, pergolas, and structures that don&apos;t need continuous support. Common sizes are 8&quot;, 10&quot;, 12&quot;, and 18&quot; diameter.
        </p>

        <h3>Standard Footing Sizes by Application</h3>
        <table>
          <thead>
            <tr><th>Application</th><th>Width</th><th>Depth</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Residential wall</td><td>16-20&quot;</td><td>8-12&quot;</td><td>Most common residential footing</td></tr>
            <tr><td>Load-bearing wall</td><td>20-24&quot;</td><td>10-12&quot;</td><td>For walls supporting upper floors</td></tr>
            <tr><td>Column/pier</td><td>24-36&quot; dia</td><td>12-24&quot;</td><td>Point loads from columns</td></tr>
            <tr><td>Frost wall (cold climate)</td><td>16-20&quot;</td><td>36-48&quot;</td><td>Must extend below frost line</td></tr>
            <tr><td>Deck pier</td><td>8-12&quot; dia</td><td>36-48&quot;</td><td>Depth depends on frost line</td></tr>
          </tbody>
        </table>

        <h3>Frost Line Depths by Region</h3>
        <p>
          Building codes require footings to extend below the frost line to prevent heaving. The frost line varies dramatically by location:
        </p>
        <table>
          <thead>
            <tr><th>Region</th><th>Frost Line Depth</th></tr>
          </thead>
          <tbody>
            <tr><td>Southern US (FL, TX, AZ)</td><td>0-12&quot;</td></tr>
            <tr><td>Mid-Atlantic (VA, NC, TN)</td><td>12-24&quot;</td></tr>
            <tr><td>Midwest (OH, IN, IL)</td><td>32-42&quot;</td></tr>
            <tr><td>Northern US (MN, WI, MI)</td><td>42-60&quot;</td></tr>
            <tr><td>New England (ME, VT, NH)</td><td>48-60&quot;</td></tr>
          </tbody>
        </table>

        <h3>Building Code Requirements</h3>
        <p>
          Always check local building codes before starting footing work. Key code requirements typically include:
        </p>
        <ul>
          <li><strong>Minimum width:</strong> Footings must be at least twice the width of the wall they support (IRC R403.1)</li>
          <li><strong>Minimum depth:</strong> At least 12 inches below undisturbed ground surface</li>
          <li><strong>Frost protection:</strong> Must extend below local frost line</li>
          <li><strong>Concrete strength:</strong> Minimum 2,500 PSI (3,000 PSI recommended)</li>
          <li><strong>Rebar:</strong> Most codes require at least 2 continuous #4 bars in residential footings</li>
        </ul>

        <h3>Footing Reinforcement</h3>
        <p>
          Footings require reinforcing steel (rebar) to handle tensile forces. A typical continuous footing uses 2-3 horizontal #4 or #5 bars running the full length, with overlap splices of 24-30 bar diameters. Pier footings should have at least one vertical #4 bar extending into the column or post connection above.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
