const req = require("express/lib/request");
const restaurantService = require("../services/restaurant.service");

const getAllRestaurants = async (req, res) => {
  try {
    const restaurantsArray = await restaurantService.findAll();

    res.status(200).json({
      message: "success",
      data: restaurantsArray,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createNewRestaurant = async (req, res) => {
  try {
    const createdRestaurant = await restaurantService.createNew(
      req.body.name,
      req.body.description,
    );
    res.status(201).json({
      message: "successfully created",
      data: createdRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getARestaurant = async (req, res) => {
  try {
    const foundRestaurant = await restaurantService.getRestaurant(
      req.params.id,
    );
    res.status(200).json({
      message: "success",
      data: foundRestaurant,
    });
  } catch (error) {
    console.log(error, "error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateARestaurantFully = async (req, res) => {
  try {
    const updatedRestaurant = await restaurantService.getRestaurant(
      req.params.id,
      req.body.name,
      req.body.description,
    );
    res.status(200).json({
      message: "Updated restaurant completely",
      data: updatedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateARestaurantPartially = async (req, res) => {
  try {
    const patchedRestaurant = await restaurantService.partialUpdateRestaurant(
      req.params.id,
      req.body.name,
      req.body.description,
    );
    res.status(200).json({
      message: "updated a restaurant partially",
      data: patchedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteARestaurant = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAllRestaurants,
  createNewRestaurant,
  getARestaurant,
  updateARestaurantPartially,
  updateARestaurantFully,
  deleteARestaurant,
};
