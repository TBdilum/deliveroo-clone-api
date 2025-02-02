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

router.put("/:id", updateDishFully);

router.get("/:id", getADish);

router.patch("/:id", updateDishPartially);

router.delete("/:id", deleteDish);

module.exports = router;
