import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Start a Concrete Business in Tennessee (TN) — 2026 Guide | EstimateConcrete",
  description: "Complete guide to starting a concrete business in Tennessee. Licensing requirements, startup costs, equipment, insurance, and how to find your first customers in TN.",
  keywords: "how to start concrete business Tennessee, concrete contractor license Tennessee, concrete business TN",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Start a Concrete Business in Tennessee</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How to Start a Concrete Business in Tennessee (TN)</h1>
        <p className="lead text-lg text-slate-600">
          Tennessee is one of the best states for starting a concrete business. This guide covers
          everything you need — from licensing and insurance to equipment and finding your first customers in TN.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>See also:</strong> <Link href="/states/tennessee" className="text-blue-700 underline">Tennessee concrete contractor guide</Link> — licensing details, current pricing, and top markets.
          </p>
        </div>

        <h2>Step 1: Get Licensed in Tennessee</h2>
        <p>
          Licensing requirements vary by state. Check our <Link href="/states/tennessee">Tennessee state guide</Link> for
          the specific license type, exam requirements, and fees. Some states require a general contractor license,
          others have specific concrete contractor classifications, and some have no state license at all (just local permits).
        </p>

        <h2>Step 2: Get Insured</h2>
        <p>
          At minimum, you need general liability insurance ($1,000-$3,000/year for $1M coverage) and commercial auto
          insurance ($1,500-$4,000/year). Once you hire employees, workers&apos; compensation is mandatory. Total insurance
          costs for a startup: $3,000-$8,000/year. Read our <Link href="/blog/concrete-business-insurance">complete
          insurance guide</Link> for details.
        </p>

        <h2>Step 3: Get Equipment</h2>
        <p>
          Startup equipment costs $5,000-$15,000 for hand tools, forms, and basic power tools — plus a reliable work
          truck ($15,000-$40,000 used). For the first 3-6 months, rent specialized equipment (concrete saws, vibrators,
          power screeds) until you know which tools you use daily. See our <Link href="/blog/concrete-equipment-list">complete
          equipment list and costs</Link>.
        </p>

        <h2>Step 4: Set Your Pricing</h2>
        <p>
          Use our <Link href="/calculators/slab">concrete calculators</Link> to estimate material costs accurately.
          In Tennessee, ready-mix concrete averages $130-$175 per cubic yard. Labor rates run $4-$9 per square foot
          depending on the area. Add 15-25% overhead and 15-30% profit margin. Read our <Link href="/blog/how-to-price-concrete-work">pricing guide</Link> for
          the complete breakdown.
        </p>

        <h2>Step 5: Find Your First Customers</h2>
        <p>
          Start with: 1) Google Business Profile (free, critical for local search). 2) Nextdoor and Facebook
          Marketplace posts. 3) Yard signs on completed jobs. 4) Door hangers in neighborhoods with old driveways
          or patios. 5) Partnerships with general contractors, home builders, and realtors. Your first 10 jobs
          will come from hustle, not marketing.
        </p>

        <h2>Step 6: Estimate Jobs Accurately</h2>
        <p>
          Bad estimates kill concrete businesses. Use our <Link href="/blog/how-to-estimate-concrete-jobs">estimating guide</Link> and
          <Link href="/templates"> professional estimate templates</Link> to price every job accurately. Track your
          actual costs on the first 10 jobs to calibrate your estimates to Tennessee pricing.
        </p>

        <h2>Startup Costs Summary for Tennessee</h2>
        <table>
          <thead>
            <tr><th>Item</th><th>Cost Range</th></tr>
          </thead>
          <tbody>
            <tr><td>Licensing &amp; permits</td><td>$200-$2,000</td></tr>
            <tr><td>Insurance (first year)</td><td>$3,000-$8,000</td></tr>
            <tr><td>Hand tools &amp; forms</td><td>$2,000-$5,000</td></tr>
            <tr><td>Power tools</td><td>$1,500-$5,000</td></tr>
            <tr><td>Work truck (used)</td><td>$15,000-$40,000</td></tr>
            <tr><td>Marketing (first 3 months)</td><td>$500-$2,000</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>$22,200-$62,000</strong></td></tr>
          </tbody>
        </table>
        <p>
          You can start for under $25,000 if you already have a truck and buy used equipment.
          Many successful concrete contractors started with $10,000 and a truck they already owned.
        </p>

        <div className="bg-slate-900 text-white rounded-lg p-8 not-prose my-8 text-center">
          <h3 className="text-xl font-bold mb-3">Get the Complete Business Starter Kit</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Business plan, contracts, SOPs, marketing playbook, pricing matrix, and everything
            else you need to launch your concrete business in Tennessee.
          </p>
          <Link
            href="/templates"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-bold transition inline-block"
          >
            Get the Starter Kit — $297
          </Link>
        </div>
      </article>
    </div>
  );
}
