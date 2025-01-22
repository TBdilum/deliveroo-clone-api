const Restaurant = require("../models/restaurant.model");

const createNew = async (name, description) => {
  return Restaurant.create({
    name: name,
    description: description,
  });
};

const findAll = async () => {
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
  const updatedFields = (name, description);
  return Restaurant.findByIdAndUpdate(id, updatedFields, { new: true });
};

module.exports = {
  getRestaurant,
  partialUpdateRestaurant,
  fullUpdateRestaurant,
  createNew,
  findAll,
};
