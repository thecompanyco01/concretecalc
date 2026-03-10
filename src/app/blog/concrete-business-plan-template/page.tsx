import Link from "next/link";
import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title:
    "Concrete Business Plan Template (Free) — 2026 Guide | EstimateConcrete",
  description:
    "Free concrete business plan template with financial projections, market analysis, and startup budget. Built for concrete contractors starting or growing their business in 2026.",
  keywords:
    "concrete business plan, concrete business plan template, concrete contractor business plan, concrete company business plan, concrete business plan example",
  alternates: {
    canonical:
      "https://estimateconcrete.com/blog/concrete-business-plan-template",
  },
};

const faqItems = [
  {
    question: "Do I really need a business plan for a concrete business?",
    answer:
      "If you're self-funding a small operation, a formal plan isn't legally required — but it forces you to think through pricing, costs, and cash flow before spending money. If you need a bank loan, SBA loan, or investor funding, a written business plan is mandatory.",
  },
  {
    question: "How long should a concrete business plan be?",
    answer:
      "For a bank loan or SBA financing, 15–25 pages including financial projections. For your own planning purposes, 5–10 pages covering the key sections is enough. The financial projections section is the most important part regardless of length.",
  },
  {
    question: "What financial projections do banks want to see?",
    answer:
      "Banks typically want 3-year projections including: monthly revenue forecasts, cost of goods sold (materials + labor), operating expenses, profit/loss statements, cash flow projections, and a break-even analysis. They want to see that you can repay the loan from business revenue.",
  },
  {
    question: "Can I write my own business plan or do I need a professional?",
    answer:
      "Most concrete contractors write their own plans successfully. You know your market, your costs, and your capabilities better than any consultant. Use our template below as a framework, fill in your specific numbers, and have your accountant review the financial projections.",
  },
];

export default function ConcreteBusinessPlanTemplate() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Concrete Business Plan Template (Free) — 2026 Guide",
        description:
          "Free concrete business plan template with financial projections, market analysis, and startup budget for concrete contractors.",
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
        datePublished: "2026-03-10",
        dateModified: "2026-03-10",
        mainEntityOfPage:
          "https://estimateconcrete.com/blog/concrete-business-plan-template",
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
          Concrete Business Plan Template
        </span>
      </nav>

      <article className="prose prose-gray prose-lg max-w-none">
        <h1>Concrete Business Plan Template: Free Outline + Financial Projections</h1>

        <p className="lead text-xl text-gray-600">
          Whether you&apos;re starting a new concrete business or growing an
          existing one, a solid business plan helps you set realistic targets,
          manage cash flow, and secure financing. Below is a complete business plan
          template built specifically for concrete contractors — with a free
          outline you can fill in today.
        </p>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
            In This Guide
          </p>
          <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            <li>
              <a href="#why" className="text-blue-700 hover:underline">
                Why You Need a Business Plan
              </a>
            </li>
            <li>
              <a href="#template" className="text-blue-700 hover:underline">
                Complete Business Plan Outline
              </a>
            </li>
            <li>
              <a href="#executive-summary" className="text-blue-700 hover:underline">
                1. Executive Summary
              </a>
            </li>
            <li>
              <a href="#company" className="text-blue-700 hover:underline">
                2. Company Description
              </a>
            </li>
            <li>
              <a href="#market" className="text-blue-700 hover:underline">
                3. Market Analysis
              </a>
            </li>
            <li>
              <a href="#services" className="text-blue-700 hover:underline">
                4. Services &amp; Pricing
              </a>
            </li>
            <li>
              <a href="#marketing" className="text-blue-700 hover:underline">
                5. Marketing Strategy
              </a>
            </li>
            <li>
              <a href="#operations" className="text-blue-700 hover:underline">
                6. Operations Plan
              </a>
            </li>
            <li>
              <a href="#financials" className="text-blue-700 hover:underline">
                7. Financial Projections
              </a>
            </li>
            <li>
              <a href="#funding" className="text-blue-700 hover:underline">
                8. Funding Request
              </a>
            </li>
            <li>
              <a href="#faq" className="text-blue-700 hover:underline">
                FAQ
              </a>
            </li>
          </ol>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 not-prose my-8">
          <p className="font-bold text-orange-800 mb-2">
            📋 Want the Complete Kit?
          </p>
          <p className="text-orange-700 text-sm mb-3">
            Our{" "}
            <Link href="/starter-kit" className="underline font-semibold">
              Business Starter Kit ($297)
            </Link>{" "}
            includes a professionally formatted business plan template, all 15
            estimate templates, client contracts, SOPs, pricing matrix, and a
            90-day marketing plan — everything below in ready-to-use Excel format.
          </p>
        </div>

        <h2 id="why">Why You Need a Concrete Business Plan</h2>
        <p>
          Most concrete contractors skip the business plan and figure things out as
          they go. That works — until it doesn&apos;t. Here&apos;s when you
          actually need one:
        </p>
        <ul>
          <li>
            <strong>Bank loans or SBA financing.</strong> No plan = no loan. Banks
            want to see that you&apos;ve thought through revenue, costs, and
            repayment.
          </li>
          <li>
            <strong>Equipment financing.</strong> Lenders for trucks, skid steers,
            and heavy equipment often require a business plan for startups.
          </li>
          <li>
            <strong>Cash flow planning.</strong> Concrete businesses are seasonal
            in most of the US. A plan helps you budget for slow months.
          </li>
          <li>
            <strong>Pricing strategy.</strong> Most new contractors underprice.
            Running the numbers in a plan forces you to set prices that actually
            generate profit.
          </li>
          <li>
            <strong>Growth decisions.</strong> When should you hire? Buy equipment?
            Add services? A plan gives you the financial framework to decide.
          </li>
        </ul>

        <p>
          Even if nobody else ever reads your plan, the exercise of writing it
          makes you a better business owner. New to the concrete business? Start
          with our{" "}
          <Link href="/blog/how-to-start-concrete-business">
            complete guide to starting a concrete business
          </Link>{" "}
          for the full picture.
        </p>

        <h2 id="template">
          Complete Concrete Business Plan Template
        </h2>
        <p>
          Copy this outline and fill in each section with your specific
          information. We&apos;ve included prompts and examples for each section.
        </p>

        {/* ==================== SECTION 1 ==================== */}
        <h2 id="executive-summary">1. Executive Summary</h2>
        <p>
          Write this section last — it&apos;s a 1-page overview of your entire
          plan. Include:
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-6">
          <p className="font-semibold text-slate-800 mb-3 text-sm">
            ✏️ FILL IN:
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Business name:</strong> [Your Company Name] LLC
            </li>
            <li>
              <strong>Location:</strong> [City, State]
            </li>
            <li>
              <strong>Owner(s):</strong> [Your name, years of concrete experience]
            </li>
            <li>
              <strong>Services:</strong> [e.g., Residential flatwork — driveways,
              patios, sidewalks, garage floors]
            </li>
            <li>
              <strong>Target market:</strong> [e.g., Homeowners in [City/County]
              area, 25-mile radius]
            </li>
            <li>
              <strong>Startup costs:</strong> $[amount] (see{" "}
              <a href="#financials" className="text-blue-700 underline">
                Section 7
              </a>
              )
            </li>
            <li>
              <strong>Year 1 revenue target:</strong> $[amount]
            </li>
            <li>
              <strong>Funding needed:</strong> $[amount] or &quot;Self-funded&quot;
            </li>
          </ul>
        </div>

        {/* ==================== SECTION 2 ==================== */}
        <h2 id="company">2. Company Description</h2>
        <p>Describe your business structure and competitive advantage.</p>

        <h3>Business Structure</h3>
        <ul>
          <li>
            <strong>Legal entity:</strong> LLC (recommended for liability
            protection), S-Corp, or Sole Proprietorship
          </li>
          <li>
            <strong>EIN:</strong> [Applied/Received]
          </li>
          <li>
            <strong>State registration:</strong> [State] — see our{" "}
            <Link href="/blog/how-to-start-concrete-business#step-2">
              licensing guide
            </Link>{" "}
            for state-specific requirements
          </li>
          <li>
            <strong>Contractor&apos;s license:</strong> [License number or
            &quot;In process&quot;]
          </li>
        </ul>

        <h3>Your Competitive Advantage</h3>
        <p>
          Be specific. Generic statements like &quot;quality work&quot; don&apos;t
          differentiate you. Strong examples:
        </p>
        <ul>
          <li>
            &quot;10 years experience working for [well-known local company],
            specialized in decorative concrete&quot;
          </li>
          <li>
            &quot;Only contractor in [area] offering stamped concrete with
            integrated drainage&quot;
          </li>
          <li>
            &quot;Owner-operated — I&apos;m on every job site, not managing from
            an office&quot;
          </li>
          <li>
            &quot;Bilingual (English/Spanish) — serving underserved market in
            [area]&quot;
          </li>
        </ul>

        {/* ==================== SECTION 3 ==================== */}
        <h2 id="market">3. Market Analysis</h2>
        <p>
          This is where you prove demand exists in your area. Banks care about this
          section.
        </p>

        <h3>Market Size Framework</h3>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-6">
          <p className="font-semibold text-slate-800 mb-3 text-sm">
            ✏️ RESEARCH &amp; FILL IN:
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Population in your service area:</strong> [number] —
              source: Census.gov
            </li>
            <li>
              <strong>Number of single-family homes:</strong> [number] — each
              home is a potential driveway, patio, or sidewalk customer
            </li>
            <li>
              <strong>New construction permits (annual):</strong> [number] —
              source: local building department. Every new home needs a
              foundation, driveway, and sidewalks.
            </li>
            <li>
              <strong>Average home age in your area:</strong> [years] — older
              homes = more replacement and repair work
            </li>
            <li>
              <strong>Number of concrete contractors listed on Google:</strong>{" "}
              [number] — search &quot;concrete contractor [your city]&quot;.
              This is your direct competition.
            </li>
            <li>
              <strong>Estimated market size:</strong> [homes] × [% needing
              concrete work per year (typically 3-5%)] × [average job size] =
              $[total addressable market]
            </li>
          </ul>
        </div>

        <h3>Competitive Analysis</h3>
        <p>
          List the top 3–5 concrete contractors in your area. For each one note:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Competitor</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Google Rating
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Services Offered
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Your Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">[Company A]</td>
                <td className="px-4 py-2">[4.2 ★, 45 reviews]</td>
                <td className="px-4 py-2">[Flatwork, foundations]</td>
                <td className="px-4 py-2">
                  [You offer decorative, they don&apos;t]
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">[Company B]</td>
                <td className="px-4 py-2">[3.8 ★, 12 reviews]</td>
                <td className="px-4 py-2">[Full service]</td>
                <td className="px-4 py-2">[Poor reviews = opportunity]</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">[Company C]</td>
                <td className="px-4 py-2">[4.9 ★, 200 reviews]</td>
                <td className="px-4 py-2">[Residential + commercial]</td>
                <td className="px-4 py-2">
                  [They&apos;re booked 6 weeks out = overflow opportunity]
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ==================== SECTION 4 ==================== */}
        <h2 id="services">4. Services &amp; Pricing Strategy</h2>
        <p>
          List every service you plan to offer with target pricing. Use our{" "}
          <Link href="/blog/how-to-price-concrete-work">pricing guide</Link> and{" "}
          <Link href="/calculators/slab">free calculators</Link> to set accurate
          rates for your area.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Service</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Price Range ($/sq ft)
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Avg Job Size
                </th>
                <th className="text-left px-4 py-2 font-semibold">
                  Target Margin
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Driveways</td>
                <td className="px-4 py-2">$8–$18</td>
                <td className="px-4 py-2">$3,500–$8,000</td>
                <td className="px-4 py-2">20%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Patios</td>
                <td className="px-4 py-2">$6–$12</td>
                <td className="px-4 py-2">$2,000–$5,000</td>
                <td className="px-4 py-2">20%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Sidewalks</td>
                <td className="px-4 py-2">$6–$10</td>
                <td className="px-4 py-2">$1,500–$3,500</td>
                <td className="px-4 py-2">18%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Garage floors</td>
                <td className="px-4 py-2">$8–$14</td>
                <td className="px-4 py-2">$3,000–$6,000</td>
                <td className="px-4 py-2">20%</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Stamped/decorative</td>
                <td className="px-4 py-2">$12–$25</td>
                <td className="px-4 py-2">$4,000–$12,000</td>
                <td className="px-4 py-2">25%</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Foundations</td>
                <td className="px-4 py-2">$8–$15</td>
                <td className="px-4 py-2">$8,000–$25,000</td>
                <td className="px-4 py-2">15%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Pricing formula:</strong> (Material + Labor + Equipment +
          Overhead) × (1 + Profit Margin). For a detailed walkthrough, read our{" "}
          <Link href="/blog/how-to-bid-concrete-jobs">
            concrete bidding guide
          </Link>
          .
        </p>

        {/* ==================== SECTION 5 ==================== */}
        <h2 id="marketing">5. Marketing Strategy</h2>
        <p>
          How you&apos;ll get customers. Focus on what works for concrete
          contractors specifically:
        </p>

        <h3>Year 1 Marketing Plan (Low Budget)</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Channel</th>
                <th className="text-left px-4 py-2 font-semibold">Cost</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Expected Leads/Month
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Google Business Profile</td>
                <td className="px-4 py-2">Free</td>
                <td className="px-4 py-2">5–15</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Facebook groups + Marketplace</td>
                <td className="px-4 py-2">Free</td>
                <td className="px-4 py-2">3–8</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Nextdoor business page</td>
                <td className="px-4 py-2">Free</td>
                <td className="px-4 py-2">2–5</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Yard signs (per job site)</td>
                <td className="px-4 py-2">$50–$100/sign</td>
                <td className="px-4 py-2">1–3</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Referral program (10% finder&apos;s fee)</td>
                <td className="px-4 py-2">Variable</td>
                <td className="px-4 py-2">2–6</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Door hangers / flyers</td>
                <td className="px-4 py-2">$200–$500/run</td>
                <td className="px-4 py-2">1–4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Year 2+ Marketing (Scale Up)</h3>
        <ul>
          <li>
            <strong>Google Ads:</strong> &quot;Concrete contractor near me&quot;
            campaigns — $500–$1,500/month, expect 10–30 leads
          </li>
          <li>
            <strong>Professional website:</strong> With project gallery,
            testimonials, and online quote request form
          </li>
          <li>
            <strong>Review generation:</strong> Ask every satisfied customer for
            a Google review. 50+ reviews with 4.5+ rating is a competitive moat.
          </li>
          <li>
            <strong>Trade partnerships:</strong> Formal referral agreements with
            landscapers, general contractors, and home builders
          </li>
        </ul>

        {/* ==================== SECTION 6 ==================== */}
        <h2 id="operations">6. Operations Plan</h2>
        <p>
          How you&apos;ll actually run the business day to day.
        </p>

        <h3>Daily Operations</h3>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 not-prose my-6">
          <div className="space-y-2 text-sm text-slate-700">
            <p>
              <strong>5:30 AM</strong> — Load truck, confirm material delivery with
              supplier
            </p>
            <p>
              <strong>6:30 AM</strong> — Arrive at job site, set up forms and
              grade
            </p>
            <p>
              <strong>8:00 AM–12:00 PM</strong> — Pour and initial finishing
            </p>
            <p>
              <strong>12:00–1:00 PM</strong> — Lunch + return calls/send estimates
            </p>
            <p>
              <strong>1:00–4:00 PM</strong> — Final finishing, cleanup, or start
              forming next job
            </p>
            <p>
              <strong>Evening</strong> — 30 min: send invoices, follow up on
              leads, update schedule
            </p>
          </div>
        </div>

        <h3>Key Suppliers</h3>
        <ul>
          <li>
            <strong>Ready-mix concrete:</strong> [Local batch plant name] — establish a relationship and net-30 account
          </li>
          <li>
            <strong>Rebar &amp; mesh:</strong> [Supplier] — buy in bulk for
            better pricing
          </li>
          <li>
            <strong>Lumber &amp; forms:</strong> [Home Depot / local yard] — pro
            desk account for discounts
          </li>
        </ul>

        <h3>Hiring Plan</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Stage</th>
                <th className="text-left px-4 py-2 font-semibold">Team Size</th>
                <th className="text-left px-4 py-2 font-semibold">Revenue Trigger</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Launch</td>
                <td className="px-4 py-2">Just you + 1 laborer (day rate)</td>
                <td className="px-4 py-2">—</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Growth</td>
                <td className="px-4 py-2">You + 2–3 crew members</td>
                <td className="px-4 py-2">Consistently booked 3+ weeks out</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Scale</td>
                <td className="px-4 py-2">2 crews, you manage/estimate</td>
                <td className="px-4 py-2">$400K+ annual revenue</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ==================== SECTION 7 ==================== */}
        <h2 id="financials">7. Financial Projections</h2>
        <p>
          This is the most important section — especially if you&apos;re seeking
          financing. Here&apos;s a framework you can fill in with your numbers.
        </p>

        <h3>Startup Budget</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Category</th>
                <th className="text-left px-4 py-2 font-semibold">Low End</th>
                <th className="text-left px-4 py-2 font-semibold">Mid Range</th>
                <th className="text-left px-4 py-2 font-semibold">High End</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Vehicle (truck + trailer)</td>
                <td className="px-4 py-2">$16,500</td>
                <td className="px-4 py-2">$35,000</td>
                <td className="px-4 py-2">$71,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Tools &amp; equipment</td>
                <td className="px-4 py-2">$2,400</td>
                <td className="px-4 py-2">$6,000</td>
                <td className="px-4 py-2">$12,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Insurance (year 1)</td>
                <td className="px-4 py-2">$6,000</td>
                <td className="px-4 py-2">$10,000</td>
                <td className="px-4 py-2">$15,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Licensing &amp; legal</td>
                <td className="px-4 py-2">$500</td>
                <td className="px-4 py-2">$1,500</td>
                <td className="px-4 py-2">$3,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Marketing (first 3 months)</td>
                <td className="px-4 py-2">$300</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$3,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Working capital (materials for first jobs)</td>
                <td className="px-4 py-2">$3,000</td>
                <td className="px-4 py-2">$5,000</td>
                <td className="px-4 py-2">$10,000</td>
              </tr>
              <tr className="border-t font-semibold bg-blue-50">
                <td className="px-4 py-2">Total Startup</td>
                <td className="px-4 py-2">$28,700</td>
                <td className="px-4 py-2">$58,500</td>
                <td className="px-4 py-2">$114,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For detailed equipment costs, see our{" "}
          <Link href="/blog/how-to-start-concrete-business#step-4">
            startup cost breakdown
          </Link>
          .
        </p>

        <h3>3-Year Revenue Projection</h3>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Metric</th>
                <th className="text-left px-4 py-2 font-semibold">Year 1</th>
                <th className="text-left px-4 py-2 font-semibold">Year 2</th>
                <th className="text-left px-4 py-2 font-semibold">Year 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">Jobs per month</td>
                <td className="px-4 py-2">6</td>
                <td className="px-4 py-2">10</td>
                <td className="px-4 py-2">16</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Average job size</td>
                <td className="px-4 py-2">$3,000</td>
                <td className="px-4 py-2">$3,500</td>
                <td className="px-4 py-2">$4,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Active months</td>
                <td className="px-4 py-2">8</td>
                <td className="px-4 py-2">9</td>
                <td className="px-4 py-2">10</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Gross revenue</td>
                <td className="px-4 py-2">$144,000</td>
                <td className="px-4 py-2">$315,000</td>
                <td className="px-4 py-2">$640,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Materials (30%)</td>
                <td className="px-4 py-2">$43,200</td>
                <td className="px-4 py-2">$94,500</td>
                <td className="px-4 py-2">$192,000</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-2">Labor (35%)</td>
                <td className="px-4 py-2">$50,400</td>
                <td className="px-4 py-2">$110,250</td>
                <td className="px-4 py-2">$224,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Overhead (15%)</td>
                <td className="px-4 py-2">$21,600</td>
                <td className="px-4 py-2">$47,250</td>
                <td className="px-4 py-2">$96,000</td>
              </tr>
              <tr className="border-t font-semibold bg-green-50">
                <td className="px-4 py-2">Net profit (20%)</td>
                <td className="px-4 py-2">$28,800</td>
                <td className="px-4 py-2">$63,000</td>
                <td className="px-4 py-2">$128,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Note:</strong> These are moderate estimates. Your numbers will
          vary based on location, services, and pricing. Use our{" "}
          <Link href="/calculators/slab">concrete calculators</Link> and{" "}
          <Link href="/blog/concrete-cost-per-yard">material cost guide</Link> to
          build accurate projections for your market.
        </p>

        <h3>Monthly Cash Flow (Year 1)</h3>
        <p>
          Concrete businesses have seasonal cash flow. Here&apos;s a typical
          pattern for a northern US contractor:
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Month</th>
                <th className="text-left px-4 py-2 font-semibold">Revenue</th>
                <th className="text-left px-4 py-2 font-semibold">Expenses</th>
                <th className="text-left px-4 py-2 font-semibold">
                  Net Cash Flow
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t bg-red-50">
                <td className="px-4 py-2">Jan–Mar</td>
                <td className="px-4 py-2">$0</td>
                <td className="px-4 py-2">$2,000/mo (insurance, truck payment)</td>
                <td className="px-4 py-2 text-red-600 font-semibold">-$6,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Apr–May</td>
                <td className="px-4 py-2">$12,000/mo</td>
                <td className="px-4 py-2">$10,000/mo</td>
                <td className="px-4 py-2 text-green-600 font-semibold">+$4,000</td>
              </tr>
              <tr className="border-t bg-green-50">
                <td className="px-4 py-2">Jun–Sep</td>
                <td className="px-4 py-2">$22,000/mo</td>
                <td className="px-4 py-2">$17,000/mo</td>
                <td className="px-4 py-2 text-green-600 font-semibold">+$20,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Oct–Nov</td>
                <td className="px-4 py-2">$14,000/mo</td>
                <td className="px-4 py-2">$11,000/mo</td>
                <td className="px-4 py-2 text-green-600 font-semibold">+$6,000</td>
              </tr>
              <tr className="border-t bg-red-50">
                <td className="px-4 py-2">Dec</td>
                <td className="px-4 py-2">$0</td>
                <td className="px-4 py-2">$2,000</td>
                <td className="px-4 py-2 text-red-600 font-semibold">-$2,000</td>
              </tr>
              <tr className="border-t font-semibold bg-blue-50">
                <td className="px-4 py-2">Year 1 Total</td>
                <td className="px-4 py-2">$144,000</td>
                <td className="px-4 py-2">$116,000</td>
                <td className="px-4 py-2 text-green-600">+$28,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Key insight:</strong> You need cash reserves to survive the
          off-season. Budget for 3–4 months of expenses with zero revenue. Southern
          contractors have a shorter off-season but still experience slowdowns.
        </p>

        {/* ==================== SECTION 8 ==================== */}
        <h2 id="funding">8. Funding Request (If Applicable)</h2>
        <p>
          If you&apos;re seeking financing, include:
        </p>
        <ul>
          <li>
            <strong>Amount requested:</strong> $[amount]
          </li>
          <li>
            <strong>Use of funds:</strong> Be specific — &quot;$25,000 for used
            F-350, $6,000 for insurance, $4,000 for tools&quot;
          </li>
          <li>
            <strong>Repayment plan:</strong> How the loan will be repaid from
            business revenue (reference your financial projections)
          </li>
          <li>
            <strong>Collateral:</strong> Equipment purchased with the loan often
            serves as collateral
          </li>
        </ul>

        <h3>Common Funding Sources for Concrete Businesses</h3>
        <ul>
          <li>
            <strong>SBA 7(a) loans:</strong> Up to $5M, 10-25 year terms. Best
            rates but slow approval (30-90 days).
          </li>
          <li>
            <strong>Equipment financing:</strong> Specifically for trucks and
            heavy equipment. Equipment is the collateral. Faster approval.
          </li>
          <li>
            <strong>Business line of credit:</strong> $10K–$100K revolving
            credit for materials and working capital.
          </li>
          <li>
            <strong>Personal savings + family:</strong> Most common for
            startups under $50K. Keeps things simple.
          </li>
        </ul>

        {/* Starter Kit CTA */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 not-prose my-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              🧰 Get the Complete Business Starter Kit
            </h3>
            <p className="text-slate-600 mb-2 max-w-lg mx-auto">
              Stop building from scratch. The Starter Kit includes a
              professionally formatted business plan template, all 15 estimate
              templates, bid calculator, client contracts, SOPs, pricing matrix,
              and a 90-day marketing plan.
            </p>
            <p className="text-green-700 font-semibold text-sm mb-4">
              One download. Everything you need. 30-day money-back guarantee.
            </p>
            <a
              href="https://buy.stripe.com/8x2cN6afBdg9c6ne27aMU01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition text-lg"
            >
              Get the Starter Kit — $297
            </a>
          </div>
        </div>

        {/* Email Capture */}
        <div className="not-prose my-8">
          <EmailCapture source="business-plan-template" variant="prominent" />
        </div>

        {/* FAQ */}
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

        <h2>Related Resources</h2>
        <ul>
          <li>
            <Link href="/blog/how-to-start-concrete-business">
              How to Start a Concrete Business — Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-bid-concrete-jobs">
              How to Bid Concrete Jobs
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-price-concrete-work">
              How to Price Concrete Work
            </Link>
          </li>
          <li>
            <Link href="/blog/concrete-markup-percentage">
              Concrete Markup Percentage Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/concrete-business-insurance">
              Concrete Business Insurance Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/concrete-equipment-list">
              Complete Concrete Equipment List
            </Link>
          </li>
          <li>
            <Link href="/calculators/slab">Free Concrete Slab Calculator</Link>
          </li>
          <li>
            <Link href="/templates">Pro Estimate Templates</Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
