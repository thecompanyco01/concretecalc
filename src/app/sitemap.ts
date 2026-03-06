import { MetadataRoute } from "next";
import { getAllStateSlugs } from "./states/data";

const BASE_URL = "https://concretecalc.vercel.app"; // Will update to custom domain

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const corePages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/templates`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/states`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  // Calculator pages (high priority — main traffic drivers)
  const calculatorSlugs = ["slab", "driveway", "patio", "footing", "stamped", "sidewalk", "block", "rebar", "stairs"];
  const calculatorPages = calculatorSlugs.map((slug) => ({
    url: `${BASE_URL}/calculators/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogSlugs = [
    "how-to-bid-concrete-jobs",
    "concrete-cost-per-yard",
    "how-to-start-concrete-business",
    "concrete-slab-cost-guide",
    "stamped-concrete-cost-guide",
    "concrete-driveway-cost-guide",
    "concrete-patio-cost-guide",
    "concrete-foundation-cost-guide",
  ];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // State pages (programmatic SEO)
  const stateSlugs = getAllStateSlugs();
  const statePages = stateSlugs.map((slug) => ({
    url: `${BASE_URL}/states/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...calculatorPages, ...blogPages, ...statePages];
}
