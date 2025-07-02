import React from "react";

function PlaceSkeleton() {
  return (
    <div class="animate-pulse bg-white rounded-xl shadow-lg p-4 flex items-start mt-2  gap-4 w-full max-w-xl">
      <div class="bg-gray-300 rounded-lg flex-shrink-0 h-28 w-28"></div>

      <div class="flex-grow">
        <div class="bg-gray-300 h-6 w-3/4 mb-3 rounded"></div>

        <div class="bg-gray-300 h-4 w-full mb-2 rounded"></div>
        <div class="bg-gray-300 h-4 w-11/12 mb-2 rounded"></div>
        <div class="bg-gray-300 h-4 w-10/12 rounded"></div>

        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center">
            <div class="bg-gray-300 rounded-full w-4 h-4 mr-2"></div>{" "}
            <div class="bg-gray-300 h-4 w-24 rounded"></div>{" "}
          </div>

          <div class="bg-gray-300 rounded-full w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
}

export default PlaceSkeleton;
