const express = require("express");
const Restaurant = require("../models/restaurant.model");
const {
  getAllRestaurants,
  createNewRestaurant,
  updateARestaurantFully,
  getARestaurant,
  updateARestaurantPartially,
} = require("../controllers/restaurant.controller");
const router = express.Router();

router.get("/", getAllRestaurants);

router.post("/", createNewRestaurant);

router.put("/:id", updateARestaurantFully);

router.get("/:id", getARestaurant);

router.patch("/:id", updateARestaurantPartially);

router.delete("/:id", async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(
      req.params.id,
    ).select("name");
    console.log(`Deleted restaurant: ${deletedRestaurant.name}`);
    res.status(200).json({
      message: "Deleted",
      data: deletedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
