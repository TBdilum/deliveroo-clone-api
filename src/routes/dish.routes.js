const express = require("express");
const router = express.Router();

router.get("/dishes", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    message: "These are all the Dishes!",
    queryParams: queryParams,
  });
});

router.post("/dishes", (req, res) => {
  const queryParams = req.query;
  res.status(201).json({
    message: "Create a new Dish.",
    queryParams: queryParams,
  });
});

router.put("/dishes/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    params: req.params,
    message: "Update Dish.",
    queryParams: queryParams,
  });
});

router.get("/dishes/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    params: req.params,
    message: "Get a Dish.",
    queryParams: queryParams,
  });
});

router.patch("/dishes/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    params: req.params,
    message: "Patch a Dish.",
    queryParams: queryParams,
  });
});

router.delete("/dishes/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    params: req.params,
    message: "Delete a Dish.",
    queryParams: queryParams,
  });
});

router.all("*", (req, res) => {
  res.status(404).json({
    params: req.params,
    message: "Route Not Found!",
  });
});

module.exports = router;
