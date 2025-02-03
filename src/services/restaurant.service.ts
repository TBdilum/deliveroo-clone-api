import Restaurant, { IRestaurant } from "../models/restaurant.model";
import { CreateModel } from "../types/mongoose.types";
import { v4 as uuidv4 } from "uuid";

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data: CreateModel<IRestaurant>) => {
  return Restaurant.create({ ...data, orgId: uuidv4() });
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
