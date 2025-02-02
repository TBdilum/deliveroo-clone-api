import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  restaurant: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Restaurant",
  },
});

categorySchema.virtual("dishes", {
  ref: "Dish",
  localField: "_id",
  foreignField: "category",
});

categorySchema.set("toJSON", { virtuals: true });

const Category = mongoose.model("Category", categorySchema);

export default Category;
