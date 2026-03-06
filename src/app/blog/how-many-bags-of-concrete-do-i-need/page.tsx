import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Bags of Concrete Do I Need? (Quick Calculator) | ConcreteCalc",
  description: "To calculate bags of concrete: multiply Length × Width × Depth (all in feet), divide by 27 to get cubic yards, then multiply by 45 for 80-lb bags or 60 for",
  keywords: "how many bags of concrete do i need, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How Many Bags of Concrete Do I Need?</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Many Bags of Concrete Do I Need?</h1>
        <p className="lead text-lg text-slate-600">To calculate bags of concrete: multiply Length × Width × Depth (all in feet), divide by 27 to get cubic yards, then multiply by 45 for 80-lb bags or 60 for 60-lb bags. A 10×10 slab at 4 inches needs about 8 bags of 80-lb concrete. Use our calculator below for exact numbers.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Quick Reference Chart</h3>
        <p>4×4 slab (4" thick): 2 bags (80lb). 6×6 slab: 4 bags. 8×8 slab: 6 bags. 10×10 slab: 8 bags. 12×12 slab: 11 bags. 16×16 slab: 20 bags. 20×20 slab: 31 bags. For slabs larger than 10×10, consider ready-mix delivery instead of bags — it's cheaper and faster.</p>

        <h3>80-lb vs. 60-lb Bags</h3>
        <p>80-lb bags: cover 0.6 cubic feet each. Need 45 bags per cubic yard. Cost: $5-7 per bag. 60-lb bags: cover 0.45 cubic feet each. Need 60 bags per cubic yard. Cost: $4-6 per bag. 80-lb bags are more cost-effective per cubic foot but heavier to handle. For large projects (5+ yards), ready-mix is always cheaper.</p>

        <h3>When to Use Bags vs. Ready-Mix</h3>
        <p>Use bags: projects under 0.5 cubic yards (about 20 bags), remote locations where a truck can't access, small repairs and post holes. Use ready-mix: anything over 1 cubic yard, when you need a consistent mix, when time is critical (bags are slow to mix). Breakeven is around 30-40 bags — after that, ready-mix is cheaper.</p>

        <h3>Common Mistakes</h3>
        <p>1) Not accounting for waste (always add 10%). 2) Mixing too many bags at once (mix 1-2 at a time). 3) Adding too much water (weakens concrete — use 3 quarts per 80-lb bag). 4) Not buying enough (running out mid-pour). 5) Forgetting that concrete from bags is NOT the same strength as ready-mix for structural applications.</p>

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
