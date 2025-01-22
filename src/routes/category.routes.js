const express = require("express");
const {
  getAllCategories,
  createNewCategory,
  updateCategoryFully,
  updateCategoryPartially,
  getCategory,
  deleteCategory,
} = require("../controllers/category.controller.js");
const router = express.Router();

router.get("/", getAllCategories);

router.post("/:id", createNewCategory);

router.put("/:id", updateCategoryFully);

router.get("/:id", getCategory);

router.patch("/:id", updateCategoryPartially);

router.delete("/:id", deleteCategory);

module.exports = router;
