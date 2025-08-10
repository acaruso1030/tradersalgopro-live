import { NextResponse } from "next/server";
import { setFlag } from "@/lib/flags";

export async function POST(req: Request) {
  const { key, enabled } = await req.json();
  await setFlag(key, !!enabled);
  return NextResponse.json({ ok: true });
}
