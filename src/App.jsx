import React, { useState } from 'react'
import Signup from './components/auth/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Dashboard from './components/Dashboard'
import { IoMenu } from "react-icons/io5";
import Nav from './components/Nav'
import Budget from './components/Budget'
import Transaction from './components/Transaction'
import Category from './components/Category'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
      <>
      <div className="app flex justify-center h-[100vh] bg-slate-900">
        <IoMenu
          className="text-white text-3xl m-2 absolute left-0 hover:cursor-pointer z-20"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        {isNavOpen && <Nav />}
        
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/budget' element={<Budget/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>
      </div>
      </>
  )
}

export default App