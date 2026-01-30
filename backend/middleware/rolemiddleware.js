exports.isClient = (req, res, next) => {
  if (req.user.role !== "Client") {
    return res.status(403).json({ msg: "Client access only" });
  }
  next();
};

exports.isEditor = (req, res, next) => {
  if (req.user.role !== "Editor") {
    return res.status(403).json({ msg: "Editor access only" });
  }
  next();
};
