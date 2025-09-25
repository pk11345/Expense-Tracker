import React from 'react'
import Signup from './components/auth/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/auth/Login'

const App = () => {
  return (
      <>
      <div className="app flex justify-center h-[100vh] bg-slate-900">
        
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Signup/>}/>
        </Routes>
      </div>
      </>
  )
}

export default App