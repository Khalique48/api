// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET method to retrieve all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST method to add a new item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(items);
});

// DELETE method to remove an item by ID
app.delete("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.json({ message: "Item deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
