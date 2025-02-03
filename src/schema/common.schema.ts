import { Types } from "mongoose";
import { z } from "zod";

export const objectIdPathParamsSchema = z.object({
  id: z.string().refine((id) => Types.ObjectId.isValid(id)),
});
