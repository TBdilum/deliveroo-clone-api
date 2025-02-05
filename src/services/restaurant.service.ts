import mongoose from "mongoose";
import Restaurant, { IRestaurant } from "../models/restaurant.model";
import { CreateModel } from "../types/mongoose.types";
import { v4 as uuidv4 } from "uuid";

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data: CreateModel<IRestaurant>) => {
  return Restaurant.create({ ...data, orgId: uuidv4() });
};

const findById = async (orgID: string) => {
  const input = mongoose.Types.ObjectId.isValid(orgID)
    ? { _id: orgID }
    : { name: orgID };
  return Restaurant.find(input);
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
