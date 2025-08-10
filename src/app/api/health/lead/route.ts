import { NextResponse } from "next/server";

// Stub handlers – replace with real logic later
export async function GET() {
  return NextResponse.json({ ok: true, leads: [] });
}

export async function POST() {
  return NextResponse.json({ ok: true });
}
