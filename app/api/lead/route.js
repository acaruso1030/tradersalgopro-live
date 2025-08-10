import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongoose";
import Lead from "@/models/Lead";

export async function POST(req) {
  await connectMongo();

  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  try {
    // Example logic (commented out)
    // const lead = await Lead.findOne({ email: body.email });
    // if (!lead) {
    //   await Lead.create({ email: body.email });
    // }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
