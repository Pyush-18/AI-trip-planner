import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div className='flex items-center justify-center h-screen bg-black/70'><SignIn /></div>
  )
}

export default SignInPage