import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Self-Leveling Concrete: Complete Guide for Contractors (2026) | EstimateConcrete',
  description: 'Everything contractors need to know about self-leveling concrete. Types, costs, application steps, common mistakes, and how to price self-leveling jobs profitably.',
  keywords: ['self leveling concrete', 'self-leveling concrete', 'self leveling underlayment', 'concrete floor leveling', 'self leveling compound'],
}

export default function SelfLevelingConcreteGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Self-Leveling Concrete Guide</span>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Self-Leveling Concrete: The Complete Contractor's Guide for 2026
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Self-leveling concrete (SLC) is one of the most in-demand concrete services for interior flooring projects — 
          searched over <strong>27,100 times per month</strong>. Whether you're preparing a floor for tile, hardwood, 
          LVP, or an epoxy coating, self-leveling compounds create a perfectly flat, smooth substrate in hours instead of days. 
          This guide covers products, application, pricing, and business economics.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mt-0">Quick Cost Summary</h3>
          <ul className="text-blue-800 mb-0">
            <li><strong>Material cost:</strong> $1.50–$4.00 per sq ft (depending on depth and product)</li>
            <li><strong>Professional installation:</strong> $3.00–$8.00 per sq ft</li>
            <li><strong>Average room (200 sq ft at ¼" depth):</strong> $600–$1,600 installed</li>
            <li><strong>Large commercial floor (1,000+ sq ft):</strong> $2.50–$5.00 per sq ft</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12">What Is Self-Leveling Concrete?</h2>
        
        <p>
          Self-leveling concrete is a polymer-modified cementitious compound that flows across a floor surface 
          and uses gravity to create a flat, level plane. Unlike traditional concrete or mortar (which must be 
          manually screeded and troweled), SLC is mixed to a pourable consistency and literally levels itself 
          within minutes.
        </p>

        <p>
          The "self-leveling" name is slightly misleading — it doesn't magically find level on a dramatically 
          sloped floor. It's designed to fill low spots and create a smooth surface over irregularities of up 
          to about 1 inch. For deeper corrections, you need to pour in lifts or use a different approach.
        </p>

        <h3>When to Use Self-Leveling Concrete</h3>
        <ul>
          <li><strong>Floor prep for finish flooring:</strong> Tile, hardwood, LVP, carpet, and epoxy all require a flat substrate. SLC fixes uneven concrete that would otherwise cause cracked tiles or bouncy floors.</li>
          <li><strong>Radiant heat systems:</strong> SLC encapsulates in-floor heating tubes/cables and creates a smooth surface above them.</li>
          <li><strong>Correcting slopes and dips:</strong> Older buildings often have concrete floors that have settled unevenly. SLC corrects these without tearing out the existing floor.</li>
          <li><strong>Smoothing rough concrete:</strong> Spalled, pitted, or patched concrete can be resurfaced with SLC for a factory-smooth finish.</li>
          <li><strong>Raising floor height:</strong> When sections of a floor need to be brought up to match adjacent areas (e.g., after removing a subfloor).</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12">Types of Self-Leveling Products</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Max Depth</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Walk Time</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost/bag</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Standard Underlayment</td>
                <td className="border border-gray-300 px-4 py-3">1" per pour</td>
                <td className="border border-gray-300 px-4 py-3">4-6 hours</td>
                <td className="border border-gray-300 px-4 py-3">$25–$35</td>
                <td className="border border-gray-300 px-4 py-3">General floor prep, tile underlayment</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">High-Flow Underlayment</td>
                <td className="border border-gray-300 px-4 py-3">1.5" per pour</td>
                <td className="border border-gray-300 px-4 py-3">2-4 hours</td>
                <td className="border border-gray-300 px-4 py-3">$35–$50</td>
                <td className="border border-gray-300 px-4 py-3">Large commercial pours, fast turnaround</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Gypsum-Based SLC</td>
                <td className="border border-gray-300 px-4 py-3">3" per pour</td>
                <td className="border border-gray-300 px-4 py-3">90 min</td>
                <td className="border border-gray-300 px-4 py-3">$30–$45</td>
                <td className="border border-gray-300 px-4 py-3">Radiant heat, thick fills, wood subfloors</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Rapid-Set SLC</td>
                <td className="border border-gray-300 px-4 py-3">1" per pour</td>
                <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                <td className="border border-gray-300 px-4 py-3">$40–$55</td>
                <td className="border border-gray-300 px-4 py-3">Time-critical projects, occupied buildings</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Polishable Overlay</td>
                <td className="border border-gray-300 px-4 py-3">¼"–½"</td>
                <td className="border border-gray-300 px-4 py-3">4-6 hours</td>
                <td className="border border-gray-300 px-4 py-3">$45–$70</td>
                <td className="border border-gray-300 px-4 py-3">Decorative finished floors (no topping needed)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Popular Products by Brand</h3>
        <ul>
          <li><strong>Ardex K-301:</strong> Industry standard for commercial work. Self-drying, can receive moisture-sensitive flooring. Premium price but bulletproof reliability.</li>
          <li><strong>Mapei Novoplan 2 Plus:</strong> Excellent flow, good for large pours. Popular with tile contractors.</li>
          <li><strong>Henry 555 Level Pro:</strong> Great value for residential work. Available at Home Depot.</li>
          <li><strong>USG Levelrock:</strong> Gypsum-based, excellent for radiant heat. Pumpable for large jobs.</li>
          <li><strong>Rapid Set CTS:</strong> Fast-setting (walks in 2 hours). Ideal for occupied buildings where downtime is costly.</li>
          <li><strong>Laticrete NXT Level Plus:</strong> Premium cement-based. Excellent for large commercial pours.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12">Cost Breakdown</h2>

        <h3>Material Costs Per Square Foot (at ¼" depth)</h3>
        <p>
          A 50-lb bag of self-leveling compound covers approximately 25-50 sq ft at ¼" depth 
          (varies significantly by product — always check the data sheet).
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Component</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost/sq ft (¼" depth)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Self-leveling compound</td>
                <td className="border border-gray-300 px-4 py-3">$0.75–$2.50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Primer</td>
                <td className="border border-gray-300 px-4 py-3">$0.10–$0.25</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Metal lath / wire mesh (if needed)</td>
                <td className="border border-gray-300 px-4 py-3">$0.25–$0.50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Foam backer / dam material</td>
                <td className="border border-gray-300 px-4 py-3">$0.05–$0.15</td>
              </tr>
              <tr className="bg-green-50 font-semibold">
                <td className="border border-gray-300 px-4 py-3">Total Materials</td>
                <td className="border border-gray-300 px-4 py-3">$1.15–$3.40</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-yellow-900 mt-0">⚠️ Depth Multiplier</h3>
          <p className="text-yellow-800 mb-0">
            Material cost scales linearly with depth. At ½" depth, double the material cost. At 1" depth, 
            quadruple it. This is why accurate depth measurement (using a laser level and pin gauge) is 
            critical for accurate estimates. Under-ordering means a second mobilization; over-ordering 
            means wasted material with a 20-30 minute pot life.
          </p>
        </div>

        <h3>Total Installed Cost</h3>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Project</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Size</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Avg Depth</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Bathroom floor</td>
                <td className="border border-gray-300 px-4 py-3">50 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">¼"</td>
                <td className="border border-gray-300 px-4 py-3">$200–$400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Kitchen floor</td>
                <td className="border border-gray-300 px-4 py-3">150 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">¼"</td>
                <td className="border border-gray-300 px-4 py-3">$500–$1,200</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Living room</td>
                <td className="border border-gray-300 px-4 py-3">300 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">⅜"</td>
                <td className="border border-gray-300 px-4 py-3">$1,200–$2,400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Whole floor (residential)</td>
                <td className="border border-gray-300 px-4 py-3">1,000 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">½"</td>
                <td className="border border-gray-300 px-4 py-3">$4,000–$8,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Commercial floor</td>
                <td className="border border-gray-300 px-4 py-3">5,000 sq ft</td>
                <td className="border border-gray-300 px-4 py-3">¼"</td>
                <td className="border border-gray-300 px-4 py-3">$12,500–$25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12">Step-by-Step Installation</h2>

        <h3>Step 1: Survey and Measure</h3>
        <p>
          Set up a rotary or line laser level at the highest point of the floor. Use a measuring pin or 
          ruler at multiple points (every 2-3 feet in a grid) to map the floor's high and low spots. 
          Record the maximum depth — this determines your material quantity.
        </p>
        <p>
          <strong>Pro tip:</strong> Use a smartphone app like "Measure" to photograph and annotate the floor 
          map. Share it with your crew and reference it during the pour to ensure adequate coverage in the 
          deepest areas.
        </p>

        <h3>Step 2: Prepare the Surface</h3>
        <ul>
          <li>Remove all loose material, old adhesive, paint, oil, and dust</li>
          <li>Grind or shot-blast if needed for adhesion (CSP-2 profile minimum)</li>
          <li>Fill large cracks (over ¼") with non-shrink repair mortar and let cure</li>
          <li>Dam all openings — doorways, drains, floor edges, expansion joints. Use foam backer rod, 
            duct tape on the back side, or rigid foam board to contain the liquid compound</li>
          <li>Vacuum thoroughly — any debris creates weak spots</li>
        </ul>

        <h3>Step 3: Prime the Surface</h3>
        <p>
          <strong>Never skip primer.</strong> Primer does two critical things: (1) seals the concrete so it 
          doesn't absorb water from the SLC (which causes cracking and poor flow), and (2) provides a bonding 
          surface. Use the primer recommended by the SLC manufacturer — they're formulated as a system.
        </p>
        <p>
          Apply with a roller or brush. Coverage is typically 200-300 sq ft per gallon. Allow to dry to 
          tack (usually 1-3 hours, depending on conditions). The primer should be tacky but not wet when 
          you pour — if it's fully dry (slick), apply a second coat or add sand to the wet primer for 
          additional grip.
        </p>

        <h3>Step 4: Mix and Pour</h3>
        <p>
          <strong>Mixing is where most failures happen.</strong> Self-leveling compound is extremely 
          sensitive to water ratio. Too much water = weak, crumbly result. Too little = poor flow, 
          trowel marks, and won't self-level.
        </p>
        <ul>
          <li>Use a high-speed drill (600+ RPM) with a mixing paddle — not a concrete mixer</li>
          <li>Add powder to water (not water to powder) to prevent clumps</li>
          <li>Mix for exactly the time specified (usually 2-3 minutes at high speed)</li>
          <li>Measure water precisely — use a bucket with markings, not "about 6 quarts"</li>
          <li>In hot conditions, use cold water to extend working time</li>
          <li>For large pours, have 2-3 people mixing continuously while one person pours and spreads</li>
        </ul>

        <h3>Step 5: Spread and Smooth</h3>
        <p>
          Pour the mixed compound starting at the farthest point from the exit. Use a gauge rake 
          (set to desired depth) to spread the compound evenly, then follow with a smoother or spike 
          roller to release air bubbles and help it find level.
        </p>
        <p>
          Work quickly — most products have a 15-20 minute working time. On larger floors, pour in 
          sections and keep a wet edge (each new batch must blend into the previous one before it 
          starts to set). This requires a well-coordinated crew.
        </p>

        <h3>Step 6: Cure</h3>
        <ul>
          <li>Do not disturb for the manufacturer-specified set time (typically 2-6 hours)</li>
          <li>Keep the area closed to traffic and free from vibration</li>
          <li>Avoid forced air or direct sunlight, which cause surface crusting</li>
          <li>Most products can receive flooring in 16-24 hours</li>
          <li>Check moisture levels before installing moisture-sensitive flooring (use a calcium chloride test or RH probe)</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12">Common Mistakes and How to Avoid Them</h2>

        <ol>
          <li>
            <strong>Skipping primer.</strong> The SLC will either delaminate (separate from the substrate) 
            or dry too fast (concrete absorbs the water, preventing proper flow and curing). Always prime.
          </li>
          <li>
            <strong>Wrong water ratio.</strong> Even ½ cup too much or too little per bag can ruin the result. 
            Measure precisely every batch. Consider pre-measuring water into buckets before you start.
          </li>
          <li>
            <strong>Inadequate damming.</strong> SLC is liquid — it WILL find any gap. Under-door gaps, 
            drain openings, cracks to adjacent rooms. One missed gap = compound running where you don't 
            want it and not enough depth where you do.
          </li>
          <li>
            <strong>Pouring too deep in one lift.</strong> Most products have a maximum single-pour depth 
            (typically ¾"–1½"). Going deeper causes cracking, shrinkage, and weak curing. For deeper fills, 
            pour in multiple lifts with 24 hours between.
          </li>
          <li>
            <strong>Slow mixing/pouring pace.</strong> When you need 20 bags for a room, you need 2-3 
            mixers running continuously. If you're mixing one bag at a time, the first pour will be setting 
            before the last one goes down — creating visible seams and height differences.
          </li>
          <li>
            <strong>Not accounting for temperature.</strong> Below 50°F, SLC cures too slowly and may crack. 
            Above 90°F, it sets before you can spread it. Optimal range: 65°F–80°F. In hot conditions, 
            use cold water and work in the morning.
          </li>
        </ol>

        <h2 className="text-3xl font-bold mt-12">Pricing Self-Leveling Jobs (Contractor Guide)</h2>

        <p>
          Self-leveling work is high-skill, fast-paced, and unforgiving — price accordingly. Many contractors 
          undercharge because they think "it's just pouring a liquid." In reality, proper SLC application 
          requires significant prep, precise execution, and expensive materials.
        </p>

        <h3>Pricing Formula</h3>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-6">
          <p className="font-mono text-lg mb-2">
            <strong>Price = (Materials × 2.5) + (Labor Hours × Rate) + Mobilization Fee</strong>
          </p>
          <ul className="mb-0">
            <li><strong>Materials markup:</strong> 2.5x (covers waste, mixing water, primer, consumables, and product risk — an entire batch can be ruined by wrong water ratio)</li>
            <li><strong>Labor rate:</strong> $45–$75/hour per person (skilled trade rate)</li>
            <li><strong>Mobilization fee:</strong> $200–$500 (covers travel, equipment, cleanup)</li>
            <li><strong>Minimum job size:</strong> $500–$800 (not worth setting up for less)</li>
          </ul>
        </div>

        <h3>Example: 300 sq ft Living Room at ¼" Average Depth</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <ul className="mb-0">
            <li>Materials: 12 bags × $32 = $384 → × 2.5 = <strong>$960</strong></li>
            <li>Labor: 2 people × 4 hours × $55/hr = <strong>$440</strong></li>
            <li>Mobilization: <strong>$300</strong></li>
            <li><strong>Total quote: $1,700</strong> ($5.67/sq ft)</li>
            <li><strong>Profit: ~$875</strong> (51% margin)</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12">Self-Leveling Over Different Substrates</h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Substrate</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Can You Pour SLC?</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Special Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Bare concrete</td>
                <td className="border border-gray-300 px-4 py-3">✅ Yes — ideal substrate</td>
                <td className="border border-gray-300 px-4 py-3">Standard primer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Plywood subfloor</td>
                <td className="border border-gray-300 px-4 py-3">✅ Yes — with precautions</td>
                <td className="border border-gray-300 px-4 py-3">Screw down loose areas, use fiber mesh or lath, flexible primer</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Existing tile</td>
                <td className="border border-gray-300 px-4 py-3">✅ Yes — if well-bonded</td>
                <td className="border border-gray-300 px-4 py-3">Grind surface for profile, use bonding primer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Existing vinyl/VCT</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ Maybe — test first</td>
                <td className="border border-gray-300 px-4 py-3">Must be well-bonded, no cushion-back. Test adhesion. Remove if possible.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Radiant heat mats</td>
                <td className="border border-gray-300 px-4 py-3">✅ Yes — excellent application</td>
                <td className="border border-gray-300 px-4 py-3">Use gypsum-based SLC or approved cement-based. Min ¾" over heating element.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">OSB subfloor</td>
                <td className="border border-gray-300 px-4 py-3">⚠️ With caution</td>
                <td className="border border-gray-300 px-4 py-3">OSB swells with moisture. Use lath + flexible SLC. Not ideal.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Lightweight concrete</td>
                <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                <td className="border border-gray-300 px-4 py-3">May need multiple primer coats (porous). Test adhesion.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12">Frequently Asked Questions</h2>

        <div className="space-y-6 my-8">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">How thick can you pour self-leveling concrete?</h3>
            <p className="mb-0">
              Most products allow ¼" to 1" in a single pour. Some high-build products allow up to 1½". 
              For greater depths, pour in multiple lifts (each allowed to cure before the next). 
              Gypsum-based self-levelers can go up to 3" in one pour but are limited to interior 
              dry applications.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Can you walk on self-leveling concrete? How long before flooring?</h3>
            <p className="mb-0">
              Light foot traffic is typically allowed in 2-6 hours depending on the product. Most SLC 
              products can receive flooring (tile, hardwood, LVP) in 16-24 hours. Rapid-set products 
              can receive flooring in as little as 4 hours. Always check the specific product data sheet.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Do you need to prime before self-leveling compound?</h3>
            <p className="mb-0">
              Yes — always. Primer prevents the substrate from absorbing water from the SLC (which causes 
              cracking and poor flow) and provides a bonding surface. Skipping primer is the #2 cause of 
              SLC failures after incorrect water ratios.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Can self-leveling concrete be used outside?</h3>
            <p className="mb-0">
              Most self-leveling compounds are for interior use only. They're not designed to withstand 
              freeze-thaw cycles, UV exposure, or standing water. For exterior leveling, use a 
              polymer-modified concrete overlay or traditional screeded concrete.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Self-leveling concrete vs. traditional mud bed — which is better?</h3>
            <p className="mb-0">
              SLC is faster and creates a flatter surface with less skill required. Traditional mud 
              beds (sand/cement mix) are cheaper for deep fills (over 1") and work better for creating 
              slopes (e.g., toward a shower drain). For most floor prep under 1", SLC is the better choice. 
              For shower pans and thick corrections, a traditional mud bed is more appropriate.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold text-white mt-0">Estimate Your Self-Leveling Project</h2>
          <p className="text-gray-300">
            Use our free slab calculator to estimate concrete quantities, or browse our professional 
            templates to create detailed estimates for your flooring prep projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/calculators/slab" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold no-underline">
              Slab Calculator →
            </Link>
            <Link href="/templates" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold no-underline">
              Estimate Templates →
            </Link>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Self-Leveling Concrete: The Complete Contractor's Guide for 2026",
            "description": "Everything contractors need to know about self-leveling concrete — types, costs, application steps, common mistakes, and pricing guide.",
            "author": { "@type": "Organization", "name": "EstimateConcrete" },
            "publisher": { "@type": "Organization", "name": "EstimateConcrete" },
            "datePublished": "2026-03-07",
            "dateModified": "2026-03-07",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How thick can you pour self-leveling concrete?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most products allow ¼\" to 1\" in a single pour. For greater depths, pour in multiple lifts." }
              },
              {
                "@type": "Question",
                "name": "Do you need to prime before self-leveling compound?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes — always. Primer prevents the substrate from absorbing water and provides a bonding surface." }
              },
              {
                "@type": "Question",
                "name": "Can self-leveling concrete be used outside?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most self-leveling compounds are for interior use only. They're not designed for freeze-thaw, UV, or standing water." }
              }
            ]
          }),
        }}
      />
    </main>
  )
}
