import  Dish  from "../models/dish.model";

const findAll = async (filters: any, populate: any) => {
  return Dish.find(filters).populate(populate);
};

const createNew = async (data: any) => {
  return await Dish.create(data);
};

const findById = async (id: number) => {
  return Dish.findById(id);
};

const findByIdAndUpdate = async (id: number, data: any) => {
  return Dish.findByIdAndUpdate(id, data, { new: true });
};

const findAndUpdatePartially = async (id: number, data: any) => {
  return Dish.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id: number) => {
  return Dish.findByIdAndDelete(id, { new: true });
};

export const dishService = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findAndUpdatePartially,
  findByIdAndDelete,
};
