const express = require("express");
const commonRoutes = require("./routes/common.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishRoutes = require("./routes/dish.routes");
const categoryRoutes = require("./routes/category.routes");

const app = express();
const port = 3000;

app.use("/restaurants", restaurantRoutes);
app.use("/dishes", dishRoutes);
app.use("/categories", categoryRoutes);

app.use(commonRoutes);

app.listen(port, () => {
  console.log(`Deliveroo-api listening on port ${port}`);
});
