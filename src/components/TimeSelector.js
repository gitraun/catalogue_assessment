// components/TimeframeSelector.js
const timeframes = [
  { value: "1d", label: "1d" },
  { value: "3d", label: "3d" },
  { value: "1w", label: "1w" },
  { value: "1m", label: "1m" },
  { value: "6m", label: "6m" },
  { value: "1y", label: "1y" },
  { value: "max", label: "max" },
];

export default function TimeframeSelector({ selected, onSelect }) {
  return (
    <div className="flex gap-2">
      {timeframes.map((tf) => (
        <button
          key={tf.value}
          onClick={() => onSelect(tf.value)}
          className={`
              px-3 py-1 rounded-md text-sm font-medium
              ${
                selected === tf.value ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }
            `}
        >
          {tf.label}
        </button>
      ))}
    </div>
  );
}
