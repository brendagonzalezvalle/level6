import React, {useContext, useState} from "react";
import { UserContext } from '../src/context/UserProvider.jsx'
import WorkoutsCompleted from "./WorkoutsCompleted.jsx";

export default function Home (props){

    console.log(props)
    // const {postWorkout} = props
    
    const initialData = {
        date: "",
        name: "" //new
    } 

    const {user: {username}, postWorkout, workouts, getAllWorkouts, getUserWorkouts} = useContext(UserContext)

    const [formData, setFormData] = useState(initialData) //set form data state
    console.log(formData)



    function handleChange(e){
        // e.preventDefault()
        console.log("clicked")
        const {name , value} = e.target //grab events from event target
       setFormData(prevData => ({...prevData, [name]: value})) // to ensure previous data is not erased, use spread operater to get prev data, but then we are updating the name on input below to the value user is typing
    

    }

    function handleSubmit(e){
        e.preventDefault()
        postWorkout(formData) //pass in formData (new workout object) to post function
        setFormData(initialData)

    }


    

    return (
        <div >
            <h1 className="home-welcome">Welcome {username}</h1>
            <p className="home--logo">Move.Lift.Repeat.</p>

            <h1 className="home-title"> Fitness Tracker</h1>
{/* form */}
            <form className="home--container" onSubmit={handleSubmit}>
                <input 
                className="home-date-input"
                type="date" 
                name="date"
                onChange={handleChange}
                value={formData.date}
                 />
                 
                <input 
                className="home-date-input"
                type="text" 
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter First Name"
                 /> 

                <button className="home-submit">Mark Workout Complete</button>

                <div className="home-history-container">
                    <h1 className="home-history">My Workout History: </h1>
                    <WorkoutsCompleted workouts={workouts}/>

                </div>

               

            </form>


    
            
            
        </div>
    )
}