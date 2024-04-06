const mongoose = require("mongoose")
const Schema = mongoose.Schema


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, //id from another object in our db
        ref: "User", //
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    likedUsers: [{
        type: Schema.Types.ObjectId, //creates an array of id's
        ref: "User"
    }],
    dislikedUsers:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model("Issue", issueSchema)