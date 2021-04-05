const express = require("express");
const Books = require("./models/books");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/books");

env.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/books", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running on port 5000");
});
