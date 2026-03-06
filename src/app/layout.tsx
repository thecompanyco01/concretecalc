import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConcreteCalc — Free Concrete Calculators for Contractors",
  description:
    "Professional concrete calculators built for contractors. Estimate slabs, driveways, patios, footings & more. Free tools + premium templates for concrete businesses.",
  keywords:
    "concrete calculator, concrete slab calculator, concrete cost calculator, concrete estimate, concrete bidding",
  metadataBase: new URL("https://concretecalc.vercel.app"),
  openGraph: {
    type: "website",
    title: "ConcreteCalc — Free Concrete Calculators for Contractors",
    description: "Professional concrete calculators built for contractors. Calculate yards, costs, and materials for any concrete job.",
    siteName: "ConcreteCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConcreteCalc — Free Concrete Calculators for Contractors",
    description: "Professional concrete calculators built for contractors.",
  },
  alternates: {
    canonical: "https://concretecalc.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ConcreteCalc",
              url: "https://concretecalc.vercel.app",
              description: "Professional concrete calculators and business tools built for contractors.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://concretecalc.vercel.app/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ConcreteCalc",
              url: "https://concretecalc.vercel.app",
              logo: "https://concretecalc.vercel.app/logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-orange-600">
              🧱 ConcreteCalc
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link
                href="/calculators/slab"
                className="hover:text-orange-600 transition"
              >
                Slab
              </Link>
              <Link
                href="/calculators/block"
                className="hover:text-orange-600 transition"
              >
                Block
              </Link>
              <Link
                href="/calculators/rebar"
                className="hover:text-orange-600 transition"
              >
                Rebar
              </Link>
              <Link
                href="/calculators/driveway"
                className="hover:text-orange-600 transition"
              >
                Driveway
              </Link>
              <Link
                href="/calculators/stamped"
                className="hover:text-orange-600 transition"
              >
                Stamped
              </Link>
              <Link
                href="/states"
                className="hover:text-orange-600 transition"
              >
                State Guides
              </Link>
              <Link
                href="/blog"
                className="hover:text-orange-600 transition"
              >
                Blog
              </Link>
            </div>
            <Link
              href="/templates"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition"
            >
              Pro Templates
            </Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-3">🧱 ConcreteCalc</h3>
                <p className="text-sm">
                  Free professional concrete calculators built specifically for
                  contractors and concrete businesses.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Calculators</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/calculators/slab" className="hover:text-white">Slab Calculator</Link></li>
                  <li><Link href="/calculators/block" className="hover:text-white">Block Calculator</Link></li>
                  <li><Link href="/calculators/rebar" className="hover:text-white">Rebar Calculator</Link></li>
                  <li><Link href="/calculators/driveway" className="hover:text-white">Driveway Calculator</Link></li>
                  <li><Link href="/calculators/patio" className="hover:text-white">Patio Calculator</Link></li>
                  <li><Link href="/calculators/stamped" className="hover:text-white">Stamped Concrete</Link></li>
                  <li><Link href="/calculators/sidewalk" className="hover:text-white">Sidewalk Calculator</Link></li>
                  <li><Link href="/calculators/footing" className="hover:text-white">Footing Calculator</Link></li>
                  <li><Link href="/calculators/stairs" className="hover:text-white">Stairs Calculator</Link></li>
                </ul>
              </div>
              <div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/templates" className="hover:text-white">
                      Pro Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/states" className="hover:text-white">
                      State Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-bid-concrete-jobs"
                      className="hover:text-white"
                    >
                      How to Bid Concrete Jobs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
              © {new Date().getFullYear()} ConcreteCalc. Built for concrete
              professionals.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
