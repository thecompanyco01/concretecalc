import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstimateConcrete vs Joist — Honest Comparison (2026)",
  description:
    "Compare EstimateConcrete and Joist (now part of Homebase) for concrete estimating. One-time $29-$297 vs Joist's monthly subscription. See why concrete contractors prefer purpose-built tools over generic invoicing apps.",
  keywords:
    "joist alternative, joist app review, joist vs estimateconcrete, joist estimating app, concrete estimating software, joist competitor, joist app for contractors",
  alternates: { canonical: "https://estimateconcrete.com/compare/vs-joist" },
  openGraph: {
    title: "EstimateConcrete vs Joist — Honest Comparison (2026)",
    description:
      "Joist is a general contractor invoicing app. EstimateConcrete is purpose-built for concrete. Here's the honest comparison.",
    url: "https://estimateconcrete.com/compare/vs-joist",
  },
};

const comparisonRows = [
  ["Industry Focus", "Concrete-only — templates, calculators, and tools for concrete work", "General contractor invoicing & estimating (all trades)"],
  ["Pricing Model", "$29–$297 one-time purchase", "Free tier (limited) / $16.99–$54.99/month"],
  ["Estimate Templates", "8 concrete-specific templates with line items & pro tips", "Generic blank estimate builder"],
  ["Bid Calculator", "✅ Concrete-specific with waste factors, PSI options, profit margins", "❌ No dedicated calculator"],
  ["Contract Template", "✅ Concrete-specific terms, warranty & change orders", "✅ Basic contract included"],
  ["SOP / Pour Checklist", "✅ Step-by-step concrete pour SOP", "❌ Not included"],
  ["Invoicing", "Use your existing invoicing tool (QuickBooks, etc.)", "✅ Built-in invoicing & payments"],
  ["Pricing Matrix", "✅ Regional concrete pricing by project type", "❌ Not included"],
  ["Equipment Guide", "✅ Concrete equipment buying guide", "❌ Not included"],
  ["Marketing Plan", "✅ 90-day plan for concrete contractors", "❌ Not included"],
  ["Free Calculators", "✅ 9 concrete calculators (slab, driveway, patio, footing, etc.)", "❌ Not included"],
  ["Client Communication", "Professional estimates via email/PDF", "✅ In-app client portal & messaging"],
  ["Ownership", "Own forever — download once, use offline", "Lose access when you stop paying"],
  ["Works Offline", "✅ Excel & Google Sheets", "❌ Cloud-only"],
  ["Mobile App", "Works in mobile Sheets/Excel apps", "✅ Dedicated iOS & Android app"],
];

export default function VsJoist() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
        ← Back to Products
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mt-6 mb-4">
        EstimateConcrete vs Joist — Honest Comparison (2026)
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Joist (now part of Homebase) is a popular invoicing and estimating app for general contractors. But if you&apos;re
        a concrete contractor, you need more than a blank invoice template. Here&apos;s how EstimateConcrete and Joist
        actually compare for concrete work.
      </p>

      {/* Quick Summary */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">⚡ TL;DR</h2>
        <ul className="space-y-2 text-slate-700">
          <li><strong>EstimateConcrete</strong> — Purpose-built for concrete contractors. One-time purchase ($29–$297). 8 estimate templates, bid calculator, contract, SOP, pricing matrix, equipment guide, marketing plan, and 9 free calculators.</li>
          <li><strong>Joist</strong> — General contractor invoicing & estimating app. Free tier with limits, paid plans $16.99–$54.99/month. Covers all trades but has no concrete-specific features.</li>
        </ul>
      </div>

      {/* Core Difference */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Estimating Tool vs Invoicing App</h2>
      <p className="text-slate-600 mb-4">
        Joist is primarily an <strong>invoicing and client management</strong> app that happens to include estimating.
        It&apos;s great for sending professional-looking invoices, collecting payments, and managing client communication.
        But when it comes to actually <em>estimating</em> a concrete job — calculating cubic yards, accounting for waste,
        pricing rebar and fiber mesh, figuring profit margins — Joist gives you a blank slate.
      </p>
      <p className="text-slate-600 mb-6">
        EstimateConcrete is the opposite: we&apos;re laser-focused on helping you <strong>estimate concrete jobs accurately</strong>.
        Our <Link href="/templates" className="text-amber-600 hover:text-amber-700 underline">8 estimate templates</Link> come
        pre-loaded with every line item a concrete job needs — from mobilization to final sealer application. Our{" "}
        <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">free calculators</Link> handle
        the math. You focus on the job, not building estimates from scratch.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Feature-by-Feature Comparison</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="text-left py-3 px-4 rounded-tl-lg">Feature</th>
              <th className="text-center py-3 px-4">EstimateConcrete</th>
              <th className="text-center py-3 px-4 rounded-tr-lg">Joist</th>
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
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pricing Breakdown</h2>
      <p className="text-slate-600 mb-4">
        Joist offers a free tier with limited features, but their paid plans run $16.99/month (Plus) to $54.99/month (Premium).
        That&apos;s <strong>$204 to $660 per year</strong>. And Joist&apos;s free plan limits your estimates, so most active
        contractors end up on a paid tier.
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
            <p className="font-bold text-slate-500 text-lg">Joist Premium</p>
            <p className="text-slate-700">Premium Plan: <strong>$1,980 total</strong></p>
            <p className="text-slate-500">Year 1: $660 | Year 2: $660 | Year 3: $660</p>
          </div>
        </div>
        <p className="text-slate-600 mt-4 text-sm">
          That&apos;s <strong>$1,901 saved</strong> over 3 years — and you get concrete-specific tools Joist doesn&apos;t offer.
        </p>
      </div>

      {/* Where Joist Wins */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where Joist Wins</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Built-in invoicing & payments</strong> — Send invoices and collect payments directly in the app. EstimateConcrete focuses on estimating; you&apos;d use QuickBooks or similar for invoicing.</li>
        <li><strong>Client portal</strong> — Clients can view estimates, approve, and pay online. Great for customer experience.</li>
        <li><strong>Dedicated mobile app</strong> — Native iOS and Android app designed for on-site use.</li>
        <li><strong>All-in-one for small jobs</strong> — If you do small handyman-type concrete work alongside other trades, Joist covers everything in one place.</li>
        <li><strong>Free tier available</strong> — You can start with Joist for free (with limitations).</li>
      </ul>

      {/* Why Contractors Choose EstimateConcrete */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Contractors Choose EstimateConcrete</h2>
      <div className="space-y-4 mb-10">
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">🎯 Concrete-Specific Accuracy</h3>
          <p className="text-slate-600 text-sm">Joist gives you a blank estimate. We give you pre-built templates with every concrete line item — demolition, grading, forms, rebar, concrete (by PSI), fiber mesh, finishing, sealing, and cleanup. Stop guessing and start estimating accurately.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">🧮 Built-In Concrete Calculators</h3>
          <p className="text-slate-600 text-sm">Our <Link href="/calculators/slab" className="text-amber-600 hover:text-amber-700 underline">9 free calculators</Link> compute cubic yards, bags of concrete, rebar spacing, and costs for slabs, driveways, patios, footings, stairs, walls, and more. Joist has nothing like this.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">📋 Business Tools Included</h3>
          <p className="text-slate-600 text-sm">Contract templates with concrete-specific warranty terms, pour SOPs, equipment buying guides, and a 90-day marketing plan. Joist is just estimating and invoicing — we help you run the whole business.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-slate-900 mb-2">💵 Pay Once, Own Forever</h3>
          <p className="text-slate-600 text-sm">No subscriptions, no per-seat pricing, no losing your templates if you cancel. Download once, use forever, share with your crew.</p>
        </div>
      </div>

      {/* Who Should Use Which */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Which Should You Choose?</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Choose EstimateConcrete if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>✅ Are a dedicated concrete contractor</li>
            <li>✅ Want pre-built concrete estimate templates</li>
            <li>✅ Need accurate concrete calculators</li>
            <li>✅ Prefer one-time purchase over subscriptions</li>
            <li>✅ Already use QuickBooks or similar for invoicing</li>
            <li>✅ Want business tools beyond estimating</li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Choose Joist if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>Need all-in-one invoicing + estimating</li>
            <li>Do multiple trades, not just concrete</li>
            <li>Want a client-facing portal for approvals</li>
            <li>Prefer a native mobile app</li>
            <li>Don&apos;t mind paying monthly indefinitely</li>
          </ul>
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
          <Link href="/blog/how-to-estimate-concrete-jobs" className="text-amber-600 hover:text-amber-700 underline">How to Estimate Concrete Jobs →</Link>
          <Link href="/calculators/footing" className="text-amber-600 hover:text-amber-700 underline">Footing Calculator →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Stop building estimates from scratch</h2>
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
                name: "Is EstimateConcrete better than Joist for concrete contractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For dedicated concrete contractors, yes. EstimateConcrete provides 8 concrete-specific estimate templates, a bid calculator with waste factors, pour SOPs, and business tools. Joist is a general invoicing app with no concrete-specific features.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Joist cost compared to EstimateConcrete?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Joist's paid plans cost $16.99-$54.99/month ($204-$660/year). EstimateConcrete is a one-time purchase of $29-$297 with no recurring fees. Over 3 years, you can save up to $1,901 with EstimateConcrete.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best Joist alternative for concrete contractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EstimateConcrete is the best Joist alternative for concrete contractors. While Joist is a generic invoicing tool, EstimateConcrete is purpose-built for concrete with specialized templates, calculators, and business tools at a one-time price.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
