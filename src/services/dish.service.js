const Dish = require("../models/dish.model");

const findAll = async (filters, ifPopulate) => {
  if (ifPopulate) {
    return Dish.find(filters).populate("category restaurant", "name");
  }
  return Dish.find(filters);
};

const createNew = async (data) => {
  return await Dish.create(data);
};

const findById = async (id) => {
  return Dish.findById(id);
};

const findByIdAndUpdate = async (id, data) => {
  return Dish.findByIdAndUpdate(id, data, { new: true });
};

const findAndUpdatePartially = async (id, data) => {
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
  findAndUpdatePartially,
  findByIdAndDelete,
};
