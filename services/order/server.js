const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

let orders = [];

app.get("/health", (req, res) => res.send("OK"));

app.post("/", async (req, res) => {
  const { productId } = req.body;

  try {
    const response = await axios.get("http://product:4001/products");
    const product = response.data.find(p => p.id === productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    orders.push({ product });

    res.json({ message: "Order placed", product });
  } catch (err) {
    res.status(500).json({ message: "Error contacting product service" });
  }
});

app.listen(4002, () => console.log("Order service on 4002"));
