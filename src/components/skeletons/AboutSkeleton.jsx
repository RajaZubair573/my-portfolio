import React from 'react';

const AboutSkeleton = () => {
  return (
    <div className="text-white p-4 sm:p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-7xl mx-auto animate-pulse">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-4/5"></div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl bg-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square"></div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto mb-6"></div>
        <div className="space-y-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-16 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
