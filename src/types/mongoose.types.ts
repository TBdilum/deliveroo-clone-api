export type CreateModel<T> = Omit<T, "_id" | "createdAt" | "updatedAt">;

export default {};
