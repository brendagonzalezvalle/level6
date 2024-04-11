import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../src/context/UserProvider.jsx'

export default function WorkoutList(){

  

    const {workoutList} = useContext(UserContext)
    console.log(workoutList)

   
    const title = workoutList.map(workout => <div className="workoutlist-container"> <h1 className="workoutlist-title "> Title: {workout.title}  </h1> <p className="workoutlist-instructions"> Instructions: {workout.instructions} </p> </div>)
 

    return (
        <div>
           
            {title}
      
        </div>
        
    )
}