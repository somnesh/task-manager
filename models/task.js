const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true, // it will work like this "   new   " --> "new"
    maxlength: [20, "name must be within 20 char"],
  },
  completed: Boolean,
  default: false,
});

module.exports = mongoose.model("Task", TaskSchema);
