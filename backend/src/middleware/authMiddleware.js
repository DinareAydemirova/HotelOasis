const jwt = require("jsonwebtoken");

const verifyAccess = (roles) => {
  return (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) {
        return res.status(403).json({ message: "Token is required" });
      }
      if (!token.startsWith("Bearer")) {
        return res.status(403).json({ message: "Token is not valid" });
      }
      token = token.slice(7);
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.decoded = decoded;
      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "You don't have access" });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized", error: error.message });
    }
  };
};

module.exports = { verifyAccess };
