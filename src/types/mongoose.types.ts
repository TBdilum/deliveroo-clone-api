export type CreateModel<T> = Omit<
  T,
  "_id" | "createdAt" | "updatedAt" | "orgId"
>;

export default {};
