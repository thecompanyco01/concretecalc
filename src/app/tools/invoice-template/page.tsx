"use client";

import { useState } from "react";
import Link from "next/link";

interface LineItem {
  description: string;
  quantity: string;
  rate: string;
}

export default function InvoiceTemplate() {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyLicense, setCompanyLicense] = useState("");

  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("net30");

  const [lineItems, setLineItems] = useState<LineItem[]>([
    { description: "Concrete driveway — 4\" thick, broom finish (approx. 600 SF)", quantity: "10", rate: "750" },
    { description: "Gravel base material & compaction", quantity: "1", rate: "450" },
    { description: "Formwork installation & removal", quantity: "1", rate: "350" },
    { description: "Concrete pour & finishing", quantity: "1", rate: "1200" },
    { description: "Sealer application (1 coat)", quantity: "1", rate: "280" },
  ]);

  const [taxRate, setTaxRate] = useState("0");
  const [notes, setNotes] = useState("Thank you for your business. Please make payment by the due date. Late payments may be subject to a 1.5% monthly finance charge.\n\nPayment by check (payable to company name), bank transfer, or credit card accepted.");

  const addRow = () => setLineItems([...lineItems, { description: "", quantity: "1", rate: "0" }]);
  const removeRow = (i: number) => setLineItems(lineItems.filter((_, idx) => idx !== i));
  const updateRow = (i: number, field: keyof LineItem, value: string) => {
    const updated = [...lineItems];
    updated[i] = { ...updated[i], [field]: value };
    setLineItems(updated);
  };

  const subtotal = lineItems.reduce((sum, item) => {
    return sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.rate) || 0);
  }, 0);
  const taxAmount = subtotal * ((parseFloat(taxRate) || 0) / 100);
  const total = subtotal + taxAmount;

  const fmt = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const paymentTermsLabel: Record<string, string> = {
    "due-on-receipt": "Due on Receipt",
    "net15": "Net 15",
    "net30": "Net 30",
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; font-size: 11px; }
          .print-page { box-shadow: none !important; border: none !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Controls */}
        <div className="no-print mb-6">
          <Link href="/templates" className="text-amber-600 hover:text-amber-700 text-sm font-medium">← Back to Templates</Link>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-3">Invoice Template</h1>
          <p className="text-slate-500 mt-2">Fill in your details, customize line items, then print or save as PDF.</p>

          {/* Company Fields */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-5">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Your Company Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
              <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Address" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} />
              <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Phone" value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} />
              <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="Email" value={companyEmail} onChange={e => setCompanyEmail(e.target.value)} />
              <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="License #" value={companyLicense} onChange={e => setCompanyLicense(e.target.value)} />
            </div>
          </div>

          {/* Client & Invoice Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Client Info</h2>
              <div className="space-y-3">
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" placeholder="Client Name" value={clientName} onChange={e => setClientName(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" placeholder="Client Address" value={clientAddress} onChange={e => setClientAddress(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" placeholder="Client Phone" value={clientPhone} onChange={e => setClientPhone(e.target.value)} />
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" placeholder="Client Email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Invoice Details</h2>
              <div className="space-y-3">
                <input className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" placeholder="Invoice #" value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)} />
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Invoice Date</label>
                  <input type="date" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Due Date</label>
                  <input type="date" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={dueDate} onChange={e => setDueDate(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Payment Terms</label>
                  <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)}>
                    <option value="due-on-receipt">Due on Receipt</option>
                    <option value="net15">Net 15</option>
                    <option value="net30">Net 30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Tax & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Tax Rate</h2>
              <div className="flex items-center gap-2">
                <input type="number" min="0" max="100" step="0.1" className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-24" value={taxRate} onChange={e => setTaxRate(e.target.value)} />
                <span className="text-slate-600 text-sm">%</span>
                <span className="text-slate-400 text-xs">(0 = no tax)</span>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Notes / Payment Instructions</h2>
              <textarea className="border border-slate-300 rounded-lg px-3 py-2 text-sm w-full" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button onClick={() => window.print()} className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition text-sm">
              Print / Save as PDF
            </button>
            <Link href="/tools/estimate-templates" className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg transition text-sm">
              View Estimate Templates →
            </Link>
          </div>
        </div>

        {/* ===== PRINTABLE INVOICE ===== */}
        <div className="print-page bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 px-8 py-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-extrabold text-white">{companyName || "[Your Company Name]"}</h2>
                {companyAddress && <p className="text-slate-400 text-sm mt-1">{companyAddress}</p>}
                <div className="flex flex-wrap gap-x-4 mt-1">
                  {companyPhone && <p className="text-slate-400 text-sm">{companyPhone}</p>}
                  {companyEmail && <p className="text-slate-400 text-sm">{companyEmail}</p>}
                  {companyLicense && <p className="text-slate-400 text-sm">Lic# {companyLicense}</p>}
                </div>
                {!companyAddress && !companyPhone && !companyEmail && !companyLicense && (
                  <p className="text-slate-500 text-sm mt-1">[Address] • [Phone] • [Email] • [License #]</p>
                )}
              </div>
              <div className="text-right">
                <div className="bg-amber-400 text-slate-900 font-extrabold text-2xl px-5 py-2 rounded-lg">INVOICE</div>
                <p className="text-slate-300 text-sm mt-2">#{invoiceNumber}</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            {/* Bill To + Invoice Info */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Bill To</p>
                <p className="font-bold text-slate-900">{clientName || "[Client Name]"}</p>
                {clientAddress && <p className="text-slate-600 text-sm">{clientAddress}</p>}
                {clientPhone && <p className="text-slate-600 text-sm">{clientPhone}</p>}
                {clientEmail && <p className="text-slate-600 text-sm">{clientEmail}</p>}
                {!clientAddress && !clientPhone && !clientEmail && (
                  <p className="text-slate-400 text-sm">[Client Address] • [Phone] • [Email]</p>
                )}
              </div>
              <div className="text-right">
                <div className="space-y-1 text-sm">
                  <div className="flex justify-end gap-8">
                    <span className="text-slate-500 font-medium">Invoice Date:</span>
                    <span className="text-slate-900 font-bold">{invoiceDate ? new Date(invoiceDate + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "[Date]"}</span>
                  </div>
                  <div className="flex justify-end gap-8">
                    <span className="text-slate-500 font-medium">Due Date:</span>
                    <span className="text-slate-900 font-bold">{dueDate ? new Date(dueDate + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "[Due Date]"}</span>
                  </div>
                  <div className="flex justify-end gap-8">
                    <span className="text-slate-500 font-medium">Terms:</span>
                    <span className="text-slate-900 font-bold">{paymentTermsLabel[paymentTerms]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <table className="w-full text-sm mb-2">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3 px-4 text-left font-semibold rounded-tl-lg">Description</th>
                  <th className="py-3 px-4 text-right font-semibold w-20">Qty</th>
                  <th className="py-3 px-4 text-right font-semibold w-28">Rate</th>
                  <th className="py-3 px-4 text-right font-semibold w-28 rounded-tr-lg">Amount</th>
                  <th className="no-print w-8"></th>
                </tr>
              </thead>
              <tbody>
                {lineItems.map((item, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <input
                        className="no-print w-full bg-transparent border-none outline-none text-slate-900"
                        placeholder="Description of work or materials..."
                        value={item.description}
                        onChange={e => updateRow(i, "description", e.target.value)}
                      />
                      <span className="hidden print:inline text-slate-900">{item.description}</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <input
                        className="no-print w-full bg-transparent border-none outline-none text-right text-slate-900"
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={e => updateRow(i, "quantity", e.target.value)}
                      />
                      <span className="hidden print:inline">{item.quantity}</span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="no-print flex items-center justify-end gap-1">
                        <span className="text-slate-400">$</span>
                        <input
                          className="w-20 bg-transparent border-none outline-none text-right text-slate-900"
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.rate}
                          onChange={e => updateRow(i, "rate", e.target.value)}
                        />
                      </div>
                      <span className="hidden print:inline">{fmt(parseFloat(item.rate) || 0)}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-slate-900">
                      {fmt((parseFloat(item.quantity) || 0) * (parseFloat(item.rate) || 0))}
                    </td>
                    <td className="no-print py-3 px-1 text-right">
                      <button
                        onClick={() => removeRow(i)}
                        className="text-slate-300 hover:text-red-400 transition text-lg leading-none"
                        title="Remove row"
                      >×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add Row */}
            <div className="no-print mb-6">
              <button
                onClick={addRow}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1 mt-2"
              >
                + Add Line Item
              </button>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-72 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">{fmt(subtotal)}</span>
                </div>
                {parseFloat(taxRate) > 0 && (
                  <div className="flex justify-between text-slate-600">
                    <span>Tax ({taxRate}%)</span>
                    <span className="font-medium text-slate-900">{fmt(taxAmount)}</span>
                  </div>
                )}
                <div className="border-t border-slate-900 pt-2">
                  <div className="flex justify-between bg-slate-900 text-white px-4 py-3 rounded-lg">
                    <span className="font-extrabold text-base">TOTAL DUE</span>
                    <span className="font-extrabold text-base text-amber-400">{fmt(total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {notes && (
              <div className="border-t border-slate-100 pt-5 mt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Notes</p>
                <p className="text-sm text-slate-600 whitespace-pre-line">{notes}</p>
              </div>
            )}

            {/* Signature line */}
            <div className="grid grid-cols-2 gap-8 mt-10 text-sm text-slate-500">
              <div>
                <div className="border-b border-slate-300 mb-1 pb-6"></div>
                <p>Client Signature &amp; Date</p>
              </div>
              <div>
                <div className="border-b border-slate-300 mb-1 pb-6"></div>
                <p>Authorized Signature &amp; Date</p>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-8">
              Generated at estimateconcrete.com — Free concrete estimating tools for contractors
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
