import ExcelJS from "exceljs";
import path from "path";

const OUT = path.join(__dirname, "..", "public", "downloads");

// Color palette (matching other templates)
const HEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
const HEADER_FONT: Partial<ExcelJS.Font> = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
const SUBHEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF1F5F9" } };
const ACCENT_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
const GREEN_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD1FAE5" } };
const GREEN_TOTAL_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF10B981" } };
const BLUE_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDBEAFE" } };
const CURRENCY_FMT = '"$"#,##0.00';
const PCT_FMT = "0%";

function applyBorder(cell: ExcelJS.Cell) {
  cell.border = {
    top: { style: "thin", color: { argb: "FFE2E8F0" } },
    bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
    left: { style: "thin", color: { argb: "FFE2E8F0" } },
    right: { style: "thin", color: { argb: "FFE2E8F0" } },
  };
}

function styleHeaderRow(ws: ExcelJS.Worksheet, row: number, cols: number) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getCell(row, c);
    cell.fill = HEADER_FILL;
    cell.font = HEADER_FONT;
    cell.alignment = { vertical: "middle", horizontal: c === 1 ? "left" : "center" };
    applyBorder(cell);
  }
  ws.getRow(row).height = 22;
}

function styleSubheaderRow(ws: ExcelJS.Worksheet, row: number, cols: number) {
  for (let c = 1; c <= cols; c++) {
    const cell = ws.getCell(row, c);
    cell.fill = SUBHEADER_FILL;
    cell.font = { bold: true, size: 10 };
    applyBorder(cell);
  }
}

async function generateInvoiceTemplate() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  // ==================== HOW TO USE SHEET ====================
  const wsHelp = wb.addWorksheet("📋 How to Use", { properties: { tabColor: { argb: "FFFEF3C7" } } });
  wsHelp.orderNo = 0;
  wsHelp.columns = [{ width: 6 }, { width: 60 }];

  wsHelp.mergeCells("A1:B1");
  wsHelp.getCell("A1").value = "📋 HOW TO USE: Concrete Invoice Template";
  wsHelp.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  wsHelp.getRow(1).height = 30;

  wsHelp.mergeCells("A3:B3");
  wsHelp.getCell("A3").value = "ABOUT THIS TEMPLATE";
  wsHelp.getCell("A3").font = { bold: true, size: 12, color: { argb: "FF1E293B" } };

  wsHelp.mergeCells("A4:B4");
  wsHelp.getCell("A4").value = "Professional concrete invoice template with auto-calculating line items, tax, and totals. Send polished invoices that get you paid faster. Includes payment tracking and terms.";
  wsHelp.getCell("A4").font = { size: 10 };
  wsHelp.getCell("A4").alignment = { wrapText: true };
  wsHelp.getRow(4).height = 40;

  let r = 6;
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "STEP-BY-STEP INSTRUCTIONS";
  wsHelp.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF1E293B" } };
  r++;

  const steps = [
    "Go to the 'Invoice' sheet",
    "Fill in your company information at the top (name, address, phone, email, license #)",
    "Enter the client's name, address, phone, and email in the CLIENT section",
    "Set the Invoice #, Invoice Date, Due Date, and Project Address",
    "Add line items: description, quantity, unit, and rate — the Amount column auto-calculates",
    "Review the Subtotal, Tax Rate (adjust if needed), Tax Amount, and Total — all auto-calculated",
    "Add payment terms and any notes/conditions at the bottom",
    "Print or save as PDF to send to your client",
    "Use the 'Payment Tracker' sheet to track payments across multiple invoices",
  ];
  steps.forEach((step, i) => {
    wsHelp.getCell(`A${r}`).value = `${i + 1}.`;
    wsHelp.getCell(`A${r}`).font = { bold: true, size: 10 };
    wsHelp.getCell(`A${r}`).alignment = { horizontal: "center" };
    wsHelp.getCell(`B${r}`).value = step;
    wsHelp.getCell(`B${r}`).font = { size: 10 };
    wsHelp.getCell(`B${r}`).alignment = { wrapText: true };
    r++;
  });

  r++;
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "🟡 YELLOW CELLS = Editable (enter your data here)";
  wsHelp.getCell(`A${r}`).font = { bold: true, size: 11, color: { argb: "FFB45309" } };
  wsHelp.getCell(`A${r}`).fill = ACCENT_FILL;
  r++;

  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "📊 CELLS WITH FORMULAS (don't overwrite): Amount column (E), Subtotal, Tax Amount, Total, Balance Due";
  wsHelp.getCell(`A${r}`).font = { size: 10, color: { argb: "FFDC2626" } };
  r++;

  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "✏️ EDITABLE CELLS: All yellow cells — company info, client info, line items (description, qty, unit, rate), tax rate, payment terms, notes";
  wsHelp.getCell(`A${r}`).font = { size: 10, color: { argb: "FF059669" } };
  r += 2;

  // Pro Tips
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "💡 PRO TIPS — GET PAID FASTER";
  wsHelp.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF1E293B" } };
  wsHelp.getCell(`A${r}`).fill = BLUE_FILL;
  r++;

  const proTips = [
    "Send invoices the SAME DAY the work is completed — every day you wait reduces your chance of on-time payment",
    "Include a clear due date (Net 15 or Net 30) and a late fee clause — contractors who don't get ghosted on payments",
    "Add a 2% discount for payment within 10 days — many clients will pay early to save money",
    "Always include your license # and insurance info — it builds trust and looks professional",
    "For large jobs, invoice in stages (deposit, progress, final) — don't wait until the end for full payment",
    "Keep a copy of every invoice in your records — you'll need them for taxes and in case of disputes",
  ];
  proTips.forEach(tip => {
    wsHelp.mergeCells(`A${r}:B${r}`);
    wsHelp.getCell(`A${r}`).value = `  💡 ${tip}`;
    wsHelp.getCell(`A${r}`).font = { size: 10 };
    wsHelp.getCell(`A${r}`).alignment = { wrapText: true };
    wsHelp.getRow(r).height = 28;
    r++;
  });

  r++;
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "TIPS FOR PRINTING / PDF EXPORT";
  wsHelp.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF1E293B" } };
  r++;
  const printTips = [
    "• File > Print or Ctrl+P to print",
    "• Set to 'Fit Sheet on One Page' for best results",
    "• Use 'Portrait' orientation for invoices",
    "• To save as PDF: File > Save As > PDF format",
    "• Print Preview first to check margins and page breaks",
  ];
  printTips.forEach(tip => {
    wsHelp.mergeCells(`A${r}:B${r}`);
    wsHelp.getCell(`A${r}`).value = tip;
    wsHelp.getCell(`A${r}`).font = { size: 10 };
    r++;
  });

  r++;
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "🔗 MORE FREE TOOLS: https://estimateconcrete.com";
  wsHelp.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF2563EB" } };
  r++;
  wsHelp.mergeCells(`A${r}:B${r}`);
  wsHelp.getCell(`A${r}`).value = "Free concrete calculators, estimating guides, and contractor resources";
  wsHelp.getCell(`A${r}`).font = { size: 10, color: { argb: "FF64748B" } };

  // ==================== INVOICE SHEET ====================
  const ws = wb.addWorksheet("Invoice");
  ws.columns = [
    { width: 34 }, // A - Description
    { width: 10 }, // B - Qty
    { width: 10 }, // C - Unit
    { width: 14 }, // D - Rate
    { width: 14 }, // E - Amount
    { width: 14 }, // F - extra space
  ];

  // Company Header
  ws.mergeCells("A1:E1");
  const titleCell = ws.getCell("A1");
  titleCell.value = "[YOUR COMPANY NAME]";
  titleCell.font = { bold: true, size: 20, color: { argb: "FF1E293B" } };
  titleCell.alignment = { horizontal: "left", vertical: "middle" };
  ws.getRow(1).height = 32;

  ws.mergeCells("A2:E2");
  ws.getCell("A2").value = "[Street Address]";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };
  ws.getCell("A2").fill = ACCENT_FILL;

  ws.mergeCells("A3:E3");
  ws.getCell("A3").value = "[City, State ZIP] • [Phone] • [Email]";
  ws.getCell("A3").font = { size: 10, color: { argb: "FF64748B" } };
  ws.getCell("A3").fill = ACCENT_FILL;

  ws.mergeCells("A4:E4");
  ws.getCell("A4").value = "License #: [Your License Number]  •  Insured & Bonded";
  ws.getCell("A4").font = { size: 9, color: { argb: "FF94A3B8" } };
  ws.getCell("A4").fill = ACCENT_FILL;

  // INVOICE title
  ws.mergeCells("A6:E6");
  ws.getCell("A6").value = "INVOICE";
  ws.getCell("A6").font = { bold: true, size: 18, color: { argb: "FF1E293B" } };
  ws.getCell("A6").alignment = { horizontal: "center" };
  ws.getRow(6).height = 28;

  // Invoice details row
  let ir = 8;
  ws.getCell(`A${ir}`).value = "Invoice #:";
  ws.getCell(`A${ir}`).font = { bold: true, size: 10 };
  ws.getCell(`B${ir}`).value = "INV-001";
  ws.getCell(`B${ir}`).fill = ACCENT_FILL;
  applyBorder(ws.getCell(`B${ir}`));
  ws.getCell(`D${ir}`).value = "Invoice Date:";
  ws.getCell(`D${ir}`).font = { bold: true, size: 10 };
  ws.getCell(`E${ir}`).value = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  ws.getCell(`E${ir}`).fill = ACCENT_FILL;
  applyBorder(ws.getCell(`E${ir}`));
  ir++;

  ws.getCell(`A${ir}`).value = "Project Address:";
  ws.getCell(`A${ir}`).font = { bold: true, size: 10 };
  ws.getCell(`B${ir}`).value = "[Project Address]";
  ws.getCell(`B${ir}`).fill = ACCENT_FILL;
  applyBorder(ws.getCell(`B${ir}`));
  ws.getCell(`D${ir}`).value = "Due Date:";
  ws.getCell(`D${ir}`).font = { bold: true, size: 10 };
  ws.getCell(`E${ir}`).value = "Net 30";
  ws.getCell(`E${ir}`).fill = ACCENT_FILL;
  applyBorder(ws.getCell(`E${ir}`));
  ir += 2;

  // Client info section
  ws.getCell(`A${ir}`).value = "BILL TO";
  ws.mergeCells(`A${ir}:B${ir}`);
  for (let c = 1; c <= 2; c++) { ws.getCell(ir, c).fill = HEADER_FILL; ws.getCell(ir, c).font = HEADER_FONT; applyBorder(ws.getCell(ir, c)); }
  ir++;

  const clientFields = [
    ["Name:", "[Client Name]"],
    ["Address:", "[Client Address]"],
    ["Phone:", "[Client Phone]"],
    ["Email:", "[Client Email]"],
  ];
  clientFields.forEach(([label, placeholder]) => {
    ws.getCell(`A${ir}`).value = label;
    ws.getCell(`A${ir}`).font = { bold: true, size: 10 };
    ws.getCell(`B${ir}`).value = placeholder;
    ws.getCell(`B${ir}`).fill = ACCENT_FILL;
    applyBorder(ws.getCell(`A${ir}`));
    applyBorder(ws.getCell(`B${ir}`));
    ir++;
  });
  ir++;

  // Line Items Header
  const lineItemHeaderRow = ir;
  ["Description", "Qty", "Unit", "Rate", "Amount"].forEach((h, i) => {
    ws.getCell(ir, i + 1).value = h;
  });
  styleHeaderRow(ws, ir, 5);
  ir++;

  // 15 line item rows with formulas
  const lineItemStart = ir;
  const sampleItems: [string, number | string, string, number | string][] = [
    ["Concrete (ready-mix 4000 PSI)", 12, "CY", 155],
    ["Gravel base material & delivery", 8, "Tons", 35],
    ["Rebar (#4 bar)", 300, "LF", 0.75],
    ["Formwork installation & materials", 1, "Lot", 800],
    ["Site prep, grading & excavation", 16, "Hrs", 55],
    ["Concrete placement & finishing", 20, "Hrs", 65],
    ["Sealer application", 1, "Lot", 350],
    ["Equipment rental (compactor, vibrator)", 1, "Lot", 450],
    ["Cleanup & debris removal", 6, "Hrs", 45],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ];

  sampleItems.forEach(([desc, qty, unit, rate], i) => {
    ws.getCell(ir, 1).value = desc as string;
    ws.getCell(ir, 1).fill = desc ? undefined : ACCENT_FILL;
    if (desc) ws.getCell(ir, 1).fill = ACCENT_FILL;
    else ws.getCell(ir, 1).fill = ACCENT_FILL;

    ws.getCell(ir, 2).value = qty as number;
    ws.getCell(ir, 2).fill = ACCENT_FILL;
    ws.getCell(ir, 2).alignment = { horizontal: "center" };

    ws.getCell(ir, 3).value = unit as string;
    ws.getCell(ir, 3).fill = ACCENT_FILL;
    ws.getCell(ir, 3).alignment = { horizontal: "center" };

    ws.getCell(ir, 4).value = rate as number;
    ws.getCell(ir, 4).fill = ACCENT_FILL;
    ws.getCell(ir, 4).numFmt = CURRENCY_FMT;

    // Amount = Qty × Rate (handles blank rows gracefully)
    ws.getCell(ir, 5).value = { formula: `IF(B${ir}="","",B${ir}*D${ir})` } as any;
    ws.getCell(ir, 5).numFmt = CURRENCY_FMT;

    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(ir, c));
    ir++;
  });
  const lineItemEnd = ir - 1;
  ir++;

  // Subtotal, Tax, Total
  const subtotalRow = ir;
  ws.getCell(ir, 4).value = "Subtotal:";
  ws.getCell(ir, 4).font = { bold: true, size: 10 };
  ws.getCell(ir, 4).alignment = { horizontal: "right" };
  ws.getCell(ir, 5).value = { formula: `SUM(E${lineItemStart}:E${lineItemEnd})` } as any;
  ws.getCell(ir, 5).numFmt = CURRENCY_FMT;
  ws.getCell(ir, 5).font = { bold: true };
  applyBorder(ws.getCell(ir, 4));
  applyBorder(ws.getCell(ir, 5));
  ir++;

  const taxRateRow = ir;
  ws.getCell(ir, 4).value = "Tax Rate:";
  ws.getCell(ir, 4).font = { bold: true, size: 10 };
  ws.getCell(ir, 4).alignment = { horizontal: "right" };
  ws.getCell(ir, 5).value = 0;
  ws.getCell(ir, 5).numFmt = PCT_FMT;
  ws.getCell(ir, 5).fill = ACCENT_FILL;
  ws.getCell(ir, 5).note = "Enter your local sales tax rate (e.g. 0.08 for 8%). Set to 0% if labor-only or tax-exempt.";
  applyBorder(ws.getCell(ir, 4));
  applyBorder(ws.getCell(ir, 5));
  ir++;

  const taxAmtRow = ir;
  ws.getCell(ir, 4).value = "Tax Amount:";
  ws.getCell(ir, 4).font = { bold: true, size: 10 };
  ws.getCell(ir, 4).alignment = { horizontal: "right" };
  ws.getCell(ir, 5).value = { formula: `E${subtotalRow}*E${taxRateRow}` } as any;
  ws.getCell(ir, 5).numFmt = CURRENCY_FMT;
  applyBorder(ws.getCell(ir, 4));
  applyBorder(ws.getCell(ir, 5));
  ir++;

  // Payments / Credits
  const paymentsRow = ir;
  ws.getCell(ir, 4).value = "Payments/Credits:";
  ws.getCell(ir, 4).font = { bold: true, size: 10 };
  ws.getCell(ir, 4).alignment = { horizontal: "right" };
  ws.getCell(ir, 5).value = 0;
  ws.getCell(ir, 5).numFmt = CURRENCY_FMT;
  ws.getCell(ir, 5).fill = ACCENT_FILL;
  ws.getCell(ir, 5).note = "Enter deposits or prior payments received. This amount is subtracted from the total.";
  applyBorder(ws.getCell(ir, 4));
  applyBorder(ws.getCell(ir, 5));
  ir++;

  // Grand Total
  const totalRow = ir;
  ws.getCell(ir, 1).value = "";
  ws.getCell(ir, 4).value = "TOTAL DUE:";
  ws.getCell(ir, 4).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
  ws.getCell(ir, 4).alignment = { horizontal: "right", vertical: "middle" };
  ws.getCell(ir, 5).value = { formula: `E${subtotalRow}+E${taxAmtRow}-E${paymentsRow}` } as any;
  ws.getCell(ir, 5).numFmt = CURRENCY_FMT;
  ws.getCell(ir, 5).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
  for (let c = 1; c <= 5; c++) { ws.getCell(ir, c).fill = GREEN_TOTAL_FILL; applyBorder(ws.getCell(ir, c)); }
  ws.getRow(ir).height = 30;
  ir += 2;

  // Payment Terms section
  ws.getCell(`A${ir}`).value = "PAYMENT TERMS";
  ws.mergeCells(`A${ir}:E${ir}`);
  for (let c = 1; c <= 5; c++) { ws.getCell(ir, c).fill = HEADER_FILL; ws.getCell(ir, c).font = HEADER_FONT; applyBorder(ws.getCell(ir, c)); }
  ir++;

  const paymentTerms = [
    "• Payment is due within 30 days of invoice date unless otherwise agreed",
    "• Accepted payment methods: Check, ACH/Bank Transfer, Credit Card",
    "• A late fee of 1.5% per month will be applied to overdue balances",
    "• 2% discount available for payment within 10 days (2/10 Net 30)",
    "• Make checks payable to: [YOUR COMPANY NAME]",
  ];
  paymentTerms.forEach(term => {
    ws.getCell(`A${ir}`).value = term;
    ws.getCell(`A${ir}`).font = { size: 9 };
    ws.mergeCells(`A${ir}:E${ir}`);
    ir++;
  });
  ir++;

  // Notes / Conditions
  ws.getCell(`A${ir}`).value = "NOTES / CONDITIONS";
  ws.mergeCells(`A${ir}:E${ir}`);
  for (let c = 1; c <= 5; c++) { ws.getCell(ir, c).fill = HEADER_FILL; ws.getCell(ir, c).font = HEADER_FONT; applyBorder(ws.getCell(ir, c)); }
  ir++;

  ws.mergeCells(`A${ir}:E${ir + 3}`);
  ws.getCell(`A${ir}`).value = "[Add any project-specific notes, warranty info, or special conditions here]";
  ws.getCell(`A${ir}`).fill = ACCENT_FILL;
  ws.getCell(`A${ir}`).alignment = { wrapText: true, vertical: "top" };
  ws.getCell(`A${ir}`).font = { size: 10, italic: true, color: { argb: "FF94A3B8" } };
  applyBorder(ws.getCell(`A${ir}`));
  ir += 5;

  // Footer
  ws.getCell(`A${ir}`).value = "Thank you for your business!";
  ws.getCell(`A${ir}`).font = { bold: true, size: 11, color: { argb: "FF1E293B" } };
  ws.mergeCells(`A${ir}:E${ir}`);
  ws.getCell(`A${ir}`).alignment = { horizontal: "center" };
  ir++;

  ws.getCell(`A${ir}`).value = "Template from EstimateConcrete.com — Professional Concrete Tools";
  ws.getCell(`A${ir}`).font = { size: 8, color: { argb: "FF94A3B8" } };
  ws.mergeCells(`A${ir}:E${ir}`);
  ws.getCell(`A${ir}`).alignment = { horizontal: "center" };

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };
  ws.headerFooter = { oddFooter: "EstimateConcrete.com — Professional Concrete Tools" };

  // ==================== PAYMENT TRACKER SHEET ====================
  const wsPT = wb.addWorksheet("Payment Tracker", { properties: { tabColor: { argb: "FF10B981" } } });
  wsPT.columns = [
    { width: 6 },   // #
    { width: 14 },  // Invoice #
    { width: 14 },  // Date
    { width: 20 },  // Client
    { width: 14 },  // Invoice Amount
    { width: 14 },  // Paid Amount
    { width: 14 },  // Balance
    { width: 12 },  // Status
    { width: 14 },  // Paid Date
    { width: 18 },  // Notes
  ];

  wsPT.mergeCells("A1:J1");
  wsPT.getCell("A1").value = "💰 PAYMENT TRACKER";
  wsPT.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  wsPT.getRow(1).height = 30;

  wsPT.mergeCells("A2:J2");
  wsPT.getCell("A2").value = "Track all invoices and payments in one place. Never lose track of who owes you money.";
  wsPT.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ["#", "Invoice #", "Invoice Date", "Client Name", "Invoice Amount", "Paid Amount", "Balance", "Status", "Paid Date", "Notes"].forEach((h, i) => {
    wsPT.getCell(4, i + 1).value = h;
  });
  styleHeaderRow(wsPT, 4, 10);

  for (let i = 0; i < 30; i++) {
    const row = 5 + i;
    wsPT.getCell(row, 1).value = i + 1;
    wsPT.getCell(row, 1).alignment = { horizontal: "center" };
    wsPT.getCell(row, 2).fill = ACCENT_FILL;  // Invoice #
    wsPT.getCell(row, 3).fill = ACCENT_FILL;  // Date
    wsPT.getCell(row, 4).fill = ACCENT_FILL;  // Client
    wsPT.getCell(row, 5).fill = ACCENT_FILL;  // Invoice Amount
    wsPT.getCell(row, 5).numFmt = CURRENCY_FMT;
    wsPT.getCell(row, 6).fill = ACCENT_FILL;  // Paid Amount
    wsPT.getCell(row, 6).numFmt = CURRENCY_FMT;
    // Balance = Invoice Amount - Paid Amount
    wsPT.getCell(row, 7).value = { formula: `IF(E${row}="","",E${row}-F${row})` } as any;
    wsPT.getCell(row, 7).numFmt = CURRENCY_FMT;
    wsPT.getCell(row, 8).fill = ACCENT_FILL;  // Status
    wsPT.getCell(row, 8).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Sent,Paid,Partial,Overdue,Disputed,Written Off"'],
    };
    wsPT.getCell(row, 9).fill = ACCENT_FILL;  // Paid Date
    wsPT.getCell(row, 10).fill = ACCENT_FILL; // Notes
    for (let c = 1; c <= 10; c++) applyBorder(wsPT.getCell(row, c));
  }

  // Summary row
  const sumRow = 36;
  wsPT.getCell(sumRow, 1).value = "";
  wsPT.getCell(sumRow, 4).value = "TOTALS";
  wsPT.getCell(sumRow, 4).font = { bold: true, size: 11 };
  wsPT.getCell(sumRow, 5).value = { formula: "SUM(E5:E34)" } as any;
  wsPT.getCell(sumRow, 5).numFmt = CURRENCY_FMT;
  wsPT.getCell(sumRow, 5).font = { bold: true };
  wsPT.getCell(sumRow, 6).value = { formula: "SUM(F5:F34)" } as any;
  wsPT.getCell(sumRow, 6).numFmt = CURRENCY_FMT;
  wsPT.getCell(sumRow, 6).font = { bold: true };
  wsPT.getCell(sumRow, 7).value = { formula: "SUM(G5:G34)" } as any;
  wsPT.getCell(sumRow, 7).numFmt = CURRENCY_FMT;
  wsPT.getCell(sumRow, 7).font = { bold: true };
  styleSubheaderRow(wsPT, sumRow, 10);

  // Summary by status
  let sr = 38;
  wsPT.getCell(`A${sr}`).value = "SUMMARY BY STATUS";
  wsPT.mergeCells(`A${sr}:D${sr}`);
  for (let c = 1; c <= 4; c++) { wsPT.getCell(sr, c).fill = HEADER_FILL; wsPT.getCell(sr, c).font = HEADER_FONT; }
  sr++;

  ["Status", "Count", "Amount", ""].forEach((h, i) => {
    if (h) wsPT.getCell(sr, i + 1).value = h;
  });
  styleSubheaderRow(wsPT, sr, 3);
  sr++;

  const statuses = ["Sent", "Paid", "Partial", "Overdue", "Disputed", "Written Off"];
  statuses.forEach(status => {
    wsPT.getCell(sr, 1).value = status;
    wsPT.getCell(sr, 1).font = { bold: true };
    wsPT.getCell(sr, 2).value = { formula: `COUNTIF(H5:H34,"${status}")` } as any;
    wsPT.getCell(sr, 3).value = { formula: `SUMIFS(E5:E34,H5:H34,"${status}")` } as any;
    wsPT.getCell(sr, 3).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 3; c++) applyBorder(wsPT.getCell(sr, c));
    sr++;
  });

  sr += 2;
  wsPT.mergeCells(`A${sr}:D${sr}`);
  wsPT.getCell(`A${sr}`).value = "💡 Follow up on 'Sent' invoices after 7 days. Follow up on 'Overdue' invoices weekly with a phone call.";
  wsPT.getCell(`A${sr}`).font = { bold: true, size: 10, color: { argb: "FF2563EB" } };
  wsPT.getCell(`A${sr}`).fill = BLUE_FILL;

  wsPT.pageSetup = { paperSize: 1, orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  await wb.xlsx.writeFile(path.join(OUT, "invoice-template-f4b8d1.xlsx"));
  console.log("✓ invoice-template-f4b8d1.xlsx");
}

async function main() {
  console.log("Generating invoice template...\n");
  await generateInvoiceTemplate();
  console.log("\n✅ Invoice template generated in public/downloads/");
}

main().catch(console.error);
