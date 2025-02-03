import express from "express";
import categoryController from "../controllers/category.controller";
import validate from "../middleware/req.validate";
import { categorySchema, deleteCategorySchema, updateCategorySchema } from "../validations/category.validation";
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

router.post("/",validate(categorySchema) , createNewCategory);

router.put("/:id",validate(categorySchema) , updateCategoryFully);

router.get("/:id", getCategory);

router.patch("/:id", validate(updateCategorySchema) ,updateCategoryPartially);

router.delete("/:id",validate(deleteCategorySchema) ,deleteCategory);

export default router;
