import express from "express";
import categoryController from "../controllers/category.controller";
const {
  getAllCategories,
  createNewCategory,
  getCategory,
  updateCategoryPartially,
  updateCategoryFully,
  deleteCategory,
} = categoryController;

const router = express.Router();

router.get("/", getAllCategories);

router.post("/", createNewCategory);

router.put("/:id", updateCategoryFully);

router.get("/:id", getCategory);

router.patch("/:id", updateCategoryPartially);

router.delete("/:id", deleteCategory);

export default router;
