const Restaurant = require("../models/restaurant.model");

const createNew = async (name, description) => {
  return Restaurant.create({
    name: name,
    description: description,
  });
};

const findAll = async () => {
  8;
  return Restaurant.find();
};

const fullUpdateRestaurant = async (id, name, description) => {
  return Restaurant.findByIdAndUpdate(
    id,
    {
      name: name,
      description: description,
    },
    { new: true },
  );
};

const getRestaurant = async (id) => {
  return Restaurant.findById(id);
};

const partialUpdateRestaurant = async (id, name, description) => {
  return Restaurant.findByIdAndUpdate(id, { name, description }, { new: true });
};

const deleteRestaurant = async (id) => {
  const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
  console.log(`Deleted restaurant: ${deletedRestaurant.name}`);
  return deletedRestaurant;
};

module.exports = {
  getRestaurant,
  partialUpdateRestaurant,
  fullUpdateRestaurant,
  createNew,
  findAll,
  deleteRestaurant,
};
