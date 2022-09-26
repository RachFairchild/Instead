const Task = require("../models/Task");

module.exports = {
  
  createTask: async (req, res) => {
    // define new task document
    const task = new Task({
      task: req.body.taskItem,
      createdById: req.user.id,
      deleted: false,
    });
    // save the task document
    task.save((err) => {
      if (err) {
        return (err);
        console.log(err);
      }
    });
    // send user back to updated tasks page
    try {
      const tasks = await Task.find({ createdById: req.user.id, deleted: false });
      res.render("taskupdate.ejs", { user: req.user, tasks: tasks });
    } catch (err) {
      console.log(err);
    }
  },


  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ createdById: req.user.id, deleted: false });
      // const comments = await Comment.find({ post: req.params.id }).sort({ createdAt: "asc" }).lean();
      res.render("taskupdate.ejs", { user: req.user, tasks: tasks });
    } catch (err) {
     console.log(err);
    }
  },


  deleteTasks: async (req, res) => {
    console.log('in deleteTasks');
    console.log(req);
    try {
      await Task.updateOne({_id: req.params.id}, { deleted: true });
      res.redirect("/taskupdate/");
    } catch(err) {
      console.log(err);
    }
  }
};
