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
  Categories: [
    {
      name: String,
      belongingRestaurant: String,
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
