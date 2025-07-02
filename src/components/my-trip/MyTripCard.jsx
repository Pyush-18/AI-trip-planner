function MyTripCard({ trip }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      
      <img
        src="/img1.webp"
        className="h-[200px] w-full object-cover" 
        alt="Trip destination"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <span className="mr-2 text-red-500">📍</span>
          {trip?.tripData.travelPlan?.location}
        </h2>

        <div className="flex flex-wrap items-center gap-2">
          {trip?.tripData.travelPlan?.duration && (
            <span className="bg-blue-50 text-blue-700 text-sm font-medium rounded-full px-4 py-2 hover:bg-blue-100 transition-colors duration-200 shadow-sm">
              📅 {trip.tripData.travelPlan.duration}
            </span>
          )}
          {trip?.tripData.travelPlan?.budget && (
            <span className="bg-green-50 text-green-700 text-sm font-medium rounded-full px-4 py-2 hover:bg-green-100 transition-colors duration-200 shadow-sm">
              💸 {trip.tripData.travelPlan.budget}
            </span>
          )}
          {trip?.tripData.travelPlan?.travelerType && (
            <span className="bg-purple-50 text-purple-700 text-sm font-medium rounded-full px-4 py-2 hover:bg-purple-100 transition-colors duration-200 shadow-sm">
              🏘️ {trip.tripData.travelPlan.travelerType}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyTripCard;