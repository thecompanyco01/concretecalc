import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstimateConcrete vs Joist — Concrete-Specific Tools vs General Contractor App (2025)",
  description:
    "Detailed comparison of EstimateConcrete and Joist. See why concrete contractors choose our one-time purchase over Joist's monthly subscription. Built exclusively for concrete with templates, bid calculator, contract, and business guides.",
  keywords:
    "joist alternative, joist app review, joist vs estimateconcrete, concrete estimating software, joist competitor, estimating app for concrete contractors",
  alternates: { canonical: "https://estimateconcrete.com/compare/joist" },
  openGraph: {
    title: "EstimateConcrete vs Joist — Which Is Better for Concrete Contractors?",
    description:
      "Honest comparison: we're concrete-specific with a one-time price. Joist is a general contractor app with a monthly subscription.",
    url: "https://estimateconcrete.com/compare/joist",
  },
};

export default function JoistComparison() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">
        ← Back to Products
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mt-6 mb-4">
        EstimateConcrete vs Joist: Which Is Better for Concrete Contractors in 2025?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Joist is one of the most widely used contractor apps in North America — if you&apos;re a contractor, you&apos;ve probably heard of it or tried it.
        But is a general-purpose contractor app the right tool for a dedicated concrete contractor? We built EstimateConcrete because we believe the answer is no.
        Here&apos;s a thorough, honest comparison to help you decide.
      </p>

      {/* Quick Summary */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-3">⚡ Quick Summary</h2>
        <ul className="space-y-2 text-slate-700">
          <li><strong>EstimateConcrete</strong> — Built exclusively for concrete contractors. One-time purchase ($29–$297). Includes 8 concrete-specific estimate templates, bid calculator, contract template, concrete pour SOP, pricing matrix, equipment guide, and 90-day marketing plan. Own your files forever in Excel or Google Sheets.</li>
          <li><strong>Joist</strong> — General contractor invoicing and estimating app. Subscription-based ($0–$59+/month depending on plan). Covers all trades — carpentry, plumbing, painting, HVAC, electrical, and yes, concrete. Strong invoicing and payment collection features. Mobile-first design.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Joist Is Great At</h2>

      <p className="text-slate-600 mb-4">
        Joist was designed to help small contractors send professional estimates and collect payments faster. And for that core use case, it genuinely works well. The app is clean, mobile-friendly, and lets you build estimates, send them to clients, get e-signatures, and take credit card payments — all from your phone.
      </p>

      <p className="text-slate-600 mb-4">
        If you&apos;re a one-man operation and you struggle with the admin side of the business — getting estimates out fast, following up on unpaid invoices, collecting deposits — Joist solves those problems reasonably well. Their free tier lets you try the basics, and their paid plans add features like team members, QuickBooks sync, and financing options for clients.
      </p>

      <p className="text-slate-600 mb-6">
        Where Joist falls short for concrete contractors is depth. It&apos;s a general platform. The line items in Joist are generic — &quot;concrete&quot; is just another category alongside &quot;painting&quot; and &quot;landscaping.&quot; There&apos;s no understanding of cubic yards vs square feet, no waste factor calculations, no rebar specifications, no distinction between 4000 PSI and 4500 PSI mix designs. It&apos;s a blank canvas you fill in yourself.
      </p>

      {/* Comparison Table */}
      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Side-by-Side Comparison</h2>

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
            {[
              ["Trade Focus", "Concrete-only", "All trades (general)"],
              ["Pricing Model", "$29–$79 one-time (no subscription)", "Free–$59+/month subscription"],
              ["Estimate Templates", "8 concrete-specific templates", "Blank template builder"],
              ["Cubic Yard Calculator", "✅ Built-in with waste factors", "❌ Not included"],
              ["Concrete-Specific Line Items", "✅ Rebar, PSI, fiber mesh, etc.", "❌ Generic line items only"],
              ["Contract Template", "✅ Concrete-specific with warranty", "✅ Basic contract available"],
              ["E-Signature Collection", "❌ (use PDF/email)", "✅ Built-in e-signature"],
              ["Payment Collection", "❌ (use your processor)", "✅ Credit card, financing"],
              ["Concrete Pour SOP", "✅ Step-by-step checklist", "❌ Not included"],
              ["Pricing Matrix", "✅ Concrete pricing by region & type", "❌ Not included"],
              ["Equipment Guide", "✅ Concrete equipment buying guide", "❌ Not included"],
              ["Marketing Plan", "✅ 90-day plan for concrete contractors", "❌ Not included"],
              ["Mobile App", "❌ Spreadsheet-based", "✅ iOS and Android"],
              ["Works Offline", "✅ Excel/Google Sheets", "Limited offline functionality"],
              ["Cloud Sync", "Manual (save your own files)", "✅ Automatic cloud sync"],
              ["QuickBooks Integration", "❌", "✅ On paid plans"],
              ["Team Members", "Share files manually", "✅ Team seats on paid plans"],
              ["File Ownership", "Own forever, no lock-in", "Lose access if you cancel"],
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
        Joist&apos;s free tier is genuinely useful for basic estimates and invoices. But once you need features like removing Joist branding from estimates, adding team members, or syncing with QuickBooks, you&apos;re looking at $29–$59 per month — <strong>$348–$708 per year</strong>.
      </p>

      <p className="text-slate-600 mb-4">
        EstimateConcrete is a one-time purchase. The Complete Contractor Toolkit is $79 total. No monthly fees. No subscription to cancel. No losing access to your templates when you forget to renew.
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
            <p className="font-bold text-slate-500 text-lg">Joist (paid plan)</p>
            <p className="text-slate-700">Pro Plan: <strong>~$2,124 total</strong></p>
            <p className="text-slate-500">Year 1: $708 | Year 2: $708 | Year 3: $708</p>
          </div>
        </div>
        <p className="text-slate-600 mt-4 text-sm">
          That&apos;s over <strong>$2,000 in savings</strong> over 3 years — enough to buy a new concrete vibrator and a plate compactor.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Concrete Depth Problem with Joist</h2>

      <p className="text-slate-600 mb-4">
        Here&apos;s a real-world example of where Joist falls short for concrete work. When you create an estimate in Joist for a driveway, you start with a blank slate. You manually add line items: &quot;concrete,&quot; &quot;gravel,&quot; &quot;labor.&quot; You fill in quantities yourself. The app has no idea how to calculate cubic yards from dimensions, no waste factor, no understanding that a 20×40 driveway at 5&quot; thick needs approximately 6.2 CY with waste.
      </p>

      <p className="text-slate-600 mb-4">
        EstimateConcrete&apos;s driveway template already has every line item you need: ready-mix concrete (with PSI spec), gravel base, wire mesh, rebar, expansion joint filler, form lumber, fiber mesh additive, sealer, demo/removal, excavation, compaction, formwork, placement, finishing, broom finish, cleanup. Every item with typical quantities and pricing. You open the template and update the numbers for your specific job.
      </p>

      <p className="text-slate-600 mb-4">
        More importantly, our templates include <strong>pro tips from experienced finishers</strong> — things like minimum PSI for driveways in freeze-thaw climates, when to use #4 vs #5 rebar, why you should never add water at the jobsite, the right time to start troweling. Joist is just a blank form.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What&apos;s Included in the EstimateConcrete Starter Kit</h2>

      <p className="text-slate-600 mb-4">
        When you get the Complete Contractor Toolkit ($79), you get a complete business toolkit designed specifically for concrete contractors:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[
          { title: "8 Estimate Templates", desc: "Driveways, slabs, patios, foundations, stamped, retaining walls, pool decks, garage floors. Concrete-specific line items, quantities, and pro tips." },
          { title: "Bid Calculator", desc: "Calculate cubic yards, bags, waste, labor, and profit margin. Built-in formulas for every major concrete calculation." },
          { title: "Contract Template", desc: "Concrete-specific terms, warranty language, change order provisions, and payment schedule. Not a generic contractor contract." },
          { title: "Concrete Pour SOP", desc: "Step-by-step standard operating procedure for a concrete pour. Pre-pour checklist through final curing. Train new employees or use as a quality checklist." },
          { title: "Pricing Matrix", desc: "Regional pricing for every major concrete project type. Know what the market rate is in your area before you bid." },
          { title: "Equipment Guide", desc: "What to rent vs buy, which brands to trust, what a start-up concrete operation actually needs. Save thousands on equipment mistakes." },
          { title: "90-Day Marketing Plan", desc: "How to get your first 10 concrete customers, Google Business optimization, neighborhood targeting, referral strategies — all concrete-specific." },
          { title: "Free Calculators", desc: "Slab, driveway, patio, footing, rebar, column, wall, curb — every calculator you need at estimateconcrete.com, forever free." },
        ].map((item) => (
          <div key={item.title} className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">✅ {item.title}</h3>
            <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who Should Use Each Tool?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Choose EstimateConcrete if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>✅ Focus exclusively or primarily on concrete work</li>
            <li>✅ Want to pay once, not monthly</li>
            <li>✅ Prefer spreadsheet-based estimating (Excel/Sheets)</li>
            <li>✅ Need concrete-specific calculations and line items</li>
            <li>✅ Want business tools beyond just invoicing</li>
            <li>✅ Are starting a new concrete business and need the full toolkit</li>
            <li>✅ Want to own your templates with no lock-in</li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Consider Joist if you:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li>Do multiple trades (not just concrete)</li>
            <li>Need client-facing mobile estimates on your phone</li>
            <li>Want built-in credit card processing and financing</li>
            <li>Need e-signatures and automated follow-ups</li>
            <li>Want QuickBooks integration</li>
            <li>Are OK with paying $29–$59/month indefinitely</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Can You Use Both?</h2>

      <p className="text-slate-600 mb-4">
        Absolutely — and some contractors do. Use EstimateConcrete to calculate your numbers accurately and build a complete concrete-specific bid, then use Joist (or even just PDF your estimate) to send it to the client professionally and collect payment.
      </p>

      <p className="text-slate-600 mb-4">
        But if you&apos;re on a tight budget and need to choose, the math is clear: for a dedicated concrete contractor, EstimateConcrete delivers more concrete-specific value at a fraction of the long-term cost.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Bottom Line</h2>

      <p className="text-slate-600 mb-4">
        Joist is a solid general contractor app. If you do a bit of everything — painting, carpentry, some concrete — it may serve you well. But if concrete is your primary trade, you deserve tools built specifically for your work. Tools that know what 4000 PSI means, that calculate cubic yards from dimensions automatically, that include the exact line items you need for a driveway or foundation estimate.
      </p>

      <p className="text-slate-600 mb-6">
        EstimateConcrete was built by and for concrete contractors. The difference shows up in every template, every pro tip, and every calculation. And at $79 vs $700+ per year, the financial case is as strong as the technical one.
      </p>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to estimate like a pro concrete contractor?</h2>
        <p className="text-slate-300 mb-6">
          Get 8 concrete-specific templates, bid calculator, contract, SOP, pricing matrix, equipment guide, and marketing plan — one-time purchase.
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
                name: "Is EstimateConcrete better than Joist for concrete contractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For dedicated concrete contractors, EstimateConcrete offers deeper, concrete-specific tools at a fraction of the cost. Joist is better for general contractors who need multi-trade estimating and built-in payment processing.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Joist cost compared to EstimateConcrete?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Joist&apos;s paid plans cost $29-$59/month ($348-$708/year). EstimateConcrete is a one-time purchase starting at $29, with the Complete Toolkit at $79 total.",
                },
              },
              {
                "@type": "Question",
                name: "Does Joist have concrete-specific calculators?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Joist is a general contractor estimating and invoicing app with no concrete-specific calculations. EstimateConcrete includes cubic yard calculators, waste factors, rebar calculators, and concrete-specific templates.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
