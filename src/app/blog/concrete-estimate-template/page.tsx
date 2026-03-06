import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Concrete Estimate Template (2026) + Pro Templates | ConcreteCalc",
  description: "Download a free concrete estimate template for contractors. Includes material costs, labor rates, overhead, and profit margins. Professional templates that win more jobs.",
  keywords: "concrete estimate template, concrete bid template, concrete estimating spreadsheet, concrete job estimate form, free concrete estimate template",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Estimate Template</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Free Concrete Estimate Template for Contractors (2026)</h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          A professional estimate template is the difference between winning a $15,000 job and losing it to a competitor 
          who looks more put-together. Most concrete contractors either use handwritten estimates (unprofessional) or 
          generic templates that don&apos;t account for the unique cost factors in concrete work. Here&apos;s what you actually need.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-blue-900 mt-0">🧮 Quick Calculator</h3>
          <p className="text-blue-800 mb-0">
            Need to calculate material quantities first? Use our{" "}
            <Link href="/calculators/slab" className="text-blue-600 font-semibold hover:underline">
              Concrete Slab Calculator
            </Link>{" "}
            to get exact cubic yards, bags, and costs — then plug those numbers into your estimate.
          </p>
        </div>

        <h2>What Every Concrete Estimate Must Include</h2>
        
        <p>
          Homeowners compare contractors side-by-side. The estimate that clearly breaks down costs, timeline, and scope 
          wins the job — even if it&apos;s not the cheapest bid. Here&apos;s what your estimate template needs:
        </p>

        <h3>1. Project Information Header</h3>
        <ul>
          <li><strong>Your company info:</strong> Name, license number, insurance policy number, phone, email</li>
          <li><strong>Client info:</strong> Name, property address, phone, email</li>
          <li><strong>Estimate date and expiration:</strong> Standard is 30 days (concrete prices fluctuate)</li>
          <li><strong>Estimate number:</strong> Sequential numbering for your records (EST-2026-001, etc.)</li>
        </ul>

        <h3>2. Scope of Work (Most Contractors Skip This)</h3>
        <p>
          This is where most estimates fail. A vague &quot;Install concrete driveway&quot; leaves room for disputes. Instead:
        </p>
        <ul>
          <li>Exact dimensions (e.g., &quot;20&apos; × 40&apos; × 4&quot; thick concrete driveway&quot;)</li>
          <li>Concrete type and PSI (e.g., &quot;4,000 PSI ready-mix with fiber mesh&quot;)</li>
          <li>Finish type (e.g., &quot;broom finish with hand-troweled edges&quot;)</li>
          <li>Reinforcement details (e.g., &quot;#4 rebar on 18&quot; centers, both directions&quot;)</li>
          <li>Subgrade prep (e.g., &quot;4&quot; compacted gravel base, existing soil graded to slope&quot;)</li>
          <li>What&apos;s NOT included (e.g., &quot;Does not include demolition of existing driveway&quot;)</li>
        </ul>

        <h3>3. Material Cost Breakdown</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Material</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Unit Cost</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Ready-mix concrete (4,000 PSI)</td><td>9.88 cu yd</td><td>$165/yd</td><td>$1,630</td></tr>
              <tr><td>Rebar (#4, 20&apos; lengths)</td><td>48 pieces</td><td>$12.50/ea</td><td>$600</td></tr>
              <tr><td>Rebar ties</td><td>1 box</td><td>$45</td><td>$45</td></tr>
              <tr><td>Gravel base (¾&quot; crushed)</td><td>12 tons</td><td>$35/ton</td><td>$420</td></tr>
              <tr><td>Form lumber (2×4)</td><td>20 pieces</td><td>$6.50/ea</td><td>$130</td></tr>
              <tr><td>Stakes and fasteners</td><td>1 lot</td><td>$75</td><td>$75</td></tr>
              <tr><td>Curing compound</td><td>5 gal</td><td>$28/gal</td><td>$140</td></tr>
              <tr><td>Expansion joint material</td><td>80 LF</td><td>$1.50/LF</td><td>$120</td></tr>
              <tr><td colSpan={3} className="font-bold text-right">Materials Subtotal:</td><td className="font-bold">$3,160</td></tr>
            </tbody>
          </table>
        </div>

        <h3>4. Labor Cost Breakdown</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Task</th>
                <th className="text-left">Hours</th>
                <th className="text-left">Rate</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Site prep & grading</td><td>4 hrs × 3 crew</td><td>$45/hr</td><td>$540</td></tr>
              <tr><td>Gravel base installation</td><td>3 hrs × 2 crew</td><td>$45/hr</td><td>$270</td></tr>
              <tr><td>Form setting</td><td>4 hrs × 2 crew</td><td>$45/hr</td><td>$360</td></tr>
              <tr><td>Rebar installation</td><td>3 hrs × 2 crew</td><td>$45/hr</td><td>$270</td></tr>
              <tr><td>Pour day (concrete placement)</td><td>6 hrs × 4 crew</td><td>$50/hr</td><td>$1,200</td></tr>
              <tr><td>Finishing</td><td>4 hrs × 2 crew</td><td>$50/hr</td><td>$400</td></tr>
              <tr><td>Form removal & cleanup</td><td>2 hrs × 2 crew</td><td>$40/hr</td><td>$160</td></tr>
              <tr><td colSpan={3} className="font-bold text-right">Labor Subtotal:</td><td className="font-bold">$3,200</td></tr>
            </tbody>
          </table>
        </div>

        <h3>5. Equipment & Overhead</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Item</th>
                <th className="text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Concrete pump truck (if needed)</td><td>$450</td></tr>
              <tr><td>Plate compactor rental</td><td>$150</td></tr>
              <tr><td>Fuel & vehicle costs</td><td>$175</td></tr>
              <tr><td>Permit (if required)</td><td>$200</td></tr>
              <tr><td>Insurance allocation (per job)</td><td>$320</td></tr>
              <tr><td>Waste disposal</td><td>$150</td></tr>
              <tr><td colSpan={1} className="font-bold text-right">Equipment & Overhead Subtotal:</td><td className="font-bold">$1,445</td></tr>
            </tbody>
          </table>
        </div>

        <h3>6. Pricing Summary</h3>
        
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                <tr><td className="py-2">Materials</td><td className="py-2 text-right">$3,160</td></tr>
                <tr><td className="py-2">Labor</td><td className="py-2 text-right">$3,200</td></tr>
                <tr><td className="py-2">Equipment & Overhead</td><td className="py-2 text-right">$1,445</td></tr>
                <tr className="border-t"><td className="py-2 font-semibold">Subtotal</td><td className="py-2 text-right font-semibold">$7,805</td></tr>
                <tr><td className="py-2">Profit (20%)</td><td className="py-2 text-right">$1,561</td></tr>
                <tr className="border-t-2 border-slate-400"><td className="py-3 font-bold text-lg">TOTAL ESTIMATE</td><td className="py-3 text-right font-bold text-lg text-green-700">$9,366</td></tr>
                <tr><td className="py-1 text-sm text-slate-500">Per square foot</td><td className="py-1 text-right text-sm text-slate-500">$11.71/sq ft</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Common Mistakes in Concrete Estimates</h2>

        <h3>1. Underestimating Concrete Quantity</h3>
        <p>
          Ground is never perfectly flat. Always add <strong>10% waste factor</strong> to your calculated cubic yards. 
          On jobs with uneven subgrade, go 15%. Running short mid-pour is a disaster — you&apos;re paying the ready-mix 
          driver to wait while you scramble for another truck, and cold joints weaken the slab.
        </p>

        <h3>2. Forgetting Overhead Costs</h3>
        <p>
          Your truck insurance, business insurance, license fees, office costs, and phone bill don&apos;t disappear 
          on non-working days. Allocate a percentage of these to every job. Most successful contractors add 
          <strong>10-15% overhead</strong> on top of direct costs.
        </p>

        <h3>3. Pricing Below Market Because You&apos;re Scared</h3>
        <p>
          New contractors constantly underbid because they&apos;re afraid of losing the job. The result? You win the 
          job but make $200 after expenses on a week of work. Check{" "}
          <Link href="/blog/how-much-to-charge-for-concrete-work" className="text-blue-600 hover:underline">
            what other contractors charge in your area
          </Link>{" "}
          and price accordingly. Your profit margin should be <strong>15-25%</strong> minimum.
        </p>

        <h3>4. No Expiration Date on the Estimate</h3>
        <p>
          Concrete prices change frequently. Ready-mix went up 8% nationally in 2024 alone. Always put a 
          <strong>30-day expiration</strong> on estimates. After that, prices need to be requoted.
        </p>

        <h3>5. Vague Scope of Work</h3>
        <p>
          &quot;Install concrete patio&quot; is not a scope of work. Specify dimensions, thickness, PSI, finish, reinforcement, 
          and what&apos;s excluded. This protects you from &quot;but I thought that was included&quot; arguments later.
        </p>

        <h2>Profit Margins by Concrete Job Type</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Job Type</th>
                <th className="text-left">Typical $/sq ft</th>
                <th className="text-left">Typical Margin</th>
                <th className="text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Basic slab/driveway</td><td>$8-14</td><td>15-20%</td><td>High competition, win on efficiency</td></tr>
              <tr><td>Stamped concrete</td><td>$15-25</td><td>20-30%</td><td>Skill-based premium, less competition</td></tr>
              <tr><td>Foundations</td><td>$10-18</td><td>15-25%</td><td>Complexity = higher margin</td></tr>
              <tr><td>Decorative/exposed aggregate</td><td>$12-22</td><td>25-35%</td><td>Specialty work commands premium</td></tr>
              <tr><td>Retaining walls</td><td>$25-50</td><td>20-30%</td><td>Engineering complexity justifies pricing</td></tr>
              <tr><td>Concrete countertops</td><td>$65-150/LF</td><td>30-45%</td><td>Artisan pricing, low material cost</td></tr>
            </tbody>
          </table>
        </div>

        <h2>How to Present Your Estimate to Win More Jobs</h2>

        <ol>
          <li><strong>Deliver it within 24-48 hours.</strong> The first estimate in the door wins 40% of the time. Speed matters more than perfection.</li>
          <li><strong>Present in person when possible.</strong> Walk the client through each line item. Answer questions on the spot. This builds trust.</li>
          <li><strong>Offer good/better/best options.</strong> Basic broom finish ($8,500), stamped ($12,000), decorative with borders ($15,500). This anchors the client against the premium option and makes the middle option feel reasonable.</li>
          <li><strong>Include photos of similar work.</strong> Attach 3-5 photos of past projects that match the job type. Visual proof beats verbal promises.</li>
          <li><strong>Professional formatting matters.</strong> A clean, branded PDF with your logo looks like a $50K/year contractor. A handwritten note on graph paper looks like a weekend warrior.</li>
        </ol>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 className="text-amber-900 mt-0">📋 Ready-Made Templates</h3>
          <p className="text-amber-800">
            Stop spending hours formatting estimates in Word. Our{" "}
            <Link href="/templates" className="text-amber-700 font-semibold hover:underline">
              Pro Estimate Template Pack
            </Link>{" "}
            includes pre-built spreadsheets with automatic cost calculations, professional PDF output, 
            and material quantity formulas — everything shown in this guide, ready to fill in and send.
          </p>
        </div>

        <h2>Free vs. Pro Estimate Templates</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th className="text-left">Free Template</th>
                <th className="text-left">Pro Template Pack ($49)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Basic estimate layout</td><td>✅</td><td>✅</td></tr>
              <tr><td>Material cost breakdown</td><td>✅</td><td>✅</td></tr>
              <tr><td>Auto-calculate cubic yards</td><td>❌</td><td>✅</td></tr>
              <tr><td>Auto-calculate material costs</td><td>❌</td><td>✅</td></tr>
              <tr><td>Labor hour calculator</td><td>❌</td><td>✅</td></tr>
              <tr><td>Profit margin calculator</td><td>❌</td><td>✅</td></tr>
              <tr><td>Professional PDF export</td><td>❌</td><td>✅</td></tr>
              <tr><td>Multiple job type templates</td><td>❌</td><td>✅ (8 types)</td></tr>
              <tr><td>Change order template</td><td>❌</td><td>✅</td></tr>
              <tr><td>Invoice template</td><td>❌</td><td>✅</td></tr>
              <tr><td>Contract template</td><td>❌</td><td>✅</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I estimate concrete for irregular shapes?</h3>
        <p>
          Break the area into rectangles, triangles, and circles. Calculate each separately, then add them together. 
          Our <Link href="/calculators/slab" className="text-blue-600 hover:underline">concrete calculator</Link> handles 
          standard rectangular areas — for complex shapes, sketch it out and calculate each section.
        </p>

        <h3>Should I show the client my cost breakdown?</h3>
        <p>
          Yes, but strategically. Show materials, labor, and total — but don&apos;t show your profit margin as a 
          separate line item. Roll it into your labor and overhead rates. Clients don&apos;t need to see you&apos;re 
          making 20% — they need to see the total is fair.
        </p>

        <h3>How much should I charge per square foot for concrete?</h3>
        <p>
          Basic flatwork: $8-14/sq ft. Stamped: $15-25/sq ft. Decorative: $12-22/sq ft. These vary by region — 
          check our{" "}
          <Link href="/blog/how-much-to-charge-for-concrete-work" className="text-blue-600 hover:underline">
            complete concrete pricing guide
          </Link>{" "}
          for detailed regional data.
        </p>

        <h3>What&apos;s the standard profit margin for concrete work?</h3>
        <p>
          <strong>15-25%</strong> for most residential work. Specialty work (stamped, decorative, countertops) can 
          command 25-45%. If you&apos;re below 15%, you&apos;re not accounting for all your costs.
        </p>
      </article>
    </div>
  );
}
