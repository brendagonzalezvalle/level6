import React from "react";

export default function WorkoutList(props){
    console.log(props)
    return (
        <div className="workoutlist-container">
            <h1 className="workoutlist-title ">Title: {props.title}</h1>
            <p className="workoutlist-instructions">Instructions: <br/>{props.instructions}</p>
        </div>
    )
}