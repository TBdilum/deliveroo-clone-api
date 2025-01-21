const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  id: Number,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
