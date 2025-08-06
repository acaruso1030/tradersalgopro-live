// scripts/dailyQuantisScan.ts

import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const POLYGON_API_KEY = process.env.POLYGON_API_KEY!;

// Config
const MIN_PRICE = 0.5;
const MAX_PRICE = 30;
const MAX_FLOAT = 40_000_000;
const LIMIT = 50; // Fetch more to filter down to top 20

// Define type structure for safety
interface PolygonTicker {
  ticker: string;
  lastTrade?: { p: number };
  floatShares?: number;
  day?: { v: number };
}

interface QuantisRow {
  symbol: string;
  support: string;
  resistance: string;
  score: string;
}

async function runQuantisScan(): Promise<void> {
  try {
    console.log("📈 Running Quantis premarket screener...");

    // STEP 1: Fetch premarket gainers from Polygon
    const url = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${POLYGON_API_KEY}`;
    const res = await fetch(url);
    const jsonTyped = (await res.json()) as { tickers: PolygonTicker[] };
    const tickers: PolygonTicker[] = jsonTyped.tickers || [];

    console.log(`✅ Retrieved ${tickers.length} movers from Polygon`);

    // STEP 2: Filter and format results
    const filtered: QuantisRow[] = tickers
      .filter((t) => {
        const price = t.lastTrade?.p ?? 0;
        const float = t.floatShares ?? 0;
        const volume = t.day?.v ?? 0;

        return (
          price >= MIN_PRICE &&
          price <= MAX_PRICE &&
          float > 0 &&
          float <= MAX_FLOAT &&
          volume > 100_000
        );
      })
      .slice(0, LIMIT)
      .map((t) => {
        const price = t.lastTrade?.p ?? 0;
        const float = t.floatShares ?? 1;
        const volume = t.day?.v ?? 0;

        return {
          symbol: t.ticker,
          support: (price * 0.85).toFixed(2),       // 15% below current price
          resistance: (price * 1.2).toFixed(2),     // 20% above current price
          score: (volume / float).toFixed(4),       // Relative volume strength
        };
      });

    // STEP 3: Sort by score and select top 20
    const top20 = filtered
      .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
      .slice(0, 20);

    console.log("✅ Top 20 breakout candidates selected");

    // STEP 4: Save results as CSV
    const csvLines = [
      "symbol,support,resistance,score",
      ...top20.map((row) =>
        [row.symbol, row.support, row.resistance, row.score].join(",")
      ),
    ];

    const outPath = path.join(process.cwd(), "data", "quantis_output.csv");
    fs.writeFileSync(outPath, csvLines.join("\n"), "utf-8");

    console.log(`✅ Wrote data to ${outPath}`);
  } catch (err) {
    console.error("❌ Quantis Scan Error:", err);
  }
}

// Run immediately if called directly from command line
if (require.main === module) {
  runQuantisScan();
}

export default runQuantisScan;
