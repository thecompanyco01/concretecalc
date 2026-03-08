import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Markup Should Concrete Contractors Use? | EstimateConcrete",
  description: "Most profitable concrete contractors use a 50-100% markup on materials and 30-50% markup on labor. This translates to a 20-35% net profit margin. Here's ho",
  keywords: "concrete markup percentage, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">What Markup Should Concrete Contractors Use?</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Contractor Markup: What Percentage Should You Use?</h1>
        <p className="lead text-lg text-slate-600">Most profitable concrete contractors use a 50-100% markup on materials and 30-50% markup on labor. This translates to a 20-35% net profit margin. Here's how to calculate the right markup for your business.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Markup vs. Profit Margin</h3>
        <p>Markup and margin are NOT the same. If you markup materials 50%, your margin is 33%. Markup formula: Sell Price = Cost × (1 + Markup%). Margin formula: Margin = (Sell Price - Cost) / Sell Price. Example: $100 cost × 1.50 markup = $150 sell price = 33% margin.</p>

        <h3>Industry Standard Markups</h3>
        <p>Materials: 50-100% markup (33-50% margin). Labor: 30-50% markup (23-33% margin). Equipment rental: 20-30% markup. Subcontractors: 10-20% markup. Overall job: aim for 25-35% gross margin after all direct costs.</p>

        <h3>How to Calculate Your Markup</h3>
        <p>1) Add up direct costs (materials + labor + equipment). 2) Add overhead allocation (insurance, truck, admin — typically 15-25%). 3) Add desired profit (10-20% of total). 4) Divide selling price by direct costs to get your markup multiplier. Most contractors land at 1.6-2.0x multiplier on direct costs.</p>

        <h3>When to Charge More</h3>
        <p>Complex decorative work: higher markup (skilled labor premium). Rush jobs: 25-50% premium. Difficult access: 15-30% premium. Small jobs (under $2,000): higher markup to cover fixed mobilization costs. Repeat customers: standard markup (volume makes up for it).</p>

        <div className="bg-slate-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-xl font-bold mb-3">Get Professional Estimate Templates</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Stop guessing on bids. Our Pro Estimate Template Pack auto-calculates material,
            labor, and profit margins for any concrete job.
          </p>
          <Link
            href="/templates"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-bold transition inline-block"
          >
            Get Pro Templates — $49
          </Link>
        </div>
      </article>
    </div>
  );
}
