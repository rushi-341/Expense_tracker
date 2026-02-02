const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectedDb = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashBoardRoutes = require("./routes/dashBoardRoutes");

const app = express();

// ✅ MIDDLEWARES (ORDER MATTERS)
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    /^https:\/\/.*\.netlify\.app$/
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ CONNECT DB
connectedDb();

// ✅ ROUTES
app.use("/api/user", authRoutes);
app.use("/api/user/dashboard", dashBoardRoutes);
app.use("/api/expenses", expenseRoutes);

// ✅ SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
