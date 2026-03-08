import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "25 Concrete Patio Ideas for 2026: Styles, Costs & Design Inspiration",
  description:
    "Explore the best concrete patio ideas for 2026: stamped, stained, polished, colored, exposed aggregate, brushed, and paver-border designs. Includes cost estimates per style, design tips, and links to our free patio calculator.",
  keywords:
    "concrete patio ideas, stamped concrete patio, stained concrete patio, polished concrete patio, exposed aggregate patio, colored concrete patio, concrete patio designs, backyard patio concrete ideas, modern concrete patio, decorative concrete patio, patio design ideas",
};

export default function ConcretePatioIdeas() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Patio Ideas</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>25 Concrete Patio Ideas for 2026: Styles, Costs &amp; Design Inspiration</h1>

        <p className="lead text-xl text-gray-600">
          A concrete patio is the most versatile outdoor living surface you can build. With finishes ranging from a simple broom-swept slab at <strong>$6–$10 per square foot</strong> to elaborate stamped and stained designs at <strong>$15–$25+ per square foot</strong>, there&apos;s a concrete patio idea for every budget and aesthetic. This guide walks you through 25 proven designs — with real cost estimates, maintenance requirements, and contractor tips — so you can choose the right style for your backyard.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Estimate Your Patio Cost Instantly</p>
          <p className="text-orange-700 text-sm mb-3">
            Enter your patio dimensions in our free{" "}
            <Link href="/calculators/patio" className="underline font-semibold">Concrete Patio Calculator</Link>{" "}
            for an instant estimate with material quantities, cubic yards, and cost breakdown.
          </p>
        </div>

        <h2 id="quick-cost-comparison">Quick Cost Comparison by Style</h2>
        <p>
          Before we dive into individual ideas, here&apos;s a side-by-side overview of what each major concrete patio style costs fully installed in 2026. All prices include site prep, base gravel, concrete, reinforcement, and finishing labor for a typical 300–400 sq ft backyard patio.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Patio Style</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft (installed)</th>
                <th className="text-left px-4 py-2 font-semibold">400 sq ft Total</th>
                <th className="text-left px-4 py-2 font-semibold">Maintenance Level</th>
                <th className="text-left px-4 py-2 font-semibold">DIY Friendly?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Broom finish (basic)</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">$2,400–$4,000</td>
                <td className="px-4 py-2">Very Low</td>
                <td className="px-4 py-2">Yes</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Brushed / swirl finish</td>
                <td className="px-4 py-2">$7–$11</td>
                <td className="px-4 py-2">$2,800–$4,400</td>
                <td className="px-4 py-2">Very Low</td>
                <td className="px-4 py-2">Yes</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Colored concrete (integral)</td>
                <td className="px-4 py-2">$8–$14</td>
                <td className="px-4 py-2">$3,200–$5,600</td>
                <td className="px-4 py-2">Low</td>
                <td className="px-4 py-2">Moderate</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Exposed aggregate</td>
                <td className="px-4 py-2">$10–$18</td>
                <td className="px-4 py-2">$4,000–$7,200</td>
                <td className="px-4 py-2">Low</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Acid-stained concrete</td>
                <td className="px-4 py-2">$8–$16</td>
                <td className="px-4 py-2">$3,200–$6,400</td>
                <td className="px-4 py-2">Medium</td>
                <td className="px-4 py-2">Moderate</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Polished concrete</td>
                <td className="px-4 py-2">$8–$15</td>
                <td className="px-4 py-2">$3,200–$6,000</td>
                <td className="px-4 py-2">Medium</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stamped concrete</td>
                <td className="px-4 py-2">$12–$22</td>
                <td className="px-4 py-2">$4,800–$8,800</td>
                <td className="px-4 py-2">Medium</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Concrete with paver borders</td>
                <td className="px-4 py-2">$14–$24</td>
                <td className="px-4 py-2">$5,600–$9,600</td>
                <td className="px-4 py-2">Low–Medium</td>
                <td className="px-4 py-2">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Use our <Link href="/calculators/patio">Patio Calculator</Link> to get a precise cost estimate tailored to your exact dimensions and chosen finish. Now let&apos;s explore each style in detail.
        </p>

        {/* --- STAMPED CONCRETE --- */}
        <h2 id="stamped-concrete-patio">1–5. Stamped Concrete Patio Ideas</h2>
        <p>
          Stamped concrete is the king of decorative patios. Fresh concrete is imprinted with rubber mats that replicate the texture and pattern of natural stone, brick, slate, or wood. Combined with integral color and release agents, the result can look nearly identical to much more expensive materials — at a fraction of the cost.
        </p>

        <h3>Popular Stamped Patterns</h3>
        <ol>
          <li><strong>Ashlar slate:</strong> The most popular pattern nationwide. Mimics cut natural slate with irregular rectangular shapes. Works beautifully with earth tones — tan, gray, or sandstone. Cost: <strong>$12–$18/sq ft</strong>.</li>
          <li><strong>Herringbone brick:</strong> Classic zigzag pattern that replicates a traditional brick patio without the shifting, settling, or weed problems. Ideal for Colonial and farmhouse styles. Cost: <strong>$13–$19/sq ft</strong>.</li>
          <li><strong>Random stone / fieldstone:</strong> Natural, organic shapes that look like laid flagstone. Excellent for rustic and cottage-style homes. Cost: <strong>$14–$20/sq ft</strong>.</li>
          <li><strong>Wood plank:</strong> Yes, concrete can look like wood. Wood-plank stamps create a deck-like appearance that never rots, warps, or needs staining. Cost: <strong>$14–$22/sq ft</strong>.</li>
          <li><strong>Cobblestone:</strong> Old-world European aesthetic. Small, rounded stone shapes work well for pathways and borders. Cost: <strong>$15–$22/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Pro tip:</strong> Stamped concrete requires a release agent (either liquid or powder) that creates the color contrast between the base color and the grooves. Powder release gives a more dramatic, antiqued look. Liquid release is subtler and less messy. Ask your contractor which they prefer and why.
        </p>

        <p>
          <strong>Maintenance:</strong> Reseal every 2–3 years with an acrylic sealer ($0.50–$1.50/sq ft if you DIY; $1.50–$3/sq ft professionally). Without resealing, the color fades and the surface becomes more susceptible to scaling in freeze-thaw climates.
        </p>

        <p>
          For a complete price breakdown, see our <Link href="/blog/stamped-concrete-cost-guide">stamped concrete cost guide</Link>.
        </p>

        {/* --- STAINED CONCRETE --- */}
        <h2 id="stained-concrete-patio">6–9. Stained Concrete Patio Ideas</h2>
        <p>
          Concrete staining transforms plain gray concrete into a rich, colorful surface. Unlike paint (which sits on top and peels), stains penetrate the concrete and create permanent color that won&apos;t chip or flake. There are two main types:
        </p>

        <h3>Acid Stain vs. Water-Based Stain</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Feature</th>
                <th className="text-left px-4 py-2 font-semibold">Acid Stain</th>
                <th className="text-left px-4 py-2 font-semibold">Water-Based Stain</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Color range</td>
                <td className="px-4 py-2">Limited (earth tones: amber, brown, green, blue-black)</td>
                <td className="px-4 py-2">Wide (virtually any color)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Appearance</td>
                <td className="px-4 py-2">Mottled, variegated, natural — each slab unique</td>
                <td className="px-4 py-2">More uniform and predictable</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Cost (material + labor)</td>
                <td className="px-4 py-2">$4–$8/sq ft</td>
                <td className="px-4 py-2">$2–$6/sq ft</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">DIY difficulty</td>
                <td className="px-4 py-2">Hard (requires neutralizing, messy)</td>
                <td className="px-4 py-2">Moderate (easier cleanup)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Durability</td>
                <td className="px-4 py-2">Permanent chemical reaction</td>
                <td className="px-4 py-2">Very durable (sealer required)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Stained Patio Ideas</h3>
        <ol start={6}>
          <li><strong>Warm terra cotta acid stain:</strong> Amber and rust-colored acid stains create a Mediterranean warmth that pairs beautifully with outdoor furniture and greenery. The natural variation means no two patios look alike. Cost: <strong>$8–$14/sq ft</strong> on new concrete.</li>
          <li><strong>Multi-tone layered stain:</strong> Applying two or three stain colors in layers creates depth and visual interest. A brown base with amber highlights mimics natural stone. Cost: <strong>$10–$16/sq ft</strong>.</li>
          <li><strong>Stained concrete with saw-cut borders:</strong> Shallow saw cuts create &quot;tile&quot; or geometric patterns, and different stain colors fill each section. This achieves a tile look without grout lines. Cost: <strong>$10–$18/sq ft</strong>.</li>
          <li><strong>Black acid stain (modern look):</strong> A dark charcoal or black acid stain gives an ultra-modern, sleek appearance. Pairs well with minimalist landscaping and contemporary architecture. Cost: <strong>$8–$14/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Maintenance:</strong> Stained patios need resealing every 1–2 years for outdoor use. UV exposure fades some colors over time, especially lighter water-based stains. A high-quality UV-stable sealer extends the life significantly.
        </p>

        <p>
          Learn more in our <Link href="/blog/concrete-staining-guide">concrete staining guide</Link> and <Link href="/blog/concrete-stain-colors-guide">stain color guide</Link>.
        </p>

        {/* --- POLISHED CONCRETE --- */}
        <h2 id="polished-concrete-patio">10–12. Polished Concrete Patio Ideas</h2>
        <p>
          Polished concrete uses industrial diamond grinders to progressively refine the surface from rough to mirror-smooth. While more common indoors, polished concrete works beautifully for covered patios, screened porches, and pool decks in warm climates.
        </p>

        <ol start={10}>
          <li><strong>Cream polish (smooth, no aggregate exposure):</strong> The lightest grind that produces a smooth, refined surface without exposing the stone aggregate underneath. Clean, modern appearance. Cost: <strong>$3–$7/sq ft</strong> (polishing only; concrete slab separate).</li>
          <li><strong>Salt-and-pepper polish:</strong> Slightly deeper grind that reveals fine aggregate particles, creating a speckled appearance. The most popular polishing level for residential patios. Cost: <strong>$5–$10/sq ft</strong>.</li>
          <li><strong>Full aggregate exposure:</strong> Deep grinding reveals the full decorative aggregate. If you use premium stone in the concrete mix (granite, quartz, marble chips), this creates a terrazzo-like floor. Cost: <strong>$8–$15/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Important caveat:</strong> Polished concrete can be slippery when wet. For uncovered outdoor patios, consider a polished look with an anti-slip additive in the final sealer coat, or opt for a honed (matte) finish that provides similar aesthetics with better traction.
        </p>

        <p>
          For a complete breakdown of polishing processes and costs, see our <Link href="/blog/concrete-polishing-guide">concrete polishing guide</Link>.
        </p>

        {/* --- COLORED CONCRETE --- */}
        <h2 id="colored-concrete-patio">13–16. Colored Concrete Patio Ideas</h2>
        <p>
          Colored concrete uses pigments mixed directly into the concrete (integral color) or applied to the surface (color hardener). The result is a consistently colored slab that doesn&apos;t fade like stains or peel like paint. This is the simplest way to elevate a basic patio.
        </p>

        <ol start={13}>
          <li><strong>Warm sandstone/buff:</strong> The most popular concrete color. This warm, neutral tone complements almost any home exterior and landscaping. Adds $1–$2/sq ft to a basic pour. Total installed: <strong>$8–$12/sq ft</strong>.</li>
          <li><strong>Charcoal gray:</strong> Modern and sophisticated. Dark gray concrete makes outdoor furniture pop and hides stains well. Cost: <strong>$8–$13/sq ft</strong>.</li>
          <li><strong>Red/brick tone:</strong> Integral red oxide creates a warm, traditional look that mimics brick at a fraction of the cost. Cost: <strong>$9–$14/sq ft</strong>.</li>
          <li><strong>Two-tone colored borders:</strong> Pour the main patio in one color and the border band in a contrasting shade. This simple technique adds a custom, high-end look for minimal extra cost. Cost: <strong>$10–$16/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Pro tip:</strong> Always ask for a sample slab or test pour before committing to a color. Integral color looks different wet vs. dry, and the exact shade varies slightly with water content, curing conditions, and cement brand. A good contractor will pour a 2×2 sample and let it cure for comparison.
        </p>

        {/* --- EXPOSED AGGREGATE --- */}
        <h2 id="exposed-aggregate-patio">17–19. Exposed Aggregate Patio Ideas</h2>
        <p>
          Exposed aggregate concrete reveals the natural stone, pebbles, and sand within the concrete mix by washing or blasting away the top layer of cement paste before it fully cures. The result is a beautiful, textured surface with excellent slip resistance.
        </p>

        <ol start={17}>
          <li><strong>Natural river pebble aggregate:</strong> Smooth, rounded river stones in tan, brown, and gray create a warm, organic surface. The most traditional exposed aggregate look. Cost: <strong>$10–$16/sq ft</strong>.</li>
          <li><strong>Decorative glass aggregate:</strong> Recycled glass chips mixed into the concrete create a sparkling, modern surface that catches the light. Available in blue, green, amber, and clear. Cost: <strong>$14–$22/sq ft</strong>.</li>
          <li><strong>Seeded aggregate (premium stone):</strong> Instead of relying on the aggregate already in the mix, premium stones (white marble, black granite, or colored quartz) are pressed into the surface before washing. This gives you complete control over the appearance. Cost: <strong>$16–$25/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Maintenance:</strong> Exposed aggregate is one of the most durable and low-maintenance patio finishes. Seal every 3–5 years to maintain color vibrancy and protect against stains. The textured surface hides dirt well and provides excellent traction even when wet.
        </p>

        <p>
          Read our full <Link href="/blog/exposed-aggregate-concrete-guide">exposed aggregate guide</Link> for more details.
        </p>

        {/* --- BRUSHED/BROOM FINISH --- */}
        <h2 id="brushed-concrete-patio">20–22. Brushed &amp; Textured Concrete Patio Ideas</h2>
        <p>
          Don&apos;t underestimate the humble broom finish. With smart design choices — borders, scoring patterns, and color — a brushed concrete patio can look fantastic for a fraction of the cost of decorative finishes.
        </p>

        <ol start={20}>
          <li><strong>Broom finish with saw-cut geometric pattern:</strong> A standard broom-finish pour with decorative saw cuts creating large diamond, square, or diagonal patterns. The scoring adds visual interest at minimal cost. Cost: <strong>$7–$11/sq ft</strong>.</li>
          <li><strong>Swirl finish:</strong> Instead of straight broom lines, the finisher uses a hand trowel or broom in circular motions to create a swirl pattern. More visually interesting than standard broom while remaining slip-resistant. Cost: <strong>$7–$12/sq ft</strong>.</li>
          <li><strong>Rock salt texture:</strong> Rock salt is pressed into wet concrete and dissolves during curing, leaving small pits and dimples that create a unique, natural texture. Cost: <strong>$7–$12/sq ft</strong>.</li>
        </ol>

        <p>
          <strong>Why contractors love broom finish:</strong> It&apos;s forgiving. Small imperfections in the pour are hidden by the texture. The finish provides excellent drainage and traction. And it&apos;s the fastest to complete — which means lower labor costs for you.
        </p>

        {/* --- PAVER BORDERS --- */}
        <h2 id="paver-border-patio">23–25. Concrete Patio with Paver Borders</h2>
        <p>
          Combining concrete with paver borders gives you the strength and cost-effectiveness of a poured slab with the decorative appeal of pavers at the edges. This hybrid approach is increasingly popular because it looks high-end but costs far less than a full paver patio.
        </p>

        <ol start={23}>
          <li><strong>Stamped concrete center with natural stone border:</strong> The main patio area is stamped concrete, with a 12–18 inch border of real flagstone, bluestone, or travertine pavers. Cost: <strong>$16–$24/sq ft</strong> overall.</li>
          <li><strong>Broom-finish concrete with brick soldier course:</strong> A clean broom-finish patio framed by a row of brick pavers laid end-to-end. Classic and timeless. Cost: <strong>$10–$16/sq ft</strong>.</li>
          <li><strong>Colored concrete with contrasting paver band:</strong> Two bands of pavers — one at the perimeter and one creating a geometric inset — with colored concrete filling the main areas. Cost: <strong>$14–$22/sq ft</strong>.</li>
        </ol>

        <p>
          For more on comparing poured concrete to pavers, see our <Link href="/blog/concrete-vs-pavers">concrete vs. pavers comparison</Link>.
        </p>

        {/* --- DESIGN TIPS --- */}
        <h2 id="design-tips">Design Tips for Any Concrete Patio</h2>
        <p>
          Regardless of which style you choose, these design principles will help you get the most from your investment:
        </p>

        <h3>Size and Layout</h3>
        <ul>
          <li><strong>Minimum useful size:</strong> 10×12 feet (120 sq ft) for a dining set. 12×16 feet (192 sq ft) for dining plus lounge seating. 16×20 feet (320 sq ft) for a full outdoor living space.</li>
          <li><strong>Traffic flow:</strong> Leave at least 3 feet of clearance around furniture for walkways. Plan where people will enter and exit the patio.</li>
          <li><strong>Drainage slope:</strong> Always slope the patio away from the house at a minimum of 1/8 inch per foot (1% grade). This prevents water from pooling against your foundation.</li>
        </ul>

        <h3>Color Selection</h3>
        <ul>
          <li><strong>Match your home&apos;s undertones:</strong> Warm-toned homes (brick, wood siding) look best with warm concrete colors (tan, buff, terra cotta). Cool-toned homes (gray stone, painted siding) pair better with gray, charcoal, or blue-gray concrete.</li>
          <li><strong>Consider sun exposure:</strong> Dark colors absorb heat and can become uncomfortably hot in direct sun. In southern climates, lighter colors keep the patio cooler underfoot.</li>
          <li><strong>Test before you commit:</strong> Always request a concrete sample in your chosen color. Colors look different in photos, on screens, and in real life.</li>
        </ul>

        <h3>Smart Add-ons Worth the Investment</h3>
        <ul>
          <li><strong>Built-in fire pit pad:</strong> Pour a thickened, heat-resistant section for a fire pit ($200–$500 extra). Much cheaper than adding one later.</li>
          <li><strong>Low-voltage lighting conduit:</strong> Install PVC conduit under the slab during the pour for future landscape lighting ($50–$100 in materials).</li>
          <li><strong>Integrated seating walls:</strong> Poured concrete seat walls at the patio perimeter provide built-in seating and double as planters. Cost: $30–$60/linear foot.</li>
        </ul>

        {/* --- COST FACTORS --- */}
        <h2 id="cost-factors">What Drives Concrete Patio Costs Up or Down?</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Factor</th>
                <th className="text-left px-4 py-2 font-semibold">Impact on Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Patio size</td>
                <td className="px-4 py-2">Lower $/sq ft at scale</td>
                <td className="px-4 py-2">Larger patios cost less per square foot (setup costs are fixed)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Finish type</td>
                <td className="px-4 py-2">+$0 to +$15/sq ft</td>
                <td className="px-4 py-2">Broom is cheapest; stamped and custom aggregate are most expensive</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Site conditions</td>
                <td className="px-4 py-2">+$500 to +$5,000</td>
                <td className="px-4 py-2">Slopes, poor soil, tree removal, old concrete demolition</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Access for concrete truck</td>
                <td className="px-4 py-2">+$0 to +$1,500</td>
                <td className="px-4 py-2">If a truck can&apos;t reach the site, wheelbarrow or pump adds cost</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Reinforcement</td>
                <td className="px-4 py-2">+$0.35 to +$2/sq ft</td>
                <td className="px-4 py-2">Wire mesh for patios; rebar for driveways or heavy load areas</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Geographic location</td>
                <td className="px-4 py-2">±20–40%</td>
                <td className="px-4 py-2">Coastal and metro areas cost 20–40% more than rural/Midwest</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Season</td>
                <td className="px-4 py-2">-10 to -20%</td>
                <td className="px-4 py-2">Fall and late winter pours are often cheaper (lower demand)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For detailed cost data, check our <Link href="/blog/concrete-patio-cost-guide">concrete patio cost guide</Link> and <Link href="/blog/concrete-slab-cost-guide">slab cost guide</Link>.
        </p>

        {/* --- DIY CONSIDERATIONS --- */}
        <h2 id="diy-considerations">Can You DIY a Decorative Concrete Patio?</h2>
        <p>
          Some concrete patio ideas lend themselves to DIY; others absolutely require a professional. Here&apos;s an honest assessment:
        </p>

        <h3>Good DIY Candidates</h3>
        <ul>
          <li><strong>Broom finish patio (under 150 sq ft):</strong> If you can handle the physical work and have 2–3 helpers on pour day, a small broom-finish patio is achievable. Budget $4–$6/sq ft in materials.</li>
          <li><strong>Water-based stain on existing concrete:</strong> Staining an existing patio is a great weekend project. Clean, apply stain, seal — total cost $1–$3/sq ft in materials.</li>
          <li><strong>Concrete with paver border:</strong> Pour a simple slab and then lay paver borders yourself. The concrete pour is the hard part; the pavers are straightforward.</li>
        </ul>

        <h3>Hire a Pro For These</h3>
        <ul>
          <li><strong>Stamped concrete:</strong> The timing is critical. You have about 30 minutes to stamp before the concrete hardens too much. One mistake ruins the entire surface. Always hire experienced stamping contractors.</li>
          <li><strong>Polished concrete:</strong> Requires specialized diamond grinding equipment worth $10,000+ and significant experience to get even results.</li>
          <li><strong>Exposed aggregate:</strong> The wash timing is extremely precise — wash too early and the aggregate dislodges; wash too late and you can&apos;t expose it. Leave this to the pros.</li>
          <li><strong>Large pours (300+ sq ft):</strong> The sheer volume of concrete and the speed required to finish it before it sets makes large pours a team effort with experienced finishers.</li>
        </ul>

        {/* --- LONGEVITY --- */}
        <h2 id="longevity">How Long Do Concrete Patios Last?</h2>
        <p>
          A properly installed concrete patio lasts <strong>25–50+ years</strong> with minimal maintenance. Here&apos;s how different finishes compare in terms of longevity:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Finish</th>
                <th className="text-left px-4 py-2 font-semibold">Expected Lifespan</th>
                <th className="text-left px-4 py-2 font-semibold">Key Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Broom / brushed</td>
                <td className="px-4 py-2">30–50+ years</td>
                <td className="px-4 py-2">Seal every 3–5 years (optional)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Colored concrete</td>
                <td className="px-4 py-2">30–50+ years</td>
                <td className="px-4 py-2">Color is permanent; seal to prevent surface wear</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Exposed aggregate</td>
                <td className="px-4 py-2">30–50+ years</td>
                <td className="px-4 py-2">Seal every 3–5 years</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Stamped concrete</td>
                <td className="px-4 py-2">25–40 years</td>
                <td className="px-4 py-2">Reseal every 2–3 years; reapply color if faded</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stained concrete</td>
                <td className="px-4 py-2">25–40 years</td>
                <td className="px-4 py-2">Reseal every 1–2 years outdoors</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Polished concrete</td>
                <td className="px-4 py-2">30–50+ years</td>
                <td className="px-4 py-2">Repolish every 5–10 years (covered patios)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The biggest threats to patio longevity are poor drainage (water pooling leads to cracking in freeze-thaw climates), inadequate base preparation (settling causes cracking), and lack of control joints (which direct where cracks form). A good contractor addresses all three during installation.
        </p>

        {/* --- GETTING STARTED --- */}
        <h2 id="getting-started">How to Get Started with Your Concrete Patio</h2>
        <ol>
          <li><strong>Define your budget and style.</strong> Use the cost comparison table above to narrow down which finishes fit your budget. Remember: it&apos;s better to have a smaller patio with a beautiful finish than a huge slab of plain gray concrete.</li>
          <li><strong>Measure your space.</strong> Use our <Link href="/calculators/patio">Patio Calculator</Link> to figure out exactly how much concrete you&apos;ll need and what it will cost.</li>
          <li><strong>Get 3 contractor quotes.</strong> Always get at least three written estimates. Make sure each quote specifies the same thickness, reinforcement, finish, and base preparation so you&apos;re comparing apples to apples.</li>
          <li><strong>Check references and past work.</strong> For decorative finishes especially, ask to see previous projects in person. Photos can be misleading — go look at actual patios the contractor has completed.</li>
          <li><strong>Schedule strategically.</strong> Late fall and early spring often yield the best prices as contractors have lighter schedules. Avoid the May–July rush if your timeline is flexible.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Create Professional Patio Estimates in Minutes</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template includes material quantities, labor costs, and total project pricing for every concrete patio style. Perfect for contractors building bids or homeowners comparing quotes.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="calculators">Free Concrete Calculators</h2>
        <p>Get instant estimates for your project:</p>
        <ul>
          <li><Link href="/calculators/patio">Concrete Patio Calculator</Link> — Patio-specific sizing, cubic yards, and cost estimates</li>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — General slab calculations for any project</li>
          <li><Link href="/calculators/stamped">Stamped Concrete Calculator</Link> — Stamped patio cost and material estimates</li>
          <li><Link href="/calculators/driveway">Driveway Calculator</Link> — Driveway-specific sizing and costs</li>
        </ul>
        <p>
          For more project guides, explore our articles on <Link href="/blog/concrete-patio-cost-guide">patio costs</Link>, <Link href="/blog/concrete-finishing-techniques">finishing techniques</Link>, and <Link href="/blog/decorative-concrete-guide">decorative concrete options</Link>.
        </p>
      </article>
    </div>
  );
}
