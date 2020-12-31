const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type:Date,
        default: Date.now
    },
    excercises: [{
        type: {
            type: String,
            trim: true,
            require: "Enter ane excercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an excercise name"
        },
        duration: {
            type: Number
        }
        weight: Number,
        reps: Number,
        sets: Number
    }
    ]
});

const workout = mongoose.model("workout",workoutSchema);

module.exports = workout;