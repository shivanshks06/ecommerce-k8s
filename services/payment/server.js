const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));

app.post("/pay", (req, res) => {
  const { amount } = req.body;
  res.json({ message: `Payment of ${amount} successful` });
});

app.listen(4003, () => console.log("Payment service on 4003"));