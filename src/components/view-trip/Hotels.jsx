import React from "react";
import { Link } from "react-router";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommended</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
        {trip?.tripData?.hotelOptions?.map((hotel, idx) => (
          <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName} ${hotel?.address}`} target="_blank">
            <div
              key={idx}
              className="hover:scale-105 hover:shadow-md rounded-xl cursor-pointer transition-all duration-200"
            >
              <img className="rounded-xl" src="/img1.webp" alt="img" />
              <div className="my-2 flex flex-col gap-1 p-2">
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
        ))}
      </div>
    </div>
  );
}

export default Hotels;
