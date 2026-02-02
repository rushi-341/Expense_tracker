const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not authorized"
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.userId).select("name");

    req.user = {
      userId: user._id,
      name: user.name
    };

    next();
  } catch (e) {
    console.error("Auth middleware error:", e);
    return res.status(401).json({
      success: false,
      message: "Token invalid or expired"
    });
  }
};

module.exports = authMiddleWare;
