import Restaurant from "../models/restaurant.model";

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data: any) => {
  return Restaurant.create(data);
};

const findById = async (id: number) => {
  return Restaurant.findById(id);
};

const findByIdAndUpdate = async (id: number, data: any) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id: number) => {
  return Restaurant.findByIdAndDelete(id, { new: true });
};

export const restaurantService = {
    findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findByIdAndDelete,
  
};

