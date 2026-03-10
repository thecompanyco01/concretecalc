import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Footing Cost in 2026: Prices Per Sq Ft & Linear Foot",
  description:
    "How much does a concrete footing cost? $5–$15 per linear foot for strip footings, $75–$300 per pad footing, $150–$500 per pier. Get pricing by type, depth, and frost line requirements.",
  keywords:
    "concrete footing cost, concrete footing cost per square foot, how much does a concrete footing cost, concrete footer cost, concrete footing price, concrete pier footing cost, strip footing cost",
  alternates: {
    canonical: "https://estimateconcrete.com/blog/concrete-footing-cost-guide",
  },
};

const faqItems = [
  {
    question: "How much does a concrete footing cost?",
    answer:
      "Concrete footings cost $5–$15 per linear foot for strip/continuous footings, $75–$300 per pad footing, and $150–$500 per pier footing. A full foundation perimeter footing (150 linear feet for a typical home) costs $2,500–$5,000 for the footing alone, not including the foundation walls above.",
  },
  {
    question: "How much does a concrete footing cost per square foot?",
    answer:
      "When measured per square foot of footing surface, concrete footings cost $5–$12/sq ft for materials and labor. However, footings are more commonly priced per linear foot ($5–$15/LF) or per cubic yard of concrete ($150–$200/yd³ installed) since their width is determined by engineering, not customer preference.",
  },
  {
    question: "How deep do concrete footings need to be?",
    answer:
      "Footings must extend below the frost line, which varies by location: 12\" in the deep South, 36\" in the upper Midwest, and 48\"+ in northern states like Minnesota and Montana. Check your local building code for exact depth. Below-frost-line depth prevents heaving and cracking.",
  },
  {
    question: "What is the difference between a footing and a foundation?",
    answer:
      "The footing is the widened base that spreads the building load across the soil. The foundation wall sits on top of the footing and extends up to grade level. Think of the footing as the 'shoe' and the foundation as the 'leg.' Both are required for most structures; footings are always poured first.",
  },
  {
    question: "Can I pour my own concrete footings?",
    answer:
      "For non-structural applications (shed, fence posts, deck posts), DIY is feasible. For home foundations and structural footings, hire a licensed contractor — footings require proper sizing based on soil bearing capacity, correct rebar placement, and inspections. Mistakes are buried underground and extremely expensive to fix.",
  },
  {
    question: "How long do concrete footings take to cure before building on them?",
    answer:
      "Concrete footings reach sufficient strength for foundation wall construction in 2–3 days (reaching about 50% of design strength). Full cure takes 28 days. Most contractors pour foundation walls 2–7 days after footing placement. In cold weather, curing takes longer and may require insulated blankets.",
  },
];

export default function ConcreteFootingCostGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Concrete Footing Cost in 2026: Prices Per Sq Ft & Linear Foot",
        description:
          "Complete guide to concrete footing costs. Pricing for strip footings, pad footings, and pier footings by type, depth, and frost line requirements.",
        author: { "@type": "Organization", name: "EstimateConcrete", url: "https://estimateconcrete.com" },
        publisher: { "@type": "Organization", name: "EstimateConcrete", url: "https://estimateconcrete.com" },
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
        mainEntityOfPage: "https://estimateconcrete.com/blog/concrete-footing-cost-guide",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
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
        <span className="text-gray-900 font-medium">Concrete Footing Cost Guide</span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Footing Cost in 2026: What You&apos;ll Pay by Type</h1>

        <p className="lead text-xl text-gray-600">
          Concrete footings cost <strong>$5–$15 per linear foot</strong> for strip footings and <strong>$150–$500 per pier</strong> footing. The total cost depends on footing type, depth (driven by frost line), soil conditions, and rebar requirements. This guide covers real pricing for residential and commercial footings.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">In This Guide</p>
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            <li><a href="#by-type" className="text-blue-700 hover:underline">Cost by Footing Type</a></li>
            <li><a href="#cost-breakdown" className="text-blue-700 hover:underline">Cost Breakdown</a></li>
            <li><a href="#frost-line" className="text-blue-700 hover:underline">Frost Line Depths</a></li>
            <li><a href="#types" className="text-blue-700 hover:underline">Types of Footings</a></li>
            <li><a href="#sizing" className="text-blue-700 hover:underline">Footing Sizing Guide</a></li>
            <li><a href="#reinforcement" className="text-blue-700 hover:underline">Reinforcement Requirements</a></li>
            <li><a href="#diy-vs-pro" className="text-blue-700 hover:underline">DIY vs. Pro</a></li>
            <li><a href="#save-money" className="text-blue-700 hover:underline">Ways to Save</a></li>
            <li><a href="#faq" className="text-blue-700 hover:underline">FAQ</a></li>
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">🧮 Calculate Your Footing</p>
          <p className="text-orange-700 text-sm">
            Use our free{" "}
            <Link href="/calculators/footing" className="underline font-semibold">Footing Calculator</Link>{" "}
            for instant concrete volume, rebar quantities, and cost estimates for any footing project.
          </p>
        </div>

        <h2 id="by-type">Concrete Footing Cost by Type</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Footing Type</th>
                <th className="text-left px-4 py-2 font-semibold">Cost (installed)</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Use</th>
                <th className="text-left px-4 py-2 font-semibold">Typical Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Strip / continuous footing</td>
                <td className="px-4 py-2">$5–$15/linear ft</td>
                <td className="px-4 py-2">Foundation walls, load-bearing walls</td>
                <td className="px-4 py-2">16–24&quot; wide × 8–12&quot; deep</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Pad / spread footing</td>
                <td className="px-4 py-2">$75–$300 each</td>
                <td className="px-4 py-2">Column bases, post supports</td>
                <td className="px-4 py-2">24×24&quot; to 48×48&quot; × 12&quot; deep</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Pier / caisson footing</td>
                <td className="px-4 py-2">$150–$500 each</td>
                <td className="px-4 py-2">Decks, porches, deep frost areas</td>
                <td className="px-4 py-2">10–24&quot; diameter × depth to frost line</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Stepped footing</td>
                <td className="px-4 py-2">$12–$25/linear ft</td>
                <td className="px-4 py-2">Sloped sites, hillside foundations</td>
                <td className="px-4 py-2">Varies — steps follow grade</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Grade beam</td>
                <td className="px-4 py-2">$15–$30/linear ft</td>
                <td className="px-4 py-2">Spans between piers, poor soil</td>
                <td className="px-4 py-2">12–18&quot; wide × 18–36&quot; deep</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Monolithic slab-on-grade</td>
                <td className="px-4 py-2">$8–$16/sq ft (total slab)</td>
                <td className="px-4 py-2">Frost-free regions, garages</td>
                <td className="px-4 py-2">Thickened edge: 12–18&quot; deep at perimeter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="cost-breakdown">Cost Breakdown: Strip Footing (Per 10 Linear Feet)</h2>
        <p>Here&apos;s where the money goes for a typical 20&quot; wide × 10&quot; deep strip footing, 10 feet long:</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Component</th>
                <th className="text-left px-4 py-2 font-semibold">Cost</th>
                <th className="text-left px-4 py-2 font-semibold">% of Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Excavation (trench)</td>
                <td className="px-4 py-2">$15–$30</td>
                <td className="px-4 py-2">15–20%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gravel base (4&quot;)</td>
                <td className="px-4 py-2">$5–$10</td>
                <td className="px-4 py-2">5–8%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete (0.5 yd³)</td>
                <td className="px-4 py-2">$25–$35</td>
                <td className="px-4 py-2">20–25%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Rebar (#4, 3 bars continuous)</td>
                <td className="px-4 py-2">$10–$15</td>
                <td className="px-4 py-2">8–12%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Forms (if needed)</td>
                <td className="px-4 py-2">$5–$15</td>
                <td className="px-4 py-2">5–10%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Labor (dig, form, pour, strip)</td>
                <td className="px-4 py-2">$40–$60</td>
                <td className="px-4 py-2">30–40%</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total per 10 LF</td>
                <td className="px-4 py-2">$100–$165</td>
                <td className="px-4 py-2">= $10–$16.50/LF</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="frost-line">Frost Line Depth by Region</h2>
        <p>
          Footings must extend below the frost line to prevent heaving. This is a code requirement, not a suggestion. Deeper footings = more concrete = higher cost.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Region</th>
                <th className="text-left px-4 py-2 font-semibold">Frost Depth</th>
                <th className="text-left px-4 py-2 font-semibold">Example States</th>
                <th className="text-left px-4 py-2 font-semibold">Cost Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">No frost</td>
                <td className="px-4 py-2">0–6&quot;</td>
                <td className="px-4 py-2">FL, HI, Southern CA, TX coast</td>
                <td className="px-4 py-2">Lowest — shallow footings or slab-on-grade</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Light frost</td>
                <td className="px-4 py-2">12–18&quot;</td>
                <td className="px-4 py-2">GA, SC, NC, AZ, NM</td>
                <td className="px-4 py-2">Moderate — standard depth</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Moderate frost</td>
                <td className="px-4 py-2">24–36&quot;</td>
                <td className="px-4 py-2">VA, KY, KS, CO, OR</td>
                <td className="px-4 py-2">Higher — deeper excavation needed</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Deep frost</td>
                <td className="px-4 py-2">36–48&quot;</td>
                <td className="px-4 py-2">OH, PA, IL, IN, NE, WA (east)</td>
                <td className="px-4 py-2">High — significant excavation</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Severe frost</td>
                <td className="px-4 py-2">48–72&quot;</td>
                <td className="px-4 py-2">MN, WI, MI, ND, MT, ME</td>
                <td className="px-4 py-2">Highest — 4–6 feet deep, may need pier footings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Cost impact:</strong> Going from 18&quot; depth to 48&quot; depth roughly doubles the concrete volume and excavation labor. In severe frost areas, pier footings ($150–$500 each) are often more economical than continuous strip footings at 4+ feet deep.
        </p>

        <h2 id="types">Types of Concrete Footings Explained</h2>

        <h3>Strip / Continuous Footings</h3>
        <p>
          The most common type — a continuous strip of concrete that runs under load-bearing walls. Standard for house foundations, garage walls, and any wall that supports structural loads. Width is typically 2× the wall thickness (8&quot; wall = 16&quot; footing minimum).
        </p>

        <h3>Pad / Spread Footings</h3>
        <p>
          Square or rectangular pads that support individual columns or posts. Common for steel buildings, deck supports, and industrial structures. Sized based on column load and soil bearing capacity — typically 24×24&quot; for light loads up to 48×48&quot; for heavy loads.
        </p>

        <h3>Pier / Caisson Footings</h3>
        <p>
          Round holes drilled and filled with concrete, often with rebar cages. Used for decks, porches, and in deep frost areas where digging a continuous trench to frost depth would be impractical. Diameter ranges from 10&quot; (fence posts) to 24&quot; (structural).
        </p>

        <h3>Stepped Footings</h3>
        <p>
          Used on sloped sites where the footing must follow the terrain in steps. Each step must be at least 6&quot; tall and overlap the next section. More labor-intensive (and expensive) than flat footings — budget 2–3× the cost of straight footings.
        </p>

        <h2 id="sizing">Footing Sizing Guide</h2>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Structure</th>
                <th className="text-left px-4 py-2 font-semibold">Min. Width</th>
                <th className="text-left px-4 py-2 font-semibold">Min. Depth</th>
                <th className="text-left px-4 py-2 font-semibold">Rebar Required</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">1-story home (wood frame)</td>
                <td className="px-4 py-2">16&quot;</td>
                <td className="px-4 py-2">8&quot;</td>
                <td className="px-4 py-2">#4 × 2 continuous</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">2-story home</td>
                <td className="px-4 py-2">20–24&quot;</td>
                <td className="px-4 py-2">10–12&quot;</td>
                <td className="px-4 py-2">#4 × 3 continuous</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Detached garage</td>
                <td className="px-4 py-2">16&quot;</td>
                <td className="px-4 py-2">8&quot;</td>
                <td className="px-4 py-2">#4 × 2 continuous</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Retaining wall (4 ft)</td>
                <td className="px-4 py-2">24–30&quot;</td>
                <td className="px-4 py-2">12&quot;</td>
                <td className="px-4 py-2">#4 × 3 + dowels</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Deck pier</td>
                <td className="px-4 py-2">12–18&quot; diameter</td>
                <td className="px-4 py-2">To frost line</td>
                <td className="px-4 py-2">#4 × 2–4 vertical</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Fence post</td>
                <td className="px-4 py-2">10–12&quot; diameter</td>
                <td className="px-4 py-2">24–36&quot;</td>
                <td className="px-4 py-2">None (post is reinforcement)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Important:</strong> These are general guidelines based on IRC residential building code for normal soil (2,000+ PSF bearing capacity). Your engineer or local building department may require different sizing based on soil testing and specific loading conditions.
        </p>

        <h2 id="reinforcement">Reinforcement Requirements</h2>
        <p>
          Footings need reinforcement to resist cracking from soil movement, loading, and temperature changes:
        </p>
        <ul>
          <li><strong>Continuous rebar</strong> — #4 bars running the length of strip footings. Minimum 2 bars for 1-story, 3 bars for 2-story.</li>
          <li><strong>Dowels</strong> — Vertical #4 or #5 bars extending up from the footing into the foundation wall. Placed every 24–48&quot; on center. These tie the wall to the footing structurally.</li>
          <li><strong>Corner bars</strong> — L-shaped rebar at corners and intersections. Minimum 24&quot; lap splice length.</li>
          <li><strong>Pad footing reinforcement</strong> — #4 rebar grid in both directions, typically 12&quot; on center.</li>
        </ul>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Rebar Component</th>
                <th className="text-left px-4 py-2 font-semibold">Material Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Labor Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">#4 rebar (continuous)</td>
                <td className="px-4 py-2">$0.75–$1.25/LF</td>
                <td className="px-4 py-2">$0.50–$1.00/LF to tie</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">#5 rebar (heavy loads)</td>
                <td className="px-4 py-2">$1.00–$1.75/LF</td>
                <td className="px-4 py-2">$0.75–$1.25/LF to tie</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Dowels (#4, 36&quot; long)</td>
                <td className="px-4 py-2">$2–$4 each</td>
                <td className="px-4 py-2">$1–$2 each to set</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For detailed rebar calculations, use our <Link href="/calculators/rebar">Rebar Calculator</Link>.
        </p>

        <h2 id="diy-vs-pro">DIY vs. Hiring a Contractor</h2>
        <p>Comparison for a 100-linear-foot strip footing (20&quot; wide × 10&quot; deep):</p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Item</th>
                <th className="text-left px-4 py-2 font-semibold">DIY</th>
                <th className="text-left px-4 py-2 font-semibold">Contractor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Excavation (trencher rental)</td>
                <td className="px-4 py-2">$200–$400</td>
                <td className="px-4 py-2">$300–$500</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Concrete (~5.5 yd³)</td>
                <td className="px-4 py-2">$825</td>
                <td className="px-4 py-2">$825</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Rebar</td>
                <td className="px-4 py-2">$150</td>
                <td className="px-4 py-2">$200</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Forms and gravel</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$200</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Labor</td>
                <td className="px-4 py-2">$0 (your time)</td>
                <td className="px-4 py-2">$500–$800</td>
              </tr>
              <tr className="border-t-2 border-orange-400 font-bold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">$1,375–$1,575</td>
                <td className="px-4 py-2">$2,025–$2,525</td>
              </tr>
              <tr className="border-t bg-orange-50">
                <td className="px-4 py-2 font-semibold">Per linear foot</td>
                <td className="px-4 py-2">$13.75–$15.75</td>
                <td className="px-4 py-2">$20.25–$25.25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>DIY verdict:</strong> Savings of ~$650–$950 on 100 LF. DIY footings are feasible for sheds, garages, and additions if you&apos;re comfortable with excavation and you have the trench dug before the concrete truck arrives. For home foundations, always hire a pro — inspection requirements alone make DIY impractical.
        </p>

        <h2 id="save-money">6 Ways to Reduce Footing Costs</h2>
        <ol>
          <li><strong>Dig your own trenches.</strong> Rent a trencher ($150–$300/day) and excavate yourself. Saves $2–$5/LF.</li>
          <li><strong>Use monolithic slab-on-grade where allowed.</strong> In frost-free areas, a thickened-edge slab eliminates separate footing costs entirely.</li>
          <li><strong>Consider pier footings in deep frost areas.</strong> Drilling individual piers is often cheaper than trenching continuous footings 4+ feet deep.</li>
          <li><strong>Order concrete in full truck loads.</strong> Partial loads incur short-load fees ($50–$100/yd³ under minimum). Plan to pour footings and slabs on the same day when possible.</li>
          <li><strong>Get a soil test early.</strong> A $300–$500 soil test can confirm good bearing capacity, potentially allowing smaller footings than the default conservative sizing.</li>
          <li><strong>Bundle with foundation work.</strong> Contractors offer better per-foot pricing when the footing, foundation wall, and slab are all one contract.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Calculate Your Footing Cost</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our free Footing Calculator gives you instant concrete volume, rebar quantities, and cost estimates for strip, pad, and pier footings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/calculators/footing"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
            >
              Free Footing Calculator →
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
          <li><Link href="/blog/concrete-foundation-cost-guide">Concrete Foundation Cost Guide</Link></li>
          <li><Link href="/blog/concrete-slab-cost-guide">Concrete Slab Cost Guide</Link></li>
          <li><Link href="/blog/concrete-retaining-wall-cost-guide">Retaining Wall Cost Guide</Link></li>
          <li><Link href="/blog/rebar-size-chart">Rebar Size Chart</Link></li>
          <li><Link href="/blog/how-to-bid-concrete-jobs">How to Bid Concrete Jobs</Link></li>
          <li><Link href="/blog/concrete-cost-per-yard">Concrete Cost Per Yard</Link></li>
        </ul>
      </article>
    </div>
  );
}
