const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
const morgan  = require("morgan")
const {expressjwt: jwt} = require('express-jwt')

//Middleware

app.use(express.json())
app.use(morgan("dev"))

//Connect to Database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://brendagonzalez22valle:X9zjhWLADk9osiwS@cluster0.qnmkk6x.mongodb.net", () => {
    console.log("MongoDB is connected")
})

//Routes

app.use("/auth", require("./routes/authRouter.js"))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.auth
app.use("/api/workouts", require("./routes/workoutRouter.js"))
app.use("/list", require("./routes/workoutListRouter.js"))



//Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
//Listen

app.listen("9000", () => {
    console.log("The server at port 9000 is running!")
})