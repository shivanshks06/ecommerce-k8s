const express = require("express");
const app = express();

app.use(express.json());

// In-memory DB (for demo)
let users = [];

// ------------------ HEALTH CHECK ------------------
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ------------------ REGISTER ------------------
app.post("/auth/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ username, password });

  console.log("User registered:", username);

  res.json({ message: "User registered successfully" });
});

// ------------------ LOGIN ------------------
app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    console.log("Login success:", username);

    return res.json({
      message: "Login successful",
      token: "dummy-token"
    });
  }

  console.log("Login failed:", username);

  res.status(401).json({ message: "Invalid credentials" });
});

// ------------------ ROOT (optional debug) ------------------
app.get("/", (req, res) => {
  res.send("Auth Service Running");
});

// ------------------ START SERVER ------------------
app.listen(4000, () => {
  console.log("Auth service running on port 4000");
});