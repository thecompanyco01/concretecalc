"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const DEFAULTS = {
  concretePricePerYard: 150,
  laborPerStep: 75,
  wasteFactor: 0.15, // higher for stairs due to complex forming
  idealRiser: 7.5, // inches
  idealTread: 11, // inches
  formingPerStep: 25,
};

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>{label}</span>
      <span className={`font-mono ${highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"}`}>{value}</span>
    </div>
  );
}

export default function StairsCalculator() {
  const [totalRise, setTotalRise] = useState<string>("36");
  const [numSteps, setNumSteps] = useState<string>("5");
  const [stairWidth, setStairWidth] = useState<string>("36");
  const [includeWaste, setIncludeWaste] = useState(true);
  const [includeLanding, setIncludeLanding] = useState(false);
  const [landingDepth, setLandingDepth] = useState<string>("48");
  const [pricePerYard, setPricePerYard] = useState<string>(String(DEFAULTS.concretePricePerYard));

  const results = useMemo(() => {
    const rise = parseFloat(totalRise) || 0; // total rise in inches
    const steps = parseInt(numSteps) || 1;
    const widthIn = parseFloat(stairWidth) || 36;
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const landDepth = parseFloat(landingDepth) || 48;

    // Calculate riser height and tread depth
    const riserHeight = rise / steps;
    // Code: riser + tread = 17-18 inches (comfort rule)
    const treadDepth = Math.max(10, 17.5 - riserHeight);

    // Stair volume: each step is a rectangular solid
    // Step 1 (bottom): width × tread × riser (1 riser high)
    // Step 2: width × tread × riser × 2 (2 risers high)
    // etc. — it's a stepped solid
    const widthFt = widthIn / 12;
    const treadFt = treadDepth / 12;
    const riserFt = riserHeight / 12;

    let totalCubicFt = 0;
    for (let i = 1; i <= steps; i++) {
      // Each step is tread depth wide, stair width wide, and i risers tall
      totalCubicFt += widthFt * treadFt * (riserFt * i);
    }

    // Landing volume
    let landingCubicFt = 0;
    if (includeLanding) {
      landingCubicFt = widthFt * (landDepth / 12) * (rise / 12); // full height of stairs
    }

    const baseCubicFt = totalCubicFt + landingCubicFt;
    const cubicYards = baseCubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;

    const materialCost = totalYards * price;
    const laborCost = steps * DEFAULTS.laborPerStep;
    const formingCost = steps * DEFAULTS.formingPerStep;
    const totalCost = materialCost + laborCost + formingCost;

    // Code compliance check
    const codeCompliant = riserHeight >= 4 && riserHeight <= 7.75 && treadDepth >= 10;
    const riserTreadSum = riserHeight + treadDepth;
    const comfortOk = riserTreadSum >= 17 && riserTreadSum <= 18;

    return {
      riserHeight: riserHeight.toFixed(2),
      treadDepth: treadDepth.toFixed(2),
      cubicFt: baseCubicFt.toFixed(1),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      formingCost: formingCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerStep: steps > 0 ? (totalCost / steps).toFixed(0) : "0",
      codeCompliant,
      comfortOk,
      riserTreadSum: riserTreadSum.toFixed(1),
    };
  }, [totalRise, numSteps, stairWidth, includeWaste, includeLanding, landingDepth, pricePerYard]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/calculators/stairs" className="text-gray-900 font-medium">Stairs Calculator</Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Concrete Stairs Calculator</h1>
          <p className="text-gray-600 mb-8">
            Calculate cubic yards, riser height, tread depth, and total cost for concrete stairs. Includes building code compliance checks.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">📐 Stair Dimensions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Total Rise (inches)</label>
                <input type="number" value={totalRise} onChange={(e) => setTotalRise(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                <p className="text-xs text-gray-400 mt-1">Height from bottom to top</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Steps</label>
                <input type="number" value={numSteps} onChange={(e) => setNumSteps(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="1" step="1" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Stair Width (inches)</label>
                <input type="number" value={stairWidth} onChange={(e) => setStairWidth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                <p className="text-xs text-gray-400 mt-1">Min 36&quot; residential</p>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">🏠 Landing</h2>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeLanding} onChange={(e) => setIncludeLanding(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include top landing</span>
            </label>
            {includeLanding && (
              <div className="max-w-xs">
                <label className="block text-sm font-medium mb-1">Landing Depth (inches)</label>
                <input type="number" value={landingDepth} onChange={(e) => setLandingDepth(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
                <p className="text-xs text-gray-400 mt-1">Min 36&quot; (same as stair width)</p>
              </div>
            )}

            <h2 className="font-bold text-lg border-b pb-2 pt-2">💰 Pricing</h2>
            <div className="max-w-xs">
              <label className="block text-sm font-medium mb-1">Concrete Price (per cubic yard)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">$</span>
                <input type="number" value={pricePerYard} onChange={(e) => setPricePerYard(e.target.value)} className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" min="0" step="any" />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={includeWaste} onChange={(e) => setIncludeWaste(e.target.checked)} className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-sm">Include 15% waste factor (higher for stairs)</span>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">📊 Your Stair Estimate</h2>
            <div className="space-y-3">
              {/* Code compliance badges */}
              <div className="flex gap-2 flex-wrap">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${results.codeCompliant ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {results.codeCompliant ? "✅ Code Compliant" : "⚠️ Check Code"}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${results.comfortOk ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                  {results.comfortOk ? "✅ Comfortable" : "⚠️ Comfort Check"}
                </span>
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Riser Height" value={`${results.riserHeight} in`} highlight />
                <ResultRow label="Tread Depth" value={`${results.treadDepth} in`} highlight />
                <ResultRow label="Riser + Tread" value={`${results.riserTreadSum} in`} />
                <p className="text-xs text-gray-500 mt-1">Ideal: 17-18&quot; (riser + tread comfort rule)</p>
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Concrete Volume" value={`${results.cubicFt} cu ft`} />
                <ResultRow label="Concrete Needed" value={`${results.totalYards} cubic yards`} highlight />
                {includeWaste && <p className="text-xs text-gray-500 mt-1">Includes {results.wasteYards} yd³ waste (15%)</p>}
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow label="Material Cost" value={`$${Number(results.materialCost).toLocaleString()}`} />
                <ResultRow label="Labor Cost" value={`$${Number(results.laborCost).toLocaleString()}`} />
                <ResultRow label="Forming Cost" value={`$${Number(results.formingCost).toLocaleString()}`} />
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow label="Total Estimated Cost" value={`$${Number(results.totalCost).toLocaleString()}`} highlight />
                <ResultRow label="Cost per step" value={`$${results.costPerStep}`} />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">💡 Pro Tip</p>
              <p className="text-orange-700">
                All risers in a flight must be within ⅜&quot; of each other (IRC R311.7.5.1). Inconsistent riser heights are the #1 cause of stair falls and the #1 code violation inspectors catch.
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
        <h2>How to Calculate Concrete for Stairs</h2>
        <p>
          Concrete stairs are more complex to calculate than slabs because they&apos;re a stepped solid. Each step adds volume based on its height, and the total volume grows geometrically. A typical set of 3-5 concrete steps costs <strong>$300-$750</strong> for materials and <strong>$500-$1,500</strong> total with labor.
        </p>

        <h3>Stair Calculation Method</h3>
        <p>
          The volume of concrete stairs is calculated by summing the volume of each step. The bottom step is the thinnest (one riser height), and each subsequent step adds another riser height. The formula accounts for:
        </p>
        <ul>
          <li>The width of each tread (run)</li>
          <li>The height of each riser (rise)</li>
          <li>The width of the staircase</li>
          <li>The solid concrete underneath (not hollow)</li>
        </ul>

        <h3>Building Code Requirements for Stairs (IRC 2021)</h3>
        <p>Concrete stairs must meet these building code requirements:</p>
        <table>
          <thead>
            <tr><th>Requirement</th><th>Residential (IRC)</th></tr>
          </thead>
          <tbody>
            <tr><td>Maximum riser height</td><td>7¾&quot; (7.75&quot;)</td></tr>
            <tr><td>Minimum tread depth</td><td>10&quot;</td></tr>
            <tr><td>Minimum stair width</td><td>36&quot;</td></tr>
            <tr><td>Riser variation (max)</td><td>⅜&quot; between any two risers</td></tr>
            <tr><td>Nosing projection</td><td>¾&quot; to 1¼&quot;</td></tr>
            <tr><td>Headroom</td><td>6&apos;8&quot; minimum</td></tr>
          </tbody>
        </table>

        <h3>The Comfort Rule: Riser + Tread = 17-18&quot;</h3>
        <p>
          The most comfortable stairs follow the rule: <strong>riser height + tread depth = 17 to 18 inches</strong>. This is known as the &quot;comfort rule&quot; or the &quot;2R + T = 25&quot; rule (2 × riser + tread = approximately 25 inches). Stairs outside this range feel either too steep or too shallow.
        </p>

        <h3>Ideal Riser Heights</h3>
        <ul>
          <li><strong>7&quot; - 7.5&quot;:</strong> Most comfortable for residential stairs. This is the sweet spot.</li>
          <li><strong>6&quot; - 7&quot;:</strong> Comfortable but requires more steps (and more concrete)</li>
          <li><strong>7.5&quot; - 7.75&quot;:</strong> Acceptable but at the upper comfort limit</li>
          <li><strong>Over 7.75&quot;:</strong> Code violation. Never do this.</li>
        </ul>

        <h3>Concrete Stair Construction Tips</h3>
        <ul>
          <li><strong>Use quality forms:</strong> Stair forming is the hardest part. Use ¾&quot; plywood and brace heavily — concrete is 150 lbs per cubic foot and will blow out weak forms.</li>
          <li><strong>Rebar the stairs:</strong> Use #4 rebar in a grid pattern running the length and width of the stairs. Tie into the landing and footing at each end.</li>
          <li><strong>Vibrate well:</strong> Stairs have tight corners where air pockets collect. Use a pencil vibrator on every step.</li>
          <li><strong>Finish from top down:</strong> Start at the top step and work down, using a margin trowel on risers and an edger on nosings.</li>
          <li><strong>Non-slip finish:</strong> Always broom-finish outdoor stairs for traction. A smooth trowel finish on outdoor stairs is a liability issue.</li>
        </ul>

        <h3>Concrete Stair Costs by Size</h3>
        <table>
          <thead>
            <tr><th>Number of Steps</th><th>Material</th><th>Total Installed</th></tr>
          </thead>
          <tbody>
            <tr><td>2-3 steps</td><td>$100-$200</td><td>$300-$600</td></tr>
            <tr><td>4-5 steps</td><td>$200-$400</td><td>$500-$1,000</td></tr>
            <tr><td>6-8 steps</td><td>$350-$600</td><td>$800-$1,500</td></tr>
            <tr><td>10+ steps</td><td>$500+</td><td>$1,200-$2,500+</td></tr>
          </tbody>
        </table>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our <Link href="/templates">Pro Estimate Template</Link> turns those numbers into a professional bid sheet you can hand to clients. Includes material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}
