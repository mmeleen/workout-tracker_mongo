const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", function (req, res) {
  db.Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  db.Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;