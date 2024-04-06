const mongoose = require("mongoose")
const Schema = mongoose.Schema


const workoutSchema = new Schema ({
    date: {
        type: String,
        required: true
    }
    // workoutComplete: {
    //     type: Boolean,
    //     required: true
    // }

})




module.exports = mongoose.model("Workouts", workoutSchema ) //export = mongoose.model()
