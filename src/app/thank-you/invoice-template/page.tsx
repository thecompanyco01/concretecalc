import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Invoice Template | EstimateConcrete",
  robots: "noindex",
};

export default function ThankYouInvoiceTemplate() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-6">✅</div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
        Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-slate-500 mb-8">
        Your Professional Invoice Template is ready to download.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-4">📄 Download Your Invoice Template</h2>
        <p className="text-slate-600 text-sm mb-4">
          Your invoice template includes auto-calculating line items, tax formulas, and a payment
          tracker sheet to manage all your outstanding invoices in one place.
        </p>
        <a
          href="/downloads/invoice-template-pro-d4e1c7.xlsx"
          download
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition text-sm mb-4"
        >
          ⬇️ Download Excel File (.xlsx)
        </a>
        <p className="text-xs text-slate-400">
          Bookmark this page — you can re-download anytime.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Quick Start Guide</h2>
        <ol className="space-y-3 text-sm text-slate-600">
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span> Open the Excel file and fill in your company name, address, phone, and license number at the top</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span> Enter your client&apos;s info and the project details</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span> Add line items — quantities and unit prices auto-calculate totals, subtotal, tax, and grand total</li>
          <li className="flex gap-3"><span className="bg-amber-100 text-amber-800 font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</span> Use the Payment Tracker sheet to log invoices and track status (Sent, Paid, Overdue)</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">📋 What&apos;s Included</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>✓ Auto-calculated line items with Qty × Unit Price formulas</li>
          <li>✓ Subtotal, tax rate, and grand total — all auto-calculated</li>
          <li>✓ Payment terms section with late-fee language</li>
          <li>✓ Payment Tracker sheet — manage up to 30 invoices</li>
          <li>✓ Status tracking: Sent, Paid, Overdue with color coding</li>
          <li>✓ Professional print-ready layout</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8 text-left">
        <h2 className="text-lg font-bold text-slate-900 mb-3">🔧 More Tools</h2>
        <p className="text-slate-600 text-sm mb-3">
          Check out our other professional templates and free calculators:
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/templates"
            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-6 rounded-lg transition text-sm"
          >
            All Templates →
          </Link>
          <Link
            href="/calculators"
            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-6 rounded-lg transition text-sm"
          >
            Free Calculators →
          </Link>
        </div>
      </div>

      <div className="bg-slate-100 rounded-xl p-6 text-sm text-slate-500">
        <p className="font-medium text-slate-700 mb-1">Need help?</p>
        <p>Email us at <a href="mailto:support@estimateconcrete.com" className="text-amber-600 underline">support@estimateconcrete.com</a> — we usually respond within a few hours.</p>
      </div>
    </div>
  );
}
