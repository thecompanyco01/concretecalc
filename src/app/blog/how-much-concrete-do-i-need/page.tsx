import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "How Much Concrete Do I Need? Complete Calculator Guide (2026)",
  description:
    "Learn exactly how much concrete you need for any project. Step-by-step formulas for slabs, driveways, footings, and more — with real examples and a free calculator.",
  keywords:
    "how much concrete do i need, concrete calculator, concrete volume formula, cubic yards of concrete, bags of concrete needed, concrete estimation",
};

export default function HowMuchConcreteDoINeed() {
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
          How Much Concrete Do I Need
        </span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>How Much Concrete Do I Need? The Complete Guide</h1>

        <p className="lead text-xl text-gray-600">
          Whether you&apos;re pouring a backyard patio, a driveway, or a
          foundation, the first question is always the same: how much concrete
          do I need? Order too little and you&apos;re stuck with a cold joint
          mid-pour. Order too much and you&apos;re paying for concrete that ends
          up in a wheelbarrow headed nowhere. This guide gives you the exact
          formulas, real-world examples, and rules of thumb that contractors
          use every day.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Skip the Math</p>
          <p className="text-orange-700 text-sm mb-3">
            Want the answer in seconds? Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">
              Concrete Slab Calculator
            </Link>{" "}
            — enter your dimensions and get cubic yards, number of bags, and
            estimated cost instantly.
          </p>
        </div>

        <h2 id="basic-formula">The Basic Concrete Volume Formula</h2>
        <p>
          Every concrete calculation starts with the same fundamental formula:
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-6 not-prose my-6 text-center">
          <p className="text-lg font-mono">
            <strong>Volume (cubic feet)</strong> = Length (ft) × Width (ft) ×
            Thickness (ft)
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Then divide by 27 to convert to cubic yards
          </p>
        </div>

        <p>
          Concrete is sold by the <strong>cubic yard</strong>. One cubic yard
          equals 27 cubic feet — picture a cube that&apos;s 3 feet on every
          side. Ready-mix trucks typically carry 8-10 cubic yards per load.
        </p>

        <p>
          Here&apos;s the step-by-step process:
        </p>
        <ol>
          <li>Measure length and width in feet</li>
          <li>Convert thickness to feet (4 inches = 0.333 feet)</li>
          <li>Multiply all three numbers together to get cubic feet</li>
          <li>Divide by 27 to get cubic yards</li>
          <li>Add 10% for waste (this is non-negotiable)</li>
        </ol>

        <h3>Common Thickness Conversions</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Inches</th>
                <th className="text-left px-4 py-2 font-semibold">Feet (decimal)</th>
                <th className="text-left px-4 py-2 font-semibold">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2&quot;</td>
                <td className="px-4 py-2">0.167</td>
                <td className="px-4 py-2">Overlay, topping slab</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">3&quot;</td>
                <td className="px-4 py-2">0.250</td>
                <td className="px-4 py-2">Light-duty walkways</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">0.333</td>
                <td className="px-4 py-2">Patios, sidewalks, shed pads</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">5&quot;</td>
                <td className="px-4 py-2">0.417</td>
                <td className="px-4 py-2">Residential driveways</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">6&quot;</td>
                <td className="px-4 py-2">0.500</td>
                <td className="px-4 py-2">Heavy-duty driveways, garage floors</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">8&quot;</td>
                <td className="px-4 py-2">0.667</td>
                <td className="px-4 py-2">Foundations, footings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="examples">Real-World Examples: How Much Concrete for Common Projects</h2>

        <h3>Example 1: 10×10 Patio (4 inches thick)</h3>
        <p>
          This is one of the most common residential concrete projects. Here&apos;s the math:
        </p>
        <ul>
          <li>Volume = 10 × 10 × 0.333 = 33.3 cubic feet</li>
          <li>Cubic yards = 33.3 ÷ 27 = 1.23 yards</li>
          <li>With 10% waste = <strong>1.36 cubic yards</strong></li>
        </ul>
        <p>
          At this size, you&apos;re in the tricky zone. Most ready-mix companies
          have a minimum order of 1 yard and charge short-load fees for orders
          under 3-5 yards ($50-$100 extra). You could also use{" "}
          <strong>34 bags of 80-lb premix</strong> instead — though mixing that
          many bags by hand is serious labor.
        </p>

        <h3>Example 2: 20×20 Driveway (5 inches thick)</h3>
        <ul>
          <li>Volume = 20 × 20 × 0.417 = 166.8 cubic feet</li>
          <li>Cubic yards = 166.8 ÷ 27 = 6.18 yards</li>
          <li>With 10% waste = <strong>6.80 cubic yards</strong></li>
        </ul>
        <p>
          This is solidly in ready-mix territory. Order 7 yards to be safe.
          At $140-$170 per yard for 4,000 PSI mix (standard for driveways),
          you&apos;re looking at <strong>$980-$1,190 in concrete alone</strong>.
          Use our{" "}
          <Link href="/calculators/driveway">Driveway Calculator</Link>{" "}
          to get a complete cost breakdown including rebar and labor.
        </p>

        <h3>Example 3: 40×60 Garage Slab (6 inches thick)</h3>
        <ul>
          <li>Volume = 40 × 60 × 0.5 = 1,200 cubic feet</li>
          <li>Cubic yards = 1,200 ÷ 27 = 44.4 yards</li>
          <li>With 10% waste = <strong>48.9 cubic yards</strong></li>
        </ul>
        <p>
          That&apos;s 5-6 truckloads. A project this size requires careful
          scheduling — you need trucks arriving on a staggered schedule so
          your crew can keep up with the pour. Budget $6,500-$9,000 for
          concrete material alone.
        </p>

        <h3>Example 4: Sidewalk (4 ft wide × 50 ft long × 4 inches thick)</h3>
        <ul>
          <li>Volume = 4 × 50 × 0.333 = 66.6 cubic feet</li>
          <li>Cubic yards = 66.6 ÷ 27 = 2.47 yards</li>
          <li>With 10% waste = <strong>2.71 cubic yards</strong></li>
        </ul>
        <p>
          Order 3 yards. You&apos;ll likely face a short-load fee, but it&apos;s
          still cheaper than mixing 68 bags by hand.
        </p>

        <h2 id="project-chart">Quick Reference: Concrete Needed by Project Size</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Project</th>
                <th className="text-left px-4 py-2 font-semibold">Thickness</th>
                <th className="text-left px-4 py-2 font-semibold">Cubic Yards</th>
                <th className="text-left px-4 py-2 font-semibold">80-lb Bags</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">8×8 patio</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">0.88</td>
                <td className="px-4 py-2">22</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">10×10 patio</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">1.36</td>
                <td className="px-4 py-2">34</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">12×12 patio</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">1.96</td>
                <td className="px-4 py-2">49</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">10×20 driveway</td>
                <td className="px-4 py-2">5&quot;</td>
                <td className="px-4 py-2">3.40</td>
                <td className="px-4 py-2">85</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">12×24 driveway</td>
                <td className="px-4 py-2">5&quot;</td>
                <td className="px-4 py-2">4.90</td>
                <td className="px-4 py-2">122</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">20×20 driveway</td>
                <td className="px-4 py-2">5&quot;</td>
                <td className="px-4 py-2">6.80</td>
                <td className="px-4 py-2">170</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">24×24 garage</td>
                <td className="px-4 py-2">6&quot;</td>
                <td className="px-4 py-2">10.6</td>
                <td className="px-4 py-2">264</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">30×40 shop</td>
                <td className="px-4 py-2">6&quot;</td>
                <td className="px-4 py-2">22.0</td>
                <td className="px-4 py-2">550</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          All values include 10% waste factor. Bag count based on 80-lb bags
          yielding approximately 0.6 cubic feet each.
        </p>

        <h2 id="waste-factor">Why You Always Add 10% for Waste</h2>
        <p>
          New contractors often ask: &quot;Why can&apos;t I just order the exact
          amount?&quot; Because the real world isn&apos;t perfectly level or
          perfectly square. Here&apos;s where the extra concrete goes:
        </p>
        <ul>
          <li>
            <strong>Uneven subgrade:</strong> Even after grading, the ground
            has low spots that eat concrete. A 1-inch dip over a 20×20 area
            consumes an extra 0.3 cubic yards.
          </li>
          <li>
            <strong>Form deflection:</strong> Wood forms bow slightly under the
            weight of wet concrete, expanding the slab&apos;s footprint.
          </li>
          <li>
            <strong>Spillage:</strong> Some concrete ends up on the ground
            during the pour — chute overshoot, wheelbarrow spills, etc.
          </li>
          <li>
            <strong>Over-excavation:</strong> If the subgrade was dug slightly
            too deep in spots, those inches add up fast.
          </li>
        </ul>
        <p>
          Running short during a pour is a nightmare. You either get a cold
          joint (a structural weakness where new concrete meets partially-set
          concrete) or you pay a premium for a short-load delivery that may
          not arrive in time. The 10% insurance is always worth it.
        </p>

        <h2 id="bags-vs-readymix">Bags vs. Ready-Mix: Which Should You Use?</h2>
        <p>
          There are two ways to buy concrete: premixed bags from a hardware
          store or ready-mix delivered by truck. Here&apos;s how to decide:
        </p>

        <h3>Premixed Bags (Quikrete, Sakrete)</h3>
        <ul>
          <li><strong>Best for:</strong> Under 1 cubic yard (~25 bags of 80-lb mix)</li>
          <li><strong>Cost:</strong> $5-$7 per 80-lb bag (~$250-$350 per cubic yard)</li>
          <li><strong>Pros:</strong> Buy only what you need, mix at your own pace, no minimum order</li>
          <li><strong>Cons:</strong> Extremely labor-intensive, inconsistent mix quality, slow pour</li>
        </ul>

        <h3>Ready-Mix Truck Delivery</h3>
        <ul>
          <li><strong>Best for:</strong> Over 1 cubic yard</li>
          <li><strong>Cost:</strong> $125-$170 per cubic yard (plus $50-$100 short-load fee under 5 yards)</li>
          <li><strong>Pros:</strong> Consistent quality, fast delivery, professional mix design</li>
          <li><strong>Cons:</strong> Minimum order requirements, must pour quickly, scheduling required</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-blue-800 mb-2">💡 Contractor Tip</p>
          <p className="text-blue-700 text-sm">
            If you need between 1-2 cubic yards, consider the total cost
            including your labor time. Mixing 40+ bags takes 2-3 hours and
            serious physical effort. A ready-mix delivery at $200 + $75
            short-load fee ($275) is often cheaper than your time spent mixing
            bags at $300+ for the same volume.
          </p>
        </div>

        <h2 id="shapes">How to Calculate Concrete for Different Shapes</h2>

        <h3>Rectangular Slabs</h3>
        <p>
          Use the standard formula: Length × Width × Thickness ÷ 27. This
          covers patios, driveways, sidewalks, and garage floors.
        </p>

        <h3>Circular Slabs</h3>
        <p>
          For round pads (fire pit bases, tree surrounds, etc.):
        </p>
        <div className="bg-gray-900 text-white rounded-lg p-6 not-prose my-6 text-center">
          <p className="text-lg font-mono">
            <strong>Volume</strong> = π × radius² × thickness ÷ 27
          </p>
        </div>
        <p>
          Example: A 10-foot diameter round pad, 4 inches thick:
        </p>
        <ul>
          <li>Radius = 5 feet</li>
          <li>Volume = 3.14 × 25 × 0.333 = 26.1 cubic feet</li>
          <li>Cubic yards = 26.1 ÷ 27 = 0.97 yards</li>
          <li>With waste = <strong>1.07 cubic yards</strong></li>
        </ul>

        <h3>Footings and Walls</h3>
        <p>
          Continuous footings use the same rectangular formula, but
          you&apos;re typically working in different proportions (deep and
          narrow rather than wide and thin):
        </p>
        <p>
          Example: A footing 60 feet long × 18 inches wide × 12 inches deep:
        </p>
        <ul>
          <li>Volume = 60 × 1.5 × 1.0 = 90 cubic feet</li>
          <li>Cubic yards = 90 ÷ 27 = 3.33 yards</li>
          <li>With waste = <strong>3.67 cubic yards</strong></li>
        </ul>

        <h3>Columns and Sono Tubes</h3>
        <p>
          For round columns (pier footings, deck posts):
        </p>
        <p>
          Example: 8-inch diameter sono tube, 4 feet deep:
        </p>
        <ul>
          <li>Radius = 0.333 feet</li>
          <li>Volume = 3.14 × 0.111 × 4 = 1.39 cubic feet</li>
          <li>Per column = <strong>0.05 cubic yards</strong></li>
          <li>10 columns = 0.5 cubic yards + waste = <strong>0.56 cubic yards</strong></li>
        </ul>

        <h3>Steps and Stairs</h3>
        <p>
          Calculate each step as a separate rectangular section, then add them
          together. A typical step is 7.5 inches tall × 11 inches deep. For
          a 4-foot wide staircase with 3 steps:
        </p>
        <ul>
          <li>Step 1: 4 × 0.917 × 0.625 = 2.29 cu ft</li>
          <li>Step 2: 4 × 0.917 × 1.250 = 4.58 cu ft</li>
          <li>Step 3: 4 × 0.917 × 1.875 = 6.88 cu ft</li>
          <li>Total = 13.75 cu ft = 0.51 yards</li>
          <li>With waste = <strong>0.56 cubic yards</strong></li>
        </ul>

        <h2 id="concrete-mix">Choosing the Right Concrete Mix</h2>
        <p>
          Not all concrete is the same. The mix you choose affects strength,
          workability, cost, and how much you need to order.
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Mix Type</th>
                <th className="text-left px-4 py-2 font-semibold">PSI</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/Yard</th>
                <th className="text-left px-4 py-2 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Standard</td>
                <td className="px-4 py-2">3,000</td>
                <td className="px-4 py-2">$125-$155</td>
                <td className="px-4 py-2">Sidewalks, patios, non-structural</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Standard</td>
                <td className="px-4 py-2">4,000</td>
                <td className="px-4 py-2">$140-$170</td>
                <td className="px-4 py-2">Driveways, garage floors, slabs-on-grade</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">High-strength</td>
                <td className="px-4 py-2">5,000</td>
                <td className="px-4 py-2">$160-$200</td>
                <td className="px-4 py-2">Foundations, structural, commercial</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Fiber-mesh</td>
                <td className="px-4 py-2">3,500-4,000</td>
                <td className="px-4 py-2">$155-$185</td>
                <td className="px-4 py-2">Crack-resistant slabs, pool decks</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Air-entrained</td>
                <td className="px-4 py-2">3,000-4,000</td>
                <td className="px-4 py-2">$135-$175</td>
                <td className="px-4 py-2">Freeze-thaw climates, outdoor slabs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="ordering-tips">How to Order Concrete from a Ready-Mix Plant</h2>
        <p>
          When you call the batch plant, you&apos;ll need to provide:
        </p>
        <ol>
          <li><strong>Volume:</strong> How many cubic yards (always round up)</li>
          <li><strong>Mix design:</strong> PSI strength and any additives (air entrainment, fiber, accelerator)</li>
          <li><strong>Slump:</strong> How wet you want it (4-inch slump is standard; higher slump for pumping)</li>
          <li><strong>Delivery time:</strong> When you need the truck on site</li>
          <li><strong>Pour rate:</strong> For large jobs, how fast you can take concrete (trucks per hour)</li>
        </ol>

        <h3>Hidden Costs to Watch For</h3>
        <ul>
          <li><strong>Short-load fee:</strong> $50-$100 for orders under 5 yards</li>
          <li><strong>Overtime charges:</strong> Trucks on site longer than 5-7 minutes per yard get charged $2-$3/minute</li>
          <li><strong>Saturday delivery:</strong> $50-$150 surcharge</li>
          <li><strong>Fuel surcharge:</strong> Varies, typically $15-$50 per delivery</li>
          <li><strong>Environmental fee:</strong> $10-$25 per load (washout fees)</li>
        </ul>

        <h2 id="cost-breakdown">How Much Does Concrete Cost? (2026 Prices)</h2>
        <p>
          Here&apos;s what you can expect to pay for concrete material in 2026,
          not including labor or finishing:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Project</th>
                <th className="text-left px-4 py-2 font-semibold">Yards Needed</th>
                <th className="text-left px-4 py-2 font-semibold">Material Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Installed Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">10×10 patio</td>
                <td className="px-4 py-2">1.4</td>
                <td className="px-4 py-2">$195-$240</td>
                <td className="px-4 py-2">$600-$1,200</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">12×20 patio</td>
                <td className="px-4 py-2">3.3</td>
                <td className="px-4 py-2">$460-$560</td>
                <td className="px-4 py-2">$1,440-$2,880</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">20×20 driveway</td>
                <td className="px-4 py-2">6.8</td>
                <td className="px-4 py-2">$950-$1,160</td>
                <td className="px-4 py-2">$3,200-$7,200</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">24×24 garage slab</td>
                <td className="px-4 py-2">10.6</td>
                <td className="px-4 py-2">$1,480-$1,800</td>
                <td className="px-4 py-2">$4,600-$8,100</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">40×60 building slab</td>
                <td className="px-4 py-2">48.9</td>
                <td className="px-4 py-2">$6,850-$8,310</td>
                <td className="px-4 py-2">$19,200-$36,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="mistakes">Common Mistakes When Estimating Concrete</h2>
        <ol>
          <li>
            <strong>Not converting inches to feet.</strong> Thickness of 4
            inches means 0.333 feet, not 4 feet. This single mistake can make
            your estimate 12× too high.
          </li>
          <li>
            <strong>Forgetting the waste factor.</strong> Subgrade is never
            perfectly flat. Always add 10%.
          </li>
          <li>
            <strong>Measuring inside the forms.</strong> Measure from outside
            edge to outside edge to capture the true footprint.
          </li>
          <li>
            <strong>Ignoring irregular shapes.</strong> For L-shaped or
            T-shaped slabs, break them into rectangles and calculate each one
            separately, then add the totals.
          </li>
          <li>
            <strong>Rounding down.</strong> Always round UP to the next half
            or full yard. You can&apos;t return unused concrete, but running
            short costs far more.
          </li>
          <li>
            <strong>Not accounting for thickened edges.</strong> Many slabs
            have turned-down edges (monolithic footings) that are 12-18 inches
            deep. This perimeter volume adds up quickly.
          </li>
        </ol>

        <h2 id="special-considerations">Special Considerations for Contractors</h2>

        <h3>Hot Weather</h3>
        <p>
          In hot weather (above 85°F), concrete sets faster and you may need
          slightly more water in the mix (higher slump). Consider ordering a
          retarder additive to buy working time. Some contractors also order
          an extra half-yard as insurance since the faster set gives less time
          to spread and level.
        </p>

        <h3>Cold Weather</h3>
        <p>
          Below 40°F, you&apos;ll need accelerator additives and blankets for
          curing. Hot water in the mix adds $10-$20 per yard. Volume
          calculations stay the same, but budget for the additives and
          protection materials.
        </p>

        <h3>Pumped Concrete</h3>
        <p>
          If the pour site isn&apos;t accessible by truck (backyard patios,
          second-story pours), you&apos;ll need a concrete pump. Pump trucks
          require a higher-slump mix (5-6 inches vs. standard 4), and pump
          line has a &quot;prime&quot; coat of 0.5-1 yard of grout that
          doesn&apos;t count toward your slab volume. Factor that in.
        </p>

        <h2 id="calculator-section">Use Our Free Concrete Calculator</h2>
        <p>
          Doing this math by hand is fine for simple projects, but for
          anything beyond a basic slab, use our free calculators to save time
          and avoid costly mistakes:
        </p>
        <ul>
          <li>
            <Link href="/calculators/slab">Concrete Slab Calculator</Link>{" "}
            — patios, garage floors, shed pads
          </li>
          <li>
            <Link href="/calculators/driveway">Driveway Calculator</Link>{" "}
            — includes thickened edges and approach aprons
          </li>
          <li>
            <Link href="/calculators/footing">Footing Calculator</Link>{" "}
            — continuous footings and pier footings
          </li>
        </ul>
        <p>
          Every calculator gives you cubic yards, number of bags, rebar
          estimates, and cost breakdowns — everything you need to order
          material or build a bid.
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Need a Professional Estimate Template?
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template turns your concrete quantities into a
            polished bid sheet you can hand to customers. Auto-calculates
            material, labor, and profit margin from project dimensions.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How many bags of concrete do I need for a 10×10 slab?</h3>
        <p>
          For a 10×10 slab at 4 inches thick, you need approximately 34 bags
          of 80-lb premix concrete (including 10% waste). This equals about
          1.36 cubic yards. At this volume, you might want to consider a
          ready-mix delivery instead of hand-mixing.
        </p>

        <h3>How much does a yard of concrete cover?</h3>
        <p>
          One cubic yard covers 81 square feet at 4 inches thick, 65 square
          feet at 5 inches thick, or 54 square feet at 6 inches thick.
        </p>

        <h3>How many 80-lb bags are in a cubic yard?</h3>
        <p>
          Approximately 45 bags of 80-lb premixed concrete make one cubic
          yard. Each bag yields about 0.6 cubic feet, and one cubic yard is
          27 cubic feet.
        </p>

        <h3>Should I order extra concrete?</h3>
        <p>
          Yes — always order 10% more than your calculated volume. For very
          large pours (20+ yards), you can reduce the waste factor to 5-7%
          since subgrade variations average out over larger areas.
        </p>
      </article>
    </div>
  );
}
