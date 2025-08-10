// app/api/quantis/route.ts

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const ALPACA_API_KEY = process.env.ALPACA_API_KEY!;
const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY!;

export async function GET() {
  try {
    const quantisPath = path.join(process.cwd(), "data", "quantis_output.csv");
    const floatPath = path.join(process.cwd(), "data", "float_data.csv");

    console.log("✅ CSV File Paths:", quantisPath, floatPath);

    const quantisCsv = fs.readFileSync(quantisPath, "utf-8");
    const floatCsv = fs.readFileSync(floatPath, "utf-8");

    console.log("✅ CSV files loaded");

    // ✅ Add explicit types here
    const quantis: { symbol: string; score: string; support: string; resistance: string }[] =
      parse(quantisCsv, { columns: true, skip_empty_lines: true });

    const floats: { symbol: string; float: string }[] =
      parse(floatCsv, { columns: true, skip_empty_lines: true });

    console.log("✅ Parsed Quantis:", quantis.length, "rows");
    console.log("✅ Parsed Float Data:", floats.length, "rows");

    // ✅ Type-safe floatMap
    const floatMap = new Map(floats.map((row) => [row.symbol, row.float]));

    const priceData: Record<string, number | null> = {};

    for (const row of quantis) {
      const symbol = row.symbol;
      try {
        const url = `https://data.alpaca.markets/v2/stocks/${symbol}/quotes/latest`;
        const res = await fetch(url, {
          headers: {
            "APCA-API-KEY-ID": ALPACA_API_KEY,
            "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
          },
          cache: "no-store",
        });

        const json = await res.json();
        priceData[symbol] = json?.quote?.ap || null;

        console.log(`✅ Price for ${symbol}: $${priceData[symbol]}`);
      } catch (err) {
        console.warn(`⚠️ Failed to fetch price for ${symbol}:`, err);
        priceData[symbol] = null;
      }
    }

    const top = quantis
      .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
      .slice(0, 20)
      .map((row) => ({
        symbol: row.symbol,
        support: parseFloat(row.support),
        resistance: parseFloat(row.resistance),
        float: parseFloat(floatMap.get(row.symbol) || "0"),
        price: priceData[row.symbol] || null,
      }));

    console.log("✅ Final Quantis Response Ready");

    return NextResponse.json({ data: top });
  } catch (error) {
    console.error("❌ Quantis API Error:", error);
    return NextResponse.json(
      { error: "Failed to load Quantis data." },
      { status: 500 }
    );
  }
}

