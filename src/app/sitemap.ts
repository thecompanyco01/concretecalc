import { MetadataRoute } from "next";
import { getAllStateSlugs } from "./states/data";
import fs from "fs";
import path from "path";

const BASE_URL = "https://concretecalc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/templates`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/states`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const calculatorSlugs = ["slab", "driveway", "patio", "footing", "stamped", "sidewalk", "block", "rebar", "stairs"];
  const calculatorPages = calculatorSlugs.map((slug) => ({
    url: `${BASE_URL}/calculators/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamically find all blog directories
  const blogDir = path.join(process.cwd(), "src/app/blog");
  let blogSlugs: string[] = [];
  try {
    blogSlugs = fs.readdirSync(blogDir).filter((f) => {
      const stat = fs.statSync(path.join(blogDir, f));
      return stat.isDirectory() && fs.existsSync(path.join(blogDir, f, "page.tsx"));
    });
  } catch { blogSlugs = []; }

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug.startsWith("start-concrete-business-") ? 0.6 : 0.8,
  }));

  const stateSlugs = getAllStateSlugs();
  const statePages = stateSlugs.map((slug) => ({
    url: `${BASE_URL}/states/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...corePages, ...calculatorPages, ...blogPages, ...statePages];
}
