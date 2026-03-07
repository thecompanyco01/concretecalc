import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Block Calculator: How Many Blocks Do I Need? (2026 Guide)",
  description:
    "Calculate exactly how many concrete blocks (CMU) you need for any wall project. Covers 8x8x16, 4x8x16, and 12x8x16 block sizes, mortar estimation, wastage factors, and complete cost breakdowns for 2026.",
  keywords:
    "concrete block calculator, how many blocks do I need, CMU calculator, concrete block wall cost, cinder block calculator, concrete masonry unit calculator, block wall estimator, mortar calculator for blocks",
};

export default function ConcreteBlockCalculatorGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Block Calculator Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Block Calculator: How Many Blocks Do I Need? (2026 Guide)</h1>

        <p className="lead text-xl text-gray-600">
          Whether you&apos;re building a retaining wall, foundation, or garden partition, knowing exactly how many concrete blocks you need saves money and prevents mid-project supply runs. This guide covers the math behind block estimation, mortar quantities, wastage factors, and real-world costs — so you can order with confidence.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Block Estimation Reference</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Standard 8×8×16 block:</strong> 1.125 blocks per sq ft of wall</li>
            <li>• <strong>Half-height 4×8×16 block:</strong> 2.25 blocks per sq ft of wall</li>
            <li>• <strong>Standard block cost:</strong> $1.50–$3.50 each</li>
            <li>• <strong>Mortar per 100 blocks:</strong> ~3 bags (80 lb) Type S mortar</li>
            <li>• <strong>Wastage factor:</strong> Add 5–10% for cuts and breakage</li>
            <li>• <strong>Installed wall cost:</strong> $10–$25 per sq ft (labor + materials)</li>
            <li>• <strong>Average 8×20 ft wall (160 sq ft):</strong> ~180 blocks = $1,600–$4,000 installed</li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">
            Use our <Link href="/calculators/block" className="text-orange-600 hover:underline font-medium">free block calculator</Link> for an instant count based on your wall dimensions.
          </p>
        </div>

        <h2>Understanding CMU Block Sizes</h2>

        <p>
          Concrete masonry units (CMUs) — commonly called concrete blocks, cinder blocks, or breeze blocks — come in standardized sizes defined by ASTM C90. The nominal size includes the mortar joint (typically 3/8&quot;), so the actual block dimensions are slightly smaller than what the name suggests.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Standard CMU Block Sizes</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Nominal Size</th>
                <th className="text-left py-2">Actual Size</th>
                <th className="text-left py-2">Weight</th>
                <th className="text-left py-2">Blocks/sq ft</th>
                <th className="text-left py-2">Cost Each</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">4×8×16</td>
                <td className="py-2">3⅝ × 7⅝ × 15⅝</td>
                <td className="py-2">24–26 lbs</td>
                <td className="py-2">1.125</td>
                <td className="py-2">$1.50–$2.25</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">6×8×16</td>
                <td className="py-2">5⅝ × 7⅝ × 15⅝</td>
                <td className="py-2">30–33 lbs</td>
                <td className="py-2">1.125</td>
                <td className="py-2">$1.75–$2.75</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">8×8×16</td>
                <td className="py-2">7⅝ × 7⅝ × 15⅝</td>
                <td className="py-2">35–38 lbs</td>
                <td className="py-2">1.125</td>
                <td className="py-2">$2.00–$3.50</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">10×8×16</td>
                <td className="py-2">9⅝ × 7⅝ × 15⅝</td>
                <td className="py-2">42–46 lbs</td>
                <td className="py-2">1.125</td>
                <td className="py-2">$2.50–$4.00</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">12×8×16</td>
                <td className="py-2">11⅝ × 7⅝ × 15⅝</td>
                <td className="py-2">48–55 lbs</td>
                <td className="py-2">1.125</td>
                <td className="py-2">$3.00–$5.00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            All sizes use the same face dimensions (8×16 nominal), so the blocks-per-square-foot is identical. The width (first number) affects structural capacity and cost.
          </p>
        </div>

        <p>
          The most common block for residential and light commercial work is the <strong>8×8×16 standard CMU</strong>. It&apos;s the default choice for foundation walls, retaining walls, and freestanding walls up to 6 feet. For non-load-bearing partition walls, 4×8×16 blocks save material cost and wall thickness. For taller structural walls, 12×8×16 blocks provide greater load capacity and are often required by engineers.
        </p>

        <h2>The Block Calculation Formula</h2>

        <p>
          Calculating how many blocks you need is straightforward once you understand the formula. Every standard CMU (regardless of width) covers the same face area because the height and length are the same.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Step-by-Step Calculation</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold">Step 1: Calculate wall area</p>
              <p className="text-sm">Wall Area (sq ft) = Length (ft) × Height (ft)</p>
              <p className="text-sm text-gray-500">Example: 40 ft long × 8 ft tall = 320 sq ft</p>
            </div>
            <div>
              <p className="font-semibold">Step 2: Subtract openings</p>
              <p className="text-sm">Net Wall Area = Total Area − Door/Window Areas</p>
              <p className="text-sm text-gray-500">Example: 320 − (2 windows × 12 sq ft) = 296 sq ft</p>
            </div>
            <div>
              <p className="font-semibold">Step 3: Multiply by blocks per sq ft</p>
              <p className="text-sm">Blocks Needed = Net Wall Area × 1.125</p>
              <p className="text-sm text-gray-500">Example: 296 × 1.125 = 333 blocks</p>
            </div>
            <div>
              <p className="font-semibold">Step 4: Add wastage (5–10%)</p>
              <p className="text-sm">Total Order = Blocks Needed × 1.05 to 1.10</p>
              <p className="text-sm text-gray-500">Example: 333 × 1.07 = 356 blocks (round up to 360)</p>
            </div>
          </div>
        </div>

        <p>
          <strong>Where does 1.125 come from?</strong> Each nominal 8×16 block (including mortar joints) covers 128 square inches of wall face. One square foot equals 144 square inches. So: 144 ÷ 128 = 1.125 blocks per square foot.
        </p>

        <p>
          For quick mental math: <strong>multiply your square footage by 1.125</strong>, or just add 12.5% to the square footage number. A 100 sq ft wall needs about 113 blocks before wastage.
        </p>

        <h2>Mortar Estimation: How Much Do You Need?</h2>

        <p>
          Mortar is the second major material cost in any block wall. The amount depends on joint thickness, block size, and how much waste your crew generates. Here&apos;s the practical breakdown:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Mortar Quantities per 100 Blocks</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Block Width</th>
                <th className="text-left py-2">Mortar (cubic ft)</th>
                <th className="text-left py-2">80-lb Bags Premix</th>
                <th className="text-left py-2">Approx. Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">4-inch</td>
                <td className="py-2">4.5 cu ft</td>
                <td className="py-2">2.5 bags</td>
                <td className="py-2">$15–$22</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">6-inch</td>
                <td className="py-2">5.2 cu ft</td>
                <td className="py-2">2.8 bags</td>
                <td className="py-2">$17–$25</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">8-inch</td>
                <td className="py-2">6.0 cu ft</td>
                <td className="py-2">3.2 bags</td>
                <td className="py-2">$19–$29</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">10-inch</td>
                <td className="py-2">6.8 cu ft</td>
                <td className="py-2">3.6 bags</td>
                <td className="py-2">$22–$32</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">12-inch</td>
                <td className="py-2">7.5 cu ft</td>
                <td className="py-2">4.0 bags</td>
                <td className="py-2">$24–$36</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Based on standard 3/8&quot; mortar joints (bed and head joints). Figures include typical jobsite waste of 10–15%. Type S mortar is standard for structural and below-grade work; Type N for above-grade non-load-bearing.
          </p>
        </div>

        <h3>Mortar Types: Which One to Use</h3>

        <ul>
          <li><strong>Type S (2,300 PSI):</strong> The default for most block work. Required for structural walls, retaining walls, and any below-grade application. Best all-around choice.</li>
          <li><strong>Type N (750 PSI):</strong> Above-grade, non-load-bearing walls only. Softer and more workable than Type S. Common for veneers and interior partitions.</li>
          <li><strong>Type M (2,500 PSI):</strong> Highest strength. Used for heavy load-bearing walls, foundations in contact with soil, and walls subject to extreme lateral loads.</li>
        </ul>

        <p>
          <strong>Pro tip:</strong> If you&apos;re mixing from scratch (Portland cement + lime + sand), the Type S ratio is 1 part cement : ½ part lime : 4½ parts sand. Most contractors use premixed bags for convenience — at $6–$9 per 80-lb bag, the labor savings outweigh the material premium.
        </p>

        <h2>Wastage Factors: How Much Extra to Order</h2>

        <p>
          Every block project generates waste from cuts, breakage during delivery, and blocks damaged on site. The right wastage factor depends on the complexity of your project:
        </p>

        <ul>
          <li><strong>Simple straight wall (no openings):</strong> 5% wastage — minimal cuts needed, mostly full blocks.</li>
          <li><strong>Wall with doors and windows:</strong> 7–10% wastage — cuts around openings increase waste. L-blocks and half-blocks help but don&apos;t eliminate it.</li>
          <li><strong>Complex layout (corners, curves, steps):</strong> 10–15% wastage — frequent cuts, odd angles, and more breakage potential.</li>
          <li><strong>DIY projects:</strong> Add an extra 3–5% — less experienced masons break more blocks during cutting and handling.</li>
        </ul>

        <p>
          <strong>Delivery breakage:</strong> Reputable suppliers typically absorb 1–2% breakage during transport. Always inspect your delivery — reject cracked or chipped blocks before the truck leaves. A standard pallet holds 90–108 standard 8×8×16 blocks.
        </p>

        <h2>Complete Cost Breakdown: Block Wall Projects</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Material Costs per 100 Square Feet of Wall</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Item</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">8×8×16 CMU blocks</td>
                <td className="py-2">~120 blocks</td>
                <td className="py-2">$240–$420</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Type S mortar</td>
                <td className="py-2">3.5–4 bags</td>
                <td className="py-2">$25–$36</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Rebar (#4, vertical)</td>
                <td className="py-2">6–8 pieces (4 ft)</td>
                <td className="py-2">$30–$50</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Grout fill (cores)</td>
                <td className="py-2">0.5 cu yd</td>
                <td className="py-2">$60–$85</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Horizontal reinforcement</td>
                <td className="py-2">Ladder wire, every 2nd course</td>
                <td className="py-2">$20–$35</td>
              </tr>
              <tr className="border-b font-semibold">
                <td className="py-2">Materials total</td>
                <td className="py-2">—</td>
                <td className="py-2">$375–$626</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Labor Costs</h3>

        <p>
          An experienced mason can lay 40–65 standard blocks per hour (with a laborer mixing mortar and handling materials). For a crew of one mason + one laborer:
        </p>

        <ul>
          <li><strong>Production rate:</strong> 400–500 blocks per 8-hour day = ~350–450 sq ft of wall</li>
          <li><strong>Mason hourly rate:</strong> $35–$65/hour (varies by region)</li>
          <li><strong>Laborer hourly rate:</strong> $18–$30/hour</li>
          <li><strong>Per-block installed cost:</strong> $0.80–$1.50 (labor only)</li>
          <li><strong>Per-sq-ft installed cost:</strong> $10–$25 (materials + labor)</li>
        </ul>

        <h3>DIY vs. Contractor Pricing</h3>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Cost Comparison: 200 sq ft Block Wall</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Cost Component</th>
                <th className="text-left py-2">DIY</th>
                <th className="text-left py-2">Contractor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Blocks (225 + wastage)</td>
                <td className="py-2">$500–$875</td>
                <td className="py-2">$450–$790</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Mortar &amp; grout</td>
                <td className="py-2">$120–$180</td>
                <td className="py-2">$100–$160</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Rebar &amp; reinforcement</td>
                <td className="py-2">$80–$150</td>
                <td className="py-2">$70–$130</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Tool rental (saw, mixer)</td>
                <td className="py-2">$100–$200</td>
                <td className="py-2">$0 (owned)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Labor</td>
                <td className="py-2">$0 (your time)</td>
                <td className="py-2">$1,400–$3,000</td>
              </tr>
              <tr className="border-b font-semibold">
                <td className="py-2">Total</td>
                <td className="py-2">$800–$1,405</td>
                <td className="py-2">$2,020–$4,080</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Per sq ft</td>
                <td className="py-2">$4.00–$7.03</td>
                <td className="py-2">$10.10–$20.40</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            DIY saves 50–65% but expect 3–4× longer. A contractor crew builds 200 sq ft in 1–2 days; a DIYer may need 4–7 days.
          </p>
        </div>

        <h2>Block Types: Choosing the Right CMU</h2>

        <p>
          Not all blocks are created equal. Beyond the basic stretcher block, there are specialty units designed for specific applications:
        </p>

        <h3>Standard Stretcher Block</h3>
        <p>
          The workhorse. Two-core hollow block with flanged ends that accept mortar. This is 90% of what you&apos;ll use in any wall. Available in all widths (4&quot; through 12&quot;). Weight: 28–55 lbs depending on width and density.
        </p>

        <h3>Corner/Pilaster Block</h3>
        <p>
          One flat end for clean corners and wall terminations. Also called &quot;single bullnose&quot; blocks. Plan for corners in your takeoff — you&apos;ll need 2 corner blocks per course at each corner.
        </p>

        <h3>Bond Beam Block</h3>
        <p>
          U-shaped channel in the top to accept horizontal rebar and grout. Required at the top course of most walls and at every 4 ft of height per code. These cost 20–30% more than standard stretchers.
        </p>

        <h3>Lintel Block</h3>
        <p>
          U-shaped blocks used above door and window openings to create a structural beam. Filled with rebar and grout, they span openings up to 4 ft without a steel lintel. Wider openings require steel or precast lintels.
        </p>

        <h3>Split-Face &amp; Ground-Face Block</h3>
        <p>
          Decorative blocks with textured or polished faces. Split-face has a rough, stone-like appearance ($3.50–$6.00 each). Ground-face has a smooth, exposed-aggregate finish ($5.00–$8.00 each). Both eliminate the need for stucco or paint.
        </p>

        <h2>Reinforcement Requirements</h2>

        <p>
          Building codes require steel reinforcement in most block walls. The specifics depend on your location (seismic zone), wall height, and whether the wall is load-bearing. Here are the general requirements:
        </p>

        <ul>
          <li><strong>Vertical rebar:</strong> #4 (1/2&quot;) bars at 48&quot; on center minimum. In seismic zones, 32&quot; or 24&quot; on center. Bars extend from the footing through the full wall height.</li>
          <li><strong>Horizontal reinforcement:</strong> Ladder wire or joint reinforcement every 16&quot; (every other course). Bond beams with #4 rebar at 48&quot; vertical spacing.</li>
          <li><strong>Grouted cores:</strong> All cells containing rebar must be grouted solid. In high-seismic zones (SDC D, E, F), all cores must be grouted.</li>
          <li><strong>Footing connection:</strong> Vertical rebar must be doweled into the footing with proper development length (typically 24–36 bar diameters).</li>
        </ul>

        <p>
          Check with your local building department — reinforcement requirements vary significantly by jurisdiction. Our <Link href="/calculators/rebar" className="text-orange-600 hover:underline">rebar calculator</Link> can help you estimate reinforcement quantities once you know the spacing requirements.
        </p>

        <h2>Step-by-Step: Building a Block Wall</h2>

        <ol>
          <li><strong>Pour the footing:</strong> The footing should be at least twice as wide as the block wall and 8&quot; deep minimum. Set vertical rebar dowels at the correct spacing before the concrete sets. Use our <Link href="/calculators/footing" className="text-orange-600 hover:underline">footing calculator</Link> to estimate concrete volume.</li>
          <li><strong>Dry-lay the first course:</strong> Set blocks without mortar to check spacing and layout. Mark block positions with chalk. Adjust for openings and corners. Cut blocks as needed with a masonry saw.</li>
          <li><strong>Lay the first course in mortar:</strong> Spread a full mortar bed on the footing. Set corner blocks first, then stretch a mason&apos;s line between corners and fill in the course. Level each block in all directions. The first course is the most critical — take your time.</li>
          <li><strong>Build up corners:</strong> Lay 3–4 courses at each corner (racking up), then fill in between using a string line for alignment. Check plumb with every course.</li>
          <li><strong>Install reinforcement:</strong> Thread rebar through cores as you go. Install horizontal ladder wire on top of every other course (in the mortar bed). Install bond beam blocks and rebar at specified heights.</li>
          <li><strong>Grout cores:</strong> Pour grout into all reinforced cells. Consolidate with a vibrator or pencil rod to eliminate voids. Fill in lifts of 4 ft maximum.</li>
          <li><strong>Tool joints:</strong> Strike mortar joints when they&apos;re &quot;thumbprint&quot; hard. Use a concave jointer for the best weather resistance. Brush off loose mortar after tooling.</li>
          <li><strong>Cap the wall:</strong> Install cap blocks or pour a concrete bond beam at the top. This is also where your top-of-wall reinforcement goes.</li>
        </ol>

        <h2>Common Block Wall Mistakes</h2>

        <ol>
          <li><strong>No footing or inadequate footing:</strong> A block wall without a proper footing will crack and shift. Never build directly on grade — pour a footing at least twice the wall width and below the frost line.</li>
          <li><strong>Uneven first course:</strong> If the first course isn&apos;t perfectly level, every subsequent course amplifies the error. Shim with mortar, not with pieces of broken block.</li>
          <li><strong>Skipping reinforcement:</strong> Unreinforced block walls are extremely weak in lateral loading (wind, soil pressure). Even a garden wall should have minimal rebar, and retaining walls absolutely require engineered reinforcement.</li>
          <li><strong>Incorrect mortar consistency:</strong> Mortar should hold its shape when troweled but be workable enough to squeeze out when a block is pressed into it. Too wet = blocks slide. Too dry = poor bond.</li>
          <li><strong>Not ordering enough:</strong> Running out of blocks mid-project means delays and potentially different-looking blocks from a different batch. Always add your wastage factor and round up to the next full pallet.</li>
          <li><strong>Ignoring drainage:</strong> Retaining walls need drainage behind them (gravel backfill + weep holes or drain pipe). Without drainage, hydrostatic pressure will eventually push the wall over.</li>
        </ol>

        <h2>Block Calculator for Common Projects</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Reference: Blocks Needed by Project Type</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Typical Dimensions</th>
                <th className="text-left py-2">Wall Area</th>
                <th className="text-left py-2">Blocks (w/ 7% waste)</th>
                <th className="text-left py-2">Material Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Garden wall</td>
                <td className="py-2">20 ft × 3 ft</td>
                <td className="py-2">60 sq ft</td>
                <td className="py-2">72</td>
                <td className="py-2">$200–$380</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Retaining wall</td>
                <td className="py-2">30 ft × 4 ft</td>
                <td className="py-2">120 sq ft</td>
                <td className="py-2">144</td>
                <td className="py-2">$430–$780</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Garage foundation</td>
                <td className="py-2">80 ft perimeter × 4 ft</td>
                <td className="py-2">320 sq ft</td>
                <td className="py-2">385</td>
                <td className="py-2">$1,150–$2,100</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Privacy wall</td>
                <td className="py-2">50 ft × 6 ft</td>
                <td className="py-2">300 sq ft</td>
                <td className="py-2">361</td>
                <td className="py-2">$1,080–$1,960</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Basement walls</td>
                <td className="py-2">140 ft perimeter × 8 ft</td>
                <td className="py-2">1,120 sq ft</td>
                <td className="py-2">1,348</td>
                <td className="py-2">$4,040–$7,340</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            Material costs include blocks, mortar, rebar, and grout. Does not include footing costs or labor.
          </p>
        </div>

        <h2>Tips for Ordering Blocks</h2>

        <ul>
          <li><strong>Order by the pallet:</strong> Pallets of 90–108 blocks are significantly cheaper per unit than buying individually. Many suppliers offer free delivery for full-pallet orders.</li>
          <li><strong>Check lead times:</strong> Standard gray blocks are usually in stock. Colored, split-face, or specialty blocks may require 2–4 weeks lead time.</li>
          <li><strong>Inspect on delivery:</strong> Check for cracks, chips, and dimensional consistency. A few broken blocks per pallet are normal — more than 3–4% should be reported to the supplier.</li>
          <li><strong>Store properly:</strong> Keep blocks off the ground on pallets and covered with tarps. Wet blocks are harder to bond with mortar and can cause efflorescence.</li>
          <li><strong>Buy mortar at the same time:</strong> Ordering everything together saves delivery charges. Most masonry suppliers stock both blocks and mortar.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 not-prose my-8 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900">How many concrete blocks do I need for a 1,000 sq ft wall?</h4>
            <p className="text-gray-700 mt-1">For a 1,000 sq ft wall using standard 8×8×16 blocks: 1,000 × 1.125 = 1,125 blocks. Add 7% wastage: ~1,204 blocks. That&apos;s about 12–13 pallets of standard blocks, costing $2,400–$4,200 for blocks alone.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">What is the difference between a concrete block and a cinder block?</h4>
            <p className="text-gray-700 mt-1">True cinder blocks used coal ash (cinders) as aggregate and are no longer manufactured. Modern &quot;cinder blocks&quot; are actually concrete masonry units (CMUs) made with Portland cement, aggregate, and water. The terms are used interchangeably in everyday speech, but technically they&apos;re different products.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How many bags of mortar do I need per 100 blocks?</h4>
            <p className="text-gray-700 mt-1">For standard 8×8×16 blocks with 3/8&quot; joints: approximately 3–3.5 bags of 80-lb premixed Type S mortar per 100 blocks. This accounts for both bed joints and head joints plus typical jobsite waste.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can I build a block wall without a footing?</h4>
            <p className="text-gray-700 mt-1">No — never build a structural block wall without a concrete footing. The footing distributes the wall&apos;s weight and prevents settling and cracking. Even a small garden wall should sit on a compacted gravel base or a shallow concrete footing. Building codes require footings for any structural wall.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">How tall can I build a concrete block wall?</h4>
            <p className="text-gray-700 mt-1">Without engineering, most codes limit unreinforced 8&quot; block walls to about 4 feet. With proper reinforcement (vertical rebar at 48&quot; o.c., horizontal at 48&quot; o.c., grouted cores), 8&quot; block walls can reach 12–16 feet or more. Walls over 6 feet generally need a building permit and may require an engineer&apos;s stamp.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Should I use 8-inch or 12-inch blocks for a retaining wall?</h4>
            <p className="text-gray-700 mt-1">For retaining walls under 4 feet, 8-inch blocks with proper reinforcement and drainage are typically sufficient. For walls 4–8 feet, 12-inch blocks are usually required to handle the lateral soil pressure. Any retaining wall over 4 feet should be designed by a structural engineer — the consequences of failure are serious.</p>
          </div>
        </div>

        <h2>Related Resources</h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Continue Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>📐 <Link href="/calculators/block" className="text-orange-600 hover:underline font-medium">Concrete Block Calculator</Link> — Get an instant block count for your project</li>
            <li>📐 <Link href="/calculators/footing" className="text-orange-600 hover:underline font-medium">Footing Calculator</Link> — Estimate concrete for your wall footing</li>
            <li>📐 <Link href="/calculators/rebar" className="text-orange-600 hover:underline font-medium">Rebar Calculator</Link> — Calculate reinforcement quantities</li>
            <li>📖 <Link href="/blog/concrete-retaining-wall-cost" className="text-orange-600 hover:underline font-medium">Retaining Wall Cost Guide</Link> — Complete pricing for retaining walls</li>
            <li>📖 <Link href="/blog/concrete-foundation-cost-guide" className="text-orange-600 hover:underline font-medium">Foundation Cost Guide</Link> — Foundation pricing by type</li>
            <li>📖 <Link href="/blog/concrete-cost-per-yard" className="text-orange-600 hover:underline font-medium">Concrete Cost Per Yard</Link> — Current concrete pricing</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Help Estimating Your Block Project?</h3>
          <p className="text-gray-300 mb-6">Our Pro Estimate Templates include block wall bid sheets, material takeoff calculators, and client-ready proposals.</p>
          <Link href="/templates" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get Pro Templates →
          </Link>
        </div>
      </article>
    </div>
  );
}
