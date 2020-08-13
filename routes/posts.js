const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

///ROUTES, responds to a request made to a specific address

router.get("/", (req, res) => {
  res.send("postssaa");
});

router.post("/", (req, res) => {
  const post = Post;
});

module.exports = router;
