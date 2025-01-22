const categoryService = require("../services/category.service");

const getAllCategories = async (req, res) => {
  try {
    const CategoriesArray = await categoryService.findAllCategories();

    res.status(200).json({
      message: "success",
      data: CategoriesArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewCategory = async (req, res) => {
  try {
    const createdCategory = await categoryService.createNewCategory(
      req.body.name,
      req.body.description,
    );
    res.status(201).json({
      message: "successfully created",
      data: createdCategory,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const foundCategory = await categoryService.getCategory(req.params.id);
    res.status(200).json({
      message: "success",
      data: foundCategory,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateCategoryFully = async (req, res) => {
  try {
    const updatedCategory = await categoryService.fullUpdateCategory(
      req.params.id,
      req.body.name,
      req.body.description,
    );
    res.status(200).json({
      message: "Updated Category completely",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateCategoryPartially = async (req, res) => {
  try {
    const patchedCategory = await categoryService.partialUpdateCategory(
      req.params.id,
      req.body.name,
      req.body.description,
    );
    res.status(200).json({
      message: "updated a Category partially",
      data: patchedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id);
    res.status(200).json({
      message: "Deleted",
      data: deletedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllCategories,
  createNewCategory,
  getCategory,
  updateCategoryPartially,
  updateCategoryFully,
  deleteCategory,
};
