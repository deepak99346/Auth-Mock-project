//  # Login route
import express from "express";
import { users } from "../config/users.js";
import { validateLogin } from "../middleware/validateLogin.js";

const router = express.Router();

// POST /login
router.post("/login", validateLogin, (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // For mock, we just return a success message
  return res.json({
    message: "Login successful",
    user: { id: user.id, username: user.username }
  });
});

export default router;
