const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  id: Number,
  price: Number,
  calories: Number,
  category: String,
  restaurant: String,
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
