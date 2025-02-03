import express from "express";
import mongoose from "mongoose";

require("dotenv").config();

import commonRoutes from "./routes/common.routes";
import restaurantRoutes from "./routes/restaurant.routes";
import dishRoutes from "./routes/dish.routes";
import categoryRoutes from "./routes/category.routes";
const app = express();
const port = 3000;


app.use(express.json());

app.use("/restaurants", restaurantRoutes);
app.use("/dishes", dishRoutes);
app.use("/categories", categoryRoutes);

app.use(commonRoutes);

const startServer = async () => {
  try {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not defined");
    }
    await mongoose.connect(databaseUrl);
    app.listen(port, () => {
      console.log(`deliveroo-api listening on port ${port}`);
    });
  } catch (error) {
    console.log(error, "error");
  }
};



startServer();
