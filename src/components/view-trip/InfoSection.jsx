import React from "react";
import { Button } from "../ui/button";
import { ShareIcon } from "lucide-react";

function InfoSection({ trip }) {
  return (
    <div>
      <img
        className=" w-full h-[300px] object-cover rounded-xl"
        src="/img1.webp"
        alt="img"
      />

      <div className="flex justify-between items-center">
        <div className="my-5 flex-col gap-2">
          <h2 className="font-bold text-2xl">
            🛣️ {trip?.userSelection?.destination}
          </h2>
          <div className="flex gap-5 mt-3">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-900 font-medium text-sm md:text-md">
              📅 {trip?.userSelection?.days} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-900 font-medium text-sm md:text-md">
              💲 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-900 font-medium text-sm md:text-md">
              🪐 {trip?.userSelection?.traveling}
            </h2>
          </div>
        </div>
        <Button><ShareIcon className="w-6 h-6"/> Share</Button>
      </div>
    </div>
  );
}

export default InfoSection;
