const express = require("express");
const app = express();
const port = 6000;

app.get("/dishes", (req, res) => {
  res.send("These are all the Dishes!");
});

app.post("/dishes", (req, res) => {
  res.send("Create a new Dishes.");
});

app.put("/dishes/1", (req, res) => {
  res.send("Update a Dishes.");
});

app.get("/dishes/1", (req, res) => {
  res.send("Get Dish 1.");
});

app.patch("/dishes/1", (req, res) => {
  res.send("Patch Dish 1.");
});

app.delete("/dishes/1", (req, res) => {
  res.send("Delete Dish 1.");
});

app.listen(port, () => {
  console.log(`Dishes running on port ${port}`);
});
