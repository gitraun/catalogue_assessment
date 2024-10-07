// components/dashboard/PriceDisplay.js
export default function PriceDisplay({ price, currency, change, changePercentage, isPositive }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-2 relative">
        <h1 className="text-5xl font-bold text-gray-900">{price}</h1>
        <span className="text-xl text-gray-500 absolute top-0 right-0">{currency}</span>
      </div>
      <div className={`text-lg mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
        + {change} ({changePercentage}%)
      </div>
    </div>
  );
}
