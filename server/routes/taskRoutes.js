const express = require("express");
const {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

const router = express.Router();

// done
router.route("/").get(getTasks);
// done
router.route("/create").post(createTask);

router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = router;
