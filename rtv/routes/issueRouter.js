const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All issue
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
})

// Get issue by user id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Issue
issueRouter.delete("/:IssueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.IssueId, user: req.auth._id }, // wont delete unless user id matches 
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted Issue: ${deletedIssue.title}`)
    }
  )
})

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id }, //only user who made update should be able to update
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

//upvote (like) an issue
issueRouter.put("/upVote/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $addToSet: { likedUsers: req.auth._id }, // makes it so the same id cant be in array more than once
          $pull: { dislikedUsers: req.auth._id } // pull will pull the id out of array
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})

// downvote (dislike) an issue.

issueRouter.put("/downVote/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $addToSet: { dislikedUsers: req.auth._id },
          $pull: { likedUsers: req.auth._id }
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})


module.exports = issueRouter