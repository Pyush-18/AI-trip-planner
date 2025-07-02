import React from "react";

function InfoSkeleton() {
  return (
    <div class="animate-pulse bg-white rounded-xl shadow-lg overflow-hidden w-full">
      <div class="bg-gray-300 h-48 w-full"></div>

      <div class="p-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex items-center">
            <div class="bg-gray-300 rounded-full w-8 h-8 mr-2"></div>{" "}
            <div class="bg-gray-300 h-8 w-40 rounded"></div>{" "}
          </div>

          <div class="flex flex-wrap gap-2 mt-2">
            <div class="bg-gray-300 h-8 w-24 rounded-full"></div>{" "}
            <div class="bg-gray-300 h-8 w-32 rounded-full"></div>{" "}
            <div class="bg-gray-300 h-8 w-24 rounded-full"></div>{" "}
          </div>
        </div>

        <div class="bg-gray-800 h-10 w-24 rounded-md ml-auto sm:ml-0"></div>
      </div>
    </div>
  );
}

export default InfoSkeleton;
