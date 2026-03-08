import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Garage Floor Cost Guide (2026) | EstimateConcrete",
  description: "A new concrete garage floor costs $4-$8 per square foot for plain concrete, or $8-$15 per square foot with epoxy coating. A standard 2-car garage (400-600 ",
  keywords: "concrete garage floor cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Garage Floor Cost Guide</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Concrete Garage Floor Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">A new concrete garage floor costs $4-$8 per square foot for plain concrete, or $8-$15 per square foot with epoxy coating. A standard 2-car garage (400-600 sqft) runs $2,000-$5,000 for plain concrete or $4,000-$9,000 with epoxy.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Garage Size</h3>
        <p>1-car garage (200-250 sqft): $1,000-$2,000 plain, $2,000-$3,750 with epoxy. 2-car garage (400-600 sqft): $2,000-$5,000 plain, $4,000-$9,000 with epoxy. 3-car garage (600-900 sqft): $3,000-$7,200 plain, $6,000-$13,500 with epoxy. These include removal of old floor if needed.</p>

        <h3>Thickness Requirements</h3>
        <p>Garage floors need minimum 4" thickness, but 5-6" is recommended for vehicle loads. If you park heavy vehicles (trucks, RVs), go 6". The extra 2" adds about $1-2/sqft but dramatically increases load capacity and crack resistance.</p>

        <h3>Old Floor Removal</h3>
        <p>Removing an existing garage floor costs $2-6/sqft. A 2-car garage (500 sqft) removal runs $1,000-$3,000. This includes breaking up the old slab, hauling debris, and regrading the subbase. If the old floor is in decent shape, an overlay ($3-6/sqft) may be cheaper.</p>

        <h3>Epoxy Coating Options</h3>
        <p>Basic epoxy: $3-5/sqft (solid color, 1-day cure). Decorative flake epoxy: $5-8/sqft (color flakes, more durable). Polyurea/polyaspartic: $7-12/sqft (same-day return to service, UV stable, premium). All epoxy systems require proper surface prep — grinding or shot blasting.</p>

        <h3>DIY vs. Professional</h3>
        <p>DIY garage floor kits: $200-500 for materials (epoxy kit from big box store). Results vary widely — surface prep is 90% of the job. Professional: $2,000-$6,000 for a 2-car garage with proper prep, primer, epoxy, and topcoat. Professional jobs last 10-20 years vs 2-5 for DIY.</p>

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
