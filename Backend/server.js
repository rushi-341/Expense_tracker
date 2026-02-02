const express = require("express")
const app = express()
const connectedDb = require("./database/db.js")
const authRoutes = require("./routes/authRoutes.js")
const expenseRoutes = require("./routes/expenseRoutes.js")
const dashBoardRoutes = require("./routes/dashBoardRoutes.js")
const cors = require("cors");
require("dotenv").config();
app.use(express.json())
app.use(cors());
//
connectedDb()

app.use("/api/user",authRoutes)
//the below ones are protected routes
app.use("/api/user/dashboard",dashBoardRoutes)
app.use("/api/expenses",expenseRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is listening to port number ${PORT}`)
})