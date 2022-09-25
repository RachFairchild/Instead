const mongoose = require("mongoose");

const InstanceSchema = new mongoose.Schema({  
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
}, {
  timestamps: true
});



module.exports = mongoose.model("Instance", InstanceSchema);