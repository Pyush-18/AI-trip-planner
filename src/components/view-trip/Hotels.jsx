import React from "react";
import { Link } from "react-router";
import HotelCardSkeleton from "../skeleton/HotelCardSkeleton";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommended</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
        {
          trip?.tripData?.hotelOptions?.length > 0 ?
          trip?.tripData?.hotelOptions?.map((hotel, idx) => (
          <Link
            key={idx}
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.address}`}
            target="_blank"
            className="flex flex-col h-full border rounded-xl hover:scale-103 hover:shadow-md transition-all duration-200"
          >
              <img
                className="rounded-t-xl h-[150px] w-full object-cover"
                src={`https://picsum.photos/seed/${trip?.userSelection?.destination}/800/600`}
                alt="img"
              />
              <div className="flex flex-col justify-between p-3 grow">
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">{hotel?.hotelName}</h2>
                  <h2 className="text-xs text-gray-500">📍 {hotel?.address}</h2>
                  <h2 className="text-sm font-medium text-gray-700">
                    💰 {hotel?.price}
                  </h2>
                  <h2 className="text-sm font-medium text-gray-700">
                    ⭐ {hotel?.rating} stars
                  </h2>
                </div>
              </div>
          </Link>
        )) : [1,2,3,4].map((_, index) => <HotelCardSkeleton key={index}/>)
        }
      </div>
    </div>
  );
}

export default Hotels;
