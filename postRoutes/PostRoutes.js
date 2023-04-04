const Post = require("../models/postSchema");
const PostRoutes = require("express").Router();
PostRoutes.get("/", async (req, res) => {
  try {
    const getAll = await Post.find().sort({ _id: "-1" });
    res.status(200).json({
      status: "Success",
      data: getAll,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
});
PostRoutes.post("/add", async (req, res) => {
  try {
    const postToAdded = await Post.create({
      label: req.body.label,
      url: req.body.url,
    });
    res.status(201).json({
      status: "Successfully added",
      data: postToAdded,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
});

PostRoutes.delete("/:id", async (req, res) => {
  try {
    const toBeDelete = await Post.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: "Successfully Deleted",
      data: toBeDelete,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
});
module.exports = PostRoutes;
