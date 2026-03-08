"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Metadata } from "next";

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

type ColumnShape = "round" | "square";

export default function ColumnCalculator() {
  const [shape, setShape] = useState<ColumnShape>("round");
  const [diameter, setDiameter] = useState<string>("12");
  const [height, setHeight] = useState<string>("8");
  const [numColumns, setNumColumns] = useState<string>("4");
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));
  const [includeWaste, setIncludeWaste] = useState(true);
  const [dimUnit, setDimUnit] = useState<"inches" | "feet">("inches");

  const results = useMemo(() => {
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const count = parseInt(numColumns) || 1;
    const h = parseFloat(height) || 0; // height always in feet
    let d = parseFloat(diameter) || 0;

    // Convert diameter to feet
    const dFt = dimUnit === "inches" ? d / 12 : d;

    let cubicFtPerColumn = 0;
    if (shape === "round") {
      // π × (d/2)² × h
      cubicFtPerColumn = Math.PI * Math.pow(dFt / 2, 2) * h;
    } else {
      // square: side² × h
      cubicFtPerColumn = dFt * dFt * h;
    }

    const cubicYardsPerColumn = cubicFtPerColumn / 27;
    const totalCubicYards = cubicYardsPerColumn * count;
    const wasteYards = includeWaste ? totalCubicYards * DEFAULTS.wasteFactor : 0;
    const totalWithWaste = totalCubicYards + wasteYards;

    const bags80 = Math.ceil(totalWithWaste * DEFAULTS.bagsPerYard80lb);
    const bags60 = Math.ceil(totalWithWaste * DEFAULTS.bagsPerYard60lb);
    const materialCost = totalWithWaste * price;
    const costPerColumn = count > 0 ? materialCost / count : 0;

    return {
      cubicFtPerColumn: cubicFtPerColumn.toFixed(2),
      cubicYardsPerColumn: cubicYardsPerColumn.toFixed(3),
      totalCubicYards: totalCubicYards.toFixed(2),
      totalWithWaste: totalWithWaste.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      bags60: bags60.toString(),
      materialCost: materialCost.toFixed(0),
      costPerColumn: costPerColumn.toFixed(0),
    };
  }, [shape, diameter, height, numColumns, pricePerYard, includeWaste, dimUnit]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/column" className="text-gray-900 font-medium">Column Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Column Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate cubic yards, bags of concrete, and cost for round or square concrete columns. Supports multiple columns with waste factor.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">🏛️ Column Shape</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                onClick={() => setShape("round")}
                className={`p-4 rounded-lg border-2 text-left transition ${shape === "round" ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}
              >
                <span className="block font-semibold">⭕ Round Column</span>
                <span className="block text-xs text-gray-500 mt-1">Sonotubes, pier columns, decorative posts</span>
              </button>
              <button
                onClick={() => setShape("square")}
                className={`p-4 rounded-lg border-2 text-left transition ${shape === "square" ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}
              >
                <span className="block font-semibold">⬜ Square Column</span>
                <span className="block text-xs text-gray-500 mt-1">Structural columns, porch posts, pillars</span>
              </button>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">📐 Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {shape === "round" ? "Diameter" : "Width/Side"}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number" value={diameter} onChange={(e) => setDiameter(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0" step="any"
                  />
                  <select value={dimUnit} onChange={(e) => setDimUnit(e.target.value as "inches" | "feet")}
                    className="border border-gray-300 rounded-lg px-2 py-2 text-sm">
                    <option value="inches">in</option>
                    <option value="feet">ft</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Height (ft)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  min="0" step="any" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Number of Columns</label>
                <input type="number" value={numColumns} onChange={(e) => setNumColumns(e.target.value)}
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

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)}
                className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include 10% waste factor</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Column Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Volume per column" value={`${results.cubicFtPerColumn} cu ft`} />
              <ResultRow label="Yards per column" value={`${results.cubicYardsPerColumn} yd³`} />

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

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per column" value={`$${Number(results.costPerColumn).toLocaleString()}`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                For round columns, Sonotube forms are the easiest option. Brace them plumb and fill slowly — vibrate or tap the form to eliminate air pockets. Pour in 2-foot lifts for tall columns.
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

      {/* Common Sonotube Sizes Reference */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4">📏 Common Sonotube Sizes &amp; Concrete Needed</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Diameter</th>
                <th className="text-center px-4 py-3 font-semibold">4 ft tall</th>
                <th className="text-center px-4 py-3 font-semibold">6 ft tall</th>
                <th className="text-center px-4 py-3 font-semibold">8 ft tall</th>
                <th className="text-left px-4 py-3 font-semibold">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dia: '8"', vals: ["0.012", "0.017", "0.023"], use: "Deck posts, light supports" },
                { dia: '10"', vals: ["0.018", "0.027", "0.036"], use: "Fence posts, small deck piers" },
                { dia: '12"', vals: ["0.026", "0.039", "0.052"], use: "Standard deck piers, porches" },
                { dia: '16"', vals: ["0.046", "0.070", "0.093"], use: "Heavy deck piers, small columns" },
                { dia: '18"', vals: ["0.059", "0.088", "0.117"], use: "Structural columns" },
                { dia: '24"', vals: ["0.105", "0.157", "0.209"], use: "Large structural, decorative" },
              ].map((row) => (
                <tr key={row.dia} className="border-t">
                  <td className="px-4 py-2 font-semibold">{row.dia}</td>
                  <td className="px-4 py-2 text-center font-mono">{row.vals[0]} yd³</td>
                  <td className="px-4 py-2 text-center font-mono">{row.vals[1]} yd³</td>
                  <td className="px-4 py-2 text-center font-mono">{row.vals[2]} yd³</td>
                  <td className="px-4 py-2 text-gray-600">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto mt-16 prose prose-gray">
        <h2>How to Calculate Concrete for Columns</h2>
        <p>
          Whether you&apos;re pouring round Sonotube columns for a deck or square structural columns for a commercial building, getting the concrete quantity right prevents waste and costly short-load fees.
        </p>

        <h3>Round Column Formula</h3>
        <p>
          <strong>Volume = π × (diameter/2)² × height</strong>
        </p>
        <p>
          Convert to cubic yards by dividing by 27 (since there are 27 cubic feet in a cubic yard). Make sure all measurements are in feet before calculating.
        </p>

        <h3>Square Column Formula</h3>
        <p>
          <strong>Volume = side × side × height</strong>
        </p>
        <p>
          Again, all measurements should be in feet, and divide by 27 to get cubic yards.
        </p>

        <h3>Bags vs. Ready-Mix for Columns</h3>
        <p>
          For small jobs (1-3 columns under 12&quot; diameter), bagged concrete is often more practical. For larger columns or more than 4-5 columns, ready-mix delivery is more cost-effective. The break-even point is typically around 1 cubic yard — below that, bags are cheaper; above, ready-mix wins.
        </p>
        <ul>
          <li><strong>80 lb bag</strong> yields ~0.022 cubic yards (0.6 cu ft)</li>
          <li><strong>60 lb bag</strong> yields ~0.017 cubic yards (0.45 cu ft)</li>
          <li><strong>1 cubic yard</strong> = approximately 45 bags (80 lb) or 60 bags (60 lb)</li>
        </ul>

        <h3>Sonotube Tips</h3>
        <ul>
          <li>Brace tubes plumb with 2×4 supports on at least 2 sides</li>
          <li>Set anchor bolts or post brackets while concrete is still wet</li>
          <li>Pour in lifts (2 ft at a time) and vibrate to eliminate voids</li>
          <li>Leave tubes in place for 24-48 hours before stripping</li>
          <li>For below-grade sections, coat the outside with waterproofing</li>
        </ul>

        <h2>Need a Professional Estimate?</h2>
        <p>
          Use our <Link href="/templates">Pro Estimate Template</Link> to turn these calculations into a professional bid sheet with material breakdown, labor costs, and profit margins.
        </p>
      </article>
    </div>
  );
}
