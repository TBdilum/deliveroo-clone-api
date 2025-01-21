const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const commonRoutes = require("./routes/common.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishRoutes = require("./routes/dish.routes");
const categoryRoutes = require("./routes/category.routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/restaurants", restaurantRoutes);
app.use("/dishes", dishRoutes);
app.use("/categories", categoryRoutes);

app.use(commonRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(port, () => {
      console.log(`deliveroo-api listening on port ${port}`);
    });
  } catch (error) {
    console.log(error, "error");
  }
};

startServer();
