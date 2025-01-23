const restaurantService = require("../services/restaurant.service");

const getAllRestaurants = async (req, res) => {
  try {
    const filters = {};

    if (req.query.category) {
      filters.category = req.query.category;
    }
    const restaurantsArray = await restaurantService.findAll(filters);

    if (!restaurantsArray) {
      res.json({
        message: "No Restaurant found",
      });
      return;
    }

    res.status(200).json({
      message: "OK",
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
    const createdRestaurant = await restaurantService.createNew(req.body);
    res.status(201).json({
      message: "Created",
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
    const foundRestaurant = await restaurantService.findById({
      ...req.params,
      ...req.body,
      ...req.query,
    });

    if (!foundRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
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
    const updatedRestaurant = await restaurantService.findByIdAndUpdate(
      { ...req.params.id, ...req.query.id },
      { ...req.query, ...req.body },
    );

    if (!updatedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "Updated Restaurant",
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
    const updatedRestaurant =
      await restaurantService.findByIdAndUpdatePartially(
        req.params.id,
        req.body,
      );

    if (!updatedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: updatedRestaurant,
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
    const deletedRestaurant = await restaurantService.findByIdAndDelete(
      req.params.id,
      req.body,
    );

    if (!deletedRestaurant) {
      res.status(404).json({
        message: "Restaurant Not found",
      });

      return;
    }

    res.status(200).json({
      message: "OK",
      data: deletedRestaurant,
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllRestaurants,
  createNewRestaurant,
  getARestaurant,
  updateARestaurantPartially,
  updateARestaurantFully,
  deleteARestaurant,
};
