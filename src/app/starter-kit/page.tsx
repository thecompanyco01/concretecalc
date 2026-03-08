import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Business Starter Kit — Complete Guide | EstimateConcrete",
  description: "Everything you need to start and run a profitable concrete business. 6-chapter guide, estimate templates, bid calculator, and more.",
};

const chapter1Sections = [
  {
    heading: "Choosing Your Niche",
    content: `The concrete industry is massive — residential, commercial, decorative, structural. The most successful contractors start by specializing. Here are the most profitable niches for new concrete businesses:

**Residential flatwork** (driveways, patios, sidewalks) — Lowest barrier to entry, steady demand, average job $3,000–$15,000.

**Stamped/decorative concrete** — Higher margins (40-60% markup), less competition, but requires more skill and equipment.

**Foundation work** — Larger jobs ($10,000–$50,000+), requires more experience and equipment, but very profitable.

**Concrete repair & resurfacing** — Low startup cost, huge demand from aging infrastructure, repeat customers.

**Best strategy for beginners:** Start with residential flatwork, build your reputation, then expand into decorative or commercial work.`
  },
  {
    heading: "Writing Your Business Plan",
    content: `You don't need a 50-page business plan. You need a one-page plan that covers:

1. **Services offered** — What specific concrete work will you do?
2. **Target market** — Homeowners? GCs? Property managers?
3. **Pricing strategy** — Per square foot? Per cubic yard? (See Chapter 3)
4. **Startup costs** — Equipment, vehicle, insurance, marketing ($15,000–$50,000 typical)
5. **Revenue target** — Year 1 realistic: $100,000–$250,000 gross
6. **Competitive advantage** — What makes you different? Speed? Quality? Price?

**Your 30-60-90 Day Launch Plan:**
- Days 1-30: Get licensed, insured, buy essential equipment
- Days 31-60: Build website, Google Business listing, first 5 jobs (even at cost)
- Days 61-90: First profitable month, 2+ jobs/week, start marketing`
  },
  {
    heading: "Legal Structure",
    content: `**LLC is the best choice for 90% of concrete contractors.** Here's why:

- Protects your personal assets from business liability
- Pass-through taxation (no double tax like C-Corps)
- Credibility with clients and suppliers
- Easy to set up ($50–$500 depending on state)

**Steps:** File LLC with your state → Get EIN from IRS (free) → Open business bank account → Get contractor's license

Don't use a sole proprietorship — one cracked foundation lawsuit could take your house.`
  },
];

const lockedChapters = [
  {
    num: 2,
    title: "Getting Licensed & Insured",
    icon: "📋",
    summary: "Complete state-by-state licensing requirements, insurance types and costs, and how to get bonded.",
  },
  {
    num: 3,
    title: "Pricing & Estimating Guide",
    icon: "💰",
    summary: "Industry-standard rates by project type, the cost-plus pricing formula, and estimating best practices.",
  },
  {
    num: 4,
    title: "Marketing Your Concrete Business",
    icon: "📣",
    summary: "Google Business Profile setup, local SEO strategy, referral programs, and paid advertising that works.",
  },
  {
    num: 5,
    title: "Managing Crews & Projects",
    icon: "👷",
    summary: "When and how to hire, what to pay, daily routines, and the communication system that generates 5-star reviews.",
  },
  {
    num: 6,
    title: "Growing from Solo to a Team",
    icon: "📈",
    summary: "Revenue milestones, financial management, scaling from $100K to $1M+, and building long-term business value.",
  },
];

export default function StarterKit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
          Business Starter Kit — $297
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          The Complete Guide to Starting a Concrete Business
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Everything you need to start, run, and grow a profitable concrete contracting business. 
          6 comprehensive chapters plus all our premium tools and templates.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📖 Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <a href="#chapter-1" className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 transition">
            <span className="text-lg">🏗️</span>
            <span><strong className="text-slate-900">Ch. 1:</strong> How to Start a Concrete Business <span className="text-green-600 text-xs">(FREE)</span></span>
          </a>
          {lockedChapters.map(ch => (
            <div key={ch.num} className="flex items-center gap-3 text-sm text-slate-400">
              <span className="text-lg">{ch.icon}</span>
              <span><strong>Ch. {ch.num}:</strong> {ch.title} 🔒</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter 1 — Full Content (Free Preview) */}
      <div id="chapter-1" className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🏗️</span>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-amber-600 text-sm font-bold uppercase tracking-wide">Chapter 1</p>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">FREE PREVIEW</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">How to Start a Concrete Business</h2>
          </div>
        </div>
        <div className="space-y-8">
          {chapter1Sections.map((sec, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">{sec.heading}</h3>
              <div className="prose prose-slate prose-sm max-w-none">
                {sec.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locked Chapters */}
      <div className="space-y-4 mb-12">
        {lockedChapters.map(ch => (
          <div key={ch.num} className="bg-white rounded-xl border border-slate-200 p-6 opacity-75">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{ch.icon}</span>
              <div>
                <p className="text-amber-600 text-sm font-bold uppercase tracking-wide">Chapter {ch.num}</p>
                <h3 className="text-lg font-bold text-slate-900">{ch.title}</h3>
              </div>
            </div>
            <p className="text-slate-500 text-sm mb-3">{ch.summary}</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>🔒</span>
              <span>Included in the Business Starter Kit</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA to Unlock */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 text-center text-slate-900 mb-12">
        <h2 className="text-2xl font-extrabold mb-3">🔒 Unlock the Full Business Starter Kit</h2>
        <p className="text-amber-900/80 mb-6 max-w-lg mx-auto">
          Get all 6 chapters, 5 estimate templates, the Pro Bid Calculator, client contracts, SOPs, 
          pricing matrix, equipment guide, and 90-day marketing plan.
        </p>
        <a
          href="https://buy.stripe.com/8x2cN6afBdg9c6ne27aMU01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-900 text-white font-bold py-3 px-10 rounded-lg hover:bg-slate-800 transition text-lg"
        >
          Get the Starter Kit — $297
        </a>
        <p className="text-amber-900/60 text-sm mt-3">30-day money-back guarantee</p>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-extrabold mb-3">Want to Try Before You Buy?</h2>
        <p className="text-slate-400 mb-6">Use our free calculators to estimate any concrete job right now.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/calculators/slab" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition">
            Free Slab Calculator
          </Link>
          <Link href="/calculators/driveway" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition">
            Driveway Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
