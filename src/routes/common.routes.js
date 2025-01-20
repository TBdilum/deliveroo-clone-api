const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    message: "Hello world!",
    queryParams: queryParams,
  });
});

router.all("*", (req, res) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

module.exports = router;
