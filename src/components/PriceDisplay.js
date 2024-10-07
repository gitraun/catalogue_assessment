// components/PriceDisplay.js
export default function PriceDisplay({ price, currency, change, changePercentage, isPositive }) {
  return (
    <div className="mb-8">
      <div className="flex items-start relative">
        <h1 className="text-[48px] font-bold text-[#0D1421] tracking-tight leading-none">
          63,179.71
          <span className="absolute text-base text-gray-400 top-0 ml-1">USD</span>
        </h1>
      </div>
      <div className={`text-lg mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
        + {change} ({changePercentage}%)
      </div>
    </div>
  );
}
