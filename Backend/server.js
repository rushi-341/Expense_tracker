const express = require("express");
const cors = require("cors");
const connectedDb = require("./database/db.js");
const authRoutes = require("./routes/authRoutes.js");
const expenseRoutes = require("./routes/expenseRoutes.js");
const dashBoardRoutes = require("./routes/dashBoardRoutes.js");
require("dotenv").config();

const app = express();

/* ---------- CORS (VERY IMPORTANT) ---------- */
app.use(cors({
  origin: [
    "http://localhost:5173",
    /^https:\/\/.*\.netlify\.app$/   // allow ALL netlify domains
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// handle preflight requests
app.options("*", cors());

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());

/* ---------- DB ---------- */
connectedDb();

/* ---------- ROUTES ---------- */
app.use("/api/user", authRoutes);
app.use("/api/user/dashboard", dashBoardRoutes);
app.use("/api/expenses", expenseRoutes);

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
