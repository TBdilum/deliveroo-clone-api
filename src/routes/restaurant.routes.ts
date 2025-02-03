import express from "express";
const router = express.Router();
import { restaurantSchema, updateRestaurantSchema } from "../validations/restaurant.validation";

import {
  getAllRestaurants,
  createNewRestaurant,
  getARestaurant,
  updateARestaurantPartially,
  updateARestaurantFully,
  deleteARestaurant,  
} from "../controllers/restaurant.controller";
import validate from "../middleware/req.validate";

router.get("/", getAllRestaurants);

router.post("/",validate(restaurantSchema) ,createNewRestaurant);

router.put("/:id", validate(restaurantSchema) ,updateARestaurantFully);

router.get("/:id", getARestaurant);

router.patch("/:id",validate(updateRestaurantSchema) , updateARestaurantPartially);

router.delete("/:id", deleteARestaurant);

export default router;
