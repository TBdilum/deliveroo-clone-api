const express = require("express");
const commonRoutes = require("./routes/common.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const dishesRoutes = require("./routes/dish.routes");

const app = express();
const port = 3000;

app.use(restaurantRoutes);
app.use(dishesRoutes);
app.use(commonRoutes);

app.listen(port, () => {
  console.log(`Deliveroo-api listening on port ${port}`);
});
