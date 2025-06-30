import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, budgetOptions, travelCompanions } from "@/constant/options";
import { AIModel } from "@/service/AIModel";
import { useState } from "react";
import { toast } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/FirebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router";

const budget_arr = ["cheap", "moderate", "luxury"];
const travel_arr = ["just me", "a couple", "family", "friends"];
function CreateTrip() {
  const [data, setData] = useState({
    destination: "",
    days: 0,
    budget: "",
    traveling: "",
  });
  const [load, setLoad] = useState(false)
  const {user} = useUser()
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudget = (title) => {
    const result = budget_arr.filter((value) => title === value);
    setData((prev) => ({ ...prev, budget: result[0] }));
  };
  const handleTraveling = (title) => {
    const result = travel_arr.filter((value) => title === value);
    setData((prev) => ({ ...prev, traveling: result[0] }));
  };

  const handleSubmit = async () => {
    if (!data.destination && !data.days && !data.budget && !data.traveling) {
      toast.error("Please fill all the fields");
      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", data.destination)
      .replace("{noOfdays}", data.days)
      .replace("{budget}", data.budget)
      .replace("{traveling}", data.traveling)
      .replace("{noOfdays}", data.days);
    setLoad(true)
    try {
      const docId = Date.now().toString();
      const result = await AIModel({ prompt: FINAL_PROMPT });
      await setDoc(doc(db, "AI-Trip", docId), {
        userSelection: data,
        tripData: JSON.parse(result),
        email: user?.primaryEmailAddress?.emailAddress,
        id: docId,
      });
      toast.success("Trip created successfully");
      navigate(`/view-trip/${docId}`)
    } catch (error) {
      console.log(error);
    }finally{
      setLoad(false)
      setData({
        destination: "",
        days: 0,
        budget: "",
        traveling: "",
      })  
    }
  };

  return (
    <div>
      <Header />
      <div className="sm:px-10 md:px-22 lg:px-56 xl:px-60 px-5 mt-10">
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🚞🌴
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          {" "}
          Answer a few quick questions and we’ll build your perfect trip.
        </p>
        ``
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h2 className="text-xl my-3 font-medium">
              What is your destination of your choice?
            </h2>
            <Input
              value={data.destination}
              name="destination"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter the destination"
            />
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
            <Input
              value={data.days}
              name="days"
              onChange={handleInputChange}
              placeholder="Ex: 3"
              type="number"
            />
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {budgetOptions?.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleBudget(option.title.toLowerCase())}
                  className={`p-4 border rounded-lg hover:shadow-lg ${
                    option.title.toLowerCase() === data.budget &&
                    "bg-emerald-100 transition-all duration-200"
                  }`}
                >
                  <h2 className="text-4xl">{option.icon}</h2>
                  <h2 className="text-xl font-bold mt-2">{option.title}</h2>
                  <h2 className="text-gray-600 text-sm tracking-tight">
                    {option.desc}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl my-3 font-medium">
              Who do you plan on traveling with on your next adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {travelCompanions?.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleTraveling(option.title.toLowerCase())}
                  className={`p-4 border rounded-lg hover:shadow-lg ${
                    option.title.toLowerCase() === data.traveling &&
                    "bg-emerald-100 transition-all duration-200"
                  }`}
                >
                  <h2 className="text-4xl">{option.icon}</h2>
                  <h2 className="text-xl font-bold mt-2">{option.title}</h2>
                  <h2 className="text-gray-600 text-sm tracking-tight">
                    {option.desc}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-8 flex justify-end">
          <Button disabled={load} onClick={handleSubmit}>
            {
              load ? <Loader className="animate-spin w-4 h-4"/> :  'Generate Trip 🛄'
            }
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
