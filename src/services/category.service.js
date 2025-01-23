const Category = require("../models/category.model");

const findAll = async (filters) => {
  return Category.find(filters);
};

const createNew = async (data) => {
  return Category.save(data);
};

const findById = async (data) => {
  return Category.find(data);
};

const findByIdAndUpdate = async (id, data) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};

const findAndUpdatePartially = async (id, data) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id) => {
  return Category.findByIdAndDelete(id, { new: true });
};

module.exports = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findAndUpdatePartially,
  findByIdAndDelete,
};
