import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import WorkoutList from '../components/WorkoutList'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Auth from '../components/Auth.jsx'
import Navbar from '../components/Navbar.jsx'
import {Routes, Route, Navigate} from "react-router-dom"
import { UserContext } from '../src/context/UserProvider.jsx'
import WorkoutsCompleted from '../components/WorkoutsCompleted.jsx'
import ProtectedRoute from '../components/ProtectedRoute.jsx'
import Community from '../components/Community.jsx'


function App() {
  const{token, logout} = useContext(UserContext)
  


  return (
    <div>
        {token && <Navbar logout={logout} token={token} />}
        {/* if theres a token then show navbar */}
        <Routes>

        <Route path="/" element={ token ? <Navigate to="/home"/> : <Auth />}/>
          <Route path="/home" element={<ProtectedRoute token={token}> 
            <Home />
        
          </ProtectedRoute>}/>

          <Route path="/list" element={<WorkoutList />}/> 
            
          <Route path="/dashboard" element={<ProtectedRoute token={token}> 
            <Dashboard />
          </ProtectedRoute>}/>

          <Route path="/community" element={<ProtectedRoute token={token}> 
            <Community />
        
          </ProtectedRoute>}/>
        


        </Routes>

      
     
      
     
      
     
    </div>
  )
    
  
}

export default App
