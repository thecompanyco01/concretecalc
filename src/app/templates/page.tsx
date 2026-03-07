import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Concrete Templates — Estimate Sheets, Bid Templates & Business Tools | ConcreteCalc",
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
      "Competitive analysis price ranges",
      "Works in Excel & Google Sheets",
    ],
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
      "Professional PDF output",
      "Editable in Excel or Google Sheets",
      "Company branding section",
    ],
    popular: true,
    href: "https://buy.stripe.com/6oUdRadrNdg91rJ3ntaMU00",
    cta: "Buy Now — $49",
  },
  {
    name: "Business Starter Kit",
    price: "$297",
    oldPrice: "$497",
    description:
      "Everything you need to start and run a concrete business. Business plan, contracts, SOPs, marketing playbook, pricing matrix, and more.",
    features: [
      "Complete business plan template",
      "5 client contract templates",
      "Standard operating procedures (SOPs)",
      "Marketing playbook for local SEO",
      "Pricing matrix by project type & region",
      "Insurance & licensing checklist by state",
      "Equipment buying guide",
      "30-60-90 day launch plan",
    ],
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

      <div className="grid md:grid-cols-3 gap-5">
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
              {product.oldPrice && (
                <span className="text-slate-400 line-through text-lg">{product.oldPrice}</span>
              )}
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
            <h2 className="text-2xl font-bold mt-3 mb-2">ConcreteCalc Pro Membership</h2>
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

      {/* Guarantee */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-5 py-2 text-sm text-slate-600">
          <span>🔒</span>
          <span>30-day money-back guarantee on all products</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Need a Custom Solution?</h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
          Custom templates, pricing tools, or business documents tailored to your
          specific concrete operation.
        </p>
        <p className="text-slate-500 text-sm">
          Email us at <span className="text-amber-400">hello@concretecalc.com</span>
        </p>
      </div>
    </div>
  );
}
