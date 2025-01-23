const Restaurant = require("../models/restaurant.model");

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data) => {
  return Restaurant.save(data);
};

const findById = async (data) => {
  return Restaurant.find(data);
};

const findByIdAndUpdate = async (id, data) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const findAndUpdatePartially = async (id, data) => {
  return Restaurant.findByIdAndUpdate(id, data);
};

const findByIdAndDelete = async (id) => {
  return Restaurant.findByIdAndDelete(id, { new: true });
};

module.exports = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findAndUpdatePartially,
  findByIdAndDelete,
};
