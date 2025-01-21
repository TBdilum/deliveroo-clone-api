const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  id: Number,
});

const Category = mongoose.model("Restaurant", categorySchema);

module.exports = Category;
