import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Pool Deck Cost Guide (2026) | EstimateConcrete",
  description: "A concrete pool deck costs $6-$20 per square foot depending on the finish. Plain broom-finish runs $6-10/sqft, stamped concrete $12-18/sqft, and exposed ag",
  keywords: "concrete pool deck cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Pool Deck Cost Guide</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Concrete Pool Deck Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">A concrete pool deck costs $6-$20 per square foot depending on the finish. Plain broom-finish runs $6-10/sqft, stamped concrete $12-18/sqft, and exposed aggregate $10-15/sqft. A typical 500 sqft pool deck costs $3,000-$10,000 installed.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Finish Type</h3>
        <p>Broom finish: $6-10/sqft (most affordable, good grip). Stamped concrete: $12-18/sqft (mimics stone, brick, or tile). Colored concrete: $8-14/sqft (integral or surface-applied color). Exposed aggregate: $10-15/sqft (decorative stone surface). Textured overlay: $8-12/sqft (resurface existing concrete).</p>

        <h3>Pool Deck Size Guide</h3>
        <p>Small pool (12x24 oval): 300-400 sqft deck = $1,800-$8,000. Medium pool (16x32 rectangle): 500-700 sqft = $3,000-$14,000. Large pool (20x40): 800-1,200 sqft = $4,800-$24,000. L-shaped or freeform pools need more deck area.</p>

        <h3>Special Considerations</h3>
        <p>Pool decks require specific concrete mix (air-entrained for freeze-thaw resistance). Slope must be 1/4" per foot AWAY from pool to prevent drainage into pool. Control joints every 8-10 feet. Non-slip finish is critical for safety — broom finish or textured stamps are best.</p>

        <h3>Concrete vs. Pavers</h3>
        <p>Concrete: $6-18/sqft, seamless surface, less maintenance, can crack. Pavers: $12-25/sqft, individual pieces (replaceable), settles over time, more expensive. Travertine: $15-30/sqft, natural stone look, stays cool. For budget: concrete. For premium: travertine pavers.</p>

        <h3>Maintenance Costs</h3>
        <p>Seal every 2-3 years ($0.50-1.50/sqft). Power wash annually ($0.15-0.30/sqft). Crack repair as needed ($5-15/linear foot). Stamped concrete resealing is critical — UV and chlorine degrade the sealer faster than normal concrete. Budget $200-500/year for maintenance.</p>

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
