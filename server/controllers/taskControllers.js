const Task = require("../models/Todo.js");
const asyncHandler = require("express-async-handler");


const getTasks = asyncHandler(async (req, res) => {
  console.log(req.body);
  const tasks = await Task.find();

  res.json(tasks);
});



const createTask = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill All the Fields");
  } else {
    const task = new Task({  title, content, category });
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  }
});

const getTaskById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task Not Founds" });
  }
});

const updateTask = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  const task = await Task.findById(req.params.id);
 

  if (task) {
    task.title = title;
    task.content = content;
    task.category = category;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error("Task Not Found");
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);


  if (task) {
    await task.remove();
    res.json({ message: "Task Removed" });
  } else {
    res.status(404);
    throw new Error("Task Not Found");
  }
});

module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask };
