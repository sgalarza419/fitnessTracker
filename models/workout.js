const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type:Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            require: "Enter an excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an excercise name"
        },
        duration: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        weight: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
    totalDuration: {
        type: Number,
    }
});

const workout = mongoose.model("workout",workoutSchema);

module.exports = workout;