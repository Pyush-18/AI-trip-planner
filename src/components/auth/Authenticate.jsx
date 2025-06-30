import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router'


function Authenticate({children}) {
    const {isSignedIn} = useUser()
  return (
    <div>
        {
            isSignedIn ? <>{children}</> : <Navigate to='/auth'/>
        }
    </div>
  )
}

export default Authenticate