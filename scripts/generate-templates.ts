import ExcelJS from "exceljs";
import path from "path";

const OUT = path.join(__dirname, "..", "public", "downloads");

// Color palette
const HEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
const HEADER_FONT: Partial<ExcelJS.Font> = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
const SUBHEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF1F5F9" } };
const ACCENT_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFEF3C7" } };
const GREEN_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD1FAE5" } };
const GREEN_TOTAL_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF10B981" } };
const CURRENCY_FMT = '"$"#,##0.00';
const PCT_FMT = "0%";
const NUM_FMT = "#,##0.00";

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

function addHowToUseSheet(wb: ExcelJS.Workbook, title: string, description: string, steps: string[], formulaCells: string, editableCells: string) {
  // Insert as the first sheet
  const ws = wb.addWorksheet("📋 How to Use", { properties: { tabColor: { argb: "FFFEF3C7" } } });
  // Move to first position
  ws.orderNo = 0;

  ws.columns = [{ width: 6 }, { width: 60 }];

  ws.mergeCells("A1:B1");
  ws.getCell("A1").value = `📋 HOW TO USE: ${title}`;
  ws.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 30;

  ws.mergeCells("A3:B3");
  ws.getCell("A3").value = "ABOUT THIS TEMPLATE";
  ws.getCell("A3").font = { bold: true, size: 12, color: { argb: "FF1E293B" } };

  ws.mergeCells("A4:B4");
  ws.getCell("A4").value = description;
  ws.getCell("A4").font = { size: 10 };
  ws.getCell("A4").alignment = { wrapText: true };
  ws.getRow(4).height = 40;

  let r = 6;
  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = "STEP-BY-STEP INSTRUCTIONS";
  ws.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF1E293B" } };
  r++;

  steps.forEach((step, i) => {
    ws.getCell(`A${r}`).value = `${i + 1}.`;
    ws.getCell(`A${r}`).font = { bold: true, size: 10 };
    ws.getCell(`A${r}`).alignment = { horizontal: "center" };
    ws.getCell(`B${r}`).value = step;
    ws.getCell(`B${r}`).font = { size: 10 };
    ws.getCell(`B${r}`).alignment = { wrapText: true };
    r++;
  });

  r++;
  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = "🟡 YELLOW CELLS = Editable (enter your data here)";
  ws.getCell(`A${r}`).font = { bold: true, size: 11, color: { argb: "FFB45309" } };
  ws.getCell(`A${r}`).fill = ACCENT_FILL;
  r++;

  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = `📊 CELLS WITH FORMULAS (don't overwrite): ${formulaCells}`;
  ws.getCell(`A${r}`).font = { size: 10, color: { argb: "FFDC2626" } };
  r++;

  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = `✏️ EDITABLE CELLS: ${editableCells}`;
  ws.getCell(`A${r}`).font = { size: 10, color: { argb: "FF059669" } };
  r += 2;

  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = "TIPS FOR PRINTING / PDF EXPORT";
  ws.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF1E293B" } };
  r++;
  const tips = [
    "• File > Print or Ctrl+P to print",
    "• Set to 'Fit Sheet on One Page' for best results",
    "• Use 'Portrait' orientation for estimates and contracts",
    "• Use 'Landscape' for pricing matrices and marketing plans",
    "• To save as PDF: File > Save As > PDF format",
    "• Print Preview first to check margins and page breaks",
  ];
  tips.forEach(tip => {
    ws.mergeCells(`A${r}:B${r}`);
    ws.getCell(`A${r}`).value = tip;
    ws.getCell(`A${r}`).font = { size: 10 };
    r++;
  });

  r++;
  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = "🔗 MORE FREE TOOLS: https://estimateconcrete.com";
  ws.getCell(`A${r}`).font = { bold: true, size: 12, color: { argb: "FF2563EB" } };
  r++;
  ws.mergeCells(`A${r}:B${r}`);
  ws.getCell(`A${r}`).value = "Free concrete calculators, estimating guides, and contractor resources";
  ws.getCell(`A${r}`).font = { size: 10, color: { argb: "FF64748B" } };

  return ws;
}

function addCompanyHeader(ws: ExcelJS.Worksheet, title: string) {
  ws.mergeCells("A1:F1");
  const titleCell = ws.getCell("A1");
  titleCell.value = "[YOUR COMPANY NAME]";
  titleCell.font = { bold: true, size: 18, color: { argb: "FF1E293B" } };
  titleCell.alignment = { horizontal: "left", vertical: "middle" };
  ws.getRow(1).height = 30;

  ws.mergeCells("A2:F2");
  ws.getCell("A2").value = "[Address] • [Phone] • [Email] • [License #]";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ws.mergeCells("A3:F3");
  ws.getCell("A3").value = title;
  ws.getCell("A3").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws.getRow(3).height = 25;

  ws.getCell("A4").value = "Date:";
  ws.getCell("A4").font = { bold: true, size: 10 };
  ws.getCell("B4").value = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  ws.getCell("D4").value = "Valid for:";
  ws.getCell("D4").font = { bold: true, size: 10 };
  ws.getCell("E4").value = "30 days";

  ws.getCell("A6").value = "CLIENT INFORMATION";
  ws.getCell("A6").font = { bold: true, size: 10, color: { argb: "FF1E293B" } };
  ws.getCell("A7").value = "Name:";
  ws.getCell("A7").font = { bold: true, size: 10 };
  ws.getCell("B7").value = "[Client Name]";
  ws.getCell("B7").fill = ACCENT_FILL;
  ws.getCell("A8").value = "Phone:";
  ws.getCell("A8").font = { bold: true, size: 10 };
  ws.getCell("B8").value = "[Client Phone]";
  ws.getCell("B8").fill = ACCENT_FILL;
  ws.getCell("A9").value = "Email:";
  ws.getCell("A9").font = { bold: true, size: 10 };
  ws.getCell("B9").value = "[Client Email]";
  ws.getCell("B9").fill = ACCENT_FILL;
  ws.getCell("A10").value = "Project Address:";
  ws.getCell("A10").font = { bold: true, size: 10 };
  ws.getCell("B10").value = "[Project Address]";
  ws.getCell("B10").fill = ACCENT_FILL;
}

// ======================== BID CALCULATOR PRO ========================
async function generateBidCalculator() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  // --- HOW TO USE SHEET ---
  addHowToUseSheet(wb, "Bid Calculator Pro", 
    "This professional bid calculator helps you accurately price concrete jobs. Enter your project dimensions, material costs, and labor rates — the spreadsheet automatically calculates your total bid including materials, labor, equipment, overhead, and profit.",
    [
      "Go to the 'Bid Calculator' sheet",
      "Fill in the yellow cells under PROJECT INPUTS (dimensions, rates, margins)",
      "Use the dropdown menus for Project Type and Finish Type",
      "Review the CALCULATED RESULTS section — all values auto-calculate",
      "Check the TOTAL BID amount at the bottom",
      "Use the 'Rate Reference' sheet for current market pricing",
      "Use the 'Your Pricing Calculator' sheet to set your custom rates",
      "Track completed jobs on the 'Job Profitability Tracker' sheet",
      "Print or save as PDF to present to clients",
    ],
    "All cells in CALCULATED RESULTS section (Column B, rows 23-44)",
    "Yellow cells in PROJECT INPUTS (B13-B20, E14)"
  );

  // --- Sheet 1: Bid Calculator ---
  const ws = wb.addWorksheet("Bid Calculator");
  ws.columns = [
    { width: 28 }, { width: 18 }, { width: 14 }, { width: 14 }, { width: 16 }, { width: 16 },
  ];

  addCompanyHeader(ws, "PROFESSIONAL BID CALCULATOR");

  // Input section header at row 12
  const inputHeaderRow = 12;
  ws.getCell(`A${inputHeaderRow}`).value = "PROJECT INPUTS";
  ws.getCell(`A${inputHeaderRow}`).font = { bold: true, size: 11, color: { argb: "FFFFFFFF" } };
  ws.getCell(`A${inputHeaderRow}`).fill = HEADER_FILL;
  ws.mergeCells(`A${inputHeaderRow}:F${inputHeaderRow}`);
  for (let c = 1; c <= 6; c++) { ws.getCell(inputHeaderRow, c).fill = HEADER_FILL; applyBorder(ws.getCell(inputHeaderRow, c)); }

  // Fixed row references for inputs
  // Row 13: Project Type
  // Row 14: Length, Width
  // Row 15: Thickness
  // Row 16: Concrete Price
  // Row 17: Labor Rate
  // Row 18: Material Markup
  // Row 19: Overhead
  // Row 20: Profit Margin
  const inputRows: { row: number; label: string; val: string | number; label2?: string; val2?: string | number }[] = [
    { row: 13, label: "Project Type:", val: "Driveway" },
    { row: 14, label: "Length (ft):", val: 20, label2: "Width (ft):", val2: 20 },
    { row: 15, label: "Thickness (inches):", val: 4 },
    { row: 16, label: "Concrete Price ($/yard):", val: 150 },
    { row: 17, label: "Labor Rate ($/hour):", val: 55 },
    { row: 18, label: "Material Markup (%):", val: 0.15 },
    { row: 19, label: "Overhead (%):", val: 0.10 },
    { row: 20, label: "Profit Margin (%):", val: 0.20 },
  ];

  inputRows.forEach(({ row, label, val, label2, val2 }) => {
    ws.getCell(`A${row}`).value = label;
    ws.getCell(`A${row}`).font = { bold: true, size: 10 };
    const bCell = ws.getCell(`B${row}`);
    bCell.value = val;
    bCell.fill = ACCENT_FILL;
    applyBorder(bCell);
    if (typeof val === "number" && label.includes("%")) bCell.numFmt = PCT_FMT;
    if (typeof val === "number" && label.includes("$")) bCell.numFmt = CURRENCY_FMT;
    if (label2) {
      ws.getCell(`D${row}`).value = label2;
      ws.getCell(`D${row}`).font = { bold: true, size: 10 };
      const eCell = ws.getCell(`E${row}`);
      eCell.value = val2 as string | number;
      eCell.fill = ACCENT_FILL;
      applyBorder(eCell);
    }
  });

  // Finish Type row
  ws.getCell("D13").value = "Finish Type:";
  ws.getCell("D13").font = { bold: true, size: 10 };
  ws.getCell("E13").value = "Broom";
  ws.getCell("E13").fill = ACCENT_FILL;
  applyBorder(ws.getCell("E13"));

  // Data validation dropdowns for bid calculator
  ws.getCell("B13").dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ['"Driveway,Slab,Patio,Foundation,Stamped,Sidewalk,Steps,Retaining Wall"'],
  };
  ws.getCell("E13").dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ['"Broom,Smooth,Stamped,Exposed Aggregate,Polished"'],
  };

  // Calculations section at row 22
  const calcHeaderRow = 22;
  ws.getCell(`A${calcHeaderRow}`).value = "CALCULATED RESULTS";
  ws.mergeCells(`A${calcHeaderRow}:F${calcHeaderRow}`);
  for (let c = 1; c <= 6; c++) { ws.getCell(calcHeaderRow, c).fill = HEADER_FILL; ws.getCell(calcHeaderRow, c).font = HEADER_FONT; applyBorder(ws.getCell(calcHeaderRow, c)); }

  // All formulas with FIXED row references
  // Row 23: Area = Length(B14) × Width(E14)
  // Row 24: Volume = Area(B23) × Thickness(B15) / 12
  // Row 25: CY raw = Volume(B24) / 27
  // Row 26: CY with waste = CY(B25) × 1.1
  // Row 27: blank
  // Row 28: MATERIALS COST (label)
  // Row 29: Concrete cost = CY_waste(B26) × Price(B16)
  // Row 30: Materials with markup = B29 × (1 + Markup(B18))
  // Row 31: blank
  // Row 32: LABOR (label)
  // Row 33: Estimated labor hours = Area(B23) × 0.06 (includes forming, prep, pour, finish, cleanup)
  // Row 34: Labor cost = Hours(B33) × Rate(B17)
  // Row 35: blank
  // Row 36: EQUIPMENT COST = 450
  // Row 37: blank
  // Row 38: SUBTOTAL = Materials(B30) + Labor(B34) + Equipment(B36)
  // Row 39: Overhead = Subtotal(B38) × Overhead%(B19)
  // Row 40: Pre-profit total = B38 + B39
  // Row 41: Profit = PreProfit(B40) × Profit%(B20)
  // Row 42: blank
  // Row 43: TOTAL BID = B40 + B41
  // Row 44: Price per SF = TOTAL(B43) / Area(B23)

  const calcRows: { row: number; label: string; formula?: string; value?: number; isBold?: boolean; isTotal?: boolean; fmt?: string }[] = [
    { row: 23, label: "Area (sq ft)", formula: "B14*E14", fmt: NUM_FMT },
    { row: 24, label: "Volume (cubic ft)", formula: "B23*B15/12", fmt: NUM_FMT },
    { row: 25, label: "Cubic Yards (raw)", formula: "B24/27", fmt: NUM_FMT },
    { row: 26, label: "Cubic Yards (with 10% waste)", formula: "B25*1.1", fmt: NUM_FMT },
    { row: 27, label: "" },
    { row: 28, label: "MATERIALS COST", isBold: true },
    { row: 29, label: "  Concrete cost", formula: "B26*B16" },
    { row: 30, label: "  Materials with markup", formula: "B29*(1+B18)" },
    { row: 31, label: "" },
    { row: 32, label: "LABOR", isBold: true },
    { row: 33, label: "  Estimated labor hours", formula: "B23*0.06", fmt: NUM_FMT },
    { row: 34, label: "  Labor cost", formula: "B33*B17" },
    { row: 35, label: "" },
    { row: 36, label: "EQUIPMENT COST", value: 450 },
    { row: 37, label: "" },
    { row: 38, label: "SUBTOTAL", formula: "B30+B34+B36", isBold: true },
    { row: 39, label: "Overhead", formula: "B38*B19" },
    { row: 40, label: "Pre-profit total", formula: "B38+B39" },
    { row: 41, label: "Profit", formula: "B40*B20" },
    { row: 42, label: "" },
    { row: 43, label: "TOTAL BID", formula: "B40+B41", isTotal: true },
    { row: 44, label: "Price per SF", formula: "IF(B23>0,B43/B23,0)" },
  ];

  calcRows.forEach(({ row, label, formula, value, isBold, isTotal, fmt }) => {
    ws.getCell(`A${row}`).value = label;
    if (isBold) {
      ws.getCell(`A${row}`).font = { bold: true, size: 11, color: { argb: "FF1E293B" } };
    }
    if (formula) {
      ws.getCell(`B${row}`).value = { formula } as any;
    } else if (value !== undefined) {
      ws.getCell(`B${row}`).value = value;
    }
    const numFmt = fmt || (label.includes("hours") || label.includes("Yards") || label.includes("Area") || label.includes("Volume") ? NUM_FMT : CURRENCY_FMT);
    if (label) ws.getCell(`B${row}`).numFmt = numFmt;

    if (isTotal) {
      ws.getCell(`A${row}`).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
      ws.getCell(`B${row}`).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
      ws.getCell(`B${row}`).numFmt = CURRENCY_FMT;
      for (let c = 1; c <= 6; c++) {
        ws.getCell(row, c).fill = GREEN_TOTAL_FILL;
        applyBorder(ws.getCell(row, c));
      }
      ws.getRow(row).height = 28;
    }
    applyBorder(ws.getCell(`A${row}`));
    applyBorder(ws.getCell(`B${row}`));
  });

  // Profit margin conditional formatting note
  ws.getCell("D41").value = "← Profit Margin Check:";
  ws.getCell("D41").font = { italic: true, size: 9, color: { argb: "FF64748B" } };
  ws.getCell("E41").value = { formula: "IF(B20>=0.2,\"✅ Good (≥20%)\",IF(B20>=0.15,\"⚠️ Low (15-20%)\",\"❌ Too Low (<15%)\"))" } as any;
  ws.getCell("E41").font = { size: 9 };

  // Payment terms
  let r = 46;
  ws.getCell(`A${r}`).value = "PAYMENT TERMS";
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;
  ws.getCell(`A${r}`).value = "• 50% deposit upon acceptance";
  r++;
  ws.getCell(`A${r}`).value = "• 40% upon completion of pour";
  r++;
  ws.getCell(`A${r}`).value = "• 10% final payment after walkthrough";
  r += 2;
  ws.getCell(`A${r}`).value = "Client Signature: ________________________     Date: ________";
  r++;
  ws.getCell(`A${r}`).value = "Contractor Signature: ________________________     Date: ________";

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };
  ws.headerFooter = { oddFooter: "EstimateConcrete.com — Professional Concrete Tools" };

  // --- Sheet 2: Company Setup ---
  const ws2 = wb.addWorksheet("Company Setup");
  ws2.columns = [{ width: 24 }, { width: 40 }];
  ws2.getCell("A1").value = "COMPANY SETUP";
  ws2.getCell("A1").font = { bold: true, size: 16 };
  ws2.getRow(1).height = 28;

  const companyFields = [
    "Company Name", "Street Address", "City, State ZIP", "Phone Number",
    "Email Address", "Website", "Contractor License #", "Insurance Policy #",
    "Tax ID / EIN", "Logo (paste here)",
  ];
  companyFields.forEach((f, i) => {
    const row = i + 3;
    ws2.getCell(`A${row}`).value = f;
    ws2.getCell(`A${row}`).font = { bold: true, size: 10 };
    ws2.getCell(`B${row}`).value = "";
    ws2.getCell(`B${row}`).fill = ACCENT_FILL;
    applyBorder(ws2.getCell(`A${row}`));
    applyBorder(ws2.getCell(`B${row}`));
  });

  // --- Sheet 3: Rate Reference ---
  const ws3 = wb.addWorksheet("Rate Reference");
  ws3.columns = [{ width: 22 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }];

  ws3.getCell("A1").value = "CONCRETE PRICING REFERENCE (2024-2025)";
  ws3.getCell("A1").font = { bold: true, size: 14 };
  ws3.mergeCells("A1:E1");
  ws3.getRow(1).height = 26;

  ws3.getCell("A2").value = "Regional Concrete Prices (per cubic yard)";
  ws3.getCell("A2").font = { bold: true, size: 11, color: { argb: "FF475569" } };

  const regionHeaders = ["Region", "Low", "Average", "High", "Notes"];
  regionHeaders.forEach((h, i) => { ws3.getCell(4, i + 1).value = h; });
  styleHeaderRow(ws3, 4, 5);

  const regionData = [
    ["Northeast", 140, 165, 195, "NYC metro premium"],
    ["Southeast", 120, 145, 170, "Year-round pouring"],
    ["Midwest", 115, 140, 165, "Seasonal premiums"],
    ["Southwest", 125, 150, 180, "Desert conditions"],
    ["West Coast", 145, 175, 210, "CA regulatory costs"],
    ["Pacific NW", 135, 160, 185, "Rain season impacts"],
    ["Mountain", 130, 155, 180, "Altitude adjustments"],
    ["Texas/South Central", 110, 135, 160, "Competitive market"],
  ];

  regionData.forEach(([region, low, avg, high, notes], i) => {
    const row = 5 + i;
    ws3.getCell(row, 1).value = region;
    ws3.getCell(row, 2).value = low;
    ws3.getCell(row, 2).numFmt = CURRENCY_FMT;
    ws3.getCell(row, 3).value = avg;
    ws3.getCell(row, 3).numFmt = CURRENCY_FMT;
    ws3.getCell(row, 4).value = high;
    ws3.getCell(row, 4).numFmt = CURRENCY_FMT;
    ws3.getCell(row, 5).value = notes;
    for (let c = 1; c <= 5; c++) applyBorder(ws3.getCell(row, c));
  });

  let rr = 15;
  ws3.getCell(`A${rr}`).value = "Pricing by Project Type (per square foot)";
  ws3.getCell(`A${rr}`).font = { bold: true, size: 11, color: { argb: "FF475569" } };
  rr += 2;

  ["Project Type", "Budget", "Mid-Range", "Premium"].forEach((h, i) => { ws3.getCell(rr, i + 1).value = h; });
  styleHeaderRow(ws3, rr, 4);
  rr++;

  const projData = [
    ["Basic Slab (4\")", "$6–$8", "$8–$10", "$10–$14"],
    ["Driveway", "$8–$10", "$10–$14", "$14–$18"],
    ["Patio", "$8–$12", "$12–$16", "$16–$25"],
    ["Stamped Concrete", "$12–$16", "$16–$22", "$22–$30"],
    ["Foundation", "$8–$12", "$12–$15", "$15–$20"],
    ["Sidewalk", "$6–$8", "$8–$10", "$10–$14"],
    ["Concrete Repair", "$5–$8", "$8–$12", "$12–$18"],
    ["Polished Concrete", "$3–$5", "$5–$8", "$8–$12"],
  ];

  projData.forEach(([type, low, mid, high]) => {
    const row = rr;
    ws3.getCell(row, 1).value = type;
    ws3.getCell(row, 2).value = low;
    ws3.getCell(row, 3).value = mid;
    ws3.getCell(row, 4).value = high;
    for (let c = 1; c <= 4; c++) applyBorder(ws3.getCell(row, c));
    rr++;
  });

  rr += 2;
  ws3.getCell(`A${rr}`).value = "Typical Labor Rates";
  ws3.getCell(`A${rr}`).font = { bold: true, size: 11, color: { argb: "FF475569" } };
  rr += 2;
  ["Role", "Low", "Average", "High"].forEach((h, i) => { ws3.getCell(rr, i + 1).value = h; });
  styleHeaderRow(ws3, rr, 4);
  rr++;

  const laborData = [
    ["General Laborer", "$15/hr", "$18/hr", "$22/hr"],
    ["Form Carpenter", "$20/hr", "$28/hr", "$35/hr"],
    ["Finisher", "$25/hr", "$35/hr", "$45/hr"],
    ["Stamping Specialist", "$30/hr", "$40/hr", "$55/hr"],
    ["Foreman", "$30/hr", "$40/hr", "$50/hr"],
    ["Equipment Operator", "$25/hr", "$32/hr", "$42/hr"],
  ];

  laborData.forEach(([role, low, avg, high]) => {
    const row = rr;
    ws3.getCell(row, 1).value = role;
    ws3.getCell(row, 2).value = low;
    ws3.getCell(row, 3).value = avg;
    ws3.getCell(row, 4).value = high;
    for (let c = 1; c <= 4; c++) applyBorder(ws3.getCell(row, c));
    rr++;
  });

  // --- Sheet 4: Your Pricing Calculator ---
  const ws4 = wb.addWorksheet("Your Pricing Calculator");
  ws4.columns = [{ width: 28 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }, { width: 16 }];

  ws4.mergeCells("A1:F1");
  ws4.getCell("A1").value = "YOUR CUSTOM PRICING CALCULATOR";
  ws4.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws4.getRow(1).height = 28;

  ws4.mergeCells("A2:F2");
  ws4.getCell("A2").value = "Enter your rates below — your per-SF prices auto-calculate for each project type";
  ws4.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  // User inputs
  ws4.getCell("A4").value = "YOUR RATES";
  ws4.mergeCells("A4:F4");
  for (let c = 1; c <= 6; c++) { ws4.getCell(4, c).fill = HEADER_FILL; ws4.getCell(4, c).font = HEADER_FONT; applyBorder(ws4.getCell(4, c)); }

  ws4.getCell("A5").value = "Your Hourly Labor Rate:";
  ws4.getCell("A5").font = { bold: true, size: 10 };
  ws4.getCell("B5").value = 55;
  ws4.getCell("B5").numFmt = CURRENCY_FMT;
  ws4.getCell("B5").fill = ACCENT_FILL;
  applyBorder(ws4.getCell("B5"));

  ws4.getCell("A6").value = "Overhead %:";
  ws4.getCell("A6").font = { bold: true, size: 10 };
  ws4.getCell("B6").value = 0.10;
  ws4.getCell("B6").numFmt = PCT_FMT;
  ws4.getCell("B6").fill = ACCENT_FILL;
  applyBorder(ws4.getCell("B6"));

  ws4.getCell("A7").value = "Desired Profit %:";
  ws4.getCell("A7").font = { bold: true, size: 10 };
  ws4.getCell("B7").value = 0.20;
  ws4.getCell("B7").numFmt = PCT_FMT;
  ws4.getCell("B7").fill = ACCENT_FILL;
  applyBorder(ws4.getCell("B7"));

  ws4.getCell("A8").value = "Concrete Cost ($/CY):";
  ws4.getCell("A8").font = { bold: true, size: 10 };
  ws4.getCell("B8").value = 150;
  ws4.getCell("B8").numFmt = CURRENCY_FMT;
  ws4.getCell("B8").fill = ACCENT_FILL;
  applyBorder(ws4.getCell("B8"));

  // Auto-calculated pricing table
  ws4.getCell("A10").value = "YOUR AUTO-CALCULATED PRICING PER SQUARE FOOT";
  ws4.mergeCells("A10:F10");
  for (let c = 1; c <= 6; c++) { ws4.getCell(10, c).fill = HEADER_FILL; ws4.getCell(10, c).font = HEADER_FONT; applyBorder(ws4.getCell(10, c)); }

  ["Project Type", "Base Material/SF", "Labor Hrs/SF", "Labor $/SF", "Your Price/SF", "Min Job Charge"].forEach((h, i) => {
    ws4.getCell(11, i + 1).value = h;
  });
  styleSubheaderRow(ws4, 11, 6);

  // Each project type: base material cost per SF, labor hours per SF
  const pricingCalcData: [string, number, number, number][] = [
    ["Basic Slab (4\")", 2.50, 0.08, 800],
    ["Driveway (4-6\")", 3.00, 0.10, 1200],
    ["Patio (basic)", 3.00, 0.12, 1000],
    ["Patio (decorative)", 4.50, 0.18, 1500],
    ["Stamped Concrete", 5.00, 0.22, 2000],
    ["Sidewalk", 2.50, 0.08, 600],
    ["Foundation (footings)", 4.00, 0.15, 2500],
    ["Foundation (walls)", 5.50, 0.20, 3500],
    ["Garage Floor", 2.50, 0.09, 1000],
    ["Pool Deck", 4.00, 0.16, 1500],
    ["Retaining Wall", 8.00, 0.30, 2000],
    ["Steps/Landing", 6.00, 0.25, 800],
  ];

  pricingCalcData.forEach(([type, matPerSF, laborHrsPerSF, minCharge], i) => {
    const row = 12 + i;
    ws4.getCell(row, 1).value = type;
    ws4.getCell(row, 2).value = matPerSF;
    ws4.getCell(row, 2).numFmt = CURRENCY_FMT;
    ws4.getCell(row, 3).value = laborHrsPerSF;
    ws4.getCell(row, 3).numFmt = "0.00";
    // Labor $/SF = labor hrs/SF × hourly rate
    ws4.getCell(row, 4).value = { formula: `C${row}*B$5` } as any;
    ws4.getCell(row, 4).numFmt = CURRENCY_FMT;
    // Your Price/SF = (Material + Labor) × (1 + overhead) × (1 + profit)
    ws4.getCell(row, 5).value = { formula: `(B${row}+D${row})*(1+B$6)*(1+B$7)` } as any;
    ws4.getCell(row, 5).numFmt = CURRENCY_FMT;
    ws4.getCell(row, 5).font = { bold: true };
    ws4.getCell(row, 5).fill = GREEN_FILL;
    ws4.getCell(row, 6).value = minCharge;
    ws4.getCell(row, 6).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 6; c++) applyBorder(ws4.getCell(row, c));
  });

  // Seasonal adjustments
  const sRow = 12 + pricingCalcData.length + 2;
  ws4.getCell(`A${sRow}`).value = "SEASONAL ADJUSTMENT FACTORS";
  ws4.mergeCells(`A${sRow}:F${sRow}`);
  for (let c = 1; c <= 6; c++) { ws4.getCell(sRow, c).fill = HEADER_FILL; ws4.getCell(sRow, c).font = HEADER_FONT; applyBorder(ws4.getCell(sRow, c)); }

  ["Season", "Multiplier", "Reason", "", "", ""].forEach((h, i) => {
    if (h) ws4.getCell(sRow + 1, i + 1).value = h;
  });
  styleSubheaderRow(ws4, sRow + 1, 3);

  const seasons: [string, number, string][] = [
    ["Spring (Mar-May)", 1.00, "Peak season — standard pricing"],
    ["Summer (Jun-Aug)", 1.05, "High demand — slight premium"],
    ["Fall (Sep-Nov)", 0.95, "Shoulder season — competitive pricing"],
    ["Winter (Dec-Feb)", 1.15, "Cold weather premium — heated concrete, blankets, shorter days"],
  ];
  seasons.forEach(([season, mult, reason], i) => {
    const row = sRow + 2 + i;
    ws4.getCell(row, 1).value = season;
    ws4.getCell(row, 2).value = mult;
    ws4.getCell(row, 2).numFmt = "0.00x";
    ws4.getCell(row, 2).fill = ACCENT_FILL;
    ws4.getCell(row, 3).value = reason;
    for (let c = 1; c <= 3; c++) applyBorder(ws4.getCell(row, c));
  });

  // --- Sheet 5: Job Profitability Tracker ---
  const ws5 = wb.addWorksheet("Job Profitability Tracker");
  ws5.columns = [
    { width: 6 }, { width: 24 }, { width: 14 }, { width: 14 }, { width: 14 },
    { width: 14 }, { width: 14 }, { width: 14 }, { width: 20 },
  ];

  ws5.mergeCells("A1:I1");
  ws5.getCell("A1").value = "JOB PROFITABILITY TRACKER";
  ws5.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws5.getRow(1).height = 28;

  ws5.mergeCells("A2:I2");
  ws5.getCell("A2").value = "Track every completed job to understand your true profitability. Fill in after each job is finished.";
  ws5.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  const profHeaders = ["#", "Job Name / Address", "Quoted Price", "Actual Materials", "Actual Labor", "Other Costs", "Actual Profit", "Profit Margin %", "Notes"];
  profHeaders.forEach((h, i) => { ws5.getCell(4, i + 1).value = h; });
  styleHeaderRow(ws5, 4, 9);

  // 25 blank rows with formulas
  for (let i = 0; i < 25; i++) {
    const row = 5 + i;
    ws5.getCell(row, 1).value = i + 1;
    ws5.getCell(row, 1).alignment = { horizontal: "center" };
    ws5.getCell(row, 2).fill = ACCENT_FILL;
    ws5.getCell(row, 3).fill = ACCENT_FILL;
    ws5.getCell(row, 3).numFmt = CURRENCY_FMT;
    ws5.getCell(row, 4).fill = ACCENT_FILL;
    ws5.getCell(row, 4).numFmt = CURRENCY_FMT;
    ws5.getCell(row, 5).fill = ACCENT_FILL;
    ws5.getCell(row, 5).numFmt = CURRENCY_FMT;
    ws5.getCell(row, 6).fill = ACCENT_FILL;
    ws5.getCell(row, 6).numFmt = CURRENCY_FMT;
    // Actual Profit = Quoted Price - Materials - Labor - Other
    ws5.getCell(row, 7).value = { formula: `IF(C${row}="","",C${row}-D${row}-E${row}-F${row})` } as any;
    ws5.getCell(row, 7).numFmt = CURRENCY_FMT;
    // Profit Margin = Profit / Quoted Price
    ws5.getCell(row, 8).value = { formula: `IF(C${row}="","",G${row}/C${row})` } as any;
    ws5.getCell(row, 8).numFmt = "0.0%";
    ws5.getCell(row, 9).fill = ACCENT_FILL;
    for (let c = 1; c <= 9; c++) applyBorder(ws5.getCell(row, c));
  }

  // Summary row
  const sumRow = 31;
  ws5.getCell(sumRow, 1).value = "";
  ws5.getCell(sumRow, 2).value = "TOTALS / AVERAGES";
  ws5.getCell(sumRow, 2).font = { bold: true, size: 11 };
  ws5.getCell(sumRow, 3).value = { formula: "SUM(C5:C29)" } as any;
  ws5.getCell(sumRow, 3).numFmt = CURRENCY_FMT;
  ws5.getCell(sumRow, 3).font = { bold: true };
  ws5.getCell(sumRow, 4).value = { formula: "SUM(D5:D29)" } as any;
  ws5.getCell(sumRow, 4).numFmt = CURRENCY_FMT;
  ws5.getCell(sumRow, 4).font = { bold: true };
  ws5.getCell(sumRow, 5).value = { formula: "SUM(E5:E29)" } as any;
  ws5.getCell(sumRow, 5).numFmt = CURRENCY_FMT;
  ws5.getCell(sumRow, 5).font = { bold: true };
  ws5.getCell(sumRow, 6).value = { formula: "SUM(F5:F29)" } as any;
  ws5.getCell(sumRow, 6).numFmt = CURRENCY_FMT;
  ws5.getCell(sumRow, 6).font = { bold: true };
  ws5.getCell(sumRow, 7).value = { formula: "SUM(G5:G29)" } as any;
  ws5.getCell(sumRow, 7).numFmt = CURRENCY_FMT;
  ws5.getCell(sumRow, 7).font = { bold: true };
  ws5.getCell(sumRow, 8).value = { formula: "IF(C31>0,G31/C31,0)" } as any;
  ws5.getCell(sumRow, 8).numFmt = "0.0%";
  ws5.getCell(sumRow, 8).font = { bold: true };
  styleSubheaderRow(ws5, sumRow, 9);

  // Running averages
  ws5.getCell(33, 2).value = "Average Quoted Price:";
  ws5.getCell(33, 2).font = { bold: true };
  ws5.getCell(33, 3).value = { formula: "AVERAGEIF(C5:C29,\">0\")" } as any;
  ws5.getCell(33, 3).numFmt = CURRENCY_FMT;
  ws5.getCell(34, 2).value = "Average Profit per Job:";
  ws5.getCell(34, 2).font = { bold: true };
  ws5.getCell(34, 3).value = { formula: "AVERAGEIF(G5:G29,\">0\")" } as any;
  ws5.getCell(34, 3).numFmt = CURRENCY_FMT;
  ws5.getCell(35, 2).value = "Average Profit Margin:";
  ws5.getCell(35, 2).font = { bold: true };
  ws5.getCell(35, 3).value = { formula: "AVERAGEIF(H5:H29,\">0\")" } as any;
  ws5.getCell(35, 3).numFmt = "0.0%";
  ws5.getCell(36, 2).value = "Total Jobs Completed:";
  ws5.getCell(36, 2).font = { bold: true };
  ws5.getCell(36, 3).value = { formula: "COUNTA(B5:B29)" } as any;

  ws5.pageSetup = { paperSize: 1, orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  await wb.xlsx.writeFile(path.join(OUT, "bid-calculator-pro-a8f3b2.xlsx"));
  console.log("✓ bid-calculator-pro-a8f3b2.xlsx");
}

// ======================== ESTIMATE TEMPLATES ========================
interface EstimateConfig {
  filename: string;
  title: string;
  description: string;
  materials: [string, number, string, number][];
  labor: [string, number, number][];
  equipment: [string, number, string, number][];
  projectSpecificItems: string[];
  siteConditions: string[];
  scopeExclusions: string[];
  warrantyNotes: string[];
  howToSteps: string[];
}

function addSiteConditionsSheet(wb: ExcelJS.Workbook, conditions: string[]) {
  const ws = wb.addWorksheet("✅ Site Conditions", { properties: { tabColor: { argb: "FFD1FAE5" } } });
  ws.columns = [{ width: 6 }, { width: 40 }, { width: 14 }, { width: 30 }];

  ws.mergeCells("A1:D1");
  ws.getCell("A1").value = "✅ SITE CONDITIONS CHECKLIST";
  ws.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 30;

  ws.mergeCells("A2:D2");
  ws.getCell("A2").value = "Complete this checklist during your site visit. Fill in yellow cells.";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ws.getCell("A3").value = "Date:";
  ws.getCell("A3").font = { bold: true, size: 10 };
  ws.getCell("B3").fill = ACCENT_FILL;
  ws.getCell("C3").value = "Inspector:";
  ws.getCell("C3").font = { bold: true, size: 10 };
  ws.getCell("D3").fill = ACCENT_FILL;

  ["#", "Site Condition", "Status", "Notes / Details"].forEach((h, i) => {
    ws.getCell(5, i + 1).value = h;
  });
  styleHeaderRow(ws, 5, 4);

  conditions.forEach((cond, i) => {
    const row = 6 + i;
    ws.getCell(row, 1).value = i + 1;
    ws.getCell(row, 1).alignment = { horizontal: "center" };
    ws.getCell(row, 2).value = cond;
    ws.getCell(row, 2).font = { size: 10 };
    ws.getCell(row, 3).fill = ACCENT_FILL;
    ws.getCell(row, 3).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"✓ OK,⚠ Issue,✗ Fail,N/A"'],
    };
    ws.getCell(row, 4).fill = ACCENT_FILL;
    for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(row, c));
  });

  let r = 6 + conditions.length + 1;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "ADDITIONAL OBSERVATIONS";
  ws.getCell(`A${r}`).font = { bold: true, size: 11, color: { argb: "FF1E293B" } };
  r++;
  for (let i = 0; i < 5; i++) {
    ws.mergeCells(`A${r}:D${r}`);
    ws.getCell(`A${r}`).fill = ACCENT_FILL;
    ws.getRow(r).height = 20;
    applyBorder(ws.getCell(`A${r}`));
    r++;
  }

  r++;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "SITE PHOTOS NEEDED";
  ws.getCell(`A${r}`).font = { bold: true, size: 11, color: { argb: "FF1E293B" } };
  r++;
  const photoItems = [
    "Overall site (wide angle)", "Access point for concrete truck",
    "Existing surface condition", "Drainage/slope direction",
    "Utility locations", "Adjacent structures",
  ];
  photoItems.forEach((item, i) => {
    ws.getCell(r, 1).value = `${i + 1}.`;
    ws.getCell(r, 1).alignment = { horizontal: "center" };
    ws.getCell(r, 2).value = item;
    ws.getCell(r, 3).fill = ACCENT_FILL;
    ws.getCell(r, 3).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"✓ Taken,☐ Needed"'],
    };
    for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };
  return ws;
}

async function generateEstimate(data: EstimateConfig) {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  // --- How to Use sheet ---
  addHowToUseSheet(wb, data.title,
    data.description,
    data.howToSteps,
    "Column E (Total) in Materials/Labor/Equipment sections, and all PROJECT SUMMARY cells",
    "Yellow cells: quantities, unit prices, hours, rates, client info, overhead %, profit %"
  );

  // --- Main Estimate sheet ---
  const ws = wb.addWorksheet("Estimate");
  ws.columns = [
    { width: 34 }, { width: 10 }, { width: 10 }, { width: 14 }, { width: 14 }, { width: 14 },
  ];

  addCompanyHeader(ws, data.title.toUpperCase());

  let r = 12;

  // Materials header
  ws.getCell(r, 1).value = "MATERIALS";
  ["MATERIALS", "Qty", "Unit", "Unit Price", "Total"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleHeaderRow(ws, r, 5);
  r++;

  ["Description", "Qty", "Unit", "Unit Price", "Total"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 5);
  r++;

  const matStart = r;
  data.materials.forEach(([desc, qty, unit, price]) => {
    ws.getCell(r, 1).value = desc;
    ws.getCell(r, 2).value = qty;
    ws.getCell(r, 2).fill = ACCENT_FILL;
    ws.getCell(r, 3).value = unit;
    ws.getCell(r, 4).value = price;
    ws.getCell(r, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 5).value = { formula: `B${r}*D${r}` } as any;
    ws.getCell(r, 5).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  ws.getCell(r, 1).value = "Materials Subtotal";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 5).value = { formula: `SUM(E${matStart}:E${r - 1})` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true };
  styleSubheaderRow(ws, r, 5);
  const matTotalRow = r;
  r += 2;

  // Labor header
  ws.getCell(r, 1).value = "LABOR";
  ["LABOR", "Hours", "", "Rate", "Total"].forEach((h, i) => {
    if (h) ws.getCell(r, i + 1).value = h;
  });
  styleHeaderRow(ws, r, 5);
  r++;
  ["Description", "Hours", "", "Rate ($/hr)", "Total"].forEach((h, i) => {
    if (h) ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 5);
  r++;

  const laborStart = r;
  data.labor.forEach(([desc, hrs, rate]) => {
    ws.getCell(r, 1).value = desc;
    ws.getCell(r, 2).value = hrs;
    ws.getCell(r, 2).fill = ACCENT_FILL;
    ws.getCell(r, 4).value = rate;
    ws.getCell(r, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 5).value = { formula: `B${r}*D${r}` } as any;
    ws.getCell(r, 5).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  ws.getCell(r, 1).value = "Labor Subtotal";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 5).value = { formula: `SUM(E${laborStart}:E${r - 1})` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true };
  styleSubheaderRow(ws, r, 5);
  const laborTotalRow = r;
  r += 2;

  // Equipment header
  ws.getCell(r, 1).value = "EQUIPMENT";
  ["EQUIPMENT", "Qty", "Unit", "Price", "Total"].forEach((h, i) => {
    if (h) ws.getCell(r, i + 1).value = h;
  });
  styleHeaderRow(ws, r, 5);
  r++;
  ["Description", "Qty", "Unit", "Price", "Total"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 5);
  r++;

  const equipStart = r;
  data.equipment.forEach(([desc, qty, unit, price]) => {
    ws.getCell(r, 1).value = desc;
    ws.getCell(r, 2).value = qty;
    ws.getCell(r, 2).fill = ACCENT_FILL;
    ws.getCell(r, 3).value = unit;
    ws.getCell(r, 4).value = price;
    ws.getCell(r, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 5).value = { formula: `B${r}*D${r}` } as any;
    ws.getCell(r, 5).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  ws.getCell(r, 1).value = "Equipment Subtotal";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 5).value = { formula: `SUM(E${equipStart}:E${r - 1})` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true };
  styleSubheaderRow(ws, r, 5);
  const equipTotalRow = r;
  r += 2;

  // Project-Specific Items section
  ws.getCell(r, 1).value = "PROJECT-SPECIFIC OPTIONS";
  styleHeaderRow(ws, r, 5);
  r++;
  data.projectSpecificItems.forEach(item => {
    ws.getCell(r, 1).value = item;
    ws.getCell(r, 2).fill = ACCENT_FILL; // qty
    ws.getCell(r, 4).fill = ACCENT_FILL; // price
    ws.getCell(r, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r, 5).value = { formula: `B${r}*D${r}` } as any;
    ws.getCell(r, 5).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });
  const optionsEndRow = r - 1;
  ws.getCell(r, 1).value = "Options Subtotal";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 5).value = { formula: `SUM(E${optionsEndRow - data.projectSpecificItems.length + 1}:E${optionsEndRow})` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true };
  styleSubheaderRow(ws, r, 5);
  const optionsTotalRow = r;
  r += 2;

  // Summary
  ws.getCell(r, 1).value = "PROJECT SUMMARY";
  styleHeaderRow(ws, r, 5);
  r++;

  ws.getCell(r, 1).value = "Materials Total";
  ws.getCell(r, 5).value = { formula: `E${matTotalRow}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  r++;

  ws.getCell(r, 1).value = "Labor Total";
  ws.getCell(r, 5).value = { formula: `E${laborTotalRow}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  r++;

  ws.getCell(r, 1).value = "Equipment Total";
  ws.getCell(r, 5).value = { formula: `E${equipTotalRow}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  r++;

  ws.getCell(r, 1).value = "Options Total";
  ws.getCell(r, 5).value = { formula: `E${optionsTotalRow}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  r++;

  const subtotalRow = r;
  ws.getCell(r, 1).value = "SUBTOTAL";
  ws.getCell(r, 1).font = { bold: true, size: 11 };
  ws.getCell(r, 5).value = { formula: `E${r - 4}+E${r - 3}+E${r - 2}+E${r - 1}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true };
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  styleSubheaderRow(ws, r, 5);
  r++;

  // Overhead with dropdown
  ws.getCell(r, 1).value = "Overhead %:";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 2).value = 0.10;
  ws.getCell(r, 2).numFmt = PCT_FMT;
  ws.getCell(r, 2).fill = ACCENT_FILL;
  ws.getCell(r, 2).dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ['"8%,10%,12%,15%"'],
  };
  ws.getCell(r, 5).value = { formula: `E${subtotalRow}*B${r}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  const overheadRow = r;
  r++;

  // Profit with dropdown
  ws.getCell(r, 1).value = "Profit Margin %:";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 2).value = 0.15;
  ws.getCell(r, 2).numFmt = PCT_FMT;
  ws.getCell(r, 2).fill = ACCENT_FILL;
  ws.getCell(r, 2).dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ['"10%,15%,20%,25%,30%,35%"'],
  };
  ws.getCell(r, 5).value = { formula: `(E${subtotalRow}+E${overheadRow})*B${r}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
  const profitRow = r;
  r++;

  // Grand total with green background
  ws.getCell(r, 1).value = "GRAND TOTAL";
  ws.getCell(r, 1).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
  ws.getCell(r, 5).value = { formula: `E${subtotalRow}+E${overheadRow}+E${profitRow}` } as any;
  ws.getCell(r, 5).numFmt = CURRENCY_FMT;
  ws.getCell(r, 5).font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
  for (let c = 1; c <= 5; c++) { ws.getCell(r, c).fill = GREEN_TOTAL_FILL; applyBorder(ws.getCell(r, c)); }
  ws.getRow(r).height = 28;
  r += 2;

  // Site Conditions Checklist
  ws.getCell(r, 1).value = "SITE CONDITIONS CHECKLIST";
  styleHeaderRow(ws, r, 5);
  r++;
  data.siteConditions.forEach(cond => {
    ws.getCell(r, 1).value = `☐ ${cond}`;
    ws.getCell(r, 1).font = { size: 10 };
    ws.getCell(r, 2).fill = ACCENT_FILL; // for notes
    ws.mergeCells(r, 2, r, 5);
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });
  r++;

  // Scope Exclusions
  ws.getCell(r, 1).value = "SCOPE EXCLUSIONS (Not Included)";
  styleHeaderRow(ws, r, 5);
  r++;
  data.scopeExclusions.forEach(exc => {
    ws.getCell(r, 1).value = `✗ ${exc}`;
    ws.getCell(r, 1).font = { size: 9, color: { argb: "FF64748B" } };
    ws.mergeCells(r, 1, r, 5);
    r++;
  });
  r++;

  // Change Order section
  ws.getCell(r, 1).value = "CHANGE ORDERS";
  styleHeaderRow(ws, r, 5);
  r++;
  ["Change Description", "Add/Remove", "", "Cost Impact", "Approved (Y/N)"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 5);
  r++;
  for (let i = 0; i < 5; i++) {
    ws.getCell(r, 1).fill = ACCENT_FILL;
    ws.getCell(r, 2).fill = ACCENT_FILL;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r, 5).fill = ACCENT_FILL;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  }
  r++;

  // Warranty Information
  ws.getCell(r, 1).value = "WARRANTY INFORMATION";
  styleHeaderRow(ws, r, 5);
  r++;
  data.warrantyNotes.forEach(note => {
    ws.getCell(r, 1).value = note;
    ws.getCell(r, 1).font = { size: 9 };
    ws.mergeCells(r, 1, r, 5);
    r++;
  });
  r++;

  // Payment terms
  ws.getCell(`A${r}`).value = "PAYMENT TERMS";
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;
  ws.getCell(`A${r}`).value = "• 50% deposit upon acceptance of this estimate";
  r++;
  ws.getCell(`A${r}`).value = "• 40% upon completion of concrete pour";
  r++;
  ws.getCell(`A${r}`).value = "• 10% final payment after client walkthrough";
  r += 2;

  ws.getCell(`A${r}`).value = "TERMS & CONDITIONS";
  ws.getCell(`A${r}`).font = { bold: true, size: 10 };
  r++;
  ws.getCell(`A${r}`).value = "This estimate is valid for 30 days. Pricing based on current material costs and may adjust if costs change significantly.";
  ws.mergeCells(`A${r}:E${r}`);
  r++;
  ws.getCell(`A${r}`).value = "Client responsible for permits. Work area must be accessible for concrete trucks. 1-year workmanship warranty.";
  ws.mergeCells(`A${r}:E${r}`);
  r += 2;

  ws.getCell(`A${r}`).value = "Client Signature: ________________________     Date: ________";
  r++;
  ws.getCell(`A${r}`).value = "Contractor Signature: ________________________     Date: ________";
  r += 2;
  ws.getCell(`A${r}`).value = "Template from EstimateConcrete.com — Free concrete contractor tools";
  ws.getCell(`A${r}`).font = { size: 8, color: { argb: "FF94A3B8" } };

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };
  ws.headerFooter = { oddFooter: "EstimateConcrete.com — Professional Concrete Estimating Tools" };

  await wb.xlsx.writeFile(path.join(OUT, data.filename));
  console.log(`✓ ${data.filename}`);
}

const estimates: EstimateConfig[] = [
  {
    filename: "estimate-driveway-c7e4a1.xlsx",
    title: "Driveway Estimate",
    description: "Professional residential concrete driveway estimate template. Includes demo, gravel base, forming, rebar/mesh, concrete pour, finishing, and sealing. Pre-loaded with typical driveway materials and labor items.",
    materials: [
      ["Concrete (ready-mix 4000 PSI)", 15, "CY", 150],
      ["Gravel base (6\" depth)", 12, "Tons", 35],
      ["Wire mesh (6x6 W2.9)", 800, "SF", 0.45],
      ["Rebar (#4 bar)", 200, "LF", 0.75],
      ["Expansion joint filler", 60, "LF", 2.50],
      ["Form lumber & stakes", 1, "Lot", 400],
      ["Fiber mesh additive", 15, "Bags", 12],
      ["Sealer (acrylic)", 10, "Gal", 28],
    ],
    labor: [
      ["Demo / removal of existing", 16, 55],
      ["Excavation & grading", 12, 55],
      ["Gravel base & compaction", 8, 50],
      ["Formwork installation", 10, 55],
      ["Rebar / mesh placement", 6, 55],
      ["Concrete placement & finishing", 16, 65],
      ["Broom finish / texturing", 4, 55],
      ["Sealer application", 4, 45],
      ["Cleanup & debris removal", 8, 45],
    ],
    equipment: [
      ["Skid steer / bobcat", 2, "Days", 350],
      ["Dump truck (hauling)", 1, "Load", 450],
      ["Plate compactor", 1, "Day", 125],
      ["Concrete vibrator", 1, "Day", 85],
      ["Power trowel", 1, "Day", 150],
      ["Mobilization", 1, "Trip", 300],
    ],
    projectSpecificItems: [
      "Apron / street flare (add to width at curb)",
      "Driveway apron widening (sq ft extra)",
      "Heating cable option (per LF of cable)",
      "Exposed aggregate finish (upgrade per SF)",
      "Decorative border / ribbon (per LF)",
      "Extra thickness upgrade (5\" or 6\")",
      "Turnaround / hammerhead addition",
    ],
    siteConditions: [
      "Access width for concrete truck (min 10')",
      "Slope/grade of driveway approach",
      "Existing driveway removal needed (Y/N)",
      "Underground utilities marked",
      "Soil type (clay, sand, rock, fill)",
      "Drainage pattern / water runoff direction",
      "Distance from batch plant to site",
      "Overhead clearance (tree branches, wires)",
    ],
    scopeExclusions: [
      "Building permits and inspection fees",
      "Landscaping restoration after construction",
      "Utility relocation or protection",
      "Grading beyond the driveway footprint",
      "Snow removal during construction",
      "Mailbox relocation",
      "Sprinkler system repair",
      "Tree root removal (if encountered)",
    ],
    warrantyNotes: [
      "1-YEAR WORKMANSHIP WARRANTY: Contractor warrants all work for 12 months from completion date.",
      "Warranty covers: settling, structural cracking >1/4\", drainage issues caused by improper grading.",
      "Warranty does NOT cover: hairline/shrinkage cracks (normal), color variation, damage from vehicles over weight limit,",
      "  salt/chemical damage, damage from tree roots, or acts of nature (frost heave, earthquake).",
      "Concrete naturally develops hairline cracks — this is NOT a defect and is not covered.",
      "Sealer should be reapplied every 2-3 years for best results (not covered under warranty).",
    ],
    howToSteps: [
      "Fill in your company info at the top (or use the Company Setup sheet in the Bid Calculator)",
      "Enter client information in the yellow cells",
      "Adjust material quantities and unit prices for your specific job",
      "Adjust labor hours and rates to match your crew",
      "Review equipment costs and modify as needed",
      "Check the PROJECT-SPECIFIC OPTIONS — add pricing for any extras the client wants",
      "Set your overhead % and profit margin % using the dropdown menus",
      "Review the GRAND TOTAL",
      "Complete the Site Conditions Checklist during site visit",
      "Print or save as PDF to present to the client",
    ],
  },
  {
    filename: "estimate-slab-d9b2e5.xlsx",
    title: "Concrete Slab Estimate",
    description: "Professional concrete slab estimate for garage floors, shed pads, shop floors, or commercial slabs. Includes vapor barrier, reinforcement options, and control joints.",
    materials: [
      ["Concrete (ready-mix 4000 PSI)", 12, "CY", 150],
      ["Gravel base (4\" depth)", 8, "Tons", 35],
      ["Vapor barrier (10 mil)", 1200, "SF", 0.15],
      ["Rebar (#4 bar)", 400, "LF", 0.75],
      ["Wire mesh (6x6)", 1200, "SF", 0.45],
      ["Control joint material", 120, "LF", 1.25],
      ["Curing compound", 5, "Gal", 18],
      ["Form lumber & stakes", 1, "Lot", 350],
    ],
    labor: [
      ["Site prep & grading", 16, 55],
      ["Formwork installation", 12, 55],
      ["Gravel base & compaction", 8, 50],
      ["Vapor barrier install", 4, 45],
      ["Rebar / mesh placement", 8, 55],
      ["Concrete placement & finishing", 16, 65],
      ["Control joint cutting", 4, 55],
      ["Cleanup", 6, 45],
    ],
    equipment: [
      ["Skid steer", 1, "Day", 350],
      ["Plate compactor", 1, "Day", 125],
      ["Concrete vibrator", 1, "Day", 85],
      ["Power trowel", 1, "Day", 150],
      ["Concrete saw", 1, "Day", 125],
      ["Mobilization", 1, "Trip", 250],
    ],
    projectSpecificItems: [
      "Vapor barrier upgrade (15 mil or 20 mil)",
      "Wire mesh vs. rebar upgrade (#4 rebar on 18\" centers)",
      "Thickness upgrade: 5\" slab (heavy equipment use)",
      "Thickness upgrade: 6\" slab (commercial/industrial)",
      "Fiber mesh additive (per CY)",
      "Turn-down edge / thickened edge",
      "Floor drain installation",
      "Anchor bolt placement for future walls",
    ],
    siteConditions: [
      "Access width for concrete truck (min 10')",
      "Existing slab removal needed (Y/N)",
      "Soil bearing capacity (compaction test done?)",
      "Water table depth",
      "Slope of site — fill needed?",
      "Underground utilities marked",
      "Intended use (garage, shop, storage, equipment)",
      "Future wall or building placement on slab",
    ],
    scopeExclusions: [
      "Building permits and inspections",
      "Soil compaction testing",
      "Underground plumbing (rough-in)",
      "Electrical conduit placement",
      "Landscaping restoration",
      "Retaining walls or grade beams",
      "Floor coatings or epoxy (separate scope)",
      "Structural engineering certification",
    ],
    warrantyNotes: [
      "1-YEAR WORKMANSHIP WARRANTY: Contractor warrants all work for 12 months from completion date.",
      "Warranty covers: structural cracking >1/4\", settling, improper drainage.",
      "Warranty does NOT cover: hairline/shrinkage cracks (normal in slabs), color variation,",
      "  damage from overloading beyond design capacity, chemical/salt damage, acts of nature.",
      "THICKNESS RECOMMENDATIONS BY USE:",
      "  • Light foot traffic / shed pad: 4\" minimum",
      "  • Residential garage (cars): 4\" with wire mesh",
      "  • Heavy garage (trucks/equipment): 5-6\" with rebar",
      "  • Commercial/industrial: 6\"+ with engineered rebar schedule",
    ],
    howToSteps: [
      "Fill in your company info at the top",
      "Enter client information in the yellow cells",
      "Adjust material quantities — especially concrete CY based on slab dimensions",
      "Choose reinforcement method: wire mesh for light use, rebar for heavy use (see Thickness Recommendations)",
      "Verify vapor barrier is included if slab will be enclosed (garage, shop)",
      "Adjust labor hours for your crew size",
      "Add any project-specific options the client wants",
      "Set overhead % and profit margin % using dropdowns",
      "Complete the Site Conditions Checklist",
      "Print or save as PDF for client presentation",
    ],
  },
  {
    filename: "estimate-patio-f3a6c8.xlsx",
    title: "Patio Estimate",
    description: "Professional residential patio estimate with decorative options. Includes basic concrete, stamped, exposed aggregate, and colored concrete options with decorative borders.",
    materials: [
      ["Concrete (ready-mix 4000 PSI)", 8, "CY", 155],
      ["Gravel base (4\" depth)", 6, "Tons", 35],
      ["Wire mesh (6x6)", 500, "SF", 0.45],
      ["Expansion joint material", 40, "LF", 2.50],
      ["Form lumber & stakes", 1, "Lot", 300],
      ["Decorative edge forms", 40, "LF", 3.00],
      ["Sealer", 6, "Gal", 28],
    ],
    labor: [
      ["Site prep & excavation", 10, 55],
      ["Gravel base & compaction", 6, 50],
      ["Formwork (incl. curves)", 8, 55],
      ["Mesh placement", 4, 55],
      ["Concrete placement & finish", 12, 65],
      ["Decorative finishing", 6, 60],
      ["Sealer application", 3, 45],
      ["Cleanup", 4, 45],
    ],
    equipment: [
      ["Plate compactor", 1, "Day", 125],
      ["Concrete vibrator", 1, "Day", 85],
      ["Bull float / trowel", 1, "Day", 100],
      ["Mobilization", 1, "Trip", 250],
    ],
    projectSpecificItems: [
      "Stamped concrete upgrade (per SF)",
      "Exposed aggregate finish (per SF)",
      "Integral color additive (per CY)",
      "Color hardener application (per SF)",
      "Decorative saw-cut pattern",
      "Step / landing addition (each)",
      "Seat wall / raised border (per LF)",
      "Fire pit pad (concrete base)",
      "French drain along patio edge (per LF)",
      "Retaining wall / grade change (per LF)",
    ],
    siteConditions: [
      "Access for concrete truck and equipment",
      "Existing patio or deck removal needed",
      "Slope away from house (min 1/4\" per foot)",
      "Drainage plan — where does water go?",
      "Underground utilities (sprinklers, gas, electric)",
      "Soil type and stability",
      "Proximity to trees (root issues)",
      "Fence gates wide enough for equipment",
      "HOA requirements for materials/colors",
    ],
    scopeExclusions: [
      "Building permits and HOA approvals",
      "Landscaping and planting restoration",
      "Outdoor lighting or electrical",
      "Patio furniture or accessories",
      "Pergola or shade structure",
      "Sprinkler system relocation",
      "Fence removal and reinstallation",
      "Drainage beyond patio perimeter",
    ],
    warrantyNotes: [
      "1-YEAR WORKMANSHIP WARRANTY: Contractor warrants all work for 12 months from completion date.",
      "Warranty covers: structural cracking >1/4\", improper drainage toward house, settling.",
      "Warranty does NOT cover: hairline cracks (normal), color fading from UV exposure,",
      "  staining from patio furniture, chemical damage, freeze/thaw damage, acts of nature.",
      "DECORATIVE CONCRETE NOTES:",
      "  • Stamped patterns may show slight variation — this is the nature of hand-stamped concrete",
      "  • Integral color will have natural variation between batches",
      "  • Exposed aggregate finish varies with the aggregate in the mix",
      "  • Sealer should be reapplied every 1-2 years for decorative concrete",
    ],
    howToSteps: [
      "Fill in your company and client information",
      "Adjust material quantities based on patio size",
      "Review decorative options with the client — stamped, exposed, colored, etc.",
      "Price out any project-specific options (steps, seat walls, drainage)",
      "Adjust labor hours — decorative work takes significantly more time than basic broom finish",
      "Note: decorative patios typically price at $16-$30/SF vs $8-$14/SF for basic",
      "Set overhead and profit margins using the dropdowns",
      "Complete site conditions checklist during your site visit",
      "Present the estimate showing base price + optional upgrades separately",
    ],
  },
  {
    filename: "estimate-foundation-b5d1e7.xlsx",
    title: "Foundation & Footings Estimate",
    description: "Complete foundation and footing estimate including excavation, forming, rebar, pour, waterproofing, and drain tile. Covers residential footings, foundation walls, and basement construction.",
    materials: [
      ["Concrete (ready-mix 4500 PSI)", 25, "CY", 165],
      ["Rebar (#5 bar)", 800, "LF", 1.10],
      ["Foundation forms (rental)", 1, "Lot", 1200],
      ["Anchor bolts (1/2\" × 10\")", 30, "EA", 4.50],
      ["Waterproofing membrane", 600, "SF", 1.25],
      ["Drain tile (4\")", 150, "LF", 3.50],
      ["Gravel (drainage)", 10, "Tons", 35],
      ["Vapor barrier", 800, "SF", 0.20],
      ["Snap ties & hardware", 1, "Lot", 300],
      ["Form release agent", 5, "Gal", 15],
    ],
    labor: [
      ["Excavation layout & grading", 20, 55],
      ["Footing forming", 16, 60],
      ["Rebar tying", 16, 60],
      ["Footing pour & finish", 10, 65],
      ["Wall form setup", 20, 60],
      ["Wall pour", 12, 65],
      ["Form stripping & cleanup", 12, 55],
      ["Waterproofing application", 8, 55],
      ["Drain tile installation", 8, 55],
      ["Backfill coordination", 6, 50],
    ],
    equipment: [
      ["Excavator", 3, "Days", 500],
      ["Concrete pump", 2, "Pours", 600],
      ["Concrete vibrator", 2, "Days", 85],
      ["Transit / laser level", 1, "Day", 75],
      ["Mobilization", 1, "Trip", 400],
    ],
    projectSpecificItems: [
      "Frost depth upgrade — deeper footings (per LF additional depth)",
      "Stepped footings for sloped site (per step)",
      "Rebar schedule upgrade (#5 to #6 bar)",
      "Waterproofing upgrade (spray-on rubber vs. tar)",
      "Interior drain tile system",
      "Sump pit and pump installation",
      "Window well installation (each)",
      "Beam pocket / steel beam support",
      "Radon mitigation pipe (rough-in)",
      "ICF (Insulated Concrete Form) upgrade",
    ],
    siteConditions: [
      "Soil boring / geotechnical report available?",
      "Frost depth for your region (check local code)",
      "Water table depth",
      "Rock encountered during excavation?",
      "Access for excavator and concrete trucks",
      "Site survey / pin locations confirmed",
      "Setback requirements verified",
      "Underground utilities located and marked",
      "Dewatering needed for excavation?",
    ],
    scopeExclusions: [
      "Building permits and engineering",
      "Soil testing / geotechnical report",
      "Surveying and staking",
      "Dewatering (if water table is high)",
      "Rock removal (if rock is encountered)",
      "Backfill (typically by excavation contractor)",
      "Basement slab (separate estimate)",
      "Structural engineering and stamped drawings",
      "Utility connections (water, sewer, gas, electric)",
    ],
    warrantyNotes: [
      "1-YEAR WORKMANSHIP WARRANTY: Contractor warrants all work for 12 months from completion date.",
      "Warranty covers: structural cracking, water intrusion through workmanship defects, settling.",
      "Warranty does NOT cover: settling due to soil conditions not identified in soils report,",
      "  lateral pressure damage, water intrusion from above-grade sources, acts of nature.",
      "FROST DEPTH REFERENCE BY REGION:",
      "  • Southern states (FL, TX, LA): 0-12 inches",
      "  • Mid-Atlantic (VA, NC, TN): 18-24 inches",
      "  • Midwest (OH, IL, IN): 36-42 inches",
      "  • Northern states (MN, WI, MI): 42-60 inches",
      "  • Mountain/high altitude: 36-48+ inches",
      "  • Always verify with local building code for exact requirements",
      "REBAR SCHEDULE: Footings typically require #4 or #5 rebar per engineering. Verify with your structural plans.",
    ],
    howToSteps: [
      "Fill in company and client information",
      "Verify concrete PSI requirement with structural engineer (typically 3500-4500 PSI for foundations)",
      "Calculate concrete yards based on footing/wall dimensions",
      "Verify rebar schedule against structural drawings",
      "Check frost depth requirement for your area (see warranty notes)",
      "Include waterproofing if foundation walls will be below grade",
      "Include drain tile for any basement or below-grade construction",
      "Price out project-specific options based on site conditions",
      "Set overhead and profit margins",
      "Have structural engineer approve the scope before presenting to client",
    ],
  },
  {
    filename: "estimate-stamped-e2c9f4.xlsx",
    title: "Stamped / Decorative Concrete Estimate",
    description: "Premium stamped concrete estimate with color options, pattern selection, and sealer specifications. Includes color hardener, release agent, stamping labor, and multi-coat sealer application.",
    materials: [
      ["Concrete (ready-mix 4000 PSI)", 10, "CY", 155],
      ["Color hardener", 120, "LB", 0.85],
      ["Release agent (liquid)", 5, "Gal", 35],
      ["Stamp mats (rental)", 1, "Set", 500],
      ["Gravel base", 8, "Tons", 35],
      ["Wire mesh", 600, "SF", 0.45],
      ["Form lumber", 1, "Lot", 350],
      ["High-gloss sealer", 8, "Gal", 45],
      ["Touch-up color kit", 1, "Kit", 75],
      ["Anti-skid additive for sealer", 2, "LB", 12],
    ],
    labor: [
      ["Site prep & grading", 10, 55],
      ["Gravel base & compact", 6, 50],
      ["Formwork", 8, 55],
      ["Mesh placement", 4, 55],
      ["Pour & screed", 10, 65],
      ["Color hardener application", 4, 65],
      ["Stamping", 8, 70],
      ["Detail work & touch-up", 6, 65],
      ["Washing & sealing", 6, 55],
      ["Cleanup", 4, 45],
    ],
    equipment: [
      ["Plate compactor", 1, "Day", 125],
      ["Concrete vibrator", 1, "Day", 85],
      ["Bull float / fresno", 1, "Day", 100],
      ["Pressure washer", 1, "Day", 150],
      ["Mobilization", 1, "Trip", 300],
    ],
    projectSpecificItems: [
      "Accent/secondary color (borders, bands)",
      "Custom color blend (multi-tone effect)",
      "Seamless texture (skin) instead of stamp pattern",
      "Hand-carved stone/rock pattern (per SF premium)",
      "Integral color instead of hardener (per CY)",
      "Engraved design or logo",
      "Exposed aggregate border accent (per LF)",
      "Concrete steps with matching stamp pattern (per step)",
      "Anti-slip texture on steps/slopes",
      "Second coat sealer (high-traffic areas)",
    ],
    siteConditions: [
      "Access for concrete truck and stamp crew",
      "Weather window (stamping is time-critical — no rain)",
      "Existing surface removal needed",
      "Slope and drainage considerations",
      "Adjacent surfaces to match or transition",
      "Color sample approved by client",
      "Pattern sample approved by client",
      "Underground utilities located",
    ],
    scopeExclusions: [
      "Building permits",
      "Landscaping restoration",
      "Outdoor lighting or electrical",
      "Future sealer reapplication (maintenance item)",
      "Color matching to existing stamped concrete",
      "Repairs to adjacent surfaces",
      "Snow/ice damage after completion",
      "Staining from external sources (rust, leaves, chemicals)",
    ],
    warrantyNotes: [
      "1-YEAR WORKMANSHIP WARRANTY: Contractor warrants all work for 12 months from completion date.",
      "Warranty covers: delamination of color hardener, structural cracking >1/4\", pattern defects.",
      "Warranty does NOT cover: color fading (natural), sealer wear (normal), hairline cracks,",
      "  staining, chemical/salt damage, freeze/thaw damage.",
      "COLOR CHART OPTIONS (discuss with client):",
      "  • Earth tones: Sandstone, Desert Tan, Adobe, Terra Cotta, Canyon",
      "  • Gray tones: Platinum, Pewter, Slate, Charcoal, Graphite",
      "  • Brown tones: Walnut, Bark, Mocha, Chestnut, Umber",
      "  • Red tones: Brick Red, Burgundy, Rose, Cayenne",
      "POPULAR STAMP PATTERNS:",
      "  • Ashlar Slate, Roman Slate, European Fan, Herringbone Brick",
      "  • Cobblestone, Flagstone, Wood Plank, Fieldstone, Tile",
      "SEALER TYPES AND MAINTENANCE:",
      "  • Acrylic (standard): Reapply every 2-3 years. Good UV resistance. $/gal: $25-$35",
      "  • Polyurethane: Reapply every 3-5 years. Superior durability. $/gal: $40-$60",
      "  • Epoxy: Reapply every 5-7 years. Best protection. $/gal: $50-$80. Indoor preferred.",
    ],
    howToSteps: [
      "Fill in company and client information",
      "Discuss color and pattern options with client BEFORE estimating (affects pricing)",
      "Adjust material quantities based on area — color hardener coverage is ~60 lbs per 100 SF",
      "Stamping labor is significantly higher than regular concrete — budget 0.20+ hrs/SF",
      "Include stamp mat rental or purchase cost",
      "Price sealer separately — type affects both cost and maintenance schedule",
      "Add any decorative upgrades (accent colors, borders, carved details)",
      "Set overhead and profit margins — decorative work commands higher margins (20-30%)",
      "Get written color and pattern approval from client before work begins",
      "Include maintenance schedule in the estimate so client knows about future sealer costs",
    ],
  },
];

// ======================== CONTRACT TEMPLATE ========================
async function generateContract() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  // How to Use
  addHowToUseSheet(wb, "Client Contract",
    "Professional concrete work contract template. Covers scope of work, payment schedule, terms and conditions, and signature blocks. Includes Change Order and Warranty Certificate sheets.",
    [
      "Fill in contractor and client information",
      "Detail the scope of work (be specific — this is legally binding)",
      "Set the payment schedule amounts",
      "Review all terms and conditions",
      "Use the Change Order sheet for any scope changes during the project",
      "Give the client the Warranty Certificate after project completion",
      "Both parties sign and date the contract",
    ],
    "None — this is a text/data entry template",
    "All yellow cells"
  );

  const ws = wb.addWorksheet("Contract");
  ws.columns = [{ width: 28 }, { width: 20 }, { width: 14 }, { width: 14 }, { width: 16 }];

  ws.mergeCells("A1:E1");
  ws.getCell("A1").value = "CLIENT CONTRACT — CONCRETE WORK";
  ws.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 30;

  ws.mergeCells("A2:E2");
  ws.getCell("A2").value = "[YOUR COMPANY NAME]";
  ws.getCell("A2").font = { bold: true, size: 14 };

  let r = 4;
  const sections = [
    { header: "CONTRACTOR INFORMATION", fields: ["Company Name", "Address", "Phone", "Email", "License #", "Insurance Policy #"] },
    { header: "CLIENT INFORMATION", fields: ["Client Name", "Client Address", "Client Phone", "Client Email"] },
    { header: "PROJECT DETAILS", fields: ["Project Address", "Project Type", "Start Date", "Estimated Completion", "Project Description"] },
  ];

  for (const section of sections) {
    ws.getCell(`A${r}`).value = section.header;
    ws.mergeCells(`A${r}:E${r}`);
    for (let c = 1; c <= 5; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
    r++;
    for (const field of section.fields) {
      ws.getCell(`A${r}`).value = field + ":";
      ws.getCell(`A${r}`).font = { bold: true, size: 10 };
      ws.getCell(`B${r}`).fill = ACCENT_FILL;
      applyBorder(ws.getCell(`A${r}`));
      applyBorder(ws.getCell(`B${r}`));
      r++;
    }
    r++;
  }

  // Scope of Work
  ws.getCell(`A${r}`).value = "SCOPE OF WORK";
  ws.mergeCells(`A${r}:E${r}`);
  for (let c = 1; c <= 5; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;
  for (let i = 1; i <= 10; i++) {
    ws.getCell(`A${r}`).value = `${i}.`;
    ws.getCell(`B${r}`).value = "[Describe work item]";
    ws.getCell(`B${r}`).fill = ACCENT_FILL;
    applyBorder(ws.getCell(`A${r}`));
    applyBorder(ws.getCell(`B${r}`));
    r++;
  }
  r++;

  // Payment Schedule
  ws.getCell(`A${r}`).value = "PAYMENT SCHEDULE";
  ws.mergeCells(`A${r}:E${r}`);
  for (let c = 1; c <= 5; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;
  ["Milestone", "Percentage", "Amount", "Due Date", "Status"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 5);
  r++;

  const payments = [
    ["Contract Signing (Deposit)", "50%"],
    ["Completion of Pour", "40%"],
    ["Final Walkthrough", "10%"],
  ];
  payments.forEach(([milestone, pct]) => {
    ws.getCell(r, 1).value = milestone;
    ws.getCell(r, 2).value = pct;
    ws.getCell(r, 3).fill = ACCENT_FILL;
    ws.getCell(r, 3).numFmt = CURRENCY_FMT;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 5).fill = ACCENT_FILL;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
    r++;
  });
  r++;

  ws.getCell(`A${r}`).value = "TOTAL CONTRACT AMOUNT:";
  ws.getCell(`A${r}`).font = { bold: true, size: 12 };
  ws.getCell(`B${r}`).fill = ACCENT_FILL;
  ws.getCell(`B${r}`).numFmt = CURRENCY_FMT;
  r += 2;

  // Terms
  ws.getCell(`A${r}`).value = "TERMS & CONDITIONS";
  ws.mergeCells(`A${r}:E${r}`);
  for (let c = 1; c <= 5; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;
  const terms = [
    "1. This contract is binding upon signature by both parties.",
    "2. Changes to scope require a written change order signed by both parties.",
    "3. Client is responsible for obtaining necessary permits unless otherwise stated.",
    "4. Work area must be accessible for concrete delivery trucks (min 10' wide, 13' clearance).",
    "5. Minor surface cracking is a normal characteristic of concrete and is not a defect.",
    "6. Contractor provides a 1-year workmanship warranty from date of completion.",
    "7. Additional work not specified in this contract will be billed at the agreed hourly rate.",
    "8. Either party may terminate with 48-hour written notice; client pays for work completed.",
    "9. Contractor is not responsible for underground utility damage if not properly marked by utilities.",
    "10. Weather delays are not the contractor's responsibility; schedule will be adjusted accordingly.",
    "11. CONCRETE-SPECIFIC TERMS:",
    "12. Color variation between concrete batches is normal and not a defect.",
    "13. Concrete must cure for 28 days before reaching full strength. Client must not drive on new concrete for 7 days minimum.",
    "14. Hairline and shrinkage cracks are inherent to concrete and are not covered by warranty.",
    "15. Control joints are placed to manage cracking — cracks may still occur outside of joints.",
    "16. Concrete surfaces may develop efflorescence (white mineral deposits) — this is temporary and not a defect.",
    "17. Client must allow proper curing time (keep wet or covered for 7 days) as directed by contractor.",
  ];
  terms.forEach(t => {
    ws.getCell(`A${r}`).value = t;
    ws.mergeCells(`A${r}:E${r}`);
    ws.getCell(`A${r}`).font = { size: 9 };
    r++;
  });
  r += 2;

  // Signatures
  ws.getCell(`A${r}`).value = "SIGNATURES";
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r += 2;
  ws.getCell(`A${r}`).value = "Client Signature: ________________________     Date: ________";
  r++;
  ws.getCell(`A${r}`).value = "Print Name: ________________________";
  r += 2;
  ws.getCell(`A${r}`).value = "Contractor Signature: ________________________     Date: ________";
  r++;
  ws.getCell(`A${r}`).value = "Print Name: ________________________";

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  // --- Change Order Sheet ---
  const wsCO = wb.addWorksheet("Change Order");
  wsCO.columns = [{ width: 6 }, { width: 30 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 14 }];

  wsCO.mergeCells("A1:F1");
  wsCO.getCell("A1").value = "CHANGE ORDER";
  wsCO.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  wsCO.getRow(1).height = 28;

  wsCO.getCell("A3").value = "Project:";
  wsCO.getCell("A3").font = { bold: true };
  wsCO.getCell("B3").fill = ACCENT_FILL;
  wsCO.getCell("D3").value = "Date:";
  wsCO.getCell("D3").font = { bold: true };
  wsCO.getCell("E3").fill = ACCENT_FILL;

  wsCO.getCell("A4").value = "Client:";
  wsCO.getCell("A4").font = { bold: true };
  wsCO.getCell("B4").fill = ACCENT_FILL;
  wsCO.getCell("D4").value = "CO #:";
  wsCO.getCell("D4").font = { bold: true };
  wsCO.getCell("E4").fill = ACCENT_FILL;

  ["#", "Description of Change", "Add/Deduct", "Material Cost", "Labor Cost", "Total Cost"].forEach((h, i) => {
    wsCO.getCell(6, i + 1).value = h;
  });
  styleHeaderRow(wsCO, 6, 6);

  for (let i = 0; i < 10; i++) {
    const row = 7 + i;
    wsCO.getCell(row, 1).value = i + 1;
    wsCO.getCell(row, 1).alignment = { horizontal: "center" };
    wsCO.getCell(row, 2).fill = ACCENT_FILL;
    wsCO.getCell(row, 3).fill = ACCENT_FILL;
    wsCO.getCell(row, 4).fill = ACCENT_FILL;
    wsCO.getCell(row, 4).numFmt = CURRENCY_FMT;
    wsCO.getCell(row, 5).fill = ACCENT_FILL;
    wsCO.getCell(row, 5).numFmt = CURRENCY_FMT;
    wsCO.getCell(row, 6).value = { formula: `D${row}+E${row}` } as any;
    wsCO.getCell(row, 6).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 6; c++) applyBorder(wsCO.getCell(row, c));
  }

  const coTotalRow = 17;
  wsCO.getCell(coTotalRow, 1).value = "";
  wsCO.getCell(coTotalRow, 2).value = "TOTAL CHANGE ORDER AMOUNT";
  wsCO.getCell(coTotalRow, 2).font = { bold: true, size: 11 };
  wsCO.getCell(coTotalRow, 6).value = { formula: "SUM(F7:F16)" } as any;
  wsCO.getCell(coTotalRow, 6).numFmt = CURRENCY_FMT;
  wsCO.getCell(coTotalRow, 6).font = { bold: true, size: 12 };
  styleSubheaderRow(wsCO, coTotalRow, 6);

  let coR = 19;
  wsCO.getCell(`A${coR}`).value = "Reason for Change:";
  wsCO.getCell(`A${coR}`).font = { bold: true };
  coR++;
  wsCO.mergeCells(`A${coR}:F${coR + 2}`);
  wsCO.getCell(`A${coR}`).fill = ACCENT_FILL;
  applyBorder(wsCO.getCell(`A${coR}`));
  coR += 4;
  wsCO.getCell(`A${coR}`).value = "Impact on Schedule:";
  wsCO.getCell(`A${coR}`).font = { bold: true };
  wsCO.getCell(`B${coR}`).fill = ACCENT_FILL;
  coR += 2;
  wsCO.getCell(`A${coR}`).value = "Client Signature: ________________________     Date: ________";
  coR++;
  wsCO.getCell(`A${coR}`).value = "Contractor Signature: ________________________     Date: ________";

  // --- Warranty Certificate Sheet ---
  const wsW = wb.addWorksheet("Warranty Certificate");
  wsW.columns = [{ width: 6 }, { width: 50 }];

  wsW.mergeCells("A1:B1");
  wsW.getCell("A1").value = "WARRANTY CERTIFICATE";
  wsW.getCell("A1").font = { bold: true, size: 18, color: { argb: "FF1E293B" } };
  wsW.getCell("A1").alignment = { horizontal: "center" };
  wsW.getRow(1).height = 35;

  wsW.mergeCells("A2:B2");
  wsW.getCell("A2").value = "[YOUR COMPANY NAME]";
  wsW.getCell("A2").font = { bold: true, size: 14 };
  wsW.getCell("A2").alignment = { horizontal: "center" };

  wsW.mergeCells("A3:B3");
  wsW.getCell("A3").value = "[Address] • [Phone] • [Email]";
  wsW.getCell("A3").font = { size: 10, color: { argb: "FF64748B" } };
  wsW.getCell("A3").alignment = { horizontal: "center" };

  let wR = 5;
  wsW.mergeCells(`A${wR}:B${wR}`);
  wsW.getCell(`A${wR}`).value = "This warranty certificate is issued to:";
  wsW.getCell(`A${wR}`).font = { size: 10 };
  wR++;

  const warrantyFields = [
    ["Client Name:", ""],
    ["Project Address:", ""],
    ["Project Type:", ""],
    ["Date of Completion:", ""],
    ["Warranty Expiration:", ""],
  ];
  warrantyFields.forEach(([label]) => {
    wsW.getCell(`A${wR}`).value = label;
    wsW.getCell(`A${wR}`).font = { bold: true, size: 10 };
    wsW.getCell(`B${wR}`).fill = ACCENT_FILL;
    applyBorder(wsW.getCell(`A${wR}`));
    applyBorder(wsW.getCell(`B${wR}`));
    wR++;
  });

  wR++;
  wsW.mergeCells(`A${wR}:B${wR}`);
  wsW.getCell(`A${wR}`).value = "WARRANTY TERMS";
  wsW.getCell(`A${wR}`).font = { bold: true, size: 12 };
  wR++;

  const warrantyTerms = [
    "This warranty covers workmanship defects for a period of ONE (1) YEAR from the date of completion.",
    "",
    "COVERED: Structural cracking (>1/4\" width), settling due to improper compaction, water drainage issues caused by improper grading, delamination of applied finishes (color hardener, sealer).",
    "",
    "NOT COVERED: Hairline or shrinkage cracks (a normal concrete characteristic), color variation between batches, efflorescence (white mineral deposits), damage from salt or chemicals, damage from overloading, freeze/thaw damage, damage from improper maintenance, acts of nature.",
    "",
    "MAINTENANCE REQUIREMENTS: To maintain this warranty, client must:",
    "  • Reapply sealer as recommended (typically every 2-3 years)",
    "  • Avoid deicing chemicals on concrete less than 1 year old",
    "  • Do not exceed designed load capacity",
    "  • Report any warranty issues within 30 days of discovery",
    "",
    "To file a warranty claim, contact us at the number above. We will inspect the issue within 7 business days.",
  ];
  warrantyTerms.forEach(term => {
    wsW.mergeCells(`A${wR}:B${wR}`);
    wsW.getCell(`A${wR}`).value = term;
    wsW.getCell(`A${wR}`).font = { size: 10 };
    wsW.getCell(`A${wR}`).alignment = { wrapText: true };
    wR++;
  });

  wR += 2;
  wsW.getCell(`A${wR}`).value = "Contractor Signature: ________________________     Date: ________";
  wsW.mergeCells(`A${wR}:B${wR}`);
  wR++;
  wsW.getCell(`A${wR}`).value = "Print Name & Title: ________________________";
  wsW.mergeCells(`A${wR}:B${wR}`);
  wR += 2;
  wsW.getCell(`A${wR}`).value = "This warranty certificate should be kept with your project records.";
  wsW.getCell(`A${wR}`).font = { italic: true, size: 9, color: { argb: "FF64748B" } };
  wsW.mergeCells(`A${wR}:B${wR}`);

  await wb.xlsx.writeFile(path.join(OUT, "contract-template-a4d7b3.xlsx"));
  console.log("✓ contract-template-a4d7b3.xlsx");
}

// ======================== SOP ========================
async function generateSOP() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  addHowToUseSheet(wb, "SOP — Concrete Pour",
    "Standard Operating Procedure checklist for concrete pours. Print this for every job and have your foreman check off each step. Covers pre-pour prep, morning of pour, during pour, finishing, and cleanup.",
    [
      "Print a copy for each job",
      "Fill in the Job name, Date, Foreman, and Crew Size at the top",
      "Work through each phase chronologically",
      "Check off (✓) each completed task in the yellow column",
      "Note the time each task is completed",
      "Add any job-specific notes in the Notes column",
      "Keep completed checklists in your job files for reference",
    ],
    "None — this is a checklist template",
    "Done (✓), Time, and Notes columns (yellow)"
  );

  const ws = wb.addWorksheet("SOP - Concrete Pour");
  ws.columns = [{ width: 8 }, { width: 40 }, { width: 16 }, { width: 14 }, { width: 20 }];

  ws.mergeCells("A1:E1");
  ws.getCell("A1").value = "STANDARD OPERATING PROCEDURE — CONCRETE POUR";
  ws.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 28;

  ws.getCell("A2").value = "Job:";
  ws.getCell("A2").font = { bold: true };
  ws.getCell("B2").fill = ACCENT_FILL;
  ws.getCell("C2").value = "Date:";
  ws.getCell("C2").font = { bold: true };
  ws.getCell("D2").fill = ACCENT_FILL;

  ws.getCell("A3").value = "Foreman:";
  ws.getCell("A3").font = { bold: true };
  ws.getCell("B3").fill = ACCENT_FILL;
  ws.getCell("C3").value = "Crew Size:";
  ws.getCell("C3").font = { bold: true };
  ws.getCell("D3").fill = ACCENT_FILL;

  let r = 5;
  const phases = [
    {
      name: "PRE-POUR (Day Before)",
      items: [
        "Confirm concrete delivery time with batch plant",
        "Verify total cubic yards ordered (include 10% waste)",
        "Check weather forecast — no rain within 24 hours",
        "Verify all forms are set, level, and properly staked",
        "Confirm rebar/mesh is installed and inspected",
        "Verify gravel base is compacted and graded",
        "Check that control/expansion joints are planned",
        "Load all tools and equipment on truck",
        "Confirm crew availability and arrival time",
        "Contact client to confirm pour date",
      ],
    },
    {
      name: "MORNING OF POUR (Before Concrete Arrives)",
      items: [
        "Arrive at job site minimum 1 hour before truck",
        "Walk the site — check forms haven't shifted overnight",
        "Wet down gravel base (prevents concrete from drying too fast)",
        "Set up all finishing tools within reach",
        "Assign crew positions (rake, vibrate, screed, finish)",
        "Verify pump truck is set up (if using pump)",
        "Check access route for concrete truck",
        "Have water source ready for tools and cleanup",
        "Apply release agent to forms",
      ],
    },
    {
      name: "DURING POUR",
      items: [
        "Guide concrete truck into position",
        "Direct concrete placement — start at far end, work back",
        "Vibrate concrete to remove air pockets",
        "Screed to proper grade as pour progresses",
        "Monitor concrete consistency — reject if too dry or wet",
        "Keep track of yards placed vs. ordered",
        "Bull float immediately after screeding each section",
        "Install control joint inserts or mark for cutting",
        "Keep pour moving — don't let concrete set before finishing",
        "Get concrete truck driver's ticket (record yards delivered)",
      ],
    },
    {
      name: "FINISHING",
      items: [
        "Wait for bleed water to evaporate before finishing",
        "Test readiness — kneeboard should leave 1/4\" impression",
        "First pass with fresno or mag float",
        "Edge all perimeter and joint locations",
        "Apply broom finish or stamp pattern",
        "Cut or tool control joints (1/4 of slab depth)",
        "Apply curing compound or wet cure",
        "Protect fresh concrete from rain/frost if needed",
        "Remove forms after 24 hours minimum",
      ],
    },
    {
      name: "CLEANUP & CLOSE-OUT",
      items: [
        "Wash all tools immediately — don't let concrete harden",
        "Clean concrete truck chute area",
        "Remove all debris and excess material",
        "Take completion photos (multiple angles)",
        "Note any issues or deviations on this checklist",
        "Apply sealer after 28-day cure (if contracted)",
        "Schedule client walkthrough",
        "Submit final invoice",
      ],
    },
  ];

  for (const phase of phases) {
    ws.getCell(r, 1).value = phase.name;
    ws.mergeCells(r, 1, r, 2);
    ["", "", "Done (✓)", "Time", "Notes"].forEach((h, i) => {
      if (h) ws.getCell(r, i + 1).value = h;
    });
    styleHeaderRow(ws, r, 5);
    r++;

    phase.items.forEach((item, i) => {
      ws.getCell(r, 1).value = i + 1;
      ws.getCell(r, 1).alignment = { horizontal: "center" };
      ws.getCell(r, 2).value = item;
      ws.getCell(r, 3).fill = ACCENT_FILL;
      ws.getCell(r, 4).fill = ACCENT_FILL;
      ws.getCell(r, 5).fill = ACCENT_FILL;
      for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r, c));
      r++;
    });
    r++;
  }

  ws.getCell(`A${r}`).value = "ADDITIONAL NOTES:";
  ws.getCell(`A${r}`).font = { bold: true, size: 11 };
  r++;
  for (let i = 0; i < 5; i++) {
    ws.mergeCells(`A${r}:E${r}`);
    ws.getCell(`A${r}`).fill = ACCENT_FILL;
    ws.getRow(r).height = 20;
    applyBorder(ws.getCell(`A${r}`));
    r++;
  }

  ws.pageSetup = { paperSize: 1, orientation: "portrait", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  await wb.xlsx.writeFile(path.join(OUT, "sop-concrete-pour-b8e3d6.xlsx"));
  console.log("✓ sop-concrete-pour-b8e3d6.xlsx");
}

// ======================== PRICING MATRIX ========================
async function generatePricingMatrix() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  addHowToUseSheet(wb, "Pricing Matrix",
    "Comprehensive pricing reference for concrete work. Use the 'Your Pricing Calculator' sheet to set custom rates based on your costs. Includes regional multipliers, add-on pricing, and minimum job charges.",
    [
      "Review the price ranges on the 'Pricing Matrix' sheet",
      "Go to 'Your Pricing Calculator' to enter your specific rates",
      "Enter your hourly rate, overhead %, and profit % — prices auto-calculate",
      "Use regional multipliers to adjust for your market",
      "Fill in the 'Your Rate' column on the main matrix with your actual prices",
      "Reference the add-on pricing when building estimates",
      "Adjust seasonal multipliers based on your local market",
    ],
    "'Your Pricing Calculator' — Column E (Your Price/SF) auto-calculates",
    "Yellow cells: 'Your Rate' column and 'Your Pricing Calculator' inputs"
  );

  const ws = wb.addWorksheet("Pricing Matrix");
  ws.columns = [
    { width: 24 }, { width: 14 }, { width: 14 }, { width: 14 },
    { width: 14 }, { width: 14 }, { width: 14 },
  ];

  ws.mergeCells("A1:G1");
  ws.getCell("A1").value = "CONCRETE PRICING MATRIX — 2024-2025";
  ws.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 30;

  ws.mergeCells("A2:G2");
  ws.getCell("A2").value = "Customizable pricing reference by project type, complexity, and region";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  // Section 1: Price per SF by project type and complexity
  let r2 = 4;
  ws.getCell(`A${r2}`).value = "PRICE PER SQUARE FOOT — BY PROJECT TYPE & COMPLEXITY";
  ws.mergeCells(`A${r2}:G${r2}`);
  for (let c = 1; c <= 7; c++) { ws.getCell(r2, c).fill = HEADER_FILL; ws.getCell(r2, c).font = HEADER_FONT; }
  r2++;

  ["Project Type", "Budget", "Standard", "Mid-Range", "Premium", "Luxury", "Your Rate"].forEach((h, i) => {
    ws.getCell(r2, i + 1).value = h;
  });
  styleSubheaderRow(ws, r2, 7);
  r2++;

  const pricingData: [string, number, number, number, number, number][] = [
    ["Basic Slab (4\")", 6, 8, 10, 12, 14],
    ["Driveway (4-6\")", 8, 10, 13, 16, 18],
    ["Patio (basic)", 8, 10, 14, 18, 22],
    ["Patio (decorative)", 12, 16, 20, 25, 30],
    ["Stamped Concrete", 12, 16, 20, 25, 32],
    ["Sidewalk", 6, 8, 10, 12, 14],
    ["Foundation (footings)", 8, 10, 13, 16, 20],
    ["Foundation (walls)", 10, 14, 18, 22, 28],
    ["Garage Floor", 6, 8, 10, 12, 15],
    ["Pool Deck", 10, 14, 18, 24, 30],
    ["Retaining Wall", 20, 28, 35, 45, 55],
    ["Concrete Repair", 5, 8, 12, 16, 20],
    ["Polished Concrete", 3, 5, 8, 10, 14],
  ];

  pricingData.forEach(([type, ...prices]) => {
    ws.getCell(r2, 1).value = type;
    prices.forEach((p, i) => {
      ws.getCell(r2, i + 2).value = p;
      ws.getCell(r2, i + 2).numFmt = CURRENCY_FMT;
    });
    ws.getCell(r2, 7).fill = ACCENT_FILL;
    ws.getCell(r2, 7).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 7; c++) applyBorder(ws.getCell(r2, c));
    r2++;
  });
  r2++;

  // Section 2: Regional multipliers
  ws.getCell(`A${r2}`).value = "REGIONAL PRICE MULTIPLIERS";
  ws.mergeCells(`A${r2}:G${r2}`);
  for (let c = 1; c <= 7; c++) { ws.getCell(r2, c).fill = HEADER_FILL; ws.getCell(r2, c).font = HEADER_FONT; }
  r2++;

  ["Region", "Multiplier", "Concrete/CY", "Labor/Hr", "Notes", "", ""].forEach((h, i) => {
    if (h) ws.getCell(r2, i + 1).value = h;
  });
  styleSubheaderRow(ws, r2, 5);
  r2++;

  const regions: [string, number, number, number, string][] = [
    ["Northeast (NY, NJ, CT, MA)", 1.25, 175, 65, "High labor costs, union markets"],
    ["Southeast (FL, GA, NC, SC)", 0.95, 140, 50, "Year-round work, competitive"],
    ["Midwest (OH, IL, MI, IN)", 1.00, 145, 55, "Seasonal — winter premium"],
    ["Southwest (AZ, NM, NV)", 1.05, 150, 55, "Heat considerations"],
    ["Texas / South Central", 0.90, 130, 48, "Very competitive market"],
    ["West Coast (CA)", 1.35, 185, 72, "Regulatory costs, high COL"],
    ["Pacific NW (OR, WA)", 1.15, 165, 60, "Rain season impacts"],
    ["Mountain (CO, UT, MT)", 1.10, 155, 58, "Altitude / access"],
  ];

  regions.forEach(([region, mult, concrete, labor, notes]) => {
    ws.getCell(r2, 1).value = region;
    ws.getCell(r2, 2).value = mult;
    ws.getCell(r2, 2).numFmt = "0.00x";
    ws.getCell(r2, 3).value = concrete;
    ws.getCell(r2, 3).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 4).value = labor;
    ws.getCell(r2, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 5).value = notes;
    for (let c = 1; c <= 5; c++) applyBorder(ws.getCell(r2, c));
    r2++;
  });
  r2++;

  // Section 3: Add-on pricing
  ws.getCell(`A${r2}`).value = "ADD-ON PRICING";
  ws.mergeCells(`A${r2}:G${r2}`);
  for (let c = 1; c <= 7; c++) { ws.getCell(r2, c).fill = HEADER_FILL; ws.getCell(r2, c).font = HEADER_FONT; }
  r2++;

  ["Add-On Service", "Unit", "Low", "Average", "High", "Your Price", ""].forEach((h, i) => {
    if (h) ws.getCell(r2, i + 1).value = h;
  });
  styleSubheaderRow(ws, r2, 6);
  r2++;

  const addons: [string, string, number, number, number][] = [
    ["Demo / removal", "per SF", 2.00, 3.50, 5.00],
    ["Gravel base (4\")", "per SF", 0.50, 0.75, 1.00],
    ["Rebar reinforcement", "per SF", 0.60, 0.85, 1.20],
    ["Wire mesh", "per SF", 0.30, 0.45, 0.65],
    ["Color integral", "per CY", 15, 25, 40],
    ["Color hardener", "per SF", 0.50, 0.85, 1.25],
    ["Stamping", "per SF", 3.00, 5.00, 8.00],
    ["Exposed aggregate", "per SF", 1.50, 2.50, 4.00],
    ["Sealer (acrylic)", "per SF", 0.25, 0.40, 0.60],
    ["Sealer (epoxy)", "per SF", 2.00, 3.50, 5.00],
    ["Heated concrete", "per CY", 10, 18, 25],
    ["Fiber reinforcement", "per CY", 8, 12, 18],
    ["Pump truck", "flat rate", 400, 600, 900],
    ["Saturday/overtime", "multiplier", 1.25, 1.50, 2.00],
  ];

  addons.forEach(([service, unit, low, avg, high]) => {
    ws.getCell(r2, 1).value = service;
    ws.getCell(r2, 2).value = unit;
    ws.getCell(r2, 3).value = low;
    ws.getCell(r2, 3).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 4).value = avg;
    ws.getCell(r2, 4).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 5).value = high;
    ws.getCell(r2, 5).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 6).fill = ACCENT_FILL;
    ws.getCell(r2, 6).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r2, c));
    r2++;
  });
  r2++;

  // Section 4: Minimum Job Charges
  ws.getCell(`A${r2}`).value = "RECOMMENDED MINIMUM JOB CHARGES";
  ws.mergeCells(`A${r2}:G${r2}`);
  for (let c = 1; c <= 7; c++) { ws.getCell(r2, c).fill = HEADER_FILL; ws.getCell(r2, c).font = HEADER_FONT; }
  r2++;
  ["Project Type", "Minimum Charge", "Covers", "", "", "", ""].forEach((h, i) => {
    if (h) ws.getCell(r2, i + 1).value = h;
  });
  styleSubheaderRow(ws, r2, 3);
  r2++;

  const minCharges: [string, number, string][] = [
    ["Sidewalk / Small Slab", 800, "Mobilization + small pour (under 50 SF)"],
    ["Driveway", 1500, "Minimum viable driveway job"],
    ["Patio", 1200, "Minimum patio project"],
    ["Foundation Repair", 1000, "Minimum foundation work"],
    ["Stamped Concrete", 2500, "Setup cost for stamps + colors"],
    ["Concrete Repair", 500, "Minimum repair/patch job"],
    ["Steps (per step)", 300, "Single step replacement"],
    ["Retaining Wall", 2000, "Minimum retaining wall"],
  ];
  minCharges.forEach(([type, charge, covers]) => {
    ws.getCell(r2, 1).value = type;
    ws.getCell(r2, 2).value = charge;
    ws.getCell(r2, 2).numFmt = CURRENCY_FMT;
    ws.getCell(r2, 3).value = covers;
    for (let c = 1; c <= 3; c++) applyBorder(ws.getCell(r2, c));
    r2++;
  });

  ws.pageSetup = { paperSize: 1, orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  await wb.xlsx.writeFile(path.join(OUT, "pricing-matrix-c6f2a9.xlsx"));
  console.log("✓ pricing-matrix-c6f2a9.xlsx");
}

// ======================== EQUIPMENT CHECKLIST ========================
async function generateEquipmentChecklist() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  addHowToUseSheet(wb, "Equipment Buying Guide",
    "Complete equipment buying guide for starting and growing a concrete business. Organized by phase (Day 1 essentials, first month, growth phase) with budget/mid-range/premium pricing.",
    [
      "Review Phase 1 equipment — these are your Day 1 must-haves",
      "Budget your startup equipment purchases",
      "Check Phase 2 items for your first month of operation",
      "Plan Phase 3 purchases as your business grows",
      "Use the budget estimates at the bottom to plan financing",
      "Consider used equipment for your first purchases to reduce startup costs",
    ],
    "None — this is a reference guide",
    "None — read-only reference"
  );

  const ws = wb.addWorksheet("Equipment Guide");
  ws.columns = [
    { width: 28 }, { width: 14 }, { width: 14 }, { width: 14 }, { width: 10 }, { width: 24 },
  ];

  ws.mergeCells("A1:F1");
  ws.getCell("A1").value = "CONCRETE CONTRACTOR EQUIPMENT BUYING GUIDE";
  ws.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 28;

  ws.mergeCells("A2:F2");
  ws.getCell("A2").value = "Essential equipment for starting and growing a concrete business";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  let r = 4;
  const categories = [
    {
      name: "ESSENTIAL — DAY 1 (Must-Have to Start)",
      items: [
        ["Work truck (3/4 ton+)", "$15,000", "$28,000", "$45,000", "Buy", "F-250 or Ram 2500 minimum"],
        ["Utility trailer (16'+)", "$2,500", "$4,500", "$7,000", "Buy", "Dual axle, ramp gate"],
        ["Bull float (48\")", "$80", "$150", "$250", "Buy", "Magnesium preferred"],
        ["Fresno trowel", "$60", "$120", "$200", "Buy", "Get 36\" and 48\""],
        ["Hand float set", "$30", "$60", "$100", "Buy", "Mag + wood float"],
        ["Edger set", "$20", "$45", "$80", "Buy", "Multiple radius sizes"],
        ["Groover / jointer", "$15", "$35", "$60", "Buy", "For control joints"],
        ["Broom finish brush", "$20", "$40", "$70", "Buy", "36\" concrete broom"],
        ["Come-alongs / rakes", "$30", "$60", "$100", "Buy", "Concrete-specific"],
        ["Wheelbarrows (2)", "$100", "$200", "$350", "Buy", "Steel, 6 cu ft"],
        ["Rubber boots (2 pairs)", "$40", "$80", "$120", "Buy", "Steel toe, waterproof"],
        ["Safety gear", "$100", "$200", "$350", "Buy", "Glasses, gloves, hard hats"],
        ["Tape measures / string line", "$30", "$50", "$80", "Buy", "300' string line"],
        ["Levels (4' + 8')", "$60", "$120", "$200", "Buy", "Aluminum, quality brand"],
        ["Shovel set", "$40", "$80", "$120", "Buy", "Flat + round point"],
      ],
    },
    {
      name: "PHASE 2 — FIRST MONTH (High Priority)",
      items: [
        ["Concrete vibrator", "$200", "$500", "$1,200", "Buy", "Pencil vibrator preferred"],
        ["Plate compactor", "$400", "$800", "$2,000", "Buy/Rent", "For gravel base"],
        ["Power trowel (walk-behind)", "$1,500", "$3,000", "$5,500", "Buy/Rent", "36\" for residential"],
        ["Concrete saw (14\")", "$400", "$800", "$1,500", "Buy", "For control joints"],
        ["Laser level", "$150", "$350", "$700", "Buy", "Self-leveling rotary"],
        ["Generator (5000W+)", "$500", "$1,000", "$2,000", "Buy", "Powers all hand tools"],
        ["Form stakes (bundle)", "$50", "$100", "$200", "Buy", "Steel stakes + wedges"],
        ["Concrete blankets (5+)", "$50", "$100", "$175", "Buy", "For cold weather curing"],
      ],
    },
    {
      name: "PHASE 3 — GROWTH (3-6 Months In)",
      items: [
        ["Skid steer / bobcat", "$15,000", "$30,000", "$55,000", "Buy/Lease", "Or rent $250-$400/day"],
        ["Dump trailer", "$5,000", "$9,000", "$14,000", "Buy", "For demo removal"],
        ["Ride-on trowel", "$4,000", "$8,000", "$15,000", "Buy/Rent", "For larger slabs"],
        ["Concrete pump (trailer)", "$25,000", "$45,000", "$80,000", "Rent", "Rent until 3+ pours/week"],
        ["Stamp mat set", "$500", "$1,200", "$2,500", "Buy/Rent", "If doing decorative work"],
        ["Pressure washer (3000+ PSI)", "$300", "$600", "$1,200", "Buy", "For cleanup + stamp work"],
        ["Second work truck", "$15,000", "$28,000", "$45,000", "Buy", "When hiring 2nd crew"],
      ],
    },
  ];

  for (const cat of categories) {
    ws.getCell(`A${r}`).value = cat.name;
    ws.mergeCells(`A${r}:F${r}`);
    for (let c = 1; c <= 6; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
    r++;

    ["Equipment", "Budget", "Mid-Range", "Premium", "Buy/Rent", "Notes"].forEach((h, i) => {
      ws.getCell(r, i + 1).value = h;
    });
    styleSubheaderRow(ws, r, 6);
    r++;

    cat.items.forEach(([equip, low, mid, high, buyRent, notes]) => {
      ws.getCell(r, 1).value = equip;
      ws.getCell(r, 2).value = low;
      ws.getCell(r, 3).value = mid;
      ws.getCell(r, 4).value = high;
      ws.getCell(r, 5).value = buyRent;
      ws.getCell(r, 6).value = notes;
      for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r, c));
      r++;
    });
    r++;
  }

  // Summary
  ws.getCell(`A${r}`).value = "TOTAL STARTUP BUDGET ESTIMATES";
  ws.mergeCells(`A${r}:F${r}`);
  for (let c = 1; c <= 6; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;

  const budgets = [
    ["Bare minimum (used equipment)", "$18,000 - $25,000"],
    ["Comfortable start (mix of new/used)", "$30,000 - $45,000"],
    ["Well-equipped (mostly new)", "$50,000 - $75,000"],
    ["Full operation (new equipment + crew)", "$80,000 - $120,000"],
  ];
  budgets.forEach(([level, range]) => {
    ws.getCell(r, 1).value = level;
    ws.getCell(r, 1).font = { bold: true };
    ws.getCell(r, 2).value = range;
    ws.mergeCells(`B${r}:C${r}`);
    for (let c = 1; c <= 3; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  ws.pageSetup = { paperSize: 1, orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  await wb.xlsx.writeFile(path.join(OUT, "equipment-checklist-d7a4e2.xlsx"));
  console.log("✓ equipment-checklist-d7a4e2.xlsx");
}

// ======================== MARKETING PLAN ========================
async function generateMarketingPlan() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  addHowToUseSheet(wb, "90-Day Marketing Plan",
    "Complete 90-day marketing plan for concrete contractors. Includes daily task schedule, monthly metrics tracker, lead source tracking, and competitor analysis. Designed to take you from zero to a steady pipeline of leads.",
    [
      "Fill in your company name and start date",
      "Work through tasks chronologically — each has a recommended day range",
      "Track your monthly metrics in the metrics section (yellow cells)",
      "Use the 'Lead Sources' sheet to track where each lead comes from",
      "Use the 'Competitor Analysis' sheet to understand your local market",
      "Review close rate and ROI formulas — they auto-calculate",
      "Adjust the plan based on what's working in your market",
    ],
    "Close Rate, ROI, and formula cells in metrics tracker",
    "All yellow cells in metrics tracker, lead sources, competitor analysis"
  );

  const ws = wb.addWorksheet("90-Day Marketing Plan");
  ws.columns = [
    { width: 8 }, { width: 30 }, { width: 16 }, { width: 14 }, { width: 14 }, { width: 24 },
  ];

  ws.mergeCells("A1:F1");
  ws.getCell("A1").value = "90-DAY MARKETING PLAN — CONCRETE CONTRACTOR";
  ws.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 28;

  ws.mergeCells("A2:F2");
  ws.getCell("A2").value = "From zero to a steady pipeline of leads in 90 days";
  ws.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ws.getCell("A3").value = "Company:";
  ws.getCell("A3").font = { bold: true };
  ws.getCell("B3").fill = ACCENT_FILL;
  ws.getCell("C3").value = "Start Date:";
  ws.getCell("C3").font = { bold: true };
  ws.getCell("D3").fill = ACCENT_FILL;

  let r = 5;
  const phases = [
    {
      name: "DAYS 1-30: FOUNDATION (Get Found Online)",
      tasks: [
        ["1-2", "Create/claim Google Business Profile", "Online", "$0", "Critical", "Search 'concrete contractor + your city'"],
        ["1-2", "Set up Google Business categories & services", "Online", "$0", "Critical", "Primary: Concrete Contractor"],
        ["3-5", "Upload 20+ project photos to GBP", "Online", "$0", "Critical", "Before/after, variety of work"],
        ["3-5", "Write GBP business description (750 chars)", "Online", "$0", "High", "Include service area + specialties"],
        ["5-7", "Build or update website (5 pages min)", "Online", "$0-$500", "Critical", "Home, Services, Gallery, About, Contact"],
        ["5-7", "Make phone # large & clickable on website", "Online", "$0", "Critical", "Above the fold on every page"],
        ["7-10", "Set up Facebook business page", "Online", "$0", "High", "Post 2-3 project photos"],
        ["7-10", "Create Nextdoor business profile", "Online", "$0", "High", "Best for residential leads"],
        ["10-14", "List on Yelp, Angi, HomeAdvisor", "Online", "$0-$100", "Medium", "Free listings to start"],
        ["14-21", "Ask first 5 clients for Google reviews", "Online", "$0", "Critical", "Text them the direct review link"],
        ["21-30", "Order yard signs (50 minimum)", "Offline", "$100-$200", "High", "Place at every job site"],
        ["21-30", "Order business cards (500)", "Offline", "$30-$50", "Medium", "Clean design, phone # prominent"],
      ],
    },
    {
      name: "DAYS 31-60: GROWTH (Start Generating Leads)",
      tasks: [
        ["31-35", "Start Google Ads ($500/mo budget)", "Online", "$500/mo", "High", "Target: concrete contractor + city"],
        ["31-35", "Set up call tracking number", "Online", "$30/mo", "High", "Track which ads generate calls"],
        ["35-40", "Write 3 blog posts (local SEO)", "Online", "$0", "Medium", "Target '[service] in [city]' keywords"],
        ["35-40", "Post on Nextdoor & Facebook weekly", "Online", "$0", "Medium", "Project photos + tips"],
        ["40-45", "Door hanger campaign (after each job)", "Offline", "$50", "High", "Drop 50 hangers on the street"],
        ["40-45", "Get vehicle lettering/magnets", "Offline", "$200-$500", "Medium", "Name, phone, 'Concrete Contractor'"],
        ["45-50", "Build referral program", "Both", "$100-$250/ref", "High", "Offer cash for referrals"],
        ["45-50", "Partner with local GCs for subwork", "Offline", "$0", "High", "Drop off cards at job sites"],
        ["50-55", "Get 10 total Google reviews", "Online", "$0", "Critical", "Ask every single customer"],
        ["55-60", "Evaluate Google Ads performance", "Online", "$0", "High", "Cost per lead < $30 is good"],
      ],
    },
    {
      name: "DAYS 61-90: ACCELERATION (Scale What Works)",
      tasks: [
        ["61-65", "Increase Google Ads budget if ROI positive", "Online", "Variable", "High", "Scale winning keywords"],
        ["61-65", "Start Facebook Ads ($200/mo)", "Online", "$200/mo", "Medium", "Before/after photos perform best"],
        ["65-70", "Run Nextdoor neighborhood promotion", "Online", "$50-$100", "Medium", "Seasonal offer works well"],
        ["65-70", "Ask for referrals from ALL past clients", "Both", "$0", "High", "Text or call personally"],
        ["70-75", "Write 3 more local SEO blog posts", "Online", "$0", "Medium", "Address common customer questions"],
        ["70-75", "Get listed with local BBB", "Online", "$400/yr", "Low", "Trust signal for some markets"],
        ["75-80", "Partner with concrete suppliers", "Offline", "$0", "Medium", "They get contractor referral requests"],
        ["80-85", "Consider vehicle wrap", "Offline", "$1,500-$3,000", "Medium", "Moving billboard 24/7"],
        ["85-90", "Hit 20+ Google reviews", "Online", "$0", "Critical", "This alone beats most competitors"],
        ["85-90", "Document your marketing ROI", "Both", "$0", "High", "Track: leads, jobs, revenue per channel"],
      ],
    },
  ];

  for (const phase of phases) {
    ws.getCell(`A${r}`).value = phase.name;
    ws.mergeCells(`A${r}:F${r}`);
    for (let c = 1; c <= 6; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
    r++;

    ["Day", "Task", "Channel", "Budget", "Priority", "Notes"].forEach((h, i) => {
      ws.getCell(r, i + 1).value = h;
    });
    styleSubheaderRow(ws, r, 6);
    r++;

    phase.tasks.forEach(([day, task, channel, budget, priority, notes]) => {
      ws.getCell(r, 1).value = day;
      ws.getCell(r, 1).alignment = { horizontal: "center" };
      ws.getCell(r, 2).value = task;
      ws.getCell(r, 3).value = channel;
      ws.getCell(r, 4).value = budget;
      ws.getCell(r, 5).value = priority;
      if (priority === "Critical") {
        ws.getCell(r, 5).font = { bold: true, color: { argb: "FFDC2626" } };
      } else if (priority === "High") {
        ws.getCell(r, 5).font = { bold: true, color: { argb: "FFF59E0B" } };
      }
      ws.getCell(r, 6).value = notes;
      for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r, c));
      r++;
    });
    r++;
  }

  // Monthly tracking with formulas
  ws.getCell(`A${r}`).value = "MONTHLY METRICS TRACKER";
  ws.mergeCells(`A${r}:F${r}`);
  for (let c = 1; c <= 6; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;

  ["Metric", "Month 1", "Month 2", "Month 3", "Target", "Notes"].forEach((h, i) => {
    ws.getCell(r, i + 1).value = h;
  });
  styleSubheaderRow(ws, r, 6);
  r++;

  const metricsStartRow = r;
  const metrics = [
    ["Google Business views", "", "", "", "500+/mo"],
    ["Website visitors", "", "", "", "300+/mo"],
    ["Phone calls received", "", "", "", "20+/mo"],
    ["Estimates given", "", "", "", "10+/mo"],
    ["Jobs won", "", "", "", "4+/mo"],
    ["Revenue", "", "", "", "$8,000+/mo"],
    ["Google reviews (total)", "", "", "", "20+"],
    ["Referrals received", "", "", "", "2+/mo"],
    ["Total ad spend", "", "", "", "< 10% of revenue"],
    ["Cost per lead", "", "", "", "< $30"],
  ];

  metrics.forEach(([metric, m1, m2, m3, target]) => {
    ws.getCell(r, 1).value = metric;
    ws.getCell(r, 1).font = { bold: true };
    ws.getCell(r, 2).fill = ACCENT_FILL;
    ws.getCell(r, 3).fill = ACCENT_FILL;
    ws.getCell(r, 4).fill = ACCENT_FILL;
    ws.getCell(r, 5).value = target;
    for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  // Calculated metrics with formulas
  const estGivenRow = metricsStartRow + 3; // "Estimates given" row
  const jobsWonRow = metricsStartRow + 4; // "Jobs won" row
  const revenueRow = metricsStartRow + 5; // "Revenue" row
  const adSpendRow = metricsStartRow + 8; // "Total ad spend" row

  r++;
  ws.getCell(r, 1).value = "CALCULATED METRICS";
  ws.mergeCells(`A${r}:F${r}`);
  for (let c = 1; c <= 6; c++) { ws.getCell(r, c).fill = HEADER_FILL; ws.getCell(r, c).font = HEADER_FONT; }
  r++;

  // Close Rate = Jobs Won / Estimates Given
  ws.getCell(r, 1).value = "Close Rate (%)";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 2).value = { formula: `IF(B${estGivenRow}>0,B${jobsWonRow}/B${estGivenRow},0)` } as any;
  ws.getCell(r, 2).numFmt = "0%";
  ws.getCell(r, 3).value = { formula: `IF(C${estGivenRow}>0,C${jobsWonRow}/C${estGivenRow},0)` } as any;
  ws.getCell(r, 3).numFmt = "0%";
  ws.getCell(r, 4).value = { formula: `IF(D${estGivenRow}>0,D${jobsWonRow}/D${estGivenRow},0)` } as any;
  ws.getCell(r, 4).numFmt = "0%";
  ws.getCell(r, 5).value = "40%+";
  for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r, c));
  r++;

  // ROI = (Revenue - Ad Spend) / Ad Spend
  ws.getCell(r, 1).value = "Marketing ROI";
  ws.getCell(r, 1).font = { bold: true };
  ws.getCell(r, 2).value = { formula: `IF(B${adSpendRow}>0,(B${revenueRow}-B${adSpendRow})/B${adSpendRow},0)` } as any;
  ws.getCell(r, 2).numFmt = "0%";
  ws.getCell(r, 3).value = { formula: `IF(C${adSpendRow}>0,(C${revenueRow}-C${adSpendRow})/C${adSpendRow},0)` } as any;
  ws.getCell(r, 3).numFmt = "0%";
  ws.getCell(r, 4).value = { formula: `IF(D${adSpendRow}>0,(D${revenueRow}-D${adSpendRow})/D${adSpendRow},0)` } as any;
  ws.getCell(r, 4).numFmt = "0%";
  ws.getCell(r, 5).value = "500%+";
  for (let c = 1; c <= 6; c++) applyBorder(ws.getCell(r, c));

  ws.pageSetup = { paperSize: 1, orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 };

  // --- Lead Sources Sheet ---
  const wsLS = wb.addWorksheet("Lead Sources");
  wsLS.columns = [
    { width: 6 }, { width: 14 }, { width: 24 }, { width: 18 }, { width: 14 },
    { width: 14 }, { width: 14 }, { width: 20 },
  ];

  wsLS.mergeCells("A1:H1");
  wsLS.getCell("A1").value = "LEAD SOURCE TRACKER";
  wsLS.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  wsLS.getRow(1).height = 28;

  wsLS.mergeCells("A2:H2");
  wsLS.getCell("A2").value = "Track where every lead comes from to know which marketing channels are working";
  wsLS.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ["#", "Date", "Client Name", "Lead Source", "Est. Value", "Won (Y/N)", "Actual Revenue", "Notes"].forEach((h, i) => {
    wsLS.getCell(4, i + 1).value = h;
  });
  styleHeaderRow(wsLS, 4, 8);

  for (let i = 0; i < 30; i++) {
    const row = 5 + i;
    wsLS.getCell(row, 1).value = i + 1;
    wsLS.getCell(row, 1).alignment = { horizontal: "center" };
    wsLS.getCell(row, 2).fill = ACCENT_FILL;
    wsLS.getCell(row, 3).fill = ACCENT_FILL;
    wsLS.getCell(row, 4).fill = ACCENT_FILL;
    wsLS.getCell(row, 4).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Google Search,Google Ads,Facebook,Nextdoor,Referral,Yard Sign,Door Hanger,Angi/HomeAdvisor,Yelp,Website,Phone Book,Other"'],
    };
    wsLS.getCell(row, 5).fill = ACCENT_FILL;
    wsLS.getCell(row, 5).numFmt = CURRENCY_FMT;
    wsLS.getCell(row, 6).fill = ACCENT_FILL;
    wsLS.getCell(row, 7).fill = ACCENT_FILL;
    wsLS.getCell(row, 7).numFmt = CURRENCY_FMT;
    wsLS.getCell(row, 8).fill = ACCENT_FILL;
    for (let c = 1; c <= 8; c++) applyBorder(wsLS.getCell(row, c));
  }

  // Summary by source
  const sumStartRow = 37;
  wsLS.getCell(`A${sumStartRow}`).value = "LEADS BY SOURCE SUMMARY";
  wsLS.mergeCells(`A${sumStartRow}:H${sumStartRow}`);
  for (let c = 1; c <= 8; c++) { wsLS.getCell(sumStartRow, c).fill = HEADER_FILL; wsLS.getCell(sumStartRow, c).font = HEADER_FONT; }

  ["Source", "Total Leads", "Leads Won", "Win Rate", "Total Revenue", "", "", ""].forEach((h, i) => {
    if (h) wsLS.getCell(sumStartRow + 1, i + 1).value = h;
  });
  styleSubheaderRow(wsLS, sumStartRow + 1, 5);

  const sources = ["Google Search", "Google Ads", "Facebook", "Nextdoor", "Referral", "Yard Sign", "Door Hanger", "Angi/HomeAdvisor", "Website", "Other"];
  sources.forEach((source, i) => {
    const row = sumStartRow + 2 + i;
    wsLS.getCell(row, 1).value = source;
    wsLS.getCell(row, 2).value = { formula: `COUNTIF(D5:D34,"${source}")` } as any;
    wsLS.getCell(row, 3).value = { formula: `COUNTIFS(D5:D34,"${source}",F5:F34,"Y")` } as any;
    wsLS.getCell(row, 4).value = { formula: `IF(B${row}>0,C${row}/B${row},0)` } as any;
    wsLS.getCell(row, 4).numFmt = "0%";
    wsLS.getCell(row, 5).value = { formula: `SUMIFS(G5:G34,D5:D34,"${source}")` } as any;
    wsLS.getCell(row, 5).numFmt = CURRENCY_FMT;
    for (let c = 1; c <= 5; c++) applyBorder(wsLS.getCell(row, c));
  });

  // --- Competitor Analysis Sheet ---
  const wsCA = wb.addWorksheet("Competitor Analysis");
  wsCA.columns = [
    { width: 6 }, { width: 24 }, { width: 16 }, { width: 12 }, { width: 14 },
    { width: 14 }, { width: 24 },
  ];

  wsCA.mergeCells("A1:G1");
  wsCA.getCell("A1").value = "LOCAL COMPETITOR ANALYSIS";
  wsCA.getCell("A1").font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  wsCA.getRow(1).height = 28;

  wsCA.mergeCells("A2:G2");
  wsCA.getCell("A2").value = "Know your competition — research the top contractors in your area";
  wsCA.getCell("A2").font = { size: 10, color: { argb: "FF64748B" } };

  ["#", "Competitor Name", "Website", "Google Reviews", "Avg Rating", "Price Level", "Notes / Strengths"].forEach((h, i) => {
    wsCA.getCell(4, i + 1).value = h;
  });
  styleHeaderRow(wsCA, 4, 7);

  for (let i = 0; i < 10; i++) {
    const row = 5 + i;
    wsCA.getCell(row, 1).value = i + 1;
    wsCA.getCell(row, 1).alignment = { horizontal: "center" };
    for (let c = 2; c <= 7; c++) {
      wsCA.getCell(row, c).fill = ACCENT_FILL;
      applyBorder(wsCA.getCell(row, c));
    }
    applyBorder(wsCA.getCell(row, 1));
    wsCA.getCell(row, 6).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"$-Budget,$$-Mid,$$$-Premium,$$$$-High End"'],
    };
  }

  let caR = 16;
  wsCA.getCell(`A${caR}`).value = "COMPETITIVE ADVANTAGE ANALYSIS";
  wsCA.mergeCells(`A${caR}:G${caR}`);
  for (let c = 1; c <= 7; c++) { wsCA.getCell(caR, c).fill = HEADER_FILL; wsCA.getCell(caR, c).font = HEADER_FONT; }
  caR++;

  const compQuestions = [
    "What do you do better than competitors?",
    "What do competitors do better than you?",
    "What pricing gaps exist in the market?",
    "Which services are underserved in your area?",
    "What's your unique selling proposition (USP)?",
  ];
  compQuestions.forEach(q => {
    wsCA.getCell(`A${caR}`).value = q;
    wsCA.getCell(`A${caR}`).font = { bold: true, size: 10 };
    wsCA.mergeCells(`A${caR}:C${caR}`);
    wsCA.getCell(`D${caR}`).fill = ACCENT_FILL;
    wsCA.mergeCells(`D${caR}:G${caR}`);
    applyBorder(wsCA.getCell(`A${caR}`));
    applyBorder(wsCA.getCell(`D${caR}`));
    caR++;
  });

  await wb.xlsx.writeFile(path.join(OUT, "marketing-plan-e9b5c3.xlsx"));
  console.log("✓ marketing-plan-e9b5c3.xlsx");
}

// ======================== MAIN ========================
async function main() {
  console.log("Generating Excel templates...\n");

  await generateBidCalculator();

  for (const est of estimates) {
    await generateEstimate(est);
  }

  await generateContract();
  await generateSOP();
  await generatePricingMatrix();
  await generateEquipmentChecklist();
  await generateMarketingPlan();

  console.log("\n✅ All templates generated in public/downloads/");
}

main().catch(console.error);