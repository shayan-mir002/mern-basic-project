const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// ✅ Connect to Database
connectDB();

// ✅ MIDDLEWARE FIRST
app.use(cors());
app.use(express.json());



// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ ROUTES
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
