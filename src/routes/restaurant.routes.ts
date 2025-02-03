import express from "express";
const router = express.Router();

import {
  getAllRestaurants,
  createNewRestaurant,
  getARestaurant,
  updateARestaurantPartially,
  updateARestaurantFully,
  deleteARestaurant,  
} from "../controllers/restaurant.controller";

router.get("/", getAllRestaurants);

router.post("/", createNewRestaurant);

router.put("/:id", updateARestaurantFully);

router.get("/:id", getARestaurant);

router.patch("/:id", updateARestaurantPartially);

router.delete("/:id", deleteARestaurant);

export default router;
