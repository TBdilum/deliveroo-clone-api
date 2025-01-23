const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: String,
  description: String,
  calories: Number,
  price: Number,
  category: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  ],
  restaurant: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Restaurant",
    },
  ],
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
