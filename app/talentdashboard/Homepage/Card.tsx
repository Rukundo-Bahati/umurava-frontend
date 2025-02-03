import React from "react";
import { NotebookText } from "lucide-react";

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="relative flex flex-col ml-3 mr-3 bg-white rounded-lg border hover:shadow-xl transition-shadow duration-200 h-full">
      <div className=" mx-1 absolute left-0 top-2 bottom-2 bg-blue-600 w-2 rounded"></div>
     
      <div className="flex justify-between items-center p-2 mx-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex items-center justify-between p-4 mx-3 flex-1">
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-gray-800">{number}</p>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center">
        <NotebookText className="text-blue-400" />
      </div>
    </div>
  );
};

export default Card;
