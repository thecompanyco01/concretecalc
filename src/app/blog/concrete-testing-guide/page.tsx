import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Concrete Testing Guide: Types, Methods & ACI Standards (2026) | ConcreteCalc',
  description: 'Complete guide to concrete testing for contractors. Covers slump test, air content test, cylinder break test, compression strength, Schmidt hammer, core testing, ACI standards, and costs for each test type.',
  keywords: ['concrete testing', 'concrete slump test', 'concrete compression test', 'concrete cylinder test', 'concrete strength test', 'ACI concrete testing', 'concrete core test'],
}

export default function ConcreteTestingGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Concrete Testing Guide</span>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Concrete Testing: Complete Guide to Methods, Standards & When Each Test Is Required (2026)
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Concrete testing ensures that the material you're placing meets design specifications for strength, durability,
          and workability. Whether you're a contractor who needs to understand testing requirements for your projects or
          a testing lab technician, this guide covers every major concrete test — from fresh concrete tests at the truck
          to hardened concrete evaluations months after placement.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mt-0">Quick Reference</h3>
          <ul className="text-blue-800 mb-0">
            <li><strong>Slump test:</strong> $25–$50 per test — measures workability</li>
            <li><strong>Air content test:</strong> $30–$60 per test — required in freeze-thaw zones</li>
            <li><strong>Cylinder break test:</strong> $15–$30 per cylinder — measures compressive strength</li>
            <li><strong>Core test:</strong> $200–$500 per core — evaluates in-place concrete</li>
            <li><strong>Schmidt hammer:</strong> $50–$150 per location — non-destructive strength estimate</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mt-0">Table of Contents</h3>
          <ol className="text-gray-700 mb-0">
            <li><a href="#why-test" className="text-blue-600 hover:underline">Why Concrete Testing Matters</a></li>
            <li><a href="#fresh-tests" className="text-blue-600 hover:underline">Fresh Concrete Tests</a></li>
            <li><a href="#slump" className="text-blue-600 hover:underline">Slump Test (ASTM C143)</a></li>
            <li><a href="#air-content" className="text-blue-600 hover:underline">Air Content Test (ASTM C231/C173)</a></li>
            <li><a href="#temperature" className="text-blue-600 hover:underline">Temperature Test (ASTM C1064)</a></li>
            <li><a href="#unit-weight" className="text-blue-600 hover:underline">Unit Weight Test (ASTM C138)</a></li>
            <li><a href="#cylinder" className="text-blue-600 hover:underline">Cylinder Break Test (ASTM C39)</a></li>
            <li><a href="#core" className="text-blue-600 hover:underline">Core Testing (ASTM C42)</a></li>
            <li><a href="#schmidt" className="text-blue-600 hover:underline">Schmidt Hammer / Rebound Test (ASTM C805)</a></li>
            <li><a href="#other" className="text-blue-600 hover:underline">Other Testing Methods</a></li>
            <li><a href="#when-required" className="text-blue-600 hover:underline">When Each Test Is Required</a></li>
            <li><a href="#costs" className="text-blue-600 hover:underline">Testing Costs</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <h2 id="why-test" className="text-3xl font-bold mt-12">Why Concrete Testing Matters</h2>

        <p>
          Concrete testing isn't just a box to check — it's your proof that the concrete placed on a job meets
          the design requirements. Here's why every contractor should understand testing:
        </p>

        <ul>
          <li><strong>Liability protection:</strong> Test results document that you placed concrete meeting spec. If a structural issue arises years later, your test records are your defense.</li>
          <li><strong>Quality assurance:</strong> Catch bad batches before they become costly problems. A slump test at the truck can identify water-added loads that will crack.</li>
          <li><strong>Code compliance:</strong> ACI 318 and IBC require testing for structural concrete. Skipping it can result in failed inspections and teardowns.</li>
          <li><strong>Dispute resolution:</strong> When a client claims the concrete is defective, test data settles the argument objectively.</li>
          <li><strong>Mix optimization:</strong> Testing data helps you and your ready-mix supplier fine-tune mixes for better performance and cost savings.</li>
        </ul>

        <h2 id="fresh-tests" className="text-3xl font-bold mt-12">Fresh Concrete Tests (At the Truck)</h2>

        <p>
          Fresh concrete tests are performed on-site when concrete is delivered. These tests verify that the
          concrete in the truck matches the ordered mix design and is workable enough for placement. A certified
          testing technician (ACI Grade I or equivalent) typically performs these tests.
        </p>

        <h2 id="slump" className="text-3xl font-bold mt-12">Slump Test (ASTM C143)</h2>

        <h3>What It Measures</h3>
        <p>
          The slump test measures the <strong>workability and consistency</strong> of fresh concrete. It's the
          most common field test and takes about 5 minutes. Higher slump means wetter, more fluid concrete;
          lower slump means stiffer, drier concrete.
        </p>

        <h3>How It's Performed</h3>
        <ol>
          <li>Dampen the slump cone (12" tall, 8" base, 4" top) and base plate</li>
          <li>Fill the cone in three equal layers, rodding each layer 25 times with a 5/8" diameter tamping rod</li>
          <li>Strike off the top surface level with the rod</li>
          <li>Carefully lift the cone straight up in 3-7 seconds</li>
          <li>Measure the difference between the height of the cone and the highest point of the slumped concrete</li>
        </ol>

        <h3>Interpreting Results</h3>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Slump Range</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Consistency</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">1"–2"</td>
                <td className="border border-gray-300 px-4 py-3">Very stiff</td>
                <td className="border border-gray-300 px-4 py-3">Road paving, dam construction, mass pours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">3"–4"</td>
                <td className="border border-gray-300 px-4 py-3">Stiff</td>
                <td className="border border-gray-300 px-4 py-3">Flatwork, slabs on grade, footings</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">4"–5"</td>
                <td className="border border-gray-300 px-4 py-3">Medium</td>
                <td className="border border-gray-300 px-4 py-3">Standard structural — most residential/commercial</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">5"–7"</td>
                <td className="border border-gray-300 px-4 py-3">Fluid</td>
                <td className="border border-gray-300 px-4 py-3">Pump mixes, walls, columns</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">8"+</td>
                <td className="border border-gray-300 px-4 py-3">Very fluid</td>
                <td className="border border-gray-300 px-4 py-3">Self-consolidating concrete (SCC), heavily congested reinforcement</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-red-900 mt-0">⚠️ Water Added at the Job Site</h3>
          <p className="text-red-800 mb-0">
            Adding water at the job site to increase slump is one of the most common — and damaging — practices in
            concrete work. Each gallon of water added per yard increases slump by roughly 1 inch but reduces
            28-day compressive strength by approximately <strong>200 psi</strong>. If the spec calls for 4,000 psi
            concrete and the driver adds 5 gallons of water, you could be below spec. Always test slump before and
            after any water additions, and document who authorized the addition. For more on proper{' '}
            <Link href="/blog/concrete-mix-ratio-guide" className="text-blue-600 hover:underline">concrete mix ratios</Link>,
            see our dedicated guide.
          </p>
        </div>

        <h2 id="air-content" className="text-3xl font-bold mt-12">Air Content Test (ASTM C231 / ASTM C173)</h2>

        <h3>What It Measures</h3>
        <p>
          The air content test measures the <strong>percentage of entrained air</strong> in fresh concrete.
          Entrained air creates microscopic bubbles that allow water to expand when it freezes, preventing
          freeze-thaw damage. Air content is critical in cold climates.
        </p>

        <h3>Two Methods</h3>
        <p>
          <strong>Pressure Method (ASTM C231):</strong> Most common method. Uses a Type B pressure meter. Concrete is
          consolidated in the measuring bowl, the lid is clamped on, and air pressure is applied. The gauge reads
          air content directly. Takes about 10 minutes. Works for all aggregate except lightweight/highly porous
          aggregate.
        </p>
        <p>
          <strong>Volumetric Method (ASTM C173):</strong> Used for lightweight aggregate concrete where the pressure
          method gives inaccurate results. Concrete is placed in a roll-a-meter, water is added, and the meter is
          rolled to dislodge air. Air content is read on the calibrated neck. Takes about 15-20 minutes.
        </p>

        <h3>Required Air Content</h3>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Max Aggregate Size</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Severe Exposure (F2/F3)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Moderate Exposure (F1)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">No Freeze-Thaw (F0)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">3/8"</td>
                <td className="border border-gray-300 px-4 py-3">7.5%</td>
                <td className="border border-gray-300 px-4 py-3">6.0%</td>
                <td className="border border-gray-300 px-4 py-3">Not specified</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">1/2"</td>
                <td className="border border-gray-300 px-4 py-3">7.0%</td>
                <td className="border border-gray-300 px-4 py-3">5.5%</td>
                <td className="border border-gray-300 px-4 py-3">Not specified</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">3/4"</td>
                <td className="border border-gray-300 px-4 py-3">6.0%</td>
                <td className="border border-gray-300 px-4 py-3">5.0%</td>
                <td className="border border-gray-300 px-4 py-3">Not specified</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">1"</td>
                <td className="border border-gray-300 px-4 py-3">6.0%</td>
                <td className="border border-gray-300 px-4 py-3">4.5%</td>
                <td className="border border-gray-300 px-4 py-3">Not specified</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">1-1/2"</td>
                <td className="border border-gray-300 px-4 py-3">5.5%</td>
                <td className="border border-gray-300 px-4 py-3">4.5%</td>
                <td className="border border-gray-300 px-4 py-3">Not specified</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600">Per ACI 318-19 Table 19.3.3.1. Tolerance is ±1.5% for field testing.</p>

        <h2 id="temperature" className="text-3xl font-bold mt-12">Temperature Test (ASTM C1064)</h2>

        <p>
          The simplest field test — insert a thermometer into fresh concrete and read the temperature after
          at least 2 minutes. Concrete temperature affects setting time, strength development, and cracking risk.
        </p>

        <h3>Temperature Limits</h3>
        <ul>
          <li><strong>Hot weather (ACI 305):</strong> Concrete temperature should not exceed 95°F (35°C) at placement. Above this, rapid moisture loss causes plastic shrinkage cracking and reduced strength.</li>
          <li><strong>Cold weather (ACI 306):</strong> Concrete temperature should be at least 50°F (10°C) at placement for thin sections, 45°F for mass concrete. Below 40°F, cement hydration slows dramatically.</li>
          <li><strong>Ideal range:</strong> 60°F–80°F (15°C–27°C) for optimal strength development</li>
        </ul>

        <p>
          For detailed guidance on how temperature affects setting and strength, see our{' '}
          <Link href="/blog/concrete-curing-time-guide" className="text-blue-600 hover:underline">concrete curing time guide</Link>.
        </p>

        <h2 id="unit-weight" className="text-3xl font-bold mt-12">Unit Weight / Density Test (ASTM C138)</h2>

        <p>
          This test measures the density (unit weight) of fresh concrete, typically reported in pounds per
          cubic foot (pcf). Normal weight concrete runs 140–150 pcf. The test also calculates yield —
          the actual volume of concrete produced per batch versus the design volume.
        </p>

        <h3>Why Yield Matters</h3>
        <p>
          Yield tells you if you're getting what you paid for. If you ordered 10 yards and the yield test
          shows 9.5 yards per 10-yard batch, the ready-mix producer owes you concrete. Yield under 97% should
          be investigated — it usually means the batch plant is under-filling trucks or the air content is wrong.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <p className="font-mono text-lg mb-2"><strong>Yield = Total batch weight ÷ Unit weight</strong></p>
          <p className="text-gray-700 mb-0">
            Example: A 10-yard batch weighing 40,200 lbs with a unit weight of 148 pcf:
            Yield = 40,200 ÷ (148 × 27) = 40,200 ÷ 3,996 = 10.06 cubic yards ✓
          </p>
        </div>

        <h2 id="cylinder" className="text-3xl font-bold mt-12">Cylinder Break Test / Compressive Strength (ASTM C39)</h2>

        <h3>What It Measures</h3>
        <p>
          The compressive strength test is the most important test in concrete — it determines if the hardened
          concrete meets the specified design strength (f'c). Standard test cylinders are 6" × 12" or 4" × 8",
          cast from fresh concrete on-site, cured under controlled conditions, and broken at specific ages.
        </p>

        <h3>Making Cylinders (ASTM C31)</h3>
        <ol>
          <li>Use 6"×12" or 4"×8" single-use plastic molds</li>
          <li>Fill in two layers (4"×8") or three layers (6"×12")</li>
          <li>Rod each layer 25 times with a 3/8" (4×8) or 5/8" (6×12) tamping rod</li>
          <li>Tap the mold 10-15 times per layer to close rod holes</li>
          <li>Strike off the top, cap with plastic lid</li>
          <li>Store on-site for 24 ± 8 hours in a 60°F–80°F environment, protected from vibration</li>
          <li>Transport to the lab, cure in a moist room (73°F ± 3°F, 100% humidity) or lime-saturated water bath</li>
        </ol>

        <h3>Break Schedule</h3>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Break Age</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Expected Strength</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">7 days</td>
                <td className="border border-gray-300 px-4 py-3">~65–75% of f'c</td>
                <td className="border border-gray-300 px-4 py-3">Early strength indicator — can you load the slab?</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">28 days</td>
                <td className="border border-gray-300 px-4 py-3">100% of f'c (design)</td>
                <td className="border border-gray-300 px-4 py-3">Official acceptance test — pass/fail determination</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">56 days</td>
                <td className="border border-gray-300 px-4 py-3">~110-115% of f'c</td>
                <td className="border border-gray-300 px-4 py-3">Used when SCMs (fly ash, slag) are specified</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">3 days</td>
                <td className="border border-gray-300 px-4 py-3">~40-50% of f'c</td>
                <td className="border border-gray-300 px-4 py-3">Early stripping / form removal (optional)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Acceptance Criteria (ACI 318-19 Section 26.12.3)</h3>
        <p>Concrete strength is acceptable when BOTH conditions are met:</p>
        <ul>
          <li>Every average of any three consecutive strength tests ≥ f'c</li>
          <li>No individual strength test falls below f'c by more than 500 psi (for f'c ≤ 5,000 psi) or more than 0.10 × f'c (for f'c {`>`} 5,000 psi)</li>
        </ul>

        <h2 id="core" className="text-3xl font-bold mt-12">Core Testing (ASTM C42)</h2>

        <h3>When Core Testing Is Needed</h3>
        <p>
          Core testing is performed on hardened, in-place concrete — typically when cylinder break tests fail,
          when there's a dispute about concrete quality, or when evaluating an existing structure. A diamond-bit
          core drill cuts a cylindrical sample directly from the structure.
        </p>

        <h3>The Process</h3>
        <ol>
          <li><strong>Locate cores:</strong> Engineer specifies locations — typically 3 cores per questionable area</li>
          <li><strong>Drill:</strong> Diamond core bit (typically 4" diameter) cuts through the slab/wall</li>
          <li><strong>Extract:</strong> Remove core without damaging it — mark orientation</li>
          <li><strong>Condition:</strong> Soak or dry per specification (usually 48 hours submerged)</li>
          <li><strong>Cap:</strong> Sulfur or gypsum caps to create flat bearing surfaces</li>
          <li><strong>Break:</strong> Compression test per ASTM C39</li>
          <li><strong>Repair:</strong> Fill core holes with non-shrink grout</li>
        </ol>

        <h3>Acceptance from Core Tests (ACI 318-19 Section 26.12.4)</h3>
        <p>
          Core strength is acceptable if the average of three cores ≥ 0.85 × f'c AND no individual core is
          below 0.75 × f'c. Core strengths are typically 85-95% of cylinder strengths because in-place curing
          conditions are never as ideal as lab curing.
        </p>

        <h2 id="schmidt" className="text-3xl font-bold mt-12">Schmidt Hammer / Rebound Test (ASTM C805)</h2>

        <p>
          The Schmidt hammer (rebound hammer) is a <strong>non-destructive test</strong> that estimates
          concrete compressive strength by measuring the rebound of a spring-loaded mass striking the
          concrete surface. It's fast, portable, and doesn't damage the structure — but it's an estimate,
          not a definitive strength measurement.
        </p>

        <h3>How It Works</h3>
        <ol>
          <li>Hold the hammer perpendicular to the concrete surface</li>
          <li>Press the plunger against the surface until the hammer fires</li>
          <li>Read the rebound number on the scale (typically 10-60)</li>
          <li>Take 10 readings within a 6" diameter area, discard outliers, average the rest</li>
          <li>Use the manufacturer's correlation chart to estimate compressive strength</li>
        </ol>

        <h3>Limitations</h3>
        <ul>
          <li>Accuracy is ±15-25% — not precise enough for acceptance testing alone</li>
          <li>Surface moisture, carbonation, and aggregate type affect readings</li>
          <li>Must be calibrated against core test results for reliable estimates</li>
          <li>Different hammer positions (horizontal, vertical up, vertical down) require different correction factors</li>
          <li>Best used for uniformity surveys — comparing strength across a structure</li>
        </ul>

        <h2 id="other" className="text-3xl font-bold mt-12">Other Testing Methods</h2>

        <h3>Maturity Method (ASTM C1074)</h3>
        <p>
          Embeds temperature sensors in fresh concrete to track heat generation over time. Using a
          pre-established strength-maturity relationship, you can estimate in-place strength in real-time
          without breaking cylinders. Increasingly popular for determining when to strip forms or open
          pavement to traffic.
        </p>

        <h3>Ultrasonic Pulse Velocity (ASTM C597)</h3>
        <p>
          Sends ultrasonic pulses through concrete and measures transit time. Faster pulses = denser,
          stronger concrete. Non-destructive and useful for detecting internal voids, cracks, and delamination.
        </p>

        <h3>Chloride Permeability (ASTM C1202)</h3>
        <p>
          Measures how easily chloride ions (from deicing salts or seawater) penetrate concrete. Critical
          for bridge decks, parking garages, and coastal structures. Low permeability concrete resists
          chloride-induced rebar corrosion.
        </p>

        <h3>Petrographic Examination (ASTM C856)</h3>
        <p>
          A lab examination of concrete samples under a microscope. Identifies: aggregate type and condition,
          air void system, cement hydration products, evidence of ASR (alkali-silica reaction), fire damage,
          and carbonation depth. This is the CSI investigation of concrete — it reveals what happened and why.
        </p>

        <h2 id="when-required" className="text-3xl font-bold mt-12">When Each Test Is Required</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Project Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Required Tests</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Frequency</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Who Pays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Residential Slab/Driveway</td>
                <td className="border border-gray-300 px-4 py-3">Usually none required by code</td>
                <td className="border border-gray-300 px-4 py-3">N/A</td>
                <td className="border border-gray-300 px-4 py-3">N/A</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Residential Foundation</td>
                <td className="border border-gray-300 px-4 py-3">Cylinders (may be waived)</td>
                <td className="border border-gray-300 px-4 py-3">1 set per pour</td>
                <td className="border border-gray-300 px-4 py-3">Owner/GC</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Commercial Structure</td>
                <td className="border border-gray-300 px-4 py-3">Slump, air, temp, cylinders</td>
                <td className="border border-gray-300 px-4 py-3">Every 50-150 cy or every load</td>
                <td className="border border-gray-300 px-4 py-3">Owner/GC</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">DOT / Public Roads</td>
                <td className="border border-gray-300 px-4 py-3">All fresh + cylinders + sometimes maturity</td>
                <td className="border border-gray-300 px-4 py-3">Every load or per DOT spec</td>
                <td className="border border-gray-300 px-4 py-3">Contractor (bid item)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Post-Tension Structure</td>
                <td className="border border-gray-300 px-4 py-3">Cylinders + early break (for stressing)</td>
                <td className="border border-gray-300 px-4 py-3">Every pour + pre-stress breaks</td>
                <td className="border border-gray-300 px-4 py-3">Owner/GC</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Existing Structure Evaluation</td>
                <td className="border border-gray-300 px-4 py-3">Cores, Schmidt hammer, petrography</td>
                <td className="border border-gray-300 px-4 py-3">Per engineer's spec</td>
                <td className="border border-gray-300 px-4 py-3">Owner</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>ACI 318 Testing Frequency (Section 26.12.1)</h3>
        <p>For structural concrete, ACI 318 requires:</p>
        <ul>
          <li>At least one strength test (set of cylinders) for each <strong>150 cubic yards</strong> of concrete</li>
          <li>At least one test for each <strong>5,000 square feet</strong> of slab or wall surface</li>
          <li>At least one test per <strong>day of placement</strong></li>
          <li>Whichever of the above results in the most tests</li>
        </ul>

        <h2 id="costs" className="text-3xl font-bold mt-12">Concrete Testing Costs</h2>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Test</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Typical Cost</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Compressive strength (set of 3-4 cylinders)</td>
                <td className="border border-gray-300 px-4 py-3">$40–$80/set</td>
                <td className="border border-gray-300 px-4 py-3">Most common test</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Slump test (field)</td>
                <td className="border border-gray-300 px-4 py-3">$15–$30</td>
                <td className="border border-gray-300 px-4 py-3">Usually included with cylinder pickup</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Air content test (field)</td>
                <td className="border border-gray-300 px-4 py-3">$15–$30</td>
                <td className="border border-gray-300 px-4 py-3">Pressure or volumetric method</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Field technician (half day)</td>
                <td className="border border-gray-300 px-4 py-3">$300–$600</td>
                <td className="border border-gray-300 px-4 py-3">ACI-certified technician on-site</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Core drilling and testing</td>
                <td className="border border-gray-300 px-4 py-3">$150–$400/core</td>
                <td className="border border-gray-300 px-4 py-3">Includes drilling, lab testing, and report</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Petrographic analysis</td>
                <td className="border border-gray-300 px-4 py-3">$500–$1,500</td>
                <td className="border border-gray-300 px-4 py-3">Microscopic examination of concrete composition</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="related" className="text-3xl font-bold mt-12">Related Resources</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Continue Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📖 <Link href="/blog/concrete-mix-ratio-guide" className="text-orange-600 hover:underline font-medium">Concrete Mix Ratio Guide</Link> — Mix designs and proportioning</li>
            <li>📖 <Link href="/blog/concrete-slab-cost-guide" className="text-orange-600 hover:underline font-medium">Concrete Slab Cost Guide</Link> — Complete slab pricing breakdown</li>
            <li>📖 <Link href="/blog/how-to-bid-concrete-jobs" className="text-orange-600 hover:underline font-medium">How to Bid Concrete Jobs</Link> — Include testing costs in your bids</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Concrete Testing Estimates?</h3>
          <p className="text-gray-300 mb-6">Our Pro Estimate Templates include testing cost line items and frequency calculators.</p>
          <Link href="/templates" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Pro Templates →
          </Link>
        </div>
      </article>
    </main>
  );
}