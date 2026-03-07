import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Epoxy Garage Floor Cost & Installation Guide (2026) | ConcreteCalc',
  description: 'Complete epoxy garage floor coating guide for contractors and homeowners. Costs per sq ft, DIY vs professional installation, prep steps, coating types, and business startup tips.',
  keywords: ['epoxy garage floor', 'garage floor epoxy', 'epoxy floor coating', 'epoxy garage floor cost', 'garage floor coating', 'epoxy flooring'],
}

export default function EpoxyGarageFloorGuide() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Epoxy Garage Floor Guide</span>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Epoxy Garage Floor Coating: Complete Cost & Installation Guide for 2026
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Epoxy garage floor coatings are one of the most profitable concrete services a contractor can offer — 
          with margins of 60-70% and a market that searches for this service over <strong>134,000 times per month</strong>. 
          Whether you're a homeowner researching options or a contractor looking to add epoxy flooring to your services, 
          this guide covers everything: costs, installation steps, coating types, and business economics.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mt-0">Quick Cost Summary</h3>
          <ul className="text-blue-800 mb-0">
            <li><strong>DIY epoxy kit:</strong> $1.50–$3.00 per sq ft (materials only)</li>
            <li><strong>Professional installation:</strong> $3.00–$12.00 per sq ft</li>
            <li><strong>Average 2-car garage (400-500 sq ft):</strong> $1,500–$5,000 installed</li>
            <li><strong>High-end metallic/flake systems:</strong> $6.00–$15.00 per sq ft</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mt-0">Table of Contents</h3>
          <ol className="text-gray-700 mb-0">
            <li><a href="#what-is-epoxy" className="text-blue-600 hover:underline">What Is Epoxy Floor Coating?</a></li>
            <li><a href="#types" className="text-blue-600 hover:underline">Types of Epoxy Garage Floor Coatings</a></li>
            <li><a href="#cost-breakdown" className="text-blue-600 hover:underline">Cost Breakdown: Materials, Labor & Total</a></li>
            <li><a href="#diy-vs-pro" className="text-blue-600 hover:underline">DIY vs. Professional Installation</a></li>
            <li><a href="#prep" className="text-blue-600 hover:underline">Surface Preparation (The Most Important Step)</a></li>
            <li><a href="#installation" className="text-blue-600 hover:underline">Step-by-Step Installation Process</a></li>
            <li><a href="#mistakes" className="text-blue-600 hover:underline">7 Common Mistakes That Cause Epoxy Failure</a></li>
            <li><a href="#maintenance" className="text-blue-600 hover:underline">Maintenance & Longevity</a></li>
            <li><a href="#business" className="text-blue-600 hover:underline">Starting an Epoxy Floor Coating Business</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <h2 id="what-is-epoxy" className="text-3xl font-bold mt-12">What Is Epoxy Floor Coating?</h2>
        
        <p>
          Epoxy floor coating is a two-part system consisting of a resin and a hardener that chemically bond to create 
          an extremely durable, high-gloss surface. When applied to a properly prepared concrete floor, epoxy creates 
          a seamless, chemical-resistant, and visually stunning finish that can last 10-20+ years.
        </p>

        <p>
          Unlike paint (which sits on top of concrete and peels), epoxy penetrates and bonds at a molecular level. 
          A proper epoxy coating is 2-3 mils thick (compared to paint at 1 mil), and some commercial systems reach 
          10+ mils with multiple coats.
        </p>

        <h3>Why Epoxy Is So Popular for Garages</h3>
        <ul>
          <li><strong>Durability:</strong> Resists tire marks, oil stains, chemical spills, and impact damage</li>
          <li><strong>Aesthetics:</strong> Transforms a dull gray floor into a showroom-quality surface</li>
          <li><strong>Easy cleaning:</strong> Sealed surface means dust, oil, and debris wipe right up</li>
          <li><strong>Home value:</strong> A professionally coated garage adds $5,000-$10,000 in perceived home value</li>
          <li><strong>Moisture barrier:</strong> Prevents concrete dusting and moisture transmission</li>
          <li><strong>Customization:</strong> Flake, metallic, solid color, quartz — endless design options</li>
        </ul>

        <h2 id="types" className="text-3xl font-bold mt-12">Types of Epoxy Garage Floor Coatings</h2>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Coating Type</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost/sq ft</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Thickness</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Durability</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Water-Based Epoxy</td>
                <td className="border border-gray-300 px-4 py-3">$1.50–$3.00</td>
                <td className="border border-gray-300 px-4 py-3">2-3 mils</td>
                <td className="border border-gray-300 px-4 py-3">3-5 years</td>
                <td className="border border-gray-300 px-4 py-3">DIY, light-use garages</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Solvent-Based Epoxy</td>
                <td className="border border-gray-300 px-4 py-3">$3.00–$5.00</td>
                <td className="border border-gray-300 px-4 py-3">3-5 mils</td>
                <td className="border border-gray-300 px-4 py-3">5-10 years</td>
                <td className="border border-gray-300 px-4 py-3">Moderate traffic garages</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">100% Solids Epoxy</td>
                <td className="border border-gray-300 px-4 py-3">$4.00–$8.00</td>
                <td className="border border-gray-300 px-4 py-3">8-12 mils</td>
                <td className="border border-gray-300 px-4 py-3">10-20+ years</td>
                <td className="border border-gray-300 px-4 py-3">Professional-grade, commercial</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Polyurea/Polyaspartic</td>
                <td className="border border-gray-300 px-4 py-3">$5.00–$10.00</td>
                <td className="border border-gray-300 px-4 py-3">10-20 mils</td>
                <td className="border border-gray-300 px-4 py-3">15-20+ years</td>
                <td className="border border-gray-300 px-4 py-3">Premium residential, fast cure</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Metallic Epoxy</td>
                <td className="border border-gray-300 px-4 py-3">$6.00–$15.00</td>
                <td className="border border-gray-300 px-4 py-3">10-15 mils</td>
                <td className="border border-gray-300 px-4 py-3">15-20+ years</td>
                <td className="border border-gray-300 px-4 py-3">High-end showroom floors</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Flake/Chip System</td>
                <td className="border border-gray-300 px-4 py-3">$4.00–$8.00</td>
                <td className="border border-gray-300 px-4 py-3">15-25 mils</td>
                <td className="border border-gray-300 px-4 py-3">15-20+ years</td>
                <td className="border border-gray-300 px-4 py-3">Most popular residential option</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Understanding the Differences</h3>

        <p>
          <strong>Water-based epoxy</strong> is what you find in the $50-$100 Home Depot kits. It's thin, yellows 
          in UV light, and often peels within 2-3 years. Contractors should avoid offering this — it reflects 
          poorly on your reputation when it fails.
        </p>

        <p>
          <strong>100% solids epoxy</strong> is the professional standard. "100% solids" means no solvents evaporate — 
          every drop cures into the final coating. This creates a much thicker, more durable film. The tradeoff: 
          shorter pot life (15-25 minutes) and requires more skill to apply.
        </p>

        <p>
          <strong>Polyurea/polyaspartic</strong> coatings are the fastest-growing segment. They cure in 4-6 hours 
          (vs. 24-72 hours for epoxy), can be applied in cold temperatures, and don't yellow. The downside: 
          material costs are 40-60% higher than epoxy. Many contractors use a hybrid system — epoxy base coat 
          for adhesion and thickness, polyaspartic top coat for UV stability and fast cure.
        </p>

        <p>
          <strong>Flake/chip systems</strong> are the most popular residential option and the bread-and-butter 
          of most garage floor coating businesses. Vinyl paint flakes are broadcast into wet epoxy, creating 
          a textured, slip-resistant, visually appealing surface that hides imperfections. Full broadcast 
          (100% coverage) gives a granite-like appearance.
        </p>

        <h2 id="cost-breakdown" className="text-3xl font-bold mt-12">Cost Breakdown: Materials, Labor & Total</h2>

        <h3>Material Costs (Professional-Grade Products)</h3>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Item</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost per sq ft</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">400 sq ft Garage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Concrete grinder rental (1 day)</td>
                <td className="border border-gray-300 px-4 py-3">$0.50–$0.75</td>
                <td className="border border-gray-300 px-4 py-3">$200–$300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Diamond grinding pads</td>
                <td className="border border-gray-300 px-4 py-3">$0.15–$0.25</td>
                <td className="border border-gray-300 px-4 py-3">$60–$100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Epoxy primer coat</td>
                <td className="border border-gray-300 px-4 py-3">$0.30–$0.50</td>
                <td className="border border-gray-300 px-4 py-3">$120–$200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Epoxy base coat (100% solids)</td>
                <td className="border border-gray-300 px-4 py-3">$0.75–$1.25</td>
                <td className="border border-gray-300 px-4 py-3">$300–$500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Vinyl flakes (full broadcast)</td>
                <td className="border border-gray-300 px-4 py-3">$0.50–$1.00</td>
                <td className="border border-gray-300 px-4 py-3">$200–$400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Polyaspartic top coat</td>
                <td className="border border-gray-300 px-4 py-3">$0.60–$1.00</td>
                <td className="border border-gray-300 px-4 py-3">$240–$400</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Crack repair / patching</td>
                <td className="border border-gray-300 px-4 py-3">$0.10–$0.25</td>
                <td className="border border-gray-300 px-4 py-3">$40–$100</td>
              </tr>
              <tr className="bg-green-50 font-semibold">
                <td className="border border-gray-300 px-4 py-3">Total Materials</td>
                <td className="border border-gray-300 px-4 py-3">$2.90–$5.00</td>
                <td className="border border-gray-300 px-4 py-3">$1,160–$2,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Labor Costs</h3>
        <p>
          A professional 2-person crew can complete a standard 2-car garage in 1-2 days. Labor typically runs 
          $1.50–$3.00 per sq ft, depending on your market and the complexity of prep work.
        </p>

        <h3>Total Installed Cost by Garage Size</h3>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Garage Size</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sq Ft</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Basic Solid Color</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Flake System</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Metallic Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">1-Car Garage</td>
                <td className="border border-gray-300 px-4 py-3">200-250</td>
                <td className="border border-gray-300 px-4 py-3">$800–$1,500</td>
                <td className="border border-gray-300 px-4 py-3">$1,200–$2,000</td>
                <td className="border border-gray-300 px-4 py-3">$2,000–$3,500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">2-Car Garage</td>
                <td className="border border-gray-300 px-4 py-3">400-500</td>
                <td className="border border-gray-300 px-4 py-3">$1,500–$3,000</td>
                <td className="border border-gray-300 px-4 py-3">$2,500–$4,500</td>
                <td className="border border-gray-300 px-4 py-3">$4,000–$7,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">3-Car Garage</td>
                <td className="border border-gray-300 px-4 py-3">600-800</td>
                <td className="border border-gray-300 px-4 py-3">$2,400–$4,800</td>
                <td className="border border-gray-300 px-4 py-3">$4,000–$7,200</td>
                <td className="border border-gray-300 px-4 py-3">$6,000–$12,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="diy-vs-pro" className="text-3xl font-bold mt-12">DIY vs. Professional Installation</h2>

        <h3>The DIY Reality Check</h3>
        <p>
          DIY epoxy kits from big box stores are tempting at $50-$150, but here's what most homeowners discover:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-bold text-red-800 mt-0">❌ DIY Pitfalls</h4>
            <ul className="text-red-700 mb-0">
              <li>Acid etching (included in kits) doesn't profile concrete properly</li>
              <li>Water-based formula is thin and peels within 1-3 years</li>
              <li>Hot tire pickup (tires stick and peel coating)</li>
              <li>Yellowing from UV exposure</li>
              <li>No warranty on DIY application</li>
              <li>Most DIY jobs take 3-4 days (not the "weekend project" claimed)</li>
              <li>Failure rate: 50%+ within 2 years (industry estimate)</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-bold text-green-800 mt-0">✅ Professional Advantages</h4>
            <ul className="text-green-700 mb-0">
              <li>Diamond grinding creates proper surface profile</li>
              <li>100% solids or polyaspartic — 5-10x thicker</li>
              <li>No hot tire pickup with professional products</li>
              <li>UV-stable top coat prevents yellowing</li>
              <li>5-15 year warranty (standard)</li>
              <li>Completed in 1-2 days</li>
              <li>Moisture testing prevents adhesion failures</li>
            </ul>
          </div>
        </div>

        <p>
          <strong>The bottom line:</strong> DIY kits have a 50%+ failure rate within 2 years. A professional 
          installation costs 3-5x more upfront but lasts 5-10x longer. For contractors, this failure rate is 
          actually your best marketing tool — many of your customers will be homeowners who tried DIY first 
          and need you to fix it.
        </p>

        <h2 id="prep" className="text-3xl font-bold mt-12">Surface Preparation (The Most Important Step)</h2>

        <p>
          <strong>80% of epoxy failures are caused by improper surface preparation.</strong> This is where 
          professional contractors separate themselves from DIYers and cheap competitors. Proper prep takes 
          4-6 hours but determines whether the coating lasts 2 years or 20.
        </p>

        <h3>Step 1: Moisture Testing</h3>
        <p>
          Before anything else, test for moisture vapor transmission. Tape a 2x2 ft piece of plastic sheeting 
          to the floor and check after 24 hours. If moisture beads underneath, you have a vapor drive issue 
          that must be addressed with a moisture mitigating primer (like Moisture Vapor Barrier by Seal-Krete) 
          or the coating WILL delaminate.
        </p>
        <p>
          For more precise testing, use a calcium chloride test kit (ASTM F1869) — results over 3 lbs/1000 
          sq ft/24 hours require moisture mitigation. Professional-grade digital meters can also measure 
          relative humidity within the slab.
        </p>

        <h3>Step 2: Concrete Grinding (Not Acid Etching)</h3>
        <p>
          <strong>Professional standard: diamond grinding.</strong> This creates a CSP-2 to CSP-3 surface 
          profile (Concrete Surface Profile) — the ideal roughness for epoxy adhesion. A planetary grinder 
          with 30/40 grit diamonds removes coatings, laitance, and opens the pore structure.
        </p>
        <p>
          <strong>Acid etching is NOT sufficient</strong> for professional applications. It creates an 
          inconsistent profile, leaves residue that can prevent adhesion, and doesn't remove existing 
          coatings. Every major epoxy manufacturer recommends mechanical grinding over acid etching.
        </p>

        <h3>Step 3: Crack and Joint Repair</h3>
        <p>
          Fill cracks with polyurea joint filler or epoxy crack repair compound. For expansion joints, 
          use backer rod and polyurethane sealant. Control joints can be filled or left as decorative 
          lines — discuss with the customer. Never fill expansion joints with rigid epoxy — they need 
          to flex.
        </p>

        <h3>Step 4: Cleaning and Degreasing</h3>
        <p>
          After grinding, vacuum all dust with a HEPA-filtered shop vac or dust extractor. Degrease 
          any oil stains with a concrete degreaser — oil prevents adhesion. For stubborn stains, a 
          second grind pass may be necessary.
        </p>

        <h2 id="installation" className="text-3xl font-bold mt-12">Step-by-Step Installation Process</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="font-bold text-yellow-800 mt-0">⚠️ Environmental Requirements</h4>
          <ul className="text-yellow-800 mb-0">
            <li>Concrete temperature: 55°F–90°F (ideal: 65°F–80°F)</li>
            <li>Ambient temperature: 60°F–85°F</li>
            <li>Humidity: below 85% (lower is better)</li>
            <li>Concrete must be dry for 24+ hours</li>
            <li>No rain in forecast (for garages with poor door seals)</li>
          </ul>
        </div>

        <h3>Day 1: Prep & Prime (4-8 hours)</h3>
        <ol>
          <li><strong>Clear and protect:</strong> Remove everything from the garage. Mask walls, door frames, and any surfaces you don't want coated (tape up 4-6 inches on walls).</li>
          <li><strong>Grind the floor:</strong> Run a planetary grinder in overlapping passes. Edge with a hand grinder or angle grinder with a diamond cup wheel. This takes 2-4 hours for a 2-car garage.</li>
          <li><strong>Vacuum thoroughly:</strong> Remove ALL grinding dust. Any dust left on the surface will become a weak point. Use a HEPA shop vac and make multiple passes.</li>
          <li><strong>Repair cracks and joints:</strong> Fill, smooth, and allow to cure per manufacturer specs (usually 30-60 minutes for polyurea).</li>
          <li><strong>Apply primer (optional but recommended):</strong> A penetrating epoxy primer improves adhesion, especially on older or harder concrete. Coverage: 200-300 sq ft per gallon. Allow to tack (usually 4-8 hours depending on conditions).</li>
        </ol>

        <h3>Day 2: Base Coat, Flake & Top Coat (6-10 hours)</h3>
        <ol>
          <li><strong>Mix and apply base coat:</strong> Mix epoxy resin and hardener per manufacturer ratios. Work in sections — once mixed, you have 15-25 minutes of pot life (for 100% solids). Use a notched squeegee to spread, then back-roll with a ⅜" nap roller for even coverage.</li>
          <li><strong>Broadcast flakes (if using):</strong> While the base coat is still wet, broadcast vinyl flakes by tossing them upward and letting them fall naturally. For full broadcast, apply 1-1.5 lbs per sq ft. Work systematically from the back of the garage toward the door.</li>
          <li><strong>Scrape and vacuum excess:</strong> After the base coat cures (12-24 hours for epoxy, 4-6 for polyaspartic), scrape any "peaks" with a floor scraper and vacuum all loose flakes.</li>
          <li><strong>Apply top coat:</strong> Mix and roll on the clear top coat. For polyaspartic, you have 20-30 minutes of working time. Apply at 100-150 sq ft per gallon for proper thickness. This coat protects the flakes and provides the glossy finish.</li>
        </ol>

        <h3>Cure Time</h3>
        <ul>
          <li><strong>Light foot traffic:</strong> 24 hours (epoxy) / 6 hours (polyaspartic)</li>
          <li><strong>Full foot traffic:</strong> 48-72 hours / 24 hours</li>
          <li><strong>Vehicle traffic:</strong> 5-7 days / 48-72 hours</li>
          <li><strong>Full chemical cure:</strong> 28 days / 5-7 days</li>
        </ul>

        <h2 id="mistakes" className="text-3xl font-bold mt-12">7 Common Mistakes That Cause Epoxy Failure</h2>

        <ol>
          <li>
            <strong>Skipping the moisture test.</strong> The #1 cause of delamination. Moisture vapor pushes 
            up from beneath the slab and lifts the coating. A $15 plastic sheeting test prevents a $5,000 
            warranty claim.
          </li>
          <li>
            <strong>Using acid etching instead of grinding.</strong> Acid etching creates an inconsistent 
            profile and leaves chemical residue. Professional grinders cost $150-$300/day to rent — a tiny 
            fraction of the job cost.
          </li>
          <li>
            <strong>Applying in wrong conditions.</strong> Below 55°F, epoxy won't cure properly. Above 90°F, 
            it cures too fast to apply evenly. High humidity traps moisture in the coating and causes clouding 
            or bubbling.
          </li>
          <li>
            <strong>Wrong mixing ratios.</strong> Epoxy is a chemical reaction — 1:1 or 2:1 ratios must be 
            exact. Too much hardener = brittle and yellowish. Too much resin = soft and tacky forever.
          </li>
          <li>
            <strong>Applying too thick or too thin.</strong> Too thick = bubbles, runs, and uneven cure. 
            Too thin = premature wear and poor coverage. Use manufacturer-specified spread rates.
          </li>
          <li>
            <strong>Not allowing coats to cure properly.</strong> Applying the top coat before the base coat 
            is fully cured traps solvents and creates adhesion issues between layers. Follow the recoat window 
            exactly.
          </li>
          <li>
            <strong>Skipping the top coat.</strong> Bare epoxy yellows in UV light and wears faster than 
            expected. A UV-stable polyaspartic or polyurethane top coat is non-negotiable for garage floors 
            that see sunlight.
          </li>
        </ol>

        <h2 id="maintenance" className="text-3xl font-bold mt-12">Maintenance & Longevity</h2>

        <h3>Weekly Maintenance</h3>
        <ul>
          <li>Sweep or dust mop to remove grit (grit is the #1 cause of scratches)</li>
          <li>Mop with warm water and a mild cleaner (no harsh chemicals, no vinegar, no citrus cleaners)</li>
          <li>Wipe up oil and chemical spills promptly (even resistant coatings can stain if left for days)</li>
        </ul>

        <h3>Seasonal Maintenance</h3>
        <ul>
          <li>In winter: clean road salt/deicers regularly — calcium chloride can damage some coatings</li>
          <li>Place mats under vehicles during winter to catch salt runoff</li>
          <li>Inspect for chips or wear near high-traffic areas and the garage door threshold</li>
        </ul>

        <h3>Expected Lifespan by System</h3>
        <ul>
          <li><strong>DIY water-based kit:</strong> 1-3 years (hot tire pickup, peeling, yellowing)</li>
          <li><strong>Professional solid epoxy:</strong> 10-15 years with proper prep</li>
          <li><strong>Polyaspartic system:</strong> 15-20+ years</li>
          <li><strong>Full flake system (epoxy + polyaspartic top):</strong> 15-25 years</li>
        </ul>

        <h2 id="business" className="text-3xl font-bold mt-12">Starting an Epoxy Floor Coating Business</h2>

        <p>
          Epoxy garage floor coating is one of the most profitable trades in the concrete industry. Here's 
          the real economics for contractors considering adding this service — or starting a dedicated 
          coating business.
        </p>

        <h3>Startup Costs</h3>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Equipment</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost (Buy)</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost (Rent/Day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Planetary floor grinder</td>
                <td className="border border-gray-300 px-4 py-3">$5,000–$15,000</td>
                <td className="border border-gray-300 px-4 py-3">$150–$300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Diamond tooling set</td>
                <td className="border border-gray-300 px-4 py-3">$500–$1,500</td>
                <td className="border border-gray-300 px-4 py-3">—</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">HEPA dust extractor</td>
                <td className="border border-gray-300 px-4 py-3">$800–$2,000</td>
                <td className="border border-gray-300 px-4 py-3">$75–$150</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Edge grinder</td>
                <td className="border border-gray-300 px-4 py-3">$300–$800</td>
                <td className="border border-gray-300 px-4 py-3">—</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Squeegees, rollers, mixing tools</td>
                <td className="border border-gray-300 px-4 py-3">$200–$500</td>
                <td className="border border-gray-300 px-4 py-3">—</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Spike shoes, mixing buckets, tape</td>
                <td className="border border-gray-300 px-4 py-3">$100–$200</td>
                <td className="border border-gray-300 px-4 py-3">—</td>
              </tr>
              <tr className="bg-green-50 font-semibold">
                <td className="border border-gray-300 px-4 py-3">Total Startup (Buy Equipment)</td>
                <td className="border border-gray-300 px-4 py-3">$7,000–$20,000</td>
                <td className="border border-gray-300 px-4 py-3">—</td>
              </tr>
              <tr className="bg-blue-50 font-semibold">
                <td className="border border-gray-300 px-4 py-3">Total Startup (Rent Equipment)</td>
                <td className="border border-gray-300 px-4 py-3">$1,100–$2,500</td>
                <td className="border border-gray-300 px-4 py-3">(per job)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Job Economics (2-Car Garage — 450 sq ft Flake System)</h3>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <ul className="mb-0">
            <li><strong>Customer price:</strong> $3,500 (average market rate)</li>
            <li><strong>Materials cost:</strong> $900–$1,200</li>
            <li><strong>Labor (2 crew × 1.5 days):</strong> $600–$900</li>
            <li><strong>Equipment rental/depreciation:</strong> $150–$200</li>
            <li><strong>Total cost:</strong> $1,650–$2,300</li>
            <li><strong>Gross profit:</strong> $1,200–$1,850 (34–53% margin)</li>
            <li><strong>With owned equipment and experience:</strong> 55–65% margins</li>
          </ul>
        </div>

        <h3>Revenue Potential</h3>
        <p>
          A 2-person crew can complete 2-3 standard garage jobs per week. At $3,000–$4,000 per job:
        </p>
        <ul>
          <li><strong>Weekly revenue:</strong> $6,000–$12,000</li>
          <li><strong>Monthly revenue:</strong> $24,000–$48,000</li>
          <li><strong>Annual revenue (50 weeks):</strong> $300,000–$600,000</li>
          <li><strong>Net profit (at 50% margin):</strong> $150,000–$300,000</li>
        </ul>

        <h3>How to Get Your First Customers</h3>
        <ol>
          <li><strong>Google Business Profile:</strong> Set up immediately. "Epoxy garage floor near me" is a top search — you need to appear in the map pack.</li>
          <li><strong>Before/after photos:</strong> Do your first 3 jobs at cost (or even free for friends/family) to build a stunning portfolio. Before/after photos sell this service better than any ad.</li>
          <li><strong>Facebook/Nextdoor:</strong> Post before/after photos in local community groups. This consistently generates leads for coating contractors.</li>
          <li><strong>Google Ads:</strong> "Epoxy garage floor [city]" keywords have an average CPC of $8-12 but convert well because the intent is clear.</li>
          <li><strong>Referral program:</strong> Offer $200 referral bonuses. Neighbors see the finished garage and ask who did it — make it easy for your customer to connect you.</li>
        </ol>

        <h2 id="faq" className="text-3xl font-bold mt-12">Frequently Asked Questions</h2>

        <div className="space-y-6 my-8">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">How long does epoxy garage floor coating last?</h3>
            <p className="mb-0">
              Professional-grade epoxy with a polyaspartic top coat lasts 15-20+ years. DIY kits typically 
              last 1-3 years. The key factors are surface preparation quality, coating thickness, and whether 
              a UV-stable top coat was applied.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Can you epoxy a garage floor yourself?</h3>
            <p className="mb-0">
              You can, but results vary dramatically. DIY kits from big box stores have a 50%+ failure rate 
              within 2 years, primarily due to inadequate surface prep (acid etching instead of grinding) and 
              thin, water-based formulas. If you do go DIY, invest in renting a floor grinder ($150-$300/day) 
              and buying professional-grade 100% solids epoxy instead of a kit.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Is epoxy flooring worth it for a garage?</h3>
            <p className="mb-0">
              Yes. A professionally installed epoxy floor costs $2,500-$5,000 for a 2-car garage and lasts 
              15-20 years. That works out to $125-$333 per year for a floor that resists stains, is easy to 
              clean, and adds $5,000-$10,000 in perceived home value. The ROI is strong, especially if you 
              plan to sell the home.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">What is the best epoxy for a garage floor?</h3>
            <p className="mb-0">
              For professionals: 100% solids epoxy base coat with a polyaspartic clear top coat. Popular 
              brands include Penntek, Polyaspartic (by ArmorPoxy), Rust Bullet, and Epoxy.com. Avoid 
              anything water-based for professional work. For the best combination of durability and 
              appearance, a full-broadcast flake system with polyaspartic top coat is the industry standard.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">How much does it cost to epoxy a 2-car garage floor?</h3>
            <p className="mb-0">
              Professional installation for a 2-car garage (400-500 sq ft) typically costs $2,500-$5,000 for 
              a flake system. Basic solid-color epoxy runs $1,500-$3,000. Premium metallic finishes can cost 
              $4,000-$7,500. DIY materials-only cost is $600-$1,500 for the same space.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Does epoxy flooring increase home value?</h3>
            <p className="mb-0">
              While it doesn't directly appear in appraisals, real estate agents consistently report that 
              a finished garage floor adds $5,000-$10,000 in perceived value and makes homes sell faster. 
              It's one of the highest-ROI garage improvements you can make.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mt-0">Epoxy vs. polyaspartic — which is better?</h3>
            <p className="mb-0">
              Polyaspartic is newer, more UV-stable, and cures much faster (same-day return to service). 
              It's also 40-60% more expensive. The best systems use both: epoxy base coat (for adhesion 
              and thickness at lower cost) with a polyaspartic top coat (for UV resistance and fast cure). 
              This hybrid approach gives you the best of both worlds.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold text-white mt-0">Ready to Estimate Your Epoxy Project?</h2>
          <p className="text-gray-300">
            Use our free concrete calculators to estimate material quantities, then check out our 
            professional estimate templates to create polished bids your customers will trust.
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
            "headline": "Epoxy Garage Floor Coating: Complete Cost & Installation Guide for 2026",
            "description": "Complete guide to epoxy garage floor coatings — costs, installation steps, coating types, DIY vs professional, and business startup economics.",
            "author": { "@type": "Organization", "name": "ConcreteCalc" },
            "publisher": { "@type": "Organization", "name": "ConcreteCalc" },
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
                "name": "How long does epoxy garage floor coating last?",
                "acceptedAnswer": { "@type": "Answer", "text": "Professional-grade epoxy with a polyaspartic top coat lasts 15-20+ years. DIY kits typically last 1-3 years." }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to epoxy a 2-car garage floor?",
                "acceptedAnswer": { "@type": "Answer", "text": "Professional installation for a 2-car garage (400-500 sq ft) typically costs $2,500-$5,000 for a flake system. Basic solid-color epoxy runs $1,500-$3,000." }
              },
              {
                "@type": "Question",
                "name": "Can you epoxy a garage floor yourself?",
                "acceptedAnswer": { "@type": "Answer", "text": "You can, but DIY kits from big box stores have a 50%+ failure rate within 2 years due to inadequate surface prep and thin formulas." }
              },
              {
                "@type": "Question",
                "name": "Epoxy vs polyaspartic — which is better?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best systems use both: epoxy base coat for adhesion and polyaspartic top coat for UV resistance and fast cure." }
              }
            ]
          }),
        }}
      />
    </main>
  )
}
