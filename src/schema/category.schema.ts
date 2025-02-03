import { z } from "zod";

const categoryNameSchema = z.string().min(1).max(20);
const categoryRestaurantSchema = z.string().min(1).max(20).or(z.number());

export const CreateCategoryRequestBodySchema = z.object({
  name: categoryNameSchema,
  restaurant: categoryRestaurantSchema,
});

export const FullyUpdateCategoryRequestBodySchema =
  CreateCategoryRequestBodySchema.required();

export const PartiallyUpdateCategoryRequestBodySchema =
  CreateCategoryRequestBodySchema.optional();

export const CategoryQueryParamsSchema = z.object({
  populate: z.string(),
  restaurant: z.string().min(1).max(20).or(z.number()),
});
