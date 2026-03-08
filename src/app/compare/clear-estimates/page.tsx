import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstimateConcrete vs Clear Estimates — Concrete-Specific vs Generic Remodeling Tool (2025)",
  description:
    "Detailed comparison of EstimateConcrete and Clear Estimates. See why concrete contractors choose our one-time purchase over Clear Estimates' $59-119/month subscription. Concrete-specific templates, bid calculator, and business tools.",
  keywords:
    "clear estimates alternative, clear estimates vs, clear estimates competitor, concrete estimating software, clear estimates review, estimating software for concrete contractors",
  alternates: { canonical: "https://estimateconcrete.com/compare/clear-estimates" },
  openGraph: {
    title: "EstimateConcrete vs Clear Estimates — Which Is Better for Concrete Contractors?",
    description:
      "Honest comparison: we're concrete-specific, they're generic remodeling. One-time purchase vs monthly subscription.",
    url: "https://estimateconcrete.com/compare/clear-estimates",
  },
};

export default function ClearEstimatesComparison() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
        ← Back to Products
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mt-6 mb-4">
        EstimateConcrete vs Clear Estimates: Which Is Better for Concrete Contractors in 2025?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        If you&apos;re a concrete contractor looking for estimating software, you&apos;ve probably come across Clear Estimates.
        They&apos;re a well-known name in the remodeling estimating space — but are they the right fit for concrete work specifically?
        We built EstimateConcrete because we didn&apos;t think so. Here&apos;s an honest, detailed comparison to help you decide.
      </p>

      {/* Quick Summary Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">⚡ Quick Summary</h2>
        <ul className="space-y-2 text-slate-700">
          <li><strong>EstimateConcrete</strong> — Built exclusively for concrete contractors. One-time purchase ($29–$297). Includes 8 estimate templates, bid calculator, contract template, SOP, pricing matrix, equipment guide, and marketing plan.</li>
          <li><strong>Clear Estimates</strong> — General remodeling estimating platform. Monthly subscription ($59–$119/month = $708–$1,428/year). Covers kitchens, bathrooms, roofing, siding, and more — concrete is just one small category.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Core Difference: Concrete-Specific vs Generic Remodeling</h2>

      <p className="text-slate-600 mb-4">
        This is the fundamental difference. Clear Estimates is designed for general remodeling contractors who do a little bit of everything — 
        kitchens, bathrooms, additions, roofing, painting, and yes, some concrete. Their pricing database covers hundreds of categories 
        across the entire remodeling industry.
      </p>

      <p className="text-slate-600 mb-4">
        EstimateConcrete is built <em>exclusively</em> for concrete contractors. Every template, every line item, every pro tip is about concrete work. 
        Our driveway template doesn&apos;t just list &quot;concrete&quot; — it includes fiber mesh additives, expansion joint filler, specific rebar sizes, 
        sealer types, and equipment like power trowels and concrete vibrators. Our bid calculator knows the difference between 4000 PSI and 
        4500 PSI concrete. Our SOP covers the exact sequence of a concrete pour from pre-pour prep to curing.
      </p>

      <p className="text-slate-600 mb-6">
        If you do concrete work <em>and</em> kitchen remodeling, Clear Estimates might make sense. If you&apos;re a dedicated concrete contractor, 
        EstimateConcrete gives you deeper, more accurate tools purpose-built for your trade.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Side-by-Side Comparison</h2>

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
            {[
              ["Focus", "Concrete-only", "General remodeling"],
              ["Pricing", "$29–$297 one-time", "$59–$119/month ($708–$1,428/yr)"],
              ["Estimate Templates", "8 concrete-specific templates", "Generic templates across all trades"],
              ["Bid Calculator", "✅ Concrete-specific with waste factors", "✅ General calculator"],
              ["Contract Template", "✅ Concrete-specific terms & warranty", "✅ Generic contract"],
              ["SOP (Pour Checklist)", "✅ Concrete pour SOP", "❌ Not included"],
              ["Pricing Matrix", "✅ Concrete pricing by region & type", "✅ General pricing database"],
              ["Equipment Guide", "✅ Concrete equipment buying guide", "❌ Not included"],
              ["Marketing Plan", "✅ 90-day plan for concrete contractors", "❌ Not included"],
              ["Pro Tips (per template)", "✅ Insider tips from experienced finishers", "❌ Not included"],
              ["Change Order Tracking", "✅ Built into every template", "✅ Available"],
              ["Site Conditions Checklist", "✅ Job-specific site assessment", "❌ Not included"],
              ["Free Tools", "✅ Calculators, blog, guides", "Limited free content"],
              ["Ownership", "Own forever — download once", "Lose access if you stop paying"],
              ["Learning Curve", "Open and start using immediately", "Requires onboarding and setup"],
              ["Cloud/Offline", "Works offline (Excel/Sheets)", "Cloud-only (needs internet)"],
              ["Team Features", "Share files with anyone", "Per-seat pricing adds cost"],
            ].map(([feature, us, them], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="py-3 px-4 font-medium text-slate-900 border-b border-slate-200">{feature}</td>
                <td className="py-3 px-4 text-center text-slate-700 border-b border-slate-200">{us}</td>
                <td className="py-3 px-4 text-center text-slate-700 border-b border-slate-200">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pricing: One-Time vs Monthly Subscription</h2>

      <p className="text-slate-600 mb-4">
        This is where the math gets interesting. Clear Estimates charges $59/month for their basic plan and $119/month for their 
        professional plan. That&apos;s <strong>$708 to $1,428 per year</strong>, every year, as long as you use the software.
      </p>

      <p className="text-slate-600 mb-4">
        EstimateConcrete is a one-time purchase. Our estimate template pack is $49. The bid calculator is $29. 
        Or get everything in the Complete Contractor Toolkit bundle for $79. Pay once, own forever.
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
          That&apos;s a <strong>$3,485 difference</strong> over 3 years. Even at their basic plan ($59/mo), you&apos;d spend $2,124 over 3 years vs our $79.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where Clear Estimates Wins</h2>

      <p className="text-slate-600 mb-4">
        We believe in honest comparisons, so here&apos;s where Clear Estimates has advantages:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Breadth of coverage</strong> — If you do remodeling work beyond concrete (kitchens, baths, roofing), Clear Estimates covers it all in one platform. We don&apos;t.</li>
        <li><strong>Pricing database updates</strong> — Their material pricing database is updated regularly to reflect current costs. Our templates use editable fields where you enter your own prices.</li>
        <li><strong>Cloud collaboration</strong> — If you have a team that needs real-time cloud access to estimates, Clear Estimates handles that better than downloadable spreadsheets.</li>
        <li><strong>Established brand</strong> — They&apos;ve been around longer and have a larger user base, which means more community resources.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where EstimateConcrete Wins</h2>

      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Concrete depth</strong> — Every line item, pro tip, and checklist is concrete-specific. We know the difference between broom finish and exposed aggregate, between #4 rebar and #5 rebar, between 4000 PSI and 4500 PSI.</li>
        <li><strong>Price</strong> — $79 once vs $708–$1,428/year. Not even close.</li>
        <li><strong>No lock-in</strong> — You own the files. Excel, Google Sheets, whatever you prefer. No subscription to cancel, no data hostage situation.</li>
        <li><strong>Business tools included</strong> — Contract template, SOP, pricing matrix, equipment guide, and marketing plan are included. Clear Estimates is just an estimating tool.</li>
        <li><strong>Works offline</strong> — Job sites don&apos;t always have great wifi. Our spreadsheets work anywhere.</li>
        <li><strong>No learning curve</strong> — Open the template, fill in your numbers. That&apos;s it. No onboarding, no training videos, no account setup.</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who Should Use Which?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Choose EstimateConcrete if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>✅ Focus exclusively on concrete work</li>
            <li>✅ Want to pay once, not monthly</li>
            <li>✅ Prefer working in Excel or Google Sheets</li>
            <li>✅ Need concrete-specific pro tips and SOPs</li>
            <li>✅ Want business tools beyond just estimating</li>
            <li>✅ Work solo or with a small crew</li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Choose Clear Estimates if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>Do multiple trades (concrete + remodeling)</li>
            <li>Need auto-updated pricing databases</li>
            <li>Have a large team needing cloud collaboration</li>
            <li>Want a single platform for all trades</li>
            <li>Don&apos;t mind paying $59–$119/month indefinitely</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Concrete Contractors Actually Need</h2>

      <p className="text-slate-600 mb-4">
        After talking to dozens of concrete contractors, here&apos;s what we&apos;ve learned: most concrete guys don&apos;t need a 
        complex software platform with 10,000 line items covering every trade. They need a clean estimate template they can fill 
        in quickly, a reliable way to calculate cubic yards and pricing, and a professional-looking bid they can hand to a homeowner.
      </p>

      <p className="text-slate-600 mb-4">
        That&apos;s exactly what EstimateConcrete delivers. Eight estimate templates covering every major concrete project type (driveways, 
        slabs, patios, foundations, stamped, retaining walls, pool decks, and garage floors), a bid calculator with built-in waste 
        factors and profit margins, and business tools like contracts, SOPs, and pricing matrices.
      </p>

      <p className="text-slate-600 mb-6">
        It&apos;s everything a concrete contractor needs, without the complexity (or the monthly bill) you don&apos;t need.
      </p>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to simplify your concrete estimating?</h2>
        <p className="text-slate-300 mb-6">
          Get all 8 estimate templates, bid calculator, contract, SOP, and more — one-time purchase, no subscription.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/bundle"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition"
          >
            Get the Complete Toolkit — $79
          </Link>
          <Link
            href="/templates"
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-8 rounded-lg transition"
          >
            Browse Individual Products
          </Link>
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
                  text: "For dedicated concrete contractors, EstimateConcrete offers deeper, more specific tools at a fraction of the cost. Clear Estimates is better for general remodeling contractors who do multiple trades.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Clear Estimates cost compared to EstimateConcrete?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Clear Estimates costs $59-$119/month ($708-$1,428/year). EstimateConcrete is a one-time purchase of $29-$79 with no recurring fees.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
