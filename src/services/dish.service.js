const Dish = require("../models/dish.model");
const Restaurant = require("../models/restaurant.model");

const createNewDish = async (
  restaurantId,
  name,
  description,
  calories,
  price,
) => {
  const newDish = await Dish.create({
    name: name,
    description: description,
    calories: calories,
    price: price,
  });

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(
    restaurantId,
    {
      $push: { dishes: newDish._id },
    },
    { new: true },
  ).populate("dishes");

  return { newDish, updatedRestaurant };
};

const findAllDishes = async () => {
  return Dish.find();
};

const fullUpdateDish = async (id, name, description) => {
  return Dish.findByIdAndUpdate(
    id,
    {
      name: name,
      description: description,
    },
    { new: true },
  );
};

const getDish = async (id) => {
  return Dish.findById(id);
};

const partialUpdateDish = async (id, name, description) => {
  return Dish.findByIdAndUpdate(id, { name, description }, { new: true });
};

const deleteDish = async (id) => {
  const deletedDish = await Dish.findByIdAndDelete(id);
  console.log(`Deleted Dish: ${deletedDish.name}`);
  return deletedDish;
};

module.exports = {
  getDish,
  partialUpdateDish,
  fullUpdateDish,
  createNewDish,
  findAllDishes,
  deleteDish,
};
