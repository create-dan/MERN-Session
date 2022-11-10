const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  task: {
    type: String,
    required: true,
    maxLength:50
  }
});

module.exports = mongoose.model("Todo", Todo);
