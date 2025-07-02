import React, { useState } from "react";
import { Button } from "../ui/button";
import { LocationEditIcon } from "lucide-react";
import { Link } from "react-router";

function PlaceCardItems({ plan }) {
  const [imageError, setImageError] = useState(false)
  const primaryImageUrl = plan?.placeName
    ? `https://picsum.photos/seed/${plan.placeName}/1920/1080`
    : 'https://picsum.photos/1920/1080';
    const fallbackImageUrl = '/img1.webp'
  return (
    <div className="hover:shadow-md transition-all duration-200 hover:scale-101 border rounded-xl p-3 flex gap-5 h-full auto-rows-fr">
      <img
       src={imageError? fallbackImageUrl : primaryImageUrl} 
        className="w-[130px] h-[130px] rounded-xl object-cover"
        alt={`${plan?.placeName || 'place'}`}
        onError={(e) => {
          if(e.target.src !== fallbackImageUrl){
            setImageError(true)
          }
        }}
      />

      <div className="flex flex-col justify-between gap-1 w-full">
        <h2 className="font-bold text-lg">{plan?.placeName}</h2>
        <p className="text-sm text-gray-500 ">
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
