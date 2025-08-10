"use client";

import React, { useEffect, useState } from "react";

type TickerData = {
  symbol: string;
  support: number;
  resistance: number;
  float: number;
  price: number | null;
};

export default function QuantisScanner() {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/quantis", { cache: "no-store" });
      const json = await res.json();
      setTickers(json.data || []);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-[#111827] min-h-screen text-white">
      <h1 className="text-2xl font-bold text-teal-400 mb-4">🚀 Quantis™ Live Scanner</h1>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full table-auto text-sm text-white bg-[#1f2937] border border-gray-700 border-collapse">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 border border-gray-700 text-left">Symbol</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Live Price</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Support (Buy)</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Resistance (Sell)</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Float</th>
              <th className="px-4 py-2 border border-gray-700 text-left">Volume</th>
            </tr>
          </thead>
          <tbody>
            {tickers.map((row) => {
              const priceDisplay = typeof row.price === "number" ? `$${row.price.toFixed(2)}` : "N/A";
              const priceColor =
                typeof row.price === "number" && row.price >= row.support ? "text-green-400" : "text-red-400";

              return (
                <tr
                  key={row.symbol}
                  className="hover:bg-gray-900 cursor-pointer"
                  onClick={() => setSelectedSymbol(row.symbol)}
                >
                  <td className="px-4 py-2 border border-gray-700 font-semibold text-blue-400 underline">
                    {row.symbol}
                  </td>
                  <td className={`px-4 py-2 border border-gray-700 ${priceColor}`}>{priceDisplay}</td>
                  <td className="px-4 py-2 border border-gray-700">${row.support.toFixed(2)}</td>
                  <td className="px-4 py-2 border border-gray-700">${row.resistance.toFixed(2)}</td>
                  <td className="px-4 py-2 border border-gray-700">{row.float.toLocaleString()}</td>
                  <td className="px-4 py-2 border border-gray-700">Live</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedSymbol && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-white mb-2">
            📈 Chart for <span className="text-blue-400">{selectedSymbol.toUpperCase()}</span>
          </h2>
          <iframe
            src={`https://www.tradingview.com/widgetembed/?symbol=${selectedSymbol.toUpperCase()}&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc/UTC`}
            width="100%"
            height="400"
            frameBorder="0"
            allowTransparency
            scrolling="no"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
