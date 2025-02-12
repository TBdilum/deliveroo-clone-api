import Restaurant from "../models/restaurant.model";
import { CreateModel } from "../types/mongoose.types";
import Users, { IUsers } from "../models/users.model";

const findAll = async () => {
  return Restaurant.find();
};

const createNew = async (data: CreateModel<IUsers>) => {
  return Users.create({ ...data });
};

const findById = async (name: string) => {
  return Users.findOne({ name });
};

const findByIdAndUpdate = async (id: string, data: any) => {
  return Restaurant.findByIdAndUpdate(id, data, { new: true });
};

const findByIdAndDelete = async (id: string) => {
  return Restaurant.findByIdAndDelete(id, { new: true });
};

export const usersService = {
  findById,
  createNew,
  findAll,
  findByIdAndUpdate,
  findByIdAndDelete,
};
