import Link from "next/link";
import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Pro Concrete Templates — Estimate Sheets, Bid Templates & Business Tools | EstimateConcrete",
  description:
    "Professional concrete estimate templates, bid sheets, pricing calculators, and business starter kits. Built for concrete contractors. Download instantly.",
  keywords:
    "concrete estimate template, concrete bid template, concrete invoice template, concrete business starter kit",
};

const products = [
  {
    name: "Concrete Bid Calculator",
    price: "$29",
    description:
      "Turn any project dimensions into a competitive bid in under 2 minutes. Factors in material, labor, equipment, overhead, and your target margin.",
    features: [
      "Instant bid generation from dimensions",
      "Customizable labor & material rates",
      "Overhead & profit margin controls",
      "Regional rate reference sheet",
      "Works in Excel & Google Sheets",
    ],
    whatYouGet: "1 Excel file • 7 sheets with auto-formulas • Instant download",
    popular: false,
    href: "https://buy.stripe.com/00wcN673p8ZTb2jgafaMU03",
    cta: "Buy Now — $29",
  },
  {
    name: "Estimate Template Pack",
    price: "$49",
    description:
      "Professional estimate sheets for slabs, driveways, patios, footings, and stamped concrete. Auto-calculates material, labor, and profit margins.",
    features: [
      "5 project-specific estimate templates",
      "Auto-calculated material & labor costs",
      "Built-in profit margin calculator (15-40%)",
      "Professional print-ready layout",
      "Editable in Excel or Google Sheets",
      "Company branding section",
    ],
    whatYouGet: "5 Excel templates • Auto-calculated costs • Print-ready layouts",
    popular: true,
    href: "https://buy.stripe.com/6oUdRadrNdg91rJ3ntaMU00",
    cta: "Buy Now — $49",
  },
  {
    name: "Invoice Template",
    price: "$19",
    description:
      "Professional concrete invoice with auto-calculating line items, tax, and totals. Includes payment tracker sheet to manage all your outstanding invoices.",
    features: [
      "Auto-calculated line items & totals",
      "Tax rate & payment credits fields",
      "Payment tracker sheet (30 invoices)",
      "Status tracking (Sent, Paid, Overdue)",
      "Payment terms & late fee clauses",
      "Print-ready professional layout",
    ],
    whatYouGet: "1 Excel file • Invoice + payment tracker • Auto-calculations",
    popular: false,
    href: "https://buy.stripe.com/28EdRa2N9a3X6M31flaMU07",
    cta: "Buy Now — $19",
  },
  {
    name: "Business Starter Kit",
    price: "$297",
    description:
      "Everything you need to start and run a concrete business. 6-chapter guide, contracts, SOPs, marketing playbook, pricing matrix, and more.",
    features: [
      "Complete 6-chapter business guide",
      "Client contract template",
      "Invoice template included",
      "Standard operating procedures (SOPs)",
      "90-day marketing plan",
      "Pricing matrix by project type & region",
      "Equipment buying guide with costs",
      "Pro bid calculator included",
      "All 5 estimate templates included",
    ],
    whatYouGet: "15 templates + 6-chapter guide • Everything in one bundle",
    popular: false,
    href: "https://buy.stripe.com/8x2cN6afBdg9c6ne27aMU01",
    cta: "Buy Now — $297",
  },
];

export default function Templates() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">
          Professional Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Pro Templates for Concrete Contractors
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Stop building estimates from scratch. These templates are built by concrete
          pros and designed to save you hours on every bid.
        </p>
      </div>

      {/* Free Sample Lead Magnet */}
      <div className="mb-10">
        <EmailCapture source="templates-page" variant="prominent" />
      </div>

      {/* Complete Contractor Toolkit Bundle */}
      {/* TODO: Create Stripe product for the $149 bundle — need Fabian to set this up */}
      <div className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <span className="bg-green-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
            Best Value
          </span>
        </div>
        <div className="md:flex md:items-center md:gap-10">
          <div className="flex-grow mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              🧰 Complete Contractor Toolkit
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed max-w-xl">
              Everything a concrete contractor needs in one bundle. Stop buying tools one at a time — get the whole shop.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
              {[
                "5 Estimate Templates (Driveway, Slab, Patio, Foundation, Stamped)",
                "Pro Bid Calculator",
                "Invoice Template with Payment Tracker",
                "Pricing Matrix by Project Type & Region",
                "Client Contract Template",
                "Standard Operating Procedures (SOPs)",
                "90-Day Marketing Plan",
                "Equipment Buying Guide",
                "6-Chapter Business Guide",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center flex-shrink-0 md:min-w-[200px]">
            <div className="text-slate-400 text-sm line-through mb-1">$424 if bought separately</div>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-5xl font-extrabold text-slate-900">$297</span>
              <span className="text-slate-400 text-sm">one-time</span>
            </div>
            <div className="text-green-700 font-bold text-sm mb-4">Save 30% — over $125 off</div>
            <a
              href="https://buy.stripe.com/8x2cN6afBdg9c6ne27aMU01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-green-600 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-green-700 transition shadow-md text-lg"
            >
              Get The Complete Toolkit →
            </a>
            <p className="text-xs text-slate-500 mt-2">Instant download • 30-day guarantee</p>
          </div>
        </div>
      </div>

      {/* Template Preview Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
          See What You&apos;re Getting
        </h2>
        <p className="text-slate-500 text-center mb-6">
          Real previews of the actual templates — populated with sample data
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { src: "/previews/bid-calculator-preview.png", label: "Pro Bid Calculator" },
            { src: "/previews/estimate-driveway-preview.png", label: "Driveway Estimate" },
            { src: "/previews/estimate-slab-preview.png", label: "Slab Estimate" },
            { src: "/previews/estimate-patio-preview.png", label: "Stamped Patio Estimate" },
            { src: "/previews/contract-preview.png", label: "Contract Template" },
            { src: "/previews/pricing-matrix-preview.png", label: "Pricing Matrix" },
          ].map((preview) => (
            <div key={preview.label} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={preview.src}
                alt={`${preview.label} preview`}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="p-3 text-center">
                <span className="text-sm font-semibold text-slate-700">{preview.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.name}
            className={`bg-white border rounded-xl p-6 flex flex-col ${
              product.popular
                ? "border-blue-200 ring-1 ring-blue-100 shadow-md"
                : "border-slate-200"
            }`}
          >
            {product.popular && (
              <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                MOST POPULAR
              </span>
            )}
            <h2 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h2>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-slate-900">{product.price}</span>
              <span className="text-slate-400 text-sm">one-time</span>
            </div>
            <p className="text-slate-500 text-sm mb-5 flex-grow leading-relaxed">
              {product.description}
            </p>
            <ul className="space-y-2 mb-6">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <span className="text-blue-600 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
            {/* What you'll get — trust reinforcement */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mb-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                What you&apos;ll get
              </p>
              <p className="text-sm text-slate-700">{product.whatYouGet}</p>
            </div>
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                product.popular
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {product.cta || "Buy Now"}
            </a>
            <p className="text-xs text-slate-400 text-center mt-2">
              Instant download • 30-day money-back guarantee
            </p>
          </div>
        ))}
      </div>

      {/* Pro Membership */}
      <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl p-8 md:p-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              RECURRING
            </span>
            <h2 className="text-2xl font-bold mt-3 mb-2">EstimateConcrete Pro Membership</h2>
            <p className="text-blue-200 leading-relaxed max-w-lg">
              Monthly access to updated regional pricing data, all templates included, pro calculator features, and benchmarks showing what contractors in your area charge.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-blue-100">
              <li>✓ Updated pricing data by ZIP code (monthly refresh)</li>
              <li>✓ All estimate templates included</li>
              <li>✓ Pro bid calculator with PDF export</li>
              <li>✓ Regional benchmark data</li>
              <li>✓ New templates every month</li>
              <li>✓ Cancel anytime</li>
            </ul>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <div className="text-4xl font-extrabold">$29<span className="text-lg font-normal text-blue-200">/mo</span></div>
            <a
              href="https://buy.stripe.com/00w4gA2N9b815HZbTZaMU02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
            >
              Subscribe Now →
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-lg">🔒</span>
          <span>Secure Stripe Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 text-lg">⚡</span>
          <span>Instant Download</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-amber-600 text-lg">✅</span>
          <span>Works in Excel &amp; Google Sheets</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-600 text-lg">🔄</span>
          <span>30-Day Money-Back Guarantee</span>
        </div>
      </div>

      {/* What You're Getting — Fact Bar */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "📊", label: "15 Excel Templates" },
          { icon: "📱", label: "Works in Google Sheets" },
          { icon: "⚡", label: "Instant Download" },
          { icon: "🛡️", label: "30-Day Money-Back Guarantee" },
        ].map((fact) => (
          <div
            key={fact.label}
            className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center"
          >
            <div className="text-2xl mb-1">{fact.icon}</div>
            <span className="text-sm font-semibold text-slate-700">{fact.label}</span>
          </div>
        ))}
      </div>

      {/* Why Contractors Trust EstimateConcrete */}
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
          Why Contractors Trust EstimateConcrete
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {[
            "208 pages of free concrete guides and calculators",
            "9 interactive calculators — try them free before buying",
            "15 professionally built Excel templates with real formulas",
            "50 state-specific licensing and cost guides",
            "30-day money-back guarantee — no questions asked",
            "Built specifically for concrete contractors, not generic business tools",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="text-green-600 flex-shrink-0 mt-0.5">✓</span>
              <span className="text-slate-700 leading-relaxed">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Free Sample CTA */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Not sure yet? Try before you buy.
        </h3>
        <p className="text-slate-600 max-w-lg mx-auto mb-5 leading-relaxed">
          Download a free bid calculator sample and see the quality for yourself —
          no credit card required.
        </p>
        <div className="max-w-md mx-auto">
          <EmailCapture source="templates-free-sample" variant="prominent" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 text-center mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">What format are the templates in?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">All templates are Excel (.xlsx) files that also work perfectly in Google Sheets. No special software needed — if you can open a spreadsheet, you can use these.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Can I customize the templates with my company name?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Yes. Every template has a company branding section at the top where you add your logo, business name, phone number, and license info. Your bids will look 100% professional and branded to your company.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">What if it&rsquo;s not what I expected?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">We offer a full 30-day money-back guarantee, no questions asked. If the templates don&rsquo;t save you time on your next bid, email us and we&rsquo;ll refund you immediately.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">How is this different from free templates online?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Free templates are generic — built for &ldquo;any contractor.&rdquo; Ours are built specifically for concrete work with pre-loaded formulas for yardage, rebar spacing, labor rates by task (forming, pouring, finishing), and real margin calculations. They&rsquo;re the difference between a blank spreadsheet and a tool that does the math for you.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Do I get updates?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">One-time purchases include the current version. Pro Members ($29/mo) get monthly updates with fresh regional pricing data, new templates, and benchmark reports.</p>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">🛡️</div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">30-Day Money-Back Guarantee</h2>
        <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
          Try any template risk-free. If it doesn&rsquo;t save you time and help you win more bids, email us within 30 days for a full refund. No questions, no hassle.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Need a Custom Solution?</h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
          Custom templates, pricing tools, or business documents tailored to your
          specific concrete operation.
        </p>
        <p className="text-slate-500 text-sm">
          Email us at <span className="text-amber-400">hello@estimateconcrete.com</span>
        </p>
      </div>
    </div>
  );
}
