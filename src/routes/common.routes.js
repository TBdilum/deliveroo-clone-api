const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world!",
    pathParams: req.params,
  });
});

router.all("*", (req, res) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

module.exports = router;
