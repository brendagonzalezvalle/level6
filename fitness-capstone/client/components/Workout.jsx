import React from "react";



export default function Workout(props){

    const {date, name} = props
    

    return(
        <div>
            <h3 className="workout-dates"> {name} {date}</h3> 
            
        </div>
    )
}