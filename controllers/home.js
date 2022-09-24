const User = require("../models/User")
const Task = require("../models/Task");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getTask: async (req, res) => {
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
