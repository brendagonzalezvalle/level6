import React, { useState, useEffect } from "react";
import axios from "axios"

export default function WorkoutList(props){

    console.log(props)


    return (
        <div className="workoutlist-container">
            <h1 className="workoutlist-title ">Title: Leg Press </h1>
            <p className="workoutlist-instructions">Instructions: <br/>Step 1: Sit down on a leg press machine and place your legs on the platform in front of you. Your feet should be positioned approximately a foot to one and half feet apart. 
            Step 2: Lower the safety bars holding the platform in place. Press the platform all the way up until your legs are fully extended, without locking your knees. This is the starting position.Step 3: As you inhale, slowly lower the platform until your upper and lower legs make a 90-degree angle.Step 4: Push with the heels of your feet and use your quadriceps to go back to the starting position. Exhale as you do so.Step 5: Repeat for the number of reps in your set. Make sure that the safety pins are locked properly once you have finished.</p>

            <h1 className="workoutlist-title ">Title: Dumbbell Globet Squat</h1>
            <p className="workoutlist-instructions">Instructions: <br/>Step 1: Stand up straight and hold a light kettlebell by the handles close to your chest. This is the starting position. Step 2: Squat down until your hamstrings are on your calves. Step 3: Once you get to the bottom of the squat, pause and use your elbows to push your knees out. Return to the starting position and repeat for 10-20 repetitions.</p>

            <h1 className="workoutlist-title ">Title: Bench Press </h1>
            <p className="workoutlist-instructions">Instructions: <br/>Step 1: Lie on your back on a flat bench. Lift the bar off the rack and hold it straight over you, keeping your arms locked. This is the starting position. Step 2: Next, inhale and bring the barbell down in a slow and controlled manner until it reaches your mid-chest. Step 3: Pause briefly before raising the barbell back to your starting position as you exhale. Your focus should be on using your chest muscles to move the bar. Lock your arms at the top of the movement and squeeze your chest before slowly bringing the barbell down again. This step should take twice as long raising the weight to get the maximum benefit. Step 4: Repeat the movement for the desired number of repetitions. Step 5: The final step in the exercise is to place the barbell on the rack."</p>

            
        </div>
        
    )
}