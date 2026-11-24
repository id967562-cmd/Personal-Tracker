const express = require("express")
const router = express.Router();
const {createTask} = require("../Controllers/taskController")
//connect POST request to the controller
router.post("/tasks",createTask);
module.exports = router;