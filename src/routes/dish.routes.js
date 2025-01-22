const express = require("express");
const {
  getAllDishes,
  createNewDish,
  getADish,
  deleteDish,
  updateDishPartially,
} = require("../controllers/dish.controller.js");
const {
  updateARestaurantFully,
} = require("../controllers/restaurant.controller.js");
const router = express.Router();

router.get("/", getAllDishes);

router.post("/:id", createNewDish);

router.put("/:id", getADish);

router.get("/:id", updateARestaurantFully);

router.patch("/:id", updateDishPartially);

router.delete("/:id", deleteDish);

module.exports = router;
