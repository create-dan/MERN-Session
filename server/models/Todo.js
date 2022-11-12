const mongoose = require("mongoose");

const Task = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },

  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Task", Task);
