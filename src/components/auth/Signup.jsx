import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const form ={
        username:username,
        email:email,
        password:password
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setEmail("")
        setUsername("")
        setPassword("")
        console.log(email,username,password)
        

        const userInfo = JSON.parse(localStorage.getItem("user"))||[]
        if(userInfo.email){
            alert("user exist")
        }
        else{
            localStorage.setItem("user",JSON.stringify(form) )
            alert("signup success")
        }
    }

  return (
   <>
   <div className="form  w-[95vw] flex flex-col gap-10 justify-center items-center">
    

    <form className='pt-5 pb-6 pl-10 pr-10 md:w-[40%] w-[80%]  gap-2 bg-black/60 rounded-2xl text-xl 
     flex flex-col items-center justify-center shadow-2xl shadow-pink-400/50'
    onSubmit={handleSubmit} >

        <h1 className='text-3xl font-bold text-pretty text-indigo-500 m-2 italic'>Signup Form</h1>
        <div className="username flex flex-col gap-2 md:w-[70%] w-[90%] ">
            <h1 className=' font-bold text-pretty text-indigo-400 italic'>
                Username</h1>
            <input className='outline-none pl-2 text-xl pt-2 pb-3 placeholder:text-lg rounded-lg'
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            value={username}
             type="text" placeholder='Enter username' required />
        </div>

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

        <div className="password flex flex-col gap-2 md:w-[70%] w-[90%]  " >
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
                Create Account</button>
        </div>

        <h1 className=' font-bold text-pretty text-indigo-400 italic'>Or</h1>
         <div>
            <button 
        className=' font-bold text-pretty text-indigo-400 italic p-3 bg-white rounded-xl
         hover:bg-gray-300/40 cursor-pointer'> <Link to="/login">
                Login </Link></button>
        </div>
    </form>
   
   </div>
   </>
  )
}

export default Signup