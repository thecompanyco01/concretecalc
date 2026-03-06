import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pro Concrete Templates — Estimate Sheets, Bid Templates & Business Tools",
  description:
    "Professional concrete estimate templates, bid sheets, pricing calculators, and business starter kits. Built specifically for concrete contractors. Download instantly.",
  keywords:
    "concrete estimate template, concrete bid template, concrete invoice template, concrete business starter kit, concrete pricing guide",
};

const products = [
  {
    name: "Concrete Estimate Template Pack",
    price: "$49",
    description:
      "Professional estimate sheets for slabs, driveways, patios, footings, and stamped concrete. Auto-calculates material, labor, and profit margins. Hand these to clients with confidence.",
    features: [
      "5 project-specific estimate templates",
      "Auto-calculated material & labor costs",
      "Built-in profit margin calculator (15-40%)",
      "Professional PDF output",
      "Editable in Excel or Google Sheets",
    ],
    popular: true,
    href: "#", // Stripe link goes here
  },
  {
    name: "Concrete Business Starter Kit",
    price: "$297",
    oldPrice: "$497",
    description:
      "Everything you need to start and run a concrete business. Business plan, contracts, SOPs, marketing playbook, pricing matrix, insurance checklist, and more.",
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
    href: "#",
  },
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
    href: "#",
  },
];

export default function Templates() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Pro Templates for Concrete Contractors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Stop building estimates from scratch. Our templates are built by
          concrete pros and designed to save you hours on every bid.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className={`bg-white border rounded-xl p-6 flex flex-col ${
              product.popular
                ? "border-orange-400 ring-2 ring-orange-200"
                : "border-gray-200"
            }`}
          >
            {product.popular && (
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                MOST POPULAR
              </span>
            )}
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-extrabold text-orange-600">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>
              )}
              <span className="text-gray-500 text-sm">one-time</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {product.description}
            </p>
            <ul className="space-y-2 mb-6">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={product.href}
              className={`block w-full text-center py-3 rounded-lg font-bold transition ${
                product.popular
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              Coming Soon
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Need a Custom Solution?</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          If you need custom templates, pricing tools, or business documents
          tailored to your specific concrete operation, let us know.
        </p>
        <p className="text-gray-500 text-sm">
          Email us at{" "}
          <span className="text-orange-400">hello@concretecalc.com</span>
        </p>
      </div>
    </div>
  );
}
