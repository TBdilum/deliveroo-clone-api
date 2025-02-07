import Category from "../models/category.model";

const findAll = async (filters: any, populate: any) => {
  return Category.find(filters).populate(populate);
};

const createNew = async (data: any) => {
  return Category.create(data);
};

const findById = async (id: string) => {
  return Category.findById(id);
};

const findByIdAndUpdate = async (id: string, data: any) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};

const findAndUpdatePartially = async (id: string, data: any) => {
  return Category.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id: string) => {
  return Category.findByIdAndDelete(id, { new: true });
};

export const categoryService = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findAndUpdatePartially,
  findByIdAndDelete,
};
