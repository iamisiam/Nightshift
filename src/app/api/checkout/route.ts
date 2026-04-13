import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-03-25.dahlia" as const,
});

export async function POST() {
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