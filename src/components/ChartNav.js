// components/ChartNavigation.js
const tabs = [
  { name: "Summary", href: "#" },
  { name: "Chart", href: "#" },
  { name: "Statistics", href: "#" },
  { name: "Analysis", href: "#" },
  { name: "Settings", href: "#" },
];

export default function ChartNavigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${
                  tab.name === "Chart"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
          >
            {tab.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
