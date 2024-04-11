import React, { useContext, useEffect } from 'react'
// import WorkoutsCompleted from './WorkoutsCompleted.jsx'
// import Workout from './Workout.jsx'
import { UserContext } from '../src/context/UserProvider.jsx'



export default function Community(props){

const{ _id, name} = props
  const {getAllWorkouts, allWorkouts } = useContext(UserContext)
  console.log(allWorkouts)

  useEffect(() => {
    
    getAllWorkouts()
    
  },[] )

//display workouts
  const displayWorkouts = allWorkouts.map((workout)=>{
    return <h1 className='workout-text' key={workout._id}> {workout.name} completed a workout on {workout.date} </h1> 
  
   })

   


  return (
    <div className="workoutlist-container">
      <h1 className="workoutlist-title ">Community Activity</h1>
      <div>
        
          {displayWorkouts}
          
      </div>

     
    

    </div>
  )
}