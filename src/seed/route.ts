import { NextResponse } from "next/server";
import { setFlag } from "@/lib/flags";

export async function POST() {
  await setFlag("sample_feature", false);
  return NextResponse.json({ ok: true });
}
