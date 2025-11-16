import React from 'react';

const ContactSectionSkeleton = () => {
  return (
    <div className="container mx-auto p-4 animate-pulse">
      <div className="h-10 bg-gray-700 rounded w-1/2 mx-auto mb-8"></div>
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          <div className="h-10 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-700 rounded"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionSkeleton;
