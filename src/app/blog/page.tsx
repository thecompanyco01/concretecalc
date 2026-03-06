import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Business Blog — Tips, Guides & Resources | ConcreteCalc",
  description:
    "Practical guides for concrete contractors: bidding, estimating, pricing, business growth, and technical how-tos. Built for pros running concrete businesses.",
};

const posts = [
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
