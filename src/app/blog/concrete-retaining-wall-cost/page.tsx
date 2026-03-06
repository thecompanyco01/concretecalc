import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Retaining Wall Cost Guide (2026) | ConcreteCalc",
  description: "Concrete retaining walls cost between $20-$45 per square foot installed, depending on height, reinforcement, and site conditions. A typical 4-foot tall, 50",
  keywords: "concrete retaining wall cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Retaining Wall Cost Guide</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Concrete Retaining Wall Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">Concrete retaining walls cost between $20-$45 per square foot installed, depending on height, reinforcement, and site conditions. A typical 4-foot tall, 50-foot long retaining wall runs $4,000-$9,000.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Wall Height</h3>
        <p>Wall height is the biggest cost driver. A 3-foot wall costs $20-30/sqft while a 6-foot wall jumps to $35-50/sqft because of increased concrete thickness, deeper footings, and more rebar. Walls over 4 feet typically require engineering ($500-$2,000) and permits.</p>

        <h3>Material Breakdown</h3>
        <p>Concrete: $130-175/yard (walls use more yards per sqft than slabs). Rebar: #4 bars at 12" OC both ways ($1.25/ft). Formwork: $2-5/sqft (reusable forms lower this). Drainage: $3-8/linear foot for weep holes and gravel backfill. Waterproofing membrane: $1-3/sqft.</p>

        <h3>Labor Costs</h3>
        <p>Retaining wall labor runs $10-25/sqft — higher than slabs because of formwork complexity, rebar tying, and multi-day pours. A 4-foot wall typically requires 2-3 days with a 3-person crew. Foundation excavation adds $5-10/linear foot.</p>

        <h3>Retaining Wall vs. Block Wall</h3>
        <p>Poured concrete walls cost 20-40% more than block walls upfront but last significantly longer (100+ years vs 50-75 years). Concrete walls are stronger, better for heights over 4 feet, and require less maintenance. Block walls are cheaper for short walls under 3 feet.</p>

        <h3>Permits and Engineering</h3>
        <p>Most jurisdictions require permits for retaining walls over 4 feet tall. Engineering costs $500-$2,000 depending on wall complexity and soil conditions. Soil testing ($500-$1,500) may be required if the soil has poor bearing capacity or high water table.</p>

        <h3>Cost-Saving Tips</h3>
        <p>1) Build during off-season (November-March) for 10-20% discounts. 2) Combine with other concrete work to share mobilization costs. 3) Use gravity walls (wider base, less rebar) for heights under 3 feet. 4) Get 3+ bids — retaining wall pricing varies significantly between contractors. 5) Do your own excavation if you have equipment.</p>

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
