import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../redux/action'

const Login = () => {
  
     const [password, setPassword] = useState("")
     const [email, setEmail] = useState("")

     const navigate = useNavigate()

     const dispatch = useDispatch()
    
     
 
     const handleSubmit = (e)=>{
         e.preventDefault()
         setEmail("")
        
         setPassword("")
         console.log(email,password)
         const userInfo = JSON.parse(localStorage.getItem("users"))
    //  console.log(userInfo)

     const userExist = userInfo.find((user) => user.email === email)
     console.log(userExist)

     if(!userExist){
        alert("user not found")
     }
     else{
        alert("Login success")
     dispatch(login(userExist)) 
        navigate("/")
     }
     }
     
 
   return (
    <>
    <div className="form  w-[95vw] flex flex-col gap-10 justify-center items-center">
        
    
        <form className='pt-5 pb-6 pl-10 pr-10 md:w-[40%] w-[80%]  gap-2 bg-black/60 rounded-2xl text-xl
         flex flex-col items-center justify-center shadow-2xl shadow-pink-400/50'
        onSubmit={handleSubmit} >
    
            <h1 className='text-3xl font-bold text-pretty text-indigo-500 m-2 italic'>Login Form</h1>
            
    
            <div className="email flex flex-col gap-2 md:w-[70%] w-[90%] ">
                <h1 className=' font-bold text-pretty text-indigo-400 italic'>
                    Email</h1>
                <input className='outline-none pl-2 text-xl pt-2 pb-3 placeholder:text-lg rounded-lg'
                 onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                 type="text" placeholder='Enter Email' required />
            </div>
    
            <div className="password flex flex-col gap-2 md:w-[70%] w-[90%] ">
                <h1 className=' font-bold text-pretty text-indigo-400 italic'>
                    Password</h1>
                <input className='outline-none pl-2 text-xl pt-2 pb-3 placeholder:text-lg rounded-lg'
                 onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                 type="password" placeholder='Enter Password' required />
            </div>
    
            <div className='mt-3 flex items-center '>
                <button 
            className=' font-bold text-pretty text-indigo-400 italic p-3 bg-white rounded-xl
             hover:bg-gray-300/40 cursor-pointer'>
                    Log into Account</button>
            </div>
    
            <h1 className=' font-bold text-pretty text-indigo-400 italic'>Or</h1>
             <div>
                <button 
            className=' font-bold text-pretty text-indigo-400 italic p-3 bg-white rounded-xl
             hover:bg-gray-300/40 cursor-pointer'> <Link to="/signup">
                    Create Account</Link></button>
            </div>
        </form>
       
       </div>
    </>
   )
 }

export default Login