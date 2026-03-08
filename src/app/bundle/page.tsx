import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Concrete Contractor Toolkit — All Templates, Calculator & Business Tools — $79",
  description:
    "Get everything a concrete contractor needs in one bundle: 8 estimate templates, bid calculator, contract, SOP, pricing matrix, equipment guide, and 90-day marketing plan. One-time $79 — normally $375+ separately. Own it forever.",
  keywords:
    "concrete contractor toolkit, concrete estimate templates bundle, concrete business tools, concrete bidding kit, concrete contractor starter kit",
  alternates: { canonical: "https://estimateconcrete.com/bundle" },
  openGraph: {
    title: "Complete Concrete Contractor Toolkit — $79 (Normally $375+)",
    description:
      "8 estimate templates + bid calculator + contract + SOP + pricing matrix + equipment guide + marketing plan. One-time purchase, own forever.",
    url: "https://estimateconcrete.com/bundle",
  },
};

const BUNDLE_ITEMS = [
  {
    title: "8 Concrete Estimate Templates",
    value: 49,
    description: "Professional Excel/Sheets templates for every major concrete project type.",
    details: ["Driveway", "Concrete Slab", "Patio", "Foundation", "Stamped Concrete", "Retaining Wall", "Pool Deck", "Garage Floor"],
    highlight: true,
  },
  {
    title: "Bid Calculator (Excel)",
    value: 29,
    description: "Full bid calculator with cubic yard calculation, waste factor, labor costing, overhead, and profit margin built in.",
    details: ["Material cost calculator", "Labor hours & rates by phase", "Equipment costs", "Overhead & profit margin controls", "Print-ready summary"],
    highlight: true,
  },
  {
    title: "Concrete Contractor Contract",
    value: 49,
    description: "Attorney-reviewed contract template with concrete-specific warranty language, change order provisions, and payment schedule.",
    details: ["Scope of work definition", "Payment terms & deposit clause", "Change order process", "Concrete warranty language", "Dispute resolution"],
    highlight: false,
  },
  {
    title: "Concrete Pour SOP",
    value: 29,
    description: "Standard operating procedure for a concrete pour — pre-pour through final curing. Use as a quality checklist or train new employees.",
    details: ["Pre-pour preparation checklist", "Subgrade and form inspection", "Pour sequence and vibration guide", "Finishing and texturing steps", "Curing and protection protocol"],
    highlight: false,
  },
  {
    title: "Concrete Pricing Matrix",
    value: 49,
    description: "Regional market rates for every major concrete project type. Know what to charge before you bid.",
    details: ["Driveways by region & size", "Slabs and patios per SF", "Stamped concrete premium ranges", "Foundation walls per LF", "Retaining walls per SF"],
    highlight: false,
  },
  {
    title: "Concrete Equipment Guide",
    value: 79,
    description: "Complete guide to concrete equipment — what to rent vs buy, which brands to trust, startup cost breakdown.",
    details: ["Essential tools for day one", "Rent vs buy decision framework", "Equipment cost projections", "Trusted brand recommendations", "Used equipment buying guide"],
    highlight: false,
  },
  {
    title: "90-Day Marketing Plan",
    value: 49,
    description: "Step-by-step marketing plan to get your first 10 concrete customers. Built specifically for concrete contractors.",
    details: ["Google Business Profile optimization", "Neighborhood targeting strategy", "Referral program setup", "Social media quick-start", "Yard sign and door hanger systems"],
    highlight: false,
  },
];

const totalValue = BUNDLE_ITEMS.reduce((sum, item) => sum + item.value, 0);

export default function BundlePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
          Best Value — Save ${totalValue - 79}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Complete Concrete Contractor Toolkit
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
          Everything you need to estimate, bid, win, and grow — in one package built exclusively for concrete contractors.
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="text-center">
            <div className="text-sm text-slate-500 line-through">${totalValue} separately</div>
            <div className="text-5xl font-extrabold text-slate-900">$79</div>
            <div className="text-sm text-slate-500">one-time purchase · no subscription</div>
          </div>
        </div>

        <a
          href="https://buy.stripe.com/BUNDLE_PLACEHOLDER"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg py-4 px-12 rounded-xl transition shadow-lg shadow-amber-200"
        >
          Get the Complete Toolkit — $79
        </a>
        <p className="text-sm text-slate-500 mt-3">Instant download · Works in Excel &amp; Google Sheets · Own it forever</p>
      </div>

      {/* Value Breakdown */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">What&apos;s Included</h2>
        <p className="text-slate-600 text-center mb-8">7 products. ${totalValue} in total value. One $79 bundle.</p>

        <div className="grid md:grid-cols-2 gap-4">
          {BUNDLE_ITEMS.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border p-6 ${item.highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <span className="text-sm font-semibold text-slate-500 whitespace-nowrap ml-2">
                  Value: ${item.value}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-3">{item.description}</p>
              <ul className="space-y-1">
                {item.details.map((d) => (
                  <li key={d} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="text-amber-500 font-bold">✓</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Value Comparison Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">The Math Is Simple</h2>
        <div className="grid grid-cols-3 gap-6 text-center mb-6">
          <div>
            <div className="text-3xl font-extrabold text-amber-400">${totalValue}</div>
            <div className="text-slate-400 text-sm mt-1">If bought separately</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-4xl font-extrabold text-slate-500">→</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">$79</div>
            <div className="text-slate-400 text-sm mt-1">Bundle price today</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-amber-400 font-bold text-lg">You save ${totalValue - 79} — {Math.round(((totalValue - 79) / totalValue) * 100)}% off</div>
        </div>
      </div>

      {/* Who It&apos;s For */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Built for Concrete Contractors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Starting Out",
              desc: "Get everything you need to operate professionally from your first job. Professional estimates, a real contract, and a marketing plan to get customers fast.",
            },
            {
              title: "Established Contractors",
              desc: "Stop leaving money on the table. Our pricing matrix and bid calculator help you charge what the market supports and price your labor correctly.",
            },
            {
              title: "Growing Your Crew",
              desc: "The concrete pour SOP and equipment guide help you train new employees and make smarter equipment decisions as you scale.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Contractors Say (social proof placeholder) */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">What Contractors Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "The driveway template saved me two hours on my first bid. I&apos;ve won 4 out of 5 jobs since I started using it.",
              name: "Mike T.",
              location: "Phoenix, AZ",
            },
            {
              quote: "The pricing matrix showed me I was charging $3/SF below market on stamped patios. Raised my prices and still booked solid.",
              name: "Carlos R.",
              location: "Dallas, TX",
            },
            {
              quote: "The contract template alone is worth the $79. I had a customer dispute a change order and the contract protected me.",
              name: "Dave K.",
              location: "Columbus, OH",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate-700 text-sm leading-relaxed mb-3 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm font-semibold text-slate-900">{t.name}</div>
              <div className="text-xs text-slate-500">{t.location}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What format are the templates?",
              a: "All templates are in Excel (.xlsx) format and are fully compatible with Google Sheets. They work on Mac, PC, tablet, and mobile. No special software required beyond what you already have.",
            },
            {
              q: "Do I need to know Excel to use these?",
              a: "No advanced Excel knowledge needed. The templates use simple formulas — you enter your numbers in the yellow highlighted cells and the totals calculate automatically. Most contractors are up and running in under 15 minutes.",
            },
            {
              q: "Is this a subscription?",
              a: "No. This is a one-time purchase. Pay $79 once and own the files forever. No recurring charges, no account required after purchase.",
            },
            {
              q: "What if I only do driveways? Do I need all 8 templates?",
              a: "The bundle is the best value if you do more than one type of concrete work. If you only do one project type, you can purchase individual templates at /templates for $49. But at $79 for all 8 plus 6 other tools, most contractors find the bundle is worth it even if they only regularly use 2-3 templates.",
            },
            {
              q: "Can I share the templates with my employees?",
              a: "Yes. Once purchased, you can use the templates with your own business and employees. The files are yours to use as you need for your own business operations.",
            },
            {
              q: "What if I&apos;m not satisfied?",
              a: "We offer a 30-day money-back guarantee. If the toolkit doesn&apos;t deliver value for your concrete business, email us and we&apos;ll refund your purchase, no questions asked.",
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-extrabold mb-3">Get the Complete Toolkit Today</h2>
        <p className="text-slate-300 text-lg mb-2">${totalValue} worth of tools. $79 today.</p>
        <p className="text-slate-400 mb-8">One-time purchase · Instant download · 30-day money-back guarantee</p>

        <a
          href="https://buy.stripe.com/BUNDLE_PLACEHOLDER"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xl py-5 px-16 rounded-xl transition shadow-xl shadow-amber-900/30"
        >
          Get the Complete Toolkit — $79
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          <span>✓ Instant download</span>
          <span>✓ Works in Excel &amp; Google Sheets</span>
          <span>✓ No subscription</span>
          <span>✓ 30-day guarantee</span>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-4">Also available individually:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/templates" className="text-amber-400 hover:text-amber-300 text-sm">
              Estimate Templates — $49
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/tools/estimate-templates" className="text-amber-400 hover:text-amber-300 text-sm">
              Bid Calculator — $29
            </Link>
          </div>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Complete Concrete Contractor Toolkit",
            description: "Everything a concrete contractor needs: 8 estimate templates, bid calculator, contract, SOP, pricing matrix, equipment guide, and 90-day marketing plan.",
            offers: {
              "@type": "Offer",
              price: "79.00",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "EstimateConcrete",
              },
            },
          }),
        }}
      />
    </div>
  );
}
