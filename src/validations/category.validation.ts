import {z} from "zod";

export const categorySchema = z.object({
    body: z.object({
        name: z.string().min(4,  "Name must be at least 4 characters").max(20, "Name can not exceed more than 10 characters"),
        restaurant: z.string().min(4,  "Name must be at least 4 characters").max(20, "Name can not exceed more than 20 characters"),
    })
});

export const updateCategorySchema = categorySchema.partial();