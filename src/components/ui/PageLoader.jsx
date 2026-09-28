import React from 'react';

export const PageLoader = () => {
  return (
    <div 
      role="status" 
      aria-label="Loading page content" 
      className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-neutral-200"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[#E50914] border-t-transparent animate-spin"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
