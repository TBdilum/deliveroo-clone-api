const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  id: Number,
  orgId: String,
  tags: String,
  openingAt: String,
  closingAt: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
