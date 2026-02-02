const mongoose = require("mongoose")

const connectedDb = async()=>{
    await mongoose.connect('mongodb+srv://125159039_db_user:08v9MXX7S7BcvR7i@cluster0.tzu97sb.mongodb.net/'
).then(()=>{
    console.log("Connected to Database")
}).catch((e)=>{
    console.log(e)
    process.exit(1)
})}


module.exports = connectedDb