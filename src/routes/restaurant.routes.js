const express = require("express");
const Restaurant = require("../models/restaurant.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const restaurantsArray = await Restaurant.find();
    res.status(200).json({
      message: "success",
      data: restaurantsArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdRestaurant = await Restaurant.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.status(201).json({
      message: "successfully created",
      data: createdRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
      },
      { new: true },
    );
    res.status(200).json({
      message: "Updated restaurant completely",
      data: updatedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundRestaurant = await Restaurant.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: foundRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedFields = req.body;
    const patchedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true },
    );
    res.status(200).json({
      message: "updated a restaurant partially",
      data: patchedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(
      req.params.id,
    ).select("name");
    console.log(`Deleted restaurant: ${deletedRestaurant.name}`);
    res.status(200).json({
      message: "Deleted",
      data: deletedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
