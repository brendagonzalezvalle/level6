const mongoose = require("mongoose")
const Schema = mongoose.Schema


const workoutSchema = new Schema ({
    date: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    }, //new name
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who posted the comment
        required: true
    }


})




module.exports = mongoose.model("Workouts", workoutSchema ) //export = mongoose.model()
