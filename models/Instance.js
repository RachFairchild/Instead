const mongoose = require("mongoose");

const InstanceSchema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },  
  createdBy: {
    type: String,
    ref: "User"
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //TODO: add time accumulated
});

module.exports = mongoose.model("Instance", InstanceSchema);