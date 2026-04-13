import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error("STRIPE_SECRET_KEY is not configured");
}

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2026-03-25.dahlia" as const,
    })
  : null;

export async function POST() {
  if (!stripe) {
    return NextResponse.json(
      { error: "Payment system not configured. Please contact support." },
      { status: 503 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "2026 Night Shift Nurse Survival Bundle",
              description: "8 Printable Pages - Shift Scheduler, SBAR Handoff, Medication Timeline, Fatigue Tracker, Sleep Recovery",
            },
            unit_amount: 1299,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://nightshift-six.vercel.app"}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://nightshift-six.vercel.app"}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}