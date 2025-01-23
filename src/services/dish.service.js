const Dish = require("../models/dish.model");

const findAll = async (filters) => {
  return Dish.find(filters);
};

const createNew = async (data) => {
  return await Dish.save(data);
};

const findById = async (data) => {
  return Dish.find(data);
};

const findByIdAndUpdate = async (id, data) => {
  return Dish.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id) => {
  return Dish.findByIdAndDelete(id, { new: true });
};

module.exports = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findByIdAndDelete,
};
