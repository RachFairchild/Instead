const Task = require("../models/Task");
const Instance = require("../models/Instance");
const User = require("../models/User");

module.exports = {
    initiateTimer: (req, res) => {
      res.render("timer.ejs");
      // console.log(req)
    },

    // Call upon the Instance model to fill in information
    postTimer: async (req, res) => {

      const instance = new Instance({
        createdById: req.user._id,
        task: req.body.selectedTask,
        minutes: req.body.minutes,
      });

      instance.save((err) => {
        if (err) {
          return next(err);
        }
        //  res.redirect("/home");
      });

      console.log(req.query.selectedTask);
      try {
        //const tasks = await Task.find({ createdById: req.user.id });
        res.render("timer.ejs", { task: instance.task, user: req.user });
      } catch (err) {
        console.log(err);
      }
  },
};
  