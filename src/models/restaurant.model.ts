import { ObjectId, Schema, model } from "mongoose";
import { UUID } from "mongodb";

export type IRestaurant = {
  _id: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  orgId: string;

  name: string;
  description?: string;
  tags: string[];
  openingAt: string;
  closingAt: string;
};

const restaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    tags: [String],
    openingAt: {
      type: String,
      required: true,
    },
    closingAt: {
      type: String,
      required: true,
    },
    orgId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
