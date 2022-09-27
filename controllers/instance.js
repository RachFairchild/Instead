const Task = require("../models/Task");
const Instance = require("../models/Instance");
const User = require("../models/User");

module.exports = {
    initiateTimer: (req, res) => {
      res.render("timer.ejs");
      // console.log(req)
    },

    postTimer: async (req, res) => {

      // create new instance document in collection
      const instance = new Instance({
        createdById: req.user._id,
        task: req.body.selectedTask,
        minutes: req.body.minutes,
      });
      // save the instance document
      instance.save((err) => {
        if (err) {
          return next(err);
        }
        //  res.redirect("/home");
      });
      console.log(req.query.selectedTask);

      try {
        //const tasks = await Task.find({ createdById: req.user.id });
        let milliseconds = (req.body.minutes * 60) * 1000;
        console.log(req.body.minutes);
        console.log(milliseconds);
        res.render("timer.ejs", { task: instance.task, user: req.user, minutes: req.body.minutes, milliseconds: milliseconds });

      } catch (err) {
        console.log(err);
      }
    },
};
  