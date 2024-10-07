//compnents/dashboard.js
import { useState } from "react";
import PriceDisplay from "./PriceDisplay";
import ChartNavigation from "./ChartNav";
import PriceChart from "./PriceChart";
import TimeframeSelector from "./TimeSelector";
import { Maximize2, CirclePlus } from "lucide-react";
export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("1w");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Price Display Section */}
      <PriceDisplay
        price="63,179.71"
        currency="USD"
        change="2,161.42"
        changePercentage="3.54"
        isPositive={true}
      />

      {/* Navigation Tabs */}
      <ChartNavigation />

      {/* Chart Controls and Chart */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-800">
              <span className="flex items-center gap-2">
                <Maximize2 className="h-5 w-5" />
                Fullscreen
              </span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="flex items-center gap-2">
                <CirclePlus className="h-5 w-5" />
                Compare
              </span>
            </button>
          </div>
          <TimeframeSelector selected={timeframe} onSelect={setTimeframe} />
        </div>

        <PriceChart timeframe={timeframe} />
      </div>
    </div>
  );
}
