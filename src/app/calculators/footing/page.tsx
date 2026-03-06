import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Footing Calculator — Free Tool for Contractors | ConcreteCalc",
  description:
    "Calculate concrete needed for footings — continuous, pier, and stepped. Includes depth, width, and rebar configurations. Free calculator for contractors.",
  keywords: "concrete footing calculator, footing concrete calculator, how much concrete for footings, pier footing calculator",
};

export default function FootingCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link> /{" "}
        <span className="text-gray-900 font-medium">Footing Calculator</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Footing Calculator
      </h1>
      <p className="text-gray-600 mb-8">
        Calculate concrete needed for continuous footings, pier footings, and stepped footings. Includes rebar and cost estimates.
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-4">🚧</p>
        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          The footing calculator is being built. Use our slab calculator for basic volume estimates.
        </p>
        <Link href="/calculators/slab" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition inline-block">
          Use Slab Calculator →
        </Link>
      </div>

      <article className="prose prose-gray mt-12 max-w-none">
        <h2>How to Calculate Concrete for Footings</h2>
        <p>
          Footings are the foundation of any concrete structure. Getting the volume right is critical — you can&apos;t add concrete to a footing after it&apos;s poured.
        </p>

        <h3>Continuous Footing Formula</h3>
        <p><strong>Cubic Yards = (Width × Depth × Length) ÷ 27</strong></p>
        <p>All measurements in feet. A typical residential footing is 16-24 inches wide and 8-12 inches deep.</p>

        <h3>Pier Footing Formula (Round)</h3>
        <p><strong>Cubic Yards = π × (Diameter/2)² × Depth × Number of Piers ÷ 27</strong></p>

        <h3>Standard Footing Sizes</h3>
        <table>
          <thead>
            <tr><th>Application</th><th>Width</th><th>Depth</th></tr>
          </thead>
          <tbody>
            <tr><td>Residential wall</td><td>16-20&quot;</td><td>8-12&quot;</td></tr>
            <tr><td>Load-bearing wall</td><td>20-24&quot;</td><td>10-12&quot;</td></tr>
            <tr><td>Column/pier</td><td>24-36&quot; dia</td><td>12-24&quot;</td></tr>
            <tr><td>Frost wall (cold climate)</td><td>16-20&quot;</td><td>36-48&quot;</td></tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
