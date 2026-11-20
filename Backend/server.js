const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());// Security checkpoint
app.use(cors()); // connect frontend and backend running on different port

const logger = (req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
}
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Login request received");
});

const heathRoutes  =  require("./Routes/healthRoutes");
const Port = 3000;

app.use(logger);
app.use("/api",heathRoutes);
app.get("/api/health",(req,res)=>{
    res.status(200).json({
        "success":true,
        "message":"Personal Tracker backend is running!",
        "status":"OK"
    })
});

app.listen(Port,function(){
         console.log(`Server running at ${Port}`)
});


