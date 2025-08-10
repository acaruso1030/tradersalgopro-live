import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const session = await stripe.createCheckoutSession(); // stubbed helper
  return NextResponse.json({ ok: true, session });
}
