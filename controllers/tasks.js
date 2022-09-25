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
      const tasks = await Task.find({ createdById: req.user.id, deleted: false });
      //console.log(tasks)
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
