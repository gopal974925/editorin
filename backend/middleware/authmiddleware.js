
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("AUTH HEADER:", req.headers.authorization);

  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ msg: "No token provided" });

  const token = authHeader.replace("Bearer", "").trim();


  try {
    const decoded = jwt.verify(token, "SECRETKEY");
    req.user = decoded; // { id, role }
    next();
    

  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
