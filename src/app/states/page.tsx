import { Metadata } from "next";
import Link from "next/link";
import { STATES } from "./data";

export const metadata: Metadata = {
  title: "Concrete Contractor Guide by State — Licensing, Costs & Requirements | ConcreteCalc",
  description:
    "State-by-state guide to concrete contracting. Find licensing requirements, concrete costs per yard, insurance requirements, and how to start a concrete business in your state.",
  keywords:
    "concrete contractor license by state, concrete cost by state, start concrete business, contractor requirements",
};

export default function StatesIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        {" / "}
        <span className="text-gray-900 font-medium">State Guides</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Contractor Guide by State
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">
        Find licensing requirements, concrete costs, and business startup guides for
        every state. Each guide includes current pricing data, insurance requirements,
        and step-by-step instructions for starting your concrete business.
      </p>

      {/* State Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {STATES.sort((a, b) => a.name.localeCompare(b.name)).map((state) => (
          <Link
            key={state.slug}
            href={`/states/${state.slug}`}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-lg transition group"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold group-hover:text-orange-600 transition">
                {state.name}
              </h2>
              <span className="text-sm bg-gray-100 px-2 py-0.5 rounded font-mono">
                {state.abbreviation}
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div>
                <span className="text-gray-400">Concrete:</span>{" "}
                <span className="font-semibold">${state.avgCostPerYard}/yard</span>
              </div>
              <div>
                <span className="text-gray-400">License:</span>{" "}
                <span className={state.licenseRequired ? "text-orange-600" : "text-green-600"}>
                  {state.licenseRequired ? "Required" : "Not required"}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Growth:</span>{" "}
                <span className="font-semibold">{state.constructionGrowth}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon - remaining states */}
      <div className="bg-gray-100 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-2">More States Coming Soon</h2>
        <p className="text-gray-600">
          We currently have detailed guides for {STATES.length} states.
          All 50 state guides are being added — check back soon or bookmark this page.
        </p>
      </div>

      {/* CTA */}
      <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Start Your Concrete Business?
        </h2>
        <p className="text-gray-600 mb-6">
          Our Business Starter Kit includes everything you need — business plan template,
          contracts, estimate sheets, marketing playbook, and pricing guides.
        </p>
        <Link
          href="/templates"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition inline-block"
        >
          Get the Business Starter Kit — $297
        </Link>
      </section>
    </div>
  );
}
