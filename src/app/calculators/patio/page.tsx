import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Patio Cost Calculator — Free Estimate Tool | ConcreteCalc",
  description:
    "Calculate concrete patio costs including material, labor, and finishing options (stamped, colored, broom-finished). Free tool for contractors.",
  keywords: "concrete patio cost, patio cost calculator, stamped concrete patio cost, concrete patio price per square foot",
};

export default function PatioCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link> /{" "}
        <span className="text-gray-900 font-medium">Patio Cost Calculator</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Patio Cost Calculator
      </h1>
      <p className="text-gray-600 mb-8">
        Estimate the total cost of a concrete patio with options for stamped, colored, or broom-finished surfaces.
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-4">🚧</p>
        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          The patio cost calculator is being built. Use our slab calculator for material estimates in the meantime.
        </p>
        <Link href="/calculators/slab" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition inline-block">
          Use Slab Calculator →
        </Link>
      </div>

      <article className="prose prose-gray mt-12 max-w-none">
        <h2>How Much Does a Concrete Patio Cost?</h2>
        <p>
          A basic concrete patio costs <strong>$6-$12 per square foot</strong> for a standard broom-finished surface.
          Stamped concrete patios range from <strong>$12-$25 per square foot</strong> depending on the pattern and color.
        </p>

        <h3>Cost by Finish Type</h3>
        <table>
          <thead>
            <tr><th>Finish Type</th><th>Cost per Sq Ft</th></tr>
          </thead>
          <tbody>
            <tr><td>Broom finish (basic)</td><td>$6-$10</td></tr>
            <tr><td>Exposed aggregate</td><td>$8-$14</td></tr>
            <tr><td>Colored concrete</td><td>$8-$16</td></tr>
            <tr><td>Stamped concrete</td><td>$12-$25</td></tr>
            <tr><td>Polished concrete</td><td>$10-$20</td></tr>
          </tbody>
        </table>

        <h3>Popular Patio Sizes & Costs</h3>
        <table>
          <thead>
            <tr><th>Patio Size</th><th>Sq Ft</th><th>Basic</th><th>Stamped</th></tr>
          </thead>
          <tbody>
            <tr><td>Small (10×10)</td><td>100</td><td>$600-$1,000</td><td>$1,200-$2,500</td></tr>
            <tr><td>Medium (12×16)</td><td>192</td><td>$1,150-$1,920</td><td>$2,300-$4,800</td></tr>
            <tr><td>Large (16×20)</td><td>320</td><td>$1,920-$3,200</td><td>$3,840-$8,000</td></tr>
            <tr><td>XL (20×24)</td><td>480</td><td>$2,880-$4,800</td><td>$5,760-$12,000</td></tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
