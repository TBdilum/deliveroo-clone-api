const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  restaurant: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Restaurant",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
