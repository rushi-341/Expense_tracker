const express = require("express")
const router = express.Router()
const authMiddleWare = require("../middleware/auth-middleware")
const dashBoardController = require("../controllers/dashBoardController")

router.get("/",authMiddleWare,dashBoardController)

module.exports = router