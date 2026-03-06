"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type BlockSize = "8x8x16" | "8x8x8" | "4x8x16" | "12x8x16";

const BLOCK_DATA: Record<BlockSize, { label: string; sqFtPerBlock: number; pricePerBlock: number; heightIn: number; widthIn: number }> = {
  "8x8x16": { label: "8×8×16 (Standard)", sqFtPerBlock: 0.889, pricePerBlock: 2.25, heightIn: 8, widthIn: 16 },
  "8x8x8": { label: "8×8×8 (Half)", sqFtPerBlock: 0.444, pricePerBlock: 1.75, heightIn: 8, widthIn: 8 },
  "4x8x16": { label: "4×8×16 (Slim)", sqFtPerBlock: 0.889, pricePerBlock: 1.85, heightIn: 8, widthIn: 16 },
  "12x8x16": { label: "12×8×16 (Wide)", sqFtPerBlock: 0.889, pricePerBlock: 3.50, heightIn: 8, widthIn: 16 },
};

const DEFAULTS = {
  mortarJoint: 0.375, // 3/8 inch
  bagsPerBlock: 0.01, // ~3 bags per 100 blocks (type S mortar)
  mortarBagPrice: 12,
  laborPerBlock: 1.50,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function BlockCalculator() {
  const [wallLength, setWallLength] = useState<string>("20");
  const [wallHeight, setWallHeight] = useState<string>("8");
  const [blockSize, setBlockSize] = useState<BlockSize>("8x8x16");
  const [mortarJoint, setMortarJoint] = useState<string>("0.375");
  const [wastePercent, setWastePercent] = useState<string>("5");
  const [numOpenings, setNumOpenings] = useState<string>("0");
  const [openingSqFt, setOpeningSqFt] = useState<string>("0");

  const results = useMemo(() => {
    const l = parseFloat(wallLength) || 0;
    const h = parseFloat(wallHeight) || 0;
    const joint = parseFloat(mortarJoint) || DEFAULTS.mortarJoint;
    const waste = (parseFloat(wastePercent) || 0) / 100;
    const openings = (parseInt(numOpenings) || 0) * (parseFloat(openingSqFt) || 0);

    const block = BLOCK_DATA[blockSize];
    const wallSqFt = (l * h) - openings;

    // Each block + mortar joint covers this area
    const blockHeightFt = (block.heightIn + joint) / 12;
    const blockWidthFt = (block.widthIn + joint) / 12;
    const blockCoverage = blockHeightFt * blockWidthFt; // sq ft per block including mortar

    const baseBlocks = wallSqFt > 0 ? Math.ceil(wallSqFt / blockCoverage) : 0;
    const wasteBlocks = Math.ceil(baseBlocks * waste);
    const totalBlocks = baseBlocks + wasteBlocks;

    const mortarBags = Math.ceil(totalBlocks * DEFAULTS.bagsPerBlock * 3.33); // ~3 bags per 33 blocks
    const blockCost = totalBlocks * block.pricePerBlock;
    const mortarCost = mortarBags * DEFAULTS.mortarBagPrice;
    const laborCost = totalBlocks * DEFAULTS.laborPerBlock;
    const totalCost = blockCost + mortarCost + laborCost;

    // Rows and columns for layout info
    const rows = h > 0 ? Math.ceil((h * 12) / (block.heightIn + joint)) : 0;
    const cols = l > 0 ? Math.ceil((l * 12) / (block.widthIn + joint)) : 0;

    return {
      wallSqFt: wallSqFt.toFixed(0),
      baseBlocks: baseBlocks.toString(),
      wasteBlocks: wasteBlocks.toString(),
      totalBlocks: totalBlocks.toString(),
      rows: rows.toString(),
      cols: cols.toString(),
      mortarBags: mortarBags.toString(),
      blockCost: blockCost.toFixed(0),
      mortarCost: mortarCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: wallSqFt > 0 ? (totalCost / wallSqFt).toFixed(2) : "0.00",
    };
  }, [wallLength, wallHeight, blockSize, mortarJoint, wastePercent, numOpenings, openingSqFt]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/block" className="text-gray-900 font-medium">Concrete Block Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Block Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate the number of concrete blocks (CMU), mortar bags, and total cost for your block wall project. Supports standard, half, slim, and wide blocks.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Wall Dimensions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Wall Length (ft)</label>
                <input type="number" value={wallLength} onChange={(e) => setWallLength(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Wall Height (ft)</label>
                <input type="number" value={wallHeight} onChange={(e) => setWallHeight(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🧱 Block Size</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(Object.entries(BLOCK_DATA) as [BlockSize, typeof BLOCK_DATA[BlockSize]][]).map(([key, data]) => (
                <button key={key} onClick={() => setBlockSize(key)} className={`p-3 rounded-lg border-2 text-left transition ${blockSize === key ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <span className="block font-semibold text-sm">{data.label}</span>
                  <span className="block text-xs text-gray-500">${data.pricePerBlock}/block</span>
                </button>
              ))}
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">⚙️ Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mortar Joint (inches)</label>
                <select value={mortarJoint} onChange={(e) => setMortarJoint(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="0.25">¼&quot; (thin)</option>
                  <option value="0.375">⅜&quot; (standard)</option>
                  <option value="0.5">½&quot; (thick)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Waste Factor (%)</label>
                <input type="number" value={wastePercent} onChange={(e) => setWastePercent(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" max="25" step="1" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-semibold mb-3">Openings (doors, windows)</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Number of Openings</label>
                  <input type="number" value={numOpenings} onChange={(e) => setNumOpenings(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="1" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Avg Opening Size (sq ft each)</label>
                  <input type="number" value={openingSqFt} onChange={(e) => setOpeningSqFt(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Block Estimate</h2>
            <div className="space-y-3">
              <ResultRow label="Wall Area" value={`${results.wallSqFt} sq ft`} />
              <ResultRow label="Rows × Columns" value={`${results.rows} × ${results.cols}`} />

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Blocks Needed" value={results.totalBlocks} highlight />
                <p className="text-xs text-gray-500 mt-1">{results.baseBlocks} blocks + {results.wasteBlocks} waste</p>
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Mortar Bags (80 lb)" value={results.mortarBags} />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Block Cost" value={`$${Number(results.blockCost).toLocaleString()}`} />
                <ResultRow label="Mortar Cost" value={`$${Number(results.mortarCost).toLocaleString()}`} />
                <ResultRow label="Labor Cost" value={`$${Number(results.laborCost).toLocaleString()}`} />
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per sq ft" value={`$${results.costPerSqFt}`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                Always order 5-10% extra blocks. Blocks can crack during transport or cutting, and running short means waiting for a delivery — your crew sits idle at $50+/hour.
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
        <h2>How to Calculate Concrete Blocks for a Wall</h2>
        <p>
          Calculating concrete blocks (CMU — Concrete Masonry Units) is straightforward: divide the wall area by the face area of a single block (including mortar joints), then add waste. A standard 8×8×16 block with ⅜&quot; mortar joints covers approximately <strong>0.89 square feet</strong> of wall face.
        </p>

        <h3>The Block Calculation Formula</h3>
        <p>
          <strong>Number of Blocks = Wall Area (sq ft) ÷ Block Face Area (sq ft) + Waste</strong>
        </p>
        <p>
          For standard 8×8×16 blocks, a common shortcut is <strong>1.125 blocks per square foot</strong> of wall. For a 20×8 wall (160 sq ft), you&apos;d need approximately 180 blocks plus 5-10% waste.
        </p>

        <h3>Concrete Block Sizes and Uses</h3>
        <table>
          <thead>
            <tr><th>Block Size</th><th>Price Each</th><th>Common Use</th></tr>
          </thead>
          <tbody>
            <tr><td>8×8×16 Standard</td><td>$2.00-$3.00</td><td>Most walls, foundations, retaining walls</td></tr>
            <tr><td>8×8×8 Half</td><td>$1.50-$2.50</td><td>Corners, ends, and bond patterns</td></tr>
            <tr><td>4×8×16 Slim</td><td>$1.50-$2.25</td><td>Partition walls, non-load-bearing walls</td></tr>
            <tr><td>12×8×16 Wide</td><td>$3.00-$4.50</td><td>Foundation walls, below-grade walls</td></tr>
          </tbody>
        </table>

        <h3>Mortar Requirements</h3>
        <p>
          A standard 80-lb bag of Type S mortar sets approximately <strong>12-15 standard blocks</strong> depending on joint thickness and the mason&apos;s technique. For a wall of 100 blocks, plan on <strong>7-9 bags of mortar</strong>. Type S mortar is recommended for below-grade and structural walls; Type N is suitable for above-grade, non-load-bearing walls.
        </p>

        <h3>Block Wall Construction Tips</h3>
        <ul>
          <li><strong>Start with a dry layout:</strong> Lay the first course dry to check spacing and minimize cutting</li>
          <li><strong>Use a string line:</strong> Keeps courses level and plumb — the #1 factor in a professional-looking wall</li>
          <li><strong>Stagger joints:</strong> Running bond pattern (offset by half) is standard and provides the strongest wall</li>
          <li><strong>Fill cores:</strong> Every 4-6 feet, fill cores with grout and insert vertical rebar for structural walls</li>
          <li><strong>Bond beam:</strong> Install a bond beam (horizontal rebar + grout-filled course) at the top of every wall</li>
        </ul>

        <h3>Cost to Build a Concrete Block Wall</h3>
        <p>
          Total installed cost for a concrete block wall ranges from <strong>$10-$20 per square foot</strong>, including materials, mortar, labor, and reinforcement. Material costs are typically 30-40% of the total, with labor accounting for the remainder. An experienced mason can lay 100-150 blocks per day.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
