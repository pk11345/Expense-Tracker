import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

   const user = useSelector(state=>state)
     console.log(user)


  return (
    <>
    <div>
      <h1 className='text-white'>Welcome {user.username}</h1>
      
    </div>
    </>
  )
}

export default Dashboard