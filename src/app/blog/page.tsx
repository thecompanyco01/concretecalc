import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Business Blog — Tips, Guides & Resources | ConcreteCalc",
  description:
    "Practical guides for concrete contractors: bidding, estimating, pricing, business growth, and technical how-tos. Built for pros running concrete businesses.",
};

const posts = [
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
    title: "Concrete Cost Per Square Foot: 2026 Pricing Guide",
    slug: "concrete-cost-per-square-foot",
    excerpt:
      "Updated 2026 pricing for residential and commercial concrete work. Covers slabs, driveways, patios, stamped, and decorative concrete by region.",
    date: "March 2026",
    readTime: "8 min read",
    status: "coming-soon",
  },
  {
    title: "Starting a Concrete Business: What You Need to Know",
    slug: "starting-a-concrete-business",
    excerpt:
      "Equipment, licensing, insurance, and startup costs for launching a concrete contracting business. Realistic expectations from day one.",
    date: "March 2026",
    readTime: "15 min read",
    status: "coming-soon",
  },
  {
    title: "Concrete Estimate Template: Free Download + How to Use It",
    slug: "concrete-estimate-template",
    excerpt:
      "Download our free concrete estimate template and learn how to calculate material, labor, and profit margins for any project.",
    date: "March 2026",
    readTime: "6 min read",
    status: "coming-soon",
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
