const express = require("express");
const router = express.Router();
const {createTask,getTasks,updateTask,deleteTask} = require("../Controllers/taskController");
//connect POST request to the controller
router.post("/tasks",createTask);
//GET request
router.get("/tasks",getTasks);
//PUT request
router.put("/tasks/:id",updateTask);
//Delete request
router.delete("/tasks/:id",deleteTask);
module.exports = router;
