import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Concrete Invoice Template (2026) — Get Paid Faster | ConcreteCalc",
  description: "Professional concrete invoice template for contractors. Includes material breakdown, labor costs, progress billing, and payment terms. Free download + pro templates.",
  keywords: "concrete invoice template, concrete contractor invoice, concrete billing template, concrete receipt template, free concrete invoice",
};

export default function Article() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Invoice Template</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>Concrete Invoice Template: Get Paid Faster, Look Professional</h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Most concrete contractors are excellent at pouring concrete and terrible at getting paid for it. A 
          professional invoice isn&apos;t just paperwork — it&apos;s a tool that gets you paid faster, reduces 
          disputes, and makes you look like a serious business instead of a guy with a truck. Here&apos;s exactly 
          what your invoices should include and how to structure them for maximum impact.
        </p>

        <h2>What Your Concrete Invoice Must Include</h2>

        <h3>Header Section</h3>
        <ul>
          <li><strong>Your company name and logo</strong> — branding builds trust and looks professional</li>
          <li><strong>Your address, phone, email, website</strong></li>
          <li><strong>License number</strong> — required in many states, builds credibility everywhere</li>
          <li><strong>Invoice number</strong> — sequential (INV-2026-001). Essential for your bookkeeping and for the customer&apos;s records</li>
          <li><strong>Invoice date</strong></li>
          <li><strong>Due date</strong> — &quot;Due upon receipt&quot; or &quot;Net 15&quot; or &quot;Net 30&quot;</li>
        </ul>

        <h3>Client and Project Details</h3>
        <ul>
          <li><strong>Client name and address</strong></li>
          <li><strong>Project address</strong> (if different from billing address)</li>
          <li><strong>Reference to contract/estimate number</strong> — ties the invoice back to the agreed scope</li>
          <li><strong>Project description</strong> — one-line summary (e.g., &quot;20×40 concrete driveway installation&quot;)</li>
        </ul>

        <h3>Line Items (The Detailed Breakdown)</h3>
        <p>
          A detailed breakdown accomplishes two things: it justifies your price and it makes disputes nearly 
          impossible. The customer can see exactly what they&apos;re paying for.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Description</th>
                <th className="text-left">Qty</th>
                <th className="text-left">Unit</th>
                <th className="text-left">Rate</th>
                <th className="text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Demolition of existing driveway</td><td>800</td><td>sq ft</td><td>$3.50</td><td>$2,800</td></tr>
              <tr><td>Excavation and grading</td><td>1</td><td>lot</td><td>$1,200</td><td>$1,200</td></tr>
              <tr><td>Compacted gravel base (4&quot;)</td><td>12</td><td>tons</td><td>$45</td><td>$540</td></tr>
              <tr><td>Concrete (4,000 PSI ready-mix)</td><td>9.88</td><td>cu yd</td><td>$175</td><td>$1,729</td></tr>
              <tr><td>Rebar (#4, 18&quot; centers)</td><td>1</td><td>lot</td><td>$720</td><td>$720</td></tr>
              <tr><td>Form setting and removal</td><td>120</td><td>LF</td><td>$5</td><td>$600</td></tr>
              <tr><td>Concrete placement and finishing</td><td>800</td><td>sq ft</td><td>$3.50</td><td>$2,800</td></tr>
              <tr><td>Control joint cutting</td><td>160</td><td>LF</td><td>$2</td><td>$320</td></tr>
              <tr><td>Curing compound application</td><td>800</td><td>sq ft</td><td>$0.25</td><td>$200</td></tr>
              <tr><td>Site cleanup and disposal</td><td>1</td><td>lot</td><td>$450</td><td>$450</td></tr>
            </tbody>
            <tfoot>
              <tr className="border-t">
                <td colSpan={4} className="font-bold text-right py-2">Subtotal:</td>
                <td className="font-bold py-2">$11,359</td>
              </tr>
              <tr>
                <td colSpan={4} className="text-right py-1">Tax (if applicable):</td>
                <td className="py-1">$0</td>
              </tr>
              <tr>
                <td colSpan={4} className="text-right py-1">Less: Deposit received (03/01/2026):</td>
                <td className="py-1 text-red-600">-$3,786</td>
              </tr>
              <tr className="border-t-2">
                <td colSpan={4} className="font-bold text-right py-3 text-lg">AMOUNT DUE:</td>
                <td className="font-bold py-3 text-lg text-green-700">$7,573</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3>Payment Terms Section</h3>
        <div className="bg-slate-50 rounded-lg p-6 my-4">
          <p className="mb-2"><strong>Payment Due:</strong> Upon receipt / Net 15 / Net 30</p>
          <p className="mb-2"><strong>Accepted Methods:</strong> Check, credit card, Zelle, Venmo</p>
          <p className="mb-2"><strong>Make checks payable to:</strong> [Your Company Name]</p>
          <p className="mb-2"><strong>Late payment fee:</strong> 1.5% per month on overdue balances</p>
          <p className="mb-0"><strong>Questions?</strong> Contact [Name] at [Phone] or [Email]</p>
        </div>

        <h2>Progress Billing for Large Jobs</h2>
        <p>
          For jobs over $5,000, bill in stages rather than one lump sum at the end. This keeps your cash flow 
          healthy and reduces the risk of non-payment:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Milestone</th>
                <th className="text-left">% of Total</th>
                <th className="text-left">Amount</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Deposit (contract signing)</td><td>33%</td><td>$3,786</td><td className="text-green-600">✅ Paid 03/01</td></tr>
              <tr><td>Progress (day of pour)</td><td>33%</td><td>$3,786</td><td className="text-green-600">✅ Paid 03/08</td></tr>
              <tr><td>Final (completion + walkthrough)</td><td>34%</td><td>$3,787</td><td className="text-amber-600">⏳ Due 03/15</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Tips to Get Paid Faster</h2>

        <ol>
          <li>
            <strong>Invoice immediately.</strong> Don&apos;t wait until the weekend to send invoices. The moment 
            a milestone is complete, send the invoice. Every day you wait is a day you&apos;re not getting paid.
          </li>
          <li>
            <strong>Accept multiple payment methods.</strong> The easier you make it to pay, the faster you get 
            paid. Credit card, Zelle, Venmo, check — offer them all. Yes, credit cards cost 2.5-3%, but getting 
            paid today is worth more than waiting 30 days for a check.
          </li>
          <li>
            <strong>Do a completion walkthrough.</strong> Walk the finished job with the customer, point out the 
            quality, get them excited about their new concrete. Then hand them the final invoice. Happy customers 
            pay faster.
          </li>
          <li>
            <strong>Follow up at 7 and 14 days.</strong> A friendly &quot;Just checking in on invoice #INV-2026-042&quot; 
            text or email is enough. Most late payments are from forgetfulness, not malice.
          </li>
          <li>
            <strong>Offer a small discount for early payment.</strong> &quot;2% discount if paid within 10 days&quot; 
            (written as &quot;2/10 Net 30&quot;) motivates quick payment and is standard business practice.
          </li>
        </ol>

        <h2>Tax Considerations for Concrete Contractors</h2>
        <p>
          Sales tax on concrete work varies wildly by state:
        </p>
        <ul>
          <li><strong>Some states tax materials only</strong> — you charge tax on the concrete and rebar but not on labor</li>
          <li><strong>Some states tax the entire job</strong> — materials + labor are all taxable</li>
          <li><strong>Some states exempt construction services</strong> — no sales tax on any of it</li>
          <li><strong>Some states have contractor-specific tax rules</strong> — you pay tax on materials when you buy them, but don&apos;t charge the customer separately</li>
        </ul>
        <p>
          <strong>Talk to a CPA who specializes in construction.</strong> Getting sales tax wrong can result in 
          audits and penalties. It&apos;s one of the most common mistakes concrete contractors make.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Should I show a detailed breakdown or just a total?</h3>
        <p>
          <strong>Always show details.</strong> A $11,359 invoice with no breakdown invites pushback. A detailed 
          invoice shows the customer exactly where their money went. It also protects you in disputes — you can 
          point to exactly what was delivered.
        </p>

        <h3>What do I do if a customer won&apos;t pay?</h3>
        <p>
          1) Send a formal demand letter via certified mail. 2) File a mechanics lien on the property (time 
          limits vary by state — typically 60-90 days from completion). 3) Small claims court for amounts under 
          your state&apos;s limit ($5,000-25,000). 4) Collections agency as a last resort. The mechanics lien 
          is your most powerful tool — it puts a cloud on their property title.
        </p>

        <h3>How long should I keep invoice records?</h3>
        <p>
          <strong>Minimum 7 years</strong> for tax purposes. Digital records are fine — scan paper invoices and 
          store them in the cloud. You&apos;ll also need them for warranty claims and any disputes.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
          <h3 className="text-amber-900 mt-0">📋 Professional Invoice Templates</h3>
          <p className="text-amber-800">
            Our{" "}
            <Link href="/templates" className="text-amber-700 font-semibold hover:underline">
              Pro Template Pack
            </Link>{" "}
            includes branded invoice templates with automatic calculations, progress billing tracking, 
            and matching estimate and contract templates — everything you need to run a professional 
            concrete business.
          </p>
        </div>
      </article>
    </div>
  );
}
