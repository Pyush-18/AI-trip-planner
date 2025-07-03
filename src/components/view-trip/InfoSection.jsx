import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ShareIcon } from "lucide-react";
import { toast } from "sonner";

function InfoSection({ trip }) {
  const shareRef = useRef()
  const copyTheShareLink =async () => {
    const shareLink = shareRef?.current?.baseURI
    if(shareLink){
      await  navigator.clipboard.writeText(shareLink)
      toast.success("Link copied successfully")
    }else{
      toast.error("Error while cpying link")
    }
  }
  
  return (
    <div>
      <img
        className=" w-full h-[300px] object-cover  rounded-xl"
        src={`https://picsum.photos/seed/${trip?.userSelection?.destination}/1920/1080`}
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
        <Button ref={shareRef} onClick={copyTheShareLink} ><ShareIcon className="w-6 h-6"/> Share</Button>
      </div>
    </div>
  );
}

export default InfoSection;
