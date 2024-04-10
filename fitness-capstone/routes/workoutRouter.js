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

// Get workout by user id
workoutRouter.get("/user", (req, res, next) => {
    Workouts.find({ user: req.auth._id }, (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issue)
    })
  })

//Post new 

workoutRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newWorkout = new Workouts(req.body)
    newWorkout.save((err, workout) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(workout)
    })
})

workoutRouter.delete("/:workoutId", (req, res, next) => {
    Workouts.findOneAndDelete(
      { _id: req.params.workoutId, user: req.auth._id }, // wont delete unless user id matches 
      (err, deletedWorkout) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted Issue: ${deletedWorkout.date}`)
      }
    )
  })



// Update Workout
workoutRouter.put("/:workoutId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.workoutId, user: req.auth._id }, //only user who made update should be able to update
      req.body,
      { new: true },
      (err, updatedWorkout) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedWorkout)
      }
    )
  })



module.exports = workoutRouter