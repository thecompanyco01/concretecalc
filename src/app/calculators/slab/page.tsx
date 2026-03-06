"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Default pricing (national averages, 2026)
const DEFAULTS = {
  concretePricePerYard: 150,
  laborPricePerSqFt: 6,
  wasteFactor: 0.1, // 10%
  bagsPerYard80lb: 45,
  bagsPerYard60lb: 60,
  rebarSpacing: 18, // inches
  rebarPricePerFt: 1.25,
};

type Unit = "feet" | "inches" | "meters";

function toFeet(value: number, unit: Unit): number {
  if (unit === "inches") return value / 12;
  if (unit === "meters") return value * 3.28084;
  return value;
}

export default function SlabCalculator() {
  const [length, setLength] = useState<string>("20");
  const [width, setWidth] = useState<string>("20");
  const [thickness, setThickness] = useState<string>("4");
  const [dimUnit, setDimUnit] = useState<Unit>("feet");
  const [thickUnit, setThickUnit] = useState<Unit>("inches");
  const [pricePerYard, setPricePerYard] = useState<string>(
    String(DEFAULTS.concretePricePerYard)
  );
  const [laborPerSqFt, setLaborPerSqFt] = useState<string>(
    String(DEFAULTS.laborPricePerSqFt)
  );
  const [includeRebar, setIncludeRebar] = useState(true);
  const [includeWaste, setIncludeWaste] = useState(true);

  const results = useMemo(() => {
    const l = toFeet(parseFloat(length) || 0, dimUnit);
    const w = toFeet(parseFloat(width) || 0, dimUnit);
    const t = toFeet(parseFloat(thickness) || 0, thickUnit);
    const price = parseFloat(pricePerYard) || DEFAULTS.concretePricePerYard;
    const labor = parseFloat(laborPerSqFt) || DEFAULTS.laborPricePerSqFt;

    const sqFt = l * w;
    const cubicFt = sqFt * t;
    const cubicYards = cubicFt / 27;
    const wasteYards = includeWaste ? cubicYards * DEFAULTS.wasteFactor : 0;
    const totalYards = cubicYards + wasteYards;

    const bags80 = Math.ceil(totalYards * DEFAULTS.bagsPerYard80lb);
    const bags60 = Math.ceil(totalYards * DEFAULTS.bagsPerYard60lb);

    const materialCost = totalYards * price;
    const laborCost = sqFt * labor;

    // Rebar calculation (grid pattern)
    let rebarFt = 0;
    let rebarCost = 0;
    if (includeRebar && l > 0 && w > 0) {
      const spacingFt = DEFAULTS.rebarSpacing / 12;
      const lengthBars = Math.ceil(w / spacingFt) + 1;
      const widthBars = Math.ceil(l / spacingFt) + 1;
      rebarFt = lengthBars * l + widthBars * w;
      rebarCost = rebarFt * DEFAULTS.rebarPricePerFt;
    }

    const totalCost = materialCost + laborCost + rebarCost;

    return {
      sqFt: sqFt.toFixed(0),
      cubicFt: cubicFt.toFixed(1),
      cubicYards: cubicYards.toFixed(2),
      totalYards: totalYards.toFixed(2),
      wasteYards: wasteYards.toFixed(2),
      bags80: bags80.toString(),
      bags60: bags60.toString(),
      materialCost: materialCost.toFixed(0),
      laborCost: laborCost.toFixed(0),
      rebarFt: rebarFt.toFixed(0),
      rebarCost: rebarCost.toFixed(0),
      totalCost: totalCost.toFixed(0),
      costPerSqFt: sqFt > 0 ? (totalCost / sqFt).toFixed(2) : "0.00",
    };
  }, [
    length,
    width,
    thickness,
    dimUnit,
    thickUnit,
    pricePerYard,
    laborPerSqFt,
    includeRebar,
    includeWaste,
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/calculators/slab" className="text-gray-900 font-medium">
          Concrete Slab Calculator
        </Link>
      </nav>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Calculator Form — 3 columns */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Concrete Slab Calculator
          </h1>
          <p className="text-gray-600 mb-8">
            Calculate cubic yards, bags, and total cost for concrete slab
            projects. Built for contractors — includes waste factor, rebar, and
            labor estimates.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
            <h2 className="font-bold text-lg border-b pb-2">
              📐 Slab Dimensions
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Length
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    step="any"
                  />
                  <select
                    value={dimUnit}
                    onChange={(e) => setDimUnit(e.target.value as Unit)}
                    className="border border-gray-300 rounded-lg px-2 py-2 text-sm"
                  >
                    <option value="feet">ft</option>
                    <option value="inches">in</option>
                    <option value="meters">m</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Width</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    step="any"
                  />
                  <span className="border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-500">
                    {dimUnit}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Thickness
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    step="any"
                  />
                  <select
                    value={thickUnit}
                    onChange={(e) => setThickUnit(e.target.value as Unit)}
                    className="border border-gray-300 rounded-lg px-2 py-2 text-sm"
                  >
                    <option value="inches">in</option>
                    <option value="feet">ft</option>
                    <option value="meters">m</option>
                  </select>
                </div>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">
              💰 Pricing
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Concrete Price (per cubic yard)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    value={pricePerYard}
                    onChange={(e) => setPricePerYard(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    step="any"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Labor Cost (per sq ft)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    value={laborPerSqFt}
                    onChange={(e) => setLaborPerSqFt(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    step="any"
                  />
                </div>
              </div>
            </div>

            <h2 className="font-bold text-lg border-b pb-2 pt-2">
              ⚙️ Options
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeWaste}
                  onChange={(e) => setIncludeWaste(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <span className="text-sm">
                  Include 10% waste factor (recommended)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeRebar}
                  onChange={(e) => setIncludeRebar(e.target.checked)}
                  className="w-4 h-4 text-orange-600 rounded"
                />
                <span className="text-sm">Include rebar (#4 @ 18&quot; OC)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results — 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 sticky top-20">
            <h2 className="font-bold text-lg mb-4 text-orange-800">
              📊 Your Estimate
            </h2>

            <div className="space-y-3">
              <ResultRow label="Area" value={`${results.sqFt} sq ft`} />
              <ResultRow
                label="Volume"
                value={`${results.cubicFt} cu ft`}
              />

              <div className="border-t border-orange-200 pt-3">
                <ResultRow
                  label="Concrete Needed"
                  value={`${results.totalYards} cubic yards`}
                  highlight
                />
                {includeWaste && (
                  <p className="text-xs text-gray-500 mt-1">
                    Includes {results.wasteYards} yd³ waste (
                    {results.cubicYards} yd³ base + 10%)
                  </p>
                )}
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow
                  label="80 lb bags"
                  value={results.bags80}
                />
                <ResultRow
                  label="60 lb bags"
                  value={results.bags60}
                />
              </div>

              <div className="border-t border-orange-200 pt-3">
                <ResultRow
                  label="Material Cost"
                  value={`$${Number(results.materialCost).toLocaleString()}`}
                />
                <ResultRow
                  label="Labor Cost"
                  value={`$${Number(results.laborCost).toLocaleString()}`}
                />
                {includeRebar && (
                  <ResultRow
                    label={`Rebar (${results.rebarFt} ft)`}
                    value={`$${Number(results.rebarCost).toLocaleString()}`}
                  />
                )}
              </div>

              <div className="border-t-2 border-orange-400 pt-3">
                <ResultRow
                  label="Total Estimated Cost"
                  value={`$${Number(results.totalCost).toLocaleString()}`}
                  highlight
                />
                <ResultRow
                  label="Cost per sq ft"
                  value={`$${results.costPerSqFt}`}
                />
              </div>
            </div>

            <div className="mt-6 bg-orange-100 rounded-lg p-4 text-sm">
              <p className="font-semibold text-orange-800 mb-1">
                💡 Pro Tip
              </p>
              <p className="text-orange-700">
                Always order 10% extra concrete. Running short on a pour is the
                most expensive mistake in concrete work — a short load delivery
                can cost $200+ and delays weaken the slab.
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/templates"
                className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition"
              >
                Get the Pro Estimate Template — $49
              </Link>
              <p className="text-xs text-gray-500 text-center mt-2">
                Turn this calculator into a professional bid sheet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <article className="max-w-3xl mx-auto mt-16 prose prose-gray">
        <h2>How to Calculate Concrete for a Slab</h2>
        <p>
          Calculating concrete for a slab is straightforward but getting it
          wrong is expensive. Here&apos;s the formula every concrete contractor
          should know:
        </p>

        <h3>The Formula</h3>
        <p>
          <strong>
            Cubic Yards = (Length × Width × Thickness) ÷ 27
          </strong>
        </p>
        <p>
          All measurements must be in feet. If your thickness is in inches,
          divide by 12 first. One cubic yard equals 27 cubic feet.
        </p>

        <h3>Example: 20×20 Slab at 4 Inches</h3>
        <ul>
          <li>Length: 20 ft</li>
          <li>Width: 20 ft</li>
          <li>Thickness: 4 in = 0.333 ft</li>
          <li>Volume: 20 × 20 × 0.333 = 133.3 cu ft</li>
          <li>Cubic yards: 133.3 ÷ 27 = <strong>4.94 yards</strong></li>
          <li>With 10% waste: <strong>5.43 yards</strong></li>
        </ul>

        <h3>Why 10% Waste Factor?</h3>
        <p>
          In practice, you&apos;ll always use more concrete than the theoretical
          calculation. Reasons include:
        </p>
        <ul>
          <li>Uneven subgrade — the ground is never perfectly flat</li>
          <li>Form deflection — forms bow slightly under pressure</li>
          <li>Spillage during pour</li>
          <li>Over-excavation</li>
        </ul>
        <p>
          Professional contractors always order 10% extra. Running short during
          a pour creates a cold joint (the #1 structural weakness in concrete
          slabs) and requires an expensive short load delivery.
        </p>

        <h3>Concrete Slab Thickness Guide</h3>
        <table>
          <thead>
            <tr>
              <th>Application</th>
              <th>Minimum Thickness</th>
              <th>Recommended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sidewalk</td>
              <td>4&quot;</td>
              <td>4&quot;</td>
            </tr>
            <tr>
              <td>Patio</td>
              <td>4&quot;</td>
              <td>4-6&quot;</td>
            </tr>
            <tr>
              <td>Residential driveway</td>
              <td>4&quot;</td>
              <td>5-6&quot;</td>
            </tr>
            <tr>
              <td>Garage floor</td>
              <td>4&quot;</td>
              <td>6&quot;</td>
            </tr>
            <tr>
              <td>Commercial parking</td>
              <td>6&quot;</td>
              <td>6-8&quot;</td>
            </tr>
          </tbody>
        </table>

        <h3>How Much Does Concrete Cost?</h3>
        <p>
          As of 2026, ready-mix concrete costs between{" "}
          <strong>$125-$175 per cubic yard</strong> depending on your region,
          mix design, and delivery distance. Short loads (under 5 yards)
          typically incur an additional fee of $50-$100.
        </p>

        <h3>Rebar Requirements for Concrete Slabs</h3>
        <p>
          Most residential slabs use #4 rebar (½&quot; diameter) placed in a grid
          pattern at 18&quot; on center. Rebar provides tensile strength that
          concrete alone lacks, preventing cracks from spreading and
          maintaining structural integrity.
        </p>

        <h2>Need a Professional Estimate Template?</h2>
        <p>
          This calculator gives you the numbers. Our{" "}
          <Link href="/templates">Pro Estimate Template</Link> turns those
          numbers into a professional bid sheet you can hand to clients. Includes
          material breakdown, labor estimates, profit margins, and payment terms.
        </p>
      </article>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "font-bold" : "text-gray-600"}`}>
        {label}
      </span>
      <span
        className={`font-mono ${
          highlight ? "text-lg font-extrabold text-orange-700" : "font-semibold"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
