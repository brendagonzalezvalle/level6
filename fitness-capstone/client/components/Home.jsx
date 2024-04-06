import React, {useState} from "react";
import Dashboard from "./Dashboard.jsx";
import { set } from "mongoose";

export default function Home (props){

    console.log(props)
    
    const initialData = {
        date: "" 
    } 

    const [formData, setFormData] = useState([]) //set form data state
    const [completedWorkouts, setCompletedWorkouts] = useState(0) // set completed workout state
    console.log(formData)


    function handleChange(e){
        console.log("clicked")
        const {name , value} = e.target //grab events from event target
       setFormData(prevData => ({...prevData, [name]: value})) // to ensure previous data is not erased, use spread operater to get prev data, but then we are updating the name on input below to the value user is typing
    

    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(formData) //pass in formData (new workout object) to post function
        // console.log(alert("Awesome Job! You are working hard keep working towards your goals!"))
        setCompletedWorkouts(completedWorkouts + 1)
        setFormData(initialData)

    }


    

    return (
        <div >
            <h1 className="home-title"> Fitness Tracker</h1>
            <form className="home--container" onSubmit={handleSubmit}>
                <input 
                className="home-date-input"
                type="date" 
                name="date"
                onChange={handleChange}
                value={formData.date}
                 />
                <button className="home-submit">Mark Workout Complete</button>

                <h3 className="home-completed-workouts"> You have submited the following workout(s) today:    {completedWorkouts} </h3>

            </form>


    
            
            
        </div>
    )
}