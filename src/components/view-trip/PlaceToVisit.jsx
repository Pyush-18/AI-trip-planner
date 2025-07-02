import React from "react";
import PlaceCardItems from "./PlaceCardItems";
import PlaceSkeleton from "../skeleton/PlaceSkeleton";

function PlaceToVisit({ trip }) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl">Places to visit</h2>

      <div>
        {trip?.tripData?.itinerary?.length > 0
          ? trip?.tripData?.itinerary?.map((place, idx) => (
              <div key={idx} >
                <h2 className="font-medium  text-lg mt-8">Day {place?.day}</h2>

                <div className="grid md:grid-cols-2  gap-5">
                  {place?.dailyPlan?.map((plan, idx) => (
                    <div key={idx} className="my-3">
                      <h2 className="font-medium mb-2 text-sm text-orange-600">
                        {plan?.timeOfDay}
                      </h2>
                      <PlaceCardItems plan={plan} />
                    </div>
                  ))}
                </div>
              </div>
            ))
          : [1].map((_, index) => <PlaceSkeleton key={index} />)}
      </div>
    </div>
  );
}

export default PlaceToVisit;
