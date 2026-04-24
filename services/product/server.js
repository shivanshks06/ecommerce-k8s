const express = require("express");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

app.get("/health", (req, res) => res.send("OK"));

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json({ message: "Product added" });
});

app.listen(4001, () => console.log("Product service on 4001"));