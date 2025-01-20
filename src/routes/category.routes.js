const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "get all categories",
    queryParams: req.query,
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "create new category",
    queryParams: req.query,
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "update category completely",
    queryParams: req.query,
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "get a single category",
    queryParams: req.query,
  });
});

router.patch("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "update a category partially",
    queryParams: req.query,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    params: req.params,
    message: "delete category",
    queryParams: req.query,
  });
});

module.exports = router;
