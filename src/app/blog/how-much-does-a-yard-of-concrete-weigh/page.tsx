import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a Yard of Concrete Weigh? | ConcreteCalc",
  description: "A cubic yard of concrete weighs approximately 3,900-4,050 pounds (about 2 tons). Wet concrete weighs slightly more than cured concrete due to water content",
  keywords: "how much does a yard of concrete weigh, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How Much Does a Yard of Concrete Weigh?</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Yard of Concrete Weigh?</h1>
        <p className="lead text-lg text-slate-600">A cubic yard of concrete weighs approximately 3,900-4,050 pounds (about 2 tons). Wet concrete weighs slightly more than cured concrete due to water content. Lightweight concrete weighs 2,400-3,000 lbs/yard. Here's why this matters for your project.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Weight by Concrete Type</h3>
        <p>Standard concrete: 3,900-4,050 lbs/yard (150 lbs/cubic foot). Lightweight concrete: 2,400-3,000 lbs/yard (90-115 lbs/cubic foot). Heavyweight concrete (radiation shielding): 5,000-6,000 lbs/yard. Flowable fill: 2,400-3,200 lbs/yard. Standard concrete is what 95% of projects use.</p>

        <h3>Why Weight Matters</h3>
        <p>Truck capacity: standard mixer trucks carry 8-10 yards = 32,000-40,000 lbs of concrete. Your subgrade must support the weight — a 4" slab on a 10×10 area weighs about 2,000 lbs. Formwork must handle the wet concrete pressure. Wheelbarrows hold 5-6 cubic feet = 750-900 lbs loaded with concrete.</p>

        <h3>Weight Calculations for Common Projects</h3>
        <p>10×10 slab (4"): 2,000 lbs. 20×20 slab (4"): 8,000 lbs. Driveway (20×40, 5"): 24,000 lbs. Sidewalk (4×50, 4"): 4,000 lbs. Foundation wall (100 linear ft, 8" wide, 4' tall): 48,000 lbs. These weights are important for structural engineering and soil bearing calculations.</p>

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
