const express = require("express");
const router = express.Router();

const {
  getAllRestaurants,
  createNewRestaurant,
  updateARestaurantFully,
  getARestaurant,
  updateARestaurantPartially,
  deleteARestaurant,
} = require("../controllers/restaurant.controller");

router.get("/", getAllRestaurants);

router.post("/", createNewRestaurant);

router.put("/:id", updateARestaurantFully);

router.get("/:id", getARestaurant);

router.patch("/:id", updateARestaurantPartially);

router.delete("/:id", deleteARestaurant);

module.exports = router;
