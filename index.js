const express = require("express");
const app = express();

const userMiddleware = (req, res, next) => {
  if (req.headers.username != "prasanna" || req.headers.pass != "test") {
    res.status(403).json({
      msg: "Error auth",
    });
  } else {
    next();
  }
};

const kidneyMiddleware = (req, res, next) => {
  if (req.query.KidneyId != 1 && req.query.KidneyId != 2) {
    res.status(403).json({
      msg: "wrong kidney nigga",
    });
  } else {
    next();
  }
};
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json({
    msg: "Your kiddney is healthy",
  });
});

app.listen(1000);
