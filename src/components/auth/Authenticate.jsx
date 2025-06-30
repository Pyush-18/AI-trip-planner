import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router'


function Authenticate({children}) {
    const {user} = useUser()
  return (
    <div>
        {
            user ? <>{children}</> : <Navigate to='/auth'/>
        }
    </div>
  )
}

export default Authenticate