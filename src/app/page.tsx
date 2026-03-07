import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConcreteCalc — Free Concrete Calculators for Contractors",
  description:
    "Professional concrete calculators built for contractors. Estimate slabs, driveways, patios, footings, yards of concrete & more. Free tools + premium estimate templates.",
};

const calculators = [
  {
    title: "Slab Calculator",
    description: "Calculate cubic yards, bags, and cost for any slab. Includes waste factor and rebar.",
    href: "/calculators/slab",
    volume: "550K searches/mo",
  },
  {
    title: "Driveway Calculator",
    description: "Estimate driveway costs including material, labor, finishing, and old driveway removal.",
    href: "/calculators/driveway",
    volume: "8K searches/mo",
  },
  {
    title: "Patio Calculator",
    description: "Price concrete patios with stamped, colored, and broom-finish options.",
    href: "/calculators/patio",
    volume: "5K searches/mo",
  },
  {
    title: "Footing Calculator",
    description: "Calculate concrete for continuous and pier footings. Includes depth configurations.",
    href: "/calculators/footing",
    volume: "2.9K searches/mo",
  },
  {
    title: "Stamped Concrete",
    description: "Estimate stamped concrete costs with pattern, color, and sealer pricing.",
    href: "/calculators/stamped",
    volume: "480 searches/mo",
  },
  {
    title: "Sidewalk Calculator",
    description: "Calculate concrete for sidewalks. Material quantities and cost per linear foot.",
    href: "/calculators/sidewalk",
    volume: "2.9K searches/mo",
  },
  {
    title: "Block Calculator",
    description: "Calculate blocks, mortar bags, and cost for block walls of any size.",
    href: "/calculators/block",
    volume: "9.9K searches/mo",
  },
  {
    title: "Rebar Calculator",
    description: "Calculate rebar quantity, weight, and cost. Supports #3 through #8 bar sizes.",
    href: "/calculators/rebar",
    volume: "6.6K searches/mo",
  },
];

const states = [
  { name: "California", slug: "california", price: "$175" },
  { name: "Texas", slug: "texas", price: "$140" },
  { name: "Florida", slug: "florida", price: "$150" },
  { name: "New York", slug: "new-york", price: "$170" },
  { name: "Ohio", slug: "ohio", price: "$140" },
  { name: "Georgia", slug: "georgia", price: "$140" },
  { name: "Arizona", slug: "arizona", price: "$145" },
  { name: "Michigan", slug: "michigan", price: "$150" },
  { name: "N. Carolina", slug: "north-carolina", price: "$140" },
  { name: "Illinois", slug: "illinois", price: "$155" },
  { name: "Colorado", slug: "colorado", price: "$155" },
  { name: "Washington", slug: "washington", price: "$165" },
];

const blogPosts = [
  {
    title: "How to Bid Concrete Jobs: Complete Guide",
    href: "/blog/how-to-bid-concrete-jobs",
    desc: "Step-by-step bidding with formulas, pricing tables, and real examples.",
  },
  {
    title: "Concrete Cost Per Yard in 2026",
    href: "/blog/concrete-cost-per-yard",
    desc: "Current pricing by region, ready-mix vs bags, and supplier negotiation.",
  },
  {
    title: "How to Start a Concrete Business",
    href: "/blog/how-to-start-concrete-business",
    desc: "Complete startup guide — licensing, equipment, insurance, first customers.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-3">
            Built for contractors, not homeowners
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Concrete Calculators
            <br />
            <span className="text-slate-400">That Actually Help You Bid</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Calculate exact yards, material costs, labor estimates, and profit margins
            for any concrete job. The tools contractors use on real job sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/calculators/slab"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-3 rounded-lg font-bold text-base transition"
            >
              Open Slab Calculator
            </Link>
            <Link
              href="/templates"
              className="border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white px-7 py-3 rounded-lg font-semibold text-base transition"
            >
              View Pro Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
          <span>✓ 9 specialized calculators</span>
          <span>✓ 50-state licensing guides</span>
          <span>✓ Built for working contractors</span>
          <span>✓ 100% free tools</span>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Free Concrete Calculators
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Every calculator includes material quantities, cost estimates, waste factors,
            and labor — the numbers you need to build accurate bids.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-400 hover:shadow-md transition group"
            >
              <h3 className="font-bold text-base mb-1.5 group-hover:text-blue-700 transition">
                {calc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Why Contractors Use ConcreteCalc
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">🎯</span>
              </div>
              <h3 className="font-bold mb-1.5">Built for Pros</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Not another &quot;how many bags?&quot; calculator. We calculate cubic yards,
                cost per square foot, waste factors, and labor — numbers you can put on a bid sheet.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">⚡</span>
              </div>
              <h3 className="font-bold mb-1.5">Fast &amp; Accurate</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Get estimates in seconds. Input dimensions, select concrete type,
                get material quantities with cost breakdowns. Works on your phone at the job site.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-lg">💰</span>
              </div>
              <h3 className="font-bold mb-1.5">100% Free</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                All calculators are free, forever. We make money on premium templates
                and business tools — the calculators are our gift to the trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Guides */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Concrete Costs &amp; Licensing by State
            </h2>
            <p className="text-slate-500">
              Licensing requirements, pricing data, and business guides for your state.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="bg-white border border-slate-200 rounded-lg p-3 text-center hover:border-slate-400 hover:shadow-sm transition text-sm"
              >
                <div className="font-semibold text-slate-800">{state.name}</div>
                <div className="text-slate-400 text-xs mt-0.5">{state.price}/yd</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/states" className="text-blue-700 hover:text-blue-800 font-medium text-sm">
              View all state guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Pro Templates CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Win More Concrete Jobs?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Professional estimate templates, bid sheets, and business tools built specifically for concrete contractors. Stop guessing — start bidding with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition text-lg"
            >
              View Pro Templates →
            </Link>
            <a
              href="https://buy.stripe.com/6oUdRadrNdg91rJ3ntaMU00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Get Estimate Pack — $49
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-4">🔒 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Concrete Business Resources
            </h2>
            <p className="text-slate-500">
              Guides, pricing data, and business advice for concrete contractors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="border border-slate-200 rounded-lg p-5 hover:border-slate-400 hover:shadow-md transition group"
              >
                <h3 className="font-bold text-base mb-1.5 group-hover:text-blue-700 transition">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{post.desc}</p>
                <span className="text-blue-700 text-sm font-medium mt-2 inline-block">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Bid Like a Pro?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Our Pro Templates pack includes concrete estimate sheets, bid calculators,
            invoice templates, and pricing guides — everything you need to run a
            professional concrete business.
          </p>
          <Link
            href="/templates"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-3 rounded-lg font-bold text-base transition inline-block"
          >
            View Pro Templates
          </Link>
        </div>
      </section>
    </div>
  );
}
