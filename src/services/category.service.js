const Category = require("../models/category.model");

const findAll = async (filters, populate) => {
  return Category.find(filters).populate(populate);
};

const createNew = async (data) => {
  return Category.create(data);
};

const findById = async (id) => {
  return Category.findById(id);
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
