const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization.replace("Bearer ", "");
    const jwtVerification = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = jwtVerification;
  } catch (error) {
    res.status(401).json({
      status: "UNAUTHORIZED",
      error: "Unauthorized access! Invalid token.",
    });

    return;
  }

  next();
};

module.exports = auth;
