const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "get all restaurants",
    queryParams: req.query,
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "create new restaurant",
    queryParams: req.query,
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "update restaurant completely",
    queryParams: req.query,
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "get a single restaurant",
    queryParams: req.query,
  });
});

router.patch("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "update a restaurant partially",
    queryParams: req.query,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "delete restaurant",
    queryParams: req.query,
  });
});

module.exports = router;
