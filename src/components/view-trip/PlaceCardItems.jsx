import React from "react";
import { Button } from "../ui/button";
import { LocationEditIcon } from "lucide-react";
import { Link } from "react-router";

function PlaceCardItems({ plan }) {
  return (
    <div className="hover:shadow-md transition-all duration-200 hover:scale-101 border rounded-xl p-3 flex gap-5 h-[230px]">
      <img
        src="/img1.webp"
        className="w-[130px] h-[130px] rounded-xl object-cover"
        alt="img"
      />

      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-bold text-lg">{plan?.placeName}</h2>
        <p className="text-sm text-gray-500 line-clamp-4">
          {plan?.placeDetails}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="mt-2">🕰️ {plan?.timeToSpend}</h2>
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${plan?.placeName} ${plan?.address}`}
            target="_blank"
            className="h-full"
          >
            <Button>
              <LocationEditIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceCardItems;
