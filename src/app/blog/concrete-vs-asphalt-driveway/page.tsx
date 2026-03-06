import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete vs. Asphalt Driveway: Cost, Durability & ROI (2026) | ConcreteCalc",
  description: "Concrete driveways cost $6-$12/sqft and last 30-50 years. Asphalt driveways cost $3-$6/sqft and last 15-20 years. Over 30 years, concrete is actually cheap",
  keywords: "concrete vs asphalt driveway, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete vs. Asphalt Driveway: Cost, Durability & ROI</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete vs. Asphalt Driveway: Complete 2026 Comparison</h1>
        <p className="lead text-lg text-slate-600">Concrete driveways cost $6-$12/sqft and last 30-50 years. Asphalt driveways cost $3-$6/sqft and last 15-20 years. Over 30 years, concrete is actually cheaper due to lower maintenance. Here's the full comparison.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Upfront Cost</h3>
        <p>Concrete: $6-12/sqft ($3,000-$7,000 for a 2-car driveway). Asphalt: $3-6/sqft ($1,500-$3,500 for a 2-car driveway). Asphalt is 40-50% cheaper upfront. However, asphalt needs seal coating every 2-3 years and resurfacing every 10-15 years.</p>

        <h3>30-Year Total Cost</h3>
        <p>Concrete: $6,000 install + $500 maintenance = $6,500 total. Asphalt: $3,500 install + $4,000 seal coating + $3,500 resurface = $11,000 total. Concrete saves $4,500 over 30 years. This doesn't include the 2-3 days of inconvenience each time asphalt is resealed.</p>

        <h3>Durability</h3>
        <p>Concrete: 30-50 year lifespan, handles heavy loads, resistant to oil and gas spills. Asphalt: 15-20 year lifespan, softens in extreme heat, damaged by oil/gas spills, requires regular maintenance. Concrete wins on durability in every category.</p>

        <h3>Climate Considerations</h3>
        <p>Cold climates: Asphalt flexes with freeze-thaw (less cracking). Concrete can crack but properly poured concrete with control joints handles freeze-thaw well. Hot climates: Concrete stays hard and cool. Asphalt softens in 90°+ heat and can develop ruts. Winner depends on your region.</p>

        <h3>ROI and Home Value</h3>
        <p>Concrete driveways add 5-10% to curb appeal and $5,000-$10,000 to home value. Asphalt adds less to home value. For home resale, concrete is the better investment — especially stamped or decorative concrete.</p>

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
