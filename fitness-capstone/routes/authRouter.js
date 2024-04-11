const express = require('express')
const authRouter = express.Router()
const User = require("../models/user.js")
const jwt = require("jsonwebtoken")


//Sign up

authRouter.post("/signup", (req, res, next) => {
  //-look up an existing user based on the provided username in the request body.

    User.findOne({username: req.body.username}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is taken!"))
        }
        //User Creation  - If username is not found in the database, a new `User` instance is created using the data from the request body.
        // - This user is then saved to the database, and any errors during the save operation are handled.
        const newUser = new User(req.body)
        newUser.save((err, savedUser) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            //After successfully creating the new user, a JSON Web Token (JWT) is generated. It encodes the user's information and a secret key stored in the environment variable (process.env.SECRET).
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET) //jsonwebtoken creates our token
            return res.status(201).send({token, user: savedUser.withoutPassword()}) //send token & user to client
        })

    })
})

// Login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(!user){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      
      user.checkPassword(req.body.password, (err, isMatch) => {
        if(err){
          res.status(403)
          return next(new Error("Username or Password are incorrect"))
        }
        if(!isMatch){
          res.status(403)
          return next(new Error("Username or Password are incorrect"))

        }
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        return res.status(200).send({ token, user: user.withoutPassword() })

      })
    })
  })
  




module.exports = authRouter