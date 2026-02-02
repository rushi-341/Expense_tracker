const mongoose = require("mongoose")

const connectedDb = async()=>{
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to Database")
}).catch((e)=>{
    console.log(e)
    process.exit(1)
})}


module.exports = connectedDb