const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
const morgan  = require("morgan")
const {expressjwt: jwt} = require('express-jwt')

app.use(express.json())
app.use(morgan("dev"))

//Connect to Database
mongoose.set('strictQuery', false)
mongoose.connect(
    "mongodb+srv://brendagonzalez22valle:3Tq49nyiBx5c2tdb@cluster0.aafiw9o.mongodb.net/",
() => console.log('Connected to the DB'))



//Routes
app.use("/auth", require("./routes/authRouter.js"))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) // req.auth
app.use("/api/issue", require("./routes/issueRouter.js"))
app.use("/api/comment", require("./routes/commentRouter.js"))



//Error Handler

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })


//Listen
 app.listen("9000", ()=>{
    console.log("The server 9000 is running")
 })