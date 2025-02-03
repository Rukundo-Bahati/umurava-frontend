import React from "react";
import { House, FileCheck, UserRoundPlus, Plus } from "lucide-react";

interface ChallengeProps {
  title: string;
  count: number;
  isActive?: boolean;
}

const Challenge: React.FC<ChallengeProps> = ({
  title,
  count,
  isActive = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer border border-gray-300 w-72 ${
        isActive ? "bg-blue-100" : ""
      }`}
    >
      {title === "All Challenge" ? (
        <House className="text-xl" />
      ) : title === "Completed Challenge" ? (
        <FileCheck className="text-xl" />
      ) : title === "Open Challenge" ? (
        <FileCheck className="text-xl" />
      ) : (
        <UserRoundPlus className="text-xl" />
      )}
      <span>{title}</span>
      <span className="ml-auto text-sm font-bold">{count}</span>
    </div>
  );
};

const IntroStats: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="text-left">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Challenges</h2>
        <p className="text-lg text-gray-600">
          Join a challenge or a hackathon to gain valuable work experience.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        <div className="flex flex-wrap gap-6">
          <Challenge title="All Challenge" count={0} isActive />
          <Challenge title="Completed Challenge" count={0} />
          <Challenge title="Open Challenge" count={0} />
          <Challenge title="Ongoing Challenge" count={0} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded flex items-center gap-2">
          Create New Challenge
          <Plus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default IntroStats;
