const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  orgId: String,
  tags: String,
  openingAt: String,
  closingAt: String,
  dishes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Dish",
    },
  ],
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
