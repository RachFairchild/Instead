const Task = require("../models/Task");

module.exports = {
  createTask: async (req, res) => {
    try {
      // const taskUser = await User.findById(req.user.id)
      await Task.create({
        task: req.body.task,
        deleted: false,
        // createdAt: ,
        createdById: req.user.id
      });
      console.log("Task has been added!");
      res.redirect("/home/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  getTasks: async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      // const comments = await Comment.find({ post: req.params.id }).sort({ createdAt: "asc" }).lean();
      res.render("home.ejs", { tasks: task, user: req.user });
    } catch (err) {
     console.log(err);
    }
  },
  deleteTasks: async (req, res) => {
    try {
      await Task.deleteOne({_id: req.params.taskid});
      res.redirect("/home/"+req.params.id);
    } catch(err) {
      console.log(err);
    }
  }
};
