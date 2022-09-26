const User = require("../models/User")
const Task = require("../models/Task");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getTaskForDropdown: async (req, res) => {
    try {
      const tasks = await Task.find({ createdById: req.user.id, deleted: false });
      const deletedTasks = await Task.find({ createdById: req.user.id, deleted: true });
      res.render("home.ejs", { tasks: tasks, deletedTasks: deletedTasks, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
