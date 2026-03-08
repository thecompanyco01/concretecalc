import { Metadata } from "next";
import Link from "next/link";
import { STATES, getStateBySlug, getAllStateSlugs } from "../data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  return {
    title: `Concrete Contractor License & Costs in ${state.name} (2026 Guide) | EstimateConcrete`,
    description: `Complete guide to starting a concrete business in ${state.name}. License requirements, concrete costs ($${state.avgCostPerYard}/yard), insurance, and business tips for ${state.abbreviation} contractors.`,
    keywords: `concrete contractor license ${state.name}, concrete cost per yard ${state.name}, how to start concrete business ${state.name}, concrete contractor ${state.name}`,
  };
}

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const totalCostExample = (
    state.avgCostPerYard * 5.5 +
    state.avgLaborPerSqFt * 400 +
    500
  ).toFixed(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        {" / "}
        <Link href="/states" className="hover:text-orange-600">States</Link>
        {" / "}
        <span className="text-gray-900 font-medium">{state.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Concrete Contractor Guide: {state.name} ({state.abbreviation})
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Everything you need to know about concrete contracting in {state.name} — licensing requirements,
        current pricing, insurance, and how to start your business in {state.abbreviation}.
      </p>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard label="Avg Cost/Yard" value={`$${state.avgCostPerYard}`} />
        <StatCard label="Labor/Sq Ft" value={`$${state.avgLaborPerSqFt.toFixed(2)}`} />
        <StatCard label="Frost Line" value={state.frostLineDepth} />
        <StatCard label="Growth" value={state.constructionGrowth} />
      </div>

      {/* Licensing Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">📋 Licensing Requirements in {state.name}</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoRow label="License Required" value={state.licenseRequired ? "✅ Yes" : "❌ No state license required"} />
            <InfoRow label="License Type" value={state.licenseType} />
            <InfoRow label="Exam Required" value={state.examRequired ? "Yes" : "No"} />
            <InfoRow label="Licensing Body" value={state.licensingBody} />
            <InfoRow label="Bond Required" value={state.bondRequired ? `Yes — ${state.bondAmount}` : "No"} />
            <InfoRow label="Insurance Minimum" value={state.insuranceMinimum} />
          </div>
          {state.licensingUrl && (
            <a
              href={state.licensingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium"
            >
              → Visit {state.abbreviation} Licensing Website
            </a>
          )}
        </div>
      </section>

      {/* Cost Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">💰 Concrete Costs in {state.name} (2026)</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Item</th>
                <th className="pb-2 text-right">Cost in {state.abbreviation}</th>
                <th className="pb-2 text-right">National Avg</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2">Ready-mix concrete (per cubic yard)</td>
                <td className="py-2 text-right font-semibold">${state.avgCostPerYard}</td>
                <td className="py-2 text-right text-gray-500">$150</td>
              </tr>
              <tr>
                <td className="py-2">Concrete labor (per sq ft)</td>
                <td className="py-2 text-right font-semibold">${state.avgLaborPerSqFt.toFixed(2)}</td>
                <td className="py-2 text-right text-gray-500">$6.00</td>
              </tr>
              <tr>
                <td className="py-2">Example: 20×20 slab (4&quot; thick)</td>
                <td className="py-2 text-right font-bold text-orange-600">${Number(totalCostExample).toLocaleString()}</td>
                <td className="py-2 text-right text-gray-500">$3,700</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 flex gap-3">
            <Link
              href="/calculators/slab"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700"
            >
              Calculate Your Exact Cost →
            </Link>
          </div>
        </div>
      </section>

      {/* Climate & Conditions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">🌡️ Climate & Pouring Conditions</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
          <InfoRow label="Climate" value={state.climate} />
          <InfoRow label="Frost Line Depth" value={state.frostLineDepth} />
          <p className="text-gray-600 text-sm mt-2">
            Frost line depth determines minimum footing depth. In {state.name}, footings must extend at
            least {state.frostLineDepth} below grade to prevent frost heave. Use our{" "}
            <Link href="/calculators/footing" className="text-orange-600 hover:underline">
              Footing Calculator
            </Link>{" "}
            to estimate your footing concrete needs.
          </p>
        </div>
      </section>

      {/* How to Start */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          🚀 How to Start a Concrete Business in {state.name}
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold">Get Licensed</h3>
                <p className="text-gray-600 text-sm">
                  {state.licenseRequired
                    ? `${state.name} requires a ${state.licenseType}. Visit ${state.licensingBody} to apply.${state.examRequired ? " You'll need to pass an exam." : ""}`
                    : `${state.name} doesn't require a state contractor license, but check local requirements in ${state.topCities.slice(0, 3).join(", ")}.`}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold">Get Insured</h3>
                <p className="text-gray-600 text-sm">
                  Minimum recommended: {state.insuranceMinimum}. Also get commercial auto insurance
                  for your truck and equipment. Workers&apos; comp is required as soon as you hire employees.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold">Get Equipment</h3>
                <p className="text-gray-600 text-sm">
                  Start with the basics: concrete mixer (or order ready-mix), bull float, hand trowels,
                  edger, groover, wheelbarrow, forms, and a reliable truck. Budget $5,000-$15,000 for starter equipment.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold">Price Your Work</h3>
                <p className="text-gray-600 text-sm">
                  In {state.name}, concrete costs ${state.avgCostPerYard}/yard and labor runs ${state.avgLaborPerSqFt.toFixed(2)}/sq ft.
                  Use our{" "}
                  <Link href="/calculators/slab" className="text-orange-600 hover:underline">calculators</Link> and{" "}
                  <Link href="/templates" className="text-orange-600 hover:underline">estimate templates</Link> to
                  price jobs accurately from day one.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
              <div>
                <h3 className="font-bold">Find Customers</h3>
                <p className="text-gray-600 text-sm">
                  Start with Google Business Profile (free), yard signs on completed jobs, and word-of-mouth.
                  Top markets in {state.name}: {state.topCities.join(", ")}.
                </p>
              </div>
            </li>
          </ol>

          <p className="mt-4 text-sm text-gray-500 italic">{state.notes}</p>
        </div>
      </section>

      {/* Top Cities */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">🏙️ Top Markets in {state.name}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {state.topCities.map((city) => (
            <div key={city} className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold">{city}, {state.abbreviation}</h3>
              <p className="text-sm text-gray-500">Active concrete market</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related States */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">📍 Other State Guides</h2>
        <div className="flex flex-wrap gap-2">
          {STATES.filter((s) => s.slug !== slug).map((s) => (
            <Link
              key={s.slug}
              href={`/states/${s.slug}`}
              className="bg-gray-100 hover:bg-orange-100 text-sm px-3 py-1 rounded-full transition"
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/states"
            className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-medium"
          >
            View All States →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Start Your Concrete Business in {state.name}?
        </h2>
        <p className="text-gray-600 mb-6">
          Get everything you need — estimate templates, bid calculators, contract templates,
          and a complete business plan. Built specifically for concrete contractors.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/templates"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition"
          >
            Get the Business Starter Kit — $297
          </Link>
          <Link
            href="/calculators/slab"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition"
          >
            Try Free Calculators
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-bold text-orange-600">{value}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm text-gray-500">{label}:</span>
      <span className="ml-2 font-medium">{value}</span>
    </div>
  );
}
