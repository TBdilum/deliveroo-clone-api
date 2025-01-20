const express = require("express");
const app = express();
const port = 4000;

app.get("/restaurants", (req, res) => {
  res.send("These are all the restaurants!");
});

app.post("/restaurants", (req, res) => {
  res.send("Create a new restaurant.");
});

app.put("/restaurants/1", (req, res) => {
  res.send("Update a restaurant.");
});

app.get("/restaurants/1", (req, res) => {
  res.send("Get restaurant 1.");
});

app.patch("/restaurants/1", (req, res) => {
  res.send("Patch restaurant 1.");
});

app.delete("/restaurants/1", (req, res) => {
  res.send("Delete restaurant 1.");
});

app.listen(port, () => {
  console.log(`Deliveroo restaurants running on port ${port}`);
});
