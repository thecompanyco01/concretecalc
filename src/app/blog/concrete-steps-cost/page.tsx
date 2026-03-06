import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Steps Cost (2026 Guide) | ConcreteCalc",
  description: "Concrete steps cost $300-$500 per step for a standard 3-4 foot wide staircase. A typical 4-step front entry runs $1,200-$2,000. Wider steps (6-8 feet) for ",
  keywords: "concrete steps cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Steps Cost</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Do Concrete Steps Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">Concrete steps cost $300-$500 per step for a standard 3-4 foot wide staircase. A typical 4-step front entry runs $1,200-$2,000. Wider steps (6-8 feet) for front porches cost $500-$800 per step. Prices include forming, pouring, and finishing.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost Per Step</h3>
        <p>Standard width (3-4 feet): $300-500/step. Wide entry (5-6 feet): $400-650/step. Full-width porch (8+ feet): $500-800/step. Landing/platform: $15-25/sqft additional. Handrail: $50-200/linear foot (aluminum, iron, or cable). These prices include forming, concrete, finishing, and cleanup.</p>

        <h3>Pre-Cast vs. Poured</h3>
        <p>Pre-cast steps: $200-500 per unit (delivered, set in place). Quick installation (same day), limited sizes, can look generic. Poured-in-place: $300-500/step, custom sizes, built to fit, stronger bond to foundation, unlimited design options. For 3+ steps, poured-in-place is usually preferred.</p>

        <h3>Replacing Old Steps</h3>
        <p>Removing old concrete steps: $500-$1,500 depending on size. Demo is expensive because steps are heavily reinforced. If the old steps are structurally sound but ugly, resurfacing with concrete overlay ($5-10/sqft) is much cheaper than full replacement.</p>

        <h3>Design Options</h3>
        <p>Broom finish (standard): included in base price. Bull-nose edge: add $5-10/linear foot. Stamped treads: add $5-10/sqft. Colored concrete: add $1-3/sqft. Exposed aggregate: add $3-5/sqft. Non-slip strips: $5-10 per strip. LED riser lights: $50-150 per riser.</p>

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
