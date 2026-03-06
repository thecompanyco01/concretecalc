import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Cost Per Yard in 2026: Prices by Region & Type",
  description:
    "How much does concrete cost per yard in 2026? Current ready-mix prices by state, cost per square foot, short load fees, seasonal pricing, and tips for negotiating with suppliers.",
  keywords:
    "concrete cost per yard, concrete cost per square foot, ready mix concrete prices, concrete price per yard 2026, how much does concrete cost, concrete delivery cost",
};

export default function ConcreteCostPerYard() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Cost Per Yard</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Cost Per Yard in 2026: Complete Pricing Guide</h1>

        <p className="lead text-xl text-gray-600">
          Whether you&apos;re a contractor bidding jobs or a homeowner planning a project, knowing the current price of concrete is essential. In 2026, ready-mix concrete costs between <strong>$125 and $200 per cubic yard</strong> for standard mixes, with significant variation by region, mix type, and order size. This guide breaks down every factor that affects what you&apos;ll pay.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Calculate Your Costs Instantly</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">Concrete Slab Calculator</Link>{" "}
            to get exact yardage and cost estimates for your project dimensions. Or try the{" "}
            <Link href="/calculators/driveway" className="underline font-semibold">Driveway Calculator</Link>{" "}
            for driveway-specific pricing.
          </p>
        </div>

        <h2 id="average-cost">Average Concrete Cost Per Yard in 2026</h2>
        <p>
          The national average for ready-mix concrete in 2026 is <strong>$140–$165 per cubic yard</strong> for a standard 4,000 PSI mix, delivered. This is the most common mix used for driveways, garage floors, and residential slabs. Here&apos;s how prices break down by mix type:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Mix Type / PSI</th>
                <th className="text-left px-4 py-2 font-semibold">Price Per Yard</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2,500 PSI</td>
                <td className="px-4 py-2">$110–$135</td>
                <td className="px-4 py-2">Footings, non-structural fill</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">3,000 PSI</td>
                <td className="px-4 py-2">$125–$155</td>
                <td className="px-4 py-2">Sidewalks, patios, light residential</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3,500 PSI</td>
                <td className="px-4 py-2">$130–$160</td>
                <td className="px-4 py-2">Residential slabs, standard work</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">4,000 PSI</td>
                <td className="px-4 py-2">$140–$170</td>
                <td className="px-4 py-2">Driveways, garage floors, structural slabs</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">5,000 PSI</td>
                <td className="px-4 py-2">$160–$200</td>
                <td className="px-4 py-2">Foundations, commercial, heavy loads</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">6,000+ PSI</td>
                <td className="px-4 py-2">$185–$250+</td>
                <td className="px-4 py-2">Structural, commercial, high-rise</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Fiber-reinforced</td>
                <td className="px-4 py-2">$155–$185</td>
                <td className="px-4 py-2">Crack-resistant slabs, driveways</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Colored concrete</td>
                <td className="px-4 py-2">$200–$300+</td>
                <td className="px-4 py-2">Decorative, stamped, exposed aggregate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These prices include delivery to your site but do <strong>not</strong> include placement, labor, finishing, or any other installation costs. The concrete itself is typically just 25–35% of the total installed cost.
        </p>

        <h2 id="cost-per-square-foot">Concrete Cost Per Square Foot</h2>
        <p>
          Many homeowners think in terms of square feet rather than cubic yards. To convert, you need to know the slab thickness. Here&apos;s a quick reference for the <strong>material cost only</strong> (concrete delivered, not installed):
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Thickness</th>
                <th className="text-left px-4 py-2 font-semibold">Yards per 100 sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Material Cost/sq ft</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">4 inches</td>
                <td className="px-4 py-2">1.23 yd³</td>
                <td className="px-4 py-2">$1.72–$2.09</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">5 inches</td>
                <td className="px-4 py-2">1.54 yd³</td>
                <td className="px-4 py-2">$2.16–$2.62</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">6 inches</td>
                <td className="px-4 py-2">1.85 yd³</td>
                <td className="px-4 py-2">$2.59–$3.15</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">8 inches</td>
                <td className="px-4 py-2">2.47 yd³</td>
                <td className="px-4 py-2">$3.46–$4.20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Formula:</strong> Cubic yards = (Length × Width × Thickness in feet) ÷ 27. Then multiply by the price per yard for your area and mix type.
        </p>

        <p>
          For <strong>total installed cost</strong> including labor, site prep, forms, and finishing, expect $6–$12 per square foot for basic broom-finish work, and $12–$25+ for stamped or decorative concrete. See our <Link href="/blog/concrete-slab-cost-guide">concrete slab cost guide</Link> for detailed installed pricing.
        </p>

        <h2 id="regional-pricing">Concrete Prices by State and Region</h2>
        <p>
          Concrete prices vary significantly based on where you live. The biggest factors are local aggregate availability, transportation costs, labor market conditions, and demand. Here are 2026 prices for a standard 4,000 PSI mix:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Region / State</th>
                <th className="text-left px-4 py-2 font-semibold">Price Per Yard (4,000 PSI)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Southeast (FL, GA, AL, SC)</td>
                <td className="px-4 py-2">$130–$155</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">South Central (TX, OK, AR, LA)</td>
                <td className="px-4 py-2">$125–$150</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Midwest (OH, IN, IL, MI, WI, MN)</td>
                <td className="px-4 py-2">$135–$165</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Mountain West (CO, UT, AZ, NM)</td>
                <td className="px-4 py-2">$140–$170</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Mid-Atlantic (PA, NJ, MD, VA)</td>
                <td className="px-4 py-2">$150–$180</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Northeast (NY, CT, MA, NH)</td>
                <td className="px-4 py-2">$160–$195</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Pacific Northwest (WA, OR)</td>
                <td className="px-4 py-2">$155–$185</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">California</td>
                <td className="px-4 py-2">$165–$200</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Hawaii</td>
                <td className="px-4 py-2">$200–$280</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Alaska</td>
                <td className="px-4 py-2">$190–$260</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Why the big range?</strong> Even within the same state, prices swing $20–$40 per yard depending on urban vs. rural locations, proximity to batch plants, and local competition. Always get at least two or three quotes from ready-mix suppliers in your area.
        </p>

        <h2 id="ready-mix-vs-bags">Ready-Mix vs. Bagged Concrete: Cost Comparison</h2>
        <p>
          For small projects, you might consider mixing your own concrete from bags instead of ordering a truck. Here&apos;s how the economics work:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Option</th>
                <th className="text-left px-4 py-2 font-semibold">Cost Per Yard</th>
                <th className="text-left px-4 py-2 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">80 lb bags (Quikrete/Sakrete)</td>
                <td className="px-4 py-2">$250–$320/yd³</td>
                <td className="px-4 py-2">Under 0.5 yd³ (small repairs, posts)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">60 lb bags</td>
                <td className="px-4 py-2">$280–$360/yd³</td>
                <td className="px-4 py-2">When 80 lb bags are too heavy</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Ready-mix truck (full load 8+ yd)</td>
                <td className="px-4 py-2">$125–$200/yd³</td>
                <td className="px-4 py-2">Any job over 2 yd³</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Ready-mix (short load under 5 yd)</td>
                <td className="px-4 py-2">$175–$280/yd³</td>
                <td className="px-4 py-2">1–4 yd³ (includes short load fee)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>The math on bags:</strong> One 80-lb bag of Quikrete makes about 0.6 cubic feet. You need <strong>45 bags to make one cubic yard</strong> (27 cubic feet). At $5.50–$7.00 per bag from a home improvement store, that&apos;s $248–$315 per yard — roughly double the cost of ready-mix, plus hours of backbreaking labor mixing it.
        </p>

        <p>
          <strong>Bottom line:</strong> Bags only make sense for very small jobs (fence posts, small pads under 10 sq ft, patching). For anything over half a yard, ready-mix is cheaper and faster. For jobs between 0.5 and 3 yards, look into ready-mix &quot;short load&quot; options or trailer mixers.
        </p>

        <h2 id="short-load-fees">Short Load Fees: The Hidden Cost</h2>
        <p>
          Ready-mix trucks are designed to deliver 8–10 cubic yards at a time. When you order less than a full load, most suppliers charge a <strong>short load fee</strong> to cover the cost of running a partially loaded truck. This is one of the most commonly overlooked costs in small concrete projects.
        </p>

        <p>Typical short load fee structures:</p>
        <ul>
          <li><strong>Flat fee:</strong> $50–$100 for orders under 5 yards (most common)</li>
          <li><strong>Per-yard surcharge:</strong> $15–$30 extra per yard below the minimum (e.g., 10-yard minimum minus your order × surcharge)</li>
          <li><strong>Graduated fee:</strong> Higher penalty for smaller orders — ordering 2 yards might cost $150 extra, while 4 yards costs $50 extra</li>
        </ul>

        <p>
          <strong>Example:</strong> You need 3 yards for a small patio. Base price is $150/yard = $450. Short load fee = $75. Actual cost per yard = $525 ÷ 3 = <strong>$175/yard</strong>. That&apos;s 17% more than the quoted price. Always ask about short load fees before ordering.
        </p>

        <h2 id="factors">10 Factors That Affect Concrete Pricing</h2>
        <ol>
          <li><strong>PSI strength rating.</strong> Higher PSI mixes use more cement and cost more. The jump from 3,000 to 5,000 PSI adds $30–$60 per yard.</li>
          <li><strong>Admixtures.</strong> Accelerators (for cold weather), retarders (for hot weather), water reducers, air entrainment, and fiber reinforcement each add $5–$25 per yard.</li>
          <li><strong>Delivery distance.</strong> Most suppliers include delivery within 10–20 miles. Beyond that, expect $5–$10 per mile in fuel surcharges.</li>
          <li><strong>Order size.</strong> Short load fees can add 15–40% to the per-yard price for small orders. Full truckloads get the best pricing.</li>
          <li><strong>Seasonal demand.</strong> Prices are 5–15% higher during peak season (spring and summer) in most markets. Winter orders may be cheaper but come with cold-weather challenges.</li>
          <li><strong>Wait time.</strong> Most suppliers give you 5–7 minutes per yard for unloading. After that, standby charges of $1.50–$3.00 per minute kick in. On a 10-yard load, that can add up fast.</li>
          <li><strong>Weekend or after-hours delivery.</strong> Saturday delivery typically adds $50–$150. Some suppliers offer it, many don&apos;t.</li>
          <li><strong>Colored concrete.</strong> Integral color adds $30–$80+ per yard depending on the pigment and intensity. Custom colors cost even more.</li>
          <li><strong>Aggregate type.</strong> Standard gravel aggregate is cheapest. Lightweight aggregate, exposed aggregate blends, or special stone can add $20–$50 per yard.</li>
          <li><strong>Fuel surcharges.</strong> Many suppliers apply a fuel surcharge that fluctuates with diesel prices. This can add $10–$30 per load.</li>
        </ol>

        <h2 id="seasonal">Seasonal Concrete Pricing</h2>
        <p>
          Concrete pricing follows a predictable seasonal pattern in most of the US. Understanding this can save you 5–15% on material costs:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Season</th>
                <th className="text-left px-4 py-2 font-semibold">Pricing Trend</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Winter (Dec–Feb)</td>
                <td className="px-4 py-2">Lowest prices (5–10% below avg)</td>
                <td className="px-4 py-2">Cold weather additives may offset savings. Ground may be frozen in northern states.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Spring (Mar–May)</td>
                <td className="px-4 py-2">Rising — peak by late spring</td>
                <td className="px-4 py-2">Demand surges as the building season starts. Book early.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Summer (Jun–Aug)</td>
                <td className="px-4 py-2">Peak pricing (5–15% above avg)</td>
                <td className="px-4 py-2">Highest demand. Retarders may be needed in extreme heat. Longer wait for delivery slots.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Fall (Sep–Nov)</td>
                <td className="px-4 py-2">Declining — good value window</td>
                <td className="px-4 py-2">Sweet spot: still warm enough for good curing, lower demand and prices.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Pro tip:</strong> If you&apos;re a contractor, scheduling larger pours in early fall or late winter (in temperate climates) can save you $500+ on a typical residential job. Just factor in cold-weather blankets or accelerators if needed.
        </p>

        <h2 id="negotiate">How to Negotiate Better Concrete Prices</h2>
        <p>
          Most people just call a ready-mix company and accept the first price they&apos;re given. Smart contractors negotiate. Here&apos;s how:
        </p>

        <ol>
          <li><strong>Get three quotes minimum.</strong> Call every ready-mix plant within 30 miles. Prices can vary $20–$40 per yard between suppliers in the same area.</li>
          <li><strong>Ask about volume discounts.</strong> Many suppliers offer $5–$15 per yard off for orders over 10 yards, and deeper discounts for 20+ yard pours or monthly volume commitments.</li>
          <li><strong>Negotiate a contractor account rate.</strong> If you buy regularly (even 50+ yards per month), ask for a contractor pricing agreement. This typically saves 5–10% off list price.</li>
          <li><strong>Be flexible on delivery time.</strong> Early morning (6–7 AM) and midday slots are cheapest. Afternoon and Saturday deliveries cost more due to overtime.</li>
          <li><strong>Pay on time (or early).</strong> Suppliers give their best pricing to contractors who pay their bills within terms. Net-30 with a good payment history gets you better rates than COD.</li>
          <li><strong>Bundle with other materials.</strong> Some suppliers also sell gravel, rebar, and block. Buying everything from one source can get you a package discount.</li>
          <li><strong>Lock in annual pricing.</strong> If you do consistent volume, ask for an annual price lock. This protects you from mid-year price increases that typically hit in April/May.</li>
        </ol>

        <h2 id="additional-costs">Additional Costs Beyond the Concrete</h2>
        <p>
          The concrete itself is just one part of the total project cost. Here&apos;s what else to budget for:
        </p>

        <ul>
          <li><strong>Delivery fee:</strong> Often included in the per-yard price, but some suppliers charge separately — $0 to $150 depending on distance</li>
          <li><strong>Concrete pump:</strong> $150–$400+ if the truck can&apos;t back up to the pour site (backyards, slopes, over obstacles)</li>
          <li><strong>Reinforcement:</strong> Wire mesh ($0.35–$0.75/sq ft) or rebar ($1.00–$2.50/sq ft)</li>
          <li><strong>Base gravel:</strong> $30–$50 per ton delivered, typically 4–6 inches needed</li>
          <li><strong>Forms:</strong> $1–$2 per linear foot including stakes</li>
          <li><strong>Finishing supplies:</strong> Curing compound, expansion joint material, sealer — $50–$200 per job</li>
          <li><strong>Labor:</strong> $5–$10+ per square foot for professional installation</li>
        </ul>

        <p>
          For a complete cost breakdown including all these factors, check out our{" "}
          <Link href="/blog/concrete-slab-cost-guide">Concrete Slab Cost Guide</Link> or use our{" "}
          <Link href="/calculators/slab">Slab Calculator</Link> to get project-specific numbers.
        </p>

        <h2 id="save-money">7 Ways to Save Money on Concrete</h2>
        <ol>
          <li><strong>Order the right amount.</strong> Use our <Link href="/calculators/slab">calculator</Link> to get exact quantities. Over-ordering wastes money; under-ordering means expensive short loads and cold joints.</li>
          <li><strong>Pour in the shoulder season.</strong> Fall and late winter offer lower prices and easier scheduling.</li>
          <li><strong>Maximize each delivery.</strong> Plan multiple small projects for the same day to fill a full truckload and avoid short load fees.</li>
          <li><strong>Don&apos;t over-specify.</strong> A patio doesn&apos;t need 5,000 PSI concrete. Use the right mix for the job — your supplier can recommend the appropriate strength.</li>
          <li><strong>Prep the site yourself.</strong> Grading, compacting, and form-setting can be DIY, saving $1–$3 per square foot in labor costs.</li>
          <li><strong>Be ready when the truck arrives.</strong> Standby charges add up fast. Have your site fully prepped, forms set, and crew ready before the truck shows up.</li>
          <li><strong>Avoid change orders.</strong> Know exactly what you want before ordering. Adding color, changing the mix, or increasing the order at the last minute always costs more.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Get Accurate Project Estimates</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template calculates material quantities, labor costs, and profit margins automatically. Stop guessing at concrete costs — get it right every time.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="calculators">Calculate Your Project Cost</h2>
        <p>
          Ready to figure out exactly how much concrete your project needs? Our free calculators do the math for you:
        </p>
        <ul>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — For patios, garage floors, and general slabs</li>
          <li><Link href="/calculators/driveway">Driveway Calculator</Link> — Includes thickness recommendations and cost estimates</li>
        </ul>
        <p>
          Or, if you&apos;re a contractor building bids, read our <Link href="/blog/how-to-bid-concrete-jobs">complete guide to bidding concrete jobs</Link> for formulas, markup strategies, and real-world examples.
        </p>
      </article>
    </div>
  );
}
