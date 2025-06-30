import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { useUser } from '@clerk/clerk-react'

function Hero() {
  const data = useUser()
  console.log(data)
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1 className='font-extrabold leading-16 tracking-tight text-center text-[50px] mt-16'>
            <span className='bg-gradient-to-r from-[#3B82F6] to-[#F43F5E] bg-clip-text text-transparent'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips.
        </h1>
        <p className='text-xl text-gray-500 text-center'>Explore the world effortlessly with your personal AI travel planner.</p>
        <Link to="/create-trip">
          <Button>Get Started, It's Free</Button>
        </Link>
    </div>
  )
}

export default Hero