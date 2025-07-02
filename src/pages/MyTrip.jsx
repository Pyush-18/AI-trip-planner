import React, { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/FirebaseConfig";
import { useUser } from "@clerk/clerk-react";
import MyTripCard from "@/components/my-trip/MyTripCard";
import { toast } from "sonner";
import { Link } from "react-router";
import CardSkeleton from "@/components/skeleton/CardSkeleton";

function MyTrip() {
  const [myTrip, setMyTrip] = React.useState([]);
  const { user } = useUser();
  console.log("local variable", myTrip);
  const getMyTrips = async () => {
    const q = query(
      collection(db, "AI-Trip"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress)
    );
    try {
      const response = await getDocs(q);
      const trip = response.docs.map((doc) => doc.data());
      setMyTrip(trip);
    } catch (error) {
      console.log(error);
      toast.error("Error while fetching trips");
    }
  };
  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getMyTrips();
    }
  }, [user]);
  return (
    <div className="sm:px-10 md:px-22 lg:px-56 xl:px-60 px-5 mt-10">
      <h2 className="font-bold text-2xl">My Trip</h2>

      <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {myTrip?.length > 0
          ? myTrip?.map((trip) => (
              <Link
                key={trip?.id}
                to={`/view-trip/${trip?.id}`}
                className="block shadow-md rounded-xl hover:scale-103 hover:shadow-lg transition-all duration-300"
              >
                <MyTripCard trip={trip} />
              </Link>
            ))
          : [1, 2, 3].map((_, index) => <CardSkeleton key={index} />)}
      </div>

      <div className="w-48 bg-transparent h-60">

      </div>
    </div>
  );
}

export default MyTrip;
