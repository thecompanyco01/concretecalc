import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Contractor Insurance: Types, Costs & Requirements | ConcreteCalc",
  description: "Concrete contractor insurance costs $2,000-$8,000 per year for a small operation. You need general liability ($1,000-$3,000/year), commercial auto ($1,500-",
  keywords: "concrete business insurance cost, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Contractor Insurance: Types, Costs & Requirements</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Contractor Insurance: What You Need & What It Costs</h1>
        <p className="lead text-lg text-slate-600">Concrete contractor insurance costs $2,000-$8,000 per year for a small operation. You need general liability ($1,000-$3,000/year), commercial auto ($1,500-$4,000/year), and workers' comp (once you hire). Here's the complete breakdown.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>General Liability Insurance</h3>
        <p>Covers property damage and bodily injury claims. Cost: $1,000-$3,000/year for $1M coverage. Required by most states and almost every commercial client. Higher limits ($2M-$5M) cost $2,000-$6,000/year. Concrete work is considered medium-high risk due to heavy equipment and site hazards.</p>

        <h3>Commercial Auto Insurance</h3>
        <p>Covers your work truck, mixer, trailer. Cost: $1,500-$4,000/year per vehicle. Required by law in all states. If you haul a trailer with equipment, make sure the trailer is covered. Add hired and non-owned auto coverage if employees use personal vehicles.</p>

        <h3>Workers' Compensation</h3>
        <p>Required in most states once you hire your first employee. Cost: $5-$15 per $100 of payroll for concrete work (high-risk classification). A 3-person crew with $150K total payroll = $7,500-$22,500/year. Some states let sole proprietors opt out.</p>

        <h3>Other Coverage to Consider</h3>
        <p>Inland marine (covers equipment/tools): $500-$1,500/year. Umbrella policy (extra liability above base limits): $500-$1,000/year for $1M umbrella. Professional liability (if you do design work): $1,000-$3,000/year. Business property (office, shop): $500-$2,000/year.</p>

        <h3>How to Save on Insurance</h3>
        <p>1) Bundle policies with one carrier (10-15% discount). 2) Maintain clean safety record. 3) Increase deductibles. 4) Shop around every 2-3 years. 5) Join a trade association for group rates. 6) Implement safety program (drug testing, OSHA training) for reduced premiums.</p>

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
