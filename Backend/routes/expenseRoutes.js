const express = require("express")
const router = express.Router()
//import the controllers
const {getExpenses,addExpenses,deleteExpense} = require("../controllers/expensesController")
const authMiddleWare = require("../middleware/auth-middleware")

router.get("/",authMiddleWare,getExpenses)
router.post("/",authMiddleWare,addExpenses)
router.delete("/:id",authMiddleWare,deleteExpense)

module.exports = router 
