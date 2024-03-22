const mongoose = require("mongoose")
const Schema = mongoose.Schema


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, //id from another object in our db
        ref: "User", //
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)