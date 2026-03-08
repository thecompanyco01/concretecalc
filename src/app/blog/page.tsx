import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Business Blog — Tips, Guides & Resources | EstimateConcrete",
  description:
    "Practical guides for concrete contractors: bidding, estimating, pricing, business growth, and technical how-tos. Built for pros running concrete businesses.",
};

const posts = [
  {
    title: "Complete Rebar Size Chart: Grades, Weights & Specifications (2026)",
    slug: "rebar-size-chart",
    excerpt:
      "Rebar size chart with all sizes #3-#18: weight per foot, diameter, cross-sectional area, grades (40/60/75), spacing charts, lap splice lengths, tie wire requirements, and pricing for concrete contractors.",
    date: "March 8, 2026",
    readTime: "18 min read",
    status: "live",
  },
  {
    title: "Essential Concrete Finishing Tools: The Complete Contractor's Guide (2026)",
    slug: "concrete-finishing-tools-guide",
    excerpt:
      "Complete guide to concrete finishing tools: bull floats, fresnos, edgers, groovers, trowels, knee boards, power trowels, broom finishes, stamps, and starter vs pro tool kits with real costs.",
    date: "March 8, 2026",
    readTime: "20 min read",
    status: "live",
  },
  {
    title: "Concrete vs Asphalt Driveway: Cost, Durability & ROI Comparison (2026)",
    slug: "concrete-vs-asphalt-driveway",
    excerpt:
      "Concrete vs asphalt driveway: complete comparison with real pricing data, 30-year total cost of ownership, climate recommendations, ROI analysis, and pros/cons for every homeowner.",
    date: "March 8, 2026",
    readTime: "16 min read",
    status: "live",
  },
  {
    title: "Concrete Curing Compounds: Types, Application & Best Practices (2026)",
    slug: "concrete-curing-compound-guide",
    excerpt:
      "Complete guide to concrete curing compounds: water-based acrylic, solvent-based resin, wax-based, sodium silicate. ASTM C309 types, application rates (150-200 sq ft/gal), costs ($15-40/gal), and when NOT to use them.",
    date: "March 7, 2026",
    readTime: "15 min read",
    status: "live",
  },
  {
    title: "Concrete Floor Leveling: Methods, Costs & DIY vs Pro (2026)",
    slug: "concrete-floor-leveling-guide",
    excerpt:
      "Complete guide to concrete floor leveling: self-leveling compound ($2-5/sq ft), grinding ($1-4/sq ft), mudjacking ($3-6/sq ft), foam jacking ($5-25/sq ft). FF/FL numbers, DIY steps, and when to hire a pro.",
    date: "March 7, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Concrete Saw Cutting: Methods, Equipment & Contractor Pricing (2026)",
    slug: "concrete-saw-cutting-guide",
    excerpt:
      "Complete guide to concrete saw cutting: flat sawing, wall sawing, wire sawing, core drilling, blade types, control joint timing, wet vs dry cutting, equipment rental ($200-800/day), and contractor pricing ($1-15/LF).",
    date: "March 7, 2026",
    readTime: "16 min read",
    status: "live",
  },
  {
    title: "Concrete Spalling: Causes, Repair Methods & Prevention (2026)",
    slug: "concrete-spalling-guide",
    excerpt:
      "Complete guide to concrete spalling: causes (freeze-thaw, corrosion, deicing salts), repair methods (patching, overlays, resurfacing), prevention strategies, and costs for residential and commercial concrete.",
    date: "March 7, 2026",
    readTime: "13 min read",
    status: "live",
  },
  {
    title: "Stamped Concrete Patterns: Popular Designs, Costs & Installation (2026)",
    slug: "stamped-concrete-patterns-guide",
    excerpt:
      "Complete guide to stamped concrete patterns: slate, flagstone, brick, cobblestone, wood plank, and custom designs. Pattern costs, color options, installation process, and maintenance tips.",
    date: "March 7, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Concrete Delivery Cost: Pricing, Fees & How to Save (2026)",
    slug: "concrete-delivery-cost-guide",
    excerpt:
      "Complete guide to concrete delivery costs: per-yard pricing, short load fees, fuel surcharges, Saturday delivery premiums, pump truck costs, and tips for reducing your total delivery bill.",
    date: "March 7, 2026",
    readTime: "12 min read",
    status: "live",
  },
  {
    title: "Concrete Anchor Bolts: Types, Sizing & Installation Guide (2026)",
    slug: "concrete-anchor-bolts-guide",
    excerpt:
      "Complete guide to concrete anchor bolts: wedge anchors, sleeve anchors, drop-in anchors, epoxy anchors, cast-in-place J-bolts. Sizing charts, pull-out strength, installation steps, and costs.",
    date: "March 7, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Concrete Blankets: Curing & Cold Weather Protection Guide (2026)",
    slug: "concrete-blanket-guide",
    excerpt:
      "Complete guide to concrete blankets: insulated curing blankets ($50-150), heated blankets ($100-400), cold weather concreting (ACI 306), sizing, costs, and contractor best practices.",
    date: "March 7, 2026",
    readTime: "15 min read",
    status: "live",
  },
  {
    title: "Concrete Bonding Agents: Types, Application & Best Practices (2026)",
    slug: "concrete-bonding-agent-guide",
    excerpt:
      "Complete guide to concrete bonding agents: acrylic latex, epoxy, SBR latex, polyvinyl acetate. When to use each type, application methods, costs, and common mistakes to avoid.",
    date: "March 7, 2026",
    readTime: "13 min read",
    status: "live",
  },
  {
    title: "Concrete Floor Paint: Types, Costs & Application Guide (2026)",
    slug: "concrete-floor-paint-guide",
    excerpt:
      "Complete guide to concrete floor paint: epoxy ($3-7/sq ft), latex acrylic ($1-3/sq ft), polyurethane ($4-8/sq ft). Surface prep, application steps, durability comparison, and garage floor coating tips.",
    date: "March 7, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Pervious Concrete: Costs, Benefits & Installation Guide (2026)",
    slug: "pervious-concrete-guide",
    excerpt:
      "Complete guide to pervious concrete: costs ($8-16/sq ft installed), mix design, installation, stormwater benefits, LEED credits, maintenance, and business opportunities for contractors.",
    date: "March 7, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Concrete Fiber Mesh vs Rebar: When to Use Each Reinforcement (2026)",
    slug: "concrete-fiber-mesh-guide",
    excerpt:
      "Complete guide to fiber mesh vs rebar: types (synthetic, steel, glass, basalt), dosage rates, costs, ASTM standards, and when each reinforcement type is the right choice for your project.",
    date: "March 7, 2026",
    readTime: "15 min read",
    status: "live",
  },
  {
    title: "Concrete Edging: Types, Costs & Installation Guide (2026)",
    slug: "concrete-edging-guide",
    excerpt:
      "Complete guide to concrete edging: mow strips ($3-6/ft), landscape curbing ($5-10/ft), decorative edging ($8-15/ft), and DIY poured edging. Covers installation, costs, and maintenance.",
    date: "March 7, 2026",
    readTime: "13 min read",
    status: "live",
  },
  {
    title: "Concrete Block Calculator Guide: How Many Blocks Do You Need? (2026)",
    slug: "concrete-block-calculator-guide",
    excerpt:
      "Calculate exactly how many concrete blocks you need for any wall project. Covers CMU sizes, mortar quantities, waste factors, and cost estimates for residential and commercial block work.",
    date: "March 7, 2026",
    readTime: "12 min read",
    status: "live",
  },
  {
    title: "Concrete Driveway Repair: Costs, Methods & When to Replace (2026)",
    slug: "concrete-driveway-repair-guide",
    excerpt:
      "Complete guide to concrete driveway repair: crack filling ($0.50-3/ft), resurfacing ($3-7/sq ft), mudjacking ($3-6/sq ft), and full replacement ($8-18/sq ft). Know when to repair vs replace.",
    date: "March 7, 2026",
    readTime: "13 min read",
    status: "live",
  },
  {
    title: "Free Concrete Estimate Template for Contractors (2026)",
    slug: "concrete-estimate-template",
    excerpt:
      "Download a professional concrete estimate template with material costs, labor rates, overhead, and profit margins. Includes tips on winning more jobs with better estimates.",
    date: "March 6, 2026",
    readTime: "10 min read",
    status: "live",
  },
  {
    title: "How Much to Charge for Concrete Work in 2026",
    slug: "how-much-to-charge-for-concrete-work",
    excerpt:
      "Complete pricing guide with per-square-foot rates by job type, regional pricing differences, how to calculate your rate, and what top-earning contractors do differently.",
    date: "March 6, 2026",
    readTime: "12 min read",
    status: "live",
  },
  {
    title: "Concrete Contract Template: Protect Your Business on Every Job",
    slug: "concrete-contract-template",
    excerpt:
      "Essential contract template with payment terms, scope of work, change orders, warranty, and liability protection. Includes state-specific requirements and common mistakes.",
    date: "March 6, 2026",
    readTime: "11 min read",
    status: "live",
  },
  {
    title: "Concrete Invoice Template: Get Paid Faster, Look Professional",
    slug: "concrete-invoice-template",
    excerpt:
      "Professional invoice template with detailed line items, progress billing, and payment terms. Plus tips on getting paid faster and tax considerations.",
    date: "March 6, 2026",
    readTime: "9 min read",
    status: "live",
  },
  {
    title: "Concrete Driveway Cost in 2026: Prices Per Sq Ft by Type",
    slug: "concrete-driveway-cost-guide",
    excerpt:
      "How much does a concrete driveway cost? Get real prices per square foot for plain, stamped, colored, and exposed aggregate driveways. Includes removal costs, sizing guide, and asphalt comparison.",
    date: "March 6, 2026",
    readTime: "14 min read",
    status: "live",
  },
  {
    title: "Concrete Patio Cost in 2026: Prices by Size & Finish Type",
    slug: "concrete-patio-cost-guide",
    excerpt:
      "Real patio costs by size (10x10 to 20x20), finish options, DIY vs contractor comparison, design ideas, permits, and maintenance tips for concrete patios.",
    date: "March 6, 2026",
    readTime: "13 min read",
    status: "live",
  },
  {
    title: "Concrete Foundation Cost in 2026: Prices by Type & Size",
    slug: "concrete-foundation-cost-guide",
    excerpt:
      "Detailed pricing for slab-on-grade, crawlspace, full basement, and pier foundations. Covers soil testing, engineering, permits, and frost line requirements by region.",
    date: "March 6, 2026",
    readTime: "15 min read",
    status: "live",
  },
  {
    title: "Concrete Cost Per Yard in 2026: Prices by Region & Type",
    slug: "concrete-cost-per-yard",
    excerpt:
      "Current ready-mix concrete prices by state, cost per square foot, short load fees, seasonal pricing, and tips for negotiating with suppliers.",
    date: "March 6, 2026",
    readTime: "12 min read",
    status: "live",
  },
  {
    title: "How to Bid Concrete Jobs: The Complete Guide for Contractors",
    slug: "how-to-bid-concrete-jobs",
    excerpt:
      "Learn how to estimate material, labor, and overhead costs to create accurate, competitive concrete bids. Includes formulas, markups, and real-world examples.",
    date: "March 6, 2026",
    readTime: "12 min read",
    status: "live",
  },
  {
    title: "Concrete Slab Cost Guide: 2026 Pricing Breakdown",
    slug: "concrete-slab-cost-guide",
    excerpt:
      "Complete cost breakdown for concrete slabs including material, labor, site prep, and finishing. Covers garage floors, patios, and commercial slabs.",
    date: "March 6, 2026",
    readTime: "10 min read",
    status: "live",
  },
  {
    title: "Stamped Concrete Cost Guide: Patterns, Pricing & ROI",
    slug: "stamped-concrete-cost-guide",
    excerpt:
      "How much does stamped concrete cost? Pricing by pattern, color options, maintenance requirements, and whether the premium is worth it for your project.",
    date: "March 6, 2026",
    readTime: "10 min read",
    status: "live",
  },
  {
    title: "Starting a Concrete Business: What You Need to Know",
    slug: "how-to-start-concrete-business",
    excerpt:
      "Equipment, licensing, insurance, and startup costs for launching a concrete contracting business. Realistic expectations from day one.",
    date: "March 6, 2026",
    readTime: "15 min read",
    status: "live",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Business Blog
      </h1>
      <p className="text-gray-600 mb-12">
        Practical guides for concrete contractors. No fluff — just the
        information you need to bid better, price right, and grow your business.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 transition"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              {post.status === "coming-soon" && (
                <>
                  <span>•</span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                </>
              )}
            </div>
            <h2 className="text-xl font-bold mb-2">
              {post.status === "live" ? (
                <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition">
                  {post.title}
                </Link>
              ) : (
                post.title
              )}
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
