const express = require("express");
const router = express.Router();
const Post = require("../models/post");
console.log("%%%%%%%%%", Post);
///ROUTES, responds to a request made to a specific address

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = Post({
    title: req.body.title,
    description: req.body.description,
  });

  ///save to database:
  try {
    const savedPost = await post();
    res.json(savedPost);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
