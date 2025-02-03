import React from "react";

const ChallengesFilter: React.FC = () => {
  const filters = [
    { label: "All Challenges", count: 0 },
    { label: "Completed Challenge", count: 0 },
    { label: "Open Challenge", count: 0 },
    { label: "Ongoing Challenge", count: 0 },
  ];

  return (
    <div className=" mt-16 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Challenges</h1>
      <p className="text-sm text-gray-600 mb-4">
        Join a challenge or a hackathon to gain valuable work experience.
      </p>
      <div className="flex flex-wrap gap-4">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-100 transition"
          >
            {filter.label}
            <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChallengesFilter;
