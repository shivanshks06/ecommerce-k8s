const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecret";
let orders = [];

// Middleware (JWT)
app.use((req, res, next) => {
  if (req.method === "GET") return next();

  const token = req.headers.authorization;

  if (!token) return res.status(401).send("No token");

  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).send("Invalid token");
  }
});

// Place order
app.post("/", async (req, res) => {
  const { productId } = req.body;

  try {
    const response = await axios.get("http://product:4001/products");
    const product = response.data.find(p => p.id === productId);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    const order = { product };
    orders.push(order);

    res.json({ message: "Order placed", order });
  } catch {
    res.status(500).json({ message: "Service error" });
  }
});

// Get orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(4002, () => console.log("Order service running"));
