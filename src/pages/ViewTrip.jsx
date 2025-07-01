import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/service/FirebaseConfig';
import InfoSection from '@/components/view-trip/InfoSection';
import Hotels from '@/components/view-trip/Hotels';
import PlaceToVisit from '@/components/view-trip/PlaceToVisit';

function ViewTrip() {
    const {tripId} = useParams()
    const [trip, setTrip] = useState({})

    const getDataFromFirebase = async() => {
        const docRef = doc(db, "AI-Trip", tripId);
        try {
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setTrip(docSnap.data())
                console.log("Document data:", docSnap.data());
            }else{
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    },[tripId])

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        {/* Information section */}
        <InfoSection trip={trip}/>
        {/* Recommended Hotel section */}
        <Hotels trip={trip}/>
        {/* day plan */}
        <PlaceToVisit trip={trip}/>
        
    </div>
  )
}

export default ViewTrip