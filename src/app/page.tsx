import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConcreteCalc — Free Concrete Calculators for Contractors",
  description:
    "Professional concrete calculators built for contractors. Estimate slabs, driveways, patios, footings, yards of concrete & more. Free tools + premium estimate templates.",
};

const calculators = [
  {
    title: "Concrete Slab Calculator",
    description:
      "Calculate cubic yards, bags of concrete, and material cost for any slab project. Includes waste factor and rebar estimates.",
    href: "/calculators/slab",
    icon: "📐",
  },
  {
    title: "Driveway Cost Calculator",
    description:
      "Estimate total cost for concrete driveways including material, labor, finishing, and removal of old driveway.",
    href: "/calculators/driveway",
    icon: "🚗",
  },
  {
    title: "Patio Cost Calculator",
    description:
      "Price out concrete patios with options for stamped, colored, or broom-finished surfaces. Includes labor estimates.",
    href: "/calculators/patio",
    icon: "🏡",
  },
  {
    title: "Footing Calculator",
    description:
      "Calculate concrete needed for footings — continuous, pier, and stepped. Includes depth and width configurations.",
    href: "/calculators/footing",
    icon: "🏗️",
  },
  {
    title: "Stamped Concrete Calculator",
    description:
      "Estimate costs for stamped concrete with pattern and color options. Compare stamped vs. plain concrete pricing.",
    href: "/calculators/stamped",
    icon: "🎨",
  },
  {
    title: "Sidewalk Calculator",
    description:
      "Calculate concrete for sidewalks and walkways. Get material quantities and cost per linear foot.",
    href: "/calculators/sidewalk",
    icon: "🚶",
  },
  {
    title: "Concrete Block Calculator",
    description:
      "Calculate blocks, mortar, and cost for block walls. Supports standard 8x8x16 and other block sizes.",
    href: "/calculators/block",
    icon: "🧱",
  },
  {
    title: "Rebar Calculator",
    description:
      "Calculate rebar quantity, weight, and cost for any slab or foundation. Supports #3 through #8 bar sizes.",
    href: "/calculators/rebar",
    icon: "⚙️",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Concrete Calculators
            <br />
            <span className="text-orange-200">Built for Contractors</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Stop guessing. Calculate exact yards, costs, and materials for any
            concrete job. Free tools designed for pros who need accurate
            estimates — fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/slab"
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              Try the Slab Calculator →
            </Link>
            <Link
              href="/templates"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition"
            >
              Get Pro Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Free Concrete Calculators
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Every calculator includes material quantities, cost estimates, and
          waste factors. Built specifically for concrete contractors — not
          homeowners.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition group"
            >
              <div className="text-3xl mb-3">{calc.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition">
                {calc.title}
              </h3>
              <p className="text-gray-600">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why ConcreteCalc */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Contractors Use ConcreteCalc
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Built for Pros</h3>
              <p className="text-gray-600 text-sm">
                Not another "how many bags?" calculator. We calculate cubic
                yards, costs per square foot, waste factors, and labor — the
                numbers you actually need to bid.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Fast & Accurate</h3>
              <p className="text-gray-600 text-sm">
                Get estimates in seconds. Input dimensions, select your
                concrete type, and get material quantities with cost breakdowns
                you can put on a bid sheet.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">
                All calculators are free, forever. We make money on premium
                templates and business tools — the calculators are our gift to
                the trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Guides */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Concrete Costs & Licensing by State
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Find licensing requirements, concrete pricing, and business startup guides specific to your state.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {[
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
            ].map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-orange-300 hover:shadow transition text-sm"
              >
                <div className="font-semibold">{state.name}</div>
                <div className="text-orange-600 text-xs">{state.price}/yd</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/states" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
              View all state guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Concrete Business Resources
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Guides, pricing data, and business advice for concrete contractors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "How to Bid Concrete Jobs: The Complete Guide",
                href: "/blog/how-to-bid-concrete-jobs",
                desc: "Step-by-step bidding guide with formulas, pricing tables, and real-world examples.",
              },
              {
                title: "Concrete Cost Per Yard in 2026",
                href: "/blog/concrete-cost-per-yard",
                desc: "Current pricing by region, ready-mix vs bags, and how to negotiate with suppliers.",
              },
              {
                title: "How to Start a Concrete Business",
                href: "/blog/how-to-start-concrete-business",
                desc: "Complete startup guide — licensing, equipment, insurance, and finding first customers.",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition group"
              >
                <h3 className="font-bold mb-2 group-hover:text-orange-600">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.desc}</p>
                <span className="text-orange-600 text-sm font-medium mt-3 inline-block">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Bid Like a Pro?
          </h2>
          <p className="text-gray-400 mb-8">
            Our Pro Templates pack includes concrete estimate sheets, bid
            calculators, invoice templates, and pricing guides — everything you
            need to run a professional concrete business.
          </p>
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-block"
          >
            View Pro Templates — $49
          </Link>
        </div>
      </section>
    </div>
  );
}
