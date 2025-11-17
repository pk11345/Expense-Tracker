import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../redux/action'

const Nav = () => {

  const user = useSelector(state=>state.username)
     console.log(user)

     const dispatch = useDispatch()
  
  return (
    <>
    <div className='bg-slate-800 absolute left-0 w-[30%] h-screen flex flex-col items-center pt-6
     border-r-2 border-slate-600 shadow-xl shadow-slate-500 rounded-r-2xl gap-5'>
      
        <h1 className='text-slate-400 font-bold text-2xl italic '
        >Expense Tracker</h1>

        <div className='mt-7 w-[90%]'>

          {!user? <>
          <ul className='text-white italic text-2xl space-y-3'>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>
              
             <Link to="/"> Home </Link></li>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>

              
              
               <Link to="/signup"> Signup</Link></li>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>
              
               <Link to="/login"> Login</Link></li>
            {/* <li className='text-red-500 hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>Logout</li> */}
          </ul>
          </>
          :<>
          <ul className='text-white italic text-2xl space-y-3'>

            
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>
              
             <Link to="/"> Home </Link></li>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>

              
              
               <Link to="/budget"> Budget</Link></li>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>
              <Link to="/transaction">Transaction</Link></li>
            <li className='hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%] p-2
            border-b-2 border-white'>
              
               <Link to="/category">Category</Link></li>
            <li className='text-red-500 hover:cursor-pointer  hover:bg-slate-400 rounded-xl w-[100%]
             p-2
            border-b-2 border-white'
           onClick={()=>{
            dispatch(login(""))
           }}
            >Logout</li>
          </ul>
          </>
          }
          
        </div>
      
    </div>
    </>
  )
}

export default Nav