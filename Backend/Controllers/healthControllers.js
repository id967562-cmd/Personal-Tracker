const checkHealth =(req,res)=>{
       res.status(200).json({
        success:true,
        message:"Personal Tracker is running!",
        status:"OK"
       });
};

module.export = { checkHealth };