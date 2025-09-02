import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
