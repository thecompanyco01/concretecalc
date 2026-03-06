import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Contractor Equipment List & Costs (Startup Guide) | ConcreteCalc",
  description: "Starting a concrete business requires $10,000-$50,000 in equipment depending on whether you buy new or used. Here's every piece of equipment you need, what",
  keywords: "concrete equipment list, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Contractor Equipment List & Costs</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Complete Equipment List for Starting a Concrete Business</h1>
        <p className="lead text-lg text-slate-600">Starting a concrete business requires $10,000-$50,000 in equipment depending on whether you buy new or used. Here's every piece of equipment you need, what it costs, and what to buy first.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Essential Equipment (Day 1)</h3>
        <p>Concrete mixer (or use ready-mix delivery): $300-$3,000. Bull float with handle: $80-$200. Magnesium hand float: $25-$50. Steel trowel: $20-$40. Edger: $15-$30. Groover: $15-$30. Broom (for finish): $15-$25. Wheelbarrow (heavy duty): $80-$200. Come-along/rake: $30-$60. Total essentials: $600-$3,600.</p>

        <h3>Forming Equipment</h3>
        <p>2x4 and 2x6 lumber (reusable): $200-$500 initial stock. Metal stakes: $2-3 each (buy 50+). String line and levels: $50-$100. Form oil/release: $20-$40/gallon. Circular saw: $100-$300. Drill and screws: $100-$200. Total forming: $500-$1,200.</p>

        <h3>Power Tools</h3>
        <p>Concrete vibrator: $200-$600 (critical for walls and footings). Power screed: $200-$1,500 (saves hours on large pours). Concrete saw (14"): $300-$1,000. Power washer: $200-$500. Generator: $500-$2,000. Total power tools: $1,400-$5,600.</p>

        <h3>Vehicle and Transport</h3>
        <p>Work truck (3/4 ton or 1 ton): $15,000-$45,000 (used). Utility trailer: $2,000-$5,000. Fuel costs: $500-$1,500/month. Tool boxes and racks: $300-$800. Total vehicle: $17,800-$52,300.</p>

        <h3>Buy vs. Rent Decision</h3>
        <p>Rent if: you use it less than 10 days/month, you're testing a new service, or it's specialized equipment (pump truck, large excavator). Buy if: you use it 15+ days/month, it's core to your business, or rental costs exceed purchase price in 6-12 months. Most startups should rent everything except hand tools for the first 3-6 months.</p>

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
