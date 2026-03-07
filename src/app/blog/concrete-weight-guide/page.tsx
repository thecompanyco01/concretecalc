import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Does Concrete Weigh? Weight Per Cubic Foot & Yard [2026]",
  description:
    "Complete guide to concrete weight: 150 lbs per cubic foot, 4,050 lbs per cubic yard. Includes wet vs dry weight, lightweight concrete, weight tables by volume, and load calculations for contractors.",
  keywords:
    "concrete weight per cubic foot, how much does concrete weigh, concrete weight per cubic yard, weight of concrete, concrete density, wet concrete weight, dry concrete weight, lightweight concrete weight",
};

export default function ConcreteWeightGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">
          Blog
        </Link>{" "}
        / <span className="text-gray-900 font-medium">How Much Does Concrete Weigh?</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>How Much Does Concrete Weigh? Complete Weight Guide for Contractors</h1>

        <p className="lead text-xl text-gray-600">
          Knowing the exact weight of concrete is critical for contractors — it affects structural
          engineering, truck load limits, form design, and lifting safety. This guide covers every
          weight scenario you&apos;ll encounter on the job site, from standard concrete to lightweight
          mixes and everything in between.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">📐 Quick Answer</p>
          <p className="text-orange-700 text-sm">
            Standard concrete weighs approximately <strong>150 lbs per cubic foot</strong> or{" "}
            <strong>4,050 lbs per cubic yard</strong> (about 2 tons). Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">
              Concrete Slab Calculator
            </Link>{" "}
            to calculate the total weight of concrete for your project.
          </p>
        </div>

        <h2 id="standard-weight">Standard Concrete Weight</h2>
        <p>
          Normal-weight concrete — the kind used for most residential and commercial projects — uses
          standard aggregates like gravel and crushed stone. Here are the key numbers every
          contractor should know:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Unit</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight (Wet/Fresh)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight (Cured/Dry)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Per cubic foot</td><td className="border border-gray-200 px-4 py-2">150 lbs</td><td className="border border-gray-200 px-4 py-2">145 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Per cubic yard</td><td className="border border-gray-200 px-4 py-2">4,050 lbs</td><td className="border border-gray-200 px-4 py-2">3,915 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Per cubic meter</td><td className="border border-gray-200 px-4 py-2">2,400 kg (5,291 lbs)</td><td className="border border-gray-200 px-4 py-2">2,322 kg (5,119 lbs)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Per square foot (4&quot; thick)</td><td className="border border-gray-200 px-4 py-2">50 lbs</td><td className="border border-gray-200 px-4 py-2">48.3 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Per square foot (6&quot; thick)</td><td className="border border-gray-200 px-4 py-2">75 lbs</td><td className="border border-gray-200 px-4 py-2">72.5 lbs</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          These numbers assume standard 4,000 PSI concrete with normal-weight aggregates. The
          actual weight varies slightly depending on the mix design, aggregate type, and water
          content.
        </p>

        <h2 id="wet-vs-dry">Wet vs. Dry Concrete Weight</h2>
        <p>
          This is one of the most common questions contractors get from customers — and a critical
          consideration for formwork and shoring design.
        </p>

        <h3>Fresh (Wet) Concrete</h3>
        <p>
          Fresh concrete straight from the mixer or ready-mix truck weighs about <strong>150 lbs
          per cubic foot (4,050 lbs per cubic yard)</strong>. This is the weight your forms,
          shoring, and scaffolding need to support during the pour. Always design for wet weight,
          not cured weight.
        </p>

        <h3>Cured (Dry) Concrete</h3>
        <p>
          After 28 days of curing, concrete loses some water through hydration and evaporation.
          Cured concrete weighs about <strong>145 lbs per cubic foot (3,915 lbs per cubic
          yard)</strong> — roughly 3-4% lighter than fresh concrete.
        </p>

        <h3>Why the Difference Matters</h3>
        <p>
          For structural engineering, use the cured weight (dead load calculations). For formwork
          design and pour planning, use the wet weight. Getting this wrong can lead to form
          failures during the pour — one of the most dangerous job site incidents.
        </p>

        <h2 id="by-project-type">Concrete Weight by Common Project Type</h2>
        <p>
          Here&apos;s what you&apos;re looking at weight-wise for the most common concrete projects:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Project</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Typical Size</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Thickness</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Cubic Yards</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Total Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Sidewalk (4&apos; × 50&apos;)</td><td className="border border-gray-200 px-4 py-2">200 sq ft</td><td className="border border-gray-200 px-4 py-2">4&quot;</td><td className="border border-gray-200 px-4 py-2">2.5 yd³</td><td className="border border-gray-200 px-4 py-2">10,125 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Patio (12&apos; × 16&apos;)</td><td className="border border-gray-200 px-4 py-2">192 sq ft</td><td className="border border-gray-200 px-4 py-2">4&quot;</td><td className="border border-gray-200 px-4 py-2">2.4 yd³</td><td className="border border-gray-200 px-4 py-2">9,720 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Single-car driveway</td><td className="border border-gray-200 px-4 py-2">200 sq ft</td><td className="border border-gray-200 px-4 py-2">5&quot;</td><td className="border border-gray-200 px-4 py-2">3.1 yd³</td><td className="border border-gray-200 px-4 py-2">12,555 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Double-car driveway</td><td className="border border-gray-200 px-4 py-2">480 sq ft</td><td className="border border-gray-200 px-4 py-2">5&quot;</td><td className="border border-gray-200 px-4 py-2">7.4 yd³</td><td className="border border-gray-200 px-4 py-2">29,970 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Garage floor (24&apos; × 24&apos;)</td><td className="border border-gray-200 px-4 py-2">576 sq ft</td><td className="border border-gray-200 px-4 py-2">4&quot;</td><td className="border border-gray-200 px-4 py-2">7.1 yd³</td><td className="border border-gray-200 px-4 py-2">28,755 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Foundation slab (30&apos; × 50&apos;)</td><td className="border border-gray-200 px-4 py-2">1,500 sq ft</td><td className="border border-gray-200 px-4 py-2">6&quot;</td><td className="border border-gray-200 px-4 py-2">27.8 yd³</td><td className="border border-gray-200 px-4 py-2">112,590 lbs</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Use our{" "}
          <Link href="/calculators/slab" className="text-orange-600 font-semibold">
            Slab Calculator
          </Link>{" "}
          or{" "}
          <Link href="/calculators/driveway" className="text-orange-600 font-semibold">
            Driveway Calculator
          </Link>{" "}
          to get exact yardage and weight for your specific project dimensions.
        </p>

        <h2 id="types-of-concrete">Weight by Concrete Type</h2>
        <p>
          Not all concrete is created equal. Different mix designs produce significantly different weights:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Concrete Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight per Cubic Foot</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight per Cubic Yard</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Normal weight</td><td className="border border-gray-200 px-4 py-2">145-150 lbs</td><td className="border border-gray-200 px-4 py-2">3,915-4,050 lbs</td><td className="border border-gray-200 px-4 py-2">Slabs, foundations, driveways</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Lightweight structural</td><td className="border border-gray-200 px-4 py-2">90-115 lbs</td><td className="border border-gray-200 px-4 py-2">2,430-3,105 lbs</td><td className="border border-gray-200 px-4 py-2">Upper floors, bridge decks, precast</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Insulating lightweight</td><td className="border border-gray-200 px-4 py-2">15-90 lbs</td><td className="border border-gray-200 px-4 py-2">405-2,430 lbs</td><td className="border border-gray-200 px-4 py-2">Roof fill, insulation, fireproofing</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Heavyweight</td><td className="border border-gray-200 px-4 py-2">180-400 lbs</td><td className="border border-gray-200 px-4 py-2">4,860-10,800 lbs</td><td className="border border-gray-200 px-4 py-2">Radiation shielding, counterweights</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Reinforced (with rebar)</td><td className="border border-gray-200 px-4 py-2">150-156 lbs</td><td className="border border-gray-200 px-4 py-2">4,050-4,212 lbs</td><td className="border border-gray-200 px-4 py-2">Structural elements, retaining walls</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Lightweight Concrete</h3>
        <p>
          Lightweight concrete uses expanded shale, clay, or slate aggregates instead of gravel.
          It weighs 90-115 lbs per cubic foot — about 25-40% lighter than normal concrete.
          It&apos;s commonly specified for:
        </p>
        <ul>
          <li><strong>Upper floors in multi-story buildings</strong> — reduces dead load on structural frame</li>
          <li><strong>Precast panels</strong> — easier to transport and handle</li>
          <li><strong>Bridge decks</strong> — reduces load on substructure</li>
          <li><strong>Roof decks</strong> — lower weight on roof framing</li>
        </ul>
        <p>
          The trade-off: lightweight concrete costs 20-50% more than standard concrete, and it has
          lower compressive strength at the same cement content. Typical lightweight structural
          concrete achieves 3,000-5,000 PSI.
        </p>

        <h3>Heavyweight Concrete</h3>
        <p>
          Heavyweight concrete uses dense aggregates like barite, magnetite, or steel shot.
          It can weigh up to 400 lbs per cubic foot. It&apos;s a specialty product used for:
        </p>
        <ul>
          <li>Radiation shielding in hospitals, nuclear plants, and labs</li>
          <li>Ballast and counterweights</li>
          <li>Blast-resistant structures</li>
        </ul>

        <h2 id="bagged-concrete">Weight of Bagged Concrete (Quikrete, Sakrete)</h2>
        <p>
          For smaller projects, you&apos;ll use bagged concrete. Here&apos;s what each bag yields and weighs:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Bag Size</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Dry Weight</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Yield (cubic feet)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Mixed Weight</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Bags per Cubic Yard</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">40 lb bag</td><td className="border border-gray-200 px-4 py-2">40 lbs</td><td className="border border-gray-200 px-4 py-2">0.30 ft³</td><td className="border border-gray-200 px-4 py-2">~48 lbs</td><td className="border border-gray-200 px-4 py-2">90 bags</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">60 lb bag</td><td className="border border-gray-200 px-4 py-2">60 lbs</td><td className="border border-gray-200 px-4 py-2">0.45 ft³</td><td className="border border-gray-200 px-4 py-2">~72 lbs</td><td className="border border-gray-200 px-4 py-2">60 bags</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">80 lb bag</td><td className="border border-gray-200 px-4 py-2">80 lbs</td><td className="border border-gray-200 px-4 py-2">0.60 ft³</td><td className="border border-gray-200 px-4 py-2">~96 lbs</td><td className="border border-gray-200 px-4 py-2">45 bags</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Check our detailed{" "}
          <Link href="/blog/quikrete-calculator-guide" className="text-orange-600 font-semibold">
            Quikrete Calculator Guide
          </Link>{" "}
          and{" "}
          <Link href="/blog/sakrete-calculator-guide" className="text-orange-600 font-semibold">
            Sakrete Calculator Guide
          </Link>{" "}
          for exact bag counts by project type.
        </p>

        <h2 id="truck-loads">Concrete Truck Weight & Load Limits</h2>
        <p>
          A fully loaded concrete mixer truck is one of the heaviest vehicles on the road.
          Understanding truck weights is essential for job site access planning:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Load Size</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Concrete Weight</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Truck Weight (empty)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Total GVW</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">Full load (10 yd³)</td><td className="border border-gray-200 px-4 py-2">40,500 lbs</td><td className="border border-gray-200 px-4 py-2">26,000-33,000 lbs</td><td className="border border-gray-200 px-4 py-2">66,500-73,500 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">3/4 load (7.5 yd³)</td><td className="border border-gray-200 px-4 py-2">30,375 lbs</td><td className="border border-gray-200 px-4 py-2">26,000-33,000 lbs</td><td className="border border-gray-200 px-4 py-2">56,375-63,375 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">Half load (5 yd³)</td><td className="border border-gray-200 px-4 py-2">20,250 lbs</td><td className="border border-gray-200 px-4 py-2">26,000-33,000 lbs</td><td className="border border-gray-200 px-4 py-2">46,250-53,250 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Short load (3 yd³)</td><td className="border border-gray-200 px-4 py-2">12,150 lbs</td><td className="border border-gray-200 px-4 py-2">26,000-33,000 lbs</td><td className="border border-gray-200 px-4 py-2">38,150-45,150 lbs</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Job site considerations:</strong>
        </p>
        <ul>
          <li>A fully loaded mixer weighs 33-37 tons — standard residential driveways are NOT designed for this weight</li>
          <li>Maximum legal GVW in most US states is 80,000 lbs (40 tons) on interstate highways</li>
          <li>On residential streets, weight limits are often 20,000-40,000 lbs — a full truck may need a permit</li>
          <li>Always check site access: can the driveway and soil conditions support 37 tons? If not, plan for a pump truck</li>
        </ul>

        <h2 id="weight-formulas">Weight Calculation Formulas</h2>
        <p>
          Use these formulas to calculate concrete weight for any project:
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-6 not-prose my-6">
          <p className="text-lg font-mono mb-3">
            <strong>Weight (lbs)</strong> = Length (ft) × Width (ft) × Thickness (ft) × 150
          </p>
          <p className="text-lg font-mono mb-3">
            <strong>Weight (lbs)</strong> = Cubic Yards × 4,050
          </p>
          <p className="text-lg font-mono">
            <strong>Weight (lbs)</strong> = Cubic Feet × 150
          </p>
        </div>

        <h3>Example Calculation</h3>
        <p>
          A 20&apos; × 20&apos; patio, 4 inches thick:
        </p>
        <ul>
          <li>Volume = 20 × 20 × (4/12) = 133.3 cubic feet</li>
          <li>Weight = 133.3 × 150 = <strong>20,000 lbs (10 tons)</strong></li>
          <li>In cubic yards: 133.3 ÷ 27 = 4.94 yd³</li>
          <li>Cross-check: 4.94 × 4,050 = <strong>20,007 lbs</strong> ✓</li>
        </ul>

        <h2 id="rebar-weight">Weight of Reinforced Concrete</h2>
        <p>
          Steel rebar adds weight to the concrete. Here&apos;s how much:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Rebar Size</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Diameter</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight per Foot</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Weight per 20&apos; Bar</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">#3</td><td className="border border-gray-200 px-4 py-2">3/8&quot;</td><td className="border border-gray-200 px-4 py-2">0.376 lbs</td><td className="border border-gray-200 px-4 py-2">7.52 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">#4</td><td className="border border-gray-200 px-4 py-2">1/2&quot;</td><td className="border border-gray-200 px-4 py-2">0.668 lbs</td><td className="border border-gray-200 px-4 py-2">13.36 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">#5</td><td className="border border-gray-200 px-4 py-2">5/8&quot;</td><td className="border border-gray-200 px-4 py-2">1.043 lbs</td><td className="border border-gray-200 px-4 py-2">20.86 lbs</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">#6</td><td className="border border-gray-200 px-4 py-2">3/4&quot;</td><td className="border border-gray-200 px-4 py-2">1.502 lbs</td><td className="border border-gray-200 px-4 py-2">30.04 lbs</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">#8</td><td className="border border-gray-200 px-4 py-2">1&quot;</td><td className="border border-gray-200 px-4 py-2">2.670 lbs</td><td className="border border-gray-200 px-4 py-2">53.40 lbs</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          For a typical residential slab with #4 rebar on 18&quot; centers in both directions, rebar adds
          about 1-2 lbs per cubic foot — roughly 1% to the total weight. For heavily reinforced
          structural elements, rebar can add 3-5% to the total weight.
        </p>
        <p>
          Use our{" "}
          <Link href="/calculators/rebar" className="text-orange-600 font-semibold">
            Rebar Calculator
          </Link>{" "}
          to figure out exactly how much rebar your project needs.
        </p>

        <h2 id="unit-conversions">Concrete Weight Unit Conversions</h2>
        <p>Quick reference for converting between common weight and volume units:</p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Conversion</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-4 py-2">1 cubic yard of concrete</td><td className="border border-gray-200 px-4 py-2">4,050 lbs (2.025 tons)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">1 cubic foot of concrete</td><td className="border border-gray-200 px-4 py-2">150 lbs (68 kg)</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">1 cubic meter of concrete</td><td className="border border-gray-200 px-4 py-2">5,291 lbs (2,400 kg)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">1 ton of concrete</td><td className="border border-gray-200 px-4 py-2">13.5 cubic feet (0.5 cubic yards)</td></tr>
              <tr><td className="border border-gray-200 px-4 py-2">1 cubic yard</td><td className="border border-gray-200 px-4 py-2">27 cubic feet</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">1 cubic foot</td><td className="border border-gray-200 px-4 py-2">0.037 cubic yards</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="safety">Safety Considerations for Heavy Concrete</h2>
        <p>
          Concrete&apos;s weight creates real job site hazards. Here are the safety considerations every
          contractor must address:
        </p>

        <h3>Formwork Design</h3>
        <p>
          Forms must support the full hydrostatic pressure of wet concrete. For a 4-foot wall pour,
          the pressure at the bottom is approximately 600 lbs per square foot. Under-designed forms
          are one of the most common causes of concrete blowouts and worker injuries.
        </p>

        <h3>Lifting and Moving</h3>
        <ul>
          <li>An 80-lb bag of concrete exceeds OSHA&apos;s recommended single-person lift limit (50 lbs)</li>
          <li>A full wheelbarrow of concrete weighs 300-500 lbs depending on size</li>
          <li>Precast elements can weigh thousands of pounds — always verify crane capacity</li>
          <li>Use proper lifting techniques and get help for bags over 60 lbs</li>
        </ul>

        <h3>Structural Loading</h3>
        <p>
          When pouring a second-floor slab or elevated deck, the structure below must support the
          full weight of the wet concrete plus workers, equipment, and impact loads. This is typically
          calculated as 1.2 × dead load + 1.6 × live load per ACI 318.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How much does a 4-inch concrete slab weigh per square foot?</h3>
        <p>
          A 4-inch thick concrete slab weighs approximately 50 lbs per square foot when wet and
          about 48.3 lbs per square foot when fully cured. For a 10×10 area (100 sq ft), that&apos;s
          5,000 lbs of concrete.
        </p>

        <h3>How much does a yard of concrete weigh?</h3>
        <p>
          One cubic yard of standard concrete weighs 4,050 lbs (about 2 tons) when fresh and
          3,915 lbs when cured. Lightweight concrete weighs 2,430-3,105 lbs per cubic yard.
        </p>

        <h3>How much does an 80 lb bag of concrete weigh when mixed?</h3>
        <p>
          An 80 lb bag of concrete weighs approximately 96 lbs when mixed with water. You add about
          2 quarts (4 lbs) of water per 80 lb bag, plus some water is absorbed by the dry materials,
          bringing total mixed weight to roughly 96 lbs. It yields 0.6 cubic feet of concrete.
        </p>

        <h3>Is wet concrete heavier than dry concrete?</h3>
        <p>
          Yes. Fresh (wet) concrete weighs about 150 lbs per cubic foot, while fully cured concrete
          weighs about 145 lbs per cubic foot — a difference of roughly 3-4%. The water loss occurs
          through hydration (chemical reaction with cement) and evaporation during curing.
        </p>

        <h3>How heavy is a concrete block?</h3>
        <p>
          A standard 8×8×16 concrete block (CMU) weighs 35-38 lbs for normal weight and 22-28 lbs
          for lightweight. A solid 4&quot; cap block weighs about 33 lbs. Check our{" "}
          <Link href="/calculators/block" className="text-orange-600 font-semibold">
            Block Calculator
          </Link>{" "}
          for total block and weight calculations.
        </p>

        <h3>What is the density of concrete in kg/m³?</h3>
        <p>
          Standard concrete has a density of approximately 2,400 kg/m³ (150 lbs/ft³). Lightweight
          structural concrete ranges from 1,440-1,840 kg/m³ (90-115 lbs/ft³). Heavyweight concrete
          can reach 6,400 kg/m³ (400 lbs/ft³).
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">📊 Need Exact Calculations?</p>
          <p className="text-orange-700 text-sm mb-3">
            Our free calculators give you precise volume, weight, and material costs for any
            concrete project. No signup required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/calculators/slab"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-orange-700"
            >
              Slab Calculator →
            </Link>
            <Link
              href="/calculators/driveway"
              className="inline-block bg-white border border-orange-600 text-orange-600 px-4 py-2 rounded font-semibold text-sm hover:bg-orange-50"
            >
              Driveway Calculator →
            </Link>
            <Link
              href="/calculators/footing"
              className="inline-block bg-white border border-orange-600 text-orange-600 px-4 py-2 rounded font-semibold text-sm hover:bg-orange-50"
            >
              Footing Calculator →
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-gray-800 mb-2">🎯 Pro Tip for Contractors</p>
          <p className="text-gray-700 text-sm">
            Always include concrete weight in your bid documentation — customers are often surprised
            by how heavy concrete is, and it helps justify truck access requirements and pump truck
            costs. Our{" "}
            <Link href="/templates" className="text-orange-600 underline font-semibold">
              professional estimate templates
            </Link>{" "}
            include weight calculations automatically.
          </p>
        </div>
      </article>
    </div>
  );
}
