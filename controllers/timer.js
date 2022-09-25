const Task = require("../models/Task");
const Instance = require("../models/Instance");

module.exports = {
    initiateTimer: (req, res) => {
      res.render("timer.ejs");
    },
    postTimer: async (req, res) => {
      try {
        const tasks = await Task.find({ createdById: req.user.id });
        console.log(tasks);
        console.log('hi rachel');
        res.render("home.ejs", { tasks: tasks, user: req.user });
      } catch (err) {
        console.log(err);
      }
    },
  };
  