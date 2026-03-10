import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Slab Cost in 2026: Installation Prices & Cost to Pour",
  description:
    "How much does concrete slab installation cost? Get 2026 prices for pouring and installing concrete slabs — by size, thickness, and region. Includes cost calculator, DIY vs pro comparison, and money-saving tips.",
  keywords:
    "concrete slab installation cost, cost to install a concrete slab, cost to pour a concrete slab, cost of laying concrete slab, estimate cost of concrete slab, concrete slab cost, concrete slab cost per square foot, how much does a concrete slab cost",
  alternates: {
    canonical: "https://estimateconcrete.com/blog/concrete-slab-cost-guide",
  },
};

const faqItems = [
  {
    question: "How much does it cost to install a concrete slab?",
    answer:
      "A concrete slab costs $4–$8 per square foot for materials only and $6–$18 per square foot fully installed with site prep, reinforcement, and finishing. A typical 400 sq ft patio slab costs $2,700–$5,600 installed. A 2-car garage floor (500 sq ft) runs $4,000–$7,000.",
  },
  {
    question: "How much does it cost to pour a 20x20 concrete slab?",
    answer:
      "A 20×20 concrete slab (400 sq ft) costs $2,700–$5,600 for a basic broom finish at 4\" thick. With a thicker 6\" slab and rebar reinforcement (recommended for garages), expect $4,000–$7,000. Stamped or decorative finishes add $2,400–$6,000 on top.",
  },
  {
    question: "How much does it cost to pour a 30x30 concrete slab?",
    answer:
      "A 30×30 slab (900 sq ft) costs $6,000–$12,600 for basic broom finish at 4\" thickness. For a 6\" thick slab with rebar (shop or garage), expect $8,000–$16,000. Larger slabs get a slightly lower per-square-foot price due to economies of scale.",
  },
  {
    question: "How much does a concrete slab cost per square foot?",
    answer:
      "Installed concrete slab costs range from $6–$18 per square foot depending on thickness, reinforcement, finish type, and your location. Basic 4\" broom finish runs $6–$10/sq ft. A 6\" reinforced slab with decorative finish can reach $15–$18/sq ft.",
  },
  {
    question: "Is it cheaper to pour concrete yourself?",
    answer:
      "DIY saves roughly $1,500–$2,500 on a 400 sq ft slab (about 40–50% of the total cost). However, concrete is unforgiving — once the truck arrives, you have 60–90 minutes to place and finish. DIY makes sense for small, non-structural slabs under 100 sq ft. For driveways, garages, and anything structural, hire a pro.",
  },
  {
    question: "What is the cheapest way to lay a concrete slab?",
    answer:
      "The cheapest approach: do your own site prep (clearing, grading, compacting), use wire mesh instead of rebar (for patios/walkways only), choose broom finish, pour in the off-season (fall/winter for 10–20% savings), and get at least 3 contractor quotes. On a 400 sq ft slab, this can save $1,000–$2,000 vs. full-service pricing.",
  },
];

export default function ConcreteSlabCostGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Concrete Slab Cost in 2026: Installation Prices & Cost to Pour",
        description:
          "Complete guide to concrete slab installation costs in 2026. Covers cost per square foot by type, thickness, reinforcement, finishing, and region.",
        author: {
          "@type": "Organization",
          name: "EstimateConcrete",
          url: "https://estimateconcrete.com",
        },
        publisher: {
          "@type": "Organization",
          name: "EstimateConcrete",
          url: "https://estimateconcrete.com",
        },
        datePublished: "2026-03-06",
        dateModified: "2026-03-10",
        mainEntityOfPage:
          "https://estimateconcrete.com/blog/concrete-slab-cost-guide",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">Concrete Slab Cost Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Slab Cost in 2026: What You&apos;ll Actually Pay</h1>

        <p className="lead text-xl text-gray-600">
          A concrete slab costs <strong>$4–$8 per square foot</strong> for basic work and <strong>$8–$18+ per square foot</strong> installed with site prep, reinforcement, and finishing. The total price depends on slab type, thickness, your location, and whether you hire a pro or do it yourself. This guide breaks down real costs for every common slab type.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">In This Guide</p>
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            <li><a href="#by-type" className="text-blue-700 hover:underline">Cost by Slab Type</a></li>
            <li><a href="#cost-breakdown" className="text-blue-700 hover:underline">Cost Breakdown</a></li>
            <li><a href="#thickness" className="text-blue-700 hover:underline">Thickness Guide</a></li>
            <li><a href="#site-prep" className="text-blue-700 hover:underline">Site Preparation Costs</a></li>
            <li><a href="#reinforcement" className="text-blue-700 hover:underline">Reinforcement Options</a></li>
            <li><a href="#diy-vs-pro" className="text-blue-700 hover:underline">DIY vs. Hiring a Pro</a></li>
            <li><a href="#finishing" className="text-blue-700 hover:underline">Finishing Options</a></li>
            <li><a href="#regional" className="text-blue-700 hover:underline">Regional Cost Differences</a></li>
            <li><a href="#save-money" className="text-blue-700 hover:underline">8 Ways to Save</a></li>
            <li><a href="#faq" className="text-blue-700 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Get Your Exact Cost</p>
          <p className="text-orange-700 text-sm mb-3">
            Enter your slab dimensions in our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">Concrete Slab Calculator</Link>{" "}
            for an instant cost estimate with material quantities, rebar needs, and cubic yards.
          </p>
        </div>

        <h2 id="by-type">Cost by Slab Type</h2>
        <p>
          Not all concrete slabs are created equal. A backyard patio has different requirements (and costs) than a house foundation. Here&apos;s what each type costs fully installed in 2026:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Slab Type</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Size</th>
                <th className="text-left px-4 py-2 font-semibold">Thickness</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft (installed)</th>
                <th className="text-left px-4 py-2 font-semibold">Total Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Patio slab</td>
                <td className="px-4 py-2">200–500 sq ft</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">$6–$12</td>
                <td className="px-4 py-2">$1,200–$6,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Garage floor (2-car)</td>
                <td className="px-4 py-2">400–576 sq ft</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">$8–$14</td>
                <td className="px-4 py-2">$3,200–$8,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Shed/workshop slab</td>
                <td className="px-4 py-2">100–300 sq ft</td>
                <td className="px-4 py-2">4–5&quot;</td>
                <td className="px-4 py-2">$7–$13</td>
                <td className="px-4 py-2">$700–$3,900</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">House foundation (slab-on-grade)</td>
                <td className="px-4 py-2">1,000–2,500 sq ft</td>
                <td className="px-4 py-2">4–6&quot; + footings</td>
                <td className="px-4 py-2">$8–$16</td>
                <td className="px-4 py-2">$8,000–$40,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Driveway</td>
                <td className="px-4 py-2">400–800 sq ft</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">$8–$18</td>
                <td className="px-4 py-2">$3,200–$14,400</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Basketball court</td>
                <td className="px-4 py-2">2,500–5,000 sq ft</td>
                <td className="px-4 py-2">5&quot;</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">$15,000–$50,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Why such wide ranges?</strong> The low end assumes simple, flat terrain with easy truck access and broom finish. The high end includes challenging site conditions, thicker slabs, heavy reinforcement, or decorative finishing. Your actual cost will fall somewhere in between based on your specific project details.
        </p>

        <h2 id="cost-breakdown">Where the Money Goes: Cost Breakdown</h2>
        <p>
          Understanding what you&apos;re paying for helps you make smart decisions about where to save and where to invest. Here&apos;s how costs break down for a typical 400 sq ft residential slab (4&quot; thick, broom finish):
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Cost Component</th>
                <th className="text-left px-4 py-2 font-semibold">$/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">% of Total</th>
                <th className="text-left px-4 py-2 font-semibold">400 sq ft Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete (material only)</td>
                <td className="px-4 py-2">$1.75–$2.50</td>
                <td className="px-4 py-2">20–25%</td>
                <td className="px-4 py-2">$700–$1,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Base gravel (4&quot; compacted)</td>
                <td className="px-4 py-2">$0.50–$1.00</td>
                <td className="px-4 py-2">5–10%</td>
                <td className="px-4 py-2">$200–$400</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Reinforcement (wire mesh or rebar)</td>
                <td className="px-4 py-2">$0.50–$1.50</td>
                <td className="px-4 py-2">5–15%</td>
                <td className="px-4 py-2">$200–$600</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Forms and stakes</td>
                <td className="px-4 py-2">$0.25–$0.50</td>
                <td className="px-4 py-2">3–5%</td>
                <td className="px-4 py-2">$100–$200</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Site prep labor</td>
                <td className="px-4 py-2">$1.00–$3.00</td>
                <td className="px-4 py-2">10–20%</td>
                <td className="px-4 py-2">$400–$1,200</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Pour and finish labor</td>
                <td className="px-4 py-2">$2.50–$5.00</td>
                <td className="px-4 py-2">25–35%</td>
                <td className="px-4 py-2">$1,000–$2,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Finishing supplies, joints, curing</td>
                <td className="px-4 py-2">$0.25–$0.50</td>
                <td className="px-4 py-2">2–5%</td>
                <td className="px-4 py-2">$100–$200</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total (basic broom finish)</td>
                <td className="px-4 py-2">$6.75–$14.00</td>
                <td className="px-4 py-2">100%</td>
                <td className="px-4 py-2">$2,700–$5,600</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For a detailed material cost breakdown, see our <Link href="/blog/concrete-cost-per-yard">concrete cost per yard guide</Link>.
        </p>

        <h2 id="thickness">Thickness Guide: How Thick Should Your Slab Be?</h2>
        <p>
          Slab thickness directly affects both cost and structural performance. Going too thin risks cracking; going too thick wastes money. Here&apos;s what the building codes and experienced contractors recommend:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Application</th>
                <th className="text-left px-4 py-2 font-semibold">Min. Thickness</th>
                <th className="text-left px-4 py-2 font-semibold">Recommended</th>
                <th className="text-left px-4 py-2 font-semibold">PSI Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Walkway / sidewalk</td>
                <td className="px-4 py-2">3.5&quot;</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">3,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Patio</td>
                <td className="px-4 py-2">3.5&quot;</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">3,000–3,500</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Shed / light storage</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">4–5&quot;</td>
                <td className="px-4 py-2">3,500</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Residential driveway</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">4,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Garage floor</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">5–6&quot;</td>
                <td className="px-4 py-2">4,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">House slab foundation</td>
                <td className="px-4 py-2">4&quot;</td>
                <td className="px-4 py-2">4–6&quot; + thickened edge</td>
                <td className="px-4 py-2">3,500–4,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Heavy vehicle / RV pad</td>
                <td className="px-4 py-2">6&quot;</td>
                <td className="px-4 py-2">6–8&quot;</td>
                <td className="px-4 py-2">4,000–5,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Cost impact of thickness:</strong> Going from 4&quot; to 6&quot; adds roughly 50% more concrete. On a 400 sq ft slab, that&apos;s about 2.5 extra cubic yards — an additional $350–$500 in material alone. But for driveways and garages, the extra thickness prevents cracking and extends slab life by decades. It&apos;s worth it.
        </p>

        <h2 id="site-prep">Site Preparation Costs</h2>
        <p>
          Site prep is often the wild card in slab pricing. A flat, clean lot with good soil needs minimal work. A sloped lot with trees, old concrete, or poor drainage can add thousands.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Site Prep Task</th>
                <th className="text-left px-4 py-2 font-semibold">Cost</th>
                <th className="text-left px-4 py-2 font-semibold">When Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Excavation & grading</td>
                <td className="px-4 py-2">$1–$3/sq ft</td>
                <td className="px-4 py-2">Almost always</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Old concrete removal</td>
                <td className="px-4 py-2">$2–$6/sq ft</td>
                <td className="px-4 py-2">Replacement jobs</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Tree/stump removal</td>
                <td className="px-4 py-2">$200–$1,500+ each</td>
                <td className="px-4 py-2">When trees are in the way</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gravel base (4–6&quot;)</td>
                <td className="px-4 py-2">$0.50–$1.50/sq ft</td>
                <td className="px-4 py-2">Always recommended</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Compaction</td>
                <td className="px-4 py-2">$0.25–$0.75/sq ft</td>
                <td className="px-4 py-2">Always — especially on fill soil</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Drainage / French drain</td>
                <td className="px-4 py-2">$10–$30/linear ft</td>
                <td className="px-4 py-2">Low areas, poor drainage</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Retaining wall (if needed)</td>
                <td className="px-4 py-2">$20–$50/sq ft of wall</td>
                <td className="px-4 py-2">Sloped sites</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="reinforcement">Reinforcement Options and Costs</h2>
        <p>
          Reinforcement prevents cracking and holds the slab together if cracks do form. The right choice depends on what the slab will support:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Reinforcement Type</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Best For</th>
                <th className="text-left px-4 py-2 font-semibold">Strength Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Fiber mesh (added to mix)</td>
                <td className="px-4 py-2">$0.15–$0.30</td>
                <td className="px-4 py-2">Supplement to other reinforcement</td>
                <td className="px-4 py-2">Low (crack reduction only)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Wire mesh 6×6 W1.4</td>
                <td className="px-4 py-2">$0.35–$0.75</td>
                <td className="px-4 py-2">Sidewalks, patios, light use</td>
                <td className="px-4 py-2">Moderate</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">#4 rebar @ 18&quot; on center</td>
                <td className="px-4 py-2">$1.00–$1.50</td>
                <td className="px-4 py-2">Driveways, garages, heavy use</td>
                <td className="px-4 py-2">Good</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">#4 rebar @ 12&quot; on center</td>
                <td className="px-4 py-2">$1.50–$2.00</td>
                <td className="px-4 py-2">Heavy loads, poor soil</td>
                <td className="px-4 py-2">High</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">#5 rebar @ 12&quot; on center</td>
                <td className="px-4 py-2">$2.00–$2.50</td>
                <td className="px-4 py-2">Foundations, structural</td>
                <td className="px-4 py-2">Very High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Pro tip:</strong> For residential driveways and garage floors, #4 rebar at 18&quot; on center is the sweet spot — strong enough for vehicle traffic without over-spending. For patios and sidewalks, wire mesh is usually sufficient.
        </p>

        <h2 id="diy-vs-pro">DIY vs. Hiring a Pro: Real Cost Comparison</h2>
        <p>
          Can you pour your own concrete slab and save money? Yes — but the savings might be smaller than you think, and the risks are real. Here&apos;s an honest comparison for a 400 sq ft patio slab:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Cost Item</th>
                <th className="text-left px-4 py-2 font-semibold">DIY</th>
                <th className="text-left px-4 py-2 font-semibold">Professional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete (5.5 yd³)</td>
                <td className="px-4 py-2">$825</td>
                <td className="px-4 py-2">$825</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gravel base</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$200</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Rebar / wire mesh</td>
                <td className="px-4 py-2">$300</td>
                <td className="px-4 py-2">$500</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Forms and stakes</td>
                <td className="px-4 py-2">$120</td>
                <td className="px-4 py-2">$120</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Tool rentals</td>
                <td className="px-4 py-2">$200–$400</td>
                <td className="px-4 py-2">$0 (included)</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Labor</td>
                <td className="px-4 py-2">$0 (your time)</td>
                <td className="px-4 py-2">$1,500–$2,500</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Misc supplies</td>
                <td className="px-4 py-2">$100</td>
                <td className="px-4 py-2">$100</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">$1,745–$1,945</td>
                <td className="px-4 py-2">$3,245–$4,245</td>
              </tr>
              <tr className="border-t bg-orange-50 font-semibold">
                <td className="px-4 py-2">Cost per sq ft</td>
                <td className="px-4 py-2">$4.36–$4.86</td>
                <td className="px-4 py-2">$8.11–$10.61</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>The catch with DIY:</strong> You save roughly $1,500–$2,300 on a 400 sq ft slab, but you&apos;re trading it for 2–3 days of extremely hard physical work and significant risk. Concrete doesn&apos;t wait — once the truck arrives, you have 60–90 minutes to place, screed, and finish. If you&apos;re not experienced, you can end up with an uneven, cracking slab that costs more to fix than it would have cost to hire a pro.
        </p>

        <p><strong>DIY makes sense when:</strong></p>
        <ul>
          <li>The slab is small (under 100 sq ft)</li>
          <li>It&apos;s non-structural (storage pad, stepping stones)</li>
          <li>You have concrete experience or a friend who does</li>
          <li>You have helpers — never pour alone</li>
        </ul>

        <p><strong>Hire a pro when:</strong></p>
        <ul>
          <li>The slab is over 200 sq ft</li>
          <li>It&apos;s structural (foundation, garage)</li>
          <li>You want stamped or decorative finish</li>
          <li>The site needs significant grading or drainage</li>
          <li>You need it done right the first time (driveways, visible areas)</li>
        </ul>

        <h2 id="finishing">Finishing Options and Their Cost Impact</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Finish Type</th>
                <th className="text-left px-4 py-2 font-semibold">Added Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Broom finish</td>
                <td className="px-4 py-2">$0 (standard)</td>
                <td className="px-4 py-2">Textured, slip-resistant. Most common for exterior slabs.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Smooth trowel</td>
                <td className="px-4 py-2">$0–$1</td>
                <td className="px-4 py-2">Smooth, polished look. Used for garage floors, interior.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Exposed aggregate</td>
                <td className="px-4 py-2">$2–$5</td>
                <td className="px-4 py-2">Decorative stone surface. Popular for patios and driveways.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Stamped concrete</td>
                <td className="px-4 py-2">$6–$15</td>
                <td className="px-4 py-2">Mimics stone, brick, or tile. See our <Link href="/blog/stamped-concrete-cost-guide" className="underline">stamped concrete guide</Link>.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Colored (integral)</td>
                <td className="px-4 py-2">$1–$3</td>
                <td className="px-4 py-2">Color mixed throughout. Permanent, no fading.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Stained (acid or water-based)</td>
                <td className="px-4 py-2">$2–$6</td>
                <td className="px-4 py-2">Applied after curing. Unique, variegated look.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="save-money">8 Ways to Reduce Concrete Slab Costs</h2>
        <ol>
          <li><strong>Get the dimensions right.</strong> Use our <Link href="/calculators/slab">Slab Calculator</Link> to avoid over-ordering concrete. Even half a yard of waste adds $75–$100.</li>
          <li><strong>Do your own site prep.</strong> Clearing, grading, and compacting the base is labor-intensive but doesn&apos;t require special skills. This can save $1–$3/sq ft.</li>
          <li><strong>Pour in the off-season.</strong> Fall and late winter often bring lower material prices and contractors hungry for work. You can save 10–20% on the total job.</li>
          <li><strong>Combine projects.</strong> If you need a patio and a sidewalk, pour them at the same time. One mobilization and truck delivery is cheaper than two.</li>
          <li><strong>Skip unnecessary upgrades.</strong> A broom finish is perfectly fine for most patios and walkways. Decorative finishes look great but nearly double the price.</li>
          <li><strong>Choose wire mesh over rebar for light-duty slabs.</strong> For patios and walkways, wire mesh provides adequate reinforcement at half the cost of rebar.</li>
          <li><strong>Get multiple quotes.</strong> Always get at least three bids from licensed contractors. Prices can vary 30–50% for the same job.</li>
          <li><strong>Ask about leftover concrete.</strong> Some contractors offer discounts if they can schedule your small pour at the end of a day when they have leftover concrete from another job.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need an Accurate Slab Estimate?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our Pro Estimate Template calculates material quantities, labor costs, and total project pricing automatically. Perfect for contractors building bids or homeowners comparing quotes.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            Get the Pro Estimate Template — $49
          </Link>
        </div>

        <h2 id="regional">Regional Cost Differences</h2>
        <p>
          Concrete slab installation costs vary significantly by region. Labor rates, material availability, and seasonal factors all play a role:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Region</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft (installed)</th>
                <th className="text-left px-4 py-2 font-semibold">400 sq ft Slab</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Southeast (FL, GA, AL, SC)</td>
                <td className="px-4 py-2">$5–$10</td>
                <td className="px-4 py-2">$2,000–$4,000</td>
                <td className="px-4 py-2">Lower labor costs, year-round season</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Midwest (OH, IN, MI, IL)</td>
                <td className="px-4 py-2">$6–$12</td>
                <td className="px-4 py-2">$2,400–$4,800</td>
                <td className="px-4 py-2">Short season = higher demand in summer</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">South / Southwest (TX, AZ, NM)</td>
                <td className="px-4 py-2">$6–$11</td>
                <td className="px-4 py-2">$2,400–$4,400</td>
                <td className="px-4 py-2">Long season, competitive market</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Northeast (NY, NJ, MA, CT)</td>
                <td className="px-4 py-2">$8–$16</td>
                <td className="px-4 py-2">$3,200–$6,400</td>
                <td className="px-4 py-2">Higher labor, frost depth requirements</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">West Coast (CA, WA, OR)</td>
                <td className="px-4 py-2">$9–$18</td>
                <td className="px-4 py-2">$3,600–$7,200</td>
                <td className="px-4 py-2">Highest labor costs, permits stricter</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Mountain (CO, UT, MT)</td>
                <td className="px-4 py-2">$7–$14</td>
                <td className="px-4 py-2">$2,800–$5,600</td>
                <td className="px-4 py-2">Altitude affects curing, short season</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Check our <Link href="/states">state-by-state guides</Link> for specific costs, licensing requirements, and concrete contractor resources in your area.
        </p>

        {/* FAQ Section */}
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <h2 id="calculators">Free Concrete Calculators</h2>
        <p>Get instant estimates for your project:</p>
        <ul>
          <li><Link href="/calculators/slab">Concrete Slab Calculator</Link> — Cubic yards, bags, rebar, and cost estimates</li>
          <li><Link href="/calculators/driveway">Driveway Calculator</Link> — Driveway-specific sizing and costs</li>
          <li><Link href="/calculators/patio">Patio Calculator</Link> — Patio-specific dimensions and costs</li>
          <li><Link href="/calculators/footing">Footing Calculator</Link> — Foundation and footing estimates</li>
        </ul>
        <p>
          For more pricing information, see our guides on <Link href="/blog/concrete-driveway-cost-guide">driveway costs</Link>, <Link href="/blog/concrete-patio-cost-guide">patio costs</Link>, <Link href="/blog/concrete-foundation-cost-guide">foundation costs</Link>, and <Link href="/blog/concrete-cost-per-yard">concrete cost per yard</Link>.
        </p>

        <p>
          Starting a concrete business? Read our{" "}
          <Link href="/blog/how-to-start-concrete-business">complete startup guide</Link> and{" "}
          <Link href="/blog/how-to-bid-concrete-jobs">bidding guide</Link> to price your work profitably.
        </p>
      </article>
    </div>
  );
}
