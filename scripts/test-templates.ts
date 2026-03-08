import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

const DOWNLOADS = path.join(__dirname, "..", "public", "downloads");

interface Issue {
  file: string;
  sheet: string;
  severity: "error" | "warning" | "info";
  message: string;
}

const issues: Issue[] = [];

function report(file: string, sheet: string, severity: Issue["severity"], message: string) {
  issues.push({ file, sheet, severity, message });
}

// Expected sheets per file
const EXPECTED_SHEETS: Record<string, string[]> = {
  "bid-calculator-pro-a8f3b2.xlsx": [
    "📋 How to Use",
    "Bid Calculator",
    "Company Setup",
    "Rate Reference",
    "Your Pricing Calculator",
    "Job Profitability Tracker",
    "Quick Reference",
  ],
  "estimate-driveway-c7e4a1.xlsx": [
    "📋 How to Use",
    "Estimate",
    "✅ Site Conditions",
    "Change Order",
  ],
  "estimate-slab-d9b2e5.xlsx": [
    "📋 How to Use",
    "Estimate",
    "✅ Site Conditions",
    "Change Order",
  ],
  "estimate-patio-f3a6c8.xlsx": [
    "📋 How to Use",
    "Estimate",
    "✅ Site Conditions",
    "Change Order",
  ],
  "estimate-foundation-b5d1e7.xlsx": [
    "📋 How to Use",
    "Estimate",
    "✅ Site Conditions",
    "Change Order",
  ],
  "estimate-stamped-e2c9f4.xlsx": [
    "📋 How to Use",
    "Estimate",
    "✅ Site Conditions",
    "Change Order",
  ],
  "contract-template-a4d7b3.xlsx": [
    "📋 How to Use",
    "Contract",
    "Change Order",
    "Warranty Certificate",
  ],
  "sop-concrete-pour-b8e3d6.xlsx": [
    "📋 How to Use",
    "SOP - Concrete Pour",
  ],
  "pricing-matrix-c6f2a9.xlsx": [
    "📋 How to Use",
    "Pricing Matrix",
    "Your Price Calculator",
  ],
  "equipment-checklist-d7a4e2.xlsx": [
    "📋 How to Use",
    "Equipment Guide",
  ],
  "marketing-plan-e9b5c3.xlsx": [
    "📋 How to Use",
    "90-Day Marketing Plan",
    "Lead Tracker",
    "Lead Sources",
    "Competitor Analysis",
  ],
};

async function testFile(filename: string) {
  const filepath = path.join(DOWNLOADS, filename);
  if (!fs.existsSync(filepath)) {
    report(filename, "-", "error", `File not found: ${filepath}`);
    return;
  }

  const wb = new ExcelJS.Workbook();
  try {
    await wb.xlsx.readFile(filepath);
  } catch (e) {
    report(filename, "-", "error", `Failed to open: ${e}`);
    return;
  }

  const sheetNames = wb.worksheets.map(ws => ws.name);
  const expected = EXPECTED_SHEETS[filename] || [];

  // Check expected sheets exist
  for (const exp of expected) {
    if (!sheetNames.includes(exp)) {
      report(filename, exp, "error", `Missing expected sheet: "${exp}"`);
    }
  }

  // Check for unexpected sheets
  for (const name of sheetNames) {
    if (expected.length > 0 && !expected.includes(name)) {
      report(filename, name, "info", `Extra sheet found: "${name}"`);
    }
  }

  // Check each sheet
  for (const ws of wb.worksheets) {
    let hasContent = false;
    let formulaCount = 0;
    let emptyImportantCells = 0;

    ws.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        hasContent = true;
        if (cell.value && typeof cell.value === "object" && "formula" in cell.value) {
          formulaCount++;
        }
      });
    });

    if (!hasContent) {
      report(filename, ws.name, "error", "Sheet is completely empty");
    }

    // Check row 1 has a title
    const titleCell = ws.getCell("A1");
    if (!titleCell.value && !ws.getCell("B1").value) {
      report(filename, ws.name, "warning", "Row 1 appears to have no title");
    }

    // For estimate sheets, verify key formulas exist
    if (ws.name === "Estimate") {
      if (formulaCount < 5) {
        report(filename, ws.name, "warning", `Only ${formulaCount} formula cells found (expected 10+)`);
      }
    }

    // For bid calculator, verify formulas
    if (ws.name === "Bid Calculator") {
      if (formulaCount < 10) {
        report(filename, ws.name, "warning", `Only ${formulaCount} formula cells found (expected 15+)`);
      }
    }

    // For Job Profitability Tracker, verify formulas
    if (ws.name === "Job Profitability Tracker") {
      if (formulaCount < 20) {
        report(filename, ws.name, "warning", `Only ${formulaCount} formula cells found (expected 50+)`);
      }
    }

    // For pricing calculator, verify formulas
    if (ws.name === "Your Pricing Calculator") {
      if (formulaCount < 10) {
        report(filename, ws.name, "warning", `Only ${formulaCount} formula cells found (expected 10+)`);
      }
    }
  }

  // File size check
  const stats = fs.statSync(filepath);
  const sizeKB = Math.round(stats.size / 1024);
  if (sizeKB < 5) {
    report(filename, "-", "warning", `File is very small (${sizeKB}KB) — may be missing content`);
  }
  console.log(`  📄 ${filename} — ${sizeKB}KB, ${sheetNames.length} sheets: [${sheetNames.join(", ")}]`);
}

async function main() {
  console.log("\n🔍 TESTING ALL EXCEL TEMPLATES\n");
  console.log("=".repeat(60));

  const xlsxFiles = fs.readdirSync(DOWNLOADS).filter(f => f.endsWith(".xlsx"));
  console.log(`Found ${xlsxFiles.length} xlsx files\n`);

  for (const file of xlsxFiles) {
    await testFile(file);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📋 TEST RESULTS\n");

  const errors = issues.filter(i => i.severity === "error");
  const warnings = issues.filter(i => i.severity === "warning");
  const infos = issues.filter(i => i.severity === "info");

  if (errors.length > 0) {
    console.log(`❌ ERRORS (${errors.length}):`);
    errors.forEach(i => console.log(`   ${i.file} [${i.sheet}]: ${i.message}`));
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warnings.length}):`);
    warnings.forEach(i => console.log(`   ${i.file} [${i.sheet}]: ${i.message}`));
  }

  if (infos.length > 0) {
    console.log(`\nℹ️  INFO (${infos.length}):`);
    infos.forEach(i => console.log(`   ${i.file} [${i.sheet}]: ${i.message}`));
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log("✅ ALL TESTS PASSED — No errors or warnings");
  }

  console.log(`\nTotal: ${errors.length} errors, ${warnings.length} warnings, ${infos.length} info`);
  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch(console.error);
