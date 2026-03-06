import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Cutting: Methods, Costs & Equipment Guide (2026)",
  description:
    "Complete guide to concrete cutting for contractors: saw types, costs ($1.50-4.50/linear ft), when to cut control joints, demolition cutting, and how to start a concrete cutting business.",
  keywords:
    "concrete cutting, concrete cutting saw, concrete saw cutting, concrete cutting cost, concrete cutting contractor, how to cut concrete, concrete joint cutting",
};

export default function ConcreteCuttingGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Cutting Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Cutting: The Complete Contractor&apos;s Guide for 2026</h1>

        <p className="lead text-xl text-gray-600">
          Concrete cutting is a <strong>$10.96 CPC keyword</strong> — meaning businesses pay nearly $11 per click on Google Ads. That tells you exactly how valuable this service is. With <strong>4,400+ monthly searches</strong> for &quot;concrete cutting&quot; and 22,200/mo for &quot;concrete cutting saw,&quot; there&apos;s massive demand. Whether you&apos;re cutting control joints, creating openings, or doing demolition work, this guide covers methods, equipment, pricing, and the business opportunity.
        </p>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Quick Cost Reference</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Control joint cutting (green concrete):</strong> $1.00–$2.00/linear ft</li>
            <li>• <strong>Flat sawing (cured slab, 4&quot; depth):</strong> $1.50–$3.50/linear ft</li>
            <li>• <strong>Wall sawing (vertical cuts):</strong> $15–$25/linear ft</li>
            <li>• <strong>Core drilling (per hole, 4&quot; dia):</strong> $50–$150 per hole</li>
            <li>• <strong>Wire sawing (heavy/specialty):</strong> $20–$50/linear ft</li>
            <li>• <strong>Minimum service call:</strong> $150–$500</li>
          </ul>
        </div>

        <h2>Types of Concrete Cutting</h2>

        <h3>1. Control Joint Cutting (Early-Entry Sawing)</h3>

        <p>
          The most common type of concrete cutting. Control joints (also called contraction joints) are cut into freshly placed concrete to control where cracking occurs. Without joints, concrete will crack randomly — joints ensure cracks happen along planned lines where they&apos;re invisible.
        </p>

        <p><strong>When to cut:</strong></p>
        <ul>
          <li><strong>Early-entry (soft-cut) saws:</strong> Cut 1-4 hours after finishing, before the concrete cools and shrinks. Uses a smaller blade (1&quot; depth). This is the modern standard for most flatwork.</li>
          <li><strong>Conventional wet saws:</strong> Cut 4-12 hours after placement, once the concrete can support the weight of the saw without raveling the edges. Cut to 1/4 of slab depth.</li>
        </ul>

        <p><strong>Joint spacing rules of thumb:</strong></p>
        <ul>
          <li>Spacing (in feet) = 2-3× the slab thickness (in inches). So a 4&quot; slab gets joints every 8-12 feet.</li>
          <li>Keep panels roughly square — avoid panels with length &gt; 1.5× the width.</li>
          <li>Always cut to columns, corners, and changes in section.</li>
          <li>ACI 360 has detailed guidance for industrial floors.</li>
        </ul>

        <h3>2. Flat Sawing (Slab Sawing)</h3>

        <p>
          Horizontal cuts in cured concrete surfaces — for utilities trenching, road repair, expansion joint maintenance, or creating openings in existing slabs. Uses walk-behind saws with 12-36&quot; diamond blades and water cooling.
        </p>

        <p><strong>Applications:</strong></p>
        <ul>
          <li>Utility trench cuts in parking lots and streets</li>
          <li>Removing damaged concrete sections for <Link href="/blog/concrete-repair-guide" className="text-orange-600 hover:text-orange-700">repair</Link></li>
          <li>Creating expansion joints in existing slabs</li>
          <li>Decorative pattern cuts (borders, bands)</li>
        </ul>

        <h3>3. Wall Sawing</h3>

        <p>
          Vertical or angled cuts in concrete walls, typically to create door/window openings, HVAC penetrations, or structural modifications. Uses a track-mounted saw that rides along a rail bolted to the wall.
        </p>

        <p>
          Wall sawing is a premium service — it requires specialized equipment ($15,000-40,000 for a complete wall saw setup) and expertise. Most general concrete contractors sub this out to specialty cutting companies.
        </p>

        <h3>4. Core Drilling</h3>

        <p>
          Creating round holes in concrete for plumbing, electrical, HVAC, or structural connections. Uses diamond-tipped cylindrical bits (1&quot; to 60&quot; diameter) on a drill rig bolted to the floor or wall.
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Core Size</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Common Use</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price per Hole (4&quot; slab)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-4 py-2">1-2&quot;</td><td className="border border-gray-300 px-4 py-2">Electrical conduit, rebar pins</td><td className="border border-gray-300 px-4 py-2">$25-50</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">3-4&quot;</td><td className="border border-gray-300 px-4 py-2">Plumbing drains, HVAC</td><td className="border border-gray-300 px-4 py-2">$50-150</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">6-8&quot;</td><td className="border border-gray-300 px-4 py-2">Larger plumbing, ductwork</td><td className="border border-gray-300 px-4 py-2">$150-350</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">10-14&quot;</td><td className="border border-gray-300 px-4 py-2">HVAC chases, structural</td><td className="border border-gray-300 px-4 py-2">$300-800</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">18-24&quot;</td><td className="border border-gray-300 px-4 py-2">Manholes, large penetrations</td><td className="border border-gray-300 px-4 py-2">$800-2,000+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>5. Wire Sawing</h3>

        <p>
          For cutting massive concrete structures where conventional saws can&apos;t reach — bridge sections, dam walls, reactor containment, pier caps. Uses a diamond-embedded wire loop pulled through the concrete by a hydraulic drive unit.
        </p>

        <p>
          Wire sawing is a niche specialty — if you&apos;re doing this work, you&apos;re already an expert. The opportunity for most contractors is in flat sawing and core drilling, which make up 80%+ of the concrete cutting market.
        </p>

        <h2>Equipment Guide</h2>

        <h3>Flat Saws (Walk-Behind)</h3>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Blade Size</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cost (New)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-4 py-2">Early-entry (Soff-Cut)</td><td className="border border-gray-300 px-4 py-2">6-13&quot;</td><td className="border border-gray-300 px-4 py-2">Control joints in green concrete</td><td className="border border-gray-300 px-4 py-2">$2,500-5,000</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Mid-range walk-behind</td><td className="border border-gray-300 px-4 py-2">14-20&quot;</td><td className="border border-gray-300 px-4 py-2">Residential/commercial flatwork</td><td className="border border-gray-300 px-4 py-2">$3,000-8,000</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">High-HP walk-behind</td><td className="border border-gray-300 px-4 py-2">20-36&quot;</td><td className="border border-gray-300 px-4 py-2">Road cutting, deep cuts</td><td className="border border-gray-300 px-4 py-2">$8,000-25,000</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Self-propelled ride-on</td><td className="border border-gray-300 px-4 py-2">36-60&quot;</td><td className="border border-gray-300 px-4 py-2">Highway, airport, heavy commercial</td><td className="border border-gray-300 px-4 py-2">$50,000-150,000</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Diamond Blades — Your Biggest Ongoing Cost</h3>

        <p>
          Diamond blades are the single biggest consumable expense in concrete cutting. Here&apos;s what contractors need to know:
        </p>

        <ul>
          <li><strong>Economy blades ($50-150 for 14&quot;):</strong> Good for 500-1,000 linear feet. Fine for occasional cutting.</li>
          <li><strong>Pro-grade blades ($200-500 for 14&quot;):</strong> Good for 2,000-5,000 linear feet. Better diamond concentration, faster cutting, smoother finish. Worth the premium for regular cutting work.</li>
          <li><strong>Premium/segmented blades ($500-1,500 for 14&quot;):</strong> Good for 5,000-15,000 linear feet. Used for production cutting — road work, large commercial projects.</li>
        </ul>

        <p>
          <strong>Key rule:</strong> Match the blade to the material. Soft-bond blades for hard concrete (high PSI, heavy rebar). Hard-bond blades for soft/green concrete. Using the wrong bond = slow cutting and premature blade wear = money wasted.
        </p>

        <h2>Safety — Non-Negotiable</h2>

        <p>
          Concrete cutting is one of the most hazardous operations on a job site. <strong>Silica dust from cutting concrete causes silicosis</strong> — an irreversible, potentially fatal lung disease. OSHA&apos;s Table 1 requirements (29 CFR 1926.1153) are strict and enforced:
        </p>

        <ul>
          <li><strong>Wet cutting is mandatory</strong> for most operations. The water suppresses 85-95% of silica dust. No water = OSHA violation.</li>
          <li><strong>Respiratory protection:</strong> Even with wet cutting, workers need at minimum an N95 respirator. For enclosed spaces, use a P100 half-face or full-face respirator.</li>
          <li><strong>Eye protection:</strong> Safety glasses with side shields (minimum). Face shield recommended for wall sawing and core drilling overhead.</li>
          <li><strong>Hearing protection:</strong> Concrete saws produce 100-115 dB. Earplugs + earmuffs for extended cutting.</li>
          <li><strong>PPE checklist:</strong> Steel-toe boots, cut-resistant gloves, high-vis vest, hard hat (if overhead hazards).</li>
        </ul>

        <p>
          <strong>OSHA fines for silica violations start at $16,131 per violation</strong> (2026 rates). A willful violation can be $161,323. This is not optional — it&apos;s survival. Budget for proper PPE and wet-cutting equipment from day one.
        </p>

        <h2>Pricing Your Concrete Cutting Services</h2>

        <p>
          Concrete cutting is typically priced per linear foot (flat/wall sawing) or per hole (core drilling), plus a minimum service charge:
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price Range</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Typical Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-4 py-2">Control joint cutting (new slabs)</td><td className="border border-gray-300 px-4 py-2">$1.00-2.00/LF</td><td className="border border-gray-300 px-4 py-2">50-60%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Flat sawing (4&quot; depth)</td><td className="border border-gray-300 px-4 py-2">$1.50-3.50/LF</td><td className="border border-gray-300 px-4 py-2">40-55%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Flat sawing (8&quot;+ depth)</td><td className="border border-gray-300 px-4 py-2">$3.50-7.00/LF</td><td className="border border-gray-300 px-4 py-2">35-50%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Wall sawing</td><td className="border border-gray-300 px-4 py-2">$15-25/LF</td><td className="border border-gray-300 px-4 py-2">40-55%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Core drilling (1-4&quot;)</td><td className="border border-gray-300 px-4 py-2">$25-150/hole</td><td className="border border-gray-300 px-4 py-2">55-70%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Core drilling (6-12&quot;)</td><td className="border border-gray-300 px-4 py-2">$150-800/hole</td><td className="border border-gray-300 px-4 py-2">45-60%</td></tr>
              <tr><td className="border border-gray-300 px-4 py-2">Minimum service call</td><td className="border border-gray-300 px-4 py-2">$150-500</td><td className="border border-gray-300 px-4 py-2">—</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Pro tip on the minimum:</strong> Never cut without a minimum service charge. Your travel, setup, and teardown time is the same whether you cut 5 feet or 50 feet. A $300 minimum ensures you don&apos;t lose money on small jobs. Smart contractors set their minimum at their break-even for 2 hours of work.
        </p>

        <h2>Starting a Concrete Cutting Business</h2>

        <p>
          Concrete cutting is one of the best specialty trades to start because:
        </p>

        <ul>
          <li><strong>Low startup cost:</strong> You can start with a walk-behind saw ($3,000-5,000), a core drill ($1,500-3,000), blades ($500-1,000), and a truck. Total startup: $8,000-15,000.</li>
          <li><strong>High demand:</strong> Every concrete contractor, plumber, electrician, and GC needs cutting services. You serve an entire industry, not individual homeowners.</li>
          <li><strong>Recurring work:</strong> Once you&apos;re a GC&apos;s go-to cutter, they call you on every project. Concrete gets poured every day.</li>
          <li><strong>Scalable:</strong> Add crews and equipment as demand grows. Each crew is a profit center.</li>
          <li><strong>High barriers to entry:</strong> The silica safety requirements, equipment knowledge, and skill needed keep casual competition out.</li>
        </ul>

        <h3>First Steps</h3>
        <ol>
          <li>Get your <Link href="/blog/concrete-business-insurance" className="text-orange-600 hover:text-orange-700">contractor&apos;s license and insurance</Link> (GL minimum $1M, commercial auto)</li>
          <li>Buy a quality walk-behind saw and core drill (buy used if budget-tight)</li>
          <li>Get OSHA 10 or 30 certified — and complete a silica exposure control plan</li>
          <li>Market to GCs, plumbers, and electrical contractors — they&apos;re your customers</li>
          <li>Start with control joint cutting (easiest, most volume) and add services as you grow</li>
        </ol>

        <h2>Frequently Asked Questions</h2>

        <h3>How deep should control joints be cut?</h3>
        <p>Control joints should be cut to a minimum of 1/4 of the slab thickness. For a 4&quot; slab, that&apos;s 1&quot; deep. For a 6&quot; slab, 1.5&quot; deep. Early-entry saws cut shallower (about 1&quot;) but work because the concrete hasn&apos;t fully hardened yet.</p>

        <h3>When should you cut control joints?</h3>
        <p>With early-entry saws: 1-4 hours after finishing (before the concrete cools). With conventional saws: 4-12 hours in warm weather, 12-24 hours in cold weather. The rule: cut before you see random cracks. If cracks appear before you cut, you waited too long.</p>

        <h3>Can you cut concrete without water?</h3>
        <p>Dry cutting is possible with diamond blades designed for it, but it creates massive amounts of silica dust — an OSHA violation without proper dust collection (vacuum + HEPA filter rated for silica). Wet cutting is safer, faster, extends blade life, and produces cleaner cuts. Always wet-cut when possible.</p>

        <h3>How much does concrete cutting cost?</h3>
        <p>Flat sawing costs $1.50-3.50 per linear foot for standard 4&quot; slab cuts. Core drilling runs $50-150 per hole for typical 3-4&quot; diameter holes. Most cutting contractors have a minimum service charge of $150-500. See the <Link href="/blog/how-to-estimate-concrete-jobs" className="text-orange-600 hover:text-orange-700">estimating guide</Link> for help calculating project costs.</p>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 not-prose my-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📐 Plan Your Concrete Project</h3>
          <p className="text-gray-700 mb-4">
            Use our free calculators to estimate materials and costs:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/slab" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
              Slab Calculator
            </Link>
            <Link href="/calculators/rebar" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
              Rebar Calculator
            </Link>
            <Link href="/blog/how-to-bid-concrete-jobs" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              How to Bid Concrete Jobs →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
