import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Calculator shortcut URLs
      { source: "/concrete-calculator", destination: "/calculators/slab", permanent: true },
      { source: "/calculator", destination: "/calculators/slab", permanent: true },
      { source: "/slab-calculator", destination: "/calculators/slab", permanent: true },
      { source: "/concrete-slab-calculator", destination: "/calculators/slab", permanent: true },
      { source: "/concrete-cost-calculator", destination: "/calculators/slab", permanent: true },
      { source: "/driveway-calculator", destination: "/calculators/driveway", permanent: true },
      { source: "/patio-calculator", destination: "/calculators/patio", permanent: true },
      { source: "/footing-calculator", destination: "/calculators/footing", permanent: true },
      { source: "/rebar-calculator", destination: "/calculators/rebar", permanent: true },
      { source: "/sidewalk-calculator", destination: "/calculators/sidewalk", permanent: true },
      { source: "/stairs-calculator", destination: "/calculators/stairs", permanent: true },
      { source: "/block-calculator", destination: "/calculators/block", permanent: true },
      { source: "/wall-calculator", destination: "/calculators/wall", permanent: true },
      { source: "/curb-calculator", destination: "/calculators/curb", permanent: true },
      { source: "/column-calculator", destination: "/calculators/column", permanent: true },
      { source: "/stamped-concrete-calculator", destination: "/calculators/stamped", permanent: true },
      // Common pages
      { source: "/pricing", destination: "/templates", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
