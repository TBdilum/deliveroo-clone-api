const dishService = require("../services/dish.service");

const getAllDishes = async (req, res) => {
  try {
    const dishesArray = await dishService.findAllDishes();

    res.status(200).json({
      message: "success",
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
    const createdDish = await dishService.createNewDish(
      req.params.id,
      req.body.name,
      req.body.description,
      req.body.calories,
      req.body.price,
    );
    res.status(201).json({
      message: "successfully created",
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
    const foundDish = await dishService.getDish(req.params.id);
    res.status(200).json({
      message: "success",
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
      req.params.id,
      req.body.name,
      req.body.description,
    );
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
