import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Price Concrete Work (2026 Pricing Guide) | ConcreteCalc",
  description: "Pricing concrete work correctly means covering your costs, making a profit, and staying competitive. This guide covers pricing strategies, real-world rate ",
  keywords: "how to price concrete work, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How to Price Concrete Work</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How to Price Concrete Work: 2026 Contractor Pricing Guide</h1>
        <p className="lead text-lg text-slate-600">Pricing concrete work correctly means covering your costs, making a profit, and staying competitive. This guide covers pricing strategies, real-world rate ranges, and how to calculate your breakeven point so every job is profitable.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Pricing Methods</h3>
        <p>Cost-plus: Calculate all costs + markup percentage. Simple but requires accurate cost tracking. Square foot pricing: Quote $/sqft based on job type. Easy for customers to understand. Per cubic yard: Price based on concrete volume. Best for comparing bids. Market rate: Price based on what competitors charge. Risky if you don't know your costs.</p>

        <h3>Current Market Rates (2026)</h3>
        <p>Flatwork (slabs, driveways): $6-12/sqft. Stamped concrete: $12-22/sqft. Sidewalks: $6-12/sqft. Steps: $300-500/step. Retaining walls: $20-45/sqft. Footings: $5-8/linear foot. Curbing: $5-20/linear foot. These are national averages — adjust ±20% for your local market.</p>

        <h3>Calculate Your Breakeven</h3>
        <p>Add up ALL monthly costs: truck payment, insurance, fuel, tools, phone, licensing, marketing, your salary. Divide by working hours per month. That's your hourly breakeven. Example: $8,000/month costs ÷ 160 hours = $50/hour breakeven. You must charge MORE than this to make profit.</p>

        <h3>How to Raise Prices</h3>
        <p>1) Raise prices 5-10% on new quotes — existing customers won't notice. 2) Add value (warranty, timeline guarantee, cleanup included). 3) Specialize in higher-margin work (decorative, stamped). 4) Target better neighborhoods. 5) Improve your marketing (professional website, reviews, photos).</p>

        <h3>Seasonal Pricing</h3>
        <p>Spring/summer: peak demand, charge full rate or premium. Fall: steady demand, normal pricing. Winter: low demand in cold climates, offer 10-15% discount to keep crews busy. In warm climates (FL, TX, AZ), there's less seasonal variation. Always maintain minimum margin even in slow season.</p>

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
