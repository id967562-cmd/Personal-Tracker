const express = require("express");
const app = express();
const Port = 3000;

app.get('/api/health',(req,res)=>{
    res.status(200).json({
        "success":true,
        "message":"Personal Tracker backend is running!",
        "status":"OK"
    })
});

app.listen(Port,function(){
         console.log(`Server running at ${Port}`)
});
