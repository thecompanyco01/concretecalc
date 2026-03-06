import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How to Bid Concrete Jobs: The Complete Guide for Contractors (2026)",
  description:
    "Learn how to bid concrete jobs accurately and profitably. Step-by-step formula for calculating material, labor, overhead, and profit margin. Includes real examples and pricing tables.",
  keywords:
    "how to bid concrete jobs, concrete bidding, concrete estimating, concrete pricing, concrete job pricing formula, how to price concrete work",
};

export default function HowToBidConcreteJobs() {
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
        /{" "}
        <span className="text-gray-900 font-medium">
          How to Bid Concrete Jobs
        </span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>How to Bid Concrete Jobs: The Complete Guide for Contractors</h1>

        <p className="lead text-xl text-gray-600">
          Bidding concrete jobs is the single most important skill in running a
          concrete business. Bid too high and you lose work. Bid too low and you
          lose money. This guide walks you through the exact formula experienced
          concrete contractors use to create accurate, profitable bids.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">📐 Quick Reference</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">
              Concrete Slab Calculator
            </Link>{" "}
            to get accurate material quantities and cost estimates for any
            project. Then use this guide to build the complete bid.
          </p>
        </div>

        <h2 id="formula">The Concrete Bidding Formula</h2>
        <p>
          Every concrete bid comes down to this formula:
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-6 not-prose my-6 text-center">
          <p className="text-lg font-mono">
            <strong>Bid Price</strong> = (Material + Labor + Equipment +
            Overhead) × (1 + Profit Margin)
          </p>
        </div>

        <p>
          That&apos;s it. The challenge is getting each component right. Let&apos;s break
          down every piece.
        </p>

        <h2 id="step-1">Step 1: Calculate Material Costs</h2>
        <p>
          Material is usually 25-35% of the total bid. Start with the concrete
          itself, then add reinforcement, forms, and finishing materials.
        </p>

        <h3>Concrete Volume</h3>
        <p>
          Use this formula to calculate cubic yards:
        </p>
        <p>
          <strong>Cubic Yards = (Length × Width × Thickness in feet) ÷ 27</strong>
        </p>
        <p>
          Always add 10% for waste. You&apos;ll need it — ground is never perfectly
          level, forms bow slightly, and you can&apos;t return unused concrete.
        </p>

        <h3>2026 Concrete Pricing</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Mix Type</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Price per Yard
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Common Use
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Standard (3,000 PSI)</td>
                <td className="px-4 py-2">$125-$155</td>
                <td className="px-4 py-2">Sidewalks, patios</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Standard (4,000 PSI)</td>
                <td className="px-4 py-2">$140-$170</td>
                <td className="px-4 py-2">Driveways, slabs</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">High-strength (5,000 PSI)</td>
                <td className="px-4 py-2">$160-$200</td>
                <td className="px-4 py-2">Foundations, commercial</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Fiber-reinforced</td>
                <td className="px-4 py-2">$155-$185</td>
                <td className="px-4 py-2">Slabs, driveways</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Colored/decorative</td>
                <td className="px-4 py-2">$200-$300+</td>
                <td className="px-4 py-2">Stamped, exposed aggregate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Short load fees:</strong> Most ready-mix companies charge
          $50-$100 extra for orders under 5 cubic yards. Factor this in for small
          residential jobs.
        </p>

        <h3>Reinforcement Costs</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Material</th>
                <th className="text-left px-4 py-2 font-semibold">Cost</th>
                <th className="text-left px-4 py-2 font-semibold">When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Wire mesh (6×6 W1.4)</td>
                <td className="px-4 py-2">$0.35-$0.75/sq ft</td>
                <td className="px-4 py-2">Patios, sidewalks</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">#4 rebar @ 18&quot; OC</td>
                <td className="px-4 py-2">$1.00-$1.50/sq ft</td>
                <td className="px-4 py-2">Driveways, garages</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">#5 rebar @ 12&quot; OC</td>
                <td className="px-4 py-2">$1.50-$2.50/sq ft</td>
                <td className="px-4 py-2">Foundations, heavy loads</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Fiber reinforcement</td>
                <td className="px-4 py-2">$0.15-$0.30/sq ft</td>
                <td className="px-4 py-2">Crack resistance supplement</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Form Material</h3>
        <p>
          Wood forms cost $0.50-$1.00 per linear foot of material. Budget $1-$2
          per linear foot when you include stakes and oil. For a 20×20 slab,
          that&apos;s 80 linear feet = $80-$160 in form material.
        </p>

        <h2 id="step-2">Step 2: Calculate Labor Costs</h2>
        <p>
          Labor is typically the largest cost — 35-45% of most residential
          concrete bids. There are two ways to calculate it:
        </p>

        <h3>Method 1: Per Square Foot (Quick)</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Task</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Labor Cost/sq ft
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Site prep & grading</td>
                <td className="px-4 py-2">$1.00-$3.00</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Forming</td>
                <td className="px-4 py-2">$1.00-$2.00</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Rebar/mesh placement</td>
                <td className="px-4 py-2">$0.50-$1.00</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Pour & finish (broom)</td>
                <td className="px-4 py-2">$2.00-$4.00</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Pour & finish (stamped)</td>
                <td className="px-4 py-2">$5.00-$10.00</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Strip forms & cleanup</td>
                <td className="px-4 py-2">$0.50-$1.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Total labor for a standard broom-finished slab:</strong>{" "}
          $5-$10 per square foot, depending on complexity and your region.
        </p>

        <h3>Method 2: Hourly Rate (Precise)</h3>
        <p>
          For more accurate bids, estimate how many crew-hours the job will take:
        </p>
        <ol>
          <li>Estimate total hours per task (prep, form, pour, finish, cleanup)</li>
          <li>
            Multiply by crew size (most residential pours need 3-4 people)
          </li>
          <li>
            Multiply by your <strong>burdened labor rate</strong> — not just
            wages, but also payroll taxes, workers comp, insurance, and benefits
            (typically 1.3-1.5× the hourly wage)
          </li>
        </ol>
        <p>
          Example: A 400 sq ft driveway might take a 3-person crew 8 hours.
          At a burdened rate of $35/hour, that&apos;s 3 × 8 × $35 = <strong>$840 in labor</strong>.
        </p>

        <h2 id="step-3">Step 3: Equipment Costs</h2>
        <p>
          Don&apos;t forget the tools and equipment that go into every pour:
        </p>
        <ul>
          <li>Concrete pump rental: $150-$300+ per pour (for hard-to-reach areas)</li>
          <li>Bobcat/skid steer: $250-$400/day for site prep</li>
          <li>Power trowel rental: $75-$150/day</li>
          <li>Saw cutting: $1-$2 per linear foot for control joints</li>
          <li>Hand tools, fuel, consumables: $50-$100 per job</li>
        </ul>
        <p>
          For jobs where you own the equipment, charge a usage fee to cover
          depreciation and maintenance — typically $50-$200 per job depending on
          what you use.
        </p>

        <h2 id="step-4">Step 4: Overhead</h2>
        <p>
          Overhead is everything that keeps your business running but isn&apos;t tied
          to a specific job:
        </p>
        <ul>
          <li>Vehicle payments and fuel</li>
          <li>General liability insurance</li>
          <li>Workers compensation insurance</li>
          <li>Business license and permits</li>
          <li>Office expenses, phone, accounting</li>
          <li>Marketing and advertising</li>
        </ul>
        <p>
          <strong>Rule of thumb:</strong> Overhead typically adds 10-20% to your
          direct costs. Track your actual annual overhead and divide by the
          number of jobs you do per year for a precise per-job number.
        </p>

        <h2 id="step-5">Step 5: Profit Margin</h2>
        <p>
          This is your pay for taking the risk, managing the project, and running
          the business. Don&apos;t skip it — working for free isn&apos;t a business plan.
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Margin Level
                </th>
                <th className="text-left px-4 py-2 font-semibold">When to Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">10%</td>
                <td className="px-4 py-2">
                  Simple, repeat work. Established client relationships.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">15%</td>
                <td className="px-4 py-2">
                  Standard residential work. Most common margin.
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">20%+</td>
                <td className="px-4 py-2">
                  Complex work, decorative, tight timelines, or high-risk
                  projects.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="example">Real-World Bidding Example: 20×20 Patio</h2>
        <p>
          Let&apos;s walk through a complete bid for a 400 sq ft broom-finished patio,
          4&quot; thick, with #4 rebar @ 18&quot; OC.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Item</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Calculation
                </th>
                <th className="text-right px-4 py-2 font-semibold">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete (5.5 yd³ w/ waste)</td>
                <td className="px-4 py-2">5.5 × $150</td>
                <td className="px-4 py-2 text-right">$825</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Rebar (#4 @ 18&quot; OC)</td>
                <td className="px-4 py-2">400 sq ft × $1.25</td>
                <td className="px-4 py-2 text-right">$500</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Forms & stakes</td>
                <td className="px-4 py-2">80 LF × $1.50</td>
                <td className="px-4 py-2 text-right">$120</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Base gravel (4&quot;)</td>
                <td className="px-4 py-2">~5 tons × $35</td>
                <td className="px-4 py-2 text-right">$175</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Misc materials</td>
                <td className="px-4 py-2">
                  Curing compound, expansion joint, etc.
                </td>
                <td className="px-4 py-2 text-right">$80</td>
              </tr>
              <tr className="border-t font-semibold bg-blue-50">
                <td className="px-4 py-2">Materials Subtotal</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 text-right">$1,700</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Labor</td>
                <td className="px-4 py-2">3 crew × 8 hrs × $35/hr</td>
                <td className="px-4 py-2 text-right">$840</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Equipment</td>
                <td className="px-4 py-2">Tools, saw, fuel</td>
                <td className="px-4 py-2 text-right">$150</td>
              </tr>
              <tr className="border-t font-semibold bg-blue-50">
                <td className="px-4 py-2">Direct Costs</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 text-right">$2,690</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Overhead (15%)</td>
                <td className="px-4 py-2">$2,690 × 0.15</td>
                <td className="px-4 py-2 text-right">$404</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Profit (15%)</td>
                <td className="px-4 py-2">$3,094 × 0.15</td>
                <td className="px-4 py-2 text-right">$464</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold text-lg">
                <td className="px-4 py-3">Total Bid</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-right text-orange-600">
                  $3,558
                </td>
              </tr>
              <tr className="border-t bg-orange-50">
                <td className="px-4 py-2 font-semibold">
                  Cost per sq ft
                </td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 text-right font-semibold">
                  $8.90/sq ft
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          At $8.90 per square foot for a broom-finished patio, this bid is
          competitive in most US markets (typical range: $6-$12/sq ft installed).
        </p>

        <h2 id="pricing-guide">Quick Pricing Guide by Project Type</h2>
        <p>
          Use these ranges as sanity checks when building your bids:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Project Type
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Typical $/sq ft (installed)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Sidewalk (4&quot;)</td>
                <td className="px-4 py-2">$6-$10</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Patio — broom finish (4&quot;)</td>
                <td className="px-4 py-2">$6-$12</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Patio — stamped</td>
                <td className="px-4 py-2">$12-$25</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Driveway (5-6&quot;)</td>
                <td className="px-4 py-2">$8-$18</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Garage floor (6&quot;)</td>
                <td className="px-4 py-2">$8-$14</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Foundation (varies)</td>
                <td className="px-4 py-2">$10-$20+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="mistakes">7 Bidding Mistakes That Kill Profits</h2>
        <ol>
          <li>
            <strong>Forgetting the waste factor.</strong> Always add 10%. Running
            short during a pour creates cold joints and costs you $200+ for a
            short load.
          </li>
          <li>
            <strong>Not calculating burdened labor rate.</strong> Your guys cost
            more than their hourly wage. Payroll taxes, workers comp, and
            insurance add 30-50% on top.
          </li>
          <li>
            <strong>Ignoring overhead.</strong> Insurance, truck payments, and
            tools don&apos;t pay for themselves. If you don&apos;t include overhead, you&apos;re
            paying to work.
          </li>
          <li>
            <strong>Bidding without visiting the site.</strong> Photos don&apos;t show
            grade changes, access issues, or buried utilities. Always walk the
            site.
          </li>
          <li>
            <strong>Lowballing to get the job.</strong> You&apos;ll win the work and
            lose money. It&apos;s better to pass on a job than to do it at a loss.
          </li>
          <li>
            <strong>Forgetting demolition/removal.</strong> Tearing out an old
            patio or driveway costs $2-$6/sq ft. If the client expects it and
            you didn&apos;t bid it, that&apos;s on you.
          </li>
          <li>
            <strong>No profit margin.</strong> Covering costs isn&apos;t a business —
            it&apos;s an expensive hobby. Always add 10-20% profit minimum.
          </li>
        </ol>

        <h2 id="tips">Pro Tips for Better Bids</h2>
        <ul>
          <li>
            <strong>Track your actual costs on every job.</strong> After each
            project, compare your bid to actual costs. This is how you get
            better at estimating.
          </li>
          <li>
            <strong>Build a pricing spreadsheet.</strong> Or use our{" "}
            <Link href="/templates">Pro Estimate Template</Link> — it
            auto-calculates material, labor, and margin from dimensions.
          </li>
          <li>
            <strong>Present professional estimates.</strong> A clean, itemized
            bid builds client confidence and justifies your price. Handwritten
            quotes on scrap paper lose jobs.
          </li>
          <li>
            <strong>Adjust for complexity.</strong> Stamped concrete, colored
            pours, slopes, tight access, and decorative work all deserve higher
            margins.
          </li>
          <li>
            <strong>Get good at saying no.</strong> Not every job is worth doing.
            If a client wants a $3/sq ft installed price, let your competitor
            take the loss.
          </li>
        </ul>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Bid Like a Pro?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template turns these calculations into a
            professional bid sheet you can hand to clients. Auto-calculates
            material, labor, and profit from project dimensions.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="calculator">Use Our Free Concrete Calculator</h2>
        <p>
          Start every bid with accurate material quantities. Our{" "}
          <Link href="/calculators/slab">Concrete Slab Calculator</Link>{" "}
          gives you cubic yards, bags, rebar estimates, and cost breakdowns in
          seconds. It&apos;s free and built specifically for contractors.
        </p>
      </article>
    </div>
  );
}
