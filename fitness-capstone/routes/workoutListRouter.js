const express = require("express")
const workoutListRouter = express.Router()
const List = require("../models/workoutList.js")



//Get All request

workoutListRouter.get("/", (req, res, next) => {
    List.find((err, workout) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workout)
    } )
})

//Post new 

workoutListRouter.post("/", (req, res, next) => {
    const newWorkoutList = new List (req.body)
    newWorkoutList.save((err, workout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newWorkoutList)
    })
})








module.exports = workoutListRouter