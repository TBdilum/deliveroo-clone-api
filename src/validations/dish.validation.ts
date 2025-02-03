import {z} from "zod";


export const dishSchema = z.object({
    body: z.object({
        name: z.string().min(4,  "Name must be at least 4 characters").max(20, "Name can not exceed more than 20 characters"),
        description: z.string().optional(),
        price: z.number().min(1, "Price must be greater than 0"),
        category: z.string().min(4,  "Name must be at least 4 characters").max(20, "Name can not exceed more than 20 characters"),
        restaurant: z.string().min(4,  "Name must be at least 4 characters").max(20, "Name can not exceed more than 20 characters"),
    })
});

export const updateDishSchema = dishSchema.partial();

export const deleteDishSchema = z.object({
    params: z.object({
        id: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ID"),
    })
})