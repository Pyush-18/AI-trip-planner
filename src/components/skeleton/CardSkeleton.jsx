import React from "react";

function CardSkeleton() {
  return (
    <div class="animate-pulse bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
      <div class="bg-gray-300 h-48 w-full"></div>

      <div class="p-4">
        <div class="flex items-center mb-4">
          <div class="bg-gray-300 rounded-full w-6 h-6 mr-2"></div>{" "}
          <div class="bg-gray-300 h-4 w-3/5 rounded"></div>{" "}
        </div>

        <div class="flex flex-wrap gap-2">
          <div class="bg-gray-300 h-8 w-20 rounded-full"></div>{" "}
          <div class="bg-gray-300 h-8 w-24 rounded-full"></div>{" "}
          <div class="bg-gray-300 h-8 w-24 rounded-full"></div>{" "}
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
