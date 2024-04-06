const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comment.js')



// Get All comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comment)
    })
  })

commentRouter.post('/:issueId', (req, res, next) => {
    // Attach the user who posted the comment
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId; // Link the comment to the issue
  const newComment = new Comment(req.body);

  newComment.save((err, savedComment) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      return res.status(201).send(savedComment);
  });
});

module.exports = commentRouter