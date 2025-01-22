const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  restaurant: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Restaurant",
  },
  dishes: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dish",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
