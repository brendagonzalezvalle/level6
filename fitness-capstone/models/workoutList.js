const mongoose = require("mongoose")
const Schema  = mongoose.Schema


const workoutList = new Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    
})


module.exports = mongoose.model("List", workoutList)