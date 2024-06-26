import {React, useState, useContext }from "react";
import { UserContext } from '../src/context/UserProvider.jsx'


export default function Dashboard(props){

    const {workouts} = useContext(UserContext)

    
    const array = workouts.map(item => {
        return (<h1>{item}</h1>)
    })
    
    const total = array.length //grab total
   




    return (
        <div className="dashboard-container">
            
            <img className="dashboard-image" src="https://st.depositphotos.com/50165240/55824/i/450/depositphotos_558246542-stock-photo-design-fitness-logo.jpg"/>
            <h2 className="dashboard-total">Total Workouts Completed This Year: <span className="dashboard-number"> {total} </span></h2>

            <h3 className="dashboard-dates-title">Dates of Completed Workouts: </h3>
            {workouts.map(workout => <div className="dashboard-dates" key={workout._id}>{workout.date}</div>)}
        
        </div>
    )
}