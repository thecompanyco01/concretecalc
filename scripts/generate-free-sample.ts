import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

const OUT = path.join(__dirname, "..", "public", "downloads");

// Color palette
const HEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E293B" } };
const HEADER_FONT: Partial<ExcelJS.Font> = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
const SUBHEADER_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF1F5F9" } };
const GREEN_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD1FAE5" } };
const GREEN_TOTAL_FILL: ExcelJS.FillPattern = { type: "pattern", pattern: "solid", fgColor: { argb: "FF10B981" } };
const CURRENCY_FMT = '"$"#,##0.00';
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

async function generateFreeSample() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const wb = new ExcelJS.Workbook();
  wb.creator = "EstimateConcrete.com";

  // ── Sheet 1: Basic Slab Calculator ──
  const ws = wb.addWorksheet("Slab Calculator", {
    properties: { tabColor: { argb: "FF3B82F6" } },
  });

  ws.columns = [
    { width: 28 },
    { width: 16 },
    { width: 16 },
    { width: 16 },
  ];

  // Title
  ws.mergeCells("A1:D1");
  ws.getCell("A1").value = "FREE CONCRETE SLAB CALCULATOR";
  ws.getCell("A1").font = { bold: true, size: 16, color: { argb: "FF1E293B" } };
  ws.getRow(1).height = 30;

  ws.mergeCells("A2:D2");
  ws.getCell("A2").value = "EstimateConcrete.com — Free Sample";
  ws.getCell("A2").font = { size: 10, italic: true, color: { argb: "FF64748B" } };

  // Input Section
  let r = 4;
  styleHeaderRow(ws, r, 4);
  ws.getCell(r, 1).value = "PROJECT INPUTS";
  ws.getCell(r, 2).value = "Value";
  ws.getCell(r, 3).value = "Unit";
  r++;

  const inputs: [string, number, string][] = [
    ["Length", 20, "feet"],
    ["Width", 20, "feet"],
    ["Thickness", 4, "inches"],
    ["Concrete Price", 150, "$/cubic yard"],
    ["Labor Rate", 6, "$/sq ft"],
    ["Waste Factor", 0.1, "(10%)"],
  ];

  const inputStartRow = r;
  inputs.forEach(([label, val, unit]) => {
    ws.getCell(r, 1).value = label;
    ws.getCell(r, 1).font = { bold: true, size: 10 };
    ws.getCell(r, 2).value = val;
    ws.getCell(r, 2).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFFBEB" } };
    ws.getCell(r, 2).numFmt = label === "Waste Factor" ? "0%" : NUM_FMT;
    ws.getCell(r, 3).value = unit;
    ws.getCell(r, 3).font = { size: 9, color: { argb: "FF94A3B8" } };
    for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  // Calculations Section
  r++;
  styleHeaderRow(ws, r, 4);
  ws.getCell(r, 1).value = "CALCULATIONS";
  ws.getCell(r, 2).value = "Result";
  ws.getCell(r, 3).value = "Unit";
  r++;

  const lengthRow = inputStartRow;
  const widthRow = inputStartRow + 1;
  const thickRow = inputStartRow + 2;
  const priceRow = inputStartRow + 3;
  const laborRow = inputStartRow + 4;
  const wasteRow = inputStartRow + 5;

  const calcRows: [string, string, string][] = [
    ["Area", `=B${lengthRow}*B${widthRow}`, "sq ft"],
    ["Volume (cu ft)", `=B${lengthRow}*B${widthRow}*(B${thickRow}/12)`, "cu ft"],
    ["Base Cubic Yards", `=B${r}/${27}`, "yd³"],
    ["Waste Addition", `=B${r+1}*B${wasteRow}`, "yd³"],
    ["Total Concrete Needed", `=B${r+1}+B${r+2}`, "yd³"],
  ];

  const calcStartRow = r;
  calcRows.forEach(([label, formula, unit], i) => {
    ws.getCell(r, 1).value = label;
    ws.getCell(r, 1).font = { bold: label === "Total Concrete Needed", size: 10 };
    ws.getCell(r, 2).value = { formula: formula.startsWith("=") ? formula.slice(1) : formula };
    ws.getCell(r, 2).numFmt = NUM_FMT;
    if (label === "Total Concrete Needed") {
      ws.getCell(r, 2).fill = GREEN_FILL;
      ws.getCell(r, 2).font = { bold: true, size: 11 };
    }
    ws.getCell(r, 3).value = unit;
    ws.getCell(r, 3).font = { size: 9, color: { argb: "FF94A3B8" } };
    for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  // Cost Section
  r++;
  styleHeaderRow(ws, r, 4);
  ws.getCell(r, 1).value = "COST ESTIMATE";
  ws.getCell(r, 2).value = "Amount";
  r++;

  const totalConcreteRow = calcStartRow + 4; // Total Concrete Needed row
  const areaRow = calcStartRow; // Area row

  const costRows: [string, string][] = [
    ["Material Cost", `=B${totalConcreteRow}*B${priceRow}`],
    ["Labor Cost", `=B${areaRow}*B${laborRow}`],
    ["TOTAL ESTIMATED COST", `=B${r}+B${r+1}`],
    ["Cost per Sq Ft", `=IF(B${areaRow}>0,B${r+1}/B${areaRow},0)`],
  ];

  costRows.forEach(([label, formula]) => {
    ws.getCell(r, 1).value = label;
    ws.getCell(r, 1).font = { bold: label.startsWith("TOTAL"), size: label.startsWith("TOTAL") ? 11 : 10 };
    ws.getCell(r, 2).value = { formula: formula.startsWith("=") ? formula.slice(1) : formula };
    ws.getCell(r, 2).numFmt = CURRENCY_FMT;
    if (label.startsWith("TOTAL")) {
      ws.getCell(r, 1).fill = GREEN_TOTAL_FILL;
      ws.getCell(r, 1).font = { bold: true, size: 11, color: { argb: "FFFFFFFF" } };
      ws.getCell(r, 2).fill = GREEN_TOTAL_FILL;
      ws.getCell(r, 2).font = { bold: true, size: 12, color: { argb: "FFFFFFFF" } };
      ws.getCell(r, 3).fill = GREEN_TOTAL_FILL;
      ws.getCell(r, 4).fill = GREEN_TOTAL_FILL;
    }
    for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
    r++;
  });

  // Bag count section
  r++;
  styleHeaderRow(ws, r, 4);
  ws.getCell(r, 1).value = "BAG COUNT (if not ordering ready-mix)";
  r++;

  ws.getCell(r, 1).value = "80 lb bags needed";
  ws.getCell(r, 1).font = { size: 10 };
  ws.getCell(r, 2).value = { formula: `CEILING(B${totalConcreteRow}*45,1)` };
  ws.getCell(r, 2).numFmt = "#,##0";
  for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
  r++;

  ws.getCell(r, 1).value = "60 lb bags needed";
  ws.getCell(r, 1).font = { size: 10 };
  ws.getCell(r, 2).value = { formula: `CEILING(B${totalConcreteRow}*60,1)` };
  ws.getCell(r, 2).numFmt = "#,##0";
  for (let c = 1; c <= 4; c++) applyBorder(ws.getCell(r, c));
  r++;

  // Upgrade CTA
  r += 2;
  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "⬆️ UPGRADE TO THE FULL BID CALCULATOR";
  ws.getCell(`A${r}`).font = { bold: true, size: 14, color: { argb: "FF1E293B" } };
  ws.getRow(r).height = 28;
  r++;

  ws.mergeCells(`A${r}:D${r}`);
  ws.getCell(`A${r}`).value = "The full version includes:";
  ws.getCell(`A${r}`).font = { bold: true, size: 10 };
  r++;

  const upgradeFeatures = [
    "✅ Driveway, patio, footing, and stamped concrete calculators",
    "✅ Rebar and mesh cost calculations",
    "✅ Overhead & profit margin controls (set your target %)",
    "✅ Regional rate reference sheet (material costs by state)",
    "✅ Professional print-ready bid layout with your company branding",
    "✅ Customer-facing estimate PDF format",
    "",
    "🔗 Get it at: estimateconcrete.com/templates",
  ];

  upgradeFeatures.forEach((feat) => {
    ws.mergeCells(`A${r}:D${r}`);
    ws.getCell(`A${r}`).value = feat;
    ws.getCell(`A${r}`).font = {
      size: 10,
      color: feat.startsWith("🔗") ? { argb: "FF2563EB" } : { argb: "FF334155" },
      bold: feat.startsWith("🔗"),
    };
    r++;
  });

  // Print setup
  ws.pageSetup = { orientation: "portrait", fitToPage: true, fitToWidth: 1 };

  const outFile = path.join(OUT, "free-bid-calculator-sample.xlsx");
  await wb.xlsx.writeFile(outFile);
  console.log(`✅ Generated: ${outFile}`);
}

generateFreeSample().catch((err) => {
  console.error("Failed to generate free sample:", err);
  process.exit(1);
});
