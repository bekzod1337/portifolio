import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-cyan-500 w-16 h-16"></div>
    </div>
  );
};

export default Loading;
