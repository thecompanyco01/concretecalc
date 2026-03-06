import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    description:
      "Professional concrete calculators built for contractors. Calculate yards, costs, and materials for any concrete job.",
    siteName: "ConcreteCalc",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConcreteCalc — Free Concrete Calculators for Contractors",
    description:
      "Professional concrete calculators built for contractors.",
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
              description:
                "Professional concrete calculators and business tools built for contractors.",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* Navigation */}
        <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="bg-amber-500 text-slate-900 w-7 h-7 rounded flex items-center justify-center text-sm font-extrabold">C</span>
              <span>ConcreteCalc</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <Link href="/calculators/slab" className="hover:text-white transition">
                Calculators
              </Link>
              <Link href="/states" className="hover:text-white transition">
                State Guides
              </Link>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </div>
            <Link
              href="/templates"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-1.5 rounded text-sm font-semibold transition"
            >
              Pro Templates
            </Link>
          </div>
        </nav>

        <main>{children}</main>
        <Analytics />

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 mt-16 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-500 text-slate-900 w-6 h-6 rounded flex items-center justify-center text-xs font-extrabold">C</span>
                  <span className="text-white font-bold">ConcreteCalc</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Professional concrete calculators built specifically for
                  contractors and concrete businesses. Free tools, premium templates.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Calculators</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/calculators/slab" className="hover:text-white transition">Slab Calculator</Link></li>
                  <li><Link href="/calculators/driveway" className="hover:text-white transition">Driveway Calculator</Link></li>
                  <li><Link href="/calculators/patio" className="hover:text-white transition">Patio Calculator</Link></li>
                  <li><Link href="/calculators/footing" className="hover:text-white transition">Footing Calculator</Link></li>
                  <li><Link href="/calculators/stamped" className="hover:text-white transition">Stamped Concrete</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/templates" className="hover:text-white transition">Pro Templates</Link></li>
                  <li><Link href="/states" className="hover:text-white transition">State Guides</Link></li>
                  <li><Link href="/blog/how-to-bid-concrete-jobs" className="hover:text-white transition">How to Bid Jobs</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-center text-slate-500">
              © {new Date().getFullYear()} ConcreteCalc. Built for concrete professionals.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
