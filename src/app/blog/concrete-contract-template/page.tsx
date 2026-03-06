import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Concrete Contract Template (2026) — Protect Your Business | ConcreteCalc",
  description: "Download a free concrete contract template with payment terms, scope of work, change orders, and liability protection. Essential for every concrete contractor.",
  keywords: "concrete contract template, concrete contractor agreement, concrete work contract, concrete service agreement, free concrete contract",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Contract Template</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Contract Template: Protect Your Business on Every Job</h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Every concrete contractor has a horror story about a job that went sideways because there was no contract 
          — or a bad one. The customer who refused to pay for &quot;extra work&quot; they verbally requested. The 
          homeowner who expected stamped concrete when you quoted broom finish. The payment that never came after 
          the truck left. A solid contract prevents all of this.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-red-900 mt-0">⚠️ Important Disclaimer</h3>
          <p className="text-red-800 mb-0">
            This template is a starting point, not legal advice. Contract requirements vary by state — some states 
            require specific language for home improvement contracts. Have a local attorney review your contract before 
            using it. The $300-500 you spend on a lawyer review could save you $30,000 in a dispute.
          </p>
        </div>

        <h2>Essential Sections Every Concrete Contract Needs</h2>

        <h3>1. Parties and Project Information</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>CONCRETE WORK AGREEMENT</strong></p>
          <p className="mb-2">This agreement is entered into on [DATE] between:</p>
          <p className="mb-1"><strong>Contractor:</strong> [Company Name], License #[XXX], [Address], [Phone], [Email]</p>
          <p className="mb-1"><strong>Property Owner:</strong> [Name], [Property Address], [Phone], [Email]</p>
          <p className="mb-0"><strong>Project Location:</strong> [Address if different from owner address]</p>
        </div>

        <h3>2. Detailed Scope of Work</h3>
        <p>This is the most important section. Be painfully specific:</p>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>SCOPE OF WORK:</strong></p>
          <p className="mb-1">Contractor agrees to perform the following work:</p>
          <ul className="mb-2">
            <li>Remove existing [asphalt/concrete] driveway (approximately [X] sq ft)</li>
            <li>Grade and compact subgrade to proper slope for drainage</li>
            <li>Install [4&quot;] compacted [¾&quot; crushed gravel] base</li>
            <li>Set forms to specified dimensions: [20&apos; × 40&apos; × 4&quot;]</li>
            <li>Install [#4 rebar on 18&quot; centers, both directions / wire mesh / fiber mesh]</li>
            <li>Pour [4,000 PSI ready-mix concrete with air entrainment]</li>
            <li>Apply [broom / stamped / exposed aggregate] finish</li>
            <li>Cut control joints at [10&apos;] intervals</li>
            <li>Install expansion joints at all structures</li>
            <li>Apply curing compound</li>
            <li>Remove forms and clean up job site</li>
          </ul>
          <p className="mb-0"><strong>EXCLUSIONS:</strong> [List everything NOT included — permits, landscaping repair, 
          sprinkler relocation, painting, sealing, etc.]</p>
        </div>

        <h3>3. Payment Terms</h3>
        <p>
          The payment schedule is where most disputes happen. Be crystal clear:
        </p>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>TOTAL CONTRACT PRICE:</strong> $[AMOUNT]</p>
          <p className="mb-2"><strong>PAYMENT SCHEDULE:</strong></p>
          <ul className="mb-2">
            <li>Deposit (due upon signing): $[AMOUNT] ([33]% of total)</li>
            <li>Progress payment (due day of pour): $[AMOUNT] ([33]%)</li>
            <li>Final payment (due upon completion): $[AMOUNT] ([34]%)</li>
          </ul>
          <p className="mb-1"><strong>LATE PAYMENT:</strong> Payments not received within [7] days of due date will 
          incur a late fee of [1.5%] per month.</p>
          <p className="mb-0"><strong>PAYMENT METHODS:</strong> Check, credit card, Zelle, Venmo. Cash accepted 
          with written receipt only.</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
          <p className="text-yellow-800 text-sm mb-0">
            <strong>💡 Pro tip:</strong> Many states limit how much you can collect as a deposit for home improvement 
            contracts (often 10-33%). Check your state&apos;s contractor licensing board for deposit limits.
          </p>
        </div>

        <h3>4. Change Order Clause (Non-Negotiable)</h3>
        <p>
          This clause saves you from scope creep — when the customer asks for &quot;just one more thing&quot; 
          that adds $2,000 to the job:
        </p>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>CHANGE ORDERS:</strong> Any changes to the scope of work described above must 
          be agreed upon in writing by both parties before work begins on the change. Change orders will specify 
          the additional work, additional cost, and any schedule impact. Verbal change requests are not binding 
          on either party.</p>
          <p className="mb-0">A separate Change Order Form will be used for all modifications. The contract price 
          will be adjusted by the amount specified in the signed change order.</p>
        </div>

        <h3>5. Timeline and Delays</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>ESTIMATED START DATE:</strong> [DATE]</p>
          <p className="mb-2"><strong>ESTIMATED COMPLETION:</strong> [DATE] (weather permitting)</p>
          <p className="mb-2"><strong>WEATHER DELAYS:</strong> Concrete work is weather-dependent. Rain, freezing 
          temperatures (below 40°F), or extreme heat (above 95°F) may require schedule adjustments. Contractor 
          will notify Owner of weather delays as soon as practical. Weather delays do not constitute breach of 
          this agreement.</p>
          <p className="mb-0"><strong>ACCESS:</strong> Owner agrees to provide clear access to the work area. 
          Vehicles, landscaping, or obstacles that prevent access may cause delays and additional charges.</p>
        </div>

        <h3>6. Warranty</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>WARRANTY:</strong> Contractor warrants workmanship for a period of [1 year / 2 years] 
          from the date of completion. This warranty covers defects in workmanship including:</p>
          <ul className="mb-2">
            <li>Structural cracking (cracks wider than ¼&quot;)</li>
            <li>Settling or heaving due to improper base preparation</li>
            <li>Delamination or spalling due to improper finishing</li>
          </ul>
          <p className="mb-2"><strong>WARRANTY EXCLUSIONS:</strong></p>
          <ul className="mb-0">
            <li>Hairline cracks (normal in all concrete — not a defect)</li>
            <li>Color variations (natural in concrete)</li>
            <li>Damage from salt, chemicals, or deicing agents</li>
            <li>Damage from heavy vehicles exceeding design load</li>
            <li>Normal wear and tear</li>
            <li>Acts of nature (earthquakes, floods, tree roots)</li>
            <li>Damage caused by others working on or near the concrete</li>
          </ul>
        </div>

        <h3>7. Liability and Insurance</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>INSURANCE:</strong> Contractor maintains general liability insurance with 
          minimum coverage of $[1,000,000] per occurrence and workers&apos; compensation insurance as required 
          by [STATE] law. Certificates of insurance available upon request.</p>
          <p className="mb-0"><strong>LIMITATION OF LIABILITY:</strong> Contractor&apos;s total liability under this 
          agreement shall not exceed the total contract price. Contractor is not liable for pre-existing conditions, 
          underground utilities not identified by Owner, or damage to landscaping within [3 feet] of the work area 
          necessary for equipment access.</p>
        </div>

        <h3>8. Dispute Resolution</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>DISPUTE RESOLUTION:</strong> Any disputes arising from this agreement shall 
          first be addressed through good-faith negotiation between the parties. If negotiation fails, parties 
          agree to binding mediation before [mediation service] in [COUNTY, STATE]. The prevailing party in 
          any legal action shall be entitled to recover reasonable attorney&apos;s fees and court costs.</p>
        </div>

        <h3>9. Cancellation</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4 font-mono text-sm">
          <p className="mb-2"><strong>RIGHT TO CANCEL:</strong> Owner may cancel this contract within [3] business 
          days of signing per [STATE] home solicitation laws (if applicable).</p>
          <p className="mb-0"><strong>CANCELLATION AFTER START:</strong> If Owner cancels after work has begun, Owner 
          agrees to pay for all work completed, materials ordered or delivered, and a cancellation fee of [10%] of 
          the remaining contract balance.</p>
        </div>

        <h2>5 Contract Mistakes That Cost Concrete Contractors Thousands</h2>

        <ol>
          <li>
            <strong>No change order clause.</strong> Customer asks for stamped edges &quot;while you&apos;re at 
            it&quot; — that&apos;s $1,500 of extra work. Without a change order clause, good luck collecting.
          </li>
          <li>
            <strong>Vague scope of work.</strong> &quot;Pour a patio&quot; means different things to you and the 
            homeowner. Specify every detail: dimensions, thickness, PSI, finish, reinforcement, joints.
          </li>
          <li>
            <strong>No weather clause.</strong> You can&apos;t pour in the rain. Without a weather delay clause, 
            the homeowner could argue you breached the timeline.
          </li>
          <li>
            <strong>Warranty too broad.</strong> ALL concrete cracks. If your warranty doesn&apos;t explicitly 
            exclude hairline cracks and normal shrinkage, you&apos;ll be doing free repairs forever.
          </li>
          <li>
            <strong>No late payment penalty.</strong> Without teeth, some customers will stretch payment for months. 
            A 1.5%/month late fee motivates timely payment.
          </li>
        </ol>

        <h2>State-Specific Contract Requirements</h2>
        <p>
          Many states have specific requirements for home improvement contracts. Common requirements include:
        </p>
        <ul>
          <li><strong>California:</strong> Contracts over $500 must be in writing. Specific cancellation language required. Deposit limited to 10% or $1,000 (whichever is less).</li>
          <li><strong>Texas:</strong> No state licensing for concrete contractors, but contracts should reference any local licensing. Mechanics lien rights apply.</li>
          <li><strong>Florida:</strong> Contractor must be licensed. Contracts must include license number. Right to cancel within 3 business days.</li>
          <li><strong>New York:</strong> Home improvement contracts must include specific language about the homeowner&apos;s right to cancel.</li>
        </ul>
        <p>
          Check our{" "}
          <Link href="/states" className="text-blue-600 hover:underline">
            state-by-state contractor guides
          </Link>{" "}
          for specific requirements in your area.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Do I need a contract for small jobs?</h3>
        <p>
          <strong>Yes.</strong> Even a $500 sidewalk repair needs a simple contract. The smaller the job, the 
          simpler the contract can be — but you always need: scope, price, payment terms, and signatures. A 
          one-page agreement is fine for small jobs.
        </p>

        <h3>Can I use the same contract for commercial and residential work?</h3>
        <p>
          You can use the same base template, but commercial contracts typically need additional clauses: 
          bonding requirements, prevailing wage compliance, OSHA certifications, and more detailed insurance 
          provisions. Commercial clients will often have their own contracts they want you to sign.
        </p>

        <h3>Should I require a deposit?</h3>
        <p>
          <strong>Absolutely.</strong> A deposit (typically 25-50% of the job, subject to state limits) 
          confirms the customer is serious and covers your material costs. Never order concrete or materials 
          without a signed contract and deposit in hand.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 className="text-amber-900 mt-0">📋 Complete Template Pack</h3>
          <p className="text-amber-800">
            Our{" "}
            <Link href="/templates" className="text-amber-700 font-semibold hover:underline">
              Pro Template Pack
            </Link>{" "}
            includes a ready-to-use contract template, plus matching estimate templates, invoice templates, 
            change order forms, and lien waiver forms — everything a concrete contractor needs to run a 
            professional operation.
          </p>
        </div>
      </article>
    </div>
  );
}
