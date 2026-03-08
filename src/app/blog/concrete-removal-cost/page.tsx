import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Concrete Removal Cost: Price Per Sq Ft Guide (2026) | EstimateConcrete',
  description: 'How much does concrete removal cost? Complete pricing guide with cost per sq ft for driveways, patios, sidewalks, and foundations. DIY vs hiring, equipment rental costs, dump fees, and how contractors should price removal jobs.',
  keywords: ['concrete removal cost', 'concrete demolition cost', 'concrete removal price per square foot', 'concrete breakup cost', 'concrete hauling cost', 'how much to remove concrete'],
}

export default function ConcreteRemovalCost() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Concrete Removal Cost</span>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Concrete Removal Cost: Complete Pricing Guide for 2026
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Whether you're a homeowner tearing out an old driveway or a contractor pricing demolition jobs,
          understanding concrete removal costs is essential. The national average cost ranges from{' '}
          <strong>$2 to $6 per square foot</strong>, but the actual price depends heavily on thickness,
          reinforcement, access, and disposal method. This guide breaks down every cost factor so you can
          budget accurately — or price your removal services profitably.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mt-0">Quick Cost Summary</h3>
          <ul className="text-blue-800 mb-0">
            <li><strong>Average cost:</strong> $2–$6 per square foot (demo + haul + disposal)</li>
            <li><strong>4" unreinforced slab:</strong> $2.00–$3.50/sq ft</li>
            <li><strong>4" reinforced slab:</strong> $3.00–$5.00/sq ft</li>
            <li><strong>6"+ reinforced slab:</strong> $4.00–$8.00/sq ft</li>
            <li><strong>Average driveway removal (600 sq ft):</strong> $1,200–$3,600</li>
            <li><strong>Average patio removal (300 sq ft):</strong> $600–$1,800</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mt-0">Table of Contents</h3>
          <ol className="text-gray-700 mb-0">
            <li><a href="#cost-by-thickness" className="text-blue-600 hover:underline">Cost by Concrete Thickness</a></li>
            <li><a href="#cost-by-project" className="text-blue-600 hover:underline">Cost by Project Type</a></li>
            <li><a href="#cost-breakdown" className="text-blue-600 hover:underline">Detailed Cost Breakdown</a></li>
            <li><a href="#diy-vs-hiring" className="text-blue-600 hover:underline">DIY vs Hiring a Contractor</a></li>
            <li><a href="#equipment-rental" className="text-blue-600 hover:underline">Equipment Rental Costs</a></li>
            <li><a href="#disposal" className="text-blue-600 hover:underline">Disposal & Dump Fees</a></li>
            <li><a href="#factors" className="text-blue-600 hover:underline">Factors That Affect Cost</a></li>
            <li><a href="#contractor-pricing" className="text-blue-600 hover:underline">How Contractors Should Price Removal Jobs</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <h2 id="cost-by-thickness" className="text-3xl font-bold mt-12">Concrete Removal Cost by Thickness</h2>

        <p>
          Thickness is the single biggest factor in concrete removal cost. Thicker slabs require more powerful
          equipment, take longer to break, weigh more to haul, and cost more to dispose of. Here's what to expect:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Thickness</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Reinforcement</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost/sq ft</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Weight/sq ft</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">2"–3"</td>
                <td className="border border-gray-300 px-4 py-3">None</td>
                <td className="border border-gray-300 px-4 py-3">$1.50–$2.50</td>
                <td className="border border-gray-300 px-4 py-3">25–37 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Easy — sledgehammer possible</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">4"</td>
                <td className="border border-gray-300 px-4 py-3">None</td>
                <td className="border border-gray-300 px-4 py-3">$2.00–$3.50</td>
                <td className="border border-gray-300 px-4 py-3">49 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Moderate — jackhammer needed</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">4"</td>
                <td className="border border-gray-300 px-4 py-3">Wire mesh</td>
                <td className="border border-gray-300 px-4 py-3">$2.50–$4.00</td>
                <td className="border border-gray-300 px-4 py-3">50 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Moderate — mesh slows breakup</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">4"</td>
                <td className="border border-gray-300 px-4 py-3">Rebar (#4)</td>
                <td className="border border-gray-300 px-4 py-3">$3.00–$5.00</td>
                <td className="border border-gray-300 px-4 py-3">52 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Hard — rebar cutting required</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">6"</td>
                <td className="border border-gray-300 px-4 py-3">Rebar</td>
                <td className="border border-gray-300 px-4 py-3">$4.00–$6.50</td>
                <td className="border border-gray-300 px-4 py-3">75 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Hard — heavy equipment recommended</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">8"–12"</td>
                <td className="border border-gray-300 px-4 py-3">Heavy rebar</td>
                <td className="border border-gray-300 px-4 py-3">$5.00–$10.00</td>
                <td className="border border-gray-300 px-4 py-3">100–150 lbs</td>
                <td className="border border-gray-300 px-4 py-3">Very hard — bobcat/excavator required</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Use our <Link href="/calculators/slab" className="text-blue-600 hover:underline">concrete slab calculator</Link> to
          estimate the weight and volume of concrete you'll need to remove based on dimensions.
        </p>

        <h2 id="cost-by-project" className="text-3xl font-bold mt-12">Cost by Project Type</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Project</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Size</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Thickness</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Removal Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Driveway</td>
                <td className="border border-gray-300 px-4 py-3">400–800 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">4"–6"</td>
                <td className="border border-gray-300 px-4 py-3">$1,200–$4,800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Patio</td>
                <td className="border border-gray-300 px-4 py-3">200–500 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">4"</td>
                <td className="border border-gray-300 px-4 py-3">$600–$2,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Sidewalk</td>
                <td className="border border-gray-300 px-4 py-3">100–400 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">4"</td>
                <td className="border border-gray-300 px-4 py-3">$300–$1,600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Garage Floor</td>
                <td className="border border-gray-300 px-4 py-3">400–600 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">4"–6"</td>
                <td className="border border-gray-300 px-4 py-3">$1,200–$3,600</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Pool Deck</td>
                <td className="border border-gray-300 px-4 py-3">300–800 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">4"</td>
                <td className="border border-gray-300 px-4 py-3">$900–$4,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Foundation (partial)</td>
                <td className="border border-gray-300 px-4 py-3">Varies</td>
                <td className="border border-gray-300 px-4 py-3">8"–12"</td>
                <td className="border border-gray-300 px-4 py-3">$3,000–$15,000+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Steps (per set)</td>
                <td className="border border-gray-300 px-4 py-3">3–6 steps</td>
                <td className="border border-gray-300 px-4 py-3">Solid</td>
                <td className="border border-gray-300 px-4 py-3">$300–$800</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="cost-breakdown" className="text-3xl font-bold mt-12">Detailed Cost Breakdown</h2>

        <p>
          A concrete removal job has three main cost components. Understanding each helps you budget accurately
          or build profitable bids:
        </p>

        <h3>1. Demolition / Breaking ($1.00–$3.50/sq ft)</h3>
        <p>
          This is the labor and equipment cost to break the concrete into pieces small enough to load and haul.
          Costs vary based on:
        </p>
        <ul>
          <li><strong>Unreinforced 4" slab:</strong> $1.00–$1.75/sq ft — straightforward jackhammer work</li>
          <li><strong>Reinforced 4" slab:</strong> $1.50–$2.50/sq ft — must cut rebar between pieces</li>
          <li><strong>6"+ reinforced slab:</strong> $2.50–$3.50/sq ft — requires larger equipment</li>
          <li><strong>Foundation walls:</strong> $3.00–$5.00/sq ft — thick, heavily reinforced, often in tight spaces</li>
        </ul>

        <h3>2. Loading & Hauling ($0.75–$1.50/sq ft)</h3>
        <p>
          Broken concrete must be loaded into trucks or dumpsters and transported to a disposal site. A standard
          4" slab weighs approximately 49 lbs per square foot, so a 500 sq ft patio generates about 12 tons of debris.
        </p>
        <ul>
          <li><strong>Dumpster rental (10-yard):</strong> $300–$600 — holds about 5 tons of concrete</li>
          <li><strong>Dump truck hauling:</strong> $250–$500 per load (10-15 tons per load)</li>
          <li><strong>Loading labor/equipment:</strong> $200–$500 per day (bobcat + operator)</li>
        </ul>

        <h3>3. Disposal / Dump Fees ($0.25–$1.50/sq ft)</h3>
        <p>
          Where the concrete ends up determines your disposal cost:
        </p>
        <ul>
          <li><strong>Concrete recycling facility:</strong> $5–$25 per ton — cheapest option, some accept free if clean</li>
          <li><strong>C&D landfill:</strong> $40–$75 per ton — moderate cost</li>
          <li><strong>Municipal landfill:</strong> $60–$100+ per ton — most expensive option</li>
        </ul>

        <p>
          <strong>Pro tip:</strong> Choosing{' '}
          <Link href="/blog/concrete-recycling-guide" className="text-blue-600 hover:underline">concrete recycling</Link>{' '}
          over landfill disposal can save $30–$75 per ton — that's $360–$900 saved on a typical 12-ton driveway removal.
        </p>

        <h2 id="diy-vs-hiring" className="text-3xl font-bold mt-12">DIY vs Hiring a Contractor</h2>

        <h3>When DIY Makes Sense</h3>
        <ul>
          <li>Small area (under 100 sq ft) — a small patio, walkway section, or single slab</li>
          <li>Thin, unreinforced concrete (3"–4" without rebar or mesh)</li>
          <li>Good access — no obstacles between the concrete and where a truck/dumpster can park</li>
          <li>You're physically capable — breaking concrete is extremely demanding work</li>
          <li>You have time — what a crew does in a day might take you a full weekend</li>
        </ul>

        <h3>DIY Cost Breakdown</h3>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rental/Cost</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Electric jackhammer rental</td>
                <td className="border border-gray-300 px-4 py-3">$65–$100/day</td>
                <td className="border border-gray-300 px-4 py-3">Good for 4" unreinforced</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Pneumatic breaker rental</td>
                <td className="border border-gray-300 px-4 py-3">$100–$200/day</td>
                <td className="border border-gray-300 px-4 py-3">Better for 4"+ reinforced</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Sledgehammer (16 lb)</td>
                <td className="border border-gray-300 px-4 py-3">$30–$50 (purchase)</td>
                <td className="border border-gray-300 px-4 py-3">Only for thin, cracked concrete</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Pry bar</td>
                <td className="border border-gray-300 px-4 py-3">$20–$40 (purchase)</td>
                <td className="border border-gray-300 px-4 py-3">For lifting and separating pieces</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Bolt cutters / angle grinder</td>
                <td className="border border-gray-300 px-4 py-3">$25–$75</td>
                <td className="border border-gray-300 px-4 py-3">For cutting rebar/mesh</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Dumpster rental (10-yard)</td>
                <td className="border border-gray-300 px-4 py-3">$300–$600</td>
                <td className="border border-gray-300 px-4 py-3">Includes dump fee for ~5 tons</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Wheelbarrow</td>
                <td className="border border-gray-300 px-4 py-3">$60–$100 (purchase)</td>
                <td className="border border-gray-300 px-4 py-3">For moving debris to dumpster</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Safety gear</td>
                <td className="border border-gray-300 px-4 py-3">$50–$100</td>
                <td className="border border-gray-300 px-4 py-3">Steel-toe boots, glasses, gloves, ear protection</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Total DIY cost for a 300 sq ft patio removal:</strong> $500–$1,000 (vs $900–$1,800 hiring a contractor)</p>

        <h3>When to Hire a Contractor</h3>
        <ul>
          <li>Large areas (over 200 sq ft) — the labor savings from machinery far outweigh the cost</li>
          <li>Reinforced concrete — rebar makes manual removal extremely tedious and dangerous</li>
          <li>Thick concrete (6"+) — you need heavy equipment, period</li>
          <li>Limited access — contractors have mini-excavators for tight spaces</li>
          <li>Underground utilities — professionals know how to locate and avoid gas, water, electric lines</li>
          <li>Time-sensitive projects — a crew removes in hours what takes a DIYer days</li>
        </ul>

        <h2 id="equipment-rental" className="text-3xl font-bold mt-12">Equipment Rental Costs</h2>

        <p>
          Whether you're a homeowner doing it yourself or a contractor who doesn't own demolition equipment,
          here are current rental rates:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Equipment</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Daily Rate</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Weekly Rate</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Electric Jackhammer (35 lb)</td>
                <td className="border border-gray-300 px-4 py-3">$65–$100</td>
                <td className="border border-gray-300 px-4 py-3">$200–$350</td>
                <td className="border border-gray-300 px-4 py-3">4" unreinforced, small jobs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Electric Jackhammer (65 lb)</td>
                <td className="border border-gray-300 px-4 py-3">$100–$175</td>
                <td className="border border-gray-300 px-4 py-3">$350–$550</td>
                <td className="border border-gray-300 px-4 py-3">4"–6" reinforced, medium jobs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Pneumatic Breaker (90 lb)</td>
                <td className="border border-gray-300 px-4 py-3">$150–$250</td>
                <td className="border border-gray-300 px-4 py-3">$500–$800</td>
                <td className="border border-gray-300 px-4 py-3">6"+ reinforced, commercial</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Bobcat S70 (mini skid steer)</td>
                <td className="border border-gray-300 px-4 py-3">$200–$350</td>
                <td className="border border-gray-300 px-4 py-3">$700–$1,200</td>
                <td className="border border-gray-300 px-4 py-3">Loading debris, tight access</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Skid Steer w/ Breaker</td>
                <td className="border border-gray-300 px-4 py-3">$350–$500</td>
                <td className="border border-gray-300 px-4 py-3">$1,200–$1,800</td>
                <td className="border border-gray-300 px-4 py-3">Medium to large jobs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Mini Excavator (5-8 ton)</td>
                <td className="border border-gray-300 px-4 py-3">$300–$500</td>
                <td className="border border-gray-300 px-4 py-3">$1,000–$1,800</td>
                <td className="border border-gray-300 px-4 py-3">Foundation demo, large slabs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Concrete Saw (walk-behind)</td>
                <td className="border border-gray-300 px-4 py-3">$150–$250</td>
                <td className="border border-gray-300 px-4 py-3">$500–$800</td>
                <td className="border border-gray-300 px-4 py-3">Cutting control joints, partial removal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="disposal" className="text-3xl font-bold mt-12">Disposal & Dump Fees</h2>

        <p>
          Disposal is often the most overlooked cost in concrete removal. Here's what you'll pay depending on
          your disposal method:
        </p>

        <h3>Disposal Options Compared</h3>
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Disposal Method</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost per Ton</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost for 10 Tons</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Concrete Recycler</td>
                <td className="border border-gray-300 px-4 py-3">$5–$25</td>
                <td className="border border-gray-300 px-4 py-3">$50–$250</td>
                <td className="border border-gray-300 px-4 py-3">Best option — cheapest and eco-friendly</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">C&D Landfill</td>
                <td className="border border-gray-300 px-4 py-3">$40–$75</td>
                <td className="border border-gray-300 px-4 py-3">$400–$750</td>
                <td className="border border-gray-300 px-4 py-3">Moderate cost, widely available</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Municipal Landfill</td>
                <td className="border border-gray-300 px-4 py-3">$60–$100+</td>
                <td className="border border-gray-300 px-4 py-3">$600–$1,000+</td>
                <td className="border border-gray-300 px-4 py-3">Most expensive, some won't accept concrete</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Dumpster (all-inclusive)</td>
                <td className="border border-gray-300 px-4 py-3">$50–$80/ton equiv.</td>
                <td className="border border-gray-300 px-4 py-3">$500–$800</td>
                <td className="border border-gray-300 px-4 py-3">Convenient but heavy = overage fees</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">On-Site Crushing</td>
                <td className="border border-gray-300 px-4 py-3">$8–$15</td>
                <td className="border border-gray-300 px-4 py-3">$80–$150</td>
                <td className="border border-gray-300 px-4 py-3">Reuse as fill — zero hauling cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-900 mt-0">💡 Save Big on Disposal</h3>
          <p className="text-green-800 mb-0">
            Always check for <Link href="/blog/concrete-recycling-guide" className="text-blue-600 hover:underline">concrete recycling facilities</Link> in
            your area before renting a dumpster. Many recyclers charge $5–$15/ton for clean concrete vs $60–$100+/ton at
            a landfill. On a 600 sq ft driveway removal (about 15 tons), that's a savings of $675–$1,275.
            Some recyclers even accept clean concrete <strong>for free</strong> because they profit from selling the RCA.
          </p>
        </div>

        <h2 id="factors" className="text-3xl font-bold mt-12">Factors That Affect Concrete Removal Cost</h2>

        <h3>1. Reinforcement Type</h3>
        <p>
          Rebar and wire mesh increase removal time and cost by 30-50%. Rebar must be cut between concrete
          pieces with a torch, angle grinder, or hydraulic cutter. Wire mesh tangles in equipment and must be
          cut and separated — it's the most frustrating reinforcement to deal with.
        </p>

        <h3>2. Access & Location</h3>
        <p>
          Easy access (concrete right next to a street where a dumpster can sit) keeps costs low. Difficult
          access scenarios that increase cost:
        </p>
        <ul>
          <li><strong>Backyard with no gate:</strong> Debris must be wheelbarrowed to the front — add 20-40% to labor</li>
          <li><strong>Enclosed patio:</strong> Mini-excavator can't access — hand-demolition required</li>
          <li><strong>Below-grade (basement):</strong> Must hoist debris out — add 30-50% to labor</li>
          <li><strong>Hillside:</strong> Difficult equipment positioning — add 15-25%</li>
        </ul>

        <h3>3. Underlying Utilities</h3>
        <p>
          Gas lines, water mains, electrical conduit, or irrigation under or near the concrete require careful
          hand-demolition in those areas. Always call 811 before any demolition work. Hitting a gas line doesn't
          just add cost — it endangers lives.
        </p>

        <h3>4. Attached Structures</h3>
        <p>
          Concrete that abuts a house foundation, pool, or retaining wall requires precision demolition to avoid
          damaging the adjacent structure. Saw-cutting a clean edge adds $3–$5 per linear foot.
        </p>

        <h3>5. Concrete Condition</h3>
        <p>
          Ironically, already-cracked and deteriorated concrete is often easier (cheaper) to remove than sound concrete.
          Post-tension slabs are a special case — the tensioned cables can be extremely dangerous if cut improperly.
          Post-tension removal typically costs 50-100% more than standard reinforced concrete.
        </p>

        <h3>6. Geographic Location</h3>
        <p>
          Labor rates, dump fees, and equipment costs vary significantly by region. Coastal cities and the
          Northeast tend to be 30-50% more expensive than the Midwest and South for concrete removal.
        </p>

        <h2 id="contractor-pricing" className="text-3xl font-bold mt-12">How Contractors Should Price Removal Jobs</h2>

        <p>
          If you're a contractor offering concrete removal services, here's how to build profitable bids:
        </p>

        <h3>The Cost-Plus Method</h3>
        <div className="bg-gray-100 p-6 rounded-lg my-6">
          <p className="font-mono text-lg mb-2"><strong>Bid Price = (Labor + Equipment + Disposal + Overhead) × Markup</strong></p>
          <p className="text-gray-700 mb-0">
            Standard markup for concrete removal: 1.35–1.65× (35-65% margin).
            Higher markup for difficult access, reinforced concrete, or rush jobs.
          </p>
        </div>

        <h3>Step-by-Step Estimating Process</h3>
        <ol>
          <li><strong>Measure the area:</strong> Length × width in square feet</li>
          <li><strong>Determine thickness:</strong> Check edges, drill test holes if needed</li>
          <li><strong>Identify reinforcement:</strong> Wire mesh, rebar, or none? Rebar size?</li>
          <li><strong>Calculate weight:</strong> Area × thickness × 150 lbs/cu ft ÷ 2,000 = tons</li>
          <li><strong>Estimate labor hours:</strong> A 2-man crew with a jackhammer breaks ~100-200 sq ft of 4" unreinforced per hour</li>
          <li><strong>Get disposal pricing:</strong> Call local recyclers and landfills for current rates</li>
          <li><strong>Add equipment costs:</strong> Owned equipment should be charged at rental-equivalent rates</li>
          <li><strong>Apply markup:</strong> 35-65% depending on job complexity and competition</li>
        </ol>

        <h3>Pricing Example: 600 sq ft Driveway Removal</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <p className="text-yellow-900 mb-2"><strong>Job specs:</strong> 600 sq ft, 4" thick with wire mesh, good access</p>
          <ul className="text-yellow-800 mb-4">
            <li>Weight: 600 × 0.333 × 150 = ~30,000 lbs = 15 tons</li>
            <li>Labor: 2 guys × 8 hrs × $35/hr = $560</li>
            <li>Equipment (jackhammer + bobcat): $450/day</li>
            <li>Hauling: 2 dump truck loads × $200 = $400</li>
            <li>Disposal (recycler at $12/ton): 15 × $12 = $180</li>
            <li>Gas/misc: $100</li>
            <li><strong>Total cost: $1,690</strong></li>
          </ul>
          <p className="text-yellow-900 mb-2"><strong>Bid at 1.50× markup:</strong></p>
          <p className="text-yellow-800 font-bold mb-0">$1,690 × 1.50 = $2,535 ($4.23/sq ft) — Profit: $845</p>
        </div>

        <h3>Minimum Job Charges</h3>
        <p>
          Always have a minimum job charge to cover mobilization, setup, and fixed costs. Most concrete removal
          contractors set a minimum of <strong>$500–$1,000</strong> regardless of job size. It costs nearly the
          same in setup time to remove 50 sq ft as it does 200 sq ft.
        </p>

        <h2 id="faq" className="text-3xl font-bold mt-12">Frequently Asked Questions</h2>

        <div className="space-y-6 my-8">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">How much does it cost to remove a concrete driveway?</h3>
            <p className="text-gray-700 mb-0">
              A typical 2-car concrete driveway (500-700 sq ft, 4" thick) costs $1,200–$4,200 to remove, including
              demolition, hauling, and disposal. Reinforced driveways run toward the higher end. Average cost is around
              $3.00–$4.50 per square foot for professional removal.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">Can I break up concrete myself?</h3>
            <p className="text-gray-700 mb-0">
              Yes, for small areas (under 100 sq ft) of unreinforced concrete 4" or thinner, DIY is feasible with a
              rented jackhammer ($65–$100/day). However, it's extremely physical work. Most homeowners underestimate
              the labor involved — 4" concrete weighs 49 lbs per square foot. For anything larger or reinforced,
              hiring a contractor is strongly recommended.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">What's the cheapest way to dispose of concrete?</h3>
            <p className="text-gray-700 mb-0">
              The cheapest disposal option is taking concrete to a recycling facility, which typically charges $5–$25
              per ton (some accept clean concrete for free). Compare this to $60–$100+ per ton at a landfill. You can
              also list broken concrete for free on Craigslist or Facebook Marketplace — people use it for fill,
              drainage, and erosion control.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">How long does concrete removal take?</h3>
            <p className="text-gray-700 mb-0">
              A professional crew (2-3 workers with proper equipment) can typically remove 500-1,000 sq ft of 4"
              unreinforced concrete in one day, including hauling. Reinforced concrete takes 30-50% longer. A DIYer
              with a rented jackhammer should plan on 50-100 sq ft per day for 4" unreinforced concrete — it's
              exhausting work.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">Do I need a permit to remove concrete?</h3>
            <p className="text-gray-700 mb-0">
              In most areas, you don't need a permit for removing flatwork (driveways, patios, sidewalks) on your
              own property. However, permits may be required for: removing a foundation (structural work), working
              near property lines or public right-of-way, or if you plan to replace the concrete with something that
              requires a permit. Always call 811 before breaking ground to locate underground utilities.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-900 mt-0">What is the cost to remove concrete per square foot?</h3>
            <p className="text-gray-700 mb-0">
              National average: $2–$6 per square foot for complete removal (demolition + hauling + disposal). Thin
              unreinforced concrete runs $1.50–$3.00/sq ft. Standard 4" reinforced concrete costs $3.00–$5.00/sq ft.
              Thick foundation concrete (8"+) can run $5.00–$10.00/sq ft.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-900 mt-0">Calculate Your Concrete Project</h3>
          <p className="text-blue-800 mb-4">
            Planning to replace the concrete you're removing? Use our calculators to estimate materials for
            your new pour, or learn about recycling the old concrete to save on disposal costs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/calculators/slab" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors no-underline">
              Concrete Slab Calculator
            </Link>
            <Link href="/blog/concrete-recycling-guide" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors no-underline">
              Concrete Recycling Guide
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
