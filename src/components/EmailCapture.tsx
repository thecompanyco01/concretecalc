"use client";

import { useState } from "react";

interface EmailCaptureProps {
  source: string;
  variant?: "prominent" | "compact";
}

export default function EmailCapture({ source, variant = "prominent" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");

      // Trigger download
      const link = document.createElement("a");
      link.href = "/downloads/free-bid-calculator-sample.xlsx";
      link.download = "free-bid-calculator-sample.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (variant === "compact") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="font-semibold text-green-900 text-sm mb-1">📥 Free Bid Calculator</p>
        <p className="text-green-700 text-xs mb-3">
          Get our basic slab calculator spreadsheet — free. Enter your email to download.
        </p>
        {status === "success" ? (
          <div className="text-green-700 text-sm font-medium">
            ✅ Check your downloads! Want the full version?{" "}
            <a href="/templates" className="underline font-bold">See Pro Templates →</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 border border-green-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-slate-900"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-700 transition disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Download Free"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-600 text-xs mt-1">{errorMsg}</p>
        )}
      </div>
    );
  }

  // Prominent variant (for templates page)
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">📊</div>
        <div className="flex-1">
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            FREE DOWNLOAD
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-3 mb-2">
            Try Our Bid Calculator — Free
          </h2>
          <p className="text-slate-600 mb-1">
            Enter your email to instantly download our basic slab calculator spreadsheet. 
            No credit card, no strings attached.
          </p>
          <p className="text-sm text-slate-500 mb-4">
            Includes cubic yard calculations, material costs, labor estimates, and bag counts. 
            Works in Excel &amp; Google Sheets.
          </p>

          {status === "success" ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
              <p className="text-green-800 font-semibold">✅ Your download has started!</p>
              <p className="text-green-700 text-sm mt-1">
                Like the free version? The{" "}
                <a href="https://buy.stripe.com/00wcN673p8ZTb2jgafaMU03" className="underline font-bold">
                  full Bid Calculator ($29)
                </a>{" "}
                includes driveways, patios, footings, profit margins, and professional bid layouts.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 border border-green-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 text-slate-900"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-green-700 transition disabled:opacity-50 whitespace-nowrap shadow-sm"
              >
                {status === "loading" ? "Sending..." : "Download Free Sample →"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
          )}

          <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500">
            <span>🔒 No spam, ever</span>
            <span>📁 .xlsx format</span>
            <span>⚡ Instant download</span>
          </div>
        </div>
      </div>
    </div>
  );
}
