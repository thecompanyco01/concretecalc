import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstimateConcrete vs Clear Estimates — Honest Comparison (2026)",
  description:
    "Compare EstimateConcrete and Clear Estimates side-by-side. See why concrete contractors choose our one-time $29-$297 purchase over Clear Estimates' $59-119/mo subscription. The best Clear Estimates alternative for concrete pros.",
  keywords:
    "clear estimates alternative, clear estimates review, clear estimates vs estimateconcrete, concrete estimating software comparison, clear estimates competitor, estimating software for concrete contractors",
  alternates: { canonical: "https://estimateconcrete.com/compare/vs-clear-estimates" },
  openGraph: {
    title: "EstimateConcrete vs Clear Estimates — Honest Comparison (2026)",
    description:
      "Honest comparison: concrete-specific tools at a one-time price vs generic remodeling software at $59-119/mo.",
    url: "https://estimateconcrete.com/compare/vs-clear-estimates",
  },
};

const comparisonRows = [
  ["Industry Focus", "Concrete-only — every template built for concrete work", "General remodeling (kitchens, baths, roofing, concrete)"],
  ["Pricing Model", "$29–$297 one-time purchase", "$59–$119/month ($708–$1,428/year)"],
  ["Estimate Templates", "8 concrete-specific templates with pro tips", "Generic templates across all trades"],
  ["Bid Calculator", "✅ Concrete-specific with waste factors & profit margins", "✅ General calculator"],
  ["Contract Template", "✅ Concrete-specific terms, warranty & change orders", "✅ Generic contract"],
  ["SOP / Pour Checklist", "✅ Step-by-step concrete pour SOP", "❌ Not included"],
  ["Pricing Matrix", "✅ Regional concrete pricing by project type", "✅ General pricing database"],
  ["Equipment Guide", "✅ Concrete equipment buying guide", "❌ Not included"],
  ["Marketing Plan", "✅ 90-day plan for concrete contractors", "❌ Not included"],
  ["Free Calculators", "✅ 9 concrete calculators (slab, driveway, patio, etc.)", "Limited free content"],
  ["Ownership", "Own forever — download once, use offline", "Lose access when you stop paying"],
  ["Learning Curve", "Open and start using immediately", "Requires onboarding and setup"],
  ["Works Offline", "✅ Excel & Google Sheets", "❌ Cloud-only (needs internet)"],
  ["Team Sharing", "Share files with anyone — no extra cost", "Per-seat pricing adds cost"],
];

export default function VsClearEstimates() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
        ← Back to Products
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mt-6 mb-4">
        EstimateConcrete vs Clear Estimates — Honest Comparison (2026)
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Clear Estimates is a well-known remodeling estimating platform — but is it the right choice for a dedicated
        concrete contractor? We don&apos;t think so. Here&apos;s a transparent, no-BS comparison so you can decide for yourself.
      </p>

      {/* Quick Summary */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">⚡ TL;DR</h2>
        <ul className="space-y-2 text-slate-700">
          <li><strong>EstimateConcrete</strong> — Built exclusively for concrete contractors. One-time purchase ($29–$297). 8 estimate templates, bid calculator, contract, SOP, pricing matrix, equipment guide, and marketing plan.</li>
          <li><strong>Clear Estimates</strong> — General remodeling estimating platform. $59–$119/month ($708–$1,428/year). Covers kitchens, baths, roofing — concrete is a small category.</li>
        </ul>
      </div>

      {/* Core Difference */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Concrete-Specific vs Generic Remodeling</h2>
      <p className="text-slate-600 mb-4">
        Clear Estimates serves general remodelers who do kitchens, bathrooms, additions, roofing, and some concrete. Their pricing
        database covers hundreds of categories across the whole remodeling industry.
      </p>
      <p className="text-slate-600 mb-6">
        EstimateConcrete is built <em>exclusively</em> for concrete. Our driveway template includes fiber mesh additives,
        expansion joint filler, specific rebar sizes, sealer types, and equipment like power trowels and concrete vibrators.
        Our <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">slab calculator</Link> knows
        the difference between 4000 PSI and 4500 PSI concrete. If concrete is your bread and butter, generic tools slow you down.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Feature-by-Feature Comparison</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="text-left py-3 px-4 rounded-tl-lg">Feature</th>
              <th className="text-center py-3 px-4">EstimateConcrete</th>
              <th className="text-center py-3 px-4 rounded-tr-lg">Clear Estimates</th>
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
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pricing: Pay Once vs Pay Forever</h2>
      <p className="text-slate-600 mb-4">
        Clear Estimates charges $59/month (basic) to $119/month (professional). That&apos;s <strong>$708 to $1,428 per year</strong>, every year.
        Cancel and you lose access to everything.
      </p>
      <div className="bg-slate-100 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-3">💰 3-Year Cost Comparison</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold text-amber-600 text-lg">EstimateConcrete</p>
            <p className="text-slate-700">Complete Toolkit: <strong>$79 total</strong></p>
            <p className="text-slate-500">Year 1: $79 | Year 2: $0 | Year 3: $0</p>
          </div>
          <div>
            <p className="font-bold text-slate-500 text-lg">Clear Estimates</p>
            <p className="text-slate-700">Professional Plan: <strong>$3,564 total</strong></p>
            <p className="text-slate-500">Year 1: $1,188 | Year 2: $1,188 | Year 3: $1,188</p>
          </div>
        </div>
        <p className="text-slate-600 mt-4 text-sm">
          That&apos;s <strong>$3,485 saved</strong> over 3 years with EstimateConcrete.
        </p>
      </div>

      {/* Where Clear Estimates Wins */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where Clear Estimates Wins</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Multi-trade coverage</strong> — If you also do kitchens, baths, and roofing, Clear Estimates handles it all.</li>
        <li><strong>Auto-updated pricing</strong> — Their material pricing database updates regularly; our templates use editable fields.</li>
        <li><strong>Cloud collaboration</strong> — Real-time team access to estimates in the cloud.</li>
        <li><strong>Established brand</strong> — Larger user base and more community resources.</li>
      </ul>

      {/* Why Contractors Choose EstimateConcrete */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Contractors Choose EstimateConcrete</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">🎯 Purpose-Built for Concrete</h3>
          <p className="text-slate-600 text-sm">Every line item, pro tip, and checklist is concrete-specific. We know the difference between broom finish and exposed aggregate, between #4 rebar and #5 rebar. Generic tools can&apos;t match that depth.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">💵 Save Thousands Per Year</h3>
          <p className="text-slate-600 text-sm">Pay $29–$297 once and own your tools forever. No monthly fees, no surprise price hikes, no losing access if you cancel.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">📦 Complete Business Toolkit</h3>
          <p className="text-slate-600 text-sm">Beyond estimating: contract templates, pour SOPs, pricing matrices, equipment guides, and a 90-day marketing plan. Everything a concrete business needs to run professionally.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">📱 Works Anywhere — Even Offline</h3>
          <p className="text-slate-600 text-sm">Excel and Google Sheets work on the job site with or without wifi. No internet dependency, no account login required.</p>
        </div>
      </div>

      {/* Internal Links */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-slate-900 mb-3">Explore Our Tools</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href="/templates" className="text-amber-600 hover:text-amber-700 underline">Pro Estimate Templates →</Link>
          <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">Free Slab Calculator →</Link>
          <Link href="/tools/bid-calculator-pro" className="text-amber-600 hover:text-amber-700 underline">Bid Calculator Pro →</Link>
          <Link href="/calculators/driveway" className="text-amber-600 hover:text-amber-700 underline">Driveway Calculator →</Link>
          <Link href="/blog/how-to-bid-concrete-jobs" className="text-amber-600 hover:text-amber-700 underline">How to Bid Concrete Jobs →</Link>
          <Link href="/calculators/patio" className="text-amber-600 hover:text-amber-700 underline">Patio Calculator →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to ditch the monthly subscription?</h2>
        <p className="text-slate-300 mb-6">
          Get all 8 estimate templates, bid calculator, contract, SOP, and more — one-time purchase, yours forever.
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
          <Link href="/compare/vs-joist" className="text-amber-600 hover:text-amber-700 underline">vs Joist</Link>
          <Link href="/compare/vs-concretecalc-pro" className="text-amber-600 hover:text-amber-700 underline">vs ConcreteCalc Pro</Link>
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
                name: "Is EstimateConcrete better than Clear Estimates for concrete contractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For dedicated concrete contractors, yes. EstimateConcrete offers deeper, concrete-specific tools (8 templates, bid calculator, SOP, contract) at a one-time price of $29-$297, versus Clear Estimates' $59-$119/month subscription for generic remodeling tools.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Clear Estimates cost vs EstimateConcrete?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clear Estimates costs $59-$119/month ($708-$1,428/year). EstimateConcrete is a one-time purchase of $29-$297 with no recurring fees. Over 3 years, you save up to $3,485 with EstimateConcrete.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best Clear Estimates alternative for concrete contractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EstimateConcrete is the top Clear Estimates alternative for concrete contractors. It's purpose-built for concrete work with 8 specialized estimate templates, a concrete bid calculator, pour SOP, and business tools — all at a one-time price.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
