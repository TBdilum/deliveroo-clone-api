const express = require("express");
const Category = require("../models/category.model.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categoriesArray = await Category.find();
    res.status(200).json({
      message: "success",
      data: categoriesArray,
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
    const createdCategory = await Category.create({
      name: req.body.name,
    });
    res.status(201).json({
      message: "successfully created",
      data: createdCategory,
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
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true },
    );
    res.status(200).json({
      message: "Updated a Category completely",
      data: updatedCategory,
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
    const foundCategory = await Category.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: foundCategory,
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
    const patchedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true },
    );
    res.status(200).json({
      message: "updated a Category partially",
      data: patchedCategory,
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
    const deletedCategory = await Category.findByIdAndDelete(
      req.params.id,
    ).select("name");
    console.log(`Deleted Category: ${deletedCategory.name}`);
    res.status(200).json({
      message: "Deleted",
      data: deletedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
