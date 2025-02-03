import { z } from "zod";

export const restaurantSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(4, "Name must be at least 3 characters")
      .max(20, "Name can not exceed more than 20 characters"),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    openingAt: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (HH:MM)"),
    closingAt: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (HH:MM)"),
  }),
});

export const updateRestaurantSchema = restaurantSchema.partial();

export const deleteRestaurantSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ID"),
  }),
});
