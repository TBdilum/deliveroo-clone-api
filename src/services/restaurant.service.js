const Restaurant = require("../models/restaurant.model");

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data) => {
  return Restaurant.create(data);
};

const findById = async (id) => {
  return Restaurant.findById(id);
};

const findByIdAndUpdate = async (id, data) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id) => {
  return Restaurant.findByIdAndDelete(id, { new: true });
};

module.exports = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findByIdAndDelete,
};
