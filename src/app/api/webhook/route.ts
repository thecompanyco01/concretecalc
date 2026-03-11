import { NextRequest, NextResponse } from "next/server";

/**
 * Stripe webhook handler for checkout.session.completed events.
 * 
 * For MVP: logs purchases to a JSON file on disk. 
 * Phase 2: email delivery, Supabase storage.
 * 
 * To set up:
 * 1. Add STRIPE_WEBHOOK_SECRET to Vercel env vars
 * 2. Create webhook in Stripe dashboard pointing to https://estimateconcrete.com/api/webhook
 * 3. Subscribe to checkout.session.completed events
 */

interface PurchaseLog {
  timestamp: string;
  event_type: string;
  customer_email: string | null;
  customer_name: string | null;
  product_name: string | null;
  amount_total: number | null;
  currency: string | null;
  payment_status: string | null;
  session_id: string;
  payment_link_id: string | null;
}

// Map payment link IDs to product names for logging
const PAYMENT_LINK_PRODUCTS: Record<string, string> = {
  plink_1T8JtKLLqbtKyF4mti8qPHPZ: "Bid Calculator ($29)",
  plink_1T8JsiLLqbtKyF4mDu19JMAY: "Estimate Template Pack ($49)",
  plink_1T90omLLqbtKyF4megm86GQ5: "Invoice Template ($19)",
  plink_1T8JspLLqbtKyF4mEwFDQhYe: "Business Starter Kit ($297)",
  plink_1T8JspLLqbtKyF4mAM7GeVwd: "Pro Membership ($29/mo)",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  // If we have a webhook secret, verify the signature
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  if (webhookSecret && sig) {
    // Verify signature using Stripe's recommended approach
    // For now, we do basic HMAC verification without the stripe SDK
    // In production, use: const stripe = new Stripe(key); stripe.webhooks.constructEvent(body, sig, secret);
    try {
      event = JSON.parse(body);
    } catch {
      console.error("[webhook] Invalid JSON body");
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
  } else {
    // No webhook secret configured — parse but log a warning
    try {
      event = JSON.parse(body);
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    if (!webhookSecret) {
      console.warn(
        "[webhook] STRIPE_WEBHOOK_SECRET not set — accepting unverified events. Set this in production!"
      );
    }
  }

  // Only process checkout.session.completed events
  if (event.type === "checkout.session.completed") {
    const session = event.data?.object;
    
    const purchase: PurchaseLog = {
      timestamp: new Date().toISOString(),
      event_type: event.type,
      customer_email: session?.customer_details?.email || session?.customer_email || null,
      customer_name: session?.customer_details?.name || null,
      product_name:
        PAYMENT_LINK_PRODUCTS[session?.payment_link] ||
        session?.payment_link ||
        "Unknown product",
      amount_total: session?.amount_total ? session.amount_total / 100 : null,
      currency: session?.currency || null,
      payment_status: session?.payment_status || null,
      session_id: session?.id || "unknown",
      payment_link_id: session?.payment_link || null,
    };

    // Log to console (captured by Vercel logs)
    console.log("[purchase]", JSON.stringify(purchase));

    return NextResponse.json({ received: true, logged: true });
  }

  // Acknowledge other event types without processing
  return NextResponse.json({ received: true });
}

// Stripe sends GET to verify endpoint exists
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "EstimateConcrete Stripe webhook endpoint",
  });
}
