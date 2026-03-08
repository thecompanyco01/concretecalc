import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Rebar Size Chart: Grades, Weights & Specifications (2026) | EstimateConcrete",
  description:
    "Rebar size chart with all sizes #3-#18: weight per foot, diameter, cross-sectional area, grades (40/60/75), spacing charts, and when to use each size. The definitive reference for concrete contractors.",
  keywords:
    "rebar size chart, rebar sizes, rebar weight per foot, rebar grades, rebar diameter chart, rebar spacing chart, rebar specifications, rebar size guide",
};

export default function RebarSizeChartGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Rebar Size Chart</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Complete Rebar Size Chart: Grades, Weights &amp; Specifications for Concrete Contractors (2026)</h1>

        <p className="lead text-lg text-slate-600">
          Rebar (reinforcing bar) is the backbone of structural concrete. Choosing the wrong size means either an over-engineered pour that wastes money or an under-reinforced structure that cracks and fails. This guide covers every standard rebar size from #3 through #18, with weights per foot, diameters, cross-sectional areas, grade specifications, spacing requirements, and practical guidance on when to use each size. Bookmark this page — you&apos;ll reference it on every job.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Need to estimate rebar for a project?</strong> Use our <Link href="/calculators/rebar" className="text-blue-700 underline">free rebar calculator</Link> to get exact quantities, weights, and costs based on your slab dimensions and spacing requirements.
          </p>
        </div>

        <h2>Standard Rebar Size Chart (ASTM A615)</h2>
        <p>
          The U.S. rebar sizing system uses bar numbers that correspond to the bar&apos;s diameter in eighths of an inch. A #3 bar is 3/8&quot; in diameter, a #4 bar is 4/8&quot; (1/2&quot;), and so on. This system applies to sizes #3 through #8. Sizes #9 through #18 are based on the cross-sectional areas of former 1-inch-square, 1-1/8&quot;-square, and larger square bars.
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Bar Size</th>
                <th className="p-3 text-center">Diameter (in)</th>
                <th className="p-3 text-center">Diameter (mm)</th>
                <th className="p-3 text-center">Weight (lb/ft)</th>
                <th className="p-3 text-center">Weight (kg/m)</th>
                <th className="p-3 text-center">Area (in²)</th>
                <th className="p-3 text-center">Perimeter (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#3</td>
                <td className="p-3 text-center">0.375</td>
                <td className="p-3 text-center">9.525</td>
                <td className="p-3 text-center">0.376</td>
                <td className="p-3 text-center">0.560</td>
                <td className="p-3 text-center">0.11</td>
                <td className="p-3 text-center">1.178</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#4</td>
                <td className="p-3 text-center">0.500</td>
                <td className="p-3 text-center">12.700</td>
                <td className="p-3 text-center">0.668</td>
                <td className="p-3 text-center">0.994</td>
                <td className="p-3 text-center">0.20</td>
                <td className="p-3 text-center">1.571</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#5</td>
                <td className="p-3 text-center">0.625</td>
                <td className="p-3 text-center">15.875</td>
                <td className="p-3 text-center">1.043</td>
                <td className="p-3 text-center">1.552</td>
                <td className="p-3 text-center">0.31</td>
                <td className="p-3 text-center">1.963</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#6</td>
                <td className="p-3 text-center">0.750</td>
                <td className="p-3 text-center">19.050</td>
                <td className="p-3 text-center">1.502</td>
                <td className="p-3 text-center">2.235</td>
                <td className="p-3 text-center">0.44</td>
                <td className="p-3 text-center">2.356</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#7</td>
                <td className="p-3 text-center">0.875</td>
                <td className="p-3 text-center">22.225</td>
                <td className="p-3 text-center">2.044</td>
                <td className="p-3 text-center">3.042</td>
                <td className="p-3 text-center">0.60</td>
                <td className="p-3 text-center">2.749</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#8</td>
                <td className="p-3 text-center">1.000</td>
                <td className="p-3 text-center">25.400</td>
                <td className="p-3 text-center">2.670</td>
                <td className="p-3 text-center">3.973</td>
                <td className="p-3 text-center">0.79</td>
                <td className="p-3 text-center">3.142</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#9</td>
                <td className="p-3 text-center">1.128</td>
                <td className="p-3 text-center">28.651</td>
                <td className="p-3 text-center">3.400</td>
                <td className="p-3 text-center">5.059</td>
                <td className="p-3 text-center">1.00</td>
                <td className="p-3 text-center">3.544</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#10</td>
                <td className="p-3 text-center">1.270</td>
                <td className="p-3 text-center">32.258</td>
                <td className="p-3 text-center">4.303</td>
                <td className="p-3 text-center">6.404</td>
                <td className="p-3 text-center">1.27</td>
                <td className="p-3 text-center">3.990</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#11</td>
                <td className="p-3 text-center">1.410</td>
                <td className="p-3 text-center">35.814</td>
                <td className="p-3 text-center">5.313</td>
                <td className="p-3 text-center">7.907</td>
                <td className="p-3 text-center">1.56</td>
                <td className="p-3 text-center">4.430</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#14</td>
                <td className="p-3 text-center">1.693</td>
                <td className="p-3 text-center">43.002</td>
                <td className="p-3 text-center">7.650</td>
                <td className="p-3 text-center">11.384</td>
                <td className="p-3 text-center">2.25</td>
                <td className="p-3 text-center">5.320</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#18</td>
                <td className="p-3 text-center">2.257</td>
                <td className="p-3 text-center">57.328</td>
                <td className="p-3 text-center">13.600</td>
                <td className="p-3 text-center">20.239</td>
                <td className="p-3 text-center">4.00</td>
                <td className="p-3 text-center">7.091</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Note:</strong> Sizes #12, #13, #15, #16, and #17 are not standard in the ASTM A615 specification. The system jumps from #11 to #14 to #18. These large bars (#14 and #18) are specialty items typically used only in heavy civil and commercial construction — you won&apos;t find them at a typical rebar supplier without a special order.
        </p>

        <h2>Rebar Grades Explained</h2>
        <p>
          The &quot;grade&quot; of rebar refers to its minimum yield strength in ksi (thousands of pounds per square inch). Higher grade = stronger steel = more load capacity per bar. But higher grade doesn&apos;t always mean &quot;better&quot; — it depends on the application.
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Grade</th>
                <th className="p-3 text-center">Yield Strength (ksi)</th>
                <th className="p-3 text-center">Tensile Strength (ksi)</th>
                <th className="p-3 text-center">ASTM Standard</th>
                <th className="p-3 text-left">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Grade 40</td>
                <td className="p-3 text-center">40</td>
                <td className="p-3 text-center">60</td>
                <td className="p-3 text-center">A615</td>
                <td className="p-3">Light residential, non-structural slabs, patios, sidewalks. Being phased out — hard to find in many markets.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Grade 60</td>
                <td className="p-3 text-center">60</td>
                <td className="p-3 text-center">90</td>
                <td className="p-3 text-center">A615</td>
                <td className="p-3">The industry standard. Used in 90%+ of residential and commercial construction. Foundations, walls, columns, beams, slabs.</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Grade 75</td>
                <td className="p-3 text-center">75</td>
                <td className="p-3 text-center">100</td>
                <td className="p-3 text-center">A615</td>
                <td className="p-3">Heavy commercial, bridges, high-rise buildings. Allows smaller bar sizes for same load capacity. Specialty order.</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Grade 80</td>
                <td className="p-3 text-center">80</td>
                <td className="p-3 text-center">105</td>
                <td className="p-3 text-center">A615</td>
                <td className="p-3">High-performance structures, seismic zones, heavy civil projects. Growing in popularity for reducing rebar congestion.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Grade 40 vs Grade 60: What&apos;s the Practical Difference?</h3>
        <p>
          Grade 60 rebar has 50% higher yield strength than Grade 40. In practice, this means you can use the same bar size to carry 50% more load — or use a smaller bar size for the same load. Since Grade 60 costs only about 5–10% more per ton than Grade 40, and Grade 40 is increasingly hard to source, Grade 60 has become the de facto standard for virtually all concrete construction.
        </p>
        <p>
          <strong>Important:</strong> Never substitute Grade 40 where plans specify Grade 60. The engineer designed the reinforcement around a specific yield strength. Using a lower grade changes the structural capacity of the member and can be a code violation. If your supplier can only get Grade 40, contact the engineer of record for a redesign.
        </p>

        <h3>When to Use Grade 75 or Higher</h3>
        <p>
          Grade 75 and Grade 80 rebar are specialty products. You&apos;ll encounter them on:
        </p>
        <ul>
          <li><strong>High-rise buildings</strong> — columns and shear walls where rebar congestion is a problem. Higher grade means fewer, smaller bars for the same capacity.</li>
          <li><strong>Bridges and heavy civil</strong> — long spans and heavy live loads require maximum steel strength per bar.</li>
          <li><strong>Seismic zones</strong> — some seismic design codes specify Grade 80 for ductility requirements in special moment frames.</li>
          <li><strong>Precast/prestressed concrete</strong> — where high-strength reinforcement complements high-strength concrete.</li>
        </ul>
        <p>
          For typical residential and light commercial work (slabs, footings, driveways, patios, retaining walls), Grade 60 is all you need. Don&apos;t over-spec the grade — it won&apos;t add meaningful strength to a 4&quot; slab on grade.
        </p>

        <h2>Rebar Markings: How to Read Them</h2>
        <p>
          Every rebar has rolled-in markings along its length that tell you exactly what you&apos;re working with. Here&apos;s how to read them:
        </p>
        <ul>
          <li><strong>First mark — Producing mill:</strong> A letter or symbol identifying the manufacturer (e.g., &quot;C&quot; for CMC, &quot;N&quot; for Nucor).</li>
          <li><strong>Second mark — Bar size:</strong> The bar number (#4, #5, etc.).</li>
          <li><strong>Third mark — Steel type:</strong> &quot;S&quot; for carbon steel (A615), &quot;W&quot; for low-alloy steel (A706), &quot;SS&quot; for stainless, &quot;R&quot; for rail steel, &quot;A&quot; for axle steel.</li>
          <li><strong>Fourth mark — Grade:</strong> Either a number (60, 75, 80) or a system of line marks. One line = Grade 40, two lines = Grade 60, three lines = Grade 75.</li>
        </ul>
        <p>
          <strong>Pro tip:</strong> When rebar arrives on site, always check the markings against the structural drawings. Wrong grade or wrong size is one of the most common inspection failures. It takes 30 seconds to verify and can save you from a costly tear-out.
        </p>

        <h2>When to Use Each Rebar Size</h2>
        <p>
          Here&apos;s a practical guide to which rebar sizes are used for common concrete applications. These are general guidelines — always follow the structural engineer&apos;s specifications for your specific project.
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Application</th>
                <th className="p-3 text-center">Typical Bar Size</th>
                <th className="p-3 text-center">Typical Spacing</th>
                <th className="p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Sidewalks (4&quot;)</td>
                <td className="p-3 text-center">#3</td>
                <td className="p-3 text-center">18&quot; o.c. both ways</td>
                <td className="p-3">Often welded wire mesh (6×6-W1.4×W1.4) is used instead</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Patios (4&quot;)</td>
                <td className="p-3 text-center">#3 or #4</td>
                <td className="p-3 text-center">18&quot; o.c. both ways</td>
                <td className="p-3">Fiber mesh is common alternative for non-structural patios</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Driveways (5–6&quot;)</td>
                <td className="p-3 text-center">#4</td>
                <td className="p-3 text-center">12–18&quot; o.c. both ways</td>
                <td className="p-3">12&quot; spacing for heavy vehicles, 18&quot; for passenger cars</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Garage Slabs (4–5&quot;)</td>
                <td className="p-3 text-center">#4</td>
                <td className="p-3 text-center">16–18&quot; o.c. both ways</td>
                <td className="p-3">Thickened edge at garage door opening with #5 bars</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Residential Footings</td>
                <td className="p-3 text-center">#4 or #5</td>
                <td className="p-3 text-center">2 bars continuous</td>
                <td className="p-3">Most codes require minimum 2 continuous #4 bars in strip footings</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Foundation Walls (8&quot;)</td>
                <td className="p-3 text-center">#4 or #5</td>
                <td className="p-3 text-center">12–16&quot; o.c. vertical, 24–48&quot; horizontal</td>
                <td className="p-3">Closer spacing for taller walls or high soil pressure</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Retaining Walls</td>
                <td className="p-3 text-center">#4 to #6</td>
                <td className="p-3 text-center">8–12&quot; o.c.</td>
                <td className="p-3">Size depends on wall height and soil conditions; always engineered</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Columns (Residential)</td>
                <td className="p-3 text-center">#5 or #6</td>
                <td className="p-3 text-center">4–6 vertical bars</td>
                <td className="p-3">#3 ties at 12&quot; o.c. typical for residential columns</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Commercial Foundations</td>
                <td className="p-3 text-center">#6 to #8</td>
                <td className="p-3 text-center">Per structural plans</td>
                <td className="p-3">Always per engineered design; no rules of thumb for commercial</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Beams &amp; Lintels</td>
                <td className="p-3 text-center">#6 to #9</td>
                <td className="p-3 text-center">Per structural plans</td>
                <td className="p-3">Bottom bars carry tension; top bars resist negative moment at supports</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Bridge Decks</td>
                <td className="p-3 text-center">#5 to #8</td>
                <td className="p-3 text-center">4–6&quot; o.c. top and bottom</td>
                <td className="p-3">Epoxy-coated mandatory in most jurisdictions</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Heavy Civil / Piers</td>
                <td className="p-3 text-center">#9 to #18</td>
                <td className="p-3 text-center">Per structural plans</td>
                <td className="p-3">#14 and #18 are specialty; require mechanical splices</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Estimating footings?</strong> Our <Link href="/calculators/footing" className="text-blue-700 underline">footing calculator</Link> factors in rebar requirements to give you complete material lists and cost estimates.
          </p>
        </div>

        <h2>Rebar Spacing Charts</h2>
        <p>
          Rebar spacing is specified in the structural plans as &quot;o.c.&quot; (on center), meaning the distance from the center of one bar to the center of the next. The right spacing depends on the slab thickness, loads, soil conditions, and local building codes.
        </p>

        <h3>Reinforcement Ratio by Spacing</h3>
        <p>
          The following chart shows the steel area provided per foot of slab width for different bar sizes and spacings. This is what engineers use to design reinforcement — they calculate the required steel area (As) and then select a bar size and spacing that provides at least that much steel.
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Spacing (in, o.c.)</th>
                <th className="p-3 text-center">#3 (in²/ft)</th>
                <th className="p-3 text-center">#4 (in²/ft)</th>
                <th className="p-3 text-center">#5 (in²/ft)</th>
                <th className="p-3 text-center">#6 (in²/ft)</th>
                <th className="p-3 text-center">#7 (in²/ft)</th>
                <th className="p-3 text-center">#8 (in²/ft)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">4&quot;</td>
                <td className="p-3 text-center">0.33</td>
                <td className="p-3 text-center">0.60</td>
                <td className="p-3 text-center">0.93</td>
                <td className="p-3 text-center">1.32</td>
                <td className="p-3 text-center">1.80</td>
                <td className="p-3 text-center">2.37</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">6&quot;</td>
                <td className="p-3 text-center">0.22</td>
                <td className="p-3 text-center">0.40</td>
                <td className="p-3 text-center">0.62</td>
                <td className="p-3 text-center">0.88</td>
                <td className="p-3 text-center">1.20</td>
                <td className="p-3 text-center">1.58</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">8&quot;</td>
                <td className="p-3 text-center">0.17</td>
                <td className="p-3 text-center">0.30</td>
                <td className="p-3 text-center">0.46</td>
                <td className="p-3 text-center">0.66</td>
                <td className="p-3 text-center">0.90</td>
                <td className="p-3 text-center">1.19</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">10&quot;</td>
                <td className="p-3 text-center">0.13</td>
                <td className="p-3 text-center">0.24</td>
                <td className="p-3 text-center">0.37</td>
                <td className="p-3 text-center">0.53</td>
                <td className="p-3 text-center">0.72</td>
                <td className="p-3 text-center">0.95</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">12&quot;</td>
                <td className="p-3 text-center">0.11</td>
                <td className="p-3 text-center">0.20</td>
                <td className="p-3 text-center">0.31</td>
                <td className="p-3 text-center">0.44</td>
                <td className="p-3 text-center">0.60</td>
                <td className="p-3 text-center">0.79</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">16&quot;</td>
                <td className="p-3 text-center">0.08</td>
                <td className="p-3 text-center">0.15</td>
                <td className="p-3 text-center">0.23</td>
                <td className="p-3 text-center">0.33</td>
                <td className="p-3 text-center">0.45</td>
                <td className="p-3 text-center">0.59</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">18&quot;</td>
                <td className="p-3 text-center">0.07</td>
                <td className="p-3 text-center">0.13</td>
                <td className="p-3 text-center">0.21</td>
                <td className="p-3 text-center">0.29</td>
                <td className="p-3 text-center">0.40</td>
                <td className="p-3 text-center">0.53</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">24&quot;</td>
                <td className="p-3 text-center">0.06</td>
                <td className="p-3 text-center">0.10</td>
                <td className="p-3 text-center">0.15</td>
                <td className="p-3 text-center">0.22</td>
                <td className="p-3 text-center">0.30</td>
                <td className="p-3 text-center">0.39</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Maximum Spacing Rules (ACI 318)</h3>
        <p>
          ACI 318 (Building Code Requirements for Structural Concrete) sets maximum spacing limits for reinforcement. These are non-negotiable — even if the calculated steel area would allow wider spacing, you can&apos;t exceed these limits:
        </p>
        <ul>
          <li><strong>Slabs on grade:</strong> Maximum spacing = 5 × slab thickness, or 18 inches, whichever is less. For a 4&quot; slab, max spacing = 18&quot; (since 5 × 4 = 20&quot; exceeds 18&quot;).</li>
          <li><strong>Structural slabs:</strong> Maximum spacing = 3 × slab thickness, or 18 inches, whichever is less.</li>
          <li><strong>Walls:</strong> Maximum vertical spacing = 3 × wall thickness, or 18 inches. Maximum horizontal spacing = 3 × wall thickness, or 18 inches.</li>
          <li><strong>Temperature &amp; shrinkage steel:</strong> Maximum spacing = 5 × slab thickness, or 18 inches.</li>
        </ul>

        <h2>Rebar Lap Splice Lengths</h2>
        <p>
          When rebar isn&apos;t long enough to run the full length of a member, bars must overlap (lap splice) to transfer the load from one bar to the next. The required lap length depends on the bar size, concrete strength, bar coating, and the type of splice (tension vs. compression).
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Bar Size</th>
                <th className="p-3 text-center">Class A Splice (in)</th>
                <th className="p-3 text-center">Class B Splice (in)</th>
                <th className="p-3 text-center">Compression Splice (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#3</td>
                <td className="p-3 text-center">12&quot;</td>
                <td className="p-3 text-center">18&quot;</td>
                <td className="p-3 text-center">12&quot;</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#4</td>
                <td className="p-3 text-center">18&quot;</td>
                <td className="p-3 text-center">24&quot;</td>
                <td className="p-3 text-center">15&quot;</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#5</td>
                <td className="p-3 text-center">23&quot;</td>
                <td className="p-3 text-center">30&quot;</td>
                <td className="p-3 text-center">19&quot;</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#6</td>
                <td className="p-3 text-center">27&quot;</td>
                <td className="p-3 text-center">36&quot;</td>
                <td className="p-3 text-center">23&quot;</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#7</td>
                <td className="p-3 text-center">32&quot;</td>
                <td className="p-3 text-center">42&quot;</td>
                <td className="p-3 text-center">26&quot;</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#8</td>
                <td className="p-3 text-center">36&quot;</td>
                <td className="p-3 text-center">48&quot;</td>
                <td className="p-3 text-center">30&quot;</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#9</td>
                <td className="p-3 text-center">41&quot;</td>
                <td className="p-3 text-center">54&quot;</td>
                <td className="p-3 text-center">34&quot;</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#10</td>
                <td className="p-3 text-center">46&quot;</td>
                <td className="p-3 text-center">61&quot;</td>
                <td className="p-3 text-center">38&quot;</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#11</td>
                <td className="p-3 text-center">51&quot;</td>
                <td className="p-3 text-center">68&quot;</td>
                <td className="p-3 text-center">42&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Note:</strong> Values above are for Grade 60 rebar in 3,000 psi normal-weight concrete with adequate cover. Class A splices are used when bars are spliced at locations of low stress (e.g., near the center of a beam span). Class B splices — the more conservative option — are required at locations of high stress or when more than half of the bars are spliced at the same location. Most field splices default to Class B. Bars #14 and #18 cannot be lap spliced — they require mechanical splices or welding.
        </p>

        <h2>Tie Wire Requirements</h2>
        <p>
          Tie wire holds rebar in position during the concrete pour. It&apos;s not structural — it&apos;s just there to keep the rebar from moving when concrete is placed and vibrated. But using the right tie wire and enough ties is critical for passing inspection and getting a quality placement.
        </p>

        <h3>Tie Wire Specifications</h3>
        <ul>
          <li><strong>Wire gauge:</strong> 16-gauge (0.0625&quot; diameter) is standard for #3 through #6 rebar. 15-gauge or 14-gauge for #7 and larger bars. Some contractors use 16.5-gauge as a cost compromise.</li>
          <li><strong>Material:</strong> Black annealed (soft) steel wire is the industry standard. Stainless steel tie wire is required for epoxy-coated rebar and marine/corrosive environments. PVC-coated wire is sometimes specified for exposed concrete.</li>
          <li><strong>Roll size:</strong> Standard rolls are 3.5 lb (approximately 340 feet for 16-gauge). Coil wire comes in 50-lb and 100-lb coils for high-volume work.</li>
          <li><strong>Consumption:</strong> Plan for approximately 5–8 lbs of tie wire per ton of rebar. For typical residential work, one 3.5-lb roll covers about 250–400 intersections.</li>
        </ul>

        <h3>Types of Rebar Ties</h3>
        <p>
          Different situations call for different tie types. Here are the four most common:
        </p>
        <ul>
          <li><strong>Snap tie (simple tie):</strong> The most common. Wrap wire diagonally around the intersection, twist once or twice, and snap off the excess. Used for horizontal mat reinforcement where bars won&apos;t shift significantly. Fast — an experienced ironworker can tie 200+ per hour.</li>
          <li><strong>Saddle tie (U-tie):</strong> Wire wraps around both bars in a figure-8 pattern. Stronger than a snap tie. Used for vertical/horizontal intersections and where bars must maintain exact position during the pour.</li>
          <li><strong>Wrap-and-saddle tie:</strong> Combines a full wrap with a saddle. The strongest hand tie. Required for heavy mats, walls, and any bar arrangement that tends to roll or shift. Slower but more secure.</li>
          <li><strong>Figure-8 tie:</strong> Wire wraps in a figure-8 around both bars. Good for large bar intersections (#6 and up) where the snap tie doesn&apos;t provide enough grip.</li>
        </ul>

        <h3>How Many Ties Do You Need?</h3>
        <ul>
          <li><strong>Slabs on grade:</strong> Tie every other intersection in a checkerboard pattern. This is standard practice and accepted by most inspectors. For a mat with 12&quot; spacing, that&apos;s roughly 0.5 ties per square foot.</li>
          <li><strong>Walls:</strong> Tie every intersection. Vertical rebar tends to shift more than horizontal mat, so every connection needs to be secured.</li>
          <li><strong>Columns and beams:</strong> Tie every intersection where ties meet longitudinal bars. Also tie the corners of stirrups/ties securely.</li>
          <li><strong>Epoxy-coated rebar:</strong> Tie every intersection. The smooth coating is slippery, and untied bars will shift easily during the pour. Use plastic-tipped or stainless steel tie wire to avoid damaging the epoxy coating.</li>
        </ul>

        <h2>Rebar Coatings &amp; Corrosion Protection</h2>
        <p>
          Standard black rebar corrodes when exposed to moisture, chlorides (road salt, seawater), or carbonation of the concrete cover. For environments where corrosion is a risk, several coating options are available:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Coating Type</th>
                <th className="p-3 text-center">Cost Premium</th>
                <th className="p-3 text-center">ASTM Standard</th>
                <th className="p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Black (uncoated)</td>
                <td className="p-3 text-center">Baseline</td>
                <td className="p-3 text-center">A615</td>
                <td className="p-3">Interior concrete, protected environments, adequate cover</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Epoxy-coated</td>
                <td className="p-3 text-center">+20–40%</td>
                <td className="p-3 text-center">A775 / A934</td>
                <td className="p-3">Bridge decks, parking garages, marine structures, coastal construction</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Galvanized</td>
                <td className="p-3 text-center">+40–60%</td>
                <td className="p-3 text-center">A767</td>
                <td className="p-3">Marine environments, water treatment, highly corrosive soils</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Stainless steel</td>
                <td className="p-3 text-center">+600–800%</td>
                <td className="p-3 text-center">A955</td>
                <td className="p-3">100-year design life structures, extreme corrosion environments</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">MMFX (ChrōmX)</td>
                <td className="p-3 text-center">+100–200%</td>
                <td className="p-3 text-center">A1035</td>
                <td className="p-3">High-performance alternative to epoxy, bridge decks, parking structures</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For most residential concrete work, standard black rebar with adequate concrete cover (minimum 3&quot; for ground contact per ACI 318) provides sufficient corrosion protection for the expected 50–75 year service life. Epoxy coating is mainly specified for infrastructure projects where deicing salts or marine exposure are factors.
        </p>

        <h2>Rebar Cover Requirements (ACI 318)</h2>
        <p>
          &quot;Cover&quot; is the distance from the nearest surface of the concrete to the nearest surface of the rebar. Adequate cover protects the steel from corrosion and fire. Insufficient cover is one of the top reasons for rebar-related concrete failures.
        </p>
        <ul>
          <li><strong>Cast against and permanently exposed to earth:</strong> 3&quot; minimum</li>
          <li><strong>Exposed to earth or weather (#6 through #18 bars):</strong> 2&quot; minimum</li>
          <li><strong>Exposed to earth or weather (#5 bars and smaller):</strong> 1-1/2&quot; minimum</li>
          <li><strong>Not exposed to weather or ground (slabs, walls, joists — #14 and #18):</strong> 1-1/2&quot; minimum</li>
          <li><strong>Not exposed to weather or ground (slabs, walls, joists — #11 and smaller):</strong> 3/4&quot; minimum</li>
          <li><strong>Beams, columns:</strong> 1-1/2&quot; minimum to stirrups/ties</li>
        </ul>
        <p>
          <strong>Practical tip:</strong> Use rebar chairs (supports) to maintain proper cover. Don&apos;t rely on &quot;pulling up the steel during the pour&quot; — it never works as well as you think. Common chair heights: 2&quot; for slabs on grade with 4&quot; thickness (places the bar at the correct position), 3&quot; for ground-contact surfaces. Chairs should be spaced every 3–4 feet in both directions.
        </p>

        <h2>Rebar Pricing &amp; Cost Estimating</h2>
        <p>
          Rebar pricing fluctuates with steel markets, but here are typical 2026 price ranges for planning purposes:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Bar Size</th>
                <th className="p-3 text-center">Price per 20&apos; Stick</th>
                <th className="p-3 text-center">Price per Foot</th>
                <th className="p-3 text-center">Price per Ton</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#3</td>
                <td className="p-3 text-center">$4.50–$7.00</td>
                <td className="p-3 text-center">$0.23–$0.35</td>
                <td className="p-3 text-center">$750–$1,000</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#4</td>
                <td className="p-3 text-center">$7.00–$11.00</td>
                <td className="p-3 text-center">$0.35–$0.55</td>
                <td className="p-3 text-center">$700–$950</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#5</td>
                <td className="p-3 text-center">$10.00–$16.00</td>
                <td className="p-3 text-center">$0.50–$0.80</td>
                <td className="p-3 text-center">$680–$920</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#6</td>
                <td className="p-3 text-center">$14.00–$22.00</td>
                <td className="p-3 text-center">$0.70–$1.10</td>
                <td className="p-3 text-center">$670–$900</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">#7</td>
                <td className="p-3 text-center">$19.00–$30.00</td>
                <td className="p-3 text-center">$0.95–$1.50</td>
                <td className="p-3 text-center">$660–$890</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">#8</td>
                <td className="p-3 text-center">$24.00–$38.00</td>
                <td className="p-3 text-center">$1.20–$1.90</td>
                <td className="p-3 text-center">$650–$880</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Note:</strong> Prices vary significantly by region, quantity, and market conditions. Steel prices have been volatile since 2021. Always get current quotes from your local rebar supplier. Prices above are for Grade 60 black (uncoated) rebar. Add 20–40% for epoxy-coated.
        </p>

        <h3>Quick Estimating Formula</h3>
        <p>
          For a quick rebar estimate on a slab or footing:
        </p>
        <ol>
          <li><strong>Calculate the number of bars:</strong> (Length ÷ spacing) + 1 for each direction. For a 20&apos; × 30&apos; slab with 12&quot; spacing: (20 ÷ 1) + 1 = 21 bars in the long direction, (30 ÷ 1) + 1 = 31 bars in the short direction.</li>
          <li><strong>Calculate total linear feet:</strong> 21 bars × 30&apos; + 31 bars × 20&apos; = 630 + 620 = 1,250 linear feet.</li>
          <li><strong>Calculate weight:</strong> 1,250 ft × weight per foot (e.g., 0.668 lb/ft for #4) = 835 lbs.</li>
          <li><strong>Add 10% for waste:</strong> 835 × 1.10 = 919 lbs (0.46 tons).</li>
          <li><strong>Calculate cost:</strong> 0.46 tons × $850/ton = $391 for material.</li>
        </ol>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Skip the math:</strong> Our <Link href="/calculators/rebar" className="text-blue-700 underline">rebar calculator</Link> handles all of this automatically. Enter your dimensions and spacing, and get instant quantities, weights, and cost estimates.
          </p>
        </div>

        <h2>Rebar Bending &amp; Fabrication</h2>
        <p>
          Field bending is common for residential work, but understanding bend requirements ensures you don&apos;t weaken the bar or violate code:
        </p>
        <ul>
          <li><strong>Minimum bend diameter:</strong> 6 × bar diameter for #3 through #8 bars. 8 × bar diameter for #9, #10, and #11. This prevents the steel from cracking on the inside of the bend.</li>
          <li><strong>Standard hook dimensions:</strong> A 90° standard hook has a 12-bar-diameter extension past the bend. A 180° hook has a 4-bar-diameter extension (minimum 2-1/2&quot;).</li>
          <li><strong>Field bending tools:</strong> Hand benders (hickeys) work for #3 and #4 bars. Ratchet benders handle #5 and #6. Electric/hydraulic benders are needed for #7 and larger.</li>
          <li><strong>Never heat bend:</strong> Heating rebar to bend it changes the metallurgical properties and can reduce yield strength by 20–40%. If a bar needs bending that can&apos;t be done cold, have it shop-fabricated.</li>
        </ul>

        <h2>Welded Wire Reinforcement (WWR) vs. Rebar</h2>
        <p>
          For light-duty applications (4&quot; slabs on grade, sidewalks, patios), welded wire reinforcement (WWR, also called welded wire mesh or WWF) is often used instead of rebar. Here&apos;s how they compare:
        </p>
        <ul>
          <li><strong>WWR advantages:</strong> Faster to install (one sheet vs. individual bars), self-spacing (no measuring between bars), lighter to handle, cheaper for thin slabs.</li>
          <li><strong>WWR disadvantages:</strong> Limited to lighter applications, difficult to maintain position during the pour (tends to end up on the bottom of the slab unless properly chaired), can&apos;t be easily customized in the field.</li>
          <li><strong>Common WWR sizes:</strong> 6×6-W1.4×W1.4 (light-duty equivalent of #3 at 6&quot; o.c.), 6×6-W2.9×W2.9 (medium-duty), 6×6-W4.0×W4.0 (heavy-duty equivalent of #4 at 6&quot; o.c.).</li>
          <li><strong>Rule of thumb:</strong> Use rebar for any slab thicker than 4&quot;, any structural slab, any slab carrying vehicle loads, and any application where the engineer specifies rebar. Use WWR for non-structural 4&quot; slabs where the reinforcement is primarily for crack control.</li>
        </ul>

        <h2>Fiber Reinforcement: Can It Replace Rebar?</h2>
        <p>
          Synthetic fiber (polypropylene) and steel fiber reinforcement are increasingly popular, but they serve a different purpose than rebar:
        </p>
        <ul>
          <li><strong>Fiber reinforcement controls:</strong> Plastic shrinkage cracking, early-age microcracking, surface spalling. It adds impact resistance and improves fire resistance.</li>
          <li><strong>Fiber does NOT replace:</strong> Structural rebar. Fibers provide no meaningful flexural strength. They don&apos;t resist the tension forces that rebar is designed to handle.</li>
          <li><strong>Where fiber makes sense:</strong> As a replacement for WWR in non-structural slabs on grade. As a supplement to rebar for added durability. In shotcrete/gunite applications.</li>
          <li><strong>Where fiber doesn&apos;t make sense:</strong> In footings, foundation walls, retaining walls, columns, beams, or any structural member. Don&apos;t let a concrete supplier talk you into replacing engineered rebar with fibers — it&apos;s a code violation.</li>
        </ul>

        <h2>Common Rebar Mistakes (and How to Avoid Them)</h2>
        <p>
          After talking to dozens of concrete inspectors and contractors, these are the most common rebar-related failures they see:
        </p>
        <ol>
          <li><strong>Wrong bar size or grade:</strong> Always verify markings against the structural plans before the pour. Catching it after the concrete is in means a tear-out.</li>
          <li><strong>Insufficient cover:</strong> Rebar sitting on the ground or too close to the form surface. Use proper chairs and inspect before the pour.</li>
          <li><strong>Missing or short lap splices:</strong> Bars that don&apos;t overlap enough to transfer load. Refer to the splice table above and add a few inches for safety.</li>
          <li><strong>Rebar not tied:</strong> Loose bars shift during the pour, ending up in wrong positions. Tie at least every other intersection for mats, every intersection for walls.</li>
          <li><strong>Contamination:</strong> Rebar covered in mud, oil, form release agent, or excessive rust. A light surface rust is actually good (improves bond), but loose, flaky rust or contamination must be cleaned off.</li>
          <li><strong>Missing dowels:</strong> Forgetting to install dowels at construction joints, wall-to-footing connections, or slab-to-wall intersections. These are the connections where concrete structures fail.</li>
          <li><strong>Cutting corners on inspection:</strong> The rebar inspection exists for a reason. Don&apos;t pour before the inspector signs off. If you have to wait a day for inspection, wait. It&apos;s cheaper than a failed test.</li>
        </ol>

        <h2>Rebar Storage &amp; Handling</h2>
        <p>
          Proper storage prevents damage and contamination:
        </p>
        <ul>
          <li><strong>Store off the ground:</strong> Use timbers, concrete blocks, or rebar horses. Ground contact = mud contamination and accelerated rust.</li>
          <li><strong>Keep it organized:</strong> Separate sizes and grades. Mixing #4 and #5 bars in the same bundle is a recipe for installation errors.</li>
          <li><strong>Protect epoxy-coated rebar:</strong> Epoxy coating is easily damaged. Store it on padded supports, don&apos;t drag it, and touch up any chips or scratches with the manufacturer&apos;s repair kit before placement.</li>
          <li><strong>Cover in wet weather:</strong> A tarp keeps rebar dry and prevents excessive surface rust. Some light surface rust is acceptable and even desirable (roughens the surface for better concrete bond), but heavy rust indicates material degradation.</li>
          <li><strong>Bundle sizes:</strong> Standard bundles are approximately 2 tons. Handling requires a forklift, crane, or boom truck. Plan your site logistics to position rebar near the work area to minimize double-handling.</li>
        </ul>

        <h2>Ordering Rebar: What to Tell Your Supplier</h2>
        <p>
          When ordering rebar, provide your supplier with these details for an accurate quote:
        </p>
        <ol>
          <li><strong>Bar size and grade:</strong> e.g., &quot;#5 Grade 60&quot;</li>
          <li><strong>Length:</strong> Standard stock lengths are 20 feet and 40 feet. Custom lengths may have a cutting charge.</li>
          <li><strong>Quantity:</strong> In pieces, linear feet, or tons. Most suppliers prefer tons for pricing.</li>
          <li><strong>Coating:</strong> Black (default), epoxy-coated, galvanized.</li>
          <li><strong>Bending:</strong> Straight stock or shop-bent to schedule. Shop bending adds $0.05–$0.15/lb but saves significant field time.</li>
          <li><strong>Delivery:</strong> Date needed, site access for delivery truck (40&apos; flatbed needs room to maneuver).</li>
          <li><strong>Accessories:</strong> Tie wire, chairs, caps (OSHA requires safety caps on all exposed vertical rebar).</li>
        </ol>

        <h2>OSHA Safety Requirements for Rebar</h2>
        <p>
          OSHA has specific safety requirements for rebar on construction sites:
        </p>
        <ul>
          <li><strong>Impalement protection:</strong> All protruding rebar (vertical bars in footings, dowels, column starters) must be guarded with rebar caps, troughs, or wooden covers to prevent impalement injuries. This is OSHA 1926.701(b) — one of the most commonly cited violations on concrete jobsites.</li>
          <li><strong>Fall protection:</strong> Workers placing rebar at heights of 6 feet or more must have fall protection (guardrails, safety nets, or personal fall arrest systems).</li>
          <li><strong>Handling:</strong> Use proper lifting techniques. A bundle of #5 rebar (2 tons) requires mechanical lifting — never attempt to hand-carry bundles of long bars without adequate help.</li>
          <li><strong>Cutting:</strong> Rebar cutters must have guards. Wear safety glasses — cut ends can fly. Use a vise or clamp to hold bars being cut.</li>
        </ul>

        <h2>Bottom Line</h2>
        <p>
          Rebar selection isn&apos;t complicated once you understand the sizing system, grades, and application guidelines. For 90% of residential concrete work, you&apos;ll use Grade 60 rebar in sizes #3 through #6, with #4 being the most common bar for slabs and footings. The key is getting the right size, the right spacing, and the right cover — and then tying it all properly so it stays in position during the pour.
        </p>
        <p>
          When in doubt, refer to the structural plans. The engineer specified what they specified for a reason. If there are no structural plans (common for small residential projects like patios and driveways), follow your local building code&apos;s prescriptive requirements and use this guide as a reference.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Ready to estimate your next project?</strong> Use our <Link href="/calculators/rebar" className="text-blue-700 underline">rebar calculator</Link> for instant quantities and costs, or our <Link href="/calculators/footing" className="text-blue-700 underline">footing calculator</Link> for complete footing estimates including concrete and rebar.
          </p>
        </div>
      </article>
    </div>
  );
}
