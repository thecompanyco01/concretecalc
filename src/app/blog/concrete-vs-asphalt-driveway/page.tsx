import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete vs Asphalt Driveway: Full Cost Comparison & 30-Year TCO (2026) | ConcreteCalc",
  description: "Concrete vs asphalt driveway: complete comparison with real pricing data, 30-year total cost of ownership, climate recommendations, ROI analysis, and pros/cons for every homeowner.",
  keywords: "concrete vs asphalt driveway, concrete driveway vs asphalt, asphalt vs concrete cost, concrete vs asphalt driveway cost, driveway cost comparison",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete vs Asphalt Driveway</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete vs Asphalt Driveway: The Complete Cost & Performance Comparison (2026)</h1>
        <p className="lead text-lg text-slate-600">
          A concrete driveway costs $6–$12 per square foot installed ($3,600–$7,200 for a standard 2-car driveway) and lasts 30–50 years. An asphalt driveway costs $3–$6 per square foot ($1,800–$3,600) but lasts only 15–20 years and requires sealcoating every 2–5 years. Over 30 years, concrete is typically cheaper — and adds more to your home's resale value.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Planning a driveway?</strong> Use our <Link href="/calculators/driveway" className="text-blue-700 underline">free driveway calculator</Link> to get precise material and cost estimates for both concrete and asphalt options.
          </p>
        </div>

        <p>
          According to our analysis of Google search results, "concrete vs asphalt driveway" gets 4,400 searches per month with a CPC of $2.68 — indicating high commercial intent. The current top result is a Reddit forum post with anecdotal opinions. Below that, Angi and a few regional contractors offer partial comparisons. None provide a true 30-year total cost of ownership analysis, climate-specific recommendations, or real ROI data. This guide covers all of it.
        </p>

        <h2>Quick Side-by-Side Comparison</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Factor</th>
                <th className="p-3 text-center">Concrete</th>
                <th className="p-3 text-center">Asphalt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Install Cost (per sq ft)</td>
                <td className="p-3 text-center">$6–$12</td>
                <td className="p-3 text-center">$3–$6</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">2-Car Driveway (600 sq ft)</td>
                <td className="p-3 text-center">$3,600–$7,200</td>
                <td className="p-3 text-center">$1,800–$3,600</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Lifespan</td>
                <td className="p-3 text-center">30–50 years</td>
                <td className="p-3 text-center">15–20 years</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Annual Maintenance</td>
                <td className="p-3 text-center">$0–$50</td>
                <td className="p-3 text-center">$100–$300</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Sealcoating</td>
                <td className="p-3 text-center">Optional (every 5–10 years)</td>
                <td className="p-3 text-center">Required (every 2–5 years)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Resale Value Added</td>
                <td className="p-3 text-center">$5,000–$10,000</td>
                <td className="p-3 text-center">$2,000–$5,000</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Time to Use After Install</td>
                <td className="p-3 text-center">7 days (full cure: 28 days)</td>
                <td className="p-3 text-center">1–3 days</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Design Options</td>
                <td className="p-3 text-center">Stamped, colored, exposed aggregate</td>
                <td className="p-3 text-center">Black only</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Crack Repair</td>
                <td className="p-3 text-center">Difficult, visible patches</td>
                <td className="p-3 text-center">Easy, blends in</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Heat Absorption</td>
                <td className="p-3 text-center">Stays up to 10°F cooler</td>
                <td className="p-3 text-center">Gets very hot in summer</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Snow/Ice</td>
                <td className="p-3 text-center">Salt can cause damage</td>
                <td className="p-3 text-center">Dark color melts ice faster</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Oil Stain Resistance</td>
                <td className="p-3 text-center">Stains easily (unless sealed)</td>
                <td className="p-3 text-center">Hides stains (dark color)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Environmental Impact</td>
                <td className="p-3 text-center">Higher CO₂ in production</td>
                <td className="p-3 text-center">Made from petroleum byproducts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>30-Year Total Cost of Ownership (TCO) Analysis</h2>
        <p>
          This is where the real comparison happens. Upfront cost is only part of the story. Based on current market data for a standard 600 sq ft two-car driveway, here's what you'll actually spend over 30 years:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Cost Category</th>
                <th className="p-3 text-center">Concrete</th>
                <th className="p-3 text-center">Asphalt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Initial Installation</td>
                <td className="p-3 text-center">$5,400</td>
                <td className="p-3 text-center">$2,700</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Sealcoating (over 30 years)</td>
                <td className="p-3 text-center">$600 (3 applications)</td>
                <td className="p-3 text-center">$4,200 (10 applications @ $420)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Crack/Patch Repairs</td>
                <td className="p-3 text-center">$500</td>
                <td className="p-3 text-center">$1,500</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Replacement (Asphalt @ Year 18)</td>
                <td className="p-3 text-center">$0</td>
                <td className="p-3 text-center">$3,500 (adjusted for inflation)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Second Replacement (Asphalt)</td>
                <td className="p-3 text-center">$0</td>
                <td className="p-3 text-center">$0 (not needed in 30-yr window)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-amber-50 font-bold">
                <td className="p-3">30-Year Total</td>
                <td className="p-3 text-center text-green-700">$6,500</td>
                <td className="p-3 text-center text-red-700">$11,900</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Cost per Year</td>
                <td className="p-3 text-center text-green-700">$217/year</td>
                <td className="p-3 text-center">$397/year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Over 30 years, concrete saves approximately $5,400</strong> compared to asphalt — which means the higher upfront cost pays for itself by year 8–10. The savings come from near-zero maintenance, no required sealcoating, and no mid-life replacement.
        </p>

        <h2>How Much Does a 20×20 Asphalt Driveway Cost?</h2>
        <p>
          A 20×20 asphalt driveway (400 sq ft) costs <strong>$1,200–$2,400</strong> installed in 2026. This includes:
        </p>
        <ul>
          <li>Excavation and grading: $200–$500</li>
          <li>Gravel base (6–8"): $300–$600</li>
          <li>Asphalt material and labor: $700–$1,300</li>
        </ul>
        <p>
          Keep in mind: most asphalt contractors have a minimum job size of $1,500–$2,000, so a small 20×20 pad may cost more per square foot than a full driveway. Get at least 3 quotes.
        </p>

        <h2>How Much Would a 20×20 Concrete Driveway Cost?</h2>
        <p>
          A 20×20 concrete driveway (400 sq ft) costs <strong>$2,400–$4,800</strong> installed, depending on your region and finish:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Finish Type</th>
                <th className="p-3 text-center">Cost per Sq Ft</th>
                <th className="p-3 text-center">20×20 Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Plain (broom finish)</td>
                <td className="p-3 text-center">$6–$8</td>
                <td className="p-3 text-center">$2,400–$3,200</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Stamped</td>
                <td className="p-3 text-center">$10–$16</td>
                <td className="p-3 text-center">$4,000–$6,400</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Exposed aggregate</td>
                <td className="p-3 text-center">$8–$14</td>
                <td className="p-3 text-center">$3,200–$5,600</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Colored/stained</td>
                <td className="p-3 text-center">$8–$12</td>
                <td className="p-3 text-center">$3,200–$4,800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Use our <Link href="/calculators/driveway" className="text-blue-700 underline">driveway cost calculator</Link> for a precise estimate based on your dimensions and preferred finish.
        </p>

        <h2>Is It Cheaper to Lay Concrete or Asphalt?</h2>
        <p>
          <strong>Upfront, asphalt is 40–60% cheaper.</strong> A basic asphalt driveway runs $3–$6/sq ft vs. $6–$12/sq ft for concrete. But this comparison is misleading because:
        </p>
        <ul>
          <li>Asphalt requires sealcoating every 2–5 years ($0.70–$1.00/sq ft per application)</li>
          <li>Asphalt lasts 15–20 years vs. concrete's 30–50 years</li>
          <li>You'll likely need to replace an asphalt driveway at least once in the time a concrete driveway is still going strong</li>
          <li>Concrete adds more to your home's resale value</li>
        </ul>
        <p>
          <strong>Bottom line:</strong> If you plan to stay in your home for 10+ years, concrete is cheaper over time. If you're selling within 5 years or have a tight budget, asphalt gets you a functional driveway for less upfront cash.
        </p>

        <h2>What Makes a Better Driveway: Concrete or Asphalt?</h2>
        <p>"Better" depends on your climate, budget, and priorities. Here's our recommendation matrix:</p>

        <h3>Choose Concrete If:</h3>
        <ul>
          <li>You live in a hot climate (Southwest, Southeast, Southern California) — asphalt softens in extreme heat and can show tire marks</li>
          <li>You plan to stay in your home 10+ years — the TCO math heavily favors concrete</li>
          <li>You want design options — stamped, colored, exposed aggregate, or decorative borders</li>
          <li>You care about curb appeal and resale value</li>
          <li>You want low maintenance — occasional sealing is optional, not required</li>
        </ul>

        <h3>Choose Asphalt If:</h3>
        <ul>
          <li>You live in a cold, snowy climate (Minnesota, Michigan, Northeast) — asphalt flexes with freeze-thaw cycles better than concrete, and its dark color helps melt snow</li>
          <li>Budget is your primary concern — 40–60% less upfront</li>
          <li>You need the driveway usable quickly — asphalt is drivable in 1–3 days vs. 7 for concrete</li>
          <li>You're comfortable with regular maintenance — sealcoating every 2–5 years</li>
          <li>You're selling the house within 5 years</li>
        </ul>

        <h2>Climate-Specific Recommendations</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Region</th>
                <th className="p-3 text-center">Recommendation</th>
                <th className="p-3 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Northeast (NY, NJ, PA, New England)</td>
                <td className="p-3 text-center font-bold">Asphalt (slight edge)</td>
                <td className="p-3">Freeze-thaw flexibility, salt tolerance, cheaper with heavy winter use. Concrete works with proper air-entrainment.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Midwest (MN, WI, MI, OH, IL)</td>
                <td className="p-3 text-center font-bold">Either</td>
                <td className="p-3">Both work well. Asphalt edges out in heavy-freeze zones. Concrete wins on longevity.</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Southeast (FL, GA, SC, NC)</td>
                <td className="p-3 text-center font-bold">Concrete</td>
                <td className="p-3">Heat softens asphalt. Concrete stays 10°F cooler. Longer lifespan in warm climate.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Southwest (AZ, NM, TX, NV)</td>
                <td className="p-3 text-center font-bold">Concrete</td>
                <td className="p-3">Extreme heat destroys asphalt. Concrete handles 110°F+ without softening.</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Pacific Northwest (WA, OR)</td>
                <td className="p-3 text-center font-bold">Concrete</td>
                <td className="p-3">Mild temps, lots of rain. Concrete drains better when properly sloped. No freeze-thaw advantage for asphalt.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Mountain West (CO, UT, MT)</td>
                <td className="p-3 text-center font-bold">Asphalt (slight edge)</td>
                <td className="p-3">Severe freeze-thaw, elevation extremes. Asphalt's flexibility helps. Air-entrained concrete also works.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Resale Value & ROI Comparison</h2>
        <p>
          Based on current market data, driveway material significantly impacts home value:
        </p>
        <ul>
          <li><strong>Concrete driveway ROI:</strong> 60–80% of installation cost recovered at resale. A $6,000 concrete driveway adds $3,600–$4,800 to home value.</li>
          <li><strong>Asphalt driveway ROI:</strong> 50–70% of installation cost. A $3,000 asphalt driveway adds $1,500–$2,100 to home value.</li>
          <li><strong>Stamped/decorative concrete ROI:</strong> 50–65% — the higher cost means a lower percentage return, but higher absolute dollars ($4,500–$6,000 added value on a $9,000 install).</li>
        </ul>
        <p>
          According to our analysis of Google search results, "asphalt vs concrete driveway resale value" is a common related search — and the data consistently favors concrete. Real estate agents report that concrete driveways are listed as a selling feature, while asphalt driveways are not.
        </p>

        <h2>Concrete Driveway Pros & Cons</h2>
        <h3>Pros</h3>
        <ul>
          <li>Lasts 30–50 years with minimal maintenance</li>
          <li>Dozens of design and color options</li>
          <li>Increases home value more than asphalt</li>
          <li>Stays cooler in hot weather (up to 10°F less than asphalt)</li>
          <li>No required sealcoating</li>
          <li>Stronger load-bearing capacity (better for heavy vehicles)</li>
        </ul>
        <h3>Cons</h3>
        <ul>
          <li>40–60% higher upfront cost</li>
          <li>7-day cure time before use (28 days for full strength)</li>
          <li>Cracks are harder to repair and more visible</li>
          <li>De-icing salts can cause surface spalling</li>
          <li>Stains easily from oil, rust, and organic matter</li>
          <li>Requires control joints (planned seams) to prevent random cracking</li>
        </ul>

        <h2>Asphalt Driveway Pros & Cons</h2>
        <h3>Pros</h3>
        <ul>
          <li>40–60% cheaper upfront</li>
          <li>Usable within 1–3 days</li>
          <li>Flexes with freeze-thaw cycles (fewer cracks in cold climates)</li>
          <li>Easy and cheap to repair — hot patch blends in</li>
          <li>Dark color melts snow and ice faster</li>
          <li>Can be resurfaced rather than fully replaced</li>
        </ul>
        <h3>Cons</h3>
        <ul>
          <li>Only lasts 15–20 years</li>
          <li>Requires sealcoating every 2–5 years ($420+ each time for a 600 sq ft driveway)</li>
          <li>Softens in extreme heat (90°F+) — tire marks, scuffing, divots possible</li>
          <li>No design options — always black</li>
          <li>Petroleum-based — affected by oil price fluctuations</li>
          <li>Edges crumble without proper support</li>
        </ul>

        <h2>Installation Process Comparison</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Step</th>
                <th className="p-3 text-center">Concrete</th>
                <th className="p-3 text-center">Asphalt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Excavation</td>
                <td className="p-3 text-center">8–12 inches</td>
                <td className="p-3 text-center">8–12 inches</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Base Material</td>
                <td className="p-3 text-center">4–6" compacted gravel</td>
                <td className="p-3 text-center">6–8" compacted gravel</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Material Thickness</td>
                <td className="p-3 text-center">4–6 inches</td>
                <td className="p-3 text-center">2–3 inches (2 lifts)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Reinforcement</td>
                <td className="p-3 text-center">Wire mesh or rebar</td>
                <td className="p-3 text-center">None</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Install Time</td>
                <td className="p-3 text-center">1–3 days</td>
                <td className="p-3 text-center">1–2 days</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Cure/Ready to Drive</td>
                <td className="p-3 text-center">7 days</td>
                <td className="p-3 text-center">1–3 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Can You Put Concrete Over Asphalt?</h2>
        <p>
          Technically yes, but it's generally not recommended. Placing a concrete overlay on top of asphalt creates a "bonded" system where the concrete's performance depends on the asphalt below. If the asphalt has cracks, heaves, or soft spots, these will telegraph through the concrete. The better approach is to remove the asphalt entirely and pour fresh concrete on a proper gravel base. If budget is an issue, consider an asphalt resurface (overlay) instead — it's cheaper than removing and replacing with concrete.
        </p>

        <h2>Maintenance Schedule Comparison</h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-left">Concrete Tasks</th>
                <th className="p-3 text-left">Asphalt Tasks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Year 1</td>
                <td className="p-3">Nothing (cure continues)</td>
                <td className="p-3">Nothing (cure period)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Year 2–3</td>
                <td className="p-3">Optional: apply penetrating sealer ($0.15–$0.25/sq ft)</td>
                <td className="p-3">First sealcoat ($0.70–$1.00/sq ft)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Year 5</td>
                <td className="p-3">Inspect for cracks, patch if needed</td>
                <td className="p-3">Second sealcoat + crack fill</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Year 8–10</td>
                <td className="p-3">Optional: reseal</td>
                <td className="p-3">Third sealcoat + possible edge repair</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Year 12–15</td>
                <td className="p-3">Minor crack repair if needed</td>
                <td className="p-3">Fourth sealcoat + significant patch work</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Year 15–20</td>
                <td className="p-3">Still going strong</td>
                <td className="p-3 font-bold text-red-700">Full replacement needed</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Year 20–30</td>
                <td className="p-3">Occasional crack repair, optional reseal</td>
                <td className="p-3">Second driveway lifecycle begins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Heated Driveway Options</h2>
        <p>
          Both concrete and asphalt driveways can be equipped with radiant heating systems, but concrete is the better substrate because:
        </p>
        <ul>
          <li>Concrete transmits heat more efficiently than asphalt</li>
          <li>Asphalt can soften around heating elements, causing depressions</li>
          <li>Heated concrete driveways cost $12–$25/sq ft installed (including the heating system)</li>
          <li>Operating costs: roughly $1–$3 per hour depending on system size and energy costs</li>
        </ul>

        <h2>The Verdict: Which Should You Choose?</h2>
        <p>For most homeowners, <strong>concrete is the better long-term investment</strong>. The 30-year TCO analysis shows concrete saving $5,400+ over asphalt, plus adding more to resale value. The only strong case for asphalt is if you live in a severe freeze-thaw climate (northern Minnesota, Maine, Montana) or have a strict budget under $3,000.</p>
        <p>
          If you want the best of both worlds, consider a concrete driveway with proper air-entrained mix for cold climates — it provides the longevity of concrete with better freeze-thaw resistance. Talk to a local contractor who specializes in both materials for regional pricing.
        </p>

        <div className="bg-slate-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-xl font-bold mb-3">Calculate Your Driveway Cost</h3>
          <p className="text-slate-400 mb-4 max-w-lg mx-auto">
            Enter your driveway dimensions and get instant cost estimates for both concrete and asphalt — including material, labor, and long-term maintenance costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/driveway"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition inline-block"
            >
              Free Driveway Calculator →
            </Link>
            <Link
              href="/templates"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-bold transition inline-block"
            >
              Pro Estimate Templates — $49
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
