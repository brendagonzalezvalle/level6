import React, { useContext } from "react";



export default function Workout(props){

    const {date, name} = props
    

    return(
        <div>
            <h3> {name} {date}</h3> 
            {/* name is new */}
        </div>
    )
}