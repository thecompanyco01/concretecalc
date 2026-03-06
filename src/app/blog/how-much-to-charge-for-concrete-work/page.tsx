import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much to Charge for Concrete Work (2026 Pricing Guide) | ConcreteCalc",
  description: "Complete pricing guide for concrete contractors. Per-square-foot rates by job type, regional pricing data, how to calculate your rate, and profit margin targets.",
  keywords: "how much to charge for concrete work, concrete pricing per square foot, concrete contractor rates, concrete labor rates 2026",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How Much to Charge for Concrete Work</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much to Charge for Concrete Work in 2026</h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Pricing concrete work is the single most important skill a contractor can master. Charge too little and 
          you&apos;re working for free after expenses. Charge too much and you lose every bid. This guide gives you 
          exact per-square-foot rates by job type, how to calculate YOUR rate based on your actual costs, and what 
          top-earning contractors do differently.
        </p>

        <h2>Quick Reference: Concrete Pricing by Job Type (2026)</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Job Type</th>
                <th className="text-left">Low End</th>
                <th className="text-left">Average</th>
                <th className="text-left">High End</th>
                <th className="text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Plain slab (broom finish)</td><td>$6/sq ft</td><td>$10/sq ft</td><td>$14/sq ft</td><td>Most competitive segment</td></tr>
              <tr><td>Driveway</td><td>$8/sq ft</td><td>$12/sq ft</td><td>$18/sq ft</td><td>Thicker = more material</td></tr>
              <tr><td>Patio</td><td>$8/sq ft</td><td>$13/sq ft</td><td>$20/sq ft</td><td>Finish quality drives price</td></tr>
              <tr><td>Sidewalk</td><td>$6/sq ft</td><td>$10/sq ft</td><td>$15/sq ft</td><td>Often city-spec required</td></tr>
              <tr><td>Stamped concrete</td><td>$12/sq ft</td><td>$18/sq ft</td><td>$28/sq ft</td><td>Skill premium, less competition</td></tr>
              <tr><td>Exposed aggregate</td><td>$10/sq ft</td><td>$16/sq ft</td><td>$24/sq ft</td><td>Premium finish</td></tr>
              <tr><td>Colored concrete</td><td>$8/sq ft</td><td>$14/sq ft</td><td>$22/sq ft</td><td>Integral or topical color</td></tr>
              <tr><td>Foundation (monolithic)</td><td>$8/sq ft</td><td>$13/sq ft</td><td>$20/sq ft</td><td>Engineering requirements vary</td></tr>
              <tr><td>Foundation (stem wall)</td><td>$12/sq ft</td><td>$18/sq ft</td><td>$30/sq ft</td><td>More forming, more labor</td></tr>
              <tr><td>Retaining wall</td><td>$25/sq ft face</td><td>$40/sq ft</td><td>$60/sq ft</td><td>Height and engineering drive cost</td></tr>
              <tr><td>Concrete steps</td><td>$300/step</td><td>$500/step</td><td>$900/step</td><td>Complex forming</td></tr>
              <tr><td>Garage floor (new)</td><td>$6/sq ft</td><td>$10/sq ft</td><td>$16/sq ft</td><td>Similar to basic slab</td></tr>
              <tr><td>Pool deck</td><td>$10/sq ft</td><td>$16/sq ft</td><td>$25/sq ft</td><td>Non-slip finish required</td></tr>
              <tr><td>Concrete countertop</td><td>$65/LF</td><td>$100/LF</td><td>$150/LF</td><td>Artisan pricing, high margin</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-blue-900 mt-0">🧮 Calculate Your Job Cost</h3>
          <p className="text-blue-800 mb-0">
            Need exact material quantities and costs? Use our free{" "}
            <Link href="/calculators/slab" className="text-blue-600 font-semibold hover:underline">
              Concrete Slab Calculator
            </Link>{" "}
            or{" "}
            <Link href="/calculators/driveway" className="text-blue-600 font-semibold hover:underline">
              Driveway Calculator
            </Link>{" "}
            to get precise numbers before pricing your job.
          </p>
        </div>

        <h2>How to Calculate YOUR Rate (Not Just Copy Someone Else&apos;s)</h2>
        
        <p>
          Generic pricing tables are a starting point, not your answer. Your rate depends on YOUR costs. Here&apos;s 
          the formula that profitable contractors use:
        </p>

        <h3>Step 1: Calculate Your Direct Costs Per Job</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4">
          <p className="font-mono text-sm mb-2"><strong>Materials</strong> (concrete, rebar, gravel, forms, curing compound)</p>
          <p className="font-mono text-sm mb-2">+ <strong>Labor</strong> (crew wages × hours, including your own time)</p>
          <p className="font-mono text-sm mb-2">+ <strong>Equipment</strong> (rental, fuel, wear)</p>
          <p className="font-mono text-sm mb-2">+ <strong>Subcontractors</strong> (pump truck, excavation)</p>
          <p className="font-mono text-sm mb-0">= <strong>Total Direct Cost</strong></p>
        </div>

        <h3>Step 2: Add Your Overhead (Most Contractors Forget This)</h3>
        <p>Your overhead includes everything you pay whether or not you&apos;re working:</p>
        <ul>
          <li>Truck payment + insurance + fuel</li>
          <li>Business insurance (GL + workers comp)</li>
          <li>License and permit fees</li>
          <li>Office/yard rent</li>
          <li>Phone, accounting, software</li>
          <li>Tool replacement and maintenance</li>
          <li>Marketing costs</li>
          <li>Health insurance</li>
        </ul>
        <p>
          <strong>Rule of thumb:</strong> Most concrete contractors have 10-20% overhead. Calculate your actual annual 
          overhead, divide by the number of billable days (typically 200-220), and that&apos;s your daily overhead cost. 
          Allocate it to each job proportionally.
        </p>

        <h3>Step 3: Add Your Profit Margin</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4">
          <p className="font-mono text-sm mb-2"><strong>Direct Cost</strong>: $7,805</p>
          <p className="font-mono text-sm mb-2">+ <strong>Overhead (15%)</strong>: $1,171</p>
          <p className="font-mono text-sm mb-2">= <strong>Break-even</strong>: $8,976</p>
          <p className="font-mono text-sm mb-2">+ <strong>Profit (20%)</strong>: $1,795</p>
          <p className="font-mono text-sm mb-2">= <strong>Your Price</strong>: $10,771</p>
          <p className="font-mono text-sm mb-0">÷ 800 sq ft = <strong>$13.46/sq ft</strong></p>
        </div>

        <h2>Regional Pricing Differences</h2>
        <p>
          Concrete pricing varies dramatically by region. A job that costs $10/sq ft in rural Texas might be $18/sq ft 
          in the San Francisco Bay Area. Key factors:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Region</th>
                <th className="text-left">Price Multiplier</th>
                <th className="text-left">Ready-Mix Cost/yd</th>
                <th className="text-left">Labor Rate/hr</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Rural South/Midwest</td><td>0.8×</td><td>$120-145</td><td>$35-45</td></tr>
              <tr><td>Mid-size cities</td><td>1.0× (baseline)</td><td>$145-175</td><td>$40-55</td></tr>
              <tr><td>Major metro areas</td><td>1.2-1.4×</td><td>$165-200</td><td>$50-70</td></tr>
              <tr><td>Northeast / West Coast</td><td>1.3-1.6×</td><td>$180-220</td><td>$55-80</td></tr>
              <tr><td>Hawaii / Alaska</td><td>1.5-2.0×</td><td>$220-300</td><td>$60-90</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Check our{" "}
          <Link href="/states" className="text-blue-600 hover:underline">
            state-by-state concrete cost guides
          </Link>{" "}
          for specific pricing data in your area.
        </p>

        <h2>What Top-Earning Concrete Contractors Do Differently</h2>

        <h3>1. They Specialize</h3>
        <p>
          The contractor who does &quot;everything concrete&quot; competes with everyone on price. The contractor who 
          specializes in stamped concrete patios charges a 40-60% premium because they&apos;re the expert. Pick a 
          specialty and own it.
        </p>

        <h3>2. They Sell the Outcome, Not the Concrete</h3>
        <p>
          Homeowners don&apos;t want 9.88 cubic yards of 4,000 PSI concrete. They want a beautiful driveway that 
          lasts 30 years and makes their house look like a million bucks. Price accordingly.
        </p>

        <h3>3. They Never Compete on Price Alone</h3>
        <p>
          There will always be someone cheaper. They compete on quality, reliability, professionalism, and 
          reputation. Their estimates look professional (not handwritten), they show up on time, and they 
          follow up after the job.
        </p>

        <h3>4. They Know Their Numbers Cold</h3>
        <p>
          They know their break-even cost per square foot to the penny. They know their overhead rate. They know 
          their profit margin on every job type. You should too — use our{" "}
          <Link href="/calculators/slab" className="text-blue-600 hover:underline">
            calculators
          </Link>{" "}
          and{" "}
          <Link href="/blog/concrete-estimate-template" className="text-blue-600 hover:underline">
            estimate templates
          </Link>{" "}
          to nail your numbers.
        </p>

        <h3>5. They Raise Prices Annually</h3>
        <p>
          Concrete, fuel, and labor costs go up every year. If you haven&apos;t raised your rates in 2+ years, 
          you&apos;re making less money than you were before. Raise prices 5-8% annually — match or exceed inflation.
        </p>

        <h2>When to Charge More</h2>
        <ul>
          <li><strong>Difficult access:</strong> Hillside pours, backyard jobs with no truck access, multi-story pumping = 15-25% premium</li>
          <li><strong>Small jobs:</strong> Anything under 100 sq ft should have a minimum charge ($1,500-2,500). Your mobilization cost is the same whether it&apos;s 50 sq ft or 500.</li>
          <li><strong>Rush jobs:</strong> Customer needs it done this week? 20-30% premium. Your schedule has value.</li>
          <li><strong>Winter/bad weather:</strong> Cold weather concrete requires additives, blankets, and extra crew time. 15-20% premium.</li>
          <li><strong>Complex geometry:</strong> Curves, multiple levels, decorative borders = more forming time = higher price.</li>
          <li><strong>Demolition included:</strong> Removing old concrete is a separate line item: $3-6/sq ft for standard demolition, more for reinforced.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>How much should a concrete contractor make per hour?</h3>
        <p>
          As the business owner, you should target <strong>$75-150+/hour</strong> for your time after all expenses. 
          If you&apos;re making $25/hour as the owner, you&apos;re undercharging. Your crew members typically earn 
          $20-35/hour (finishers: $25-45/hour), and you should be making significantly more as the business owner 
          carrying the risk and overhead.
        </p>

        <h3>Should I charge by the square foot or by the job?</h3>
        <p>
          <strong>Always bid by the job</strong> but use per-square-foot rates internally to calculate your price. 
          Quoting &quot;$12/sq ft&quot; invites the customer to comparison shop. Quoting &quot;$9,600 for the complete 
          project&quot; feels like a package deal.
        </p>

        <h3>How do I handle price objections?</h3>
        <p>
          Never lower your price — instead, reduce the scope. &quot;I can bring it to $8,500 if we go with a broom 
          finish instead of stamped and skip the decorative border.&quot; This maintains your margins while giving 
          the customer options.
        </p>

        <h3>What profit margin should I target?</h3>
        <p>
          <strong>Minimum 15% net profit</strong> on every job. Target 20-25% on standard work and 25-35% on 
          specialty/decorative work. If a job doesn&apos;t hit your minimum margin, walk away. Unprofitable work 
          is worse than no work.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 className="text-amber-900 mt-0">📋 Price Your Jobs Accurately</h3>
          <p className="text-amber-800">
            Our{" "}
            <Link href="/templates" className="text-amber-700 font-semibold hover:underline">
              Pro Estimate Template Pack
            </Link>{" "}
            includes a built-in pricing calculator that factors in your specific overhead, crew costs, and target 
            margin — so you never underbid a job again. Templates for every concrete job type: slabs, driveways, 
            patios, foundations, stamped, and more.
          </p>
        </div>
      </article>
    </div>
  );
}
