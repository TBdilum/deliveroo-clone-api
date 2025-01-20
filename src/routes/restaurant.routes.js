const express = require("express");
const router = express.Router();

router.get("/restaurants", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    message: "These are all the restaurants",
    queryParams: queryParams,
  });
});

router.post("/restaurant/:id", (req, res) => {
  const queryParams = req.querys;
  res.status(201).json({
    pathParams: req.params,
    message: `Create a restaurant`,
    queryParams: queryParams,
  });
});

router.put("/restaurant/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    pathParams: req.params,
    message: "Update a restaurant.",
    queryParams: queryParams,
  });
});

router.get("/restaurant/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    pathParams: req.params,
    message: "Get a restaurant.",
    queryParams: queryParams,
  });
});

router.patch("/restaurant/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    pathParams: req.params,
    message: "Patch a restaurant.",
    queryParams: queryParams,
  });
});

router.delete("/restaurant/:id", (req, res) => {
  const queryParams = req.query;
  res.status(200).json({
    pathParams: req.params,
    message: "Delete a restaurant",
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
