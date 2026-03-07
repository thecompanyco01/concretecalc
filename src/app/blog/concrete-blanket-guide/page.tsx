import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Blankets: Curing & Cold Weather Protection Guide (2026)",
  description:
    "Complete guide to concrete blankets: insulated curing blankets ($50-150), heated blankets ($100-400), cold weather concreting (ACI 306), hydration heat retention, sizing, costs, and contractor best practices for 2026.",
  keywords:
    "concrete blanket, concrete curing blanket, heated concrete blanket, insulated concrete blanket, cold weather concrete, concrete curing cold weather, ACI 306 cold weather, concrete blanket rental, concrete thermal blanket",
};

export default function ConcreteBlanketGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Blanket Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Blankets: Curing &amp; Cold Weather Protection Guide (2026)</h1>

        <p className="lead text-xl text-gray-600">
          Concrete blankets are insulated covers that trap the heat of hydration in freshly poured concrete, maintaining the minimum curing temperatures needed for proper strength development — especially critical in cold weather. At <strong>$50–$200 per blanket</strong> (or $15–$50/day for rentals), they&apos;re the most cost-effective solution for cold weather concreting and proper curing year-round. This guide covers every blanket type, ACI 306 cold weather requirements, sizing, costs, and contractor best practices.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Cost Reference</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Basic poly-backed curing blanket:</strong> $50–$100 each (6×25 ft typical)</li>
            <li>• <strong>Insulated curing blanket (R-5 to R-8):</strong> $75–$150 each</li>
            <li>• <strong>Heavy-duty insulated blanket (R-10+):</strong> $120–$200 each</li>
            <li>• <strong>Electric heated concrete blanket:</strong> $200–$400 each (3×4 ft to 5×10 ft)</li>
            <li>• <strong>Blanket rental (insulated):</strong> $15–$30 per blanket per day</li>
            <li>• <strong>Heated blanket rental:</strong> $30–$50 per blanket per day</li>
            <li>• <strong>Typical slab coverage (1,000 sq ft):</strong> $300–$600 in blankets (purchase) or $75–$200/day (rental)</li>
          </ul>
        </div>

        <h2>What Are Concrete Blankets and Why Do They Matter?</h2>

        <p>
          When Portland cement reacts with water (hydration), it generates heat — significant heat. A typical concrete slab can reach internal temperatures of 120–150°F in the first 12–24 hours. This heat is actually beneficial: it accelerates strength gain, and the chemical reactions that produce strength require a minimum temperature to proceed.
        </p>

        <p>
          <strong>The problem:</strong> If that heat escapes too quickly — due to cold ambient temperatures, wind, or rain — the concrete surface cools below the critical threshold, hydration slows or stops, and the surface becomes weak, powdery, and prone to scaling. In freezing conditions, water in the concrete can freeze before it reacts with cement, causing permanent damage and up to 50% strength loss.
        </p>

        <p>
          <strong>The solution:</strong> Concrete blankets insulate the surface, trapping the heat of hydration inside the slab. They maintain concrete temperature above the critical minimum (typically 50°F/10°C) for the duration needed to develop adequate strength — usually 48–72 hours for most applications.
        </p>

        <p>
          But concrete blankets aren&apos;t just for cold weather. They also:
        </p>

        <ul>
          <li><strong>Prevent moisture loss:</strong> The blanket&apos;s poly backing retains moisture in the concrete, eliminating the need for water curing (misting, ponding) in many applications.</li>
          <li><strong>Reduce thermal cracking:</strong> By slowing the cooling rate, blankets minimize the temperature differential between the concrete surface and interior, reducing thermal stress cracks.</li>
          <li><strong>Speed up construction schedules:</strong> Warmer concrete = faster strength gain = earlier form stripping, backfilling, and loading. In cold weather, blankets can cut curing time by 30–50% compared to unprotected concrete.</li>
        </ul>

        <h2>Types of Concrete Blankets</h2>

        <h3>1. Poly-Backed Curing Blankets (Basic)</h3>

        <p>
          The most basic and affordable option. These blankets consist of a woven or non-woven fabric layer bonded to a polyethylene (poly) film backing. The fabric side faces the concrete, and the poly side faces out to shed rain and wind.
        </p>

        <ul>
          <li><strong>Insulation value:</strong> R-1 to R-3 (minimal thermal protection).</li>
          <li><strong>Size:</strong> Typically sold in rolls — 6 ft × 25 ft or 12 ft × 25 ft. Also available in 50 ft and 100 ft rolls.</li>
          <li><strong>Cost:</strong> $50–$100 per roll (6×25 ft = 150 sq ft). About $0.33–$0.67/sq ft.</li>
          <li><strong>Reusability:</strong> 1–3 uses for lighter weights, 5–10 uses for heavier grades.</li>
          <li><strong>Best for:</strong> Spring/fall curing when temperatures are above 40°F, moisture retention in warm weather, light frost protection overnight.</li>
          <li><strong>Not ideal for:</strong> Extended cold weather (below 30°F), high-wind sites, applications requiring R-5+ insulation.</li>
        </ul>

        <h3>2. Insulated Curing Blankets</h3>

        <p>
          These are the workhorses of cold weather concreting. They combine a closed-cell foam or fiberglass insulation core with poly film on both sides, providing real thermal protection.
        </p>

        <ul>
          <li><strong>Insulation value:</strong> R-5 to R-8 (standard) or R-10 to R-12 (heavy-duty/arctic grade).</li>
          <li><strong>Size:</strong> Common sizes: 6×25 ft, 12×20 ft, 12×24 ft. Custom sizes available for large pours.</li>
          <li><strong>Cost:</strong> $75–$150 each (R-5 to R-8) or $120–$200 each (R-10+). About $0.50–$1.00/sq ft.</li>
          <li><strong>Weight:</strong> 0.5–1.5 lbs/sq ft depending on insulation thickness. Heavy enough to resist moderate wind without additional weighting.</li>
          <li><strong>Reusability:</strong> 10–25+ uses with proper care. Higher-quality blankets have reinforced seams and heavy-duty poly that extends service life.</li>
          <li><strong>Best for:</strong> Cold weather concreting (20–40°F ambient), ACI 306 compliance, flatwork (slabs, sidewalks, driveways), foundation walls.</li>
        </ul>

        <p>
          <strong>Pro tip:</strong> Overlap blankets by at least 12 inches at seams and tape or weight the overlaps. Cold air infiltration through gaps is the #1 reason blankets fail to maintain temperature. On windy sites, use 2×4 lumber or sandbags along edges and seams.
        </p>

        <h3>3. Electric Heated Concrete Blankets</h3>

        <p>
          Heated blankets contain embedded electric heating elements that actively warm the concrete — not just retain its own heat. They&apos;re essential when ambient temperatures are so low that even insulation can&apos;t maintain the minimum curing temperature.
        </p>

        <ul>
          <li><strong>Temperature control:</strong> Most heated blankets maintain surface temperatures of 70–100°F regardless of ambient conditions. Many have built-in thermostats for precise temperature control.</li>
          <li><strong>Power requirements:</strong> 5–10 watts per sq ft. A 3×10 ft blanket draws 150–300 watts. A 1,000 sq ft slab requires 5,000–10,000 watts — a dedicated 240V circuit or generator.</li>
          <li><strong>Size:</strong> Smaller than insulated blankets — typically 3×4 ft, 3×10 ft, 4×8 ft, or 5×10 ft. You tile them across the slab surface.</li>
          <li><strong>Cost:</strong> $200–$400 each (purchase). $30–$50/day rental per blanket.</li>
          <li><strong>Best for:</strong> Extreme cold (below 20°F), ground thawing before pours, emergency cold snaps, small to medium pours in severe winter conditions.</li>
          <li><strong>Top products:</strong> Powerblanket Concrete Curing Blanket ($250–$400), CureMAX Heated Blanket ($200–$350), Kuhlmann Heated Concrete Blanket ($300–$400).</li>
        </ul>

        <h3>4. Hydronic Heated Blankets</h3>

        <p>
          These blankets use heated glycol fluid circulated through embedded tubing. They&apos;re used on large commercial pours where electric blankets would be impractical due to power requirements.
        </p>

        <ul>
          <li><strong>Coverage:</strong> Large-format blankets — up to 50×50 ft sections connected to a central boiler unit.</li>
          <li><strong>Cost:</strong> Typically rented as a complete system — $500–$2,000/day including boiler, hoses, and blankets.</li>
          <li><strong>Best for:</strong> Large commercial pours (5,000+ sq ft), bridge decks, parking structures, any project large enough to justify the equipment mobilization cost.</li>
        </ul>

        <h2>Cold Weather Concreting: ACI 306 Requirements</h2>

        <p>
          <strong>ACI 306R (Guide to Cold Weather Concreting)</strong> defines cold weather concreting as any period when the air temperature has been or is expected to fall below 40°F (4°C) during the protection period. Here are the critical requirements:
        </p>

        <h3>Temperature Requirements</h3>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">ACI 306 Temperature Guidelines</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Requirement</th>
                <th className="text-left py-2">Temperature</th>
                <th className="text-left py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Min concrete temp at placement</td>
                <td className="py-2">50–65°F</td>
                <td className="py-2">Higher for thin sections (&lt;12&quot;)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Min concrete temp during curing</td>
                <td className="py-2">50°F (10°C)</td>
                <td className="py-2">Measured at surface for 48–72 hrs</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Max temp drop after protection removal</td>
                <td className="py-2">40°F in 24 hrs</td>
                <td className="py-2">Gradual cooling prevents thermal shock</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Concrete must not freeze</td>
                <td className="py-2">Until 500 PSI</td>
                <td className="py-2">Typically 24–48 hours after placement</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Min compressive strength before exposure to freeze-thaw</td>
                <td className="py-2">3,500 PSI</td>
                <td className="py-2">Typically 3–7 days with protection</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Based on ACI 306R-16. Always verify specific requirements with the project engineer and local building codes.
          </p>
        </div>

        <h3>Protection Period Duration</h3>

        <p>
          How long do you need to keep concrete blankets in place? It depends on the ambient temperature and the service conditions:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Protection Periods</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Service Condition</th>
                <th className="text-left py-2">30–40°F Ambient</th>
                <th className="text-left py-2">20–30°F Ambient</th>
                <th className="text-left py-2">Below 20°F</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">No freeze-thaw exposure, no load</td>
                <td className="py-2">2 days</td>
                <td className="py-2">3 days</td>
                <td className="py-2">4 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Exposed to freeze-thaw, no load</td>
                <td className="py-2">3 days</td>
                <td className="py-2">4 days</td>
                <td className="py-2">5 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Structural loading required</td>
                <td className="py-2">4 days</td>
                <td className="py-2">5 days</td>
                <td className="py-2">7 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Critical structures (post-tensioned, thin sections)</td>
                <td className="py-2">5 days</td>
                <td className="py-2">7 days</td>
                <td className="py-2">10+ days</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Using Type I cement with no accelerators. Type III (high early) cement and accelerators can reduce these times by 30–50%.
          </p>
        </div>

        <h3>How Concrete Blankets Maintain Temperature</h3>

        <p>
          The physics is straightforward: concrete generates its own heat through hydration (the exothermic reaction of cement and water). A typical 4-inch slab generates enough heat to maintain an internal temperature of 100–130°F for the first 12–24 hours — even in cold weather. The blanket&apos;s job is to prevent that heat from escaping.
        </p>

        <ul>
          <li><strong>R-5 blanket:</strong> In 30°F ambient air, maintains concrete surface temperature above 50°F for 48–72 hours on a 4&quot; slab. Adequate for most residential and light commercial work.</li>
          <li><strong>R-8 blanket:</strong> In 20°F ambient air, maintains 50°F+ for 48–72 hours. Recommended for moderate cold weather and thinner sections.</li>
          <li><strong>R-12 blanket:</strong> In 0–10°F ambient air, maintains 50°F+ for 48–72 hours. Arctic-grade protection for severe winter conditions.</li>
          <li><strong>Heated blanket:</strong> Maintains 70–100°F surface temperature regardless of ambient conditions. Required when ambient temperatures drop below 0°F or when insulated blankets can&apos;t maintain the minimum.</li>
        </ul>

        <p>
          <strong>Key variable:</strong> Thinner concrete sections (sidewalks, curbs, thin overlays) lose heat faster than thick sections (footings, mass pours). A 4-inch sidewalk in 20°F weather may need R-10+ insulation or heated blankets, while a 2-foot-thick footing might only need R-5.
        </p>

        <h2>Sizing and Coverage</h2>

        <h3>How Many Blankets Do You Need?</h3>

        <ol>
          <li><strong>Measure the pour area</strong> in square feet (length × width for slabs, perimeter × height for walls).</li>
          <li><strong>Add 2 feet</strong> on all sides for overhang — blankets must extend past the concrete edges to prevent cold air from sneaking under.</li>
          <li><strong>Account for overlap:</strong> Blankets must overlap at least 12 inches at seams. Factor this into your coverage calculation.</li>
          <li><strong>Divide by blanket coverage area</strong> (e.g., a 6×25 ft blanket covers 150 sq ft gross, but ~120 sq ft net after overlaps).</li>
        </ol>

        <p>
          <strong>Example:</strong> A 30×40 ft slab (1,200 sq ft) plus 2 ft overhang on all sides = 34×44 ft (1,496 sq ft) to cover. Using 12×24 ft blankets (288 sq ft gross, ~230 sq ft net): 1,496 ÷ 230 = 6.5 → order 7 blankets.
        </p>

        <h2>Concrete Blanket Cost Analysis</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Buy vs. Rent Comparison</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Scenario</th>
                <th className="text-left py-2">Buy Cost</th>
                <th className="text-left py-2">Rental (3 days)</th>
                <th className="text-left py-2">Break-Even</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Basic poly-backed (10 blankets)</td>
                <td className="py-2">$500–$1,000</td>
                <td className="py-2">$150–$300/use</td>
                <td className="py-2">3–5 uses</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Insulated R-5 (10 blankets)</td>
                <td className="py-2">$750–$1,500</td>
                <td className="py-2">$200–$450/use</td>
                <td className="py-2">3–4 uses</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Insulated R-10 (10 blankets)</td>
                <td className="py-2">$1,200–$2,000</td>
                <td className="py-2">$300–$600/use</td>
                <td className="py-2">3–4 uses</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Electric heated (10 blankets)</td>
                <td className="py-2">$2,000–$4,000</td>
                <td className="py-2">$300–$500/use</td>
                <td className="py-2">5–8 uses</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Break-even assumes 3-day rental periods. Contractors doing 5+ cold weather pours per season should buy. Occasional users should rent.
          </p>
        </div>

        <h3>Cost Comparison: Blankets vs. Alternatives</h3>

        <ul>
          <li><strong>Concrete blankets:</strong> $0.30–$1.00/sq ft per pour (amortized purchase) or $0.15–$0.50/sq ft per rental period.</li>
          <li><strong>Heated enclosures (tent + heater):</strong> $1.50–$5.00/sq ft per pour. Required labor: 2–4 hours to set up and dismantle. Fuel cost: $50–$200/day for propane heaters. Best for vertical work (walls, columns) where blankets can&apos;t be draped effectively.</li>
          <li><strong>Chemical accelerators (calcium chloride, non-chloride):</strong> $0.05–$0.15/sq ft. Accelerates initial set but does NOT replace cold weather protection — concrete still needs insulation after placement. Often used in combination with blankets.</li>
          <li><strong>Hot water in the mix:</strong> $0.02–$0.05/sq ft. Raises initial concrete temperature 10–20°F. Standard practice for cold weather — most ready-mix plants heat their water automatically in winter. Used WITH blankets, not instead of.</li>
          <li><strong>Type III (high-early) cement:</strong> $5–$10/yard premium over Type I. Reaches 50% of design strength in 24 hours vs. 3–5 days for Type I. Reduces protection period but doesn&apos;t eliminate the need for blankets.</li>
        </ul>

        <h2>Reusable vs. Disposable Blankets</h2>

        <h3>Reusable Blankets</h3>

        <ul>
          <li><strong>Construction:</strong> Heavy-duty woven poly shell with closed-cell foam insulation. Reinforced grommets for tie-downs. Double-stitched seams.</li>
          <li><strong>Lifespan:</strong> 15–25+ uses with proper care (folding, dry storage, patching small tears).</li>
          <li><strong>Cost per use (amortized):</strong> $5–$15 per blanket per use over its lifetime.</li>
          <li><strong>Best for:</strong> Contractors who do 5+ cold weather pours per season. The upfront investment pays for itself within the first season.</li>
          <li><strong>Care tips:</strong> Fold (don&apos;t stuff) when storing. Store in a dry location off the ground. Repair tears with poly tape immediately — a small tear becomes a big tear quickly. Label blankets by R-value and size for easy selection on jobsites.</li>
        </ul>

        <h3>Disposable Blankets</h3>

        <ul>
          <li><strong>Construction:</strong> Lightweight nonwoven fabric with thin poly film. No grommets. Staple or tape to forms.</li>
          <li><strong>Lifespan:</strong> 1–3 uses maximum.</li>
          <li><strong>Cost per use:</strong> $30–$75 per blanket (essentially the purchase price).</li>
          <li><strong>Best for:</strong> Homeowners doing a one-time pour, contractors who don&apos;t want to store/transport blankets, remote jobsites where returning rental blankets is impractical.</li>
        </ul>

        <h2>Contractor Best Practices</h2>

        <h3>Pre-Pour Planning</h3>

        <ol>
          <li><strong>Check the 5-day forecast:</strong> Plan blanket needs based on the lowest expected temperature during the protection period — not just placement day.</li>
          <li><strong>Order blankets in advance:</strong> Rental companies run out during cold snaps. Have blankets on-site before you pour, not after.</li>
          <li><strong>Stage blankets near the pour:</strong> Unroll blankets beside the pour area so they can be deployed immediately after finishing. Every minute of unprotected exposure in cold weather matters.</li>
          <li><strong>Assign a blanket crew:</strong> Designate 2–3 workers specifically for blanket deployment. While finishers work the surface, the blanket crew follows behind, covering completed sections.</li>
        </ol>

        <h3>During Curing</h3>

        <ol>
          <li><strong>Deploy blankets immediately after finishing:</strong> Don&apos;t wait. The concrete surface starts cooling the moment it&apos;s exposed. In 20°F weather, the surface can drop below 40°F within 30–60 minutes if unprotected.</li>
          <li><strong>Overlap all seams by 12&quot; minimum:</strong> Tape or weight seams with 2×4s or sandbags. Cold air infiltration through gaps is the primary failure mode.</li>
          <li><strong>Extend blankets 24&quot; beyond slab edges:</strong> The edges and corners of a slab lose heat fastest. Extra overhang protects these critical zones.</li>
          <li><strong>Monitor concrete temperature:</strong> Place temperature sensors (maturity meters or simple min/max thermometers) under the blankets at the slab edge (coldest point) and center. Log temperatures every 4–6 hours. If the edge drops below 50°F, add more blankets or switch to heated blankets.</li>
          <li><strong>Don&apos;t lift blankets to check the surface:</strong> Every time you lift a blanket, you release accumulated heat. If you must inspect, lift one small section quickly and recover immediately. Better yet, use temperature monitoring to assess curing progress without lifting.</li>
        </ol>

        <h3>Blanket Removal</h3>

        <ol>
          <li><strong>Gradual removal:</strong> Don&apos;t strip all blankets at once. Remove blankets gradually over 24–48 hours to prevent thermal shock — the concrete surface cooling too quickly can cause surface cracking. ACI 306 limits the temperature drop to 40°F in 24 hours.</li>
          <li><strong>Remove during the warmest part of the day:</strong> Late morning to early afternoon gives the concrete maximum exposure to ambient warmth before overnight cooling.</li>
          <li><strong>Verify strength:</strong> Ideally, test compressive strength with maturity meters or field-cured cylinders before removing protection. The concrete should have reached at least 500 PSI before any freeze exposure and 3,500 PSI before freeze-thaw cycling exposure.</li>
        </ol>

        <h2>When Blankets Aren&apos;t Enough: Alternative Cold Weather Methods</h2>

        <ul>
          <li><strong>Heated enclosures:</strong> Build a temporary structure (tarps on scaffolding, poly sheeting on wood framing) around the concrete and heat with propane salamanders or forced-air heaters. Used for: vertical pours (columns, walls), extreme cold (below 0°F), large commercial projects. Cost: $1.50–$5.00/sq ft plus $100–$400/day in fuel. <strong>Critical safety note:</strong> Unvented propane heaters produce CO2 and moisture — both harmful to fresh concrete. Use vented heaters or forced-air units that exhaust outside the enclosure.</li>
          <li><strong>Ground heaters:</strong> Large diesel-powered units that blow hot air under insulated blankets or through flexible ducts. Used for: ground thawing before pours and very large slabs. Cost: $200–$500/day rental.</li>
          <li><strong>Chemical accelerators:</strong> Added to the concrete mix to speed up the hydration reaction. Calcium chloride (most common, $5–$8/100 lbs) or non-chloride accelerators ($15–$25/gal for reinforced concrete). These help concrete gain strength faster but DO NOT protect against freezing — blankets or enclosures are still needed.</li>
          <li><strong>Hot water and heated aggregates:</strong> Ready-mix plants routinely heat mix water to 140–180°F in winter. This raises the concrete temperature at delivery to 60–70°F, giving blankets a head start. Some plants also heat aggregates in cold storage.</li>
        </ul>

        <p>
          For more on curing and drying, see our <Link href="/blog/how-long-does-concrete-take-to-dry" className="text-orange-600 hover:underline">concrete drying time guide</Link>.
        </p>

        <h2>Concrete Blankets for Specific Applications</h2>

        <h3>Flatwork (Slabs, Driveways, Sidewalks)</h3>

        <p>
          Flatwork is the easiest application for concrete blankets — just lay them flat on the finished surface. Use insulated blankets (R-5 minimum) and ensure full coverage with overlaps. For driveways and sidewalks, extend blankets 24&quot; beyond the edges and weight with lumber.
        </p>

        <h3>Foundations and Footings</h3>

        <p>
          Foundation walls and footings require blankets draped over the forms or stripped forms. For footings in trenches, cover the top with blankets and insulate the exposed soil edges. Mass concrete footings (24&quot;+ thick) generate significant heat and may only need light insulation, but the top surface still needs protection.
        </p>

        <h3>Vertical Surfaces (Walls, Columns)</h3>

        <p>
          Blankets don&apos;t drape well on vertical surfaces — they tend to slide. Options: secure with straps/bungees around forms, use blankets with grommets and tie-wire, or switch to heated enclosures for tall walls. Insulated form liners are another option — they stay in place during form stripping.
        </p>

        <h3>Concrete Repairs and Patches</h3>

        <p>
          Small repairs (patches, spall repairs) in cold weather can use a single blanket or even a heated blanket pad. Cut the blanket to size, extend 12&quot; beyond the patch edges, and tape down. For more on repairs, see our <Link href="/blog/concrete-mix-ratio-guide" className="text-orange-600 hover:underline">concrete mix ratio guide</Link> for cold weather mix adjustments.
        </p>

        <h2>Frequently Asked Questions</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">How long should you leave concrete blankets on?</h4>
            <p className="text-gray-700 mt-1">Minimum 48 hours for most applications, 72 hours in temperatures below 30°F, and up to 7 days for structural elements or extreme cold (below 20°F). The concrete must reach at least 500 PSI before any freeze exposure. When in doubt, leave blankets on longer — there&apos;s no downside to extended protection, but removing too early can cause permanent damage.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">At what temperature do you need concrete blankets?</h4>
            <p className="text-gray-700 mt-1">ACI 306 defines cold weather concreting as any time the air temperature is below 40°F (4°C) or is expected to drop below 40°F during the protection period. In practice, most contractors start using blankets when the low temperature forecast drops below 40°F. At 50–60°F, blankets help with moisture retention and faster curing but aren&apos;t strictly required for temperature protection.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can you pour concrete in below-freezing temperatures?</h4>
            <p className="text-gray-700 mt-1">Yes, but only with proper cold weather protection. The concrete must be delivered at 50–65°F (heated water/aggregates at the plant), placed and finished quickly, and covered with insulated or heated blankets immediately. The concrete must not freeze before reaching 500 PSI (typically 24–48 hours). Many contractors successfully pour in single-digit temperatures with proper planning and heated blankets.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How much do concrete blankets cost?</h4>
            <p className="text-gray-700 mt-1">Basic poly-backed blankets: $50–$100 each. Insulated curing blankets (R-5 to R-8): $75–$150 each. Heavy-duty insulated (R-10+): $120–$200 each. Electric heated blankets: $200–$400 each. Rental is available at $15–$50/day per blanket depending on type. For a typical 1,000 sq ft slab, budget $300–$600 in blankets (purchase) or $75–$200/day (rental).</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can I reuse concrete blankets?</h4>
            <p className="text-gray-700 mt-1">Yes — quality insulated blankets last 15–25+ uses with proper care. Fold them (don&apos;t ball up) after each use, store dry, and repair any tears with poly tape immediately. Basic poly-backed blankets last 1–3 uses. Heated blankets last 50+ uses since the heating elements are enclosed in durable housings. Buying blankets pays for itself in 3–5 uses vs. renting.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">What R-value blanket do I need?</h4>
            <p className="text-gray-700 mt-1">R-5 handles temperatures down to about 25–30°F for a 4&quot; slab. R-8 handles 15–25°F. R-10+ handles below 15°F. For thinner sections (2–3&quot; overlays), add one R-value tier — they lose heat faster. When in doubt, go one tier higher than you think you need. Over-insulating is cheap insurance; under-insulating risks the entire pour.</p>
          </div>
        </div>

        <h2>Related Resources</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Continue Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📖 <Link href="/blog/how-long-does-concrete-take-to-dry" className="text-orange-600 hover:underline font-medium">How Long Does Concrete Take to Dry?</Link> — Drying and curing times explained</li>
            <li>📖 <Link href="/blog/concrete-mix-ratio-guide" className="text-orange-600 hover:underline font-medium">Concrete Mix Ratio Guide</Link> — Mix designs for cold weather and special applications</li>
            <li>📖 <Link href="/blog/concrete-slab-cost-guide" className="text-orange-600 hover:underline font-medium">Concrete Slab Cost Guide</Link> — Complete slab pricing breakdown</li>
            <li>📖 <Link href="/blog/how-to-bid-concrete-jobs" className="text-orange-600 hover:underline font-medium">How to Bid Concrete Jobs</Link> — Include cold weather costs in your bids</li>
            <li>📖 <Link href="/blog/how-to-start-concrete-business" className="text-orange-600 hover:underline font-medium">Starting a Concrete Business</Link> — Year-round operations planning</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Cold Weather Concreting Estimates?</h3>
          <p className="text-gray-300 mb-6">Our Pro Estimate Templates include cold weather protection costs, blanket quantity calculators, and ACI 306 compliance checklists.</p>
          <Link href="/templates" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Pro Templates →
          </Link>
        </div>
      </article>
    </div>
  );
}
