const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  calories: Number,
  price: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
