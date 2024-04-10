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
    return <li className='workout-text' key={workout._id}> {workout.name} completed a workout on {workout.date} </li> 
  
   })

   


  return (
    <div className="community">
      <h1>Community Activity</h1>
      <div>

        <ul>
          {displayWorkouts}
          
        </ul>

      </div>

     
    

    </div>
  )
}