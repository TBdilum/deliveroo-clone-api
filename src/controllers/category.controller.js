const categoryService = require("../services/category.service");
const restaurantService = require("../services/restaurant.service");

const getAllCategories = async (req, res) => {
  try {
    const filters = {};

    if (req.query.restaurant) {
      filters.restaurant = req.query.restaurant;
    }

    if (req.query.dishes) {
      filters.dishes = req.query.dishes;
    }
    const categoriesArray = await categoryService.findAll(filters);

    if (!categoriesArray) {
      res.json({
        message: "No Category found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: categoriesArray,
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
    const foundRestaurant = await restaurantService.findById(
      req.query.restaurant,
    );

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not Found",
      });

      return;
    }

    const createdCategory = await categoryService.createNew(req.body);

    res.status(201).json({
      message: "successfully created",
      data: createdCategory,
      restaurant: foundRestaurant.restaurant,
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
    const foundCategory = await categoryService.findById({
      ...req.params,
      ...req.body,
      ...req.query,
    });

    if (!foundCategory) {
      res.json({
        message: "Category not found!",
      });
    }

    res.status(200).json({
      message: "OK",
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
      { ...req.body },
    );

    if (!updatedCategory) {
      res.json({
        message: "Category not found!",
      });
      return;
    }
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
    const patchedCategory = await categoryService.findAndUpdatePartially(
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
