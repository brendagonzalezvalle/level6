import { useState, useEffect } from 'react'
import React from 'react'
import axios from "axios"
import WorkoutList from '../components/WorkoutList'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import { post } from '../../routes/workoutRouter'


function App() {

  const [workoutsList, setWorkoutsList] = useState([])
  const [workouts, setWorkouts] = useState([])


  //Get all
  function getWorkoutList(){
    axios.get("/api/list") //moved get request into is own function to make it more re-usable
    .then(res => setWorkoutsList(res.data))
    .catch(err => console.log(err.response.data.errMsg))// errMsg set up in server
  }

  function completedWorkouts(){
    axios.get("/api/workouts") //moved get request into is own function to make it more re-usable
    .then(res => setWorkouts(res.data))
    .catch(err => console.log(err.response.data.errMsg))// errMsg set up in server
  }
//  post
 function postWorkout(newWorkout){
  axios.post("/api/workouts", newWorkout)
  .then(res => {
    setWorkouts(prev => [...prev, res.data]) //update state to set it to a new array that has all prev data , but new bounty at the end the response.data, this will re render the page so that it remaps bounties below on wep page
  
  })
  .catch(err => console.log(err))
}


  useEffect(() => {
    getWorkoutList()
    completedWorkouts()
     //call function within useEffect
  }, []) // this will only fire once since the dependency is an empty array


  return (
    <div>

      <Router>

        <nav className="nav-container" >
          <Link to="/" style={{padding: 5}} className='nav-header'> Home </Link>
          <Link to="/list" style={{padding: 5}} className='nav-header'> Workout List </Link>
          <Link to="/dashboard" style={{padding: 5}} className='nav-header'> Dashboard </Link>


        </nav>


        <Routes>
          <Route path="/" element={
          <Home
          workouts={workouts}
          submit={postWorkout}/>}/>

          <Route path="/list" element= {workoutsList.map(workout => 
            <WorkoutList 
            {...workout}
            key={workout.title}/>)} 
          />

          <Route path="/dashboard" element={<Dashboard workouts={workouts}/>}/>


        </Routes>

      </Router>
     
      
     
      
     
    </div>
  )
    
  
}

export default App
