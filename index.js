const express = require("express");
const Post = require("./models/postSchema");
const app = express();
const PostRoutes = require("./postRoutes/PostRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, () => console.log("Database Connected"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/post", PostRoutes);
app.get("/", async (req, res) => {
  res.send("Hi");
});
app.listen("8000", () => console.log("Server Connected at 8000"));
