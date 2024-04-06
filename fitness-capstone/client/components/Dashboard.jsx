import {React, useState }from "react";


export default function Dashboard(props){
    console.log('Dashboard comp',props.workouts)
    // const workoutDash = props.workouts
    
    const array = props.workouts.map(item => {
        return (<h1>{item}</h1>)
    })
    console.log(array)

    const total = array.length //grab total
    console.log(total)
        


    return (
        <div className="dashboard-container">
            
            <img className="dashboard-image" src="https://st.depositphotos.com/50165240/55824/i/450/depositphotos_558246542-stock-photo-design-fitness-logo.jpg"/>
            <h2 className="dashboard-total">Total Workouts Completed This Year: <span className="dashboard-number">{total}</span></h2>

            <h3 className="dashboard-dates-title">Dates of Completed Workouts: </h3>
            {props.workouts.map(workout => <div className="dashboard-dates">{workout.date}</div>)}
            
            
           
           
            
        </div>
    )
}