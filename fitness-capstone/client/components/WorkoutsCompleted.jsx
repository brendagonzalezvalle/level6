import React from 'react'
import Workout from './Workout'

export default function WorkoutsCompleted(props){
  const {workouts} = props
  console.log(workouts)


  return (
    // map out all workout components
    <div className="workouts-completed-container">
      {workouts.map(workout => <Workout {...workout} key={workout._id}/>)}

    </div>
  )
}