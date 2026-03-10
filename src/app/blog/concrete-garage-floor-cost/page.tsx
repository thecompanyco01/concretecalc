import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concrete Garage Floor Cost Guide (2026) | EstimateConcrete",
  description: "A new concrete garage floor costs $4-$8 per square foot for plain concrete, or $8-$15 per square foot with epoxy coating. A standard 2-car garage (400-600 sq ft) runs $2,000-$5,000 for plain or $4,000-$9,000 with epoxy.",
  keywords: "concrete garage floor cost, garage floor cost, epoxy garage floor cost, concrete garage floor replacement, how much does a garage floor cost",
  alternates: {
    canonical: "https://estimateconcrete.com/blog/concrete-garage-floor-cost",
  },
};

const faqItems = [
  {
    question: "How much does a concrete garage floor cost?",
    answer:
      "A new concrete garage floor costs $4–$8 per square foot for plain concrete. A standard 2-car garage (400–600 sq ft) runs $2,000–$5,000. With epoxy coating, expect $8–$15 per square foot or $4,000–$9,000 total. Prices include site prep, forming, pouring, and finishing.",
  },
  {
    question: "How thick should a garage floor be?",
    answer:
      "Garage floors need a minimum of 4 inches of concrete, but 5–6 inches is recommended for vehicle loads. If you park heavy vehicles (trucks, RVs), go with 6 inches. The extra 2 inches adds about $1–$2 per square foot but dramatically increases load capacity and crack resistance.",
  },
  {
    question: "Is epoxy coating worth it for a garage floor?",
    answer:
      "Yes, for most homeowners. Professional epoxy coating ($5–$12/sq ft) protects against oil stains, salt damage, and wear while making the floor easy to clean. Professional jobs last 10–20 years. DIY kits ($200–$500) are cheaper but typically last only 2–5 years. The investment pays off in durability and home value.",
  },
  {
    question: "How much does it cost to replace a garage floor?",
    answer:
      "Replacing a garage floor costs $3,000–$8,000 for a 2-car garage. This includes old floor removal ($2–$6/sq ft or $1,000–$3,000), regrading the subbase, and pouring new concrete ($4–$8/sq ft). If the old floor is in decent shape, a concrete overlay ($3–$6/sq ft) may be a cheaper alternative.",
  },
];

export default function Article() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Concrete Garage Floor Cost Guide (2026)",
        description:
          "Complete guide to concrete garage floor costs in 2026. Covers plain concrete, epoxy coating, replacement costs, thickness requirements, and DIY vs professional.",
        author: {
          "@type": "Organization",
          name: "EstimateConcrete",
          url: "https://estimateconcrete.com",
        },
        publisher: {
          "@type": "Organization",
          name: "EstimateConcrete",
          url: "https://estimateconcrete.com",
        },
        datePublished: "2026-03-06",
        dateModified: "2026-03-10",
        mainEntityOfPage:
          "https://estimateconcrete.com/blog/concrete-garage-floor-cost",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-slate-700">Blog</Link>
        {" / "}
        <span className="text-slate-800 font-medium">Concrete Garage Floor Cost Guide</span>
      </nav>

      <article className="prose prose-slate max-w-none">
        <h1>How Much Does a Concrete Garage Floor Cost in 2026?</h1>
        <p className="lead text-lg text-slate-600">A new concrete garage floor costs $4-$8 per square foot for plain concrete, or $8-$15 per square foot with epoxy coating. A standard 2-car garage (400-600 sqft) runs $2,000-$5,000 for plain concrete or $4,000-$9,000 with epoxy.</p>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6 not-prose">
          <p className="text-sm text-blue-900">
            <strong>Quick link:</strong> Use our <Link href="/calculators/slab" className="text-blue-700 underline">free concrete calculator</Link> to
            get exact material quantities and cost estimates for your project.
          </p>
        </div>

        <h3>Cost by Garage Size</h3>
        <p>1-car garage (200-250 sqft): $1,000-$2,000 plain, $2,000-$3,750 with epoxy. 2-car garage (400-600 sqft): $2,000-$5,000 plain, $4,000-$9,000 with epoxy. 3-car garage (600-900 sqft): $3,000-$7,200 plain, $6,000-$13,500 with epoxy. These include removal of old floor if needed.</p>

        <h3>Thickness Requirements</h3>
        <p>Garage floors need minimum 4" thickness, but 5-6" is recommended for vehicle loads. If you park heavy vehicles (trucks, RVs), go 6". The extra 2" adds about $1-2/sqft but dramatically increases load capacity and crack resistance.</p>

        <h3>Old Floor Removal</h3>
        <p>Removing an existing garage floor costs $2-6/sqft. A 2-car garage (500 sqft) removal runs $1,000-$3,000. This includes breaking up the old slab, hauling debris, and regrading the subbase. If the old floor is in decent shape, an overlay ($3-6/sqft) may be cheaper.</p>

        <h3>Epoxy Coating Options</h3>
        <p>Basic epoxy: $3-5/sqft (solid color, 1-day cure). Decorative flake epoxy: $5-8/sqft (color flakes, more durable). Polyurea/polyaspartic: $7-12/sqft (same-day return to service, UV stable, premium). All epoxy systems require proper surface prep — grinding or shot blasting.</p>

        <h3>DIY vs. Professional</h3>
        <p>DIY garage floor kits: $200-500 for materials (epoxy kit from big box store). Results vary widely — surface prep is 90% of the job. Professional: $2,000-$6,000 for a 2-car garage with proper prep, primer, epoxy, and topcoat. Professional jobs last 10-20 years vs 2-5 for DIY.</p>

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

        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
