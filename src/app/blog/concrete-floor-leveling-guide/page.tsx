import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Floor Leveling: Methods, Costs & DIY vs Pro (2026)",
  description:
    "Complete guide to concrete floor leveling: self-leveling compound ($2-5/sq ft), grinding ($1-4/sq ft), mudjacking ($3-6/sq ft), foam jacking ($5-25/sq ft). Covers FF/FL numbers, DIY steps, and when to hire a pro.",
  keywords:
    "concrete floor leveling, level concrete floor, self leveling concrete, floor leveling compound, concrete grinding, mudjacking, foam jacking, uneven concrete floor, floor flatness FF FL, concrete floor repair",
};

export default function ConcreteFloorLevelingGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Floor Leveling Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Floor Leveling: Methods, Costs &amp; DIY vs Pro (2026)</h1>

        <p className="lead text-xl text-gray-600">
          An uneven concrete floor isn&apos;t just a cosmetic issue — it affects flooring installation, causes furniture wobble, creates trip hazards, and can signal structural problems. Whether you&apos;re dealing with a slightly wavy garage floor or a seriously settled basement slab, there&apos;s a leveling method and budget for every situation. This guide covers every method from <strong>$1/sq ft grinding</strong> to <strong>$25/sq ft foam jacking</strong>, how to measure floor flatness, step-by-step DIY instructions, and when to call a professional.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Cost Reference</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Self-leveling compound:</strong> $2–$5 per sq ft (materials + labor)</li>
            <li>• <strong>Concrete grinding:</strong> $1–$4 per sq ft</li>
            <li>• <strong>Mudjacking (slab lifting):</strong> $3–$6 per sq ft</li>
            <li>• <strong>Polyurethane foam jacking:</strong> $5–$25 per sq ft</li>
            <li>• <strong>Full slab replacement:</strong> $8–$18 per sq ft</li>
            <li>• <strong>DIY self-leveling compound:</strong> $1.50–$3 per sq ft (materials only)</li>
          </ul>
        </div>

        <h2>Common Causes of Uneven Concrete Floors</h2>

        <p>
          Before choosing a leveling method, understand <em>why</em> the floor is uneven. The cause determines the right fix — and whether the problem will return.
        </p>

        <ul>
          <li><strong>Soil settlement:</strong> The most common cause. Poorly compacted fill soil beneath the slab compresses over time under the slab&apos;s weight, creating low spots and voids. Often shows as the center of the slab sinking while edges near walls stay level (walls rest on footings that sit on undisturbed soil).</li>
          <li><strong>Poor compaction during construction:</strong> If the subgrade wasn&apos;t properly compacted before pouring, settlement happens quickly — sometimes within the first year. Look for: large, gradual depressions rather than sharp drops.</li>
          <li><strong>Frost heave:</strong> In cold climates, moisture in the soil beneath the slab can freeze and expand, pushing sections of the slab upward. Common in unheated garages and near exterior walls. The floor may be level in summer and heaved in winter.</li>
          <li><strong>Erosion and washout:</strong> Water infiltration (from plumbing leaks, poor drainage, or high water tables) can wash away fine soil particles beneath the slab, creating voids. The slab eventually settles into these voids.</li>
          <li><strong>Tree roots:</strong> Growing roots can push slabs upward from below. Removing the tree doesn&apos;t fix the problem — the decaying roots leave voids that cause settlement later.</li>
          <li><strong>Original finishing errors:</strong> Sometimes the slab was just poured and finished poorly. Uneven screeding, improper form setup, or inconsistent slab thickness can leave a floor that was never flat to begin with.</li>
          <li><strong>Concrete shrinkage and curling:</strong> As concrete cures, it shrinks — and the surface shrinks faster than the bottom (dries from the top). This causes slab edges and corners to curl upward slightly, a condition called &quot;slab curl.&quot; It&apos;s most noticeable on large, thin slabs.</li>
        </ul>

        <h2>Measuring Floor Flatness: The F-Number System</h2>

        <p>
          Before you fix a floor, you need to know how flat (or unflat) it actually is. The industry standard is the <strong>F-number system</strong> (ASTM E1155), which uses two measurements:
        </p>

        <ul>
          <li><strong>FF (Floor Flatness):</strong> Measures bump and waviness — how flat the floor is over short distances (2 feet). Higher = flatter. FF 25 is a typical residential slab. FF 50+ is required for most commercial flooring.</li>
          <li><strong>FL (Floor Levelness):</strong> Measures tilt and slope — how level the floor is over longer distances (10 feet). Higher = more level. FL 20 is typical residential. FL 30+ is commercial standard.</li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">F-Number Reference Guide</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Floor Type</th>
                <th className="text-left py-2">FF (Flatness)</th>
                <th className="text-left py-2">FL (Levelness)</th>
                <th className="text-left py-2">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Conventional</td>
                <td className="py-2">FF 20</td>
                <td className="py-2">FL 15</td>
                <td className="py-2">Garages, utility, carpeted rooms</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Straight</td>
                <td className="py-2">FF 25</td>
                <td className="py-2">FL 20</td>
                <td className="py-2">Standard residential, tile, vinyl</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Flat</td>
                <td className="py-2">FF 35</td>
                <td className="py-2">FL 25</td>
                <td className="py-2">Commercial offices, retail</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Very flat</td>
                <td className="py-2">FF 45</td>
                <td className="py-2">FL 35</td>
                <td className="py-2">Warehouses with narrow-aisle forklifts</td>
              </tr>
              <tr>
                <td className="py-2">Super flat</td>
                <td className="py-2">FF 60+</td>
                <td className="py-2">FL 40+</td>
                <td className="py-2">High-bay warehouses, broadcast studios</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Per ACI 117 and ASTM E1155. Most flooring manufacturers require FF 25+ and FL 20+ for warranty coverage.
          </p>
        </div>

        <h3>How to Check Flatness Without Fancy Equipment</h3>

        <p>
          Don&apos;t have a profilometer? Here are practical methods:
        </p>

        <ul>
          <li><strong>10-foot straightedge:</strong> Lay a straight 10-foot board or aluminum level on the floor. Measure the gap underneath with a ruler. Gaps over 3/16 inch indicate the floor needs leveling for most flooring types.</li>
          <li><strong>Marble test:</strong> Place a marble on the floor and watch where it rolls. It won&apos;t tell you exact measurements, but it reveals slope direction and severity.</li>
          <li><strong>Laser level:</strong> Set a self-leveling laser level at one end of the room and measure the beam height at multiple points across the floor. Record the differences.</li>
          <li><strong>String line:</strong> Stretch a taut string from one side of the room to the other, 2 inches above the floor at each end. Measure the floor-to-string distance at 1-foot intervals.</li>
        </ul>

        <h2>Floor Leveling Methods Compared</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Method Comparison Table</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Method</th>
                <th className="text-left py-2">Cost/Sq Ft</th>
                <th className="text-left py-2">DIY?</th>
                <th className="text-left py-2">Best For</th>
                <th className="text-left py-2">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Self-leveling compound</td>
                <td className="py-2">$2–$5</td>
                <td className="py-2">Yes</td>
                <td className="py-2">Indoor floors, thin corrections (1/4&quot;–1.5&quot;)</td>
                <td className="py-2">Limited thickness, won&apos;t fix settlement</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Grinding</td>
                <td className="py-2">$1–$4</td>
                <td className="py-2">Yes (small)</td>
                <td className="py-2">High spots, bumps, minor unevenness</td>
                <td className="py-2">Only removes material, creates dust</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Mudjacking</td>
                <td className="py-2">$3–$6</td>
                <td className="py-2">No</td>
                <td className="py-2">Settled outdoor slabs, driveways</td>
                <td className="py-2">Heavy material, larger holes, may re-settle</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Foam jacking</td>
                <td className="py-2">$5–$25</td>
                <td className="py-2">No</td>
                <td className="py-2">Precision lifting, interior slabs, light weight</td>
                <td className="py-2">Expensive, requires specialized equipment</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Slab replacement</td>
                <td className="py-2">$8–$18</td>
                <td className="py-2">No</td>
                <td className="py-2">Severe damage, structural failure</td>
                <td className="py-2">Most expensive, longest timeline</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Method 1: Self-Leveling Compound ($2–$5/sq ft)</h2>

        <p>
          Self-leveling compound (SLC) is a cementitious or gypsum-based mixture that flows across a floor and finds its own level — like pouring thick pancake batter. It&apos;s the most popular method for correcting indoor floors before installing tile, hardwood, LVP, or carpet.
        </p>

        <h3>When to Use Self-Leveling Compound</h3>

        <ul>
          <li>Floor is uneven by 1/4 inch to 1.5 inches (most products&apos; working range)</li>
          <li>Interior floors only — not for outdoor use or areas exposed to moisture from below</li>
          <li>The slab is structurally sound but the surface is wavy, rough, or slightly tilted</li>
          <li>Preparing a floor for tile, hardwood, LVP, laminate, or sheet vinyl</li>
          <li>Leveling over existing tile, plywood, or concrete that you don&apos;t want to remove</li>
        </ul>

        <h3>Step-by-Step DIY Guide for Self-Leveling Compound</h3>

        <ol>
          <li>
            <strong>Prepare the surface:</strong> Sweep and vacuum the floor thoroughly. Remove any loose material, paint, adhesive residue, grease, or curing compounds. The compound needs a clean, porous surface to bond. Fill any cracks wider than 1/4 inch with concrete crack filler — SLC will flow into cracks and drain through to the subgrade.
          </li>
          <li>
            <strong>Seal the perimeter:</strong> Install foam backer rod or caulk around the room perimeter and at any floor drains, gaps, or penetrations. SLC is very fluid — it will find and flow through any opening. Seal expansion joints as well unless you plan to re-cut them after leveling.
          </li>
          <li>
            <strong>Apply primer:</strong> Apply the SLC manufacturer&apos;s recommended primer with a roller or broom. This is critical — primer controls absorption (prevents the dry concrete from stealing water from the SLC) and improves adhesion. Most primers need 2–4 hours to dry. Don&apos;t skip this step.
          </li>
          <li>
            <strong>Set depth gauges:</strong> Use tripod-style floor leveling pins (available at flooring supply stores for $20–$40) set to your target thickness across the floor. Or use masking tape marks on the walls. This ensures consistent thickness.
          </li>
          <li>
            <strong>Mix the compound:</strong> Follow the manufacturer&apos;s water ratio exactly — too much water weakens the compound, too little prevents proper flow. Use a drill with a mixing paddle at 400–600 RPM. Mix for 2–3 minutes until smooth and lump-free. You have about 15–20 minutes of working time before it starts to set.
          </li>
          <li>
            <strong>Pour and spread:</strong> Start in the far corner and work toward the exit. Pour the compound from the bucket and let it flow. Use a gauge rake to spread it to the desired thickness. Use a smoother (a wide pin tool) to pop air bubbles and help the compound settle.
          </li>
          <li>
            <strong>Let it cure:</strong> SLC is walkable in 2–6 hours and ready for flooring installation in 24–48 hours (check manufacturer specs). Keep the area closed to traffic during curing. Don&apos;t run fans — controlled curing prevents cracking.
          </li>
        </ol>

        <h3>DIY Cost Breakdown</h3>

        <ul>
          <li><strong>Self-leveling compound:</strong> $25–$45 per 50-lb bag. Each bag covers ~40–50 sq ft at 1/4-inch thickness. For a 200 sq ft room at 1/2-inch thickness: ~8–10 bags = $200–$450.</li>
          <li><strong>Primer:</strong> $25–$40 per gallon (covers 200–300 sq ft).</li>
          <li><strong>Tools:</strong> Mixing paddle ($15), gauge rake ($30–$60), smoother ($20–$40), 5-gallon buckets ($5 each × 4 = $20).</li>
          <li><strong>Total for 200 sq ft:</strong> $300–$600 DIY vs. $400–$1,000 with a contractor.</li>
        </ul>

        <h2>Method 2: Concrete Grinding ($1–$4/sq ft)</h2>

        <p>
          Grinding removes high spots by mechanically abrading the concrete surface with diamond tooling. It&apos;s the opposite of self-leveling compound — instead of adding material to fill low spots, you remove material from high spots.
        </p>

        <h3>When to Use Grinding</h3>

        <ul>
          <li>High spots, bumps, or ridges on an otherwise acceptable floor</li>
          <li>Lippage at control joints or saw cuts (one side higher than the other)</li>
          <li>Removing thin coatings, adhesive, or paint before new flooring</li>
          <li>Preparing a floor for epoxy, polishing, or a thin overlay</li>
          <li>Minor flatness corrections — grinding is not practical for large depressions</li>
        </ul>

        <h3>Equipment</h3>

        <ul>
          <li><strong>Handheld angle grinder with diamond cup wheel:</strong> $30–$80 for the cup wheel, grinder itself $40–$100. For small spots and edges.</li>
          <li><strong>Walk-behind floor grinder:</strong> $150–$300/day rental. For large areas. Available at most equipment rental centers.</li>
          <li><strong>Dust shroud and vacuum:</strong> HEPA vacuum ($200–$400) or rental. Required for OSHA silica compliance and for not destroying the room.</li>
        </ul>

        <p>
          For a complete guide to concrete grinding techniques and polishing, see our <Link href="/blog/concrete-grinding-guide" className="text-orange-600 hover:underline">concrete grinding guide</Link>.
        </p>

        <h2>Method 3: Mudjacking ($3–$6/sq ft)</h2>

        <p>
          Mudjacking (also called slab jacking or pressure grouting) lifts settled concrete by pumping a cement-sand-water slurry through small holes drilled in the slab. The slurry fills voids beneath the slab and hydraulically raises it back to the original level.
        </p>

        <ul>
          <li><strong>How it works:</strong> Drill 1–2 inch holes through the slab at strategic locations. Pump the slurry (a mixture of Portland cement, sand, water, and sometimes fly ash) under pressure. The slurry fills voids and lifts the slab. Patch the drill holes with concrete after the slurry sets.</li>
          <li><strong>Cost:</strong> $3–$6 per sq ft, or $500–$1,500 for a typical residential job (sidewalk section, patio, or small slab).</li>
          <li><strong>Lift capacity:</strong> Can raise slabs up to 4–6 inches, though 1–3 inches is typical.</li>
          <li><strong>Weight:</strong> Mudjacking material is heavy (~100–130 lbs/cu ft), which adds load to the subgrade. On weak soils, this added weight can cause re-settlement over time.</li>
          <li><strong>Curing time:</strong> 24–48 hours before the slab can be loaded.</li>
          <li><strong>Best for:</strong> Outdoor slabs (driveways, sidewalks, patios, pool decks, garage floors) where cosmetics are secondary to function. Budget-friendly alternative to replacement.</li>
          <li><strong>Limitations:</strong> Not suitable for interior floors where the large drill holes are unacceptable. Cannot lift severely broken slabs. Heavy material may cause re-settlement on weak soils.</li>
        </ul>

        <p>
          For more details on slab lifting methods, see our <Link href="/blog/concrete-raising-leveling-guide" className="text-orange-600 hover:underline">concrete raising and leveling guide</Link>.
        </p>

        <h2>Method 4: Polyurethane Foam Jacking ($5–$25/sq ft)</h2>

        <p>
          Foam jacking (also called poly lifting, foam leveling, or polyjacking) uses expanding polyurethane foam instead of cement slurry to fill voids and lift settled slabs. It&apos;s the premium option — more precise, faster, and lighter than mudjacking, but significantly more expensive.
        </p>

        <ul>
          <li><strong>How it works:</strong> Drill 5/8-inch holes (much smaller than mudjacking). Inject two-part polyurethane foam that expands 15–20× its liquid volume beneath the slab. The expanding foam fills voids and lifts the slab. Foam cures in 15 minutes — the slab can be loaded almost immediately.</li>
          <li><strong>Cost:</strong> $5–$25 per sq ft depending on the depth of voids and number of injection points. A typical residential job runs $1,000–$3,000.</li>
          <li><strong>Lift capacity:</strong> Can lift slabs up to 8+ inches with multiple injection stages.</li>
          <li><strong>Weight:</strong> Cured foam weighs only 2–4 lbs/cu ft — virtually no additional load on the subgrade. This makes it ideal for weak or unstable soils.</li>
          <li><strong>Precision:</strong> Foam expansion can be controlled to lift in 1/8-inch increments — much more precise than mudjacking.</li>
          <li><strong>Best for:</strong> Interior slabs (smaller holes are less visible), precision lifting, weak soil conditions, time-critical repairs (walkable in 15 minutes), and residential settings where aesthetics matter.</li>
          <li><strong>Limitations:</strong> Expensive. Requires specialized equipment and training — not a DIY method. The foam is permanent and cannot be adjusted after curing. Some environmental concerns about polyurethane in soil.</li>
        </ul>

        <h2>When to Hire a Professional</h2>

        <p>
          Not every floor leveling job is a DIY project. Hire a professional when:
        </p>

        <ul>
          <li><strong>The floor has settled more than 1 inch:</strong> Settlement indicates a subgrade problem that self-leveling compound can&apos;t fix. You need mudjacking or foam jacking to address the root cause.</li>
          <li><strong>Cracks are widening or multiplying:</strong> Active cracking suggests ongoing settlement or structural issues. A foundation engineer should evaluate the situation before any leveling work.</li>
          <li><strong>The slab is heaving (moving upward):</strong> Heave from frost, expansive soil, or tree roots is a structural issue — it will recur unless the cause is addressed. Grinding or leveling over heave is wasting money.</li>
          <li><strong>The area is larger than 500 sq ft:</strong> Self-leveling compound on large areas requires speed and experience — you have 15–20 minutes of working time, and a 500 sq ft pour takes a team of 2–3 people working fast.</li>
          <li><strong>You need an F-number specification:</strong> Meeting FF 35+ or FL 25+ requirements for commercial flooring or warehouse specifications requires professional equipment and experience.</li>
          <li><strong>There&apos;s moisture coming through the slab:</strong> Moisture issues (efflorescence, damp spots, standing water) must be resolved before any leveling. A moisture barrier or drainage system may be needed.</li>
        </ul>

        <h2>Cost Factors That Affect Your Project</h2>

        <ul>
          <li><strong>Floor condition:</strong> A floor that&apos;s slightly wavy (1/4-inch variation) costs far less to level than one with 2-inch depressions or active settlement.</li>
          <li><strong>Area size:</strong> Larger areas benefit from economies of scale — the per-square-foot cost drops because setup and mobilization are spread over more area.</li>
          <li><strong>Access:</strong> Basement floors, upper stories, and areas with limited equipment access cost more because of material handling challenges.</li>
          <li><strong>Existing flooring removal:</strong> If old tile, carpet, or adhesive must be removed before leveling, add $1–$3/sq ft.</li>
          <li><strong>Cause of unevenness:</strong> If the root cause (drainage, soil, roots) must be addressed, the total project cost includes that remediation.</li>
          <li><strong>Finish requirements:</strong> A garage floor that just needs to be &quot;close enough&quot; is cheaper than a commercial floor that must meet FF 50/FL 40 specifications.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">How much does it cost to level a concrete floor?</h4>
            <p className="text-gray-700 mt-1">Self-leveling compound: $2–$5/sq ft. Grinding: $1–$4/sq ft. Mudjacking: $3–$6/sq ft. Foam jacking: $5–$25/sq ft. For a 200 sq ft room, expect $200–$1,000 for DIY self-leveling or $400–$1,500 for professional work. Outdoor slab lifting (mudjacking) typically runs $500–$1,500 per slab section.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can I level a concrete floor myself?</h4>
            <p className="text-gray-700 mt-1">Yes — self-leveling compound and small-area grinding are both DIY-friendly. Self-leveling compound is the most common DIY method: clean the floor, apply primer, mix and pour the compound, and let it cure. Keep rooms under 200 sq ft for your first project — the 15–20 minute working time is challenging on larger areas. Mudjacking and foam jacking require specialized equipment and are not DIY.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">What causes a concrete floor to become uneven?</h4>
            <p className="text-gray-700 mt-1">The most common causes are: soil settlement beneath the slab (poor compaction), erosion or washout from water infiltration, frost heave in cold climates, tree root pressure, original finishing errors, and concrete shrinkage/curling. Settlement and poor compaction account for the majority of cases.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How flat does a concrete floor need to be for tile?</h4>
            <p className="text-gray-700 mt-1">Most tile manufacturers and the TCNA (Tile Council of North America) require a floor to be flat within 1/4 inch over 10 feet for tiles 15 inches or larger, and 1/4 inch over 10 feet for smaller tiles. In F-number terms, that&apos;s approximately FF 25+. Lippage (height difference between adjacent tiles) must not exceed 1/32 inch for most installations.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Is mudjacking or foam jacking better?</h4>
            <p className="text-gray-700 mt-1">Foam jacking is better for: interior work (smaller holes), precision lifting, weak soils (lightweight material), and fast turnaround (15-minute cure). Mudjacking is better for: budget-conscious projects (40–60% cheaper), outdoor slabs where cosmetics are less critical, and situations where the heavy material helps stabilize loose soil. Both methods have good track records.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How long does self-leveling compound take to dry?</h4>
            <p className="text-gray-700 mt-1">Walkable in 2–6 hours. Ready for most flooring installation in 24 hours (thin pours) to 48 hours (thicker pours). Full cure takes 28 days, but flooring can be installed much sooner. Check the specific product&apos;s data sheet — some fast-setting formulas allow tile installation in as little as 4 hours.</p>
          </div>
        </div>

        <h2>Related Resources</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Continue Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📖 <Link href="/blog/self-leveling-concrete-guide" className="text-orange-600 hover:underline font-medium">Self-Leveling Concrete Guide</Link> — In-depth guide to self-leveling products</li>
            <li>📖 <Link href="/blog/concrete-grinding-guide" className="text-orange-600 hover:underline font-medium">Concrete Grinding Guide</Link> — Grinding techniques, equipment, and costs</li>
            <li>📖 <Link href="/blog/concrete-raising-leveling-guide" className="text-orange-600 hover:underline font-medium">Concrete Raising &amp; Leveling Guide</Link> — Mudjacking and foam jacking details</li>
            <li>📖 <Link href="/blog/concrete-slab-cost-guide" className="text-orange-600 hover:underline font-medium">Concrete Slab Cost Guide</Link> — Full replacement pricing</li>
            <li>📖 <Link href="/blog/concrete-driveway-repair-guide" className="text-orange-600 hover:underline font-medium">Concrete Driveway Repair Guide</Link> — Fix settled and cracked driveways</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Floor Leveling Estimates?</h3>
          <p className="text-gray-300 mb-6">Our Pro Estimate Templates include floor leveling cost calculators, material quantity estimates, and method selection guides.</p>
          <Link href="/templates" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Pro Templates →
          </Link>
        </div>
      </article>
    </div>
  );
}
