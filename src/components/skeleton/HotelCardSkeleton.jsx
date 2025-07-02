import React from "react";

function HotelCardSkeleton() {
  return (
    <div class="animate-pulse bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
      <div class="bg-gray-300 h-48 w-full"></div>

      <div class="p-4">
        <div class="bg-gray-300 h-6 w-3/4 mb-3 rounded"></div>
        <div class="flex items-center mb-2">
          <div class="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>{" "}
          <div class="bg-gray-300 h-4 w-11/12 rounded"></div>{" "}
        </div>
        <div class="bg-gray-300 h-4 w-10/12 mb-3 ml-6 rounded"></div>{" "}
        <div class="flex items-center mb-3">
          <div class="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>{" "}
          <div class="bg-gray-300 h-4 w-2/3 rounded"></div>{" "}
        </div>
        <div class="flex items-center">
          <div class="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>{" "}
          <div class="bg-gray-300 h-4 w-1/4 rounded"></div>{" "}
        </div>
      </div>
    </div>
  );
}

export default HotelCardSkeleton;
