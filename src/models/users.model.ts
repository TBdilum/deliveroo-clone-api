import { ObjectId, Schema, model } from "mongoose";

export type IUsers = {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;

  name: string;
  password: string;
};

const usersSchema = new Schema<IUsers>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Users = model("Users", usersSchema);

export default Users;
