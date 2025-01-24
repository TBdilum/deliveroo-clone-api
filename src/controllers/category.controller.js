const categoryService = require("../services/category.service");
const restaurantService = require("../services/restaurant.service");

const getAllCategories = async (req, res) => {
  try {
    const filters = {};

    if (req.query.restaurant) {
      filters.restaurant = req.query.restaurant;
    }

    const categoriesArray = await categoryService.findAll(
      filters,
      req.query.populate,
    );

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
      req.body.restaurant,
    );

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not Found",
      });

      return;
    }

    const createdCategory = await categoryService.createNew(req.body);

    res.status(201).json({
      message: "Created",
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
    const foundCategory = await categoryService.findById(req.params.id);

    if (!foundCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
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
    const foundRestaurant = await restaurantService.findById(
      req.body.restaurant,
    );

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not Found",
      });

      return;
    }

    const updatedCategory = await categoryService.findByIdAndUpdate(
      req.params.id,
      req.body,
    );

    if (!updatedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }
    res.status(200).json({
      message: "OK",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateCategoryPartially = async (req, res) => {
  try {
    if (req.body.restaurant) {
      const foundRestaurant = await restaurantService.findById(
        req.body.restaurant,
      );

      if (!foundRestaurant) {
        res.status(404).json({
          message: "Restaurant Not Found",
        });

        return;
      }
    }

    const patchedCategory = await categoryService.findAndUpdatePartially(
      req.params.id,
      req.body,
    );

    if (!patchedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
      data: patchedCategory,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryService.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: deletedCategory,
    });
    return;
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
