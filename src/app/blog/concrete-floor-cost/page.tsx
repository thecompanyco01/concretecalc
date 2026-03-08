import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Floor Cost (2026 Guide) | EstimateConcrete",
  description: "Interior concrete floors cost $2-$30 per square foot depending on the finish. Basic gray concrete runs $2-6/sqft, polished concrete $3-12/sqft, stained $4-",
  keywords: "concrete floor cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Floor Cost</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Concrete Floor Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">Interior concrete floors cost $2-$30 per square foot depending on the finish. Basic gray concrete runs $2-6/sqft, polished concrete $3-12/sqft, stained $4-10/sqft, and decorative overlays $7-15/sqft. A 1,000 sqft concrete floor costs $2,000-$30,000.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Finish</h3>
        <p>Basic gray (new pour or existing): $2-6/sqft. Polished concrete: $3-12/sqft (grinding levels determine price). Acid stained: $4-10/sqft (unique, organic patterns). Water-based stain: $3-8/sqft (more color control). Epoxy coating: $3-12/sqft (garage, basement, commercial). Microtopping overlay: $7-15/sqft (decorative, hides imperfections).</p>

        <h3>Polished Concrete Levels</h3>
        <p>Level 1 (flat floor, no shine): $3-5/sqft. Level 2 (low sheen): $4-7/sqft. Level 3 (medium gloss): $6-9/sqft. Level 4 (high gloss mirror): $8-12/sqft. Each level requires additional grinding passes. Commercial spaces typically use Level 2-3. Residential prefers Level 3-4.</p>

        <h3>New Pour vs. Existing Slab</h3>
        <p>New concrete floor pour: $5-10/sqft (includes subbase, vapor barrier, concrete, basic finish). Refinish existing slab: $3-12/sqft (polish, stain, or coat — depends on slab condition). If existing slab has major cracks or leveling issues, an overlay ($7-15/sqft) or new pour may be needed.</p>

        <h3>Concrete vs. Other Flooring</h3>
        <p>Concrete: $3-12/sqft, extremely durable, low maintenance. Hardwood: $8-15/sqft, warm look, scratches easily. Tile: $10-20/sqft, waterproof, grout maintenance. Vinyl: $3-8/sqft, budget option, less durable. Concrete wins on longevity (50+ years) and maintenance cost.</p>

        <h3>Radiant Heating</h3>
        <p>In-floor radiant heating adds $6-16/sqft to concrete floor costs. Hydronic (hot water tubes): $6-12/sqft. Electric mat: $8-16/sqft. Concrete's thermal mass makes it ideal for radiant heat — stores and slowly releases warmth. Energy savings of 20-40% vs forced air. Best in new construction.</p>

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
