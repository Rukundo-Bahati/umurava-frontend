import React, { useState } from "react";
import { BarChart2 } from "lucide-react"; 

interface ChallengeStatsProps {
  totalChallenge: number;
  totalParticipants: number;
  completedChallenges: number;
  openChallenges: number;
  ongoingChallenges: number;
  percentageChange: number;
}

const ChallengeStats: React.FC<ChallengeStatsProps> = ({
  totalChallenge,
  totalParticipants,
  completedChallenges,
  openChallenges,
  ongoingChallenges,
  percentageChange,
}) => {
  const [timeRange, setTimeRange] = useState("This Week");

  const stats = [
    { label: "Total Challenges", value: totalChallenge },
    { label: "Total Participants", value: totalParticipants },
    { label: "Completed Challenges", value: completedChallenges },
    { label: "Open Challenges", value: openChallenges },
    { label: "Ongoing Challenges", value: ongoingChallenges },
  ];

  const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(event.target.value);
  };

  return (
    <div className="relative">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.slice(0, 2).map((stat, index) => (
            <div
              key={index}
              className="relative flex items-center border border-gray-300 rounded-md bg-white p-6"
            >
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-sky-200 w-10 h-10 rounded-full">
                <BarChart2 className="text-sky-500" size={20} />
              </div>
              <div className="ml-14 flex-1">
                <h3 className="text-gray-600 text-sm font-medium mb-4">{stat.label}</h3>
                <div className="flex items-baseline justify-between">
                  <p className="text-4xl font-bold">{stat.value}</p>
                  <span className="text-blue-500 text-lg font-semibold">{`${percentageChange}%`}</span>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <select
                  value={timeRange}
                  onChange={handleTimeRangeChange}
                  className="border rounded-md px-4 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                >
                  <option value="This Week">This Week</option>
                  <option value="This 30 Days">This 30 Days</option>
                  <option value="This Month">This Month</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.slice(2).map((stat, index) => (
            <div
              key={index}
              className="relative flex items-center border border-gray-300 rounded-md bg-white p-6"
            >
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-sky-200 w-10 h-10 rounded-full">
                <BarChart2 className="text-sky-500" size={20} />
              </div>
              <div className="ml-14 flex-1">
                <h3 className="text-gray-600 text-sm font-medium mb-3">{stat.label}</h3>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <span className="text-blue-500 text-lg font-semibold">{`${percentageChange}%`}</span>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <select
                  value={timeRange}
                  onChange={handleTimeRangeChange}
                  className="border rounded-md px-4 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                >
                  <option value="This Week">This Week</option>
                  <option value="This 30 Days">This 30 Days</option>
                  <option value="This Month">This Month</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeStats;
