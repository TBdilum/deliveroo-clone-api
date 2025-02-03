import { z } from "zod";

const restaurantNameSchema = z.string().min(1).max(20);
const restaurantDescriptionSchema = z.string().min(3).max(150);
const restaurantTagSchema = z.string().min(3).max(20);
const restaurantTimeSchema = z.string().time();

export const createRestaurantRequestBodySchema = z.object({
  name: restaurantNameSchema,
  description: restaurantDescriptionSchema.optional(),
  tags: z.array(restaurantTagSchema),
  openingAt: restaurantTimeSchema,
  closingAt: restaurantTimeSchema,
});

export const updateRestaurantFullyRequestBodySchema = z.object({
  name: restaurantNameSchema,
  description: restaurantDescriptionSchema.optional(),
  tags: z.array(restaurantTagSchema),
  openingAt: restaurantTimeSchema,
  closingAt: restaurantTimeSchema,
});

export const updateRestaurantPartiallyRequestBodySchema = z.object({
  name: restaurantNameSchema.optional(),
  description: restaurantDescriptionSchema.optional(),
  tags: z.array(restaurantTagSchema).optional(),
  openingAt: restaurantTimeSchema.optional(),
  closingAt: restaurantTimeSchema.optional(),
});
