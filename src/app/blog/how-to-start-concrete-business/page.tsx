import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Start a Concrete Business in 2026: Step-by-Step Guide",
  description:
    "Complete guide to starting a concrete contracting business. Covers licensing in all 50 states, equipment costs ($20K–$120K), insurance, pricing strategy, finding customers, and realistic first-year financials.",
  keywords:
    "how to start a concrete business, how to start concrete business, start a concrete business, starting a concrete business, concrete business startup costs, concrete contractor business plan",
  alternates: {
    canonical: "https://estimateconcrete.com/blog/how-to-start-concrete-business",
  },
};

const faqItems = [
  {
    question: "How much does it cost to start a concrete business?",
    answer:
      "Startup costs range from $20,000–$35,000 (bare minimum with used equipment) to $75,000–$120,000 (well-equipped). The biggest expenses are a work truck ($15,000–$65,000), tools ($2,000–$4,000), insurance ($6,000–$15,000/year), and licensing fees ($50–$1,000+ depending on your state).",
  },
  {
    question: "Do I need a license to start a concrete business?",
    answer:
      "It depends on your state. States like California, Arizona, and Florida require a state contractor's license with exams and experience proof. Others like Texas only require local city/county permits. Some states just need a general business license. Check our state-specific guides below for exact requirements.",
  },
  {
    question: "How much can a concrete business make in the first year?",
    answer:
      "A solo operator doing residential flatwork can realistically gross $80,000–$120,000 in year one (conservative) to $225,000–$335,000 (moderate). Net profit margins for concrete work are typically 15–25%, so first-year take-home ranges from $12,000–$67,000 depending on volume and pricing.",
  },
  {
    question: "What equipment do I need to start a concrete business?",
    answer:
      "Essential day-one equipment: work truck (3/4 or 1 ton), utility trailer, hand tools (trowels, floats, edgers, groovers), concrete vibrator, laser level, wheelbarrows, concrete saw, and form lumber. You can rent power trowels and skid steers until revenue justifies buying them.",
  },
  {
    question: "How long does it take to start a concrete business?",
    answer:
      "If you already have concrete experience, you can set up the business side (LLC, insurance, licensing, equipment) in 4–8 weeks. If you need experience first, plan on 1–2 years working for an established contractor before going out on your own.",
  },
  {
    question: "Do I need experience before starting a concrete business?",
    answer:
      "Yes — this is the most important step. Concrete is unforgiving; once it's poured, you can't undo mistakes. Work for an established concrete company for at least 1–2 years to learn forming, pouring, finishing, estimating, and job management before starting your own business.",
  },
];

const stateLinks = [
  { name: "Alabama", slug: "alabama" },
  { name: "Alaska", slug: "alaska" },
  { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" },
  { name: "California", slug: "california" },
  { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" },
  { name: "Delaware", slug: "delaware" },
  { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" },
  { name: "Hawaii", slug: "hawaii" },
  { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" },
  { name: "Indiana", slug: "indiana" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Kentucky", slug: "kentucky" },
  { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" },
  { name: "Maryland", slug: "maryland" },
  { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" },
  { name: "Minnesota", slug: "minnesota" },
  { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" },
  { name: "Montana", slug: "montana" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" },
  { name: "New Hampshire", slug: "new-hampshire" },
  { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" },
  { name: "New York", slug: "new-york" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" },
  { name: "Ohio", slug: "ohio" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" },
  { name: "Pennsylvania", slug: "pennsylvania" },
  { name: "Rhode Island", slug: "rhode-island" },
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
];

export default function HowToStartConcreteBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "How to Start a Concrete Business in 2026: Step-by-Step Guide",
        description:
          "Complete guide to starting a concrete contracting business. Covers licensing, equipment costs, insurance, pricing strategy, finding customers, and realistic first-year financials.",
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
          "https://estimateconcrete.com/blog/how-to-start-concrete-business",
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-orange-600">
          Blog
        </Link>{" "}
        /{" "}
        <span className="text-gray-900 font-medium">
          How to Start a Concrete Business
        </span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>How to Start a Concrete Business in 2026: The Complete Guide</h1>

        <p className="lead text-xl text-gray-600">
          Concrete is a $65+ billion industry in the US, and it&apos;s one of the
          best trades to start a business in. Demand is steady, barriers to entry
          are manageable, and profit margins of 15–25% are achievable even in your
          first year. This guide covers everything you need to go from zero to
          pouring concrete professionally.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
            In This Guide
          </p>
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            <li>
              <a href="#why" className="text-blue-700 hover:underline">
                Why Start a Concrete Business?
              </a>
            </li>
            <li>
              <a href="#step-1" className="text-blue-700 hover:underline">
                Step 1: Get Experience First
              </a>
            </li>
            <li>
              <a href="#step-2" className="text-blue-700 hover:underline">
                Step 2: Licensing &amp; Legal Setup
              </a>
            </li>
            <li>
              <a href="#step-3" className="text-blue-700 hover:underline">
                Step 3: Insurance
              </a>
            </li>
            <li>
              <a href="#step-4" className="text-blue-700 hover:underline">
                Step 4: Equipment &amp; Startup Costs
              </a>
            </li>
            <li>
              <a href="#step-5" className="text-blue-700 hover:underline">
                Step 5: Pricing Your Work
              </a>
            </li>
            <li>
              <a href="#step-6" className="text-blue-700 hover:underline">
                Step 6: Finding First Customers
              </a>
            </li>
            <li>
              <a href="#step-7" className="text-blue-700 hover:underline">
                Step 7: Common Mistakes to Avoid
              </a>
            </li>
            <li>
              <a href="#financials" className="text-blue-700 hover:underline">
                Realistic First-Year Financials
              </a>
            </li>
            <li>
              <a href="#business-plan" className="text-blue-700 hover:underline">
                Business Plan Template
              </a>
            </li>
            <li>
              <a href="#growth" className="text-blue-700 hover:underline">
                Growing Beyond Year One
              </a>
            </li>
            <li>
              <a href="#state-guides" className="text-blue-700 hover:underline">
                State-by-State Guides
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-700 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#resources" className="text-blue-700 hover:underline">
                Free Resources
              </a>
            </li>
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">📐 Tools for Your New Business</p>
          <p className="text-orange-700 text-sm mb-3">
            Start estimating jobs from day one with our free{" "}
            <Link href="/calculators/slab" className="underline font-semibold">
              Concrete Slab Calculator
            </Link>{" "}
            and professional{" "}
            <Link href="/templates" className="underline font-semibold">
              Estimate Templates
            </Link>
            .
          </p>
        </div>

        <h2 id="why">Why Start a Concrete Business?</h2>
        <p>
          Before we get into the how, let&apos;s talk about why concrete is a good
          business to start:
        </p>
        <ul>
          <li>
            <strong>Consistent demand.</strong> People always need driveways,
            patios, foundations, and sidewalks. Concrete work is
            recession-resistant because it&apos;s often necessary, not optional.
          </li>
          <li>
            <strong>High barriers protect you.</strong> Once you&apos;re
            established, the skill level and equipment requirements keep casual
            competitors out. This isn&apos;t like starting a lawn care business
            where anyone with a mower can compete.
          </li>
          <li>
            <strong>Good margins.</strong> Experienced concrete contractors net
            15–25% profit on most residential jobs. Some decorative and specialty
            work commands even higher margins.
          </li>
          <li>
            <strong>Scalable.</strong> You can start as a one-person operation
            doing flatwork and grow to a multi-crew company handling foundations,
            commercial, and decorative work.
          </li>
          <li>
            <strong>Cash flow friendly.</strong> Most concrete jobs are completed
            in 1–3 days, with payment due upon completion or net-30. You&apos;re
            not waiting months to get paid like in some construction niches.
          </li>
        </ul>

        <h2 id="step-1">Step 1: Get Experience First</h2>
        <p>
          This is the step most people want to skip, and it&apos;s the most
          important one.{" "}
          <strong>
            Do not start a concrete business without hands-on experience.
          </strong>{" "}
          Here&apos;s why:
        </p>
        <ul>
          <li>
            Concrete is unforgiving. Once it&apos;s poured, you can&apos;t undo
            it. Mistakes cost thousands.
          </li>
          <li>
            Finishing techniques take months to learn. Timing is everything — you
            need to feel when the concrete is ready to trowel.
          </li>
          <li>
            Weather, mix design, and site conditions all affect the pour.
            Experience teaches you how to adapt.
          </li>
        </ul>
        <p>
          <strong>Minimum recommendation:</strong> Work for an established
          concrete company for at least 1–2 years. You&apos;ll learn forming,
          pouring, finishing, estimating, and job management. Plus you&apos;ll see
          how a concrete business operates day to day — the scheduling, supplier
          relationships, customer interactions, and crew management.
        </p>
        <p>
          If you already have experience, great — skip ahead to licensing.
        </p>

        <h2 id="step-2">Step 2: Licensing and Legal Setup</h2>
        <p>Requirements vary by state, but here&apos;s a general checklist:</p>

        <h3>Business Structure</h3>
        <ul>
          <li>
            <strong>LLC</strong> is the most common choice for concrete
            contractors. It protects your personal assets if something goes wrong
            on a job. Costs $50–$500 to file depending on your state.
          </li>
          <li>
            Get an{" "}
            <strong>EIN (Employer Identification Number)</strong> from the IRS —
            it&apos;s free and takes 5 minutes online.
          </li>
          <li>
            Open a <strong>business bank account</strong>. Keep business and
            personal finances separate from day one. This makes taxes easier and
            protects your LLC status.
          </li>
        </ul>

        <h3>Contractor&apos;s License</h3>
        <p>Licensing requirements vary dramatically by state:</p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Requirement Level
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Example States
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  What&apos;s Needed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">State license required</td>
                <td className="px-4 py-2">
                  <Link href="/blog/start-concrete-business-california" className="text-blue-700 hover:underline">CA</Link>,{" "}
                  <Link href="/blog/start-concrete-business-arizona" className="text-blue-700 hover:underline">AZ</Link>,{" "}
                  <Link href="/blog/start-concrete-business-florida" className="text-blue-700 hover:underline">FL</Link>,{" "}
                  <Link href="/blog/start-concrete-business-nevada" className="text-blue-700 hover:underline">NV</Link>,{" "}
                  <Link href="/blog/start-concrete-business-oregon" className="text-blue-700 hover:underline">OR</Link>,{" "}
                  <Link href="/blog/start-concrete-business-utah" className="text-blue-700 hover:underline">UT</Link>
                </td>
                <td className="px-4 py-2">
                  Exam, experience proof, bond, insurance. $200–$1,000+ in fees.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Registration only</td>
                <td className="px-4 py-2">
                  <Link href="/blog/start-concrete-business-washington" className="text-blue-700 hover:underline">WA</Link>,{" "}
                  <Link href="/blog/start-concrete-business-pennsylvania" className="text-blue-700 hover:underline">PA</Link>,{" "}
                  <Link href="/blog/start-concrete-business-new-jersey" className="text-blue-700 hover:underline">NJ</Link>,{" "}
                  <Link href="/blog/start-concrete-business-connecticut" className="text-blue-700 hover:underline">CT</Link>
                </td>
                <td className="px-4 py-2">
                  Register with the state, provide insurance proof. $100–$300.
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Local permits only</td>
                <td className="px-4 py-2">
                  <Link href="/blog/start-concrete-business-texas" className="text-blue-700 hover:underline">TX</Link>,{" "}
                  <Link href="/blog/start-concrete-business-missouri" className="text-blue-700 hover:underline">MO</Link>,{" "}
                  <Link href="/blog/start-concrete-business-kansas" className="text-blue-700 hover:underline">KS</Link>,{" "}
                  <Link href="/blog/start-concrete-business-colorado" className="text-blue-700 hover:underline">CO</Link> (varies by city)
                </td>
                <td className="px-4 py-2">
                  Business license from city/county. May need trade permit.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Minimal requirements</td>
                <td className="px-4 py-2">Some rural areas</td>
                <td className="px-4 py-2">General business license only.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Find your state&apos;s exact requirements:</strong> We have
          detailed licensing and startup guides for all 50 states —{" "}
          <a href="#state-guides" className="text-blue-700">
            see the full list below
          </a>
          .
        </p>

        <h2 id="step-3">Step 3: Insurance — Non-Negotiable</h2>
        <p>
          You <strong>cannot</strong> run a concrete business without proper
          insurance. One cracked foundation or injured worker can bankrupt you.
          Read our full{" "}
          <Link href="/blog/concrete-business-insurance">
            concrete business insurance guide
          </Link>{" "}
          for details.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Insurance Type
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Annual Cost
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Why You Need It
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">General Liability ($1M/$2M)</td>
                <td className="px-4 py-2">$1,500–$4,000</td>
                <td className="px-4 py-2">
                  Covers property damage, third-party injuries. Required by most
                  clients.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Workers Compensation</td>
                <td className="px-4 py-2">$3,000–$8,000+</td>
                <td className="px-4 py-2">
                  Required in most states if you have employees. Covers job
                  injuries.
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Commercial Auto</td>
                <td className="px-4 py-2">$1,200–$3,000</td>
                <td className="px-4 py-2">
                  Covers your work truck(s) and trailers.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Inland Marine / Tools</td>
                <td className="px-4 py-2">$300–$800</td>
                <td className="px-4 py-2">
                  Covers tools and equipment theft or damage.
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Surety Bond</td>
                <td className="px-4 py-2">$100–$500</td>
                <td className="px-4 py-2">
                  Required in some states for licensing. Protects clients.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Year 1 insurance budget:</strong> $6,000–$15,000 depending on
          your state, crew size, and coverage levels. Get quotes from at least
          three insurance brokers who specialize in construction/contracting.
        </p>

        <h2 id="step-4">Step 4: Equipment and Startup Costs</h2>
        <p>
          Here&apos;s what you actually need to start, broken down by &quot;must
          have day one&quot; vs. &quot;buy when you can afford it.&quot; For a
          deep dive, read our{" "}
          <Link href="/blog/concrete-equipment-list">
            complete concrete equipment guide
          </Link>
          .
        </p>

        <h3>Essential Equipment (Day One)</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Item</th>
                <th className="text-left px-4 py-2 font-semibold">New Cost</th>
                <th className="text-left px-4 py-2 font-semibold">Used Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Work truck (3/4 ton or 1 ton)</td>
                <td className="px-4 py-2">$40,000–$65,000</td>
                <td className="px-4 py-2">$15,000–$30,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Utility trailer (16–20 ft)</td>
                <td className="px-4 py-2">$3,000–$6,000</td>
                <td className="px-4 py-2">$1,500–$3,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Hand tools (full set)</td>
                <td className="px-4 py-2">$2,000–$4,000</td>
                <td className="px-4 py-2">$800–$2,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">
                  Bull float, fresno, edgers, groovers
                </td>
                <td className="px-4 py-2">$500–$1,200</td>
                <td className="px-4 py-2">$200–$600</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Concrete vibrator</td>
                <td className="px-4 py-2">$200–$600</td>
                <td className="px-4 py-2">$100–$300</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Laser level</td>
                <td className="px-4 py-2">$300–$800</td>
                <td className="px-4 py-2">$150–$400</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Wheelbarrows (2–3)</td>
                <td className="px-4 py-2">$300–$600</td>
                <td className="px-4 py-2">$100–$300</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Concrete saw</td>
                <td className="px-4 py-2">$500–$1,500</td>
                <td className="px-4 py-2">$250–$750</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Form lumber, stakes, misc</td>
                <td className="px-4 py-2">$500–$1,000</td>
                <td className="px-4 py-2">$500–$1,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Buy Later (As Revenue Allows)</h3>
        <ul>
          <li>
            <strong>Power trowel (walk-behind):</strong> $2,000–$5,000 new. Rent
            at $75–$150/day until you can buy one.
          </li>
          <li>
            <strong>Skid steer / Bobcat:</strong> $25,000–$60,000 new,
            $10,000–$25,000 used. Rent at $250–$400/day for site prep until
            volume justifies buying.
          </li>
          <li>
            <strong>Stamping tools:</strong> $2,000–$5,000 for a full set. Only
            buy when you&apos;re ready to offer decorative work.
          </li>
          <li>
            <strong>Dump trailer:</strong> $6,000–$12,000. Useful for hauling
            gravel and debris once you&apos;re doing 3+ jobs per week.
          </li>
        </ul>

        <h3>Total Startup Cost Summary</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Startup Level
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Total Investment
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  What It Gets You
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Bare minimum (used everything)</td>
                <td className="px-4 py-2">$20,000–$35,000</td>
                <td className="px-4 py-2">
                  Used truck, basic tools, insurance, licenses. Can do flatwork.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Solid start (mix of new/used)</td>
                <td className="px-4 py-2">$40,000–$65,000</td>
                <td className="px-4 py-2">
                  Reliable truck, good tools, trailer, some rentals. Can handle
                  most residential.
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Well-equipped</td>
                <td className="px-4 py-2">$75,000–$120,000</td>
                <td className="px-4 py-2">
                  New truck, full tool set, skid steer, stamping tools. Ready for
                  any residential job.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="step-5">Step 5: Pricing Your Work</h2>
        <p>
          Pricing is where most new concrete businesses fail. They price too low
          to win work and end up losing money. Here&apos;s the formula:
        </p>

        <div className="bg-gray-900 text-white rounded-lg p-6 not-prose my-6 text-center">
          <p className="text-lg font-mono">
            <strong>Job Price</strong> = (Material + Labor + Equipment + Overhead)
            × (1 + Profit Margin)
          </p>
        </div>

        <p>
          For a detailed walkthrough with real numbers, read our{" "}
          <Link href="/blog/how-to-bid-concrete-jobs">
            complete guide to bidding concrete jobs
          </Link>{" "}
          and our{" "}
          <Link href="/blog/how-to-price-concrete-work">
            concrete pricing guide
          </Link>
          .
        </p>

        <p>
          Here are ballpark installed prices for common residential work in 2026:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">
                  Project Type
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Installed Price ($/sq ft)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Sidewalk / walkway</td>
                <td className="px-4 py-2">$6–$10</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Patio (broom finish)</td>
                <td className="px-4 py-2">$6–$12</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Driveway</td>
                <td className="px-4 py-2">$8–$18</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Stamped / decorative</td>
                <td className="px-4 py-2">$12–$25</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Garage floor</td>
                <td className="px-4 py-2">$8–$14</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Use our{" "}
          <Link href="/calculators/slab">Concrete Slab Calculator</Link> and{" "}
          <Link href="/calculators/driveway">Driveway Calculator</Link> to get
          accurate material estimates for any job. Or grab our{" "}
          <Link href="/templates">Pro Bid Calculator ($29)</Link> to generate
          professional bids in under 2 minutes.
        </p>

        <h2 id="step-6">Step 6: Finding Your First Customers</h2>
        <p>
          This is the hardest part of year one. You need jobs to build a
          reputation, but you need a reputation to get jobs. Here&apos;s how to
          break through:
        </p>

        <ol>
          <li>
            <strong>Start with your network.</strong> Tell everyone — friends,
            family, neighbors, former coworkers — that you&apos;re now doing
            concrete work. Your first 3–5 jobs will likely come from people you
            know.
          </li>
          <li>
            <strong>Google Business Profile.</strong> Set up a free Google Business
            listing immediately. This is how most homeowners find local
            contractors. Add photos of every job you complete.
          </li>
          <li>
            <strong>Facebook Marketplace and local groups.</strong> Post in your
            city&apos;s home improvement and neighborhood groups. Many homeowners
            search here before Googling.
          </li>
          <li>
            <strong>Yard signs.</strong> Put a professional yard sign at every job
            site (with permission). &quot;Concrete by [Your Company] — (555)
            123-4567.&quot; This generates free leads in the neighborhood.
          </li>
          <li>
            <strong>Nextdoor.</strong> Claim your business and respond to requests
            for contractor recommendations. This is gold for residential work.
          </li>
          <li>
            <strong>Partner with related trades.</strong> Landscapers, general
            contractors, home builders, and remodelers all need concrete
            subcontractors. Introduce yourself and offer competitive pricing for
            referrals.
          </li>
          <li>
            <strong>Door-to-door in neighborhoods.</strong> When you see cracked
            driveways or settling patios, leave a door hanger. It feels old-school,
            but it works.
          </li>
        </ol>

        <h2 id="step-7">Step 7: Common Mistakes to Avoid</h2>
        <ol>
          <li>
            <strong>Starting without experience.</strong> This cannot be
            overstated. Work for someone else first. Learn the craft, then start
            the business.
          </li>
          <li>
            <strong>Underpricing to win work.</strong> You&apos;ll stay busy and
            go broke. Price for profit from job one. Read our{" "}
            <Link href="/blog/how-to-bid-concrete-jobs">bidding guide</Link> for
            proper pricing.
          </li>
          <li>
            <strong>Skipping insurance.</strong> One injury lawsuit or property
            damage claim will end your business if you&apos;re uninsured.
          </li>
          <li>
            <strong>Growing too fast.</strong> Adding crews before you have
            consistent work leads to payroll pressure. Grow when demand justifies
            it, not before.
          </li>
          <li>
            <strong>Bad weather planning.</strong> Rain during a pour can destroy a
            job. Always check the forecast, have tarps ready, and be willing to
            reschedule. Read our guide:{" "}
            <Link href="/blog/can-you-pour-concrete-in-rain">
              Can You Pour Concrete in Rain?
            </Link>
          </li>
          <li>
            <strong>No written contracts.</strong> Every job needs a written scope
            of work, price, and payment terms. Handshake deals lead to disputes.
            See our{" "}
            <Link href="/blog/concrete-contract-template">
              contract template guide
            </Link>
            .
          </li>
          <li>
            <strong>Ignoring the business side.</strong> Being great at pouring
            concrete isn&apos;t enough. You need to track finances, manage cash
            flow, send invoices on time, and follow up on leads.
          </li>
        </ol>

        <h2 id="financials">Realistic First-Year Financials</h2>
        <p>
          Here&apos;s what a concrete business can realistically look like in year
          one, assuming you start in spring and work through fall (8 months of
          active work in northern states, more in the South):
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Metric</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Conservative
                </th>
                <th className="text-left px-4 py-2 font-semibold">Moderate</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Aggressive
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Jobs per month</td>
                <td className="px-4 py-2">4–6</td>
                <td className="px-4 py-2">8–12</td>
                <td className="px-4 py-2">15–20</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Avg job size</td>
                <td className="px-4 py-2">$2,500</td>
                <td className="px-4 py-2">$3,500</td>
                <td className="px-4 py-2">$4,500</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Annual revenue</td>
                <td className="px-4 py-2">$80,000–$120,000</td>
                <td className="px-4 py-2">$225,000–$335,000</td>
                <td className="px-4 py-2">$540,000–$720,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Material costs (30%)</td>
                <td className="px-4 py-2">$24,000–$36,000</td>
                <td className="px-4 py-2">$67,500–$100,500</td>
                <td className="px-4 py-2">$162,000–$216,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Labor costs (35%)</td>
                <td className="px-4 py-2">$28,000–$42,000</td>
                <td className="px-4 py-2">$78,750–$117,250</td>
                <td className="px-4 py-2">$189,000–$252,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Overhead (15%)</td>
                <td className="px-4 py-2">$12,000–$18,000</td>
                <td className="px-4 py-2">$33,750–$50,250</td>
                <td className="px-4 py-2">$81,000–$108,000</td>
              </tr>
              <tr className="border-t font-semibold bg-green-50">
                <td className="px-4 py-2">Net profit (15–20%)</td>
                <td className="px-4 py-2">$12,000–$24,000</td>
                <td className="px-4 py-2">$33,750–$67,000</td>
                <td className="px-4 py-2">$81,000–$144,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Reality check:</strong> Most first-year concrete businesses fall
          in the conservative to moderate range. The aggressive scenario requires
          an experienced contractor with an existing network and possibly a crew
          from day one.
        </p>

        <p>
          <strong>Cash flow warning:</strong> You&apos;ll spend money on
          equipment, insurance, and materials before you see your first dollar of
          revenue. Make sure you have 3–6 months of living expenses saved in
          addition to your startup costs.
        </p>

        <h2 id="business-plan">Need a Business Plan?</h2>
        <p>
          A solid business plan helps you think through your startup strategy, set
          financial targets, and secure financing if needed. We&apos;ve created a{" "}
          <Link href="/blog/concrete-business-plan-template">
            free concrete business plan template
          </Link>{" "}
          with a complete outline, financial projections framework, and market
          analysis section — built specifically for concrete contractors.
        </p>

        <h2 id="growth">Growing Beyond Year One</h2>
        <p>
          Once you&apos;re established and profitable, here&apos;s how successful
          concrete businesses scale:
        </p>
        <ul>
          <li>
            <strong>Add a second crew.</strong> This doubles your capacity without
            doubling your overhead. Train a reliable lead man who can run jobs
            independently.
          </li>
          <li>
            <strong>Expand services.</strong> Add stamped concrete, colored
            concrete, exposed aggregate, or concrete countertops. Specialty work
            commands premium prices.
          </li>
          <li>
            <strong>Target commercial work.</strong> Parking lots, warehouse
            floors, and commercial foundations are larger jobs with higher total
            revenue per project.
          </li>
          <li>
            <strong>Invest in marketing.</strong> A professional website, Google
            Ads targeting &quot;concrete contractor near me,&quot; and consistent
            review generation can fill your schedule year-round.
          </li>
          <li>
            <strong>Systemize estimating.</strong> Use professional estimate
            templates to create fast, accurate, consistent bids. Our{" "}
            <Link href="/templates">Pro Estimate Templates</Link> are built
            specifically for concrete contractors.
          </li>
        </ul>

        {/* Starter Kit CTA */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 not-prose my-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              🧰 Everything You Need to Start Your Concrete Business
            </h3>
            <p className="text-slate-600 mb-2 max-w-lg mx-auto">
              The Business Starter Kit includes a complete 6-chapter business guide,
              all 15 estimate templates, bid calculator, client contracts, SOPs,
              pricing matrix, equipment guide, and 90-day marketing plan.
            </p>
            <p className="text-green-700 font-semibold text-sm mb-4">
              One download. Everything you need. 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://buy.stripe.com/8x2cN6afBdg9c6ne27aMU01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition text-lg"
              >
                Get the Starter Kit — $297
              </a>
              <Link
                href="/templates"
                className="inline-block bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-8 rounded-lg hover:bg-slate-50 transition"
              >
                Or Start with Templates — $49
              </Link>
            </div>
          </div>
        </div>

        {/* State-by-State Guides */}
        <h2 id="state-guides">
          State-by-State Guides: Start a Concrete Business in Your State
        </h2>
        <p>
          Licensing, insurance, and business requirements vary by state. Select
          your state for a detailed breakdown of exactly what you need:
        </p>
        <div className="not-prose my-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {stateLinks.map((state) => (
              <Link
                key={state.slug}
                href={`/blog/start-concrete-business-${state.slug}`}
                className="text-sm text-blue-700 hover:text-blue-900 hover:underline py-1"
              >
                {state.name} →
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="not-prose space-y-4 my-6">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="bg-white border border-slate-200 rounded-lg p-5"
            >
              <h3 className="font-semibold text-slate-900 mb-2">
                {item.question}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <h2 id="resources">Free Resources to Get Started</h2>
        <ul>
          <li>
            <Link href="/calculators/slab">Concrete Slab Calculator</Link> —
            Calculate material quantities for any project
          </li>
          <li>
            <Link href="/calculators/driveway">Driveway Calculator</Link> —
            Specific to driveway projects
          </li>
          <li>
            <Link href="/calculators/footing">Footing Calculator</Link> —
            Foundation and footing estimates
          </li>
          <li>
            <Link href="/blog/how-to-bid-concrete-jobs">
              How to Bid Concrete Jobs
            </Link>{" "}
            — Step-by-step bidding formula
          </li>
          <li>
            <Link href="/blog/how-to-price-concrete-work">
              How to Price Concrete Work
            </Link>{" "}
            — Pricing strategy guide
          </li>
          <li>
            <Link href="/blog/concrete-cost-per-yard">
              Concrete Cost Per Yard Guide
            </Link>{" "}
            — Current material pricing
          </li>
          <li>
            <Link href="/blog/concrete-business-plan-template">
              Concrete Business Plan Template
            </Link>{" "}
            — Free outline with financial projections
          </li>
          <li>
            <Link href="/templates">Pro Estimate Templates</Link> — Professional
            bid sheets for clients
          </li>
        </ul>
      </article>
    </div>
  );
}
