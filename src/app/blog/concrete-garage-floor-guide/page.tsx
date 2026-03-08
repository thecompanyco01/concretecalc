import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Garage Floor: Coating, Repair & Finishing Guide (2026)",
  description:
    "Complete concrete garage floor guide for contractors: coatings (epoxy, polyurea, polyaspartic), repair methods, resurfacing costs ($3-$12/sq ft), and how to build a profitable garage floor service.",
  keywords:
    "concrete garage floor, garage floor coating, epoxy garage floor, garage floor repair, concrete garage floor cost, garage floor resurfacing, polyurea garage floor, garage floor finishing",
};

export default function ConcreteGarageFloorGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Garage Floor Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Garage Floor: Coating, Repair &amp; Finishing Guide</h1>

        <p className="lead text-xl text-gray-600">
          A concrete garage floor coating costs <strong>$3–$12 per square foot</strong> professionally installed, with new garage floor pours running <strong>$8–$14 per square foot</strong>. Garage floor work — coatings, repairs, and resurfacing — is one of the fastest-growing niches in residential concrete. It&apos;s high-margin, repeatable, and customers actively search for it. This guide covers everything: coatings comparison, repair methods, new pour specs, and how to build a profitable garage floor business.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Calculate Your Garage Floor Materials</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">Concrete Slab Calculator</Link>{" "}
            to estimate cubic yards, rebar, and costs for new garage floor pours.
          </p>
        </div>

        <h2 id="coatings">Garage Floor Coatings Compared</h2>
        <p>
          Garage floor coatings are the bread and butter of this niche. Material costs are low, labor is moderate, and customers pay premium prices for a clean, professional-looking garage. Here&apos;s how the major coating types compare:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Coating Type</th>
                <th className="text-left px-4 py-2 font-semibold">Material Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Installed Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Cure Time</th>
                <th className="text-left px-4 py-2 font-semibold">Lifespan</th>
                <th className="text-left px-4 py-2 font-semibold">Hot Tire Pickup</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Water-based epoxy</td>
                <td className="px-4 py-2">$0.30–$0.75</td>
                <td className="px-4 py-2">$3–$5</td>
                <td className="px-4 py-2">72 hours</td>
                <td className="px-4 py-2">2–5 years</td>
                <td className="px-4 py-2">Yes (common)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">100% solids epoxy</td>
                <td className="px-4 py-2">$0.75–$1.50</td>
                <td className="px-4 py-2">$5–$8</td>
                <td className="px-4 py-2">24–48 hours</td>
                <td className="px-4 py-2">7–15 years</td>
                <td className="px-4 py-2">Minimal</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Polyurea</td>
                <td className="px-4 py-2">$1.00–$2.00</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">4–6 hours</td>
                <td className="px-4 py-2">15–20 years</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Polyaspartic</td>
                <td className="px-4 py-2">$1.50–$3.00</td>
                <td className="px-4 py-2">$7–$12</td>
                <td className="px-4 py-2">2–4 hours</td>
                <td className="px-4 py-2">15–20+ years</td>
                <td className="px-4 py-2">No</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Acrylic sealer</td>
                <td className="px-4 py-2">$0.15–$0.40</td>
                <td className="px-4 py-2">$2–$4</td>
                <td className="px-4 py-2">2–4 hours</td>
                <td className="px-4 py-2">1–3 years</td>
                <td className="px-4 py-2">Yes</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Concrete stain + sealer</td>
                <td className="px-4 py-2">$0.40–$1.00</td>
                <td className="px-4 py-2">$3–$6</td>
                <td className="px-4 py-2">24–48 hours</td>
                <td className="px-4 py-2">3–7 years</td>
                <td className="px-4 py-2">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Epoxy Coatings — The Standard</h3>
        <p>
          Epoxy is the most common garage floor coating. It creates a hard, glossy surface that resists chemicals, oil, and abrasion. But not all epoxies are equal:
        </p>
        <ul>
          <li><strong>Water-based epoxy</strong> (like the $30 Home Depot kits) is the bottom tier. It&apos;s thin (2–3 mils), peels easily, and has hot tire pickup issues. This is what DIYers use — and what you get called to fix 18 months later. Never install this as a professional.</li>
          <li><strong>100% solids epoxy</strong> is the professional standard. It cures to 10–20 mils thick, bonds tenaciously to properly prepared concrete, and resists chemicals and abrasion. Brands like Rust-Oleum Professional, ArmorClad, and Sherwin-Williams Armorshield are popular. Two coats with vinyl flake broadcast between coats is the standard system.</li>
        </ul>
        <p>
          For a detailed comparison of epoxy products and techniques, see our <Link href="/blog/epoxy-garage-floor-guide">epoxy garage floor guide</Link>.
        </p>

        <h3>Polyurea — The Performance Upgrade</h3>
        <p>
          Polyurea coatings are flexible, UV-stable, and cure in hours instead of days. They don&apos;t yellow in sunlight (a common epoxy problem in garages with windows or open doors), and they&apos;re far more resistant to impact and abrasion than epoxy.
        </p>
        <p>
          The big advantage for contractors: same-day turnaround. You can prep, prime, coat, and broadcast flake in a single day, with the customer driving on it the next morning. Epoxy jobs take 3–5 days of customer downtime.
        </p>
        <p>
          <strong>Pro tip:</strong> Position polyurea as the premium option. The material cost difference over epoxy is only $0.50–$1.50/sq ft, but you can charge $3–$5/sq ft more because of the faster cure time and superior performance. Higher margin AND happier customers.
        </p>

        <h3>Polyaspartic — The Premium Choice</h3>
        <p>
          Polyaspartic coatings are the top of the line. They&apos;re a subset of polyurea with even faster cure times (walk-on in 2–4 hours, drive-on in 24 hours), excellent UV stability, and the highest abrasion resistance of any common floor coating.
        </p>
        <p>
          The challenge: fast cure time means fast working time. You have 15–30 minutes of pot life with most polyaspartics. This requires experience and a well-coordinated crew. One hesitation and you have a lap mark that&apos;s there forever. Not a beginner product.
        </p>

        <h2 id="surface-prep">Surface Preparation — The Make-or-Break Step</h2>
        <p>
          Every garage floor coating failure traces back to surface preparation. The coating is only as good as the bond to the concrete. There are three methods:
        </p>

        <h3>Diamond Grinding (Preferred)</h3>
        <p>
          Diamond grinding with a walk-behind grinder (Diamatic, HTC, Husqvarna) creates an ideal surface profile for coating adhesion. It removes laitance, contaminants, and previous coatings while creating a consistent scratch pattern (CSP 2–3 per ICRI guidelines). Grinding also levels minor high spots.
        </p>
        <p>
          <strong>Equipment cost:</strong> $200–$400/day rental for a walk-behind grinder. Diamond tooling runs $50–$150/segment set depending on the bond and grit. Budget $0.50–$1.00/sq ft for grinding including tooling wear. For detailed grinding techniques, see our <Link href="/blog/concrete-grinding-guide">grinding guide</Link>.
        </p>

        <h3>Shot Blasting</h3>
        <p>
          Shot blasting machines (Blastrac, National Flooring Equipment) hurl steel shot at the floor to profile it. Faster than grinding for large areas (1,000+ sq ft) and creates an aggressive profile (CSP 3–5). It&apos;s the method of choice for commercial garage floors and large residential garages.
        </p>
        <p>
          <strong>Equipment cost:</strong> $300–$600/day rental. Steel shot is reusable (recycles through the machine) so media cost is minimal. Budget $0.40–$0.80/sq ft for shot blasting.
        </p>

        <h3>Acid Etching (Last Resort)</h3>
        <p>
          Acid etching with muriatic acid or phosphoric acid is the cheapest prep method but also the least reliable. It creates an inconsistent profile, doesn&apos;t remove contaminants (oil, paint, sealers), and the acid residue must be completely neutralized or it will interfere with coating adhesion.
        </p>
        <p>
          <strong>Only use acid etching on:</strong> New, clean concrete that has never been sealed or contaminated. On existing garage floors with oil stains, tire marks, or previous coatings, acid etching is insufficient — grind or shot blast instead.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-blue-800 mb-2">💡 Pro Tip: The Water Drop Test</p>
          <p className="text-blue-700 text-sm">
            Before coating, drop water on the prepared floor. It should absorb within 30 seconds and darken the concrete. If water beads up or sits on the surface, there&apos;s a sealer, curing compound, or contaminant preventing adhesion. You must grind through this layer before coating. Skipping this test is the #1 reason garage floor coatings peel.
          </p>
        </div>

        <h2 id="repair">Garage Floor Repair</h2>
        <p>
          Most existing garage floors need some repair before coating. Common issues and fixes:
        </p>

        <h3>Crack Repair</h3>
        <p>
          Hairline cracks (less than 1/16&quot;) can be filled with the coating itself during application. Cracks 1/16&quot; to 1/4&quot; should be routed and filled with a flexible polyurea joint filler. Cracks wider than 1/4&quot; or cracks with vertical displacement indicate structural issues — investigate the cause before cosmetic repair. See our <Link href="/blog/concrete-crack-repair-cost">crack repair cost guide</Link> for detailed pricing.
        </p>

        <h3>Spalling and Surface Damage</h3>
        <p>
          Spalled areas (where the surface has flaked off, often due to freeze-thaw cycles or deicing salt damage) must be repaired before coating. Use a polymer-modified repair mortar applied to a minimum of 1/4&quot; depth. Feather-edge repairs don&apos;t work — they&apos;ll delaminate under traffic. Our <Link href="/blog/concrete-spalling-guide">spalling guide</Link> covers repair methods in detail.
        </p>

        <h3>Oil Stain Removal</h3>
        <p>
          Oil stains are the most common contaminant on garage floors and the most common cause of coating failure. Degreasers (Zep, Purple Power, or concrete-specific degreasers) can remove surface oil, but penetrated oil requires grinding to physically remove the contaminated concrete. For severe oil contamination, apply a poultice (kitty litter, diatomaceous earth, or commercial poultice products) overnight to draw out deep oil.
        </p>

        <h3>Moisture Issues</h3>
        <p>
          Garage slabs without a vapor barrier (common in older homes) can have moisture vapor transmission that lifts coatings from below. Test with the calcium chloride test (ASTM F1869) or relative humidity test (ASTM F2170). If moisture levels exceed the coating manufacturer&apos;s limits (typically 3 lbs/1,000 sq ft/24 hrs for epoxy), you need a moisture mitigation primer before coating.
        </p>
        <p>
          <strong>Cost to fix:</strong> Moisture mitigation primers (like Mapei Planiseal MBV) add $1–$3/sq ft to the project but are essential for adhesion. Don&apos;t skip this — a delaminated coating is a warranty claim and a reputation hit. See our <Link href="/blog/concrete-waterproofing-guide">waterproofing guide</Link> for moisture management strategies.
        </p>

        <h2 id="new-pour">New Garage Floor Specifications</h2>
        <p>
          When pouring a new garage floor or replacing a failed one, getting the specifications right avoids problems down the road:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Specification</th>
                <th className="text-left px-4 py-2 font-semibold">Minimum</th>
                <th className="text-left px-4 py-2 font-semibold">Recommended</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Thickness</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">6&quot; for heavy vehicles, RVs, lifts</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Concrete strength</td>
                <td className="px-4 py-2">3,500 PSI</td>
                <td className="px-4 py-2">4,000–4,500 PSI</td>
                <td className="px-4 py-2">Higher PSI = better coating adhesion</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Reinforcement</td>
                <td className="px-4 py-2">6x6 W2.9 mesh</td>
                <td className="px-4 py-2">#4 rebar @ 18&quot; OC</td>
                <td className="px-4 py-2">Rebar for heavy loads, lifts</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Subbase</td>
                <td className="px-4 py-2">4&quot; gravel</td>
                <td className="px-4 py-2">6&quot; compacted 3/4&quot; minus</td>
                <td className="px-4 py-2">Compact to 95% density</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Vapor barrier</td>
                <td className="px-4 py-2">6 mil poly</td>
                <td className="px-4 py-2">10–15 mil (Stego Wrap)</td>
                <td className="px-4 py-2">Essential if coating will be applied</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Slope to drain</td>
                <td className="px-4 py-2">1/8&quot;/ft</td>
                <td className="px-4 py-2">1/4&quot;/ft toward door</td>
                <td className="px-4 py-2">Prevents water pooling</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Control joints</td>
                <td className="px-4 py-2">Every 10 ft</td>
                <td className="px-4 py-2">Every 8–10 ft</td>
                <td className="px-4 py-2">Cut 1/4 depth within 24 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Key point:</strong> If the customer plans to coat the floor, specify a concrete mix without calcium chloride accelerator — it causes coating adhesion problems. Also avoid hard-troweling the surface to a burnished finish; a light broom or float finish provides better coating adhesion. See our <Link href="/blog/concrete-finishing-techniques">finishing techniques guide</Link> for surface options.
        </p>

        <h2 id="coating-process">Professional Coating Application Process</h2>
        <p>
          Here&apos;s the step-by-step process for a professional garage floor coating job:
        </p>

        <h3>Day 1: Preparation</h3>
        <ol>
          <li><strong>Clear the garage.</strong> Everything comes out. This is the customer&apos;s responsibility — specify it in your contract.</li>
          <li><strong>Inspect and test.</strong> Check for moisture (calcium chloride test if in doubt), existing coatings (adhesion test), oil contamination, and structural damage.</li>
          <li><strong>Grind or shot blast.</strong> Profile the entire floor to CSP 2–3. Use dust collection — no one wants concrete dust throughout their house. Clean the edges with a hand grinder. Focus on corners and along walls.</li>
          <li><strong>Repair cracks and damage.</strong> Fill cracks with polyurea filler. Patch spalls with polymer-modified repair mortar. Let repairs cure per manufacturer spec.</li>
          <li><strong>Final clean.</strong> Vacuum the entire floor with an industrial vacuum. Wipe with a damp microfiber mop. Any dust left on the floor becomes trapped under the coating and weakens adhesion.</li>
        </ol>

        <h3>Day 1 or 2: Coating Application</h3>
        <ol>
          <li><strong>Apply primer</strong> (if required). Moisture mitigation primer, or epoxy primer for polyurea/polyaspartic systems. Roll or squeegee at the specified spread rate. Don&apos;t thin it — spread rate controls film thickness.</li>
          <li><strong>Apply base coat.</strong> Mix coating per manufacturer instructions (ratio, mixing time, induction time for epoxies). Apply with a notched squeegee for consistent thickness, then back-roll with a 3/8&quot; nap roller. Work in sections — have a wet edge plan.</li>
          <li><strong>Broadcast flake</strong> (if using decorative flake system). Throw flake into the wet coating until saturation (full broadcast) or partial coverage per customer preference. Full broadcast means you throw until flake stops sticking. This typically uses 1.5–2 lbs/sq ft of flake.</li>
          <li><strong>Scrape and vacuum</strong> (for full broadcast systems). After the base coat cures, scrape loose flake with a floor scraper and vacuum thoroughly. This creates a consistent texture.</li>
          <li><strong>Apply clear topcoat.</strong> Roll or squeegee a clear polyurea or polyaspartic topcoat over the flake for protection and sheen. Two coats of clear provides the best durability.</li>
        </ol>

        <h3>Typical 2-Car Garage Timeline</h3>
        <ul>
          <li><strong>Epoxy system:</strong> Day 1 prep + prime, Day 2 base coat + flake, Day 3 clear coat. Drive-on Day 5–7.</li>
          <li><strong>Polyurea/polyaspartic:</strong> Day 1 prep + prime + base coat + flake + clear coat. Drive-on Day 2.</li>
        </ul>

        <h2 id="pricing">How to Price Garage Floor Jobs</h2>
        <p>
          Garage floor coating is a volume business — you need to price profitably while remaining competitive. Here&apos;s a pricing framework:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Garage Size</th>
                <th className="text-left px-4 py-2 font-semibold">Sq Ft</th>
                <th className="text-left px-4 py-2 font-semibold">Epoxy (full broadcast)</th>
                <th className="text-left px-4 py-2 font-semibold">Polyurea/Polyaspartic</th>
                <th className="text-left px-4 py-2 font-semibold">Your Material Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">1-car garage</td>
                <td className="px-4 py-2">200–300 sq ft</td>
                <td className="px-4 py-2">$1,500–$2,500</td>
                <td className="px-4 py-2">$2,000–$3,500</td>
                <td className="px-4 py-2">$300–$600</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">2-car garage</td>
                <td className="px-4 py-2">400–576 sq ft</td>
                <td className="px-4 py-2">$2,500–$4,500</td>
                <td className="px-4 py-2">$3,500–$6,500</td>
                <td className="px-4 py-2">$500–$1,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3-car garage</td>
                <td className="px-4 py-2">600–900 sq ft</td>
                <td className="px-4 py-2">$4,000–$7,000</td>
                <td className="px-4 py-2">$5,500–$10,000</td>
                <td className="px-4 py-2">$800–$1,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Notice the material cost column — that&apos;s $300–$1,500 in materials for a job that brings in $1,500–$10,000. Margins in garage floor coatings are exceptional (60–75%) if you have the equipment and skills. For comprehensive pricing methodology, see our <Link href="/blog/how-to-price-concrete-work">pricing guide</Link>.
        </p>

        <h2 id="business">Building a Garage Floor Coating Business</h2>
        <p>
          Garage floor coating is an ideal service to specialize in or add to your concrete business. Here&apos;s why it works and how to scale it:
        </p>

        <h3>Why It&apos;s Profitable</h3>
        <ul>
          <li><strong>Low entry cost.</strong> Equipment investment is $3,000–$8,000 (grinder, vacuum, squeegee, rollers). Compare that to flatwork equipment at $50,000+.</li>
          <li><strong>High margins.</strong> Material costs are 15–25% of the project price. Labor is the main cost, and a 2-person crew can complete a 2-car garage in one day with polyurea/polyaspartic.</li>
          <li><strong>Repeatable.</strong> Every house has a garage. You&apos;re not hunting for one-off projects — there&apos;s an endless supply of garage floors to coat.</li>
          <li><strong>Year-round work.</strong> Garage floor coating is interior work. While flatwork stops in winter (in cold climates), garage floor coating continues year-round as long as the garage can be heated above 50°F.</li>
          <li><strong>Referral-driven.</strong> A beautiful garage floor is a conversation starter. Every neighbor who sees it wants one. One good job in a neighborhood generates 2–3 referrals.</li>
        </ul>

        <h3>Marketing Tips</h3>
        <ul>
          <li><strong>Before/after photos.</strong> This is the most visual concrete service. Post every job on social media, your website, and Google Business Profile. Before/after photos sell more garage floors than any ad.</li>
          <li><strong>Target neighborhoods.</strong> After completing a job, door-knock or leave flyers at 10–20 surrounding houses. Offer a &quot;neighbor discount&quot; to incentivize bookings while you&apos;re already in the area (saves mobilization costs).</li>
          <li><strong>Google Business Profile.</strong> Optimize for &quot;garage floor coating near me&quot; and &quot;epoxy garage floor [your city].&quot; Collect reviews aggressively — this is the #1 local search ranking factor.</li>
          <li><strong>Partner with realtors.</strong> Garage floor coating is a popular pre-listing upgrade. A $3,000 coating can add $5,000–$10,000 in perceived home value. Build relationships with local agents.</li>
        </ul>

        <h2 id="alternatives">Garage Floor Alternatives</h2>
        <p>
          Customers sometimes ask about alternatives to coatings. Know the options so you can position your service:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Option</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Lifespan</th>
                <th className="text-left px-4 py-2 font-semibold">Pros</th>
                <th className="text-left px-4 py-2 font-semibold">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Polyurea/polyaspartic</td>
                <td className="px-4 py-2">$7–$12</td>
                <td className="px-4 py-2">15–20+ years</td>
                <td className="px-4 py-2">Best durability, fast cure</td>
                <td className="px-4 py-2">Higher cost</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">100% solids epoxy</td>
                <td className="px-4 py-2">$5–$8</td>
                <td className="px-4 py-2">7–15 years</td>
                <td className="px-4 py-2">Good value, proven tech</td>
                <td className="px-4 py-2">Longer cure, can yellow</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Interlocking tiles</td>
                <td className="px-4 py-2">$3–$8</td>
                <td className="px-4 py-2">10–20 years</td>
                <td className="px-4 py-2">DIY-friendly, removable</td>
                <td className="px-4 py-2">Seams trap dirt, shift</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Roll-out mats</td>
                <td className="px-4 py-2">$2–$5</td>
                <td className="px-4 py-2">5–10 years</td>
                <td className="px-4 py-2">Easiest install, removable</td>
                <td className="px-4 py-2">Look cheap, curl at edges</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete stain + seal</td>
                <td className="px-4 py-2">$3–$6</td>
                <td className="px-4 py-2">3–7 years</td>
                <td className="px-4 py-2">Unique look, natural feel</td>
                <td className="px-4 py-2">Less durable, needs resealing</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Polished concrete</td>
                <td className="px-4 py-2">$4–$10</td>
                <td className="px-4 py-2">20+ years</td>
                <td className="px-4 py-2">Modern look, low maintenance</td>
                <td className="px-4 py-2">Slippery when wet, shows stains</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For more on concrete staining and polishing options, see our <Link href="/blog/concrete-staining-guide">staining guide</Link> and <Link href="/blog/concrete-polishing-guide">polishing guide</Link>. For paint-based approaches, check our <Link href="/blog/concrete-floor-paint-guide">floor paint guide</Link>.
        </p>

        <h2 id="common-problems">Common Garage Floor Problems and Solutions</h2>
        <ol>
          <li><strong>Coating peeling/delaminating.</strong> Cause: poor surface prep or moisture issues. Solution: remove failed coating, diamond grind, test for moisture, reapply with proper prep.</li>
          <li><strong>Hot tire pickup.</strong> Cause: wrong coating type (water-based epoxy or cheap acrylic). Solution: recoat with 100% solids epoxy or polyurea that resists heat transfer.</li>
          <li><strong>Bubbling.</strong> Cause: outgassing from concrete (coating applied when floor was warming up, pushing air through the slab). Solution: apply coatings when the floor temperature is falling (afternoon/evening) or use a moisture-tolerant primer.</li>
          <li><strong>Yellowing.</strong> Cause: standard epoxies yellow under UV exposure. Solution: use a UV-stable polyaspartic or polyurea topcoat. For existing yellowed epoxy, recoat with a UV-stable clear coat.</li>
          <li><strong>Flaking/wear in tire paths.</strong> Cause: insufficient coating thickness or no topcoat over flake. Solution: recoat wear areas with an additional clear coat application.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Price Garage Floor Jobs Profitably</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template calculates material quantities, coating coverage, labor costs, and total project pricing for garage floor coatings and new pours. Present professional bids that win work.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="related">Related Resources</h2>
        <p>More guides for garage floors and related concrete work:</p>
        <ul>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — For new garage floor concrete quantities</li>
          <li><Link href="/blog/epoxy-garage-floor-guide">Epoxy Garage Floor Guide</Link> — Deep dive on epoxy systems</li>
          <li><Link href="/blog/concrete-floor-cost">Concrete Floor Cost Guide</Link> — Complete floor pricing</li>
          <li><Link href="/blog/concrete-grinding-guide">Concrete Grinding Guide</Link> — Surface prep techniques</li>
          <li><Link href="/blog/concrete-polishing-guide">Polishing Guide</Link> — Polished concrete as an alternative</li>
          <li><Link href="/blog/concrete-crack-repair-cost">Crack Repair Cost Guide</Link> — Pre-coating crack repair</li>
          <li><Link href="/blog/concrete-slab-cost-guide">Slab Cost Guide</Link> — Full slab pricing reference</li>
          <li><Link href="/blog/how-to-price-concrete-work">How to Price Concrete Work</Link> — Complete pricing methodology</li>
        </ul>
      </article>
    </div>
  );
}
