import express from "express";
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

router.post("/", createNewDish);

router.put("/:id", updateDishFully);

router.get("/:id", getADish);

router.patch("/:id", updateDishPartially);

router.delete("/:id", deleteDish);

export default router;
