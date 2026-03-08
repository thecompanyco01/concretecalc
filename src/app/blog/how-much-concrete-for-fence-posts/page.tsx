import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Concrete for Fence Posts? (Calculator & Guide) | EstimateConcrete",
  description: "Each fence post needs 1-3 bags of concrete (60-lb or 80-lb) depending on post size and hole diameter. A standard 4×4 post in a 10-inch hole needs about 1.5",
  keywords: "how much concrete for fence posts, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How Much Concrete for Fence Posts?</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Concrete Do You Need for Fence Posts?</h1>
        <p className="lead text-lg text-slate-600">Each fence post needs 1-3 bags of concrete (60-lb or 80-lb) depending on post size and hole diameter. A standard 4×4 post in a 10-inch hole needs about 1.5 bags of 80-lb concrete. A 100-foot fence with posts every 8 feet needs 13 posts = about 20 bags.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Concrete Per Post Calculator</h3>
        <p>4×4 post, 10" hole, 24" deep: 1 bag (80-lb) or 1.5 bags (60-lb). 4×4 post, 12" hole, 30" deep: 2 bags (80-lb). 6×6 post, 12" hole, 30" deep: 1.5 bags (80-lb). 6×6 post, 14" hole, 36" deep: 2.5 bags (80-lb). Gate posts (deeper): add 50% more concrete.</p>

        <h3>Post Spacing Guide</h3>
        <p>Standard residential fence: posts every 6-8 feet. Privacy fence (6' tall): posts every 6 feet maximum. Ranch/split rail: posts every 8-10 feet. Chain link: posts every 10 feet. Wind-prone areas: reduce spacing by 1-2 feet. Corner posts and gate posts need extra depth (36" minimum).</p>

        <h3>How Many Bags for Your Fence</h3>
        <p>50-foot fence (8' spacing): 8 posts = 12 bags (80-lb). 100-foot fence: 14 posts = 21 bags. 200-foot fence (full yard): 27 posts = 40 bags. Add 2 bags per gate opening (extra for gate posts). These estimates use standard 4×4 posts with 10" holes at 24" depth.</p>

        <h3>Setting Posts in Concrete</h3>
        <p>Dig holes 3x the post width and 1/3 of total post length deep. Set post, brace plumb, pour dry concrete mix into hole, add water per bag instructions. Fast-setting concrete sets in 20-40 minutes. Standard concrete takes 24-48 hours. Don't fill hole to the top — leave 2-3" for soil to grade away from post.</p>

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
