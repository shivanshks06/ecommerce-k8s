const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecret";
let users = [];

// Health
app.get("/health", (req, res) => res.send("OK"));

// Register
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Missing fields" });

  users.push({ username, password });
  res.json({ message: "User registered" });
});

// Login
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

app.listen(4000, () => console.log("Auth service running"));
