import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Concrete Sidewalk Cost in 2026: Cost of Pouring & Replacement Prices",
  description:
    "How much does a concrete sidewalk cost? 2026 prices: $6–$12 per square foot installed. Get cost breakdowns for pouring new sidewalks, replacement, repair vs replace, and DIY vs pro.",
  keywords:
    "cost of pouring concrete sidewalk, concrete sidewalk cost, concrete sidewalk replacement cost, concrete sidewalk cost per square foot, how much does a concrete sidewalk cost, sidewalk installation cost",
  alternates: {
    canonical: "https://estimateconcrete.com/blog/concrete-sidewalk-cost-guide",
  },
};

const faqItems = [
  {
    question: "How much does it cost to pour a concrete sidewalk?",
    answer:
      "Pouring a concrete sidewalk costs $6–$12 per square foot installed, or $24–$48 per linear foot for a standard 4-foot-wide walkway. A typical 50-foot residential sidewalk (200 sq ft) costs $1,200–$2,400. Stamped or decorative sidewalks run $12–$20 per square foot.",
  },
  {
    question: "How much does concrete sidewalk replacement cost?",
    answer:
      "Replacing a concrete sidewalk costs $8–$16 per square foot, which includes $2–$6/sq ft for removing the old sidewalk plus $6–$12/sq ft for the new pour. A 50-foot replacement typically runs $1,600–$3,200 total. Partial replacement (just damaged sections) can reduce costs by 40–60%.",
  },
  {
    question: "Is it cheaper to repair or replace a concrete sidewalk?",
    answer:
      "Repairs are cheaper if damage is limited: crack filling costs $1–$3 per linear foot, mudjacking $3–$6/sq ft, and surface resurfacing $3–$7/sq ft. But if more than 30% of the sidewalk has cracks, heaving, or settling, full replacement is usually more cost-effective long-term.",
  },
  {
    question: "How thick should a concrete sidewalk be?",
    answer:
      "Residential sidewalks should be 4 inches thick minimum — this is code in most municipalities. For sidewalks that cross driveways or carry vehicle traffic, pour 5–6 inches thick with rebar reinforcement. Always pour on a compacted gravel base of 4 inches.",
  },
  {
    question: "Can I pour a concrete sidewalk myself?",
    answer:
      "Yes, sidewalks are one of the more DIY-friendly concrete projects because they're narrow (easier to screed and finish) and typically 4\" thick. DIY saves roughly $3–$5/sq ft in labor. You'll need basic tools: forms, screed board, float, edger, and broom. Budget $3–$6/sq ft for materials only.",
  },
  {
    question: "How long does a concrete sidewalk last?",
    answer:
      "A properly installed concrete sidewalk lasts 25–50 years depending on climate, soil conditions, and maintenance. In freeze-thaw climates, use air-entrained concrete and apply sealer every 2–3 years to maximize lifespan. Expansion joints every 5–6 feet prevent cracking.",
  },
];

export default function ConcreteSidewalkCostGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Concrete Sidewalk Cost in 2026: Cost of Pouring & Replacement Prices",
        description:
          "Complete guide to concrete sidewalk costs. Per square foot pricing for new pours, replacement, repairs, and decorative options.",
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
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
        mainEntityOfPage:
          "https://estimateconcrete.com/blog/concrete-sidewalk-cost-guide",
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
        <Link href="/" className="hover:text-orange-600">Home</Link>{" / "}
        <Link href="/blog" className="hover:text-orange-600">Blog</Link>{" / "}
        <span className="text-gray-900 font-medium">Concrete Sidewalk Cost Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Sidewalk Cost in 2026: What You&apos;ll Actually Pay</h1>

        <p className="lead text-xl text-gray-600">
          A concrete sidewalk costs <strong>$6–$12 per square foot</strong> installed, or <strong>$24–$48 per linear foot</strong> for a standard 4-foot-wide walkway. Replacement costs more ($8–$16/sq ft) because of demolition and hauling. This guide covers real pricing for every scenario — new pours, replacements, repairs, and decorative options.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">In This Guide</p>
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            <li><a href="#cost-overview" className="text-blue-700 hover:underline">Cost Overview</a></li>
            <li><a href="#cost-factors" className="text-blue-700 hover:underline">Factors Affecting Cost</a></li>
            <li><a href="#replacement" className="text-blue-700 hover:underline">Replacement vs. Repair</a></li>
            <li><a href="#cost-breakdown" className="text-blue-700 hover:underline">Cost Breakdown</a></li>
            <li><a href="#regional" className="text-blue-700 hover:underline">Regional Pricing</a></li>
            <li><a href="#diy-vs-pro" className="text-blue-700 hover:underline">DIY vs. Pro</a></li>
            <li><a href="#finishing" className="text-blue-700 hover:underline">Finishing Options</a></li>
            <li><a href="#save-money" className="text-blue-700 hover:underline">Ways to Save</a></li>
            <li><a href="#faq" className="text-blue-700 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Get Your Exact Cost</p>
          <p className="text-orange-700 text-sm">
            Enter your sidewalk dimensions in our free{" "}
            <Link href="/calculators/sidewalk" className="underline font-semibold">Sidewalk Calculator</Link>{" "}
            for instant material quantities, cost estimates, and cubic yards needed.
          </p>
        </div>

        <h2 id="cost-overview">Concrete Sidewalk Cost Overview</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Project Type</th>
                <th className="text-left px-4 py-2 font-semibold">Cost per Sq Ft</th>
                <th className="text-left px-4 py-2 font-semibold">50-ft Sidewalk (200 sq ft)</th>
                <th className="text-left px-4 py-2 font-semibold">100-ft Sidewalk (400 sq ft)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">New pour (broom finish)</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">$1,200–$2,000</td>
                <td className="px-4 py-2">$2,400–$4,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Replacement (remove + repour)</td>
                <td className="px-4 py-2">$8–$16</td>
                <td className="px-4 py-2">$1,600–$3,200</td>
                <td className="px-4 py-2">$3,200–$6,400</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stamped / decorative</td>
                <td className="px-4 py-2">$12–$20</td>
                <td className="px-4 py-2">$2,400–$4,000</td>
                <td className="px-4 py-2">$4,800–$8,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Colored concrete</td>
                <td className="px-4 py-2">$8–$14</td>
                <td className="px-4 py-2">$1,600–$2,800</td>
                <td className="px-4 py-2">$3,200–$5,600</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Wider walkway (5–6 ft)</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">$1,500–$3,000</td>
                <td className="px-4 py-2">$3,000–$6,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="cost-factors">Factors That Affect Sidewalk Cost</h2>
        <p>The price range is wide because several factors shift the cost significantly:</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Factor</th>
                <th className="text-left px-4 py-2 font-semibold">Impact on Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Length and width</td>
                <td className="px-4 py-2">Primary driver</td>
                <td className="px-4 py-2">Standard is 4 ft wide. Every extra foot of width adds 25% more material.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Thickness</td>
                <td className="px-4 py-2">+$1–$3/sq ft per inch</td>
                <td className="px-4 py-2">4&quot; standard. Use 5–6&quot; where vehicles cross.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Old sidewalk removal</td>
                <td className="px-4 py-2">+$2–$6/sq ft</td>
                <td className="px-4 py-2">Includes demolition, hauling, and disposal fees.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Grade and slope</td>
                <td className="px-4 py-2">+$1–$4/sq ft</td>
                <td className="px-4 py-2">Hilly terrain requires steps, retaining, or extra grading.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Access difficulty</td>
                <td className="px-4 py-2">+$500–$2,000</td>
                <td className="px-4 py-2">Backyard pours with no truck access need pump truck ($200–$600) or wheelbarrow labor.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Finish type</td>
                <td className="px-4 py-2">+$0–$15/sq ft</td>
                <td className="px-4 py-2">Broom (standard) is included. Stamped adds $6–$15/sq ft.</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Permits</td>
                <td className="px-4 py-2">$50–$500</td>
                <td className="px-4 py-2">Required in most cities for sidewalks in the public right-of-way.</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Tree root issues</td>
                <td className="px-4 py-2">+$200–$1,500</td>
                <td className="px-4 py-2">Root removal, root barriers, or rerouting the sidewalk.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="replacement">Replacement vs. Repair: Which Is Worth It?</h2>
        <p>Not every damaged sidewalk needs full replacement. Here&apos;s how to decide:</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Repair Type</th>
                <th className="text-left px-4 py-2 font-semibold">Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Best When</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Crack filling / caulking</td>
                <td className="px-4 py-2">$1–$3/linear ft</td>
                <td className="px-4 py-2">Hairline to 1/2&quot; cracks, no heaving</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Mudjacking / slab leveling</td>
                <td className="px-4 py-2">$3–$6/sq ft</td>
                <td className="px-4 py-2">Sections that have sunk or settled but aren&apos;t cracked</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Foam leveling (polyurethane)</td>
                <td className="px-4 py-2">$5–$10/sq ft</td>
                <td className="px-4 py-2">Lighter, longer-lasting alternative to mudjacking</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Resurfacing / overlay</td>
                <td className="px-4 py-2">$3–$7/sq ft</td>
                <td className="px-4 py-2">Surface damage only — spalling, scaling, discoloration</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Partial replacement (per section)</td>
                <td className="px-4 py-2">$8–$16/sq ft</td>
                <td className="px-4 py-2">1–3 damaged panels, rest of sidewalk is fine</td>
              </tr>
              <tr className="border-t bg-gray-50 font-semibold">
                <td className="px-4 py-2">Full replacement</td>
                <td className="px-4 py-2">$8–$16/sq ft</td>
                <td className="px-4 py-2">30%+ of panels damaged, widespread heaving, tree root damage throughout</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Rule of thumb:</strong> If repair costs exceed 50% of replacement cost, replace the whole sidewalk. You get a longer lifespan, consistent appearance, and often a warranty from the contractor.
        </p>

        <h2 id="cost-breakdown">Cost Breakdown: Where Your Money Goes</h2>
        <p>For a typical 200 sq ft sidewalk (50 ft long, 4 ft wide, 4&quot; thick, broom finish):</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Component</th>
                <th className="text-left px-4 py-2 font-semibold">$/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">200 sq ft Total</th>
                <th className="text-left px-4 py-2 font-semibold">% of Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete (2.5 yd³)</td>
                <td className="px-4 py-2">$1.75–$2.50</td>
                <td className="px-4 py-2">$350–$500</td>
                <td className="px-4 py-2">20–25%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gravel base (4&quot;)</td>
                <td className="px-4 py-2">$0.50–$1.00</td>
                <td className="px-4 py-2">$100–$200</td>
                <td className="px-4 py-2">5–10%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Wire mesh reinforcement</td>
                <td className="px-4 py-2">$0.35–$0.75</td>
                <td className="px-4 py-2">$70–$150</td>
                <td className="px-4 py-2">5–8%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Forms, stakes, expansion joints</td>
                <td className="px-4 py-2">$0.30–$0.50</td>
                <td className="px-4 py-2">$60–$100</td>
                <td className="px-4 py-2">3–5%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Site prep and grading</td>
                <td className="px-4 py-2">$0.75–$2.00</td>
                <td className="px-4 py-2">$150–$400</td>
                <td className="px-4 py-2">10–15%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Pour and finish labor</td>
                <td className="px-4 py-2">$2.50–$4.50</td>
                <td className="px-4 py-2">$500–$900</td>
                <td className="px-4 py-2">35–45%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Curing compound and cleanup</td>
                <td className="px-4 py-2">$0.15–$0.25</td>
                <td className="px-4 py-2">$30–$50</td>
                <td className="px-4 py-2">2–3%</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total (new pour)</td>
                <td className="px-4 py-2">$6.30–$11.50</td>
                <td className="px-4 py-2">$1,260–$2,300</td>
                <td className="px-4 py-2">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For detailed material pricing, see our <Link href="/blog/concrete-cost-per-yard">concrete cost per yard guide</Link>.
        </p>

        <h2 id="regional">Regional Cost Differences</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Region</th>
                <th className="text-left px-4 py-2 font-semibold">Cost/sq ft</th>
                <th className="text-left px-4 py-2 font-semibold">200 sq ft Sidewalk</th>
                <th className="text-left px-4 py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Southeast</td>
                <td className="px-4 py-2">$5–$9</td>
                <td className="px-4 py-2">$1,000–$1,800</td>
                <td className="px-4 py-2">Lower labor, year-round season</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Midwest</td>
                <td className="px-4 py-2">$6–$11</td>
                <td className="px-4 py-2">$1,200–$2,200</td>
                <td className="px-4 py-2">Frost depth adds gravel costs</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">South / Southwest</td>
                <td className="px-4 py-2">$5–$10</td>
                <td className="px-4 py-2">$1,000–$2,000</td>
                <td className="px-4 py-2">Competitive market</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Northeast</td>
                <td className="px-4 py-2">$8–$14</td>
                <td className="px-4 py-2">$1,600–$2,800</td>
                <td className="px-4 py-2">Higher labor, short season</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">West Coast</td>
                <td className="px-4 py-2">$9–$16</td>
                <td className="px-4 py-2">$1,800–$3,200</td>
                <td className="px-4 py-2">Highest labor costs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="diy-vs-pro">DIY vs. Hiring a Pro</h2>
        <p>Sidewalks are one of the more DIY-friendly concrete projects. Here&apos;s the comparison for a 200 sq ft sidewalk:</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Item</th>
                <th className="text-left px-4 py-2 font-semibold">DIY</th>
                <th className="text-left px-4 py-2 font-semibold">Professional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete</td>
                <td className="px-4 py-2">$375</td>
                <td className="px-4 py-2">$375</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gravel + reinforcement</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$250</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Forms and materials</td>
                <td className="px-4 py-2">$100</td>
                <td className="px-4 py-2">$100</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Tool rentals</td>
                <td className="px-4 py-2">$100–$200</td>
                <td className="px-4 py-2">$0</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Labor</td>
                <td className="px-4 py-2">$0 (your time)</td>
                <td className="px-4 py-2">$600–$1,000</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">$775–$875</td>
                <td className="px-4 py-2">$1,325–$1,725</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>DIY savings:</strong> ~$550–$850 on a 200 sq ft sidewalk. The narrow width makes screeding and finishing more manageable than a wide slab.</p>

        <p><strong>Hire a pro when:</strong> the sidewalk is longer than 100 ft (too much concrete to finish alone), involves curves or steps, crosses a driveway (needs 5–6&quot; thickness), or is in the public right-of-way (may require licensed contractor + permit).</p>

        <h2 id="finishing">Finishing Options</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Finish</th>
                <th className="text-left px-4 py-2 font-semibold">Added Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Broom finish</td>
                <td className="px-4 py-2">$0 (standard)</td>
                <td className="px-4 py-2">Most sidewalks — slip-resistant, durable</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Exposed aggregate</td>
                <td className="px-4 py-2">+$2–$5/sq ft</td>
                <td className="px-4 py-2">Decorative paths, garden walkways</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stamped concrete</td>
                <td className="px-4 py-2">+$6–$15/sq ft</td>
                <td className="px-4 py-2">Front entries, high-visibility areas</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Colored (integral)</td>
                <td className="px-4 py-2">+$1–$3/sq ft</td>
                <td className="px-4 py-2">Matching home exterior or landscaping</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Scored / saw-cut patterns</td>
                <td className="px-4 py-2">+$1–$3/sq ft</td>
                <td className="px-4 py-2">Geometric patterns without stamping cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="save-money">6 Ways to Reduce Sidewalk Costs</h2>
        <ol>
          <li><strong>Do your own site prep.</strong> Clearing and grading saves $0.75–$2.00/sq ft.</li>
          <li><strong>Pour in the off-season.</strong> Fall and late winter pricing is 10–20% lower.</li>
          <li><strong>Replace only damaged sections.</strong> Partial replacement can cut total cost 40–60%.</li>
          <li><strong>Stick with broom finish.</strong> Decorative finishes nearly double the price.</li>
          <li><strong>Get 3+ quotes.</strong> Sidewalk pricing varies 30–50% between contractors.</li>
          <li><strong>Combine with other concrete work.</strong> Adding a sidewalk to a driveway or patio pour saves on mobilization and delivery fees.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Calculate Your Sidewalk Cost</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our free Sidewalk Calculator gives you instant material quantities, cubic yards, and cost estimates for any sidewalk project.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/calculators/sidewalk"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
            >
              Free Sidewalk Calculator →
            </Link>
            <Link
              href="/templates"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
            >
              Pro Estimate Templates — $49
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <h2>Related Guides</h2>
        <ul>
          <li><Link href="/blog/concrete-slab-cost-guide">Concrete Slab Cost Guide</Link></li>
          <li><Link href="/blog/concrete-driveway-cost-guide">Concrete Driveway Cost Guide</Link></li>
          <li><Link href="/blog/concrete-patio-cost-guide">Concrete Patio Cost Guide</Link></li>
          <li><Link href="/blog/concrete-cost-per-yard">Concrete Cost Per Yard</Link></li>
          <li><Link href="/blog/how-to-bid-concrete-jobs">How to Bid Concrete Jobs</Link></li>
        </ul>
      </article>
    </div>
  );
}
