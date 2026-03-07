import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Curing Time: How Long Before You Can Walk, Drive, or Build On It (2026)",
  description:
    "How long does concrete take to cure? Complete curing timeline for walking, driving, and building. Covers temperature effects, curing compounds, accelerators, and contractor tips.",
  keywords:
    "concrete curing time, how long does concrete take to cure, concrete drying time, when can you walk on concrete, when can you drive on concrete, concrete cure time, concrete curing process",
};

export default function ConcreteCuringTimeGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Curing Time Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Curing Time: How Long Before You Can Walk, Drive, or Build On It</h1>

        <p className="lead text-xl text-gray-600">
          &quot;When can I walk on it?&quot; — every homeowner asks, and every contractor needs to answer accurately. Concrete doesn&apos;t just &quot;dry&quot; — it <strong>cures</strong> through a chemical reaction called hydration that continues for weeks. Getting the curing timeline right is the difference between a slab that lasts 50 years and one that cracks in 5. Here&apos;s the complete curing timeline with real numbers, temperature adjustments, and pro tips.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Planning a Concrete Project?</p>
          <p className="text-orange-700 text-sm mb-3">
            Use our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">Concrete Slab Calculator</Link>{" "}
            to figure out exactly how much concrete you need before you pour. Or check the{" "}
            <Link href="/calculators/driveway" className="underline font-semibold">Driveway Calculator</Link>{" "}
            for driveway-specific volume and cost estimates.
          </p>
        </div>

        <h2 id="curing-vs-drying">Curing vs. Drying: They&apos;re Not the Same Thing</h2>
        <p>
          This is the most misunderstood concept in concrete work. <strong>Drying</strong> is water evaporating from the surface. <strong>Curing</strong> is the chemical reaction between cement and water (hydration) that gives concrete its strength. In fact, concrete needs to <em>stay wet</em> to cure properly — premature drying is one of the biggest causes of weak, cracked concrete.
        </p>
        <ul>
          <li><strong>Drying:</strong> Surface moisture evaporates. Happens in hours. Makes the surface feel dry.</li>
          <li><strong>Curing:</strong> Cement particles hydrate and form calcium silicate hydrate (CSH) crystals. Takes 28+ days. Gives the concrete its strength.</li>
        </ul>
        <p>
          Concrete that &quot;dries&quot; too fast on the surface while still hydrating underneath develops shrinkage cracks, a weak surface layer, and reduced durability. That&apos;s why curing methods (wet curing, curing compounds, plastic sheeting) exist — to keep moisture <em>in</em> the concrete while it gains strength.
        </p>

        <h2 id="curing-timeline">The Complete Concrete Curing Timeline</h2>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Time After Pour</th>
                <th className="text-left px-4 py-2 font-semibold">% of Full Strength</th>
                <th className="text-left px-4 py-2 font-semibold">What&apos;s Happening</th>
                <th className="text-left px-4 py-2 font-semibold">What&apos;s Safe</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">0–2 hours</td>
                <td className="px-4 py-2">0%</td>
                <td className="px-4 py-2">Plastic state — finishing, floating, troweling</td>
                <td className="px-4 py-2">Nothing — still workable</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">2–6 hours</td>
                <td className="px-4 py-2">~5%</td>
                <td className="px-4 py-2">Initial set — stiffening, no longer workable</td>
                <td className="px-4 py-2">Nothing — leave it alone</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">24 hours</td>
                <td className="px-4 py-2">~20%</td>
                <td className="px-4 py-2">Final set — hard but still weak</td>
                <td className="px-4 py-2">Light foot traffic, remove forms (carefully)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">48 hours</td>
                <td className="px-4 py-2">~30%</td>
                <td className="px-4 py-2">Gaining strength rapidly</td>
                <td className="px-4 py-2">Normal foot traffic</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">3 days</td>
                <td className="px-4 py-2">~40%</td>
                <td className="px-4 py-2">Surface hardening well</td>
                <td className="px-4 py-2">Light loads, pets</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">7 days</td>
                <td className="px-4 py-2">~65–70%</td>
                <td className="px-4 py-2">Significant strength gained</td>
                <td className="px-4 py-2">Passenger vehicles, light equipment</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">14 days</td>
                <td className="px-4 py-2">~85–90%</td>
                <td className="px-4 py-2">Most hydration complete</td>
                <td className="px-4 py-2">Normal vehicle traffic, RVs</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">28 days</td>
                <td className="px-4 py-2">~99%</td>
                <td className="px-4 py-2">Design strength reached</td>
                <td className="px-4 py-2">Heavy loads, construction equipment, full use</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">90+ days</td>
                <td className="px-4 py-2">100%+</td>
                <td className="px-4 py-2">Slow continued hydration</td>
                <td className="px-4 py-2">Concrete continues gaining slight strength for years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Important note:</strong> These timelines assume standard conditions — 70°F air temperature, 4,000 PSI mix, 4-inch slab, moderate humidity. Temperature, mix design, and curing method all shift these numbers significantly.
        </p>

        <h2 id="activity-timeline">When Can You... (Specific Activity Timeline)</h2>

        <h3>Walk on New Concrete</h3>
        <p>
          <strong>24 hours minimum</strong> — and that means light foot traffic only (no furniture moving, no wheelbarrows). At 24 hours, concrete has about 20% of its design strength. Walking generates minimal force (~25 PSI under a shoe), which even partially cured concrete can handle. However, the surface is still soft enough to scuff or scratch, especially with hard-soled boots.
        </p>
        <p>
          <strong>48 hours</strong> is safer for regular foot traffic. By this point, the surface has hardened enough to resist scuffing and light abrasion.
        </p>

        <h3>Drive on New Concrete</h3>
        <p>
          <strong>7 days minimum for passenger vehicles</strong> (cars, light trucks under 6,000 lbs). A standard sedan applies about 30 PSI through its tires, which is manageable at 65–70% strength. But tire turning (like backing out of a driveway) concentrates enormous shear force on the surface — this is why you should avoid sharp turns for at least 10 days.
        </p>
        <p>
          <strong>14 days for heavier vehicles</strong> (pickup trucks, SUVs, delivery trucks). <strong>28 days for heavy equipment</strong> (concrete trucks, dump trucks, RVs, dumpsters). Putting heavy loads on too-young concrete causes invisible micro-fractures that show up as cracking months or years later.
        </p>

        <h3>Build on New Concrete (Structural Loading)</h3>
        <p>
          <strong>28 days absolute minimum.</strong> No exceptions. Foundations, footings, and structural slabs must reach their full design strength before accepting building loads. Most building codes require 28-day compressive strength tests before structural work proceeds on commercial projects.
        </p>
        <p>
          For residential projects without formal testing, the 28-day rule is still critical. Setting a manufactured home, building a deck on post footings, or stacking block on a foundation wall before 28 days risks settlement, cracking, and structural failure.
        </p>

        <h3>Seal New Concrete</h3>
        <p>
          <strong>28 days for most sealers.</strong> The concrete must be fully cured and have released most of its internal moisture before topical sealers are applied. Exception: cure-and-seal compounds, which are designed to be applied to fresh concrete within 2–4 hours of finishing. See our <Link href="/blog/concrete-sealer-application-guide">concrete sealer application guide</Link> for detailed instructions.
        </p>

        <h2 id="temperature-effects">How Temperature Affects Curing Time</h2>
        <p>
          Temperature is the single biggest factor affecting how fast concrete gains strength. The hydration reaction is temperature-dependent — heat speeds it up, cold slows it down. Dramatically.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Temperature</th>
                <th className="text-left px-4 py-2 font-semibold">Time to 70% Strength</th>
                <th className="text-left px-4 py-2 font-semibold">Time to Full Cure</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">90°F+ (32°C+)</td>
                <td className="px-4 py-2">4–5 days</td>
                <td className="px-4 py-2">21–25 days</td>
                <td className="px-4 py-2">Fast set, higher risk of cracking. May need retarder.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">70°F (21°C)</td>
                <td className="px-4 py-2">7 days</td>
                <td className="px-4 py-2">28 days</td>
                <td className="px-4 py-2">Ideal conditions — standard reference point.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">50°F (10°C)</td>
                <td className="px-4 py-2">14 days</td>
                <td className="px-4 py-2">45–50 days</td>
                <td className="px-4 py-2">Significantly slower. Extend all timelines by 50–100%.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">40°F (4°C)</td>
                <td className="px-4 py-2">21+ days</td>
                <td className="px-4 py-2">60+ days</td>
                <td className="px-4 py-2">Very slow. Insulated blankets recommended.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">32°F (0°C)</td>
                <td className="px-4 py-2">Nearly stops</td>
                <td className="px-4 py-2">Indefinite</td>
                <td className="px-4 py-2">Hydration virtually halts. Ice formation damages fresh concrete.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Hot Weather Concrete Tips</h3>
        <ul>
          <li><strong>Pour early morning</strong> — before 10 AM when possible. Concrete that sets during the hottest part of the day cures too fast on the surface, causing plastic shrinkage cracks.</li>
          <li><strong>Use retarder admixtures</strong> to slow the set time and give your crew more working time.</li>
          <li><strong>Wet the subgrade</strong> before pouring to prevent the ground from sucking moisture out of the concrete.</li>
          <li><strong>Start curing immediately.</strong> Apply curing compound or wet burlap as soon as finishing is complete. Every minute of exposure in hot, dry conditions removes moisture the concrete needs.</li>
          <li><strong>Don&apos;t add water to the mix.</strong> It&apos;s tempting when the concrete gets stiff, but adding water on-site weakens the concrete by raising the water-cement ratio.</li>
        </ul>

        <h3>Cold Weather Concrete Tips</h3>
        <ul>
          <li><strong>Never pour on frozen ground.</strong> The frozen subgrade will thaw and settle, cracking the slab above it. Thaw the ground with insulated blankets first.</li>
          <li><strong>Use accelerator admixtures</strong> (calcium chloride or non-chloride alternatives) to speed up set time in cold conditions.</li>
          <li><strong>Order hot water in the mix.</strong> Ready-mix plants can heat the mix water to 140°F+, which raises the concrete temperature at delivery to 65–70°F.</li>
          <li><strong>Insulated blankets are mandatory</strong> for any pour below 40°F. Cover the concrete immediately after finishing and keep blankets in place for at least 3–7 days.</li>
          <li><strong>Heated enclosures</strong> for critical pours — build a temporary tent with propane heaters. Maintain 50°F+ air temperature for the first 72 hours minimum.</li>
          <li><strong>Extend all timelines by 2×</strong> for cold weather pours. What takes 7 days at 70°F takes 14+ days at 50°F.</li>
        </ul>

        <h2 id="curing-methods">Curing Methods: How to Keep Concrete Hydrated</h2>
        <p>
          Proper curing is non-negotiable. Concrete that isn&apos;t cured properly can lose up to 50% of its potential strength. Here are the most common curing methods, ranked by effectiveness:
        </p>

        <h3>1. Wet Curing (Most Effective)</h3>
        <p>
          Keep the surface continuously wet for 7 days using sprinklers, soaker hoses, wet burlap, or cotton mats. This is the gold standard — it provides unlimited water for hydration and produces the strongest concrete. Used almost exclusively on commercial projects and bridge decks.
        </p>
        <p>
          <strong>Downside:</strong> Labor-intensive. Someone has to keep rewetting the surface. Not practical for most residential work.
        </p>

        <h3>2. Curing Compounds (Most Common)</h3>
        <p>
          Spray-on liquid membranes that seal in moisture. Applied immediately after finishing with a pump sprayer at 150–200 sq ft per gallon. Types include:
        </p>
        <ul>
          <li><strong>White-pigmented:</strong> Reflects sunlight, reduces surface temperature. Best for hot weather. Dissipates or is ground off later.</li>
          <li><strong>Clear/transparent:</strong> Invisible when dry. Used when aesthetics matter (decorative, colored concrete).</li>
          <li><strong>Dissipating resin:</strong> Breaks down naturally in 28 days. Good when you plan to seal or coat the surface later.</li>
        </ul>
        <p>
          <strong>Cost:</strong> $15–$35 per gallon. One gallon covers about 150–200 sq ft. For a 600 sq ft driveway, that&apos;s $45–$105 in material.
        </p>

        <h3>3. Plastic Sheeting</h3>
        <p>
          Cover the concrete with 4-mil polyethylene sheeting immediately after finishing. Trap the moisture inside. Weight the edges with lumber or sand.
        </p>
        <p>
          <strong>Warning:</strong> Plastic sheeting can cause discoloration (mottling) on the surface where it wrinkles and contacts the concrete unevenly. Fine for hidden slabs and footings — unacceptable for decorative or exposed surfaces.
        </p>

        <h3>4. Insulated Blankets</h3>
        <p>
          Combination moisture retention and temperature protection. Essential for cold weather pours. Concrete-specific curing blankets have a foam core sandwiched between polyethylene sheets. Place immediately after finishing.
        </p>

        <h2 id="strength-by-mix">Curing Time by PSI / Mix Design</h2>
        <p>
          Not all concrete cures at the same rate. Higher-strength mixes use more cement and may include admixtures that affect set time:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Mix (PSI)</th>
                <th className="text-left px-4 py-2 font-semibold">1-Day Strength</th>
                <th className="text-left px-4 py-2 font-semibold">7-Day Strength</th>
                <th className="text-left px-4 py-2 font-semibold">28-Day Strength</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">3,000 PSI</td>
                <td className="px-4 py-2">~600 PSI</td>
                <td className="px-4 py-2">~2,000 PSI</td>
                <td className="px-4 py-2">3,000+ PSI</td>
                <td className="px-4 py-2">Sidewalks, patios</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">4,000 PSI</td>
                <td className="px-4 py-2">~800 PSI</td>
                <td className="px-4 py-2">~2,800 PSI</td>
                <td className="px-4 py-2">4,000+ PSI</td>
                <td className="px-4 py-2">Driveways, garage floors</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">5,000 PSI</td>
                <td className="px-4 py-2">~1,000 PSI</td>
                <td className="px-4 py-2">~3,500 PSI</td>
                <td className="px-4 py-2">5,000+ PSI</td>
                <td className="px-4 py-2">Foundations, commercial</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">High-early (Type III)</td>
                <td className="px-4 py-2">~2,000 PSI</td>
                <td className="px-4 py-2">~3,500 PSI</td>
                <td className="px-4 py-2">4,000+ PSI</td>
                <td className="px-4 py-2">Fast-track projects, cold weather</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>High-early cement (Type III)</strong> is a game-changer for contractors working in cold weather or on tight schedules. It gains strength 2× faster than standard Type I cement in the first 7 days. The tradeoff: it costs 10–15% more and requires more attention to curing because the accelerated hydration generates more heat.
        </p>

        <h2 id="thickness-matters">How Slab Thickness Affects Curing</h2>
        <p>
          Thicker slabs take longer to cure through their full depth:
        </p>
        <ul>
          <li><strong>4-inch slab:</strong> Standard residential thickness. Cures through its full depth within the standard 28-day timeline.</li>
          <li><strong>6-inch slab:</strong> Common for driveways and garage floors. Internal moisture takes longer to escape — add 1–2 weeks for full moisture dissipation.</li>
          <li><strong>8+ inch slab:</strong> Commercial and structural. Mass concrete effects (heat buildup from hydration) become a concern. May need temperature monitoring to prevent thermal cracking.</li>
          <li><strong>Footings and foundations (12–24+ inches):</strong> Internal temperatures can reach 150°F+ during hydration. Thermal management (cooling pipes, insulated forms) may be required for large pours.</li>
        </ul>

        <h2 id="accelerators">Accelerators and Admixtures: Speeding Up the Cure</h2>
        <p>
          Sometimes you need concrete to gain strength faster — cold weather, tight schedules, or fast-track construction. Here are the options:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Accelerator</th>
                <th className="text-left px-4 py-2 font-semibold">Speed Gain</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/Yard</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Calcium chloride (2%)</td>
                <td className="px-4 py-2">30–50% faster</td>
                <td className="px-4 py-2">$5–$10</td>
                <td className="px-4 py-2">Most common. Do NOT use with rebar or metal embedments — causes corrosion.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Non-chloride accelerator</td>
                <td className="px-4 py-2">20–40% faster</td>
                <td className="px-4 py-2">$10–$20</td>
                <td className="px-4 py-2">Safe for reinforced concrete. Required for post-tension slabs.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Type III (high-early) cement</td>
                <td className="px-4 py-2">2× at 1–3 days</td>
                <td className="px-4 py-2">$10–$25 premium</td>
                <td className="px-4 py-2">Finer-ground cement. More heat generation during cure.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Heated mix water</td>
                <td className="px-4 py-2">Varies</td>
                <td className="px-4 py-2">$5–$15</td>
                <td className="px-4 py-2">Raises delivery temp. Standard for cold weather.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Contractor tip:</strong> When bidding winter jobs, factor in the cost of accelerators, blankets, and extended curing protection. A cold weather pour typically adds $2–$5 per square foot to the overall cost. Pass this through to the client — don&apos;t eat it.
        </p>

        <h2 id="signs-of-poor-curing">Signs of Poor Curing (and What Went Wrong)</h2>
        <ul>
          <li><strong>Surface dusting:</strong> Powdery, chalky surface that generates dust when swept. Cause: surface dried too fast, not enough moisture for proper hydration of the surface layer.</li>
          <li><strong>Plastic shrinkage cracks:</strong> Fine, shallow cracks that appear within hours of pouring, often in a map pattern. Cause: rapid surface evaporation from hot sun, wind, or low humidity.</li>
          <li><strong>Crazing:</strong> Network of very fine surface cracks (like dried mud). Cause: over-finishing with water on the surface, rapid surface drying.</li>
          <li><strong>Scaling/spalling:</strong> Surface layer flakes off, especially after the first winter. Cause: insufficient curing combined with freeze-thaw exposure and/or deicing salts.</li>
          <li><strong>Low compressive strength:</strong> Concrete fails the 28-day break test. Cause: insufficient curing, excess water in the mix, or cold temperatures during early cure.</li>
        </ul>

        <h2 id="contractor-checklist">Contractor Curing Checklist</h2>
        <p>Use this checklist on every pour to ensure proper curing:</p>
        <ol>
          <li>✅ Check weather forecast — no rain, freezing, or extreme heat in the next 48 hours</li>
          <li>✅ Have curing materials on-site BEFORE the pour (curing compound, blankets, or plastic)</li>
          <li>✅ Apply curing method immediately after final finishing — within 30 minutes max</li>
          <li>✅ In hot weather: set up windbreaks and sun shades for large pours</li>
          <li>✅ In cold weather: have blankets and possibly heaters ready</li>
          <li>✅ Maintain curing for minimum 7 days (14+ days in cold weather)</li>
          <li>✅ Inform the client of the load timeline: 24h walk, 7d drive, 28d heavy loads</li>
          <li>✅ Document conditions (temp, humidity, method) in project file for warranty protection</li>
        </ol>

        <h2 id="faq">Frequently Asked Questions</h2>

        <h3>How long does it take concrete to dry completely?</h3>
        <p>
          Concrete never fully &quot;dries&quot; in the way most people think. It reaches functional dryness for flooring installation (measured by relative humidity testing) in about <strong>30–90 days</strong> depending on thickness and conditions. A common rule of thumb is 30 days per inch of thickness for moisture to escape. A 4-inch slab might take 120 days to reach the 75% RH level required for most flooring adhesives. The concrete itself remains slightly moist internally for years.
        </p>

        <h3>Does concrete harden faster in heat or cold?</h3>
        <p>
          <strong>Heat.</strong> The hydration reaction is temperature-dependent. At 90°F, concrete reaches 70% strength in 4–5 days. At 50°F, the same milestone takes 14+ days. However, heat also increases the risk of thermal cracking and premature drying, so it&apos;s not automatically better — just faster.
        </p>

        <h3>Can you pour concrete in the rain?</h3>
        <p>
          Light rain after finishing is not ideal but often manageable with plastic sheeting. <strong>Heavy rain during the pour or finishing is a serious problem</strong> — rainwater mixes into the surface, raises the water-cement ratio, and creates a weak, pitted surface. If heavy rain is imminent, either delay the pour or have plastic sheeting and enough crew to cover quickly.
        </p>

        <h3>How long before you can put furniture on new concrete?</h3>
        <p>
          <strong>48–72 hours</strong> for lightweight furniture (chairs, small tables). <strong>7 days</strong> for heavier items (grills, planters). Use protective pads under furniture legs to prevent scratching the still-curing surface.
        </p>

        <h3>When can you apply deicing salt to new concrete?</h3>
        <p>
          <strong>Never in the first winter.</strong> New concrete is especially vulnerable to salt damage. Wait at least one full year, and ideally apply a penetrating sealer before any salt exposure. Use sand for traction instead of salt during the first winter season. See our <Link href="/blog/concrete-sealer-application-guide">sealer guide</Link> for protection options.
        </p>

        <h3>Does watering concrete help it cure?</h3>
        <p>
          <strong>Yes.</strong> Keeping concrete moist (wet curing) is the most effective curing method. Spraying water on the surface 2–3 times daily for the first 7 days dramatically improves strength and durability. Just don&apos;t spray so hard that you erode the fresh surface — use a gentle mist or soaker hose.
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Plan Your Next Pour Like a Pro</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template includes curing materials in the material takeoff, so you never forget to budget for curing compound, blankets, or accelerators. Build accurate bids every time.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="calculators">Calculate Your Concrete Project</h2>
        <p>
          Planning a pour? Get exact quantities and cost estimates with our free calculators:
        </p>
        <ul>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — Patios, garage floors, and general slabs</li>
          <li><Link href="/calculators/driveway">Driveway Calculator</Link> — Driveway volume, cost, and thickness recommendations</li>
        </ul>
        <p>
          For pricing details, see our <Link href="/blog/concrete-cost-per-yard">Concrete Cost Per Yard Guide</Link>. For finishing techniques that pair with proper curing, check our <Link href="/blog/concrete-finishing-complete-guide">Concrete Finishing Guide</Link>.
        </p>
      </article>
    </div>
  );
}
