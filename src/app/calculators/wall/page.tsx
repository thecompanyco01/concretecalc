"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const DEFAULTS = {
  concretePricePerYard: 150,
  wasteFactor: 0.1,
  bagsPerYard80lb: 45,
  bagsPerYard60lb: 60,
  rebarPricePerFt: 1.25,
  formCostPerSqFt: 3.50,
};

type WallThickness = "6" | "8" | "10" | "12";

const FROST_DEPTHS: { region: string; depth: string; states: string }[] = [
  { region: "Deep South", depth: '12"', states: "FL, LA, MS, AL, GA, SC" },
  { region: "Mid-South", depth: '18"-24"', states: "TX, AR, TN, NC, VA" },
  { region: "Mid-Atlantic", depth: '30"-36"', states: "MD, DE, NJ, PA, OH, IN" },
  { region: "Northern", depth: '36"-48"', states: "NY, CT, MA, MI, WI, IL, IA" },
  { region: "Far North", depth: '48"-60"', states: "MN, ND, SD, MT, WY, ME, VT, NH" },
  { region: "Mountain/Alaska", depth: '60"-72"', states: "AK, CO (mountain), WY (mountain)" },
];

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function WallCalculator() {
  const [wallLength, setWallLength] = useState<string>("40");
  const [wallHeight, setWallHeight] = useState<string>("8");
  const [thickness, setThickness] = useState<WallThickness>("8");
  const [numWalls, setNumWalls] = useState<string>("1");
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));
  const [includeWaste, setIncludeWaste] = useState(true);
  const [includeRebar, setIncludeRebar] = useState(true);
  const [includeForms, setIncludeForms] = useState(true);

  const results = useMemo(() => {
    const l = parseFloat(wallLength) || 0;
    const h = parseFloat(wallHeight) || 0;
    const t = parseInt(thickness) / 12; // inches to feet
    const count = parseInt(numWalls) || 1;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;

    // Volume per wall
    const cubicFtPerWall = l * h * t;
    const cubicYardsPerWall = cubicFtPerWall / 27;

    // Totals
    const totalCubicYards = cubicYardsPerWall * count;
    const wasteYards = includeWaste ? totalCubicYards * DEFAULTS.wasteFactor : 0;
    const totalWithWaste = totalCubicYards + wasteYards;

    const bags80 = Math.ceil(totalWithWaste * DEFAULTS.bagsPerYard80lb);
    const bags60 = Math.ceil(totalWithWaste * DEFAULTS.bagsPerYard60lb);

    // Form area: both sides of each wall
    const formAreaPerWall = l * h * 2; // both sides
    const totalFormArea = formAreaPerWall * count;
    const formCost = includeForms ? totalFormArea * DEFAULTS.formCostPerSqFt : 0;

    // Rebar: horizontal every 16" OC + vertical every 24" OC
    let rebarLF = 0;
    if (includeRebar) {
      const horizBars = Math.ceil(h / (16 / 12)) + 1; // bars per wall
      const vertBars = Math.ceil(l / (24 / 12)) + 1;
      const horizLF = horizBars * l;
      const vertLF = vertBars * h;
      rebarLF = (horizLF + vertLF) * count;
    }
    const rebarCost = rebarLF * DEFAULTS.rebarPricePerFt;

    const materialCost = totalWithWaste * price;
    const totalCost = materialCost + rebarCost + formCost;

    return {
      cubicFtPerWall: cubicFtPerWall.toFixed(1),
      cubicYardsPerWall: cubicYardsPerWall.toFixed(2),
      totalCubicYards: totalCubicYards.toFixed(2),
      totalWithWaste: totalWithWaste.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      bags60: bags60.toString(),
      totalFormArea: totalFormArea.toFixed(0),
      formCost: formCost.toFixed(0),
      rebarLF: rebarLF.toFixed(0),
      rebarCost: rebarCost.toFixed(0),
      materialCost: materialCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
    };
  }, [wallLength, wallHeight, thickness, numWalls, pricePerYard, includeWaste, includeRebar, includeForms]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/wall" className="text-gray-900 font-medium">Wall Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Wall Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate concrete volume, rebar requirements, and form area for poured concrete walls. Includes frost wall depth reference by region.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Wall Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Wall Length (ft)</label>
                <input type="number" value={wallLength} onChange={(e) => setWallLength(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Wall Height (ft)</label>
                <input type="number" value={wallHeight} onChange={(e) => setWallHeight(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  min="0" step="any" />
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">📏 Wall Thickness</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(["6", "8", "10", "12"] as WallThickness[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setThickness(t)}
                  className={`p-3 rounded-lg border-2 text-center transition ${thickness === t ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <span className="block font-semibold">{t}&quot;</span>
                  <span className="block text-xs text-gray-500">
                    {t === "6" && "Retaining (short)"}
                    {t === "8" && "Standard"}
                    {t === "10" && "Heavy-duty"}
                    {t === "12" && "Commercial"}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Number of Walls</label>
                <input type="number" value={numWalls} onChange={(e) => setNumWalls(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  min="1" step="1" />
              </div>
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

            <h2 className="font-bold text-lg border-b pb-2 pt-2">⚙️ Options</h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include 10% waste factor</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeRebar} onChange={(e) => setIncludeRebar(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include rebar (#4 — horiz 16&quot; OC, vert 24&quot; OC)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={includeForms} onChange={(e) => setIncludeForms(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded" />
                <span className="text-sm">Include form cost ($3.50/SF both sides)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Wall Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Volume per wall" value={`${results.cubicFtPerWall} cu ft`} />
              <ResultRow label="Yards per wall" value={`${results.cubicYardsPerWall} yd³`} />

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Total Concrete" value={`${results.totalWithWaste} yd³`} highlight />
                {includeWaste && (
                  <p className="text-xs text-gray-500 mt-1">
                    {results.totalCubicYards} yd³ + {results.wasteYards} yd³ waste (10%)
                  </p>
                )}
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="80 lb bags" value={results.bags80} />
                <ResultRow label="60 lb bags" value={results.bags60} />
              </div>

              {includeForms && (
                <div className="border-t border-orange-200 pt-3">
                  <ResultRow label="Form Area (both sides)" value={`${results.totalFormArea} SF`} />
                  <ResultRow label="Form Cost" value={`$${Number(results.formCost).toLocaleString()}`} />
                </div>
              )}

              {includeRebar && (
                <div className="border-t border-orange-200 pt-3">
                  <ResultRow label="Rebar Needed" value={`${Number(results.rebarLF).toLocaleString()} LF`} />
                  <ResultRow label="Rebar Cost" value={`$${Number(results.rebarCost).toLocaleString()}`} />
                </div>
              )}

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Concrete Cost" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Poured walls should be braced every 4 feet and poured in continuous lifts. Use a concrete vibrator to consolidate — honeycombing in walls is the #1 callback issue.
              </p>
            </div>

            <div className="mt-4">
              <Link href="/templates" className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Get the Pro Estimate Template — $49
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Frost Wall Depth Reference */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4">❄️ Frost Wall Depth by Region</h2>
        <p className="text-gray-600 mb-4">
          Concrete walls and footings must extend below the frost line to prevent heaving. Here are typical frost depths by region — always verify with your local building department.
        </p>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Region</th>
                <th className="text-center px-4 py-3 font-semibold">Frost Depth</th>
                <th className="text-left px-4 py-3 font-semibold">States</th>
              </tr>
            </thead>
            <tbody>
              {FROST_DEPTHS.map((row) => (
                <tr key={row.region} className="border-t">
                  <td className="px-4 py-2 font-semibold">{row.region}</td>
                  <td className="px-4 py-2 text-center font-mono">{row.depth}</td>
                  <td className="px-4 py-2 text-gray-600">{row.states}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto mt-16 prose prose-gray">
        <h2>How to Calculate Concrete for Walls</h2>
        <p>
          Poured concrete walls are used for foundation walls, retaining walls, basement walls, and structural barriers. The calculation is straightforward but proper reinforcement and formwork planning are essential.
        </p>

        <h3>The Wall Concrete Formula</h3>
        <p>
          <strong>Volume = Length × Height × Thickness ÷ 27</strong>
        </p>
        <p>
          Make sure all measurements are in feet. Wall thickness is typically given in inches, so divide by 12 first.
        </p>

        <h3>Wall Thickness Guidelines</h3>
        <ul>
          <li><strong>6&quot; walls:</strong> Short retaining walls (under 4 ft), non-structural partitions</li>
          <li><strong>8&quot; walls:</strong> Standard foundation walls, basement walls (most common residential)</li>
          <li><strong>10&quot; walls:</strong> Taller retaining walls, heavy lateral loads</li>
          <li><strong>12&quot; walls:</strong> Commercial foundations, tall retaining walls, heavy structural loads</li>
        </ul>

        <h3>Rebar Requirements for Concrete Walls</h3>
        <p>
          Standard residential foundation walls require:
        </p>
        <ul>
          <li><strong>Horizontal rebar:</strong> #4 bars at 16&quot; on center, placed near both faces</li>
          <li><strong>Vertical rebar:</strong> #4 bars at 24&quot; on center minimum</li>
          <li><strong>Corner bars:</strong> L-shaped bars at every corner, extending 24&quot; past the corner</li>
          <li><strong>Dowels:</strong> Vertical rebar extending into the footing (24&quot; minimum lap)</li>
        </ul>

        <h3>Formwork for Poured Walls</h3>
        <p>
          Concrete wall forms must withstand significant lateral pressure. Budget $3-5 per square foot of form contact area (both sides of the wall). Options include:
        </p>
        <ul>
          <li><strong>Plywood forms:</strong> Most common for residential, reusable 3-5 times</li>
          <li><strong>Aluminum forms:</strong> More expensive but reusable 100+ times</li>
          <li><strong>ICF (Insulated Concrete Forms):</strong> Stay in place, provide insulation, $4-8/SF</li>
        </ul>

        <h2>Need a Professional Estimate?</h2>
        <p>
          Use our <Link href="/templates">Pro Estimate Template</Link> to turn these calculations into a professional bid sheet for your wall projects.
        </p>
      </article>
    </div>
  );
}
