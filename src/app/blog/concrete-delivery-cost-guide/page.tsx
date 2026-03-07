import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Delivery Cost: What to Expect in 2026 (Per Yard Pricing)",
  description:
    "Complete guide to concrete delivery costs in 2026: ready-mix pricing ($130-180/yd³), short load fees, pump truck costs, fuel surcharges, Saturday delivery rates, and how to save money on your next concrete order.",
  keywords:
    "concrete delivery cost, ready mix concrete price, concrete per yard cost, concrete truck delivery, short load fee concrete, concrete pump truck cost, ready mix concrete delivery, concrete delivery near me",
};

export default function ConcreteDeliveryCostGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Delivery Cost Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Delivery Cost: What to Expect in 2026 (Per Yard Pricing)</h1>

        <p className="lead text-xl text-gray-600">
          Ordering ready-mix concrete is one of the biggest line items in any concrete project, and the pricing structure is more complicated than most people expect. Beyond the base price of <strong>$130–$180 per cubic yard</strong>, you&apos;ll face short load fees, fuel surcharges, Saturday premiums, pump truck costs, and overtime charges that can add 30–50% to your total bill. This guide breaks down every cost you&apos;ll encounter when ordering concrete delivery in 2026, with real pricing data and strategies to minimize your spend.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Cost Reference (2026)</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Standard ready-mix (3,000 PSI):</strong> $130–$155 per cubic yard</li>
            <li>• <strong>Higher-strength (4,000–5,000 PSI):</strong> $145–$180 per cubic yard</li>
            <li>• <strong>Short load fee (&lt;5 yards):</strong> $50–$100 per cubic yard extra</li>
            <li>• <strong>Saturday/overtime delivery:</strong> $200–$400 flat fee or $8–$12/yd³ surcharge</li>
            <li>• <strong>Pump truck:</strong> $150–$250 per hour (4-hour minimum typical)</li>
            <li>• <strong>Fuel surcharge:</strong> $15–$50 per load</li>
            <li>• <strong>Extra delivery time (wait charge):</strong> $2–$4 per minute after 7–10 minutes per yard</li>
            <li>• <strong>Average total cost (10-yard order):</strong> $1,500–$2,100 delivered</li>
          </ul>
        </div>

        <h2>Ready-Mix Concrete Base Pricing in 2026</h2>

        <p>
          The base price of ready-mix concrete depends on the mix design (strength, admixtures, aggregate type), your region, and current material costs. Here&apos;s what you&apos;ll pay per cubic yard at the plant gate — before delivery, fees, and surcharges.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Ready-Mix Concrete Pricing by Type (2026)</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Mix Type</th>
                <th className="text-left py-2">PSI Rating</th>
                <th className="text-left py-2">Price per Yard</th>
                <th className="text-left py-2">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Standard residential</td>
                <td className="py-2">2,500 PSI</td>
                <td className="py-2">$120–$140</td>
                <td className="py-2">Sidewalks, light slabs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Standard structural</td>
                <td className="py-2">3,000 PSI</td>
                <td className="py-2">$130–$155</td>
                <td className="py-2">Driveways, foundations, slabs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">High-strength</td>
                <td className="py-2">4,000 PSI</td>
                <td className="py-2">$140–$170</td>
                <td className="py-2">Commercial slabs, structural</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">High-strength</td>
                <td className="py-2">5,000 PSI</td>
                <td className="py-2">$155–$185</td>
                <td className="py-2">High-rise, heavy industrial</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Fiber mesh added</td>
                <td className="py-2">Any</td>
                <td className="py-2">+$8–$15/yd³</td>
                <td className="py-2">Crack control, replaces wire mesh</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Color added</td>
                <td className="py-2">Any</td>
                <td className="py-2">+$10–$25/yd³</td>
                <td className="py-2">Decorative work</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Accelerator (cold weather)</td>
                <td className="py-2">Any</td>
                <td className="py-2">+$5–$12/yd³</td>
                <td className="py-2">Faster set in cold temps</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Retarder (hot weather)</td>
                <td className="py-2">Any</td>
                <td className="py-2">+$4–$10/yd³</td>
                <td className="py-2">Slower set in heat</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Prices vary by region. Northeast and West Coast tend toward the high end; Southeast and Midwest toward the low end.
          </p>
        </div>

        <p>
          For a deeper dive into regional concrete pricing, see our <Link href="/blog/concrete-cost-per-yard" className="text-orange-600 hover:underline">concrete cost per yard guide</Link> with state-by-state breakdowns.
        </p>

        <h2>Short Load Fees: The Small Order Tax</h2>

        <p>
          This is the fee that surprises homeowners and small contractors the most. A standard ready-mix truck carries <strong>8–10 cubic yards</strong>. If you order less than a full load (typically defined as less than 5 yards, though some plants set the threshold at 3 or 7 yards), you&apos;ll pay a <strong>short load fee</strong> that can dramatically increase your per-yard cost.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Short Load Fee Examples (3,000 PSI Mix at $140/yd³)</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Order Size</th>
                <th className="text-left py-2">Concrete Cost</th>
                <th className="text-left py-2">Short Load Fee</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Effective $/yd³</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">1 yard</td>
                <td className="py-2">$140</td>
                <td className="py-2">$200–$350</td>
                <td className="py-2">$340–$490</td>
                <td className="py-2 font-semibold text-red-600">$340–$490</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2 yards</td>
                <td className="py-2">$280</td>
                <td className="py-2">$150–$250</td>
                <td className="py-2">$430–$530</td>
                <td className="py-2 font-semibold text-red-600">$215–$265</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">3 yards</td>
                <td className="py-2">$420</td>
                <td className="py-2">$100–$175</td>
                <td className="py-2">$520–$595</td>
                <td className="py-2 font-semibold text-orange-600">$173–$198</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">4 yards</td>
                <td className="py-2">$560</td>
                <td className="py-2">$50–$100</td>
                <td className="py-2">$610–$660</td>
                <td className="py-2">$153–$165</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">5+ yards</td>
                <td className="py-2">$700+</td>
                <td className="py-2">$0</td>
                <td className="py-2">$700+</td>
                <td className="py-2 font-semibold text-green-600">$140</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Short load thresholds and fees vary by supplier. Always ask about the threshold when you call for pricing.
          </p>
        </div>

        <p>
          <strong>Strategy:</strong> If your project is just under the short load threshold, it&apos;s often cheaper to order the minimum full-load quantity and waste the extra (or use it for a small side project — a fence post pad, a wheel stop, a garden step). Wasting 1 yard of concrete at $140 costs less than paying a $200 short load fee on 4 yards.
        </p>

        <h2>Pump Truck Costs</h2>

        <p>
          If the ready-mix truck can&apos;t reach the pour location by chute (the chute extends about 12–16 feet from the truck), you&apos;ll need a concrete pump. There are two types:
        </p>

        <h3>Line Pumps (Trailer-Mounted)</h3>

        <ul>
          <li><strong>Cost:</strong> $150–$250 per hour, typically with a 4-hour minimum ($600–$1,000 per job)</li>
          <li><strong>Output:</strong> 15–30 cubic yards per hour</li>
          <li><strong>Reach:</strong> Up to 200 feet horizontal via hose</li>
          <li><strong>Best for:</strong> Residential and small commercial — slabs, footings, sidewalks, pool decks</li>
          <li><strong>Pipe size:</strong> 2–3&quot; line — suitable for standard mixes with 3/4&quot; aggregate</li>
        </ul>

        <h3>Boom Pumps (Truck-Mounted)</h3>

        <ul>
          <li><strong>Cost:</strong> $250–$500 per hour, typically with a 4-hour minimum ($1,000–$2,000 per job)</li>
          <li><strong>Output:</strong> 40–150 cubic yards per hour</li>
          <li><strong>Reach:</strong> 80–200+ feet vertical, 100–250 feet horizontal (articulating boom)</li>
          <li><strong>Best for:</strong> Multi-story buildings, large commercial pours, elevated decks, hard-to-access sites</li>
          <li><strong>Pipe size:</strong> 4–5&quot; line — handles any standard mix</li>
        </ul>

        <p>
          <strong>When to use a pump:</strong> Any time the truck can&apos;t get within chute range of the pour location. Backyard patios, interior slabs in existing buildings, elevated foundations, and any pour more than 15 feet from truck access. Using a wheelbarrow brigade instead of a pump seems cheaper, but it&apos;s slower (creating cold joints), more labor-intensive, and results in lower quality on anything larger than 2–3 yards.
        </p>

        <h2>Additional Delivery Fees and Surcharges</h2>

        <p>
          Beyond the concrete price and short load fee, here are the other charges that show up on your invoice:
        </p>

        <h3>Fuel Surcharge</h3>
        <p>
          Most ready-mix plants add a fuel surcharge of <strong>$15–$50 per load</strong>. This fluctuates with diesel prices. Some plants build fuel cost into the per-yard price; others list it separately. In 2026, with diesel averaging $3.50–$4.50/gallon, expect $25–$40 per delivery.
        </p>

        <h3>Distance/Delivery Fee</h3>
        <p>
          Many plants charge a delivery fee based on distance from the plant. Common structures:
        </p>
        <ul>
          <li><strong>Flat delivery fee:</strong> $75–$150 per trip (common within 15–20 mile radius)</li>
          <li><strong>Per-mile charge:</strong> $3–$8 per mile beyond a base radius (typically 10–20 miles)</li>
          <li><strong>Zone pricing:</strong> Fixed fees for different distance zones ($50 within 10 miles, $100 within 20 miles, $175 within 30 miles)</li>
        </ul>

        <h3>Wait Time / Extra Unloading Time</h3>
        <p>
          Ready-mix plants allocate <strong>7–10 minutes per yard</strong> for unloading. If the pour takes longer (waiting for pump setup, crew not ready, difficult access), you&apos;ll pay <strong>$2–$4 per minute</strong> in wait charges. A 10-yard load should be off the truck in 70–100 minutes. If your crew takes 150 minutes, that&apos;s 50–80 minutes of wait time at $2–$4/minute = <strong>$100–$320 in extra charges</strong>.
        </p>

        <h3>Saturday and Overtime Delivery</h3>
        <p>
          Saturday delivery is common for residential projects but comes at a premium:
        </p>
        <ul>
          <li><strong>Saturday surcharge:</strong> $200–$400 flat fee per truck, or $8–$12/yd³ added to the yard price</li>
          <li><strong>Sunday delivery:</strong> Most plants are closed. Those that deliver charge $400–$800+ premium.</li>
          <li><strong>Before/after hours:</strong> Deliveries before 7 AM or after 3 PM may incur overtime charges of $150–$300 per truck</li>
        </ul>

        <h3>Washout Fee</h3>
        <p>
          Some plants charge a <strong>$25–$75 washout fee</strong> if the truck needs to wash out at your site (no washout facility at the plant on the return route). Provide a washout area on site — a 10&apos; × 10&apos; lined pit or washout container.
        </p>

        <h3>Returned Concrete</h3>
        <p>
          If you order 10 yards but only use 8, most plants charge for all 10 yards plus a <strong>returned concrete disposal fee of $50–$100</strong>. Some plants give partial credit for returned concrete, but don&apos;t count on it. Accurate volume calculation is essential — use our <Link href="/calculators/slab" className="text-orange-600 hover:underline">slab calculator</Link> to get the math right.
        </p>

        <h2>How to Calculate Exactly How Much Concrete You Need</h2>

        <p>
          Over-ordering wastes money (you pay for unused concrete plus disposal fees). Under-ordering is worse — a short load on a pour-in-progress means cold joints, delays, another truck&apos;s delivery fee, and likely a short load fee on the makeup load.
        </p>

        <h3>Basic Volume Formula</h3>

        <p>
          <strong>Cubic yards = (Length × Width × Thickness in feet) ÷ 27</strong>
        </p>

        <p>Common reference: a 4&quot;-thick slab uses approximately <strong>1.23 cubic yards per 100 square feet</strong>. A 6&quot;-thick slab uses approximately <strong>1.85 cubic yards per 100 square feet</strong>.</p>

        <h3>Always Add a Waste Factor</h3>

        <ul>
          <li><strong>Flat slabs on grade:</strong> Add 5–10% for waste, spillage, and slight overexcavation</li>
          <li><strong>Footings:</strong> Add 10–15% — soil irregularities mean the trench is almost always larger than planned</li>
          <li><strong>Walls and formed work:</strong> Add 5–8% for form deflection and spillage</li>
          <li><strong>Pump work:</strong> Add 2–3% extra for concrete left in the pump line</li>
        </ul>

        <p>
          Use our calculators to get accurate volume estimates:
        </p>
        <ul>
          <li><Link href="/calculators/slab" className="text-orange-600 hover:underline">Slab Calculator</Link> — for driveways, patios, garage floors, and sidewalks</li>
          <li><Link href="/calculators/footing" className="text-orange-600 hover:underline">Footing Calculator</Link> — for continuous and spread footings</li>
        </ul>

        <h2>Bagged Concrete: When It&apos;s Cheaper Than Ready-Mix</h2>

        <p>
          For very small projects, bagged concrete from the hardware store can be cheaper than a short-load ready-mix delivery. Here&apos;s the crossover point:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Bagged vs. Ready-Mix Cost Comparison</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Volume</th>
                <th className="text-left py-2">Bagged (80-lb bags)</th>
                <th className="text-left py-2">Ready-Mix Delivered</th>
                <th className="text-left py-2">Winner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">0.5 yard (45 bags)</td>
                <td className="py-2">$225–$315</td>
                <td className="py-2">$350–$550</td>
                <td className="py-2 font-semibold text-green-600">Bagged</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">1 yard (90 bags)</td>
                <td className="py-2">$450–$630</td>
                <td className="py-2">$340–$490</td>
                <td className="py-2 font-semibold text-green-600">Ready-mix</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2 yards (180 bags)</td>
                <td className="py-2">$900–$1,260</td>
                <td className="py-2">$430–$530</td>
                <td className="py-2 font-semibold text-green-600">Ready-mix</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">5 yards (450 bags)</td>
                <td className="py-2">$2,250–$3,150</td>
                <td className="py-2">$700–$900</td>
                <td className="py-2 font-semibold text-green-600">Ready-mix</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Bagged concrete: 80-lb bags at $5–$7 each (Quikrete, Sakrete), ~90 bags per cubic yard. Does not include labor to mix — add 1–2 hours per yard of hand mixing or $100–$150 for a rental mixer.
          </p>
        </div>

        <p>
          <strong>The crossover:</strong> For anything under about 3/4 of a cubic yard (~65 bags), bagged concrete is usually cheaper. For 1 yard or more, ready-mix wins on both cost and quality (consistent mix, higher strength, faster placement). For a full analysis of when bags make sense, see our <Link href="/blog/how-many-bags-of-concrete-do-i-need" className="text-orange-600 hover:underline">bag calculator guide</Link>.
        </p>

        <h2>Regional Pricing Variations</h2>

        <p>
          Concrete prices vary significantly by region due to differences in cement cost, aggregate availability, labor rates, and demand:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Regional Ready-Mix Pricing (3,000 PSI, 2026)</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Region</th>
                <th className="text-left py-2">Price per Yard</th>
                <th className="text-left py-2">Key Factors</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Southeast (FL, GA, AL, SC)</td>
                <td className="py-2">$120–$145</td>
                <td className="py-2">Abundant aggregate, year-round demand</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Midwest (OH, IN, IL, MI)</td>
                <td className="py-2">$125–$150</td>
                <td className="py-2">Good aggregate supply, seasonal demand</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">South Central (TX, OK, LA)</td>
                <td className="py-2">$125–$150</td>
                <td className="py-2">Strong construction demand, moderate costs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Northeast (NY, NJ, PA, MA)</td>
                <td className="py-2">$150–$180</td>
                <td className="py-2">High labor costs, aggregate import in some areas</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">West Coast (CA, WA, OR)</td>
                <td className="py-2">$155–$190</td>
                <td className="py-2">High labor, environmental regulations, cement cost</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Mountain West (CO, UT, AZ)</td>
                <td className="py-2">$135–$165</td>
                <td className="py-2">Rapid growth increasing demand and prices</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Hawaii / Alaska</td>
                <td className="py-2">$200–$300+</td>
                <td className="py-2">Imported materials, limited suppliers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Seasonal Pricing Variations</h2>

        <p>
          Concrete pricing isn&apos;t static throughout the year. Seasonal demand creates predictable pricing patterns:
        </p>

        <ul>
          <li><strong>Peak season (April–October):</strong> Highest prices. Demand is strong, plants run at capacity, and delivery windows are tight. Expect list prices with no negotiation room. Book trucks 3–5 days in advance.</li>
          <li><strong>Shoulder season (March, November):</strong> Moderate pricing. Some plants offer 3–5% discounts to keep trucks moving. Easier scheduling, 1–2 day lead time.</li>
          <li><strong>Off season (December–February):</strong> Lowest prices in cold-weather states. Some plants shut down entirely; those that stay open may discount 5–10% to maintain utilization. Hot water and accelerator admixtures add $5–$15/yd³ for cold-weather pours.</li>
          <li><strong>Year-round states (FL, TX, AZ, SoCal):</strong> Minimal seasonal variation, but construction booms can create temporary price spikes and scheduling constraints.</li>
        </ul>

        <h2>Tips for Ordering Concrete: Save Money and Avoid Problems</h2>

        <h3>Before You Order</h3>

        <ol>
          <li><strong>Calculate accurately.</strong> Use our <Link href="/calculators/slab" className="text-orange-600 hover:underline">slab calculator</Link> to determine exact volume. Over-ordering is better than under-ordering, but precision saves money.</li>
          <li><strong>Know your mix design.</strong> Specify PSI, slump, aggregate size, and any admixtures. Don&apos;t just say &quot;I need concrete&quot; — know what you need. 3,000 PSI with 4&quot; slump and 3/4&quot; aggregate covers most residential work.</li>
          <li><strong>Get 3 quotes.</strong> Prices vary 10–20% between plants in the same area. Call 3 suppliers and compare total delivered cost (including all fees), not just per-yard price.</li>
          <li><strong>Ask about ALL fees upfront.</strong> Short load? Fuel surcharge? Saturday premium? Wait time rate? Environmental fee? Washout fee? Get every fee in writing before ordering.</li>
          <li><strong>Book early.</strong> During peak season, book 3–5 days ahead. Prime morning delivery slots (7–9 AM) go first.</li>
        </ol>

        <h3>Day of the Pour</h3>

        <ol>
          <li><strong>Be ready when the truck arrives.</strong> Every minute of wait time costs $2–$4. Have forms set, rebar placed, crew standing by, pump connected (if using one). The truck should start pouring within 5 minutes of arrival.</li>
          <li><strong>Clear truck access.</strong> Ready-mix trucks weigh 60,000–80,000 lbs loaded. They need a clear, firm path — no soft ground, no overhead wires below 14 feet, no sharp turns. Walk the route the day before.</li>
          <li><strong>Verify the load ticket.</strong> When the truck arrives, check the batch ticket: correct PSI, correct volume, correct admixtures. Disputes after the pour are nearly impossible to resolve.</li>
          <li><strong>Don&apos;t add water.</strong> The truck driver will often offer to add water to increase slump (&quot;make it flow better&quot;). Adding 1 gallon of water per yard reduces strength by 150–200 PSI. If you need more workability, specify the right slump when ordering, or use a superplasticizer admixture.</li>
          <li><strong>Coordinate multiple trucks.</strong> For large pours, trucks should arrive 15–30 minutes apart. Too fast and trucks stack up (wait charges). Too slow and you get cold joints in the concrete.</li>
        </ol>

        <h3>Saving Money on Concrete Delivery</h3>

        <ul>
          <li><strong>Order full loads:</strong> 8–10 yards per truck eliminates short load fees and gives you the lowest per-yard price</li>
          <li><strong>Mid-week delivery:</strong> Tuesday through Thursday often has better availability and sometimes lower rates than Monday or Friday</li>
          <li><strong>Combine projects:</strong> Doing a driveway and a patio? Pour them the same day to consolidate loads and avoid multiple delivery fees</li>
          <li><strong>Negotiate volume discounts:</strong> If you&apos;re a contractor ordering regularly, negotiate an annual rate. 50+ yards per year should get you 5–10% off list price.</li>
          <li><strong>Choose the closest plant:</strong> Shorter distance = lower fuel surcharge and delivery fees. Sometimes a slightly higher per-yard price from a nearby plant is cheaper total than a lower-price plant 30 miles away.</li>
          <li><strong>Off-season pours:</strong> If the project allows, schedule for late fall or early spring when plants discount to keep trucks busy</li>
        </ul>

        <h2>Total Delivered Cost Examples</h2>

        <p>
          Let&apos;s look at realistic total costs for common residential projects, including ALL fees:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Real-World Delivery Cost Examples</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Volume</th>
                <th className="text-left py-2">Concrete</th>
                <th className="text-left py-2">Fees</th>
                <th className="text-left py-2">Total Delivered</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Small patio (10×12, 4&quot;)</td>
                <td className="py-2">1.8 yd³</td>
                <td className="py-2">$252</td>
                <td className="py-2">$225 (short load) + $30 (fuel)</td>
                <td className="py-2 font-semibold">$507</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2-car driveway (20×20, 4&quot;)</td>
                <td className="py-2">5.0 yd³</td>
                <td className="py-2">$700</td>
                <td className="py-2">$30 (fuel)</td>
                <td className="py-2 font-semibold">$730</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Garage slab (24×24, 4&quot;)</td>
                <td className="py-2">7.2 yd³</td>
                <td className="py-2">$1,008</td>
                <td className="py-2">$30 (fuel)</td>
                <td className="py-2 font-semibold">$1,038</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Large driveway (40×20, 5&quot;)</td>
                <td className="py-2">12.5 yd³</td>
                <td className="py-2">$1,750</td>
                <td className="py-2">$60 (2 trucks × fuel) + $700 (pump)</td>
                <td className="py-2 font-semibold">$2,510</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Foundation (50 LF × 8&quot;W × 36&quot;D)</td>
                <td className="py-2">11.1 yd³</td>
                <td className="py-2">$1,554</td>
                <td className="py-2">$60 (fuel) + $700 (pump)</td>
                <td className="py-2 font-semibold">$2,314</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Based on $140/yd³ for 3,000 PSI mix. Fuel surcharge at $30/load. Pump at $700 for 4-hr minimum (line pump). Your actual costs will vary by region and supplier.
          </p>
        </div>

        <h2>Minimum Order Requirements</h2>

        <p>
          Most ready-mix plants have a minimum order, though it varies:
        </p>

        <ul>
          <li><strong>No minimum:</strong> Some urban plants with high truck utilization will deliver any quantity — but with a substantial short load fee that effectively creates a minimum cost of $350–$500 per trip</li>
          <li><strong>1-yard minimum:</strong> The most common minimum. You&apos;ll pay for at least 1 yard plus the short load fee.</li>
          <li><strong>3-yard minimum:</strong> Some plants in less competitive markets set a 3-yard minimum to ensure the trip is worthwhile.</li>
          <li><strong>Short load alternatives:</strong> Some markets have &quot;short load&quot; services that run smaller mixer trucks (2–4 yard capacity) without the per-yard premium. Search &quot;short load concrete delivery&quot; in your area — these services charge $175–$250 per yard with no short load fee, which is cheaper than a traditional ready-mix short load.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">How much does a truckload of concrete cost?</h4>
            <p className="text-gray-700 mt-1">A full 10-yard truckload of 3,000 PSI ready-mix concrete costs $1,300–$1,800 delivered in most US markets in 2026. This includes the concrete ($130–$155/yd³) plus fuel surcharge ($15–$50). Saturday delivery adds $200–$400. The exact cost depends on your region, mix design, and distance from the plant.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">What is a short load fee for concrete?</h4>
            <p className="text-gray-700 mt-1">A short load fee is a surcharge for ordering less than a full truckload (usually less than 5 yards). The fee is typically $50–$100 per cubic yard below the minimum, or a flat fee of $150–$350 per load. For example, ordering 2 yards from a plant with a 5-yard threshold might add $150–$300 in short load fees, making your effective per-yard cost $205–$290 instead of $140.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How far can a concrete truck deliver?</h4>
            <p className="text-gray-700 mt-1">Most ready-mix plants deliver within a 20–30 mile radius. Beyond that, the concrete may start to set in transit (ready-mix should be placed within 90 minutes of batching). Distance fees increase beyond the base delivery radius. For remote sites 30+ miles from any plant, consider volumetric (mobile mix) trucks that batch on-site — they charge $175–$225 per yard but eliminate distance-related quality concerns.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can I order concrete delivered on Saturday?</h4>
            <p className="text-gray-700 mt-1">Yes, most ready-mix plants offer Saturday delivery for residential and commercial projects. Expect a surcharge of $200–$400 per truck or $8–$12 per yard premium. Saturday availability is limited — book 5–7 days in advance during peak season. Sunday delivery is rare and extremely expensive ($400–$800+ premium) if available at all.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How much concrete do I need for a 10×10 slab?</h4>
            <p className="text-gray-700 mt-1">A 10×10 slab at 4 inches thick requires approximately 1.23 cubic yards. At 6 inches thick, it requires 1.85 cubic yards. Add 10% for waste: 1.36 yards (4&quot;) or 2.04 yards (6&quot;). At this volume, you&apos;ll pay short load fees — expect total delivered cost of $400–$600. Use our <Link href="/calculators/slab" className="text-orange-600 hover:underline">slab calculator</Link> for precise volume estimates.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Is it cheaper to mix your own concrete or order ready-mix?</h4>
            <p className="text-gray-700 mt-1">For less than about 3/4 of a cubic yard (~65 bags of 80-lb mix), bagged concrete is cheaper. Above 1 yard, ready-mix is significantly cheaper — $140/yard vs. $450–$630/yard for bags. Bagged concrete also requires mixing time (1–2 hours per yard by hand, or $100–$150 for a mixer rental) and produces lower and less consistent strength than plant-batched ready-mix.</p>
          </div>
        </div>

        <h2>Related Resources</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Continue Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📐 <Link href="/calculators/slab" className="text-orange-600 hover:underline font-medium">Slab Calculator</Link> — Calculate exactly how much concrete you need</li>
            <li>📖 <Link href="/blog/concrete-cost-per-yard" className="text-orange-600 hover:underline font-medium">Concrete Cost Per Yard</Link> — State-by-state ready-mix pricing</li>
            <li>📖 <Link href="/blog/how-many-bags-of-concrete-do-i-need" className="text-orange-600 hover:underline font-medium">How Many Bags of Concrete Do I Need?</Link> — Bag calculator for small projects</li>
            <li>📖 <Link href="/blog/concrete-slab-cost-guide" className="text-orange-600 hover:underline font-medium">Concrete Slab Cost Guide</Link> — Full slab pricing with labor and materials</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Calculate Your Concrete Order</h3>
          <p className="text-gray-300 mb-6">Get the exact volume you need to order — avoid short load fees and returned concrete charges.</p>
          <Link href="/calculators/slab" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Open Slab Calculator →
          </Link>
        </div>
      </article>
    </div>
  );
}
