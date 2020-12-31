const router = require("express").Router();
const {
  workout
} = require("../models");

router.post("/api/workouts", ({
  body
}, res) => {
  workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});