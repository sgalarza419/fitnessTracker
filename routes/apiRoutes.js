const router = require("express").Router();
const { workout } = require("../models");

router.post("/api/workouts", ({body}, res) => {
  workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

    router.put("/api/workouts/:id", (req,res) => {
      workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body} },
        {new: true}
      )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });

router.get("/api/workouts",(req,res) => {
  workout.find({})
  .sort({date: -1})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/range", (req,res) => {
  workout.find({}, (err,data) => {
    if(err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  })
});

module.exports = router;
