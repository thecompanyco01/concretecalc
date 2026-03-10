"use client";

import { useState } from "react";
import Link from "next/link";

type TemplateType = "driveway" | "slab" | "patio" | "foundation" | "stamped" | "retaining-wall" | "pool-deck" | "garage-floor";

const templates: Record<TemplateType, {
  title: string;
  description: string;
  materials: { desc: string; qty: number; unit: string; price: number }[];
  labor: { desc: string; hrs: number; rate: number }[];
  equipment: { desc: string; qty: number; unit: string; price: number }[];
}> = {
  driveway: {
    title: "Driveway Estimate",
    description: "Complete estimate for residential concrete driveway projects including demo, gravel base, and finish work.",
    materials: [
      { desc: "Concrete (ready-mix 4000 PSI)", qty: 15, unit: "CY", price: 150 },
      { desc: "Gravel base (6\" depth)", qty: 12, unit: "Tons", price: 35 },
      { desc: "Wire mesh (6x6 W2.9)", qty: 800, unit: "SF", price: 0.45 },
      { desc: "Rebar (#4 bar)", qty: 200, unit: "LF", price: 0.75 },
      { desc: "Expansion joint filler", qty: 60, unit: "LF", price: 2.50 },
      { desc: "Form lumber & stakes", qty: 1, unit: "Lot", price: 400 },
      { desc: "Fiber mesh additive", qty: 15, unit: "Bags", price: 12 },
      { desc: "Sealer (acrylic)", qty: 10, unit: "Gal", price: 28 },
    ],
    labor: [
      { desc: "Demo / removal of existing", hrs: 16, rate: 55 },
      { desc: "Excavation & grading", hrs: 12, rate: 55 },
      { desc: "Gravel base & compaction", hrs: 8, rate: 50 },
      { desc: "Formwork installation", hrs: 10, rate: 55 },
      { desc: "Rebar / mesh placement", hrs: 6, rate: 55 },
      { desc: "Concrete placement & finishing", hrs: 16, rate: 65 },
      { desc: "Broom finish / texturing", hrs: 4, rate: 55 },
      { desc: "Sealer application", hrs: 4, rate: 45 },
      { desc: "Cleanup & debris removal", hrs: 8, rate: 45 },
    ],
    equipment: [
      { desc: "Skid steer / bobcat", qty: 2, unit: "Days", price: 350 },
      { desc: "Dump truck (hauling)", qty: 1, unit: "Load", price: 450 },
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Power trowel", qty: 1, unit: "Day", price: 150 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 300 },
    ],
  },
  slab: {
    title: "Concrete Slab Estimate",
    description: "Standard concrete slab estimate for garages, sheds, and commercial applications.",
    materials: [
      { desc: "Concrete (ready-mix)", qty: 12, unit: "CY", price: 150 },
      { desc: "Gravel base (4\" depth)", qty: 8, unit: "Tons", price: 35 },
      { desc: "Vapor barrier (10 mil)", qty: 1200, unit: "SF", price: 0.15 },
      { desc: "Rebar (#4 bar)", qty: 400, unit: "LF", price: 0.75 },
      { desc: "Wire mesh (6x6)", qty: 1200, unit: "SF", price: 0.45 },
      { desc: "Control joint material", qty: 120, unit: "LF", price: 1.25 },
      { desc: "Curing compound", qty: 5, unit: "Gal", price: 18 },
      { desc: "Form lumber & stakes", qty: 1, unit: "Lot", price: 350 },
    ],
    labor: [
      { desc: "Site prep & grading", hrs: 16, rate: 55 },
      { desc: "Formwork installation", hrs: 12, rate: 55 },
      { desc: "Gravel base & compaction", hrs: 8, rate: 50 },
      { desc: "Vapor barrier install", hrs: 4, rate: 45 },
      { desc: "Rebar / mesh placement", hrs: 8, rate: 55 },
      { desc: "Concrete placement & finishing", hrs: 16, rate: 65 },
      { desc: "Control joint cutting", hrs: 4, rate: 55 },
      { desc: "Cleanup", hrs: 6, rate: 45 },
    ],
    equipment: [
      { desc: "Skid steer", qty: 1, unit: "Day", price: 350 },
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Power trowel", qty: 1, unit: "Day", price: 150 },
      { desc: "Concrete saw", qty: 1, unit: "Day", price: 125 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 250 },
    ],
  },
  patio: {
    title: "Patio Estimate",
    description: "Residential concrete patio with options for decorative finishes.",
    materials: [
      { desc: "Concrete (ready-mix 4000 PSI)", qty: 8, unit: "CY", price: 155 },
      { desc: "Gravel base (4\" depth)", qty: 6, unit: "Tons", price: 35 },
      { desc: "Wire mesh (6x6)", qty: 500, unit: "SF", price: 0.45 },
      { desc: "Expansion joint material", qty: 40, unit: "LF", price: 2.50 },
      { desc: "Form lumber & stakes", qty: 1, unit: "Lot", price: 300 },
      { desc: "Decorative edge forms", qty: 40, unit: "LF", price: 3.00 },
      { desc: "Sealer", qty: 6, unit: "Gal", price: 28 },
    ],
    labor: [
      { desc: "Site prep & excavation", hrs: 10, rate: 55 },
      { desc: "Gravel base & compaction", hrs: 6, rate: 50 },
      { desc: "Formwork (incl. curves)", hrs: 8, rate: 55 },
      { desc: "Mesh placement", hrs: 4, rate: 55 },
      { desc: "Concrete placement & finish", hrs: 12, rate: 65 },
      { desc: "Decorative finishing", hrs: 6, rate: 60 },
      { desc: "Sealer application", hrs: 3, rate: 45 },
      { desc: "Cleanup", hrs: 4, rate: 45 },
    ],
    equipment: [
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Bull float / trowel", qty: 1, unit: "Day", price: 100 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 250 },
    ],
  },
  foundation: {
    title: "Foundation & Footings Estimate",
    description: "Complete foundation estimate including footings, walls, and waterproofing.",
    materials: [
      { desc: "Concrete (ready-mix 4500 PSI)", qty: 25, unit: "CY", price: 165 },
      { desc: "Rebar (#5 bar)", qty: 800, unit: "LF", price: 1.10 },
      { desc: "Foundation forms (rental)", qty: 1, unit: "Lot", price: 1200 },
      { desc: "Anchor bolts (1/2\" × 10\")", qty: 30, unit: "EA", price: 4.50 },
      { desc: "Waterproofing membrane", qty: 600, unit: "SF", price: 1.25 },
      { desc: "Drain tile (4\")", qty: 150, unit: "LF", price: 3.50 },
      { desc: "Gravel (drainage)", qty: 10, unit: "Tons", price: 35 },
      { desc: "Vapor barrier", qty: 800, unit: "SF", price: 0.20 },
    ],
    labor: [
      { desc: "Excavation layout & grading", hrs: 20, rate: 55 },
      { desc: "Footing forming", hrs: 16, rate: 60 },
      { desc: "Rebar tying", hrs: 16, rate: 60 },
      { desc: "Footing pour & finish", hrs: 10, rate: 65 },
      { desc: "Wall form setup", hrs: 20, rate: 60 },
      { desc: "Wall pour", hrs: 12, rate: 65 },
      { desc: "Form stripping & cleanup", hrs: 12, rate: 55 },
      { desc: "Waterproofing application", hrs: 8, rate: 55 },
      { desc: "Drain tile installation", hrs: 8, rate: 55 },
      { desc: "Backfill coordination", hrs: 6, rate: 50 },
    ],
    equipment: [
      { desc: "Excavator", qty: 3, unit: "Days", price: 500 },
      { desc: "Concrete pump", qty: 2, unit: "Pours", price: 600 },
      { desc: "Concrete vibrator", qty: 2, unit: "Days", price: 85 },
      { desc: "Transit / laser level", qty: 1, unit: "Day", price: 75 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 400 },
    ],
  },
  stamped: {
    title: "Stamped / Decorative Concrete Estimate",
    description: "Premium stamped concrete with color hardener, release agent, and sealer.",
    materials: [
      { desc: "Concrete (ready-mix 4000 PSI)", qty: 10, unit: "CY", price: 155 },
      { desc: "Color hardener", qty: 120, unit: "LB", price: 0.85 },
      { desc: "Release agent (liquid)", qty: 5, unit: "Gal", price: 35 },
      { desc: "Stamp mats (rental)", qty: 1, unit: "Set", price: 500 },
      { desc: "Gravel base", qty: 8, unit: "Tons", price: 35 },
      { desc: "Wire mesh", qty: 600, unit: "SF", price: 0.45 },
      { desc: "Form lumber", qty: 1, unit: "Lot", price: 350 },
      { desc: "High-gloss sealer", qty: 8, unit: "Gal", price: 45 },
      { desc: "Touch-up color kit", qty: 1, unit: "Kit", price: 75 },
    ],
    labor: [
      { desc: "Site prep & grading", hrs: 10, rate: 55 },
      { desc: "Gravel base & compact", hrs: 6, rate: 50 },
      { desc: "Formwork", hrs: 8, rate: 55 },
      { desc: "Mesh placement", hrs: 4, rate: 55 },
      { desc: "Pour & screed", hrs: 10, rate: 65 },
      { desc: "Color hardener application", hrs: 4, rate: 65 },
      { desc: "Stamping", hrs: 8, rate: 70 },
      { desc: "Detail work & touch-up", hrs: 6, rate: 65 },
      { desc: "Washing & sealing", hrs: 6, rate: 55 },
      { desc: "Cleanup", hrs: 4, rate: 45 },
    ],
    equipment: [
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Bull float / fresno", qty: 1, unit: "Day", price: 100 },
      { desc: "Pressure washer", qty: 1, unit: "Day", price: 150 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 300 },
    ],
  },
  "retaining-wall": {
    title: "Retaining Wall Estimate",
    description: "Complete retaining wall estimate — block or poured concrete with drainage, rebar, and geogrid reinforcement.",
    materials: [
      { desc: "Concrete blocks (or poured concrete)", qty: 400, unit: "EA/CY", price: 4.50 },
      { desc: "Rebar (#4 bar)", qty: 300, unit: "LF", price: 0.75 },
      { desc: "Gravel backfill (3/4\" clean)", qty: 12, unit: "Tons", price: 38 },
      { desc: "Drainage pipe (4\" perf)", qty: 80, unit: "LF", price: 3.25 },
      { desc: "Filter fabric", qty: 400, unit: "SF", price: 0.35 },
      { desc: "Geogrid reinforcement", qty: 200, unit: "SF", price: 1.50 },
      { desc: "Cap blocks / coping", qty: 50, unit: "EA", price: 6.00 },
      { desc: "Construction adhesive", qty: 6, unit: "Tubes", price: 8.00 },
      { desc: "Gravel leveling pad (base)", qty: 4, unit: "Tons", price: 35 },
    ],
    labor: [
      { desc: "Excavation & site prep", hrs: 16, rate: 55 },
      { desc: "Leveling pad installation", hrs: 8, rate: 55 },
      { desc: "Block laying / wall pour", hrs: 24, rate: 60 },
      { desc: "Rebar placement & tying", hrs: 8, rate: 60 },
      { desc: "Geogrid installation", hrs: 6, rate: 55 },
      { desc: "Drainage pipe & gravel backfill", hrs: 12, rate: 55 },
      { desc: "Cap / coping installation", hrs: 6, rate: 55 },
      { desc: "Cleanup & grading", hrs: 8, rate: 45 },
    ],
    equipment: [
      { desc: "Mini excavator", qty: 2, unit: "Days", price: 400 },
      { desc: "Plate compactor", qty: 2, unit: "Days", price: 125 },
      { desc: "Laser level / transit", qty: 1, unit: "Day", price: 75 },
      { desc: "Concrete saw (for cuts)", qty: 1, unit: "Day", price: 125 },
      { desc: "Dump truck (hauling)", qty: 2, unit: "Loads", price: 450 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 350 },
    ],
  },
  "pool-deck": {
    title: "Pool Deck Estimate",
    description: "Professional pool deck estimate with decorative finish options, cool deck coating, and expansion joints.",
    materials: [
      { desc: "Concrete (ready-mix 4000 PSI)", qty: 14, unit: "CY", price: 155 },
      { desc: "Color hardener / integral color", qty: 150, unit: "LB", price: 0.85 },
      { desc: "Cool deck coating", qty: 10, unit: "Gal", price: 55 },
      { desc: "Expansion joint material", qty: 120, unit: "LF", price: 2.75 },
      { desc: "Gravel base (4\" depth)", qty: 10, unit: "Tons", price: 35 },
      { desc: "Wire mesh (6x6)", qty: 900, unit: "SF", price: 0.45 },
      { desc: "Form lumber & stakes", qty: 1, unit: "Lot", price: 450 },
      { desc: "Sealer (non-slip acrylic)", qty: 12, unit: "Gal", price: 38 },
      { desc: "Coping / bullnose edge", qty: 80, unit: "LF", price: 12 },
    ],
    labor: [
      { desc: "Demo existing deck surface", hrs: 16, rate: 55 },
      { desc: "Grading & compaction", hrs: 10, rate: 55 },
      { desc: "Formwork installation", hrs: 12, rate: 55 },
      { desc: "Wire mesh placement", hrs: 6, rate: 55 },
      { desc: "Concrete pour & finishing", hrs: 16, rate: 65 },
      { desc: "Decorative finish application", hrs: 10, rate: 65 },
      { desc: "Expansion joint installation", hrs: 4, rate: 55 },
      { desc: "Sealer application (2 coats)", hrs: 6, rate: 50 },
      { desc: "Cleanup & debris removal", hrs: 6, rate: 45 },
    ],
    equipment: [
      { desc: "Skid steer / bobcat", qty: 1, unit: "Day", price: 350 },
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Bull float / fresno", qty: 1, unit: "Day", price: 100 },
      { desc: "Power trowel", qty: 1, unit: "Day", price: 150 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 300 },
    ],
  },
  "garage-floor": {
    title: "Garage Floor Estimate",
    description: "Garage floor estimate with 4000 PSI concrete, vapor barrier, wire mesh, control joints, and sealer/epoxy options.",
    materials: [
      { desc: "Concrete (4000 PSI ready-mix)", qty: 10, unit: "CY", price: 155 },
      { desc: "Vapor barrier (10 mil poly)", qty: 800, unit: "SF", price: 0.18 },
      { desc: "Wire mesh (6x6 W2.9)", qty: 800, unit: "SF", price: 0.45 },
      { desc: "Control joint material", qty: 80, unit: "LF", price: 1.25 },
      { desc: "Sealer / epoxy coating", qty: 8, unit: "Gal", price: 48 },
      { desc: "Gravel base (4\" depth)", qty: 6, unit: "Tons", price: 35 },
      { desc: "Form lumber & stakes", qty: 1, unit: "Lot", price: 300 },
      { desc: "Curing compound", qty: 5, unit: "Gal", price: 18 },
      { desc: "Fiber mesh additive", qty: 10, unit: "Bags", price: 12 },
    ],
    labor: [
      { desc: "Demo old floor / removal", hrs: 12, rate: 55 },
      { desc: "Grading & compaction", hrs: 8, rate: 55 },
      { desc: "Vapor barrier installation", hrs: 4, rate: 45 },
      { desc: "Formwork installation", hrs: 6, rate: 55 },
      { desc: "Wire mesh placement", hrs: 4, rate: 55 },
      { desc: "Concrete pour & finishing", hrs: 12, rate: 65 },
      { desc: "Control joint cutting", hrs: 4, rate: 55 },
      { desc: "Sealer / epoxy application", hrs: 6, rate: 55 },
      { desc: "Cleanup & debris removal", hrs: 6, rate: 45 },
    ],
    equipment: [
      { desc: "Skid steer (demo & grading)", qty: 1, unit: "Day", price: 350 },
      { desc: "Plate compactor", qty: 1, unit: "Day", price: 125 },
      { desc: "Concrete vibrator", qty: 1, unit: "Day", price: 85 },
      { desc: "Power trowel", qty: 1, unit: "Day", price: 150 },
      { desc: "Concrete saw", qty: 1, unit: "Day", price: 125 },
      { desc: "Mobilization", qty: 1, unit: "Trip", price: 250 },
    ],
  },
};

export default function EstimateTemplates() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>("driveway");
  const [companyName, setCompanyName] = useState("");
  const [editableItems, setEditableItems] = useState<Record<string, Record<number, { qty?: number; price?: number }>>>({});

  const t = templates[activeTemplate];

  const getItem = (section: string, idx: number, field: "qty" | "price", defaultVal: number) => {
    return editableItems[activeTemplate]?.[idx * 10 + (section === "materials" ? 0 : section === "labor" ? 100 : 200)]?.[field] ?? defaultVal;
  };

  const calcTotal = (items: { qty: number; price: number; }[]) => items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const matTotal = calcTotal(t.materials.map((m, i) => ({ qty: m.qty, price: m.price })));
  const laborTotal = t.labor.reduce((sum, l) => sum + l.hrs * l.rate, 0);
  const equipTotal = calcTotal(t.equipment.map(e => ({ qty: e.qty, price: e.price })));
  const subtotal = matTotal + laborTotal + equipTotal;
  const overhead = subtotal * 0.1;
  const profit = (subtotal + overhead) * 0.15;
  const grandTotal = subtotal + overhead + profit;

  const fmt = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <style jsx global>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; font-size: 11px; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="no-print mb-6">
          <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">← Back to Templates</Link>
          {/* Free vs Paid Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4 mb-4">
            <p className="text-blue-900 text-sm font-medium mb-2">
              📋 Template Preview — See what&apos;s included. Buy the full pack ($49) for editable Excel/Google Sheets templates with formulas, auto-calculations, and print-ready formatting.
            </p>
            <a
              href="https://buy.stripe.com/6oUdRadrNdg91rJ3ntaMU00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 px-6 rounded-lg transition text-sm"
            >
              ⬇️ Download All 8 Templates — $49
            </a>
            <p className="text-xs text-slate-500 mt-2">5 Excel templates • Auto-calculated costs • Print-ready • 30-day guarantee</p>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-3">Estimate Template Pack</h1>
          <p className="text-slate-500 mt-2">8 professional estimate templates. Click any template, customize quantities and rates, then print as PDF.</p>
        </div>

        {/* Template Tabs */}
        <div className="no-print flex flex-wrap gap-2 mb-6">
          {(Object.keys(templates) as TemplateType[]).map(key => (
            <button
              key={key}
              onClick={() => setActiveTemplate(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTemplate === key
                  ? "bg-amber-500 text-slate-900"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {templates[key].title}
            </button>
          ))}
        </div>

        <div className="no-print mb-4">
          <input
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full max-w-sm"
            placeholder="Your Company Name (appears on printed estimate)"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />
        </div>

        {/* Estimate Document */}
        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{companyName || "[Your Company Name]"}</h2>
              <p className="text-slate-500 text-sm">[Address] • [Phone] • [License #]</p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold text-slate-900">{t.title.toUpperCase()}</h3>
              <p className="text-slate-500 text-sm">Date: {today}</p>
              <p className="text-slate-500 text-sm">Valid for 30 days</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
            <div>
              <p className="font-bold text-slate-900">Client: [Client Name]</p>
              <p>[Client Phone] • [Client Email]</p>
              <p>[Project Address]</p>
            </div>
            <div className="text-right">
              <p>{t.description}</p>
            </div>
          </div>

          {/* Materials */}
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mt-6 mb-2 bg-slate-100 px-3 py-2 rounded">Materials</h3>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="text-slate-500 text-left">
                <th className="py-1 px-2">Description</th>
                <th className="py-1 px-2 text-right">Qty</th>
                <th className="py-1 px-2 text-right">Unit</th>
                <th className="py-1 px-2 text-right">Unit Price</th>
                <th className="py-1 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {t.materials.map((m, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-1.5 px-2">{m.desc}</td>
                  <td className="py-1.5 px-2 text-right">{m.qty}</td>
                  <td className="py-1.5 px-2 text-right">{m.unit}</td>
                  <td className="py-1.5 px-2 text-right">{fmt(m.price)}</td>
                  <td className="py-1.5 px-2 text-right font-medium">{fmt(m.qty * m.price)}</td>
                </tr>
              ))}
              <tr className="font-bold bg-slate-50">
                <td colSpan={4} className="py-2 px-2 text-right">Materials Subtotal</td>
                <td className="py-2 px-2 text-right">{fmt(matTotal)}</td>
              </tr>
            </tbody>
          </table>

          {/* Labor */}
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mt-6 mb-2 bg-slate-100 px-3 py-2 rounded">Labor</h3>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="text-slate-500 text-left">
                <th className="py-1 px-2">Description</th>
                <th className="py-1 px-2 text-right">Hours</th>
                <th className="py-1 px-2 text-right">Rate</th>
                <th className="py-1 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {t.labor.map((l, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-1.5 px-2">{l.desc}</td>
                  <td className="py-1.5 px-2 text-right">{l.hrs}</td>
                  <td className="py-1.5 px-2 text-right">{fmt(l.rate)}</td>
                  <td className="py-1.5 px-2 text-right font-medium">{fmt(l.hrs * l.rate)}</td>
                </tr>
              ))}
              <tr className="font-bold bg-slate-50">
                <td colSpan={3} className="py-2 px-2 text-right">Labor Subtotal</td>
                <td className="py-2 px-2 text-right">{fmt(laborTotal)}</td>
              </tr>
            </tbody>
          </table>

          {/* Equipment */}
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide mt-6 mb-2 bg-slate-100 px-3 py-2 rounded">Equipment</h3>
          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="text-slate-500 text-left">
                <th className="py-1 px-2">Description</th>
                <th className="py-1 px-2 text-right">Qty</th>
                <th className="py-1 px-2 text-right">Unit</th>
                <th className="py-1 px-2 text-right">Price</th>
                <th className="py-1 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {t.equipment.map((e, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-1.5 px-2">{e.desc}</td>
                  <td className="py-1.5 px-2 text-right">{e.qty}</td>
                  <td className="py-1.5 px-2 text-right">{e.unit}</td>
                  <td className="py-1.5 px-2 text-right">{fmt(e.price)}</td>
                  <td className="py-1.5 px-2 text-right font-medium">{fmt(e.qty * e.price)}</td>
                </tr>
              ))}
              <tr className="font-bold bg-slate-50">
                <td colSpan={4} className="py-2 px-2 text-right">Equipment Subtotal</td>
                <td className="py-2 px-2 text-right">{fmt(equipTotal)}</td>
              </tr>
            </tbody>
          </table>

          {/* Summary */}
          <div className="bg-slate-900 text-white rounded-lg p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Materials</span><span>{fmt(matTotal)}</span></div>
              <div className="flex justify-between"><span>Labor</span><span>{fmt(laborTotal)}</span></div>
              <div className="flex justify-between"><span>Equipment</span><span>{fmt(equipTotal)}</span></div>
              <hr className="border-slate-700" />
              <div className="flex justify-between"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
              <div className="flex justify-between text-slate-400"><span>Overhead (10%)</span><span>{fmt(overhead)}</span></div>
              <div className="flex justify-between text-slate-400"><span>Profit (15%)</span><span>{fmt(profit)}</span></div>
              <hr className="border-slate-700" />
              <div className="flex justify-between text-xl font-extrabold">
                <span>GRAND TOTAL</span>
                <span>{fmt(grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 text-xs text-slate-500 space-y-1">
            <p><strong>Payment Terms:</strong> 50% deposit upon acceptance • 40% upon completion of pour • 10% after walkthrough</p>
            <p><strong>Terms:</strong> Valid 30 days. Pricing based on current material costs. Changes to scope may result in additional charges. Client responsible for permits. 1-year workmanship warranty.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 text-sm text-slate-600">
            <div><p className="mb-8">Client Signature: ________________________</p><p>Date: ________</p></div>
            <div><p className="mb-8">Contractor Signature: ________________________</p><p>Date: ________</p></div>
          </div>
        </div>

        <div className="no-print mt-6 flex gap-3">
          <button
            onClick={() => window.print()}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition text-sm"
          >
            📄 Print / Save as PDF
          </button>
          <Link
            href="/tools/bid-calculator-pro"
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg transition text-sm"
          >
            Try the Bid Calculator →
          </Link>
        </div>
      </div>
    </>
  );
}
