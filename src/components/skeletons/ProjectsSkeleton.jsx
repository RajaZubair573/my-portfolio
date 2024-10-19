import React from 'react';

const ProjectsSkeleton = () => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto space-y-8 pb-10 animate-pulse">
      <div className="h-10 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="flex flex-wrap justify-center lg:justify-evenly gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="rounded-xl bg-gray-700 overflow-hidden w-80 h-64">
            <div className="bg-gray-600 h-40"></div>
            <div className="p-3">
              <div className="h-5 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
