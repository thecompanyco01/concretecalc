import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Estimate Concrete Jobs (Contractor Guide) | EstimateConcrete",
  description: "Accurate concrete estimating is the difference between profitable jobs and money-losing disasters. This guide covers the complete estimating process — from",
  keywords: "how to estimate concrete jobs, concrete cost, concrete calculator, concrete contractor",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">How to Estimate Concrete Jobs</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How to Estimate Concrete Jobs: Complete Contractor Guide</h1>
        <p className="lead text-lg text-slate-600">Accurate concrete estimating is the difference between profitable jobs and money-losing disasters. This guide covers the complete estimating process — from site measurement to final bid — with real formulas, pricing data, and examples.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Step 1: Measure the Site</h3>
        <p>Always measure yourself — never trust the customer's measurements. Bring a 100-foot tape, a laser measurer ($30-50), and a notepad. Measure length, width, and note any slopes or grade changes. For irregular shapes, break the area into rectangles and triangles. Take photos of the site from multiple angles.</p>

        <h3>Step 2: Calculate Materials</h3>
        <p>Cubic yards = (L × W × Thickness in feet) ÷ 27. Add 10% waste factor. Then calculate: rebar (grid pattern at 18" OC), wire mesh (if applicable), form lumber (perimeter in linear feet), base gravel (4-6" deep × area), and vapor barrier (area + 10% overlap). Use our slab calculator for quick math.</p>

        <h3>Step 3: Price Materials</h3>
        <p>Call your local ready-mix suppliers for current pricing — don't use online averages. Get quotes from 2-3 suppliers. Ask about: price per yard, short load fees, Saturday delivery charges, pump truck costs, and fiber mesh add-on pricing. Concrete prices vary $20-40/yard between suppliers in the same city.</p>

        <h3>Step 4: Estimate Labor</h3>
        <p>Base labor rate: $4-8/sqft for flatwork (varies by region). Adjust for: complexity (+20-50% for curves, steps, or decorative work), access difficulty (+15-30% for backyard pours), and thickness (6"+ slabs take longer to pour and finish). Track your actual hours on jobs to build accurate labor data over time.</p>

        <h3>Step 5: Add Overhead and Profit</h3>
        <p>Overhead: insurance, truck payment, tools, fuel, phone, licensing — typically 15-25% of direct costs. Profit margin: 15-30% on top of overhead. Don't compete on price alone — compete on quality, reliability, and professionalism. A 20% profit margin on a $5,000 job = $1,000 profit.</p>

        <h3>Step 6: Present the Estimate</h3>
        <p>Use a professional estimate template (not a text message or napkin). Include: itemized material costs, labor breakdown, timeline, payment terms (50% deposit, 50% on completion), and warranty terms. Present in person when possible — it builds trust and lets you address questions.</p>

        <h3>Common Estimating Mistakes</h3>
        <p>1) Forgetting to include mobilization/travel costs. 2) Underestimating site prep time. 3) Not accounting for pump truck costs ($150-200/hour). 4) Ignoring short load fees (orders under 5 yards). 5) Not charging for removal of old concrete. 6) Bidding too low to 'win' the job — then losing money.</p>

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
