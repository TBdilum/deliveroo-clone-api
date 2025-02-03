import express from "express";
import ValidateBody from "../middleware/validate-body.middleware";
import {
  getAllDishes,
  createNewDish,
  getADish,
  updateDishPartially,
  updateDishFully,
  deleteDish,
} from "../controllers/dish.controller";
import {
  CreateDishRequestBodySchema,
  FullyUpdateDishRequestBodySchema,
  PartiallyUpdateDishRequestBodySchema,
} from "../schema/dish.schema";
import ValidateParams from "../middleware/validate-params.middleware";
import { objectIdPathParamsSchema } from "../schema/common.schema";

const router = express.Router();

router.get("/", getAllDishes);

router.post("/", ValidateBody(CreateDishRequestBodySchema), createNewDish);

router.put(
  "/:id",
  ValidateParams(objectIdPathParamsSchema),
  ValidateBody(FullyUpdateDishRequestBodySchema),
  updateDishFully,
);

router.get("/:id", ValidateParams(objectIdPathParamsSchema), getADish);

router.patch(
  "/:id",
  ValidateParams(objectIdPathParamsSchema),
  ValidateBody(PartiallyUpdateDishRequestBodySchema),
  updateDishPartially,
);

router.delete("/:id", ValidateParams(objectIdPathParamsSchema), deleteDish);

export default router;
