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

const getTasks = async (req, res) => {
    try {
        const retrieveTask = await Task.find();
        res.json({
            succes: true,
            message: "Data send successfully",
            data: retrieveTask
        })
    }
    catch (error) {
        res.status(500).json({
            succes: false,
            message: error.message
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const getId = await Task.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );
        if (!getId) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        //Success response must be inside try
        return res.status(200).json({
            success: true,
            message: "Date updated successfully!",
            data: getId
        })


    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const deleteTask = async(req,res)=>{
    const id = req.params.id;
    try{
        const deleteId = await Task.findByIdAndDelete(id)
        if(!deleteId){
            return res.status(404).json({
                 success:false,
                 message:"Task not exist"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Task deleted successfully",
            data:deleteId
        })
    }
    catch(error){
        res.status(500).json({
            success:true,
            message:error.message
        })
    }
}
module.exports = { createTask, getTasks, updateTask, deleteTask};