const { Int32 } = require("mongodb");
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
  minutes: {
    type: Number,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },
}, {
  timestamps: true
});



module.exports = mongoose.model("Instance", InstanceSchema);