const express = require("express");
const Dish = require("../models/dish.model.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dishesArray = await Dish.find();
    res.status(200).json({
      message: "success",
      data: dishesArray,
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
    const createdDish = await Dish.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      calories: req.body.calories,
      category: req.body.category,
    });
    res.status(201).json({
      message: "successfully created",
      data: createdDish,
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
    const updatedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        calories: req.body.calories,
        category: req.body.category,
      },
      { new: true },
    );
    res.status(200).json({
      message: "Updated Dish completely",
      data: updatedDish,
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
    const foundDish = await Dish.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: foundDish,
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
    const patchedDish = await Dish.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true },
    );
    res.status(200).json({
      message: "updated a Dish partially",
      data: patchedDish,
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
    const deletedDish = await Dish.findByIdAndDelete(req.params.id).select(
      "name",
    );
    console.log(`Deleted Dish: ${deletedDish.name}`);
    res.status(200).json({
      message: "Deleted",
      data: deletedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
