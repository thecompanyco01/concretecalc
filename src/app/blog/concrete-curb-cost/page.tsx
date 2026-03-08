import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Curb Cost Per Linear Foot (2026) | EstimateConcrete",
  description: "Concrete curbing costs $5-$20 per linear foot depending on the type. Standard straight curb runs $5-10/ft, extruded landscape curbing $6-15/ft, and mountab",
  keywords: "concrete curb cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Curb Cost Per Linear Foot</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Curb Cost Per Linear Foot in 2026</h1>
        <p className="lead text-lg text-slate-600">Concrete curbing costs $5-$20 per linear foot depending on the type. Standard straight curb runs $5-10/ft, extruded landscape curbing $6-15/ft, and mountable curb $8-12/ft. A 100-foot residential curb project costs $500-$2,000.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Curb Type</h3>
        <p>Straight curb (6"x18"): $5-10/linear foot. Rolled/mountable curb: $8-12/linear foot. Curb and gutter combo: $12-20/linear foot. Extruded landscape curbing: $6-15/linear foot. Decorative/stamped curbing: $10-20/linear foot. Machine-extruded curbing is faster and cheaper for long runs.</p>

        <h3>Landscape Curbing</h3>
        <p>Decorative concrete landscape curbing (extruded): $6-15/linear foot installed. Popular for flower beds, tree rings, and pathway borders. Machine-extruded in a continuous pour — no joints, no gaps. Color options: $1-3/ft premium. Stamped patterns: $2-5/ft premium. Average yard needs 100-200 linear feet.</p>

        <h3>DIY vs. Professional</h3>
        <p>DIY curbing machines rent for $200-400/day. Concrete cost: $1-2/ft. Total DIY: $3-5/ft. Professional: $6-15/ft. DIY saves money but the learning curve is steep — first 20 feet usually look rough. For straight runs, DIY is feasible. For curves and decorative patterns, hire a pro.</p>

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
