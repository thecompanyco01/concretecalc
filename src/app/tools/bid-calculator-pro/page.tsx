"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";

export default function BidCalculatorPro() {
  // Company branding
  const [companyName, setCompanyName] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  // Client info
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectAddress, setProjectAddress] = useState("");

  // Project details
  const [projectType, setProjectType] = useState("slab");
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("20");
  const [thickness, setThickness] = useState("4");

  // Pricing
  const [concretePricePerYard, setConcretePricePerYard] = useState("150");
  const [laborRate, setLaborRate] = useState("55");
  const [materialMarkup, setMaterialMarkup] = useState("15");
  const [profitMargin, setProfitMargin] = useState("20");
  const [overheadPercent, setOverheadPercent] = useState("10");

  // Options
  const [includeRebar, setIncludeRebar] = useState(true);
  const [includeGravelBase, setIncludeGravelBase] = useState(true);
  const [includeFormwork, setIncludeFormwork] = useState(true);
  const [includeSealer, setIncludeSealer] = useState(false);
  const [includeDemo, setIncludeDemo] = useState(false);
  const [finishType, setFinishType] = useState("broom");

  const [showBidSummary, setShowBidSummary] = useState(false);
  const bidRef = useRef<HTMLDivElement>(null);

  const projectTypes: Record<string, string> = {
    slab: "Concrete Slab",
    driveway: "Driveway",
    patio: "Patio",
    sidewalk: "Sidewalk",
    foundation: "Foundation",
    garage: "Garage Floor",
    stamped: "Stamped Concrete",
    steps: "Steps / Stairs",
  };

  const finishTypes: Record<string, { name: string; multiplier: number }> = {
    broom: { name: "Broom Finish", multiplier: 1.0 },
    smooth: { name: "Smooth Trowel", multiplier: 1.05 },
    exposed: { name: "Exposed Aggregate", multiplier: 1.25 },
    stamped: { name: "Stamped / Decorative", multiplier: 1.6 },
    colored: { name: "Colored Concrete", multiplier: 1.15 },
    polished: { name: "Polished", multiplier: 1.4 },
  };

  const results = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const t = (parseFloat(thickness) || 4) / 12;
    const sqFt = l * w;
    const cubicFt = sqFt * t;
    const cubicYards = cubicFt / 27;
    const wasteYards = cubicYards * 0.1;
    const totalYards = cubicYards + wasteYards;

    const concretePrice = parseFloat(concretePricePerYard) || 150;
    const labor = parseFloat(laborRate) || 55;
    const markup = (parseFloat(materialMarkup) || 15) / 100;
    const profit = (parseFloat(profitMargin) || 20) / 100;
    const overhead = (parseFloat(overheadPercent) || 10) / 100;
    const finishMult = finishTypes[finishType]?.multiplier || 1;

    // Materials
    const concreteCost = totalYards * concretePrice;
    const gravelCost = includeGravelBase ? sqFt * 0.65 : 0;
    const rebarCost = includeRebar ? sqFt * 0.85 : 0;
    const formworkCost = includeFormwork ? (2 * (l + w)) * 8 : 0;
    const sealerCost = includeSealer ? sqFt * 0.35 : 0;
    const demoCost = includeDemo ? sqFt * 2.5 : 0;
    const miscMaterials = sqFt * 0.25; // stakes, ties, curing compound, etc.

    const rawMaterials = concreteCost + gravelCost + rebarCost + formworkCost + sealerCost + miscMaterials;
    const materialsWithMarkup = rawMaterials * (1 + markup);

    // Labor (hours estimates based on sq ft)
    const prepHours = sqFt / 80; // site prep
    const formHours = includeFormwork ? (2 * (l + w)) / 15 : 0;
    const pourHours = sqFt / 50;
    const finishHours = (sqFt / 60) * finishMult;
    const cleanupHours = sqFt / 150;
    const demoHours = includeDemo ? sqFt / 40 : 0;
    const totalLaborHours = prepHours + formHours + pourHours + finishHours + cleanupHours + demoHours;
    const laborCost = totalLaborHours * labor;

    // Equipment
    const equipmentCost = sqFt > 200 ? 450 + (sqFt > 500 ? 350 : 0) : 200;

    const subtotal = materialsWithMarkup + laborCost + equipmentCost + demoCost;
    const overheadCost = subtotal * overhead;
    const preProfit = subtotal + overheadCost;
    const profitAmount = preProfit * profit;
    const grandTotal = preProfit + profitAmount;

    const pricePerSqFt = sqFt > 0 ? grandTotal / sqFt : 0;

    return {
      sqFt,
      cubicYards: totalYards,
      rawMaterials,
      materialsWithMarkup,
      laborHours: totalLaborHours,
      laborCost,
      equipmentCost,
      demoCost,
      subtotal,
      overheadCost,
      profitAmount,
      grandTotal,
      pricePerSqFt,
      concreteCost,
      gravelCost,
      rebarCost,
      formworkCost,
      sealerCost,
    };
  }, [length, width, thickness, concretePricePerYard, laborRate, materialMarkup, profitMargin, overheadPercent, includeRebar, includeGravelBase, includeFormwork, includeSealer, includeDemo, finishType]);

  const fmt = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handlePrint = () => {
    setShowBidSummary(true);
    setTimeout(() => window.print(), 300);
  };

  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <style jsx global>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; }
          .bid-summary { break-inside: avoid; }
        }
        .print-only { display: none; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="no-print mb-8">
          <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
            ← Back to Templates
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-3">
            Pro Bid Calculator
          </h1>
          <p className="text-slate-500 mt-2">
            Generate professional bids in minutes. Customize rates, add your branding, and export as PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-2 space-y-6 no-print">
            {/* Company Branding */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                🏢 Your Company Info
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Phone" value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Email" value={companyEmail} onChange={e => setCompanyEmail(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Address" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="License #" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
              </div>
            </div>

            {/* Client Info */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                👤 Client Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Client Name" value={clientName} onChange={e => setClientName(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Client Phone" value={clientPhone} onChange={e => setClientPhone(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Client Email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Project Address" value={projectAddress} onChange={e => setProjectAddress(e.target.value)} />
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                📐 Project Details
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={projectType} onChange={e => setProjectType(e.target.value)}>
                  {Object.entries(projectTypes).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Length (ft)</label>
                  <input type="number" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={length} onChange={e => setLength(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Width (ft)</label>
                  <input type="number" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={width} onChange={e => setWidth(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Thickness (in)</label>
                  <input type="number" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={thickness} onChange={e => setThickness(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Finish Type</label>
                <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={finishType} onChange={e => setFinishType(e.target.value)}>
                  {Object.entries(finishTypes).map(([k, v]) => (
                    <option key={k} value={k}>{v.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Options */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                ⚙️ Project Options
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { label: "Rebar / Wire Mesh", checked: includeRebar, set: setIncludeRebar },
                  { label: "Gravel Base", checked: includeGravelBase, set: setIncludeGravelBase },
                  { label: "Formwork", checked: includeFormwork, set: setIncludeFormwork },
                  { label: "Sealer Application", checked: includeSealer, set: setIncludeSealer },
                  { label: "Demo / Removal", checked: includeDemo, set: setIncludeDemo },
                ].map(opt => (
                  <label key={opt.label} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                    <input type="checkbox" checked={opt.checked} onChange={e => opt.set(e.target.checked)} className="rounded border-slate-300 text-amber-500" />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Pricing Controls */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                💰 Pricing & Margins
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Concrete $/yard</label>
                  <input type="number" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={concretePricePerYard} onChange={e => setConcretePricePerYard(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Labor Rate $/hour</label>
                  <input type="number" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={laborRate} onChange={e => setLaborRate(e.target.value)} />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                    <span>Material Markup</span>
                    <span className="text-amber-600 font-bold">{materialMarkup}%</span>
                  </label>
                  <input type="range" min="0" max="50" value={materialMarkup} onChange={e => setMaterialMarkup(e.target.value)} className="w-full accent-amber-500" />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                    <span>Overhead</span>
                    <span className="text-amber-600 font-bold">{overheadPercent}%</span>
                  </label>
                  <input type="range" min="0" max="30" value={overheadPercent} onChange={e => setOverheadPercent(e.target.value)} className="w-full accent-amber-500" />
                </div>
                <div>
                  <label className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                    <span>Profit Margin</span>
                    <span className="text-green-600 font-bold">{profitMargin}%</span>
                  </label>
                  <input type="range" min="5" max="50" value={profitMargin} onChange={e => setProfitMargin(e.target.value)} className="w-full accent-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Results */}
          <div className="no-print">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-20">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Bid Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Area</span>
                  <span className="font-medium">{results.sqFt.toFixed(0)} sq ft</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Concrete Needed</span>
                  <span className="font-medium">{results.cubicYards.toFixed(1)} yards</span>
                </div>
                <hr className="border-slate-200" />
                <div className="flex justify-between text-slate-600">
                  <span>Materials (w/ markup)</span>
                  <span className="font-medium">{fmt(results.materialsWithMarkup)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Labor ({results.laborHours.toFixed(1)} hrs)</span>
                  <span className="font-medium">{fmt(results.laborCost)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Equipment</span>
                  <span className="font-medium">{fmt(results.equipmentCost)}</span>
                </div>
                {includeDemo && (
                  <div className="flex justify-between text-slate-600">
                    <span>Demo / Removal</span>
                    <span className="font-medium">{fmt(results.demoCost)}</span>
                  </div>
                )}
                <hr className="border-slate-200" />
                <div className="flex justify-between text-slate-600">
                  <span>Overhead ({overheadPercent}%)</span>
                  <span className="font-medium">{fmt(results.overheadCost)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Profit ({profitMargin}%)</span>
                  <span className="font-bold">{fmt(results.profitAmount)}</span>
                </div>
                <hr className="border-slate-200" />
                <div className="flex justify-between text-xl font-extrabold text-slate-900">
                  <span>Total Bid</span>
                  <span>{fmt(results.grandTotal)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Per sq ft</span>
                  <span>{fmt(results.pricePerSqFt)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={handlePrint}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-lg transition text-sm"
                >
                  📄 Export as PDF
                </button>
                <button
                  onClick={() => setShowBidSummary(!showBidSummary)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-lg transition text-sm"
                >
                  {showBidSummary ? "Hide" : "Preview"} Client Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Printable Bid Summary */}
        {showBidSummary && (
          <div ref={bidRef} className="mt-8 bg-white rounded-xl border border-slate-200 p-8 bid-summary print-only lg:block">
            <div className="border-b-2 border-slate-900 pb-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{companyName || "Your Company Name"}</h2>
                  {companyAddress && <p className="text-slate-600 text-sm">{companyAddress}</p>}
                  {companyPhone && <p className="text-slate-600 text-sm">{companyPhone}</p>}
                  {companyEmail && <p className="text-slate-600 text-sm">{companyEmail}</p>}
                  {licenseNumber && <p className="text-slate-600 text-sm">License: {licenseNumber}</p>}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold text-slate-900">ESTIMATE</h3>
                  <p className="text-slate-600 text-sm">Date: {today}</p>
                  <p className="text-slate-600 text-sm">Valid for 30 days</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2">Client</h4>
                <p className="text-slate-700">{clientName || "—"}</p>
                <p className="text-slate-600 text-sm">{clientPhone}</p>
                <p className="text-slate-600 text-sm">{clientEmail}</p>
                <p className="text-slate-600 text-sm">{projectAddress}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2">Project</h4>
                <p className="text-slate-700">{projectTypes[projectType]} — {finishTypes[finishType]?.name}</p>
                <p className="text-slate-600 text-sm">{length}&apos; × {width}&apos; × {thickness}&quot; thick</p>
                <p className="text-slate-600 text-sm">{results.sqFt.toFixed(0)} sq ft • {results.cubicYards.toFixed(1)} cubic yards</p>
              </div>
            </div>

            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left py-2 px-3 font-semibold">Description</th>
                  <th className="text-right py-2 px-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-2 px-3">Materials (concrete, gravel, rebar, forms, misc.)</td>
                  <td className="py-2 px-3 text-right">{fmt(results.materialsWithMarkup)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 px-3">Labor ({results.laborHours.toFixed(1)} hours)</td>
                  <td className="py-2 px-3 text-right">{fmt(results.laborCost)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 px-3">Equipment</td>
                  <td className="py-2 px-3 text-right">{fmt(results.equipmentCost)}</td>
                </tr>
                {includeDemo && (
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-3">Demo / Removal</td>
                    <td className="py-2 px-3 text-right">{fmt(results.demoCost)}</td>
                  </tr>
                )}
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="py-2 px-3 font-medium">Subtotal</td>
                  <td className="py-2 px-3 text-right font-medium">{fmt(results.subtotal)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 px-3">Overhead & administration</td>
                  <td className="py-2 px-3 text-right">{fmt(results.overheadCost)}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-slate-900 text-white">
                  <td className="py-3 px-3 font-bold text-lg">TOTAL</td>
                  <td className="py-3 px-3 text-right font-bold text-lg">{fmt(results.grandTotal)}</td>
                </tr>
              </tfoot>
            </table>

            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Payment Terms</h4>
                <ul className="space-y-1">
                  <li>• 50% deposit upon acceptance</li>
                  <li>• 40% upon completion of pour</li>
                  <li>• 10% final payment after walkthrough</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Included in This Estimate</h4>
                <ul className="space-y-1">
                  {includeRebar && <li>✓ Rebar / wire mesh reinforcement</li>}
                  {includeGravelBase && <li>✓ Gravel base preparation</li>}
                  {includeFormwork && <li>✓ Formwork installation & removal</li>}
                  {includeSealer && <li>✓ Sealer application</li>}
                  {includeDemo && <li>✓ Demo / removal of existing concrete</li>}
                  <li>✓ {finishTypes[finishType]?.name} finish</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-300 text-sm text-slate-500">
              <p className="mb-4"><strong>Terms:</strong> This estimate is valid for 30 days. Pricing based on current material costs and may adjust if costs change significantly. Client responsible for permits. Work area must be accessible for concrete trucks. Minor surface cracking is normal. 1-year workmanship warranty.</p>
              <div className="grid grid-cols-2 gap-8 mt-6">
                <div>
                  <p className="mb-8">Client Signature: ________________________</p>
                  <p>Date: ________________________</p>
                </div>
                <div>
                  <p className="mb-8">Contractor Signature: ________________________</p>
                  <p>Date: ________________________</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
