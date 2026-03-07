import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Business Starter Kit — Complete Guide | ConcreteCalc",
  description: "Everything you need to start and run a profitable concrete business. 6-chapter guide, estimate templates, bid calculator, and more.",
};

const chapters = [
  {
    num: 1,
    title: "How to Start a Concrete Business",
    icon: "🏗️",
    sections: [
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
    ],
  },
  {
    num: 2,
    title: "Getting Licensed & Insured",
    icon: "📋",
    sections: [
      {
        heading: "Contractor Licensing by State",
        content: `Licensing requirements vary dramatically by state. Some states require nothing; others require exams, bonds, and years of experience.

**States requiring a contractor's license:** California, Arizona, Florida, Nevada, Utah, Oregon, Virginia, and 20+ more.

**States with NO state license required:** Texas, Kansas, Indiana, Missouri, Wyoming (but cities/counties may still require one).

**Typical requirements:**
- 2-4 years of documented experience
- Pass a trade exam and business law exam
- Surety bond ($5,000–$25,000)
- Proof of insurance
- Application fee ($200–$600)

**Pro tip:** Even if your state doesn't require licensing, GET ONE. Licensed contractors command 20-30% higher prices and win more bids.`
      },
      {
        heading: "Insurance You Need",
        content: `**Non-negotiable insurance (Day 1):**

1. **General Liability** — $1M/$2M minimum. Covers property damage and bodily injury. Cost: $1,200–$3,500/year.

2. **Commercial Auto** — Covers your work truck and trailer. Cost: $1,500–$3,000/year.

3. **Workers' Comp** — Required in most states if you have employees. Cost: $3–$8 per $100 of payroll for concrete work.

**Add when you grow:**

4. **Commercial Umbrella** — Extra $1M+ coverage. Cost: $500–$1,500/year.

5. **Inland Marine** — Covers equipment theft/damage. Cost: $500–$2,000/year.

6. **Professional Liability** — Covers design errors. Needed if you do stamped/decorative work.

**Total startup insurance budget:** $3,000–$7,000/year. Non-negotiable — one accident without insurance ends your business.`
      },
    ],
  },
  {
    num: 3,
    title: "Pricing & Estimating Guide",
    icon: "💰",
    sections: [
      {
        heading: "How to Price Concrete Work",
        content: `**The #1 mistake new contractors make: pricing too low.** They win jobs but lose money. Here's how to price profitably:

**Cost-Plus Pricing Formula:**
\`Total Price = (Materials + Labor + Equipment + Overhead) × (1 + Profit Margin)\`

**Industry-standard rates (2024-2025):**
| Project Type | Price per SF | 
|---|---|
| Basic slab (4") | $6–$10/SF |
| Driveway | $8–$14/SF |
| Patio | $8–$16/SF |
| Stamped concrete | $12–$25/SF |
| Foundation | $8–$15/SF |
| Sidewalk | $6–$10/SF |
| Concrete repair | $5–$15/SF |

**Your minimum profit margin should be 15-20%.** Top contractors target 25-35%.

**Never compete on price alone.** Compete on quality, reliability, and communication. The contractor who shows up on time, communicates clearly, and does quality work can charge 20-30% more.`
      },
      {
        heading: "Estimating Best Practices",
        content: `**Always visit the site before quoting.** Photos aren't enough — you need to see grade, access, soil conditions, and demolition scope.

**Your estimating checklist:**
1. ☐ Measure actual dimensions (don't trust client measurements)
2. ☐ Check site access for concrete trucks (minimum 10' wide, 13' clearance)
3. ☐ Assess grading needs and drainage
4. ☐ Identify existing concrete for demo
5. ☐ Check for underground utilities
6. ☐ Note soil conditions (clay, rock, fill)
7. ☐ Photograph everything
8. ☐ Add 10% waste factor to concrete volume
9. ☐ Include mobilization costs
10. ☐ Build in contingency (5-10%)

**Use the ConcreteCalc Bid Calculator** to generate professional estimates in minutes instead of hours. → [Bid Calculator Pro](/tools/bid-calculator-pro)

**Use the Estimate Templates** for project-specific estimates with pre-built line items. → [Estimate Templates](/tools/estimate-templates)`
      },
    ],
  },
  {
    num: 4,
    title: "Marketing Your Concrete Business",
    icon: "📣",
    sections: [
      {
        heading: "Google Business Profile (Most Important)",
        content: `**Your Google Business Profile (GBP) will generate 50-70% of your leads.** Set it up properly:

1. Claim or create your profile at business.google.com
2. Choose category: "Concrete Contractor" (primary) + "Paving Contractor," "Foundation Contractor"
3. Add ALL your services with descriptions
4. Upload 20+ high-quality project photos (before/after)
5. Get your first 5 reviews (ask every customer)
6. Post weekly updates (project photos, tips, promotions)

**Review strategy:** After every job, text the client: "Thanks for choosing us! If you're happy with the work, a Google review would mean the world to us: [link]"

**Target: 50+ reviews in your first year.** This alone will put you above 90% of competitors.`
      },
      {
        heading: "Website & SEO",
        content: `Your website doesn't need to be fancy — it needs to convert visitors into calls/emails.

**Must-have pages:**
- Home page with your phone number huge and clickable
- Services page for each service you offer
- Gallery with before/after photos
- About page with your story and credentials
- Contact page with form, phone, email, service area

**Local SEO strategy:**
- Create location-specific pages ("Concrete Contractor in [City]")
- Write blog posts targeting local keywords
- Get listed in local directories (Yelp, Angi, HomeAdvisor, BBB)
- Earn backlinks from local suppliers and partners`
      },
      {
        heading: "Other Marketing Channels",
        content: `**Ranked by ROI for concrete contractors:**

1. **Referrals** — Ask every happy customer to refer friends. Offer $100-$250 referral bonus.
2. **Google Ads** — $15-$30 per click for "concrete contractor near me." Start with $500/mo budget.
3. **Facebook/Nextdoor** — Post project photos, join local groups, run targeted ads.
4. **Yard signs** — Put a sign at every job site (get permission). $2-3/sign, huge visibility.
5. **Vehicle wraps** — $1,500-$3,000 for a quality wrap. Moving billboard 24/7.
6. **Door hangers** — After finishing a job, drop 50 hangers on the street. Neighbors are your best prospects.

**What NOT to do:** Don't waste money on magazine ads, radio, or sponsorships in your first year.`
      },
    ],
  },
  {
    num: 5,
    title: "Managing Crews & Projects",
    icon: "👷",
    sections: [
      {
        heading: "Hiring Your First Employee",
        content: `**Don't hire until you're consistently turning down work.** Most contractors hire too early and bleed cash.

**When to hire:** You're booked 3-4 weeks out AND your revenue exceeds $15,000/month consistently.

**Who to hire first:** A laborer, not another finisher. You do the skilled work; they do prep, cleanup, and grunt work.

**What to pay:**
- Laborers: $15-$22/hr depending on market
- Experienced finishers: $25-$40/hr
- Foreman: $30-$50/hr

**Where to find workers:**
- Craigslist/Facebook job postings
- Ask current employees for referrals ($200 bonus)
- Local trade schools
- Union halls (in union markets)

**Legal requirements:** Workers' comp insurance, payroll taxes, I-9 verification, OSHA compliance. Use a payroll service like Gusto or QuickBooks Payroll — $40/mo + $6/employee.`
      },
      {
        heading: "Project Management Basics",
        content: `**The project management system that works for small concrete crews:**

1. **Scheduling:** Use Google Calendar or Jobber. Schedule pours 2-3 weeks out. Always confirm concrete truck delivery 48 hours before.

2. **Daily routine:**
   - 6:00 AM: Crew meets at shop, load equipment
   - 6:30 AM: Arrive at job site, start prep
   - 7:00-8:00 AM: Concrete delivery window
   - By 3:00 PM: Finishing complete, site cleaned
   - 4:00 PM: Back at shop, clean equipment

3. **Job costing:** Track actual costs vs. estimate for EVERY job. If you're not hitting your margins, figure out why.

4. **Communication:** Text clients updates + photos at these points:
   - Day before: "We'll be there at 7 AM tomorrow"
   - After prep: "Forms are set, ready for concrete"
   - After pour: "Pour complete, here's how it looks"
   - 3 days later: "Checking in — any questions?"

**This level of communication is rare in concrete. It generates 5-star reviews and referrals.**`
      },
    ],
  },
  {
    num: 6,
    title: "Growing from Solo to a Team",
    icon: "📈",
    sections: [
      {
        heading: "Scaling Your Revenue",
        content: `**Revenue growth milestones for a concrete business:**

- **Solo operator:** $100K-$250K/year (1 truck, 1 trailer, you + 1 laborer)
- **Small crew:** $250K-$500K/year (2-3 workers, 2 trucks)
- **Two crews:** $500K-$1M/year (5-8 workers, you're managing not pouring)
- **Established company:** $1M-$3M/year (10+ workers, office, estimator)

**The key transition:** Going from "doing the work" to "running the business." This happens around $400K-$500K in revenue. You MUST stop pouring concrete and start managing, estimating, and selling.

**If you can't let go of the trowel, you'll be capped at $250K forever.**`
      },
      {
        heading: "Financial Management",
        content: `**Keep it simple with these rules:**

1. **Separate bank accounts:** Business checking + business savings. Never mix personal.
2. **Save 25-30% of revenue for taxes.** Quarterly estimated payments to IRS.
3. **Keep 2 months of operating expenses in savings** as emergency fund.
4. **Invoice within 24 hours** of job completion. Net 15 terms maximum.
5. **Track these numbers monthly:**
   - Gross revenue
   - Cost of goods sold (materials + labor + equipment)
   - Gross profit margin (target 35-50%)
   - Net profit margin (target 10-20%)
   - Outstanding receivables (collections > 30 days = problem)

**Software:** QuickBooks Self-Employed ($15/mo) or QuickBooks Simple Start ($30/mo). Don't use spreadsheets — you'll miss deductions.

**Get a CPA** who knows construction. They'll save you more in taxes than they charge. Budget $1,000-$2,500/year.`
      },
      {
        heading: "Building Long-Term Value",
        content: `**A concrete business can be very valuable if built right:**

- Recurring commercial maintenance contracts
- Strong online reviews (100+ Google reviews)
- Trained crews that can work without you
- Systems and SOPs documented
- Consistent profitability (15%+ net margin)

**A concrete business doing $1M/year with 15% net margins and good systems could sell for $300K-$600K.**

**Your 5-year roadmap:**
- Year 1: Get licensed, build reputation, first $150K in revenue
- Year 2: Hire crew, hit $300K, 50+ Google reviews
- Year 3: Add second crew, hit $500K, start commercial work
- Year 4: You're managing full-time, $750K-$1M revenue
- Year 5: Optimize, systemize, decide: keep growing or sell

**The most important thing: Start today.** Every successful concrete contractor was once a nervous person filing their first LLC paperwork. Action beats perfection.`
      },
    ],
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
          6 comprehensive chapters plus all our premium tools.
        </p>
      </div>

      {/* Quick Access Tools */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 mb-12 border border-amber-200">
        <h2 className="text-lg font-bold text-slate-900 mb-3">🛠️ Your Included Tools</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/bid-calculator-pro" className="bg-white rounded-lg p-4 border border-amber-200 hover:border-amber-400 transition">
            <h3 className="font-bold text-slate-900 text-sm">Pro Bid Calculator</h3>
            <p className="text-xs text-slate-500 mt-1">Generate professional bids in minutes</p>
          </Link>
          <Link href="/tools/estimate-templates" className="bg-white rounded-lg p-4 border border-amber-200 hover:border-amber-400 transition">
            <h3 className="font-bold text-slate-900 text-sm">5 Estimate Templates</h3>
            <p className="text-xs text-slate-500 mt-1">Slab, driveway, patio, foundation, stamped</p>
          </Link>
          <div className="bg-white rounded-lg p-4 border border-amber-200">
            <h3 className="font-bold text-slate-900 text-sm">All Free Calculators</h3>
            <p className="text-xs text-slate-500 mt-1">Slab, driveway, patio, footing, stamped</p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📖 Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {chapters.map(ch => (
            <a key={ch.num} href={`#chapter-${ch.num}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 transition">
              <span className="text-lg">{ch.icon}</span>
              <span><strong className="text-slate-900">Ch. {ch.num}:</strong> {ch.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Chapters */}
      {chapters.map(ch => (
        <div key={ch.num} id={`chapter-${ch.num}`} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{ch.icon}</span>
            <div>
              <p className="text-amber-600 text-sm font-bold uppercase tracking-wide">Chapter {ch.num}</p>
              <h2 className="text-2xl font-extrabold text-slate-900">{ch.title}</h2>
            </div>
          </div>
          <div className="space-y-8">
            {ch.sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{sec.heading}</h3>
                <div className="prose prose-slate prose-sm max-w-none">
                  {sec.content.split("\n\n").map((para, j) => {
                    if (para.startsWith("|")) {
                      const rows = para.split("\n").filter(r => r.trim() && !r.includes("---"));
                      return (
                        <table key={j} className="w-full text-sm my-3">
                          <tbody>
                            {rows.map((row, ri) => (
                              <tr key={ri} className={ri === 0 ? "bg-slate-100 font-bold" : "border-b border-slate-100"}>
                                {row.split("|").filter(c => c.trim()).map((cell, ci) => (
                                  <td key={ci} className="py-1.5 px-3">{cell.trim()}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    }
                    return (
                      <p key={j} className="text-slate-600 leading-relaxed whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html: para
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
                            .replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 rounded text-sm">$1</code>')
                            .replace(/→ \[(.*?)\]\((.*?)\)/g, '→ <a href="$2" class="text-amber-600 underline">$1</a>')
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-extrabold mb-3">Ready to Build Your Business?</h2>
        <p className="text-slate-400 mb-6">Use the tools included with your Starter Kit to start bidding jobs today.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/tools/bid-calculator-pro" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition">
            Open Bid Calculator
          </Link>
          <Link href="/tools/estimate-templates" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition">
            View Estimate Templates
          </Link>
        </div>
      </div>
    </div>
  );
}
