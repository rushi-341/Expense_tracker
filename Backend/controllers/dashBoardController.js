const dashBoardController = async(req,res)=>{
    res.status(200).json({
        success:true,
        message :"The user is authorized to use the dashboard",
        user:{
            id: req.user.userId,
            name: req.user.name
        }
    })
}
module.exports = dashBoardController