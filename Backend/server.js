//
require("dotenv").config();
const connectDB = require("./Config/db");
const express = require("express");
const cors = require("cors");

const app = express();
//This middleware parse incomming JSON request bodies and make the parse data
// available through req.body
app.use(express.json());// Security checkpoint
app.use(cors()); // connect frontend and backend running on different port

const logger = (req, res, next) => {
    console.log(req.method); // type of request sended
    console.log(req.url); // tell which endpoint requested
    next();
}

//logger register custom middleware
app.use(logger);


//Routes
const heathRoutes = require("./Routes/healthRoutes");
const taskRoutes = require("./Routes/taskRoutes");

app.use("/api",taskRoutes);
app.use("/api", heathRoutes);

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Login request received");
})

//Start Server
async function startServer() {
    await connectDB(); // calling the database connection
    app.listen(process.env.PORT, function () {
        console.log(`Server running at ${process.env.PORT}`)
    });
}

startServer();




