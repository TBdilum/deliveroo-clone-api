const dishService = require("../services/dish.service");
const categoryService = require("../services/category.service");

const getAllDishes = async (req, res) => {
  try {
    const filters = {};

    if (req.query.restaurant) {
      filters.restaurant = req.query.restaurant;
    }

    if (req.query.category) {
      filters.category = req.query.category;
    }

    const dishesArray = await dishService.findAll(filters);

    res.status(200).json({
      message: "OK",
      data: dishesArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewDish = async (req, res) => {
  try {
    const foundCategory = await categoryService.findById(req.query.category);

    if (!foundCategory) {
      res.status(404).json({
        message: "Category Not Found",
      });

      return;
    }

    const createdDish = await dishService.createNew({
      ...req.body,
      category: foundCategory.name,
      restaurant: foundCategory.restaurant,
    });

    res.status(201).json({
      message: "Dish Created",
      data: createdDish,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getADish = async (req, res) => {
  try {
    const foundDish = await dishService
      .getDish({ ...req.params, ...req.body, ...req.query })
      .populate("category", "name");

    if (!foundDish) {
      res.json({
        message: "Dish not Found!",
      });
      return;
    }
    res.status(200).json({
      message: "Dish Found!",
      data: foundDish,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateDishFully = async (req, res) => {
  try {
    const updatedDish = await dishService.fullUpdateDish(
      { ...req.params.id, ...req.query.id },
      { ...req.query, ...req.body },
    );

    if (!updatedDish) {
      res.json({
        message: "Dish not found!",
      });
    }
    res.status(200).json({
      message: "Updated Dish completely",
      data: updatedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateDishPartially = async (req, res) => {
  try {
    const patchedDish = await dishService.partialUpdateDish(
      req.params.id,
      req.body.name,
      req.body.description,
    );
    res.status(200).json({
      message: "updated a Dish partially",
      data: patchedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const deletedDish = await dishService.deleteDish(req.params.id);
    res.status(200).json({
      message: "Deleted",
      data: deletedDish,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllDishes,
  createNewDish,
  getADish,
  updateDishPartially,
  updateDishFully,
  deleteDish,
};
