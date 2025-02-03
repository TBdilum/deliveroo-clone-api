import express from "express";
import validate from "../middleware/req.validate";
import {
  deleteDishSchema,
  dishSchema,
  updateDishSchema,
} from "../validations/dish.validation";
import {
  getAllDishes,
  createNewDish,
  getADish,
  updateDishPartially,
  updateDishFully,
  deleteDish,
} from "../controllers/dish.controller";

const router = express.Router();

router.get("/", getAllDishes);

router.post("/", validate(dishSchema), createNewDish);

router.put("/:id", validate(dishSchema), updateDishFully);

router.get("/:id", getADish);

router.patch("/:id", validate(updateDishSchema), updateDishPartially);

router.delete("/:id", validate(deleteDishSchema), deleteDish);

export default router;
