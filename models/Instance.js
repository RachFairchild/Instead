const mongoose = require("mongoose");

const InstanceSchema = new mongoose.Schema({  
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
  //TODO: add time updates/ "endTime" (see mongoose's timestamps option)
  
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },
});

module.exports = mongoose.model("Instance", InstanceSchema);