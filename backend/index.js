require("dotenv").config();
require("./src/models/User");
const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("./src/middleware/requireAuth");
const router = require("./src/routes/authRoutes");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.post("/", requireAuth, (req, res) => {
  res.send("welcome");
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`SERVER RUNNING ON PORT${process.env.PORT_NUMBER}`);
});
