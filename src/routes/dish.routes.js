const express = require("express");
const {
  getAllDishes,
  createNewDish,
  getADish,
  deleteDish,
  updateDishPartially,
  updateDishFully,
} = require("../controllers/dish.controller.js");

const router = express.Router();

router.get("/", getAllDishes);

router.post("/", createNewDish);

router.put("/:id", getADish);

router.get("/:id", updateDishFully);

router.patch("/:id", updateDishPartially);

router.delete("/:id", deleteDish);

module.exports = router;
