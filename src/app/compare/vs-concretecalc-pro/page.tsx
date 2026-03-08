import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstimateConcrete vs ConcreteCalc Pro — Honest Comparison (2026)",
  description:
    "Compare EstimateConcrete and ConcreteCalc Pro side-by-side. Full estimate templates & business tools vs a basic calculator app. See why contractors choose EstimateConcrete for bidding concrete jobs.",
  keywords:
    "concretecalc pro alternative, concretecalc pro review, concrete calculator app, concrete estimating software, concretecalc pro vs, best concrete estimating tool, concrete bid calculator",
  alternates: { canonical: "https://estimateconcrete.com/compare/vs-concretecalc-pro" },
  openGraph: {
    title: "EstimateConcrete vs ConcreteCalc Pro — Honest Comparison (2026)",
    description:
      "ConcreteCalc Pro is a calculator app. EstimateConcrete is a complete estimating and business toolkit. Here's how they compare.",
    url: "https://estimateconcrete.com/compare/vs-concretecalc-pro",
  },
};

const comparisonRows = [
  ["What It Is", "Complete concrete estimating & business toolkit", "Concrete & construction math calculator app"],
  ["Pricing", "$29–$297 one-time purchase", "$11.99 one-time (iOS/Android)"],
  ["Estimate Templates", "✅ 8 concrete-specific templates with line items", "❌ No estimate templates"],
  ["Bid/Estimate Builder", "✅ Full bid calculator with profit margins & markups", "❌ Calculator only — no bid output"],
  ["Cubic Yard Calculator", "✅ 9 free online calculators", "✅ Built-in concrete volume calculator"],
  ["Contract Template", "✅ Concrete-specific contract with warranty terms", "❌ Not included"],
  ["SOP / Pour Checklist", "✅ Step-by-step concrete pour SOP", "❌ Not included"],
  ["Pricing Matrix", "✅ Regional concrete pricing by project type", "❌ Not included"],
  ["Equipment Guide", "✅ Concrete equipment buying guide", "❌ Not included"],
  ["Marketing Plan", "✅ 90-day marketing plan for concrete contractors", "❌ Not included"],
  ["Construction Math", "Handled by calculators + templates", "✅ Advanced construction math (rise/run, fractions, etc.)"],
  ["Material Conversions", "✅ Built into calculators", "✅ Comprehensive unit conversions"],
  ["Platform", "Excel, Google Sheets, web calculators", "iOS & Android app"],
  ["Works Offline", "✅ Spreadsheets work anywhere", "✅ App works offline"],
  ["Free Tools", "✅ 9 free online calculators + blog", "❌ Paid app only"],
];

export default function VsConcreteCalcPro() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
        ← Back to Products
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mt-6 mb-4">
        EstimateConcrete vs ConcreteCalc Pro — Honest Comparison (2026)
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        ConcreteCalc Pro is a popular construction math calculator app used by many concrete contractors. But calculating
        cubic yards is just <em>one step</em> in bidding a concrete job. Here&apos;s how ConcreteCalc Pro and EstimateConcrete
        compare — and why many contractors use both.
      </p>

      {/* Quick Summary */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">⚡ TL;DR</h2>
        <ul className="space-y-2 text-slate-700">
          <li><strong>EstimateConcrete</strong> — Complete estimating and business toolkit for concrete contractors. 8 estimate templates, bid calculator, contract, SOP, pricing matrix, equipment guide, marketing plan, and 9 free online calculators. $29–$297 one-time.</li>
          <li><strong>ConcreteCalc Pro</strong> — Construction math calculator app for iOS and Android. Calculates volumes, areas, conversions, and construction math. $11.99 one-time. Great calculator, but doesn&apos;t help you build estimates or bids.</li>
        </ul>
      </div>

      {/* Core Difference */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Calculator App vs Complete Business Toolkit</h2>
      <p className="text-slate-600 mb-4">
        This isn&apos;t really an apples-to-apples comparison — these tools solve different problems. ConcreteCalc Pro
        answers the question: <em>&quot;How many cubic yards do I need?&quot;</em> EstimateConcrete answers the question:
        <em>&quot;How do I price this job, build a professional bid, and run my concrete business?&quot;</em>
      </p>
      <p className="text-slate-600 mb-4">
        ConcreteCalc Pro is a calculator. EstimateConcrete is a business toolkit that <em>includes</em> calculators.
        Our <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">9 free online calculators</Link> handle
        the same volume and cost math — plus our{" "}
        <Link href="/templates" className="text-amber-600 hover:text-amber-700 underline">estimate templates</Link> turn
        those numbers into professional bids you can hand to a homeowner.
      </p>
      <p className="text-slate-600 mb-6">
        Many contractors actually use <strong>both</strong> — ConcreteCalc Pro on their phone for quick field calculations,
        and EstimateConcrete templates back at the office for building professional estimates. They complement each other well.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Feature-by-Feature Comparison</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="text-left py-3 px-4 rounded-tl-lg">Feature</th>
              <th className="text-center py-3 px-4">EstimateConcrete</th>
              <th className="text-center py-3 px-4 rounded-tr-lg">ConcreteCalc Pro</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([feature, us, them], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="py-3 px-4 font-medium text-slate-900 border-b border-slate-200">{feature}</td>
                <td className="py-3 px-4 text-center text-slate-700 border-b border-slate-200">{us}</td>
                <td className="py-3 px-4 text-center text-slate-700 border-b border-slate-200">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pricing Comparison</h2>
      <p className="text-slate-600 mb-4">
        ConcreteCalc Pro is $11.99 — a solid deal for a construction calculator app. EstimateConcrete ranges from $29
        (individual templates) to $297 (Pro Membership with everything). Both are one-time purchases with no subscriptions.
      </p>
      <div className="bg-slate-100 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-3">💰 What You Get for Your Money</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold text-amber-600 text-lg">EstimateConcrete — $79</p>
            <ul className="text-slate-700 space-y-1 mt-2">
              <li>✅ 8 estimate templates</li>
              <li>✅ Bid calculator</li>
              <li>✅ Contract template</li>
              <li>✅ Pour SOP</li>
              <li>✅ Pricing matrix</li>
              <li>✅ Equipment guide</li>
              <li>✅ Marketing plan</li>
              <li>✅ 9 free calculators</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-slate-500 text-lg">ConcreteCalc Pro — $11.99</p>
            <ul className="text-slate-700 space-y-1 mt-2">
              <li>✅ Volume calculations</li>
              <li>✅ Area calculations</li>
              <li>✅ Construction math</li>
              <li>✅ Unit conversions</li>
              <li>✅ Rise/run calculator</li>
              <li>❌ No estimate templates</li>
              <li>❌ No business tools</li>
              <li>❌ No bid builder</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 mt-4 text-sm">
          ConcreteCalc Pro is cheaper because it does less. If you just need a calculator, it&apos;s great. If you need to
          <strong> run a concrete business</strong>, EstimateConcrete is the better investment.
        </p>
      </div>

      {/* Where ConcreteCalc Pro Wins */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where ConcreteCalc Pro Wins</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Dedicated mobile app</strong> — Native iOS/Android app optimized for quick field calculations on your phone.</li>
        <li><strong>Construction math</strong> — Advanced features like rise/run, fraction conversions, and construction-specific math functions.</li>
        <li><strong>Lower price point</strong> — At $11.99, it&apos;s an easy impulse buy for any contractor.</li>
        <li><strong>Quick calculations</strong> — Open the app, punch in numbers, get an answer. No spreadsheets to open.</li>
        <li><strong>Established track record</strong> — Thousands of reviews and years of use by contractors.</li>
      </ul>

      {/* Why Contractors Choose EstimateConcrete */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Contractors Choose EstimateConcrete</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">📄 From Calculator to Professional Bid</h3>
          <p className="text-slate-600 text-sm">ConcreteCalc Pro tells you how many yards you need. EstimateConcrete turns that into a complete, itemized estimate with labor, materials, equipment, profit margin, and a professional layout you can hand to a homeowner. That&apos;s the difference between knowing the math and winning the job.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">🏗️ Complete Business Toolkit</h3>
          <p className="text-slate-600 text-sm">Estimate templates are just the start. You also get a concrete-specific contract template, pour SOP checklist, regional pricing matrix, equipment buying guide, and a 90-day marketing plan to grow your business.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">🆓 9 Free Online Calculators</h3>
          <p className="text-slate-600 text-sm">Our <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">free calculators</Link> handle slab, driveway, patio, footing, stairs, wall, sidewalk, block, and rebar calculations — no app download required, works in any browser.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">📈 Helps You Price Jobs Profitably</h3>
          <p className="text-slate-600 text-sm">Our <Link href="/tools/bid-calculator-pro" className="text-amber-600 hover:text-amber-700 underline">bid calculator</Link> doesn&apos;t just calculate volume — it factors in labor rates, equipment costs, overhead, and your target profit margin. Know exactly what to charge so you make money on every pour.</p>
        </div>
      </div>

      {/* Best of Both Worlds */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">🤝 Best of Both Worlds</h2>
        <p className="text-slate-700">
          Honestly? Many contractors use <strong>both tools</strong>. ConcreteCalc Pro on your phone for quick field math,
          and EstimateConcrete templates on your laptop for building professional bids. They&apos;re complementary, not competing.
          Get ConcreteCalc Pro for $11.99 <em>and</em> EstimateConcrete for $79 — still cheaper than one month of most
          estimating software subscriptions.
        </p>
      </div>

      {/* Internal Links */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-slate-900 mb-3">Explore Our Tools</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href="/templates" className="text-amber-600 hover:text-amber-700 underline">Pro Estimate Templates →</Link>
          <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">Free Slab Calculator →</Link>
          <Link href="/tools/bid-calculator-pro" className="text-amber-600 hover:text-amber-700 underline">Bid Calculator Pro →</Link>
          <Link href="/calculators/driveway" className="text-amber-600 hover:text-amber-700 underline">Driveway Calculator →</Link>
          <Link href="/blog/how-to-price-concrete-work" className="text-amber-600 hover:text-amber-700 underline">How to Price Concrete Work →</Link>
          <Link href="/calculators/stairs" className="text-amber-600 hover:text-amber-700 underline">Stairs Calculator →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Go beyond calculations — win more bids</h2>
        <p className="text-slate-300 mb-6">
          Get 8 pre-built concrete estimate templates, a bid calculator, contract, SOP, and more — one-time purchase, yours forever.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/starter-kit" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition">
            Get the Complete Toolkit — $79
          </Link>
          <Link href="/templates" className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-8 rounded-lg transition">
            Browse Individual Products
          </Link>
        </div>
      </div>

      {/* Other Comparisons */}
      <div className="mt-10 text-center text-sm text-slate-500">
        <p className="mb-2">See how we compare to other tools:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/compare/vs-clear-estimates" className="text-amber-600 hover:text-amber-700 underline">vs Clear Estimates</Link>
          <Link href="/compare/vs-joist" className="text-amber-600 hover:text-amber-700 underline">vs Joist</Link>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is EstimateConcrete better than ConcreteCalc Pro?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They solve different problems. ConcreteCalc Pro is a construction math calculator ($11.99). EstimateConcrete is a complete estimating and business toolkit ($29-$297) with 8 estimate templates, bid calculator, contract, SOP, and more. Many contractors use both.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best ConcreteCalc Pro alternative for building estimates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EstimateConcrete is the best alternative if you need to go beyond calculations and build professional bids. It includes 8 concrete-specific estimate templates, a bid calculator with profit margins, and business tools like contracts and SOPs.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use EstimateConcrete and ConcreteCalc Pro together?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Many contractors use ConcreteCalc Pro on their phone for quick field calculations and EstimateConcrete templates on their laptop for building professional bids. Together they cost about $91 — less than one month of most estimating software subscriptions.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
