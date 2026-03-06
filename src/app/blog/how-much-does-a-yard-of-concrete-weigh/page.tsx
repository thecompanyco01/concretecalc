import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Yard of Concrete Weigh? Weight Tables & Calculations (2026) | ConcreteCalc",
  description: "A cubic yard of concrete weighs approximately 4,050 pounds (2 tons). Complete weight tables for wet, dry, and specialty concrete types, plus truck load limits, form pressure, and project calculations.",
  keywords: "how much does a yard of concrete weigh, concrete weight per yard, cubic yard concrete weight, concrete weight calculator, weight of concrete per cubic yard",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How Much Does a Yard of Concrete Weigh?</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Yard of Concrete Weigh? Complete Weight Reference Guide</h1>
        <p className="lead text-lg text-slate-600">
          A standard cubic yard of concrete weighs approximately 4,050 pounds (2.025 tons or 1,837 kg). Wet (freshly mixed) concrete weighs 4,000–4,050 lbs/yd³, while dry (cured) concrete weighs 3,400–3,600 lbs/yd³ due to water evaporation during curing. Lightweight concrete weighs 2,800–3,200 lbs/yd³, and heavyweight concrete can weigh 5,000+ lbs/yd³.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Need volume calculations?</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete slab calculator</Link> to determine how many cubic yards you need — then use the tables below to calculate the total weight.
          </p>
        </div>

        <p>
          According to our analysis of Google search results, "how much does a yard of concrete weigh" gets 3,600 searches per month with a CPC of $8.34 — indicating high commercial value. The current top-ranking pages give a quick "about 4,000 pounds" answer but miss the practical applications: knowing concrete weight is essential for calculating truck load limits, form pressure, soil bearing capacity, and removal costs. This guide covers it all with detailed tables for every concrete type.
        </p>

        <h2>Concrete Weight by Type</h2>
        <p>Not all concrete is the same density. The mix design, aggregate type, and moisture content all affect weight. Here's a comprehensive reference table:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Concrete Type</th>
                <th className="p-3 text-center">lbs/yd³</th>
                <th className="p-3 text-center">tons/yd³</th>
                <th className="p-3 text-center">kg/m³</th>
                <th className="p-3 text-center">lbs/ft³</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Standard (wet/fresh)</td>
                <td className="p-3 text-center">4,050</td>
                <td className="p-3 text-center">2.03</td>
                <td className="p-3 text-center">2,400</td>
                <td className="p-3 text-center">150</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Standard (dry/cured)</td>
                <td className="p-3 text-center">3,500</td>
                <td className="p-3 text-center">1.75</td>
                <td className="p-3 text-center">2,080</td>
                <td className="p-3 text-center">130</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Reinforced (with rebar)</td>
                <td className="p-3 text-center">4,200–4,600</td>
                <td className="p-3 text-center">2.10–2.30</td>
                <td className="p-3 text-center">2,500–2,700</td>
                <td className="p-3 text-center">155–170</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Lightweight structural</td>
                <td className="p-3 text-center">2,800–3,200</td>
                <td className="p-3 text-center">1.40–1.60</td>
                <td className="p-3 text-center">1,680–1,920</td>
                <td className="p-3 text-center">105–120</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Lightweight insulating</td>
                <td className="p-3 text-center">700–1,600</td>
                <td className="p-3 text-center">0.35–0.80</td>
                <td className="p-3 text-center">400–950</td>
                <td className="p-3 text-center">25–60</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Heavyweight (radiation shielding)</td>
                <td className="p-3 text-center">5,000–6,500</td>
                <td className="p-3 text-center">2.50–3.25</td>
                <td className="p-3 text-center">3,000–3,900</td>
                <td className="p-3 text-center">185–240</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Asphalt concrete</td>
                <td className="p-3 text-center">3,780</td>
                <td className="p-3 text-center">1.89</td>
                <td className="p-3 text-center">2,243</td>
                <td className="p-3 text-center">140</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Fiber-reinforced</td>
                <td className="p-3 text-center">4,000–4,100</td>
                <td className="p-3 text-center">2.00–2.05</td>
                <td className="p-3 text-center">2,370–2,430</td>
                <td className="p-3 text-center">148–152</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Broken/demolished concrete</td>
                <td className="p-3 text-center">2,000–2,400</td>
                <td className="p-3 text-center">1.00–1.20</td>
                <td className="p-3 text-center">1,200–1,400</td>
                <td className="p-3 text-center">75–90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How Much Does 1 Yard of 4000 PSI Concrete Weigh?</h2>
        <p>
          One cubic yard of 4000 PSI concrete weighs approximately <strong>4,050–4,100 pounds (2.03 tons)</strong> when freshly mixed. The PSI rating refers to compressive strength, not weight — but higher-PSI mixes tend to be slightly denser because they use more cement and less water:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">PSI Rating</th>
                <th className="p-3 text-center">Weight (lbs/yd³)</th>
                <th className="p-3 text-center">Common Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">2,500 PSI</td>
                <td className="p-3 text-center">3,900–4,000</td>
                <td className="p-3">Sidewalks, patios, non-structural slabs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">3,000 PSI</td>
                <td className="p-3 text-center">3,950–4,050</td>
                <td className="p-3">Driveways, residential foundations</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">3,500 PSI</td>
                <td className="p-3 text-center">4,000–4,050</td>
                <td className="p-3">Garage floors, structural slabs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">4,000 PSI</td>
                <td className="p-3 text-center">4,050–4,100</td>
                <td className="p-3">Commercial slabs, heavy-traffic areas</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">5,000 PSI</td>
                <td className="p-3 text-center">4,100–4,200</td>
                <td className="p-3">Industrial floors, bridge decks</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">6,000+ PSI</td>
                <td className="p-3 text-center">4,200–4,400</td>
                <td className="p-3">Precast, high-rise structures</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How Many 80-lb Bags of Concrete Make a Yard?</h2>
        <p>
          You need <strong>45 bags of 80-lb concrete</strong> to make one cubic yard. Here's the complete breakdown by bag size:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Bag Size</th>
                <th className="p-3 text-center">Yield per Bag</th>
                <th className="p-3 text-center">Bags per Yard</th>
                <th className="p-3 text-center">Total Weight Hauled</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">80-lb bags</td>
                <td className="p-3 text-center">0.60 ft³</td>
                <td className="p-3 text-center">45 bags</td>
                <td className="p-3 text-center">3,600 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">60-lb bags</td>
                <td className="p-3 text-center">0.45 ft³</td>
                <td className="p-3 text-center">60 bags</td>
                <td className="p-3 text-center">3,600 lbs</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">40-lb bags</td>
                <td className="p-3 text-center">0.30 ft³</td>
                <td className="p-3 text-center">90 bags</td>
                <td className="p-3 text-center">3,600 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Note: The dry bag weight (3,600 lbs) is less than the finished concrete weight (4,050 lbs) because you add approximately 450 lbs of water during mixing. That's roughly 54 gallons of water per cubic yard. For a deeper dive on bag quantities, see our guide on <Link href="/blog/how-many-bags-of-concrete-do-i-need" className="text-blue-700 underline">how many bags of concrete you need</Link>.
        </p>

        <h2>How Much Does Wet Concrete Weigh Per Yard?</h2>
        <p>
          Wet (freshly mixed, unhardened) concrete weighs <strong>4,000–4,050 pounds per cubic yard</strong>. This weight is critical for several practical applications:
        </p>
        <ul>
          <li><strong>Truck loading:</strong> A standard concrete mixer truck holds 8–10 cubic yards, meaning a full load weighs 32,000–40,500 lbs. Most trucks have a legal weight limit of 40,000 lbs for the load alone (80,000 lbs gross vehicle weight).</li>
          <li><strong>Form pressure:</strong> Wet concrete exerts lateral pressure on formwork. At 150 lbs/ft³, a 4-foot wall form experiences 600 lbs per square foot of pressure at the bottom — which is why form construction matters so much.</li>
          <li><strong>Floor loading:</strong> If pouring a slab on an elevated floor or deck, ensure the structure can handle 150 lbs/ft² per inch of depth. A 4" slab weighs 50 lbs/ft².</li>
        </ul>

        <h2>How Much Will a Yard of Concrete Cover at 4 Inches Thick?</h2>
        <p>
          One cubic yard of concrete covers <strong>81 square feet at 4 inches thick</strong>. Here's the coverage chart for all common slab thicknesses:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Slab Thickness</th>
                <th className="p-3 text-center">Coverage per Yard</th>
                <th className="p-3 text-center">Weight per Sq Ft</th>
                <th className="p-3 text-center">Common Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">2 inches</td>
                <td className="p-3 text-center">162 sq ft</td>
                <td className="p-3 text-center">25 lbs</td>
                <td className="p-3">Overlay, topping slab</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">3 inches</td>
                <td className="p-3 text-center">108 sq ft</td>
                <td className="p-3 text-center">37.5 lbs</td>
                <td className="p-3">Light-duty sidewalk</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">4 inches</td>
                <td className="p-3 text-center">81 sq ft</td>
                <td className="p-3 text-center">50 lbs</td>
                <td className="p-3">Sidewalks, patios, shed pads</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">5 inches</td>
                <td className="p-3 text-center">64.8 sq ft</td>
                <td className="p-3 text-center">62.5 lbs</td>
                <td className="p-3">Residential driveways</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">6 inches</td>
                <td className="p-3 text-center">54 sq ft</td>
                <td className="p-3 text-center">75 lbs</td>
                <td className="p-3">Garage floors, heavy driveways</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">8 inches</td>
                <td className="p-3 text-center">40.5 sq ft</td>
                <td className="p-3 text-center">100 lbs</td>
                <td className="p-3">Commercial slabs, foundations</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">12 inches</td>
                <td className="p-3 text-center">27 sq ft</td>
                <td className="p-3 text-center">150 lbs</td>
                <td className="p-3">Footings, structural walls</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Use our <Link href="/calculators/slab" className="text-blue-700 underline">slab calculator</Link> to get exact cubic yard requirements for your specific dimensions.
        </p>

        <h2>Weight of Common Concrete Projects</h2>
        <p>Here's how much concrete weighs for standard residential projects (using wet concrete at 4,050 lbs/yd³):</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-center">Typical Dimensions</th>
                <th className="p-3 text-center">Cubic Yards</th>
                <th className="p-3 text-center">Total Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Patio (10×12, 4")</td>
                <td className="p-3 text-center">120 sq ft</td>
                <td className="p-3 text-center">1.48</td>
                <td className="p-3 text-center">5,994 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Sidewalk (3×50, 4")</td>
                <td className="p-3 text-center">150 sq ft</td>
                <td className="p-3 text-center">1.85</td>
                <td className="p-3 text-center">7,493 lbs</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">2-Car Driveway (20×30, 5")</td>
                <td className="p-3 text-center">600 sq ft</td>
                <td className="p-3 text-center">9.26</td>
                <td className="p-3 text-center">37,503 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Garage Floor (24×24, 6")</td>
                <td className="p-3 text-center">576 sq ft</td>
                <td className="p-3 text-center">10.67</td>
                <td className="p-3 text-center">43,214 lbs</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Shed Pad (8×10, 4")</td>
                <td className="p-3 text-center">80 sq ft</td>
                <td className="p-3 text-center">0.99</td>
                <td className="p-3 text-center">4,010 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Foundation Wall (8" × 80 linear ft × 8' tall)</td>
                <td className="p-3 text-center">427 sq ft face</td>
                <td className="p-3 text-center">15.80</td>
                <td className="p-3 text-center">63,990 lbs</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Single Fence Post Footing</td>
                <td className="p-3 text-center">10" dia × 30" deep</td>
                <td className="p-3 text-center">0.024</td>
                <td className="p-3 text-center">97 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Concrete Truck Load Limits</h2>
        <p>
          Understanding concrete weight is essential for delivery planning. Here's what you need to know about truck capacity:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Truck Type</th>
                <th className="p-3 text-center">Capacity</th>
                <th className="p-3 text-center">Concrete Weight</th>
                <th className="p-3 text-center">GVW (approx)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Mini Mixer</td>
                <td className="p-3 text-center">1–3 yards</td>
                <td className="p-3 text-center">4,050–12,150 lbs</td>
                <td className="p-3 text-center">20,000–28,000 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Standard Mixer (front discharge)</td>
                <td className="p-3 text-center">8–10 yards</td>
                <td className="p-3 text-center">32,400–40,500 lbs</td>
                <td className="p-3 text-center">60,000–73,000 lbs</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Standard Mixer (rear discharge)</td>
                <td className="p-3 text-center">8–11 yards</td>
                <td className="p-3 text-center">32,400–44,550 lbs</td>
                <td className="p-3 text-center">65,000–77,000 lbs</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Legal Maximum (most states)</td>
                <td className="p-3 text-center">~9.5 yards</td>
                <td className="p-3 text-center">38,475 lbs</td>
                <td className="p-3 text-center">80,000 lbs GVW</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Key takeaway:</strong> Most concrete trucks can legally carry about 9.5 cubic yards due to federal highway weight limits (80,000 lbs GVW). If your project needs more, plan for multiple truckloads. Order 10+ yards and you'll likely get a price break.
        </p>

        <h2>Soil Bearing Capacity and Concrete Weight</h2>
        <p>
          When placing concrete slabs on soil, the ground must be able to support the weight. Here's how concrete weight relates to soil bearing:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Soil Type</th>
                <th className="p-3 text-center">Bearing Capacity (lbs/ft²)</th>
                <th className="p-3 text-center">Max Slab Thickness Supported</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Soft clay / silt</td>
                <td className="p-3 text-center">500–1,000</td>
                <td className="p-3 text-center">3–6 inches (may need compacted base)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Medium clay</td>
                <td className="p-3 text-center">1,000–2,000</td>
                <td className="p-3 text-center">6–12 inches</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Compacted sand/gravel</td>
                <td className="p-3 text-center">2,000–4,000</td>
                <td className="p-3 text-center">12+ inches</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Dense gravel / hardpan</td>
                <td className="p-3 text-center">4,000–8,000</td>
                <td className="p-3 text-center">No practical limit</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Bedrock</td>
                <td className="p-3 text-center">10,000+</td>
                <td className="p-3 text-center">No practical limit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A 4-inch concrete slab weighs 50 lbs/ft² — well within the bearing capacity of most compacted soils. However, you also need to account for live loads (people, vehicles, equipment) on top of the slab. A residential garage floor, for example, needs to support the slab weight (75 lbs/ft² at 6") plus a vehicle (typically 30–50 lbs/ft² distributed).
        </p>

        <h2>Concrete Removal Weight Calculations</h2>
        <p>
          If you're demolishing an old slab, you need to know how much the broken concrete weighs for dumpster and hauling planning:
        </p>
        <ul>
          <li><strong>Broken concrete:</strong> weighs approximately 2,000–2,400 lbs per cubic yard (air gaps between pieces reduce density by 40%)</li>
          <li><strong>Standard dumpster capacity:</strong> A 10-yard dumpster typically has a 4,000–6,000 lb weight limit for concrete, meaning it holds about 2–3 cubic yards of broken concrete</li>
          <li><strong>Cost to dispose:</strong> Concrete disposal runs $40–$60 per ton at most recycling centers, or $300–$500 for a dumpster rental</li>
        </ul>
        <p>
          <strong>Example:</strong> Removing a 10×20 patio (4" thick) = 2.47 cubic yards of concrete = approximately 5,000 lbs of broken material = one loaded 10-yard dumpster.
        </p>

        <h2>Concrete Weight Per Square Foot</h2>
        <p>Sometimes it's more useful to think in square feet rather than cubic yards. Here's the weight per square foot at various thicknesses:</p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Thickness</th>
                <th className="p-3 text-center">lbs per sq ft (wet)</th>
                <th className="p-3 text-center">lbs per sq ft (cured)</th>
                <th className="p-3 text-center">kg per m²</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">2 inches</td>
                <td className="p-3 text-center">25.0</td>
                <td className="p-3 text-center">21.7</td>
                <td className="p-3 text-center">122</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">3 inches</td>
                <td className="p-3 text-center">37.5</td>
                <td className="p-3 text-center">32.5</td>
                <td className="p-3 text-center">183</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">4 inches</td>
                <td className="p-3 text-center">50.0</td>
                <td className="p-3 text-center">43.3</td>
                <td className="p-3 text-center">244</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">5 inches</td>
                <td className="p-3 text-center">62.5</td>
                <td className="p-3 text-center">54.2</td>
                <td className="p-3 text-center">305</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">6 inches</td>
                <td className="p-3 text-center">75.0</td>
                <td className="p-3 text-center">65.0</td>
                <td className="p-3 text-center">366</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">8 inches</td>
                <td className="p-3 text-center">100.0</td>
                <td className="p-3 text-center">86.7</td>
                <td className="p-3 text-center">488</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">12 inches</td>
                <td className="p-3 text-center">150.0</td>
                <td className="p-3 text-center">130.0</td>
                <td className="p-3 text-center">732</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Metric Conversions: Concrete Weight in Kg</h2>
        <p>For international readers, here are the key concrete weight conversions:</p>
        <ul>
          <li><strong>1 cubic meter of concrete:</strong> 2,400 kg (standard mix) = 5,291 lbs</li>
          <li><strong>1 cubic yard of concrete:</strong> 1,837 kg = 4,050 lbs</li>
          <li><strong>1 cubic foot of concrete:</strong> 68 kg = 150 lbs</li>
          <li><strong>Conversion factor:</strong> 1 cubic meter = 1.308 cubic yards</li>
        </ul>

        <h2>Form Pressure Calculations</h2>
        <p>
          When building forms for walls, columns, or deep footings, you need to calculate the lateral pressure of wet concrete to prevent form blowouts. Wet concrete acts like a liquid and exerts hydrostatic pressure:
        </p>
        <ul>
          <li><strong>Lateral pressure formula:</strong> P = w × h (where P = pressure in lbs/ft², w = unit weight of concrete in lbs/ft³, and h = depth in feet)</li>
          <li><strong>At 2 feet deep:</strong> 150 × 2 = 300 lbs/ft²</li>
          <li><strong>At 4 feet deep:</strong> 150 × 4 = 600 lbs/ft²</li>
          <li><strong>At 8 feet deep:</strong> 150 × 8 = 1,200 lbs/ft²</li>
        </ul>
        <p>
          This is why tall wall forms require strong bracing, through-ties, and proper walers. A form blowout from underestimating concrete weight is one of the most expensive mistakes in concrete construction.
        </p>

        <h2>Hauling Concrete Bags in Your Truck</h2>
        <p>
          If you're buying bags at Home Depot or Lowe's, know your vehicle's payload capacity:
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">Vehicle Type</th>
                <th className="p-3 text-center">Typical Payload</th>
                <th className="p-3 text-center">Max 80-lb Bags</th>
                <th className="p-3 text-center">Max 60-lb Bags</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Sedan / SUV</td>
                <td className="p-3 text-center">800–1,200 lbs</td>
                <td className="p-3 text-center">10–15</td>
                <td className="p-3 text-center">13–20</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">Half-Ton Pickup (F-150)</td>
                <td className="p-3 text-center">1,500–2,000 lbs</td>
                <td className="p-3 text-center">18–25</td>
                <td className="p-3 text-center">25–33</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">3/4-Ton Pickup (F-250)</td>
                <td className="p-3 text-center">2,500–3,500 lbs</td>
                <td className="p-3 text-center">31–43</td>
                <td className="p-3 text-center">41–58</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50">
                <td className="p-3 font-medium">1-Ton Pickup (F-350)</td>
                <td className="p-3 text-center">4,000–6,000 lbs</td>
                <td className="p-3 text-center">50–75</td>
                <td className="p-3 text-center">66–100</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Utility Trailer</td>
                <td className="p-3 text-center">2,000–3,500 lbs</td>
                <td className="p-3 text-center">25–43</td>
                <td className="p-3 text-center">33–58</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Warning:</strong> Overloading your vehicle is dangerous and illegal. A full cubic yard of concrete in bags weighs 3,600 lbs — more than most half-ton pickups can safely carry. Plan for multiple trips or use Home Depot/Lowe's delivery service ($79–$99 for most locations).
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Why Does Wet Concrete Weigh More Than Dry?</h3>
        <p>
          Freshly mixed concrete contains roughly 300–350 lbs of water per cubic yard. During curing, about 50% of this water chemically bonds with cement (hydration), and the rest evaporates. The cured concrete retains most of the original water weight through hydration but loses 400–600 lbs per cubic yard to evaporation, dropping from ~4,050 to ~3,500 lbs/yd³.
        </p>

        <h3>How Much Does a Concrete Block Weigh?</h3>
        <p>
          A standard 8×8×16 concrete block (CMU) weighs 28–35 lbs depending on density. Lightweight blocks weigh 22–28 lbs, and heavy-weight blocks weigh 35–45 lbs. A filled and grouted concrete block weighs approximately 50–55 lbs.
        </p>

        <h3>Does Rebar Add Significant Weight?</h3>
        <p>
          Yes. Rebar adds approximately 3–15% to concrete weight depending on spacing and bar size. A #4 rebar at 12" spacing both ways adds about 200 lbs per cubic yard. A #5 at 8" spacing adds about 500 lbs per cubic yard. This matters for structural calculations and truck loading.
        </p>

        <div className="bg-slate-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-xl font-bold mb-3">Calculate Your Concrete Needs</h3>
          <p className="text-slate-400 mb-4 max-w-lg mx-auto">
            Enter your project dimensions and get instant cubic yard quantities, weight totals, bag counts, and cost estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/slab"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition inline-block"
            >
              Free Concrete Calculator →
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
