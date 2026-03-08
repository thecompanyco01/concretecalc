import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Concrete Grinding: Complete Guide to Surface Prep, Costs & Equipment (2026)",
  description:
    "Everything you need to know about concrete grinding — when to grind vs replace, equipment options, costs per square foot, and step-by-step contractor tips for perfect results.",
  keywords:
    "concrete grinding, concrete grinder, grinding concrete floor, concrete surface preparation, concrete leveling, concrete floor grinding cost, diamond grinding concrete",
};

export default function ConcreteGrinding() {
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
          Concrete Grinding
        </span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Grinding: The Complete Guide for Contractors</h1>

        <p className="lead text-xl text-gray-600">
          Concrete grinding is one of the most versatile surface preparation
          techniques in the industry. Whether you&apos;re leveling a
          warehouse floor, prepping for an epoxy coating, removing trip
          hazards on sidewalks, or polishing a showroom, grinding is often
          the fastest and most cost-effective solution. This guide covers
          everything: when to grind, what equipment to use, how much it
          costs, and the step-by-step process for getting it right.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">📐 Estimating a Grinding Job?</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">
              Concrete Slab Calculator
            </Link>{" "}
            to calculate square footage and material quantities for any
            concrete project. Pair it with the cost data in this guide to
            build accurate bids.
          </p>
        </div>

        <h2 id="what-is">What Is Concrete Grinding?</h2>
        <p>
          Concrete grinding uses rotating diamond-segmented discs or cups to
          mechanically abrade the surface of a concrete slab. The diamonds
          cut into the concrete, removing a thin layer of the surface to
          achieve one or more goals:
        </p>
        <ul>
          <li><strong>Leveling:</strong> Removing high spots, lippage, and unevenness</li>
          <li><strong>Surface preparation:</strong> Creating a profile for coatings, overlays, or adhesives</li>
          <li><strong>Cleaning:</strong> Removing paint, glue, epoxy, thin-set, and other contaminants</li>
          <li><strong>Smoothing:</strong> Removing trowel marks, form lines, and rough textures</li>
          <li><strong>Polishing:</strong> Progressive grinding through finer grits to achieve a polished finish</li>
          <li><strong>Trip hazard removal:</strong> Grinding down raised joints on sidewalks and slabs</li>
        </ul>

        <h2 id="when-to-grind">When to Grind vs. When to Replace</h2>
        <p>
          Grinding isn&apos;t always the answer. Here&apos;s how to know
          when grinding makes sense and when you should recommend tear-out
          and replacement:
        </p>

        <h3>Grind When:</h3>
        <ul>
          <li>The slab is structurally sound but has surface issues (rough texture, lippage, coatings to remove)</li>
          <li>You need to level high spots up to 1/4 inch (some grinders can remove up to 1/2 inch in a pass)</li>
          <li>The surface needs a profile for a new coating, overlay, or flooring adhesive</li>
          <li>You&apos;re removing old paint, glue, thin-set, or epoxy</li>
          <li>Trip hazards at sidewalk joints need to be eliminated</li>
          <li>The client wants a polished concrete finish</li>
          <li>Budget doesn&apos;t allow for full replacement</li>
        </ul>

        <h3>Replace When:</h3>
        <ul>
          <li>The slab has structural cracks (wider than 1/4 inch or moving)</li>
          <li>Significant settlement or heaving — more than 1/2 inch of level change</li>
          <li>Spalling deeper than 1/2 inch across large areas</li>
          <li>The slab is below required thickness after grinding</li>
          <li>Extensive rebar corrosion or delamination</li>
          <li>Failed subgrade causing ongoing movement</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-blue-800 mb-2">💡 Contractor Tip</p>
          <p className="text-blue-700 text-sm">
            Always do a test grind on a small area before quoting the full
            job. Hard concrete (5,000+ PSI) eats through diamond segments
            slowly — you&apos;ll use less tooling but it takes longer. Soft
            concrete (under 3,000 PSI) grinds fast but chews through diamonds
            quickly. The test tells you which scenario you&apos;re dealing
            with and helps you price accurately.
          </p>
        </div>

        <h2 id="types">Types of Concrete Grinders</h2>

        <h3>Handheld Angle Grinders</h3>
        <p>
          A standard 4.5-7 inch angle grinder with a diamond cup wheel is the
          most accessible entry point into concrete grinding. Every concrete
          contractor already owns one.
        </p>
        <ul>
          <li><strong>Best for:</strong> Small areas (under 50 sq ft), edges, tight corners, trip hazard removal on individual joints</li>
          <li><strong>Removal rate:</strong> 10-30 sq ft per hour</li>
          <li><strong>Cost:</strong> $50-$150 for the grinder + $20-$60 for a diamond cup wheel</li>
          <li><strong>Pros:</strong> Cheap, portable, good for detail work</li>
          <li><strong>Cons:</strong> Slow, fatiguing, inconsistent depth, major dust</li>
        </ul>

        <h3>Walk-Behind Single-Head Grinders</h3>
        <p>
          A step up from handheld — these 10-inch machines are pushed across
          the floor and provide more consistent results. Popular for small
          commercial jobs and residential garage floors.
        </p>
        <ul>
          <li><strong>Best for:</strong> 50-500 sq ft jobs, garage floors, small retail spaces</li>
          <li><strong>Removal rate:</strong> 50-150 sq ft per hour</li>
          <li><strong>Rental cost:</strong> $150-$300 per day</li>
          <li><strong>Pros:</strong> More consistent than handheld, manageable size</li>
          <li><strong>Cons:</strong> Still relatively slow, limited on very hard concrete</li>
        </ul>

        <h3>Walk-Behind Planetary Grinders</h3>
        <p>
          The industry workhorse. Planetary grinders have 3-4 rotating heads
          on a counter-rotating plate, providing aggressive, even material
          removal. Available in 20-32 inch widths, these machines handle
          everything from surface prep to multi-step polishing.
        </p>
        <ul>
          <li><strong>Best for:</strong> 500+ sq ft commercial and industrial floors, polishing, heavy coatings removal</li>
          <li><strong>Removal rate:</strong> 200-800 sq ft per hour (depending on width and aggressiveness)</li>
          <li><strong>Rental cost:</strong> $500-$1,500 per day (or $2,000-$4,000/week)</li>
          <li><strong>Purchase cost:</strong> $8,000-$40,000+</li>
          <li><strong>Pros:</strong> Fast, consistent, can do everything from aggressive removal to fine polishing</li>
          <li><strong>Cons:</strong> Expensive, heavy (300-800 lbs), requires training</li>
        </ul>

        <h3>Ride-On Grinders</h3>
        <p>
          For massive commercial and industrial projects — warehouses,
          distribution centers, airport hangars — ride-on grinders cover
          30-48 inches per pass and let the operator work without physical
          fatigue.
        </p>
        <ul>
          <li><strong>Best for:</strong> 5,000+ sq ft industrial floors</li>
          <li><strong>Removal rate:</strong> 1,000-3,000+ sq ft per hour</li>
          <li><strong>Rental cost:</strong> $1,500-$3,000 per day</li>
          <li><strong>Purchase cost:</strong> $50,000-$150,000+</li>
          <li><strong>Pros:</strong> Massive production rate, operator comfort</li>
          <li><strong>Cons:</strong> Extremely expensive, requires trailer transport, overkill for small jobs</li>
        </ul>

        <h2 id="diamond-tooling">Diamond Tooling: The Key to Grinding Performance</h2>
        <p>
          The grinder is just the motor — the diamonds do the actual work.
          Choosing the right diamond segments is the difference between a
          profitable job and a money pit.
        </p>

        <h3>Bond Hardness</h3>
        <p>
          Diamond segments come in soft, medium, and hard bonds. The bond
          holds the diamonds in place and wears away to expose fresh
          cutting edges.
        </p>
        <ul>
          <li><strong>Soft bond:</strong> Use on hard concrete (5,000+ PSI). The bond wears quickly, keeping fresh diamonds exposed to cut the tough surface.</li>
          <li><strong>Medium bond:</strong> Use on standard concrete (3,000-4,500 PSI). The all-purpose choice.</li>
          <li><strong>Hard bond:</strong> Use on soft or green concrete (under 3,000 PSI). The hard bond resists wear so the diamonds last longer on the abrasive surface.</li>
        </ul>
        <p>
          <strong>The rule is counterintuitive:</strong> soft bond for hard
          concrete, hard bond for soft concrete. Get this backward and
          you&apos;ll either glaze the diamonds (hard bond on hard concrete —
          no cutting) or burn through segments in minutes (soft bond on soft
          concrete — all wear, no cutting).
        </p>

        <h3>Grit Progression</h3>
        <p>
          For polished concrete, you progress through increasingly fine grits:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Grit</th>
                <th className="text-left px-4 py-2 font-semibold">Purpose</th>
                <th className="text-left px-4 py-2 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">16-25</td>
                <td className="px-4 py-2">Aggressive removal</td>
                <td className="px-4 py-2">Coatings, glue, heavy lippage</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">30-40</td>
                <td className="px-4 py-2">Initial grind</td>
                <td className="px-4 py-2">Leveling, surface profile for coatings</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">60-80</td>
                <td className="px-4 py-2">Smoothing</td>
                <td className="px-4 py-2">Remove 30/40 grit scratches</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">100-150</td>
                <td className="px-4 py-2">Honing</td>
                <td className="px-4 py-2">Smooth matte finish</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">200-400</td>
                <td className="px-4 py-2">Fine honing</td>
                <td className="px-4 py-2">Low sheen, beginning of polish</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">800-1500</td>
                <td className="px-4 py-2">Polishing</td>
                <td className="px-4 py-2">High-gloss reflective finish</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3000</td>
                <td className="px-4 py-2">Burnishing</td>
                <td className="px-4 py-2">Mirror-like finish</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="costs">Concrete Grinding Costs (2026)</h2>
        <p>
          Pricing depends on the scope of work, condition of the floor,
          accessibility, and your local market. Here are typical ranges:
        </p>

        <h3>Cost Per Square Foot</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Service</th>
                <th className="text-left px-4 py-2 font-semibold">$/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Surface prep (for coatings)</td>
                <td className="px-4 py-2">$1-$3</td>
                <td className="px-4 py-2">Single pass, 30-40 grit</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Coating/glue removal</td>
                <td className="px-4 py-2">$2-$5</td>
                <td className="px-4 py-2">Depends on coating type and layers</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Leveling (lippage removal)</td>
                <td className="px-4 py-2">$2-$6</td>
                <td className="px-4 py-2">Multiple passes at aggressive grits</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Trip hazard grinding</td>
                <td className="px-4 py-2">$5-$15 per linear foot</td>
                <td className="px-4 py-2">Sidewalk joints, ADA compliance</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Polished concrete (basic)</td>
                <td className="px-4 py-2">$3-$7</td>
                <td className="px-4 py-2">3-4 steps, 200-400 grit finish</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Polished concrete (premium)</td>
                <td className="px-4 py-2">$7-$15</td>
                <td className="px-4 py-2">6-8 steps, 1500-3000 grit mirror finish</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Example Job Pricing</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Project</th>
                <th className="text-left px-4 py-2 font-semibold">Size</th>
                <th className="text-left px-4 py-2 font-semibold">Service</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Residential garage</td>
                <td className="px-4 py-2">400 sq ft</td>
                <td className="px-4 py-2">Prep for epoxy</td>
                <td className="px-4 py-2">$400-$1,200</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Retail store</td>
                <td className="px-4 py-2">2,000 sq ft</td>
                <td className="px-4 py-2">Polish (basic)</td>
                <td className="px-4 py-2">$6,000-$14,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Warehouse</td>
                <td className="px-4 py-2">10,000 sq ft</td>
                <td className="px-4 py-2">Leveling + coating prep</td>
                <td className="px-4 py-2">$20,000-$60,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Sidewalk trip hazards</td>
                <td className="px-4 py-2">200 LF</td>
                <td className="px-4 py-2">ADA compliance grinding</td>
                <td className="px-4 py-2">$1,000-$3,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="step-by-step">Step-by-Step Concrete Grinding Process</h2>

        <h3>1. Assess the Floor</h3>
        <p>
          Before grinding, inspect the entire floor:
        </p>
        <ul>
          <li>Check for cracks, spalling, and structural issues</li>
          <li>Test concrete hardness with a Mohs scratch test or rebound hammer</li>
          <li>Identify coatings, adhesives, or contaminants to be removed</li>
          <li>Measure lippage and high spots with a straightedge</li>
          <li>Look for embedded metal (rebar too close to surface, conduit)</li>
          <li>Check moisture levels with a calcium chloride or RH probe test</li>
        </ul>

        <h3>2. Prepare the Area</h3>
        <ul>
          <li>Remove all furniture, equipment, and loose items</li>
          <li>Seal off the area with plastic sheeting if dust control is critical</li>
          <li>Connect dust extraction — either a vacuum attachment on the grinder or a standalone industrial dust collector</li>
          <li>Mark any cracks to be repaired before grinding</li>
          <li>Fill large cracks and holes with epoxy or polyurea filler (grind flush after curing)</li>
        </ul>

        <h3>3. Select Your Tooling</h3>
        <p>
          Based on the floor assessment, choose:
        </p>
        <ul>
          <li><strong>Bond hardness:</strong> Match to concrete hardness (soft bond for hard concrete)</li>
          <li><strong>Starting grit:</strong> 16-25 for heavy removal, 30-40 for standard prep, 60-80 for light smoothing</li>
          <li><strong>Segment type:</strong> Arrow or wedge shapes for aggressive cutting; round or button shapes for smoothing</li>
        </ul>

        <h3>4. Grind in Systematic Passes</h3>
        <ul>
          <li>Work in overlapping parallel passes (overlap by 1-2 inches)</li>
          <li>Move at a consistent speed — too fast leaves scratches, too slow wastes time and tooling</li>
          <li>Grind edges and corners with a handheld grinder or edge-specific attachment</li>
          <li>Vacuum dust between passes</li>
          <li>For polishing: progress through each grit level, never skipping more than one step</li>
        </ul>

        <h3>5. Apply Densifier (For Polishing)</h3>
        <p>
          If you&apos;re polishing, apply a lithium silicate densifier after
          the 100-200 grit stage. The densifier penetrates the concrete and
          reacts with calcium hydroxide to create a harder, denser surface.
          This is what gives polished concrete its characteristic sheen and
          durability. Let it soak for 30-60 minutes, then continue with
          finer grits.
        </p>

        <h3>6. Final Steps</h3>
        <ul>
          <li>Inspect the surface under bright light at a low angle — this reveals scratches and inconsistencies</li>
          <li>Address any remaining high spots or scratch patterns</li>
          <li>Apply sealer, coating, or guard product as specified</li>
          <li>Allow proper cure time before foot or vehicle traffic</li>
        </ul>

        <h2 id="dust-control">Dust Control: OSHA Requirements</h2>
        <p>
          Concrete dust contains crystalline silica, which causes silicosis —
          a serious, incurable lung disease. OSHA&apos;s Table 1 regulations
          (29 CFR 1926.1153) require specific dust controls for concrete
          grinding:
        </p>
        <ul>
          <li><strong>Handheld grinders:</strong> Must use a shroud with vacuum or wet grinding methods</li>
          <li><strong>Walk-behind grinders:</strong> Must have integrated or attached vacuum dust collection</li>
          <li><strong>Exposure limit:</strong> 50 µg/m³ PEL (permissible exposure limit) over an 8-hour TWA</li>
          <li><strong>Action level:</strong> 25 µg/m³ — if exposure exceeds this, additional monitoring is required</li>
        </ul>
        <p>
          <strong>Bottom line:</strong> Never dry-grind without dust
          extraction. It&apos;s illegal, it&apos;s dangerous, and it&apos;s
          a liability nightmare. Quality HEPA dust extractors cost $500-$2,000
          and are essential equipment for any grinding contractor.
        </p>

        <h2 id="common-applications">Common Grinding Applications</h2>

        <h3>Garage Floor Prep for Epoxy</h3>
        <p>
          The most common residential grinding job. Homeowners want epoxy-
          coated garage floors, and the coating won&apos;t stick without
          proper surface preparation. Grinding with 30-40 grit diamonds
          creates the ideal CSP 2-3 profile for epoxy adhesion. Budget 2-4
          hours for a 2-car garage (400-600 sq ft).
        </p>

        <h3>Warehouse Floor Leveling</h3>
        <p>
          Warehouses with high-reach forklifts need flat floors — even small
          lippage causes racking instability and safety hazards. Grinding is
          faster and cheaper than self-leveling compounds for lippage under
          1/4 inch. For flatness specs (FF/FL numbers), a planetary grinder
          with a digital readout system is essential.
        </p>

        <h3>Trip Hazard Removal</h3>
        <p>
          Raised concrete joints on sidewalks create ADA compliance issues
          and liability for property owners. Grinding the transition smooth
          costs $5-$15 per linear foot — far less than tear-out and
          replacement at $15-$30 per linear foot. Many municipalities and
          property management companies contract this work in bulk.
        </p>

        <h3>Decorative Polished Floors</h3>
        <p>
          Polished concrete is one of the fastest-growing segments in
          commercial flooring. Retail stores, restaurants, offices, and
          showrooms are choosing polished concrete for its durability, low
          maintenance, and modern aesthetic. This is the highest-margin
          grinding work, but it requires significant investment in equipment
          and training.
        </p>

        <h2 id="business-tips">Building a Concrete Grinding Business</h2>
        <p>
          For contractors looking to add grinding services or specialize in
          surface preparation, here&apos;s practical business advice:
        </p>

        <h3>Equipment Investment</h3>
        <p>
          Start with a quality walk-behind planetary grinder ($10,000-$20,000),
          a HEPA dust extractor ($1,000-$2,000), and a set of diamond
          segments for different concrete types ($500-$1,500). Your initial
          investment is $12,000-$25,000 — which you can recoup in 3-5 jobs.
        </p>

        <h3>Pricing Strategy</h3>
        <p>
          Price by the square foot, not by the hour. Hourly pricing punishes
          you for being efficient. Know your cost per square foot (tooling
          wear + labor + equipment depreciation) and add your margin. For
          surface prep work, $2-$4/sq ft with 40-50% margins is typical. For
          polishing, $5-$12/sq ft with 50-60% margins.
        </p>

        <h3>Common Mistakes</h3>
        <ol>
          <li>
            <strong>Wrong bond hardness.</strong> This is mistake #1. Test
            grind before committing to tooling for the full job.
          </li>
          <li>
            <strong>Skipping grits.</strong> Jumping from 30 grit to 200 grit
            leaves deep scratches that show through the final finish. Follow
            the progression.
          </li>
          <li>
            <strong>Insufficient dust control.</strong> Besides health risks
            and OSHA fines, dust ruins nearby equipment and finishes, leading
            to customer complaints and callbacks.
          </li>
          <li>
            <strong>Not checking for moisture.</strong> High moisture vapor
            transmission rates cause coatings to delaminate. Test before
            grinding, not after.
          </li>
          <li>
            <strong>Underpricing.</strong> Diamond tooling is expensive and
            wears faster than you expect on the first few jobs. Track your
            actual tooling costs per square foot and adjust pricing
            accordingly.
          </li>
        </ol>

        <h2 id="grind-vs-alternatives">Grinding vs. Alternative Surface Prep Methods</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Method</th>
                <th className="text-left px-4 py-2 font-semibold">Best For</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Diamond grinding</td>
                <td className="px-4 py-2">Most applications</td>
                <td className="px-4 py-2">$1-$6</td>
                <td className="px-4 py-2">CSP 1-3</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Shot blasting</td>
                <td className="px-4 py-2">Large open floors, heavy coatings</td>
                <td className="px-4 py-2">$0.50-$3</td>
                <td className="px-4 py-2">CSP 3-8</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Scarifying</td>
                <td className="px-4 py-2">Heavy removal, thick coatings</td>
                <td className="px-4 py-2">$1-$4</td>
                <td className="px-4 py-2">CSP 4-9</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Acid etching</td>
                <td className="px-4 py-2">Light prep on new concrete</td>
                <td className="px-4 py-2">$0.25-$1</td>
                <td className="px-4 py-2">CSP 1-2</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Sandblasting</td>
                <td className="px-4 py-2">Exterior, vertical surfaces</td>
                <td className="px-4 py-2">$2-$6</td>
                <td className="px-4 py-2">CSP 2-5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Diamond grinding is the most versatile option — it works on every
          surface and produces a controllable, consistent profile. Shot
          blasting is faster for large open areas but leaves a rougher
          profile. Acid etching is cheap but unreliable and creates
          hazardous waste.
        </p>

        <h2 id="estimating">Estimating Concrete Grinding Jobs</h2>
        <p>
          Accurate estimating is the key to profitable grinding work.
          Here&apos;s a framework:
        </p>
        <ol>
          <li>
            <strong>Measure the area.</strong> Calculate total square footage
            including edges and corners. Our{" "}
            <Link href="/calculators/slab">Slab Calculator</Link> can help
            with area calculations.
          </li>
          <li>
            <strong>Assess the scope.</strong> What needs to be removed? How
            many passes/grits? What&apos;s the final spec?
          </li>
          <li>
            <strong>Estimate tooling cost.</strong> Diamond segments wear at
            predictable rates — typically $0.30-$1.00 per square foot depending
            on concrete hardness and grit.
          </li>
          <li>
            <strong>Calculate labor hours.</strong> Use your production rates
            (sq ft/hour) based on machine type and scope.
          </li>
          <li>
            <strong>Add equipment cost.</strong> Rental or depreciation, fuel,
            dust extractor filters, etc.
          </li>
          <li>
            <strong>Add overhead and profit.</strong> 15-20% overhead, 15-25%
            profit margin.
          </li>
        </ol>

        <p>
          Download our{" "}
          <Link href="/templates">Pro Estimate Template</Link> for a
          ready-made spreadsheet that handles these calculations automatically.
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Price Grinding Jobs Accurately
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template includes concrete grinding and surface
            prep pricing built in. Enter square footage, select the service
            type, and get a professional bid sheet ready for your customer.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How much does concrete grinding cost?</h3>
        <p>
          Concrete grinding costs $1-$6 per square foot for surface
          preparation and coating removal, and $3-$15 per square foot for
          polished concrete finishes. Trip hazard grinding on sidewalks
          runs $5-$15 per linear foot.
        </p>

        <h3>Can you grind concrete yourself?</h3>
        <p>
          Small areas (under 200 sq ft) can be ground with a rented walk-
          behind grinder. Rental cost is $150-$300/day plus diamond tooling.
          For polished finishes or large areas, hire a professional — the
          equipment investment and learning curve are significant.
        </p>

        <h3>How long does concrete grinding take?</h3>
        <p>
          A 400 sq ft garage floor takes 4-8 hours for basic surface prep
          (single pass). A polished finish on the same floor takes 2-3 days
          due to multiple grit passes. Large commercial projects at 10,000+
          sq ft typically take 1-2 weeks.
        </p>

        <h3>Does concrete grinding make a lot of dust?</h3>
        <p>
          Without dust control, yes — concrete grinding produces massive
          amounts of fine silica dust. With a proper HEPA dust extraction
          system attached to the grinder, dust is reduced by 95%+. OSHA
          requires dust control on all concrete grinding operations.
        </p>

        <h3>How smooth can you grind concrete?</h3>
        <p>
          With progressive diamond grinding through 3000 grit, you can
          achieve a mirror-like finish that reflects light clearly. Most
          commercial polished floors are finished to 800-1500 grit, which
          provides a high sheen without the maintenance needs of a mirror
          finish.
        </p>
      </article>
    </div>
  );
}
