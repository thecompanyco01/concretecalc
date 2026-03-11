import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Concrete Calculators — Slabs, Driveways, Footings & More | EstimateConcrete",
  description:
    "12 free concrete calculators for contractors and homeowners. Calculate cubic yards, cost estimates, rebar, and material quantities for slabs, driveways, patios, footings, walls, stairs, and more.",
  keywords:
    "concrete calculator, concrete cost calculator, concrete slab calculator, concrete yardage calculator, free concrete calculator, concrete estimator",
  alternates: {
    canonical: "https://estimateconcrete.com/calculators",
  },
};

const calculators = [
  {
    name: "Concrete Slab Calculator",
    slug: "slab",
    description: "Calculate cubic yards, bags, rebar, and cost for any concrete slab — garage floors, sheds, patios, and foundations.",
    icon: "🧱",
    popular: true,
  },
  {
    name: "Driveway Cost Calculator",
    slug: "driveway",
    description: "Estimate material quantities and total cost for concrete driveways by size, thickness, and finish type.",
    icon: "🚗",
    popular: true,
  },
  {
    name: "Patio Cost Calculator",
    slug: "patio",
    description: "Calculate concrete needed for patios with options for broom finish, stamped, colored, and exposed aggregate.",
    icon: "🏡",
    popular: true,
  },
  {
    name: "Footing Calculator",
    slug: "footing",
    description: "Concrete volume and rebar for strip footings, pad footings, and pier footings. Includes frost depth reference.",
    icon: "🏗️",
    popular: true,
  },
  {
    name: "Rebar Calculator",
    slug: "rebar",
    description: "Calculate rebar quantities, spacing, and weight for any concrete project. Supports #3 through #8 bars.",
    icon: "📏",
    popular: false,
  },
  {
    name: "Sidewalk Calculator",
    slug: "sidewalk",
    description: "Material and cost estimates for concrete sidewalks and walkways by length, width, and thickness.",
    icon: "🚶",
    popular: false,
  },
  {
    name: "Stairs Calculator",
    slug: "stairs",
    description: "Concrete volume for stairs and steps — by rise, run, width, and number of steps. Includes riser/tread dimensions.",
    icon: "🪜",
    popular: false,
  },
  {
    name: "Concrete Block Calculator",
    slug: "block",
    description: "Estimate CMU blocks, mortar bags, and fill concrete needed for block walls by dimensions.",
    icon: "🧱",
    popular: false,
  },
  {
    name: "Concrete Wall Calculator",
    slug: "wall",
    description: "Poured concrete volume for walls and foundations. Calculate cubic yards by length, height, and thickness.",
    icon: "🏢",
    popular: false,
  },
  {
    name: "Curb & Gutter Calculator",
    slug: "curb",
    description: "Concrete volume for curbs and gutters by linear footage, profile dimensions, and style.",
    icon: "🛣️",
    popular: false,
  },
  {
    name: "Column Calculator",
    slug: "column",
    description: "Concrete needed for round and square columns/pillars. Calculate volume by diameter/width and height.",
    icon: "🏛️",
    popular: false,
  },
  {
    name: "Stamped Concrete Calculator",
    slug: "stamped",
    description: "Estimate total cost for stamped concrete including materials, color, release agent, and sealer.",
    icon: "🎨",
    popular: false,
  },
];

export default function CalculatorsIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Concrete Calculators",
    description: "12 free concrete calculators for contractors and homeowners.",
    url: "https://estimateconcrete.com/calculators",
    mainEntity: calculators.map((calc) => ({
      "@type": "SoftwareApplication",
      name: calc.name,
      applicationCategory: "Calculator",
      url: `https://estimateconcrete.com/calculators/${calc.slug}`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  };

  const popular = calculators.filter((c) => c.popular);
  const others = calculators.filter((c) => !c.popular);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center mb-12">
        <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">
          Free Tools
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Concrete Calculators
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Calculate cubic yards, material quantities, rebar, and cost estimates for any concrete
          project. Free, instant results — no signup required.
        </p>
      </div>

      {/* Popular Calculators */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">Most Popular</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {popular.map((calc) => (
          <Link
            key={calc.slug}
            href={`/calculators/${calc.slug}`}
            className="group bg-white border-2 border-blue-100 hover:border-blue-300 rounded-xl p-6 transition"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{calc.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {calc.name}
                </h3>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  {calc.description}
                </p>
                <span className="inline-block mt-3 text-blue-700 text-sm font-semibold">
                  Open Calculator →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* All Other Calculators */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">All Calculators</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {others.map((calc) => (
          <Link
            key={calc.slug}
            href={`/calculators/${calc.slug}`}
            className="group bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-5 transition"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{calc.icon}</span>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {calc.name}
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  {calc.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Need Professional Estimate Templates?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-6">
          Our Pro templates auto-calculate material, labor, overhead, and profit margins.
          Generate professional bids in under 2 minutes.
        </p>
        <Link
          href="/templates"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition"
        >
          Get Pro Estimate Templates — $49
        </Link>
      </div>
    </div>
  );
}
