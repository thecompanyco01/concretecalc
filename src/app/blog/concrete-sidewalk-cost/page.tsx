import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Sidewalk Cost Per Foot (2026 Guide) | EstimateConcrete",
  description: "Concrete sidewalks cost $6-$12 per square foot or $24-$48 per linear foot (for standard 4-foot wide sidewalks). A 50-foot residential sidewalk runs $1,200-",
  keywords: "concrete sidewalk cost per foot, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Sidewalk Cost Per Foot</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Sidewalk Cost Per Foot in 2026</h1>
        <p className="lead text-lg text-slate-600">Concrete sidewalks cost $6-$12 per square foot or $24-$48 per linear foot (for standard 4-foot wide sidewalks). A 50-foot residential sidewalk runs $1,200-$2,400. Commercial sidewalks with ADA compliance run $10-$18 per square foot.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost Per Linear Foot</h3>
        <p>Residential sidewalk (4' wide, 4" thick): $24-$48/linear foot. Commercial sidewalk (5' wide, 5" thick): $40-$90/linear foot. These include base prep, forming, concrete, finishing, and basic cleanup. Add $2-4/linear foot for colored or stamped finishes.</p>

        <h3>Factors Affecting Cost</h3>
        <p>Width: standard residential is 3-4 feet, commercial/ADA is 5+ feet. Thickness: 4" for residential, 5-6" for commercial or areas with vehicle crossings. Subgrade: rocky or clay soil adds $2-5/sqft for excavation and base prep. Access: difficult access (backyard, hillside) adds 20-40%.</p>

        <h3>ADA Compliance</h3>
        <p>Commercial sidewalks must meet ADA standards: minimum 5' wide, maximum 2% cross-slope, maximum 5% running slope. Detectable warning surfaces at curb ramps ($200-500 each). Non-slip surface required. ADA compliance adds 15-25% to sidewalk costs.</p>

        <h3>Replacing vs. Repairing</h3>
        <p>Mudjacking/slab leveling: $5-10/sqft (fix sunken sections). Crack sealing: $1-3/linear foot. Partial replacement: $8-15/sqft (remove and replace damaged sections). Full replacement: $6-12/sqft. If more than 30% of the sidewalk is damaged, full replacement is usually more cost-effective.</p>

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
