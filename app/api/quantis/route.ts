// app/api/quantis/route.ts

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

// Get Alpaca API keys from your .env file
const ALPACA_API_KEY = process.env.ALPACA_API_KEY!;
const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY!;

export async function GET() {
  try {
    // STEP 1: Define paths to CSV files
    const quantisPath = path.join(process.cwd(), "data", "quantis_output.csv");
    const floatPath = path.join(process.cwd(), "data", "float_data.csv");

    console.log("✅ CSV File Paths:", quantisPath, floatPath);

    // STEP 2: Read CSV file contents
    const quantisCsv = fs.readFileSync(quantisPath, "utf-8");
    const floatCsv = fs.readFileSync(floatPath, "utf-8");

    console.log("✅ CSV files loaded");

    // STEP 3: Parse CSV contents into arrays
    const quantis = parse(quantisCsv, { columns: true, skip_empty_lines: true });
    const floats = parse(floatCsv, { columns: true, skip_empty_lines: true });

    console.log("✅ Parsed Quantis:", quantis.length, "rows");
    console.log("✅ Parsed Float Data:", floats.length, "rows");

    // STEP 4: Create a float map for fast lookup
    const floatMap = new Map(floats.map((row) => [row.symbol, row.float]));

    // STEP 5: Fetch live prices for each ticker
    const priceData: Record<string, number> = {};

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

    // STEP 6: Create final dataset
    const top = quantis
      .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
      .slice(0, 20)
      .map((row) => ({
        symbol: row.symbol,
        support: parseFloat(row.support),
        resistance: parseFloat(row.resistance),
        float: parseFloat(floatMap.get(row.symbol) || 0),
        price: priceData[row.symbol] || null,
      }));

    console.log("✅ Final Quantis Response Ready");

    // STEP 7: Return the result as JSON
    return NextResponse.json({ data: top });
  } catch (error) {
    console.error("❌ Quantis API Error:", error);
    return NextResponse.json(
      { error: "Failed to load Quantis data." },
      { status: 500 }
    );
  }
}
