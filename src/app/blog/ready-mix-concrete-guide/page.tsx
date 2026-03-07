import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready Mix Concrete: Ordering Guide for Contractors (2026)",
  description:
    "How to order ready mix concrete: quantities, scheduling, mix types, cost per yard by region, short load fees, supplier tips, and what to ask before placing your order.",
  keywords:
    "ready mix concrete, ready mix concrete near me, ready mix concrete cost, how to order ready mix concrete, ready mix concrete prices, concrete delivery, concrete truck, ready mix concrete per yard",
};

export default function ReadyMixConcreteGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Ready Mix Concrete Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Ready Mix Concrete: The Complete Ordering Guide for Contractors</h1>

        <p className="lead text-xl text-gray-600">
          Ordering ready mix concrete sounds simple — call a batch plant and tell them how many yards you need. But getting it wrong means cold joints, wasted money, short load fees, and callbacks. This guide covers everything contractors need to know about ordering ready mix: how to calculate quantities, what mix to specify, how to schedule deliveries, and how to negotiate the best price. Whether you&apos;re a new contractor placing your first order or a veteran optimizing costs, this is the reference you need.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Calculate Before You Call</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">Concrete Slab Calculator</Link>{" "}
            to get exact yardage for your pour. Or try the{" "}
            <Link href="/calculators/driveway" className="underline font-semibold">Driveway Calculator</Link>{" "}
            for driveway-specific measurements. Knowing the exact number before calling the batch plant saves you from over-ordering and short load fees.
          </p>
        </div>

        <h2 id="what-is-ready-mix">What Is Ready Mix Concrete?</h2>
        <p>
          Ready mix concrete is manufactured in a batch plant according to a specific mix design and delivered to your jobsite in a rotating drum truck. Unlike site-mixed concrete (mixing bags by hand or in a portable mixer), ready mix arrives pre-blended with precisely measured proportions of cement, water, aggregates, and admixtures.
        </p>
        <p>
          In the US, roughly <strong>350 million cubic yards</strong> of ready mix are produced annually. It&apos;s the standard delivery method for everything from residential driveways to high-rise foundations. The industry is served by about 5,500 ready mix plants operated by hundreds of producers — from national companies like CEMEX, Lehigh Hanson, and Argos to independent local operators.
        </p>

        <h2 id="how-to-order">How to Order Ready Mix Concrete: Step by Step</h2>

        <h3>Step 1: Calculate the Exact Volume</h3>
        <p>
          This is where most mistakes happen. Under-ordering means the truck runs out mid-pour, leaving you with a cold joint that&apos;s both a structural weakness and an eyesore. Over-ordering wastes money and leaves you with leftover concrete to deal with.
        </p>
        <p>
          <strong>The formula:</strong> Volume (cubic yards) = (Length × Width × Depth in feet) ÷ 27
        </p>
        <p>
          <strong>Always add 5–10% extra</strong> for waste, over-excavation, uneven subgrades, and spillage. On a 10-yard job, that means ordering 10.5–11 yards. Experienced contractors know that a &quot;10-yard pour&quot; almost always needs 10.5–11 yards once you account for real-world conditions.
        </p>
        <p>
          For complex shapes (curved patios, irregular driveways, stepped foundations), break the area into rectangles, calculate each separately, and add them together. Our{" "}
          <Link href="/calculators/slab">slab calculator</Link> handles this automatically.
        </p>

        <h3>Step 2: Specify the Mix Design</h3>
        <p>
          When you call the batch plant, you need to specify:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Specification</th>
                <th className="text-left px-4 py-2 font-semibold">What to Tell Them</th>
                <th className="text-left px-4 py-2 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Compressive strength (PSI)</td>
                <td className="px-4 py-2">Design strength at 28 days</td>
                <td className="px-4 py-2">&quot;4,000 PSI mix&quot;</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Slump</td>
                <td className="px-4 py-2">Consistency / workability</td>
                <td className="px-4 py-2">&quot;4-inch slump&quot; (standard for flatwork)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Air entrainment</td>
                <td className="px-4 py-2">Required in freeze-thaw zones</td>
                <td className="px-4 py-2">&quot;6% air&quot; (typical for northern states)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Maximum aggregate size</td>
                <td className="px-4 py-2">Largest stone in the mix</td>
                <td className="px-4 py-2">&quot;3/4-inch aggregate&quot; (standard) or &quot;3/8-inch pea gravel&quot; (pump mix)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Admixtures</td>
                <td className="px-4 py-2">Any special additives</td>
                <td className="px-4 py-2">&quot;Fiber mesh,&quot; &quot;calcium chloride accelerator,&quot; &quot;retarder&quot;</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Volume</td>
                <td className="px-4 py-2">Total cubic yards needed</td>
                <td className="px-4 py-2">&quot;8.5 yards&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          If you&apos;re not sure what to specify, tell the dispatcher what you&apos;re building (e.g., &quot;residential driveway, 4 inches thick&quot;) and they&apos;ll recommend the appropriate mix. Most plants have standard mix designs for common applications.
        </p>

        <h3>Common Mix Designs by Application</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Application</th>
                <th className="text-left px-4 py-2 font-semibold">PSI</th>
                <th className="text-left px-4 py-2 font-semibold">Slump</th>
                <th className="text-left px-4 py-2 font-semibold">Special Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Sidewalks, patios</td>
                <td className="px-4 py-2">3,000–3,500</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">Air entrained if in freeze zone</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Driveways</td>
                <td className="px-4 py-2">4,000</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">Fiber mesh recommended</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Garage floors</td>
                <td className="px-4 py-2">4,000</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">Vapor barrier under slab recommended</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Footings</td>
                <td className="px-4 py-2">2,500–3,000</td>
                <td className="px-4 py-2">4–5&quot;</td>
                <td className="px-4 py-2">Lower strength OK — structural engineer specifies</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Walls (poured)</td>
                <td className="px-4 py-2">3,500–4,000</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">Higher slump for flowability in forms</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Pump mix</td>
                <td className="px-4 py-2">3,000–4,000</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">3/8&quot; aggregate, higher cement content</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stamped/decorative</td>
                <td className="px-4 py-2">4,000</td>
                <td className="px-4 py-2">3–4&quot;</td>
                <td className="px-4 py-2">Lower slump for stamp work, possible retarder</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Step 3: Schedule the Delivery</h3>
        <p>Key scheduling details to coordinate with the dispatcher:</p>
        <ul>
          <li><strong>Delivery date and time:</strong> Morning deliveries are most common and cheapest. Specify the exact arrival time. Saturday deliveries cost $50–$150 extra.</li>
          <li><strong>Number of trucks:</strong> For large pours, you&apos;ll need multiple trucks spaced 30–60 minutes apart. The batch plant coordinates this for you — tell them your pour rate and crew size.</li>
          <li><strong>Site access:</strong> Ready mix trucks are <strong>60,000–80,000 lbs loaded</strong>. Tell the dispatcher about narrow streets, overhead power lines, soft ground, steep grades, or tight turns. If the truck can&apos;t reach the pour site, you&apos;ll need a concrete pump ($150–$400+).</li>
          <li><strong>Washout plan:</strong> Trucks need to wash their chutes on-site or at a designated washout area. Have a washout pit or plastic-lined area ready. Some jurisdictions require containment — check local regulations.</li>
        </ul>

        <h3>Step 4: Prepare the Jobsite</h3>
        <p>
          Have everything ready <strong>before</strong> the truck arrives. Waiting time (standby charges) starts ticking 5–7 minutes per yard after arrival. On a 10-yard load, that gives you about 50–70 minutes. After that, it&apos;s $1.50–$3.00 per minute.
        </p>
        <ul>
          <li>✅ Forms set, staked, and braced</li>
          <li>✅ Subgrade compacted and graded</li>
          <li>✅ Rebar/mesh placed and supported on chairs</li>
          <li>✅ Crew assembled and ready</li>
          <li>✅ Tools staged (screeds, floats, edgers, broom)</li>
          <li>✅ Curing materials on-site</li>
          <li>✅ Clear access path for the truck</li>
        </ul>

        <h2 id="cost-by-region">Ready Mix Concrete Cost by Region (2026)</h2>
        <p>
          Prices vary significantly by location. Here are current 2026 prices for a standard 4,000 PSI ready mix with delivery:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Region</th>
                <th className="text-left px-4 py-2 font-semibold">Price Per Yard</th>
                <th className="text-left px-4 py-2 font-semibold">Short Load Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Southeast (FL, GA, AL, SC)</td>
                <td className="px-4 py-2">$130–$155</td>
                <td className="px-4 py-2">$50–$80</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">South Central (TX, OK, LA)</td>
                <td className="px-4 py-2">$125–$150</td>
                <td className="px-4 py-2">$40–$75</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Midwest (OH, IL, MI, WI, MN)</td>
                <td className="px-4 py-2">$135–$165</td>
                <td className="px-4 py-2">$50–$100</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Mountain West (CO, UT, AZ)</td>
                <td className="px-4 py-2">$140–$170</td>
                <td className="px-4 py-2">$60–$90</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Mid-Atlantic (PA, NJ, MD, VA)</td>
                <td className="px-4 py-2">$150–$180</td>
                <td className="px-4 py-2">$75–$125</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Northeast (NY, CT, MA)</td>
                <td className="px-4 py-2">$160–$195</td>
                <td className="px-4 py-2">$75–$150</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Pacific Northwest (WA, OR)</td>
                <td className="px-4 py-2">$155–$185</td>
                <td className="px-4 py-2">$60–$100</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">California</td>
                <td className="px-4 py-2">$165–$200</td>
                <td className="px-4 py-2">$75–$150</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For a deeper breakdown by state and mix type, see our <Link href="/blog/concrete-cost-per-yard">Concrete Cost Per Yard Guide</Link>.
        </p>

        <h2 id="short-load-fees">Understanding Short Load Fees</h2>
        <p>
          Ready mix trucks typically carry 8–10 cubic yards. When you order less, the plant charges a <strong>short load fee</strong> because they&apos;re running a partially loaded truck that costs nearly as much to operate as a full one.
        </p>
        <p>
          Common short load fee structures:
        </p>
        <ul>
          <li><strong>Flat fee:</strong> $50–$150 for orders under the minimum (usually 3–5 yards, varies by plant)</li>
          <li><strong>Per-yard penalty:</strong> $15–$30 for each yard below the minimum. Example: 8-yard minimum, you order 5, fee = 3 × $25 = $75</li>
          <li><strong>Graduated fee:</strong> Higher penalties for smaller orders. 1–2 yards might cost $150 extra, while 4–5 yards costs $50 extra</li>
        </ul>
        <p>
          <strong>How to avoid short load fees:</strong>
        </p>
        <ul>
          <li>Combine multiple small pours into one larger order on the same day</li>
          <li>Ask neighboring contractors if they need concrete the same day — batch plants can sometimes split a load</li>
          <li>For very small jobs (under 1 yard), consider bagged concrete or a portable volumetric mixer service instead</li>
          <li>Some plants have lower minimums — call around. Independent plants are often more flexible than national chains.</li>
        </ul>

        <h2 id="additional-fees">Additional Fees to Watch For</h2>
        <p>The per-yard price isn&apos;t the whole story. Here&apos;s what else might appear on your invoice:</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Fee</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Cost</th>
                <th className="text-left px-4 py-2 font-semibold">How to Manage It</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Short load fee</td>
                <td className="px-4 py-2">$50–$150</td>
                <td className="px-4 py-2">Order more or batch multiple jobs</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Standby/wait time</td>
                <td className="px-4 py-2">$1.50–$3.00/min after allowance</td>
                <td className="px-4 py-2">Have crew and site ready before truck arrives</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Fuel surcharge</td>
                <td className="px-4 py-2">$10–$30 per load</td>
                <td className="px-4 py-2">Fluctuates with diesel. Not negotiable.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Saturday delivery</td>
                <td className="px-4 py-2">$50–$150</td>
                <td className="px-4 py-2">Schedule weekday deliveries when possible</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Distance surcharge</td>
                <td className="px-4 py-2">$5–$10 per mile beyond 20 mi</td>
                <td className="px-4 py-2">Use the nearest batch plant</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Environmental/washout fee</td>
                <td className="px-4 py-2">$25–$75</td>
                <td className="px-4 py-2">Some areas require this. Budget for it.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Admixture charges</td>
                <td className="px-4 py-2">$5–$25 per yard</td>
                <td className="px-4 py-2">Only add what&apos;s needed. Don&apos;t over-specify.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Returned concrete fee</td>
                <td className="px-4 py-2">$15–$25 per yard returned</td>
                <td className="px-4 py-2">Calculate accurately to avoid excess</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="negotiating-price">How to Negotiate Better Ready Mix Prices</h2>
        <ol>
          <li><strong>Get 3 quotes minimum.</strong> Call every plant within 30 miles. Prices can vary $20–$40 per yard for the same mix.</li>
          <li><strong>Set up a contractor account.</strong> Regular buyers (even 50+ yards/month) qualify for 5–10% off list price.</li>
          <li><strong>Lock in annual pricing.</strong> Protect yourself from mid-year price increases by negotiating an annual rate agreement.</li>
          <li><strong>Pay on time.</strong> Suppliers reserve best pricing for contractors with clean payment histories. Net-30 with prompt payment gets better rates than COD.</li>
          <li><strong>Be flexible on timing.</strong> Early morning and off-peak deliveries often come with lower standby tolerance but better per-yard pricing.</li>
          <li><strong>Volume discounts.</strong> Most plants offer $5–$15/yd off for orders over 10 yards, and deeper discounts for 20+.</li>
          <li><strong>Bundle purchases.</strong> If the supplier also sells gravel, block, or rebar, buying everything from one source may get you a package deal.</li>
        </ol>

        <h2 id="what-to-ask">10 Questions to Ask Before Ordering</h2>
        <ol>
          <li>What&apos;s the per-yard price for [PSI] mix with delivery?</li>
          <li>What&apos;s your minimum order, and what are short load fees?</li>
          <li>How much standby time is included, and what are overtime charges?</li>
          <li>Is air entrainment included or extra?</li>
          <li>What&apos;s the fuel surcharge right now?</li>
          <li>Can you accommodate a Saturday delivery? What&apos;s the upcharge?</li>
          <li>What&apos;s the maximum truck size you can send? (Important for tight-access jobs)</li>
          <li>How far in advance do I need to schedule?</li>
          <li>What&apos;s the returned concrete fee?</li>
          <li>Do you offer contractor account pricing or volume discounts?</li>
        </ol>

        <h2 id="delivery-day">Delivery Day: What to Expect</h2>
        <p>Here&apos;s the typical sequence when the ready mix truck arrives:</p>
        <ol>
          <li><strong>Truck arrives</strong> — driver checks site access, backs into position. Average delivery time from plant: 15–45 minutes depending on distance.</li>
          <li><strong>Check the ticket.</strong> The delivery ticket shows volume, mix design, slump, time batched, and any admixtures. <strong>Always verify this matches your order.</strong> If it&apos;s wrong, reject the load before pouring.</li>
          <li><strong>Slump test.</strong> The driver or your team does a slump test (inverted cone, measure the drop). Should match your spec ±1 inch. If the slump is too low (stiff), the driver can add water in controlled amounts. Never let the driver add more than 1 gallon per yard — excess water weakens the concrete.</li>
          <li><strong>Pour begins.</strong> The truck positions its chute and starts the drum. You direct the pour from there. For most flatwork, the chute can reach 12–16 feet from the truck.</li>
          <li><strong>Additional reach:</strong> If the chute can&apos;t reach, options include chute extensions ($0), wheelbarrows ($0 but slow), conveyor ($200–$500), or a concrete pump ($150–$400+).</li>
          <li><strong>Finishing.</strong> As soon as an area has sufficient concrete, your crew starts striking off and bull-floating while the truck continues pouring.</li>
          <li><strong>Washout.</strong> When done, the driver washes the chute and drum on-site or at a designated washout area. Have a lined pit or container ready.</li>
        </ol>

        <h2 id="alternatives">Alternatives to Ready Mix Trucks</h2>
        <p>
          Ready mix trucks aren&apos;t the only option. Depending on job size and access, consider:
        </p>
        <ul>
          <li><strong>Volumetric mixers:</strong> Mobile concrete plants on a truck. They mix on-site to the exact quantity needed — zero waste. Great for 1–5 yard jobs, tight access, and remote locations. Cost: $175–$250/yard.</li>
          <li><strong>Bagged concrete:</strong> Quikrete, Sakrete, etc. Mix by hand or in a small mixer. Only practical for very small jobs (under 0.5 yard). Cost: $250–$320/yard equivalent. See our <Link href="/blog/how-many-bags-of-concrete-do-i-need">bags calculator guide</Link> for volume conversion.</li>
          <li><strong>Trailer mixers:</strong> Small batch plants on a trailer. Some rental yards offer them. Good for 1–3 yard jobs in areas without ready mix access.</li>
          <li><strong>Short load / minimum delivery:</strong> Many ready mix plants will deliver as little as 1 yard — with a premium. Calculate whether the short load fee makes this cheaper than the alternatives.</li>
        </ul>

        <h2 id="supplier-tips">Choosing a Ready Mix Supplier: What Matters</h2>
        <p>Not all batch plants are equal. Here&apos;s what to evaluate:</p>
        <ul>
          <li><strong>Proximity:</strong> Closer = lower delivery cost and fresher concrete. Concrete should be placed within 90 minutes of batching (60 minutes in hot weather). The ASTM C94 standard limits transit time.</li>
          <li><strong>Consistency:</strong> Good plants produce consistent mixes load after load. Ask other contractors about their experience. Inconsistent slump or strength is a red flag.</li>
          <li><strong>Reliability:</strong> Do they deliver on time? A truck that&apos;s an hour late costs you crew wages and possibly ruins your pour schedule. Ask for references.</li>
          <li><strong>Flexibility:</strong> Can they accommodate last-minute changes, weekend deliveries, and small orders? Independent plants tend to be more flexible.</li>
          <li><strong>Service:</strong> Good dispatchers proactively communicate delays. They know your pour requirements and sequence multi-truck deliveries correctly.</li>
          <li><strong>Price:</strong> Obviously important, but don&apos;t sacrifice quality for $5/yard. A bad batch costs you the entire job.</li>
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How far in advance should I order ready mix?</h3>
        <p>
          <strong>2–3 business days</strong> is standard during normal seasons. During peak season (spring and summer), book <strong>1 week or more</strong> in advance. For large pours (20+ yards) or Saturday deliveries, 1–2 weeks advance notice is recommended. Some plants take same-day orders, but you may not get your preferred delivery time.
        </p>

        <h3>How much does a concrete truck hold?</h3>
        <p>
          A standard ready mix truck holds <strong>8–10 cubic yards</strong>. Some smaller &quot;short load&quot; trucks hold 3–5 yards. Front-discharge trucks (common in some regions) hold 8–11 yards and allow the driver to see the pour site while discharging. The truck itself weighs about 26,000 lbs empty and up to 80,000 lbs loaded.
        </p>

        <h3>Can I cancel a concrete order?</h3>
        <p>
          Most plants allow cancellation up to <strong>2 hours before the scheduled batch time</strong> without penalty. After that, you may be charged for the full load if the concrete has already been batched. Some plants charge a cancellation fee ($50–$200) even for timely cancellations. Always confirm the cancellation policy when ordering.
        </p>

        <h3>What if I need more concrete mid-pour?</h3>
        <p>
          Call the plant immediately. They may be able to send a partial load (with short load fees) or a full truck within 30–60 minutes depending on distance and availability. This is why the <strong>5–10% overage</strong> rule exists — running short is far more expensive than having a little left over.
        </p>

        <h3>What do I do with leftover concrete?</h3>
        <p>
          Options: pour stepping stones, fill in a low spot, make a test cylinder for strength testing, or spread it thin in an area where it can break up and be disposed of later. Most plants charge a <strong>returned concrete fee</strong> ($15–$25/yd) if you send concrete back on the truck. It&apos;s almost always cheaper to find a use for the excess on-site.
        </p>

        <h3>Can ready mix concrete be pumped?</h3>
        <p>
          Yes, but you need to order a <strong>pump mix</strong> — smaller aggregate (3/8&quot; instead of 3/4&quot;), higher cement content, and higher slump (5–6&quot;). Pump mix costs $10–$25 more per yard than standard mix. The pump itself rents for $150–$400+ depending on size and reach. Line pumps handle most residential work. Boom pumps are for large commercial pours or hard-to-reach locations.
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Nail Your Concrete Quantities Every Time</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template calculates material quantities, factors in waste, and generates professional bids with accurate ready mix costs. Stop guessing and start winning more jobs.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="calculators">Calculate Your Ready Mix Order</h2>
        <p>
          Get exact yardage before you pick up the phone:
        </p>
        <ul>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — Patios, floors, and general slabs</li>
          <li><Link href="/calculators/driveway">Driveway Calculator</Link> — Driveway volume with cost estimates</li>
        </ul>
        <p>
          For detailed pricing by region and mix type, see our <Link href="/blog/concrete-cost-per-yard">Concrete Cost Per Yard Guide</Link>. For bidding advice, check <Link href="/blog/how-to-bid-concrete-jobs">How to Bid Concrete Jobs</Link>.
        </p>
      </article>
    </div>
  );
}
