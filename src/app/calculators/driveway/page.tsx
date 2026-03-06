import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Driveway Cost Calculator — Free Estimate Tool | ConcreteCalc",
  description:
    "Calculate the total cost of a concrete driveway including material, labor, finishing, and old driveway removal. Free tool for contractors and homeowners.",
  keywords: "concrete driveway cost, driveway cost calculator, concrete driveway price, how much does a concrete driveway cost",
};

export default function DrivewayCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link> /{" "}
        <span className="text-gray-900 font-medium">Driveway Cost Calculator</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Driveway Cost Calculator
      </h1>
      <p className="text-gray-600 mb-8">
        Estimate the total cost of a concrete driveway including material, labor, finishing options, and removal of existing driveway.
      </p>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-4">🚧</p>
        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
        <p className="text-gray-600 mb-4">
          The driveway cost calculator is being built. In the meantime, use our slab calculator for material estimates.
        </p>
        <Link href="/calculators/slab" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition inline-block">
          Use Slab Calculator →
        </Link>
      </div>

      <article className="prose prose-gray mt-12 max-w-none">
        <h2>How Much Does a Concrete Driveway Cost?</h2>
        <p>
          A concrete driveway typically costs between <strong>$8-$18 per square foot</strong> installed, depending on your region, the thickness of the slab, finishing options, and site conditions.
        </p>

        <h3>Cost Breakdown by Component</h3>
        <table>
          <thead>
            <tr><th>Component</th><th>Cost Range</th></tr>
          </thead>
          <tbody>
            <tr><td>Concrete material</td><td>$125-175/yard</td></tr>
            <tr><td>Labor (pour & finish)</td><td>$4-8/sq ft</td></tr>
            <tr><td>Grading & prep</td><td>$1-3/sq ft</td></tr>
            <tr><td>Old driveway removal</td><td>$2-6/sq ft</td></tr>
            <tr><td>Stamped/colored finish</td><td>+$3-10/sq ft</td></tr>
          </tbody>
        </table>

        <h3>Average Driveway Sizes & Costs</h3>
        <table>
          <thead>
            <tr><th>Driveway Size</th><th>Sq Ft</th><th>Estimated Cost</th></tr>
          </thead>
          <tbody>
            <tr><td>Single car (10×20)</td><td>200</td><td>$1,600-$3,600</td></tr>
            <tr><td>Double car (16×20)</td><td>320</td><td>$2,560-$5,760</td></tr>
            <tr><td>Standard (12×40)</td><td>480</td><td>$3,840-$8,640</td></tr>
            <tr><td>Large (20×40)</td><td>800</td><td>$6,400-$14,400</td></tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
