const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// Health check
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Register
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "User registered" });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: "Login successful", token: "dummy-token" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(4000, () => console.log("Auth service running on 4000"));