const Category = require("../models/category.model");

const createNewCategory = async (name, restaurant, categoryId) => {
  const newCategory = await Category.create({
    name: name,
    restaurant: restaurant,
  });

  const updatedCategory = await updatedCategory
    .findByIdAndUpdate(
      categoryId,
      {
        $push: { categories: newCategory._id },
      },
      { new: true },
    )
    .populate("categories");

  return { newCategory, updatedCategory };
};

const findAllCategories = async () => {
  return Category.find();
};

const fullUpdateCategory = async (id, name, description) => {
  return Category.findByIdAndUpdate(
    id,
    {
      name: name,
      description: description,
    },
    { new: true },
  );
};

const getCategory = async (id) => {
  return Category.findById(id);
};

const partialUpdateCategory = async (id, name, description) => {
  return Category.findByIdAndUpdate(id, { name, description }, { new: true });
};

const deleteCategory = async (id) => {
  const deletedCategory = await Category.findByIdAndDelete(id);
  console.log(`Deleted Category: ${deletedCategory.name}`);
  return deletedCategory;
};

module.exports = {
  getCategory,
  partialUpdateCategory,
  fullUpdateCategory,
  createNewCategory,
  findAllCategories,
  deleteCategory,
};
