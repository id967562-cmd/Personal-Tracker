const mongoose = require("mongoose");

async function connectDB() {
    try {
        //process.env.MONGO_URL-->reads the connection address from enviroment variable
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" MongoDB Connection Established Successfully!");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
}
module.exports = connectDB;