const express = require("express")
const workoutRouter = express.Router()
const Workouts = require("../models/workouts.js")



//Get All request

workoutRouter.get("/", (req, res, next) => { //express routing to specified end point with call back function
    Workouts.find((err, workout) =>{ //mongoose talking to database (mongoDB)
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workout)
    } )
})

//Post new 

workoutRouter.post("/", (req, res, next) => {
    const newWorkout = new Workouts(req.body)
    newWorkout.save((err, workout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workout)
    })
})


module.exports = workoutRouter