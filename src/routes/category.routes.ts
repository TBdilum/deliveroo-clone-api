import express from "express";
import categoryController from "../controllers/category.controller";
import validate from "../middleware/validate-body.middleware";
import {
  CreateCategoryRequestBodySchema,
  FullyUpdateCategoryRequestBodySchema,
  PartiallyUpdateCategoryRequestBodySchema,
  deleteCategorySchema,
} from "../schema/category.schema";
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

router.post("/", validate(CreateCategoryRequestBodySchema), createNewCategory);

router.put(
  "/:id",
  validate(FullyUpdateCategoryRequestBodySchema),
  updateCategoryFully,
);

router.get("/:id", getCategory);

router.patch(
  "/:id",
  validate(PartiallyUpdateCategoryRequestBodySchema),
  updateCategoryPartially,
);

router.delete("/:id", validate(deleteCategorySchema), deleteCategory);

export default router;
