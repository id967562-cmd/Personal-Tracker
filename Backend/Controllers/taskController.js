const Task = require("../models/Task");
const createTask = async (req, res) => {
    try {
        const { title, description, completed, dueDate } = req.body;
        const newTask = await Task.create({
            title,
            description,
            completed,
            dueDate
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = {createTask};