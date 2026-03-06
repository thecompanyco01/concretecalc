import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Polishing: Complete Contractor Guide (2026 Costs & Methods)",
  description:
    "Everything contractors need to know about concrete polishing: costs ($3-12/sq ft), equipment, grit sequences, cream vs salt-and-pepper finish, and how to price polishing jobs profitably.",
  keywords:
    "concrete polishing, polished concrete floors, concrete polishing cost, concrete polishing contractor, how to polish concrete, concrete floor polishing, polished concrete cost per square foot",
};

export default function ConcretePolishingGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Polishing Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Polishing: The Complete Contractor&apos;s Guide for 2026</h1>

        <p className="lead text-xl text-gray-600">
          Polished concrete is one of the fastest-growing flooring markets, with <strong>18,100 monthly searches</strong> and a <strong>$7.80 average CPC</strong> — proof that both homeowners and commercial clients are actively looking for this service. For contractors, polishing jobs offer <strong>$3–$12 per square foot</strong> in revenue with margins of 40-60%. This guide covers everything: equipment, grit sequences, finishes, pricing, and how to win more polishing work.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Cost Reference</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Basic polish (cream finish):</strong> $3–$5/sq ft</li>
            <li>• <strong>Medium polish (salt & pepper):</strong> $5–$8/sq ft</li>
            <li>• <strong>High polish (full aggregate exposure):</strong> $8–$12/sq ft</li>
            <li>• <strong>Decorative/dyed polish:</strong> $8–$15/sq ft</li>
            <li>• <strong>Average residential job (500 sq ft):</strong> $2,500–$6,000</li>
            <li>• <strong>Average commercial job (5,000 sq ft):</strong> $15,000–$40,000</li>
          </ul>
        </div>

        <h2>What Is Concrete Polishing?</h2>

        <p>
          Concrete polishing is a multi-step process that grinds and hones a concrete surface using progressively finer diamond abrasives until it achieves a smooth, glossy finish. Unlike coatings or epoxy that sit <em>on top</em> of concrete, polishing transforms the concrete itself — making it denser, harder, and more reflective.
        </p>

        <p>
          The result is a floor that&apos;s virtually maintenance-free, lasts decades, and looks like polished stone. It&apos;s become the go-to choice for warehouses, retail stores, restaurants, showrooms, and increasingly residential spaces like basements, kitchens, and living areas.
        </p>

        <h2>Why Contractors Should Add Polishing to Their Services</h2>

        <p>
          If you&apos;re a concrete contractor not offering polishing, you&apos;re leaving money on the table. Here&apos;s why:
        </p>

        <ul>
          <li><strong>High margins:</strong> Material costs are low (diamond tooling + densifier). Most of the cost is labor and equipment — which you control.</li>
          <li><strong>Recurring revenue:</strong> Commercial clients need maintenance polishing every 1-3 years.</li>
          <li><strong>Growing demand:</strong> The polished concrete market is projected to grow 5.8% annually through 2030. More architects and designers are specifying it.</li>
          <li><strong>Less competition:</strong> Most flatwork contractors don&apos;t offer polishing. Adding this service differentiates you immediately.</li>
          <li><strong>Year-round work:</strong> Polishing is done indoors — no weather delays, no seasonal slowdown.</li>
        </ul>

        <h2>The 4 Levels of Concrete Polish</h2>

        <p>
          The Concrete Polishing Council of the American Society of Concrete Contractors defines four levels of polish based on aggregate exposure:
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Level</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Aggregate Exposure</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Grinding Depth</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost/Sq Ft</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">A</td>
                <td className="border border-gray-300 px-4 py-2">Cream</td>
                <td className="border border-gray-300 px-4 py-2">None — surface paste only</td>
                <td className="border border-gray-300 px-4 py-2">Minimal (1/16&quot;)</td>
                <td className="border border-gray-300 px-4 py-2">$3–$5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">B</td>
                <td className="border border-gray-300 px-4 py-2">Salt &amp; Pepper</td>
                <td className="border border-gray-300 px-4 py-2">Fine aggregate (sand) visible</td>
                <td className="border border-gray-300 px-4 py-2">1/16&quot;–1/8&quot;</td>
                <td className="border border-gray-300 px-4 py-2">$5–$8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">C</td>
                <td className="border border-gray-300 px-4 py-2">Medium Aggregate</td>
                <td className="border border-gray-300 px-4 py-2">Small stone aggregate exposed</td>
                <td className="border border-gray-300 px-4 py-2">1/8&quot;–1/4&quot;</td>
                <td className="border border-gray-300 px-4 py-2">$7–$10</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">D</td>
                <td className="border border-gray-300 px-4 py-2">Full Aggregate</td>
                <td className="border border-gray-300 px-4 py-2">Large stone aggregate fully exposed</td>
                <td className="border border-gray-300 px-4 py-2">1/4&quot;+</td>
                <td className="border border-gray-300 px-4 py-2">$8–$12</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Polishing Process: Step-by-Step</h2>

        <h3>Step 1: Floor Preparation</h3>
        <p>
          Before any grinding begins, inspect the floor for existing coatings, adhesives, paint, or sealers. These must be removed first using a 16 or 25-grit metal-bond diamond. Check for moisture issues with a calcium chloride test or relative humidity probe — excess moisture will cause problems with densifiers and dyes.
        </p>

        <h3>Step 2: Coarse Grinding (Metal-Bond Diamonds)</h3>
        <p>
          Start with metal-bond diamond segments to cut through the concrete surface and establish your desired aggregate exposure level. Typical progression:
        </p>
        <ul>
          <li><strong>25/30 grit:</strong> Heavy material removal, coating removal, leveling</li>
          <li><strong>40 grit:</strong> Moderate grinding, refining the cut</li>
          <li><strong>80 grit:</strong> Smoothing out 40-grit scratches, transitioning to honing</li>
          <li><strong>150 grit:</strong> Final metal-bond step, surface should be smooth to the touch</li>
        </ul>

        <h3>Step 3: Apply Densifier/Hardener</h3>
        <p>
          After the 150-grit metal-bond pass, apply a lithium silicate densifier. This penetrates the concrete and reacts with calcium hydroxide to form calcium silicate hydrate — essentially filling microscopic pores and making the concrete harder and more polishable. Common products: Prosoco Consolideck LS, Ameripolish SureLock, W.R. Meadows Pentra-Hard.
        </p>
        <p>
          <strong>Pro tip:</strong> Apply densifier when the concrete is still slightly damp from grinding — it absorbs better. Let it react for 20-30 minutes, then remove any residue.
        </p>

        <h3>Step 4: Fine Polishing (Resin-Bond Diamonds)</h3>
        <p>
          Switch to resin-bond diamond pads for the honing and polishing stages. These are softer and designed for progressive refinement:
        </p>
        <ul>
          <li><strong>100 grit resin:</strong> Transition from grinding to honing</li>
          <li><strong>200 grit:</strong> Start of the true honing process</li>
          <li><strong>400 grit:</strong> Floor begins to show reflectivity (honed matte finish stops here)</li>
          <li><strong>800 grit:</strong> Semi-polished, noticeable sheen</li>
          <li><strong>1500 grit:</strong> High polish, mirror-like reflectivity</li>
          <li><strong>3000 grit:</strong> Ultra-high polish (rarely needed, mostly for showrooms)</li>
        </ul>

        <h3>Step 5: Apply Guard/Sealer</h3>
        <p>
          After final polishing, apply a concrete guard product (stain protectant) to prevent liquid penetration. This is NOT a topical sealer — it&apos;s a penetrating protectant that doesn&apos;t change the appearance. Burnish it in with a high-speed burnisher at 1,500-3,000 RPM.
        </p>

        <h2>Equipment Needed</h2>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Equipment</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Buy Cost</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Rental/Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Planetary grinder (20&quot;-32&quot;)</td>
                <td className="border border-gray-300 px-4 py-2">Main grinding/polishing machine</td>
                <td className="border border-gray-300 px-4 py-2">$8,000–$30,000</td>
                <td className="border border-gray-300 px-4 py-2">$200–$500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Edge grinder (7&quot;-9&quot;)</td>
                <td className="border border-gray-300 px-4 py-2">Wall edges, corners, tight spaces</td>
                <td className="border border-gray-300 px-4 py-2">$1,500–$4,000</td>
                <td className="border border-gray-300 px-4 py-2">$75–$150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">HEPA dust vacuum</td>
                <td className="border border-gray-300 px-4 py-2">Dust collection (OSHA silica requirement)</td>
                <td className="border border-gray-300 px-4 py-2">$2,000–$6,000</td>
                <td className="border border-gray-300 px-4 py-2">$100–$200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Metal-bond diamond set</td>
                <td className="border border-gray-300 px-4 py-2">Coarse grinding (25-150 grit)</td>
                <td className="border border-gray-300 px-4 py-2">$300–$800/set</td>
                <td className="border border-gray-300 px-4 py-2">Consumable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Resin-bond diamond set</td>
                <td className="border border-gray-300 px-4 py-2">Fine polishing (100-3000 grit)</td>
                <td className="border border-gray-300 px-4 py-2">$200–$500/set</td>
                <td className="border border-gray-300 px-4 py-2">Consumable</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Burnisher (1500+ RPM)</td>
                <td className="border border-gray-300 px-4 py-2">Final polish &amp; guard application</td>
                <td className="border border-gray-300 px-4 py-2">$2,000–$5,000</td>
                <td className="border border-gray-300 px-4 py-2">$100–$200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Starting out?</strong> You can rent equipment for your first few jobs while you build the client base to justify purchasing. A full polishing setup runs $15,000–$45,000, but most contractors recoup the investment within 10-15 jobs.
        </p>

        <h2>How to Price Polishing Jobs</h2>

        <p>
          Pricing concrete polishing depends on several factors. Here&apos;s a framework:
        </p>

        <h3>Factor 1: Floor Condition</h3>
        <ul>
          <li><strong>New concrete (fresh pour):</strong> Easiest to polish. Minimal grinding needed. Price at the low end of your range.</li>
          <li><strong>Existing bare concrete:</strong> May need leveling, crack repair, or heavy grinding. Add 20-40% to base price.</li>
          <li><strong>Coated/painted concrete:</strong> Coating removal adds an entire grinding step. Add 30-50% to base price.</li>
          <li><strong>Damaged/deteriorated:</strong> Extensive prep work. Price on a case-by-case basis, often at the top of your range.</li>
        </ul>

        <h3>Factor 2: Desired Finish Level</h3>
        <ul>
          <li><strong>Honed matte (400 grit):</strong> 4-5 grinding passes. Base pricing.</li>
          <li><strong>Semi-polish (800 grit):</strong> 6-7 passes. 15-25% premium.</li>
          <li><strong>High polish (1500+ grit):</strong> 8-9 passes. 30-50% premium.</li>
          <li><strong>Decorative (dye + polish):</strong> Add $1-3/sq ft for dye application.</li>
        </ul>

        <h3>Factor 3: Job Size</h3>
        <ul>
          <li><strong>Under 500 sq ft:</strong> Higher per-sq-ft price (mobilization costs are fixed)</li>
          <li><strong>500-2,000 sq ft:</strong> Standard pricing</li>
          <li><strong>2,000-10,000 sq ft:</strong> Volume discount 10-15%</li>
          <li><strong>Over 10,000 sq ft:</strong> Volume discount 15-25%</li>
        </ul>

        <h3>Pricing Formula</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-6">
          <p className="font-mono text-sm">
            <strong>Job Price = (Square Footage × Base Rate) × Condition Multiplier × Finish Multiplier</strong>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Example: 2,000 sq ft warehouse, existing bare concrete, 800-grit semi-polish<br />
            = 2,000 × $6 × 1.3 × 1.2 = <strong>$18,720</strong>
          </p>
        </div>

        <h2>Common Mistakes to Avoid</h2>

        <ol>
          <li><strong>Skipping grit steps.</strong> Jumping from 40 to 200 grit leaves deep scratches that show through the final polish. Each grit step removes the scratches from the previous one — skip a step and those scratches are permanent.</li>
          <li><strong>Applying densifier too early or too late.</strong> Too early (before enough grinding) and the surface is too porous to polish well. Too late (after resin-bond steps) and the densifier can&apos;t penetrate properly. The 150-grit metal-bond stage is the sweet spot.</li>
          <li><strong>Ignoring moisture.</strong> High moisture content causes white spots, densifier failure, and bonding issues. Always test moisture before starting.</li>
          <li><strong>Not enough passes.</strong> Each grit level requires multiple passes (usually 2-3) going in different directions. One pass leaves inconsistent results.</li>
          <li><strong>Wrong diamond tooling for the concrete.</strong> Hard concrete needs softer-bond diamonds. Soft concrete needs harder-bond diamonds. This is counterintuitive — ask your diamond supplier for recommendations based on the concrete&apos;s hardness (Mohs scale).</li>
        </ol>

        <h2>Polished Concrete vs. Other Flooring Options</h2>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Flooring Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost/Sq Ft</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Lifespan</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Maintenance</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold">Polished Concrete</td>
                <td className="border border-gray-300 px-4 py-2">$3–$12</td>
                <td className="border border-gray-300 px-4 py-2">20+ years</td>
                <td className="border border-gray-300 px-4 py-2">Very low (dust mop)</td>
                <td className="border border-gray-300 px-4 py-2">Warehouses, retail, residential</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Epoxy Coating</td>
                <td className="border border-gray-300 px-4 py-2">$3–$7</td>
                <td className="border border-gray-300 px-4 py-2">5–10 years</td>
                <td className="border border-gray-300 px-4 py-2">Moderate (recoat periodically)</td>
                <td className="border border-gray-300 px-4 py-2">Garages, industrial</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">VCT (Vinyl Tile)</td>
                <td className="border border-gray-300 px-4 py-2">$2–$5</td>
                <td className="border border-gray-300 px-4 py-2">10–15 years</td>
                <td className="border border-gray-300 px-4 py-2">High (strip/wax regularly)</td>
                <td className="border border-gray-300 px-4 py-2">Retail, schools, hospitals</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Hardwood</td>
                <td className="border border-gray-300 px-4 py-2">$6–$15</td>
                <td className="border border-gray-300 px-4 py-2">25+ years</td>
                <td className="border border-gray-300 px-4 py-2">Moderate (refinish every 5-7 yrs)</td>
                <td className="border border-gray-300 px-4 py-2">Residential, offices</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tile</td>
                <td className="border border-gray-300 px-4 py-2">$5–$15</td>
                <td className="border border-gray-300 px-4 py-2">20+ years</td>
                <td className="border border-gray-300 px-4 py-2">Low (grout maintenance)</td>
                <td className="border border-gray-300 px-4 py-2">Bathrooms, kitchens, commercial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Polished concrete wins on lifecycle cost. The initial installation may be comparable to epoxy or tile, but with virtually zero maintenance costs and a 20+ year lifespan, the total cost of ownership is often 50-70% less than alternatives.
        </p>

        <h2>Selling Polished Concrete to Clients</h2>

        <p>
          The key selling points for different client types:
        </p>

        <h3>For Commercial Clients (Warehouses, Retail, Offices)</h3>
        <ul>
          <li><strong>Lifecycle cost savings:</strong> &quot;Polished concrete costs 50-70% less over 20 years compared to VCT or carpet — no waxing, no replacement, no downtime.&quot;</li>
          <li><strong>LEED points:</strong> Polished concrete qualifies for LEED credits (no VOCs, uses existing slab, reduces waste).</li>
          <li><strong>Light reflectivity:</strong> A high-polish floor reflects 30-50% more ambient light, reducing lighting costs.</li>
          <li><strong>Forklift-friendly:</strong> Unlike epoxy, polished concrete doesn&apos;t peel under forklift traffic.</li>
        </ul>

        <h3>For Residential Clients</h3>
        <ul>
          <li><strong>Modern aesthetics:</strong> Polished concrete is the look architects and designers are specifying right now.</li>
          <li><strong>Allergen-free:</strong> No carpet fibers, no grout lines — just smooth, easy-to-clean surface.</li>
          <li><strong>Radiant heat compatible:</strong> Polished concrete is the ideal surface for in-floor heating systems.</li>
          <li><strong>Customizable:</strong> Dyes, scoring patterns, and aggregate exposure create unique, one-of-a-kind floors.</li>
        </ul>

        <h2>OSHA Silica Compliance</h2>

        <p>
          <strong>This is non-negotiable.</strong> Concrete grinding produces respirable crystalline silica dust. OSHA&apos;s permissible exposure limit (PEL) is 50 µg/m³ as an 8-hour time-weighted average. Violations carry fines of $15,625 per occurrence (serious) up to $156,259 (willful/repeat).
        </p>

        <p>
          Requirements for concrete polishing contractors:
        </p>
        <ul>
          <li>Use a grinder with an integrated HEPA-filtered dust collection system</li>
          <li>Develop a written Exposure Control Plan (ECP)</li>
          <li>Offer medical surveillance to employees exposed above the action level (25 µg/m³)</li>
          <li>Provide worker training on silica hazards</li>
          <li>Maintain exposure monitoring records for 30 years</li>
        </ul>

        <h2>Getting Started: Your First Polishing Job</h2>

        <ol>
          <li><strong>Get trained.</strong> Take a polishing course from a diamond manufacturer (HTC, Husqvarna, Superabrasive). Most offer free 2-3 day training when you buy equipment.</li>
          <li><strong>Start with a test panel.</strong> On every job, polish a 4&apos;×4&apos; test area first. Show it to the client for approval. This sets expectations and reveals any issues with the concrete.</li>
          <li><strong>Rent before you buy.</strong> Rent a planetary grinder for your first 3-5 jobs. If you&apos;re booking enough work, invest in your own machine.</li>
          <li><strong>Start with garage floors.</strong> Residential garages are lower-stakes, forgiving environments to build skills before tackling high-end commercial work.</li>
          <li><strong>Document everything.</strong> Before/after photos of every job build your portfolio and social proof. Post them on your website and social media.</li>
        </ol>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📐 Price Your Next Polishing Job</h3>
          <p className="text-gray-700 mb-4">
            Use our free concrete calculators to estimate material quantities and costs for your projects.
          </p>
          <Link href="/calculators/slab" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
            Try Our Slab Calculator →
          </Link>
        </div>

        <h2>Frequently Asked Questions</h2>

        <h3>How long does it take to polish a concrete floor?</h3>
        <p>
          A typical residential project (400-800 sq ft) takes 2-3 days. Commercial projects (5,000+ sq ft) take 5-10 days depending on floor condition and desired finish level. Each grinding pass covers about 200-400 sq ft per hour with a 20&quot; grinder.
        </p>

        <h3>Can any concrete floor be polished?</h3>
        <p>
          Most concrete can be polished, but results vary. New concrete (28+ days cured) polishes best. Old, deteriorated, or very soft concrete may require extensive prep or may not achieve a high gloss. Always do a test panel first.
        </p>

        <h3>How do you maintain polished concrete?</h3>
        <p>
          Daily: Dust mop or auto-scrubber with clean water. Weekly: Damp mop with pH-neutral cleaner. Annually: Re-apply guard/protectant. Every 3-5 years: Maintenance polish (quick buff with 1500-3000 grit to restore sheen).
        </p>

        <h3>Is polished concrete slippery?</h3>
        <p>
          Polished concrete has a similar slip coefficient to natural stone. It&apos;s actually LESS slippery when wet compared to glazed tile or polished marble. For areas requiring extra traction (commercial kitchens, pool decks), a honed finish (400 grit) provides better grip than a high polish.
        </p>

        <h3>What&apos;s the difference between polished concrete and a concrete coating?</h3>
        <p>
          Polished concrete transforms the concrete itself through grinding and densification — nothing sits on top. Coatings (epoxy, urethane, acrylic) are applied on top of the concrete. Polished concrete lasts 20+ years without reapplication; coatings typically need recoating every 5-10 years.
        </p>

      </article>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
        <ul className="space-y-2">
          <li><Link href="/blog/concrete-finishing-techniques" className="text-orange-600 hover:underline">Concrete Finishing Techniques: Complete Guide</Link></li>
          <li><Link href="/blog/best-concrete-sealer-guide" className="text-orange-600 hover:underline">Best Concrete Sealers for 2026</Link></li>
          <li><Link href="/blog/concrete-overlay-resurfacing" className="text-orange-600 hover:underline">Concrete Overlay &amp; Resurfacing Guide</Link></li>
          <li><Link href="/blog/how-to-bid-concrete-jobs" className="text-orange-600 hover:underline">How to Bid Concrete Jobs</Link></li>
        </ul>
      </div>
    </div>
  );
}
