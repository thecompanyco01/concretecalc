import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const EMAIL_FILE = "/tmp/estimateconcrete-emails.json";

interface EmailEntry {
  email: string;
  source: string;
  timestamp: string;
  ip?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const entry: EmailEntry = {
      email: email.toLowerCase().trim(),
      source: source || "unknown",
      timestamp: new Date().toISOString(),
    };

    // Read existing emails
    let emails: EmailEntry[] = [];
    try {
      if (fs.existsSync(EMAIL_FILE)) {
        const data = fs.readFileSync(EMAIL_FILE, "utf-8");
        emails = JSON.parse(data);
      }
    } catch {
      emails = [];
    }

    // Check for duplicate
    const exists = emails.some((e) => e.email === entry.email);
    if (!exists) {
      emails.push(entry);
      fs.writeFileSync(EMAIL_FILE, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json({ success: true, message: "Email saved successfully." });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
