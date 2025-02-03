import React from 'react';
import { Eye } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="mt-20 mx-4 p-4 mx-auto w-full flex flex-col relative bg-gray-50 rounded-lg h-30">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Welcome back, Hilaire,</h2>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Build Work Experience through skills challenge
        </p>
      </div>

      <button className="absolute bottom-4 right-10 bg-blue-600 text-white py-3 px-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
        <Eye className="mr-1" />
        View Profile
      </button>
    </div>
  );
};

export default Welcome;
